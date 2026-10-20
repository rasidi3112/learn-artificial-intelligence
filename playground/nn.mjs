// A tiny, dependency-free neural network for the browser playground.
//
// Points (x, y in [-1, 1]) turned into a few input features, any number of fully connected hidden layers,
// and one sigmoid output trained with binary cross-entropy and plain
// mini-batch gradient descent. Small enough to read in one sitting, fast
// enough to redraw a decision boundary sixty times a second.
//
// Everything that uses randomness takes a seeded generator, so the same seed
// gives the same dataset and the same starting weights (and the tests can
// rely on it).

// mulberry32: a small, fast, seedable PRNG returning floats in [0, 1).
export function createRandom(seed = 1) {
    let a = seed >>> 0;
    return function random() {
        a = (a + 0x6d2b79f5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Standard normal sample (Box-Muller).
function gaussian(random) {
    const u = 1 - random();
    const v = random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// ---------------------------------------------------------------------------
// Activations: f(z) and its derivative written in terms of the output a = f(z)
// ---------------------------------------------------------------------------

export const ACTIVATIONS = {
    tanh: { f: z => Math.tanh(z), df: a => 1 - a * a },
    relu: { f: z => (z > 0 ? z : 0), df: a => (a > 0 ? 1 : 0) },
    sigmoid: { f: z => 1 / (1 + Math.exp(-z)), df: a => a * (1 - a) },
    linear: { f: z => z, df: () => 1 }
};

export const sigmoid = ACTIVATIONS.sigmoid.f;

// ---------------------------------------------------------------------------
// Datasets: points { x, y, label } with label 0 or 1, coordinates in [-1, 1]
// ---------------------------------------------------------------------------

const clamp = v => Math.max(-1, Math.min(1, v));

export const DATASETS = {
    circle(n, noise, random) {
        const points = [];
        for (let i = 0; i < n; i++) {
            const inner = i % 2 === 0;
            const r = inner ? random() * 0.45 : 0.65 + random() * 0.3;
            const angle = random() * 2 * Math.PI;
            points.push({
                x: clamp(r * Math.cos(angle) + gaussian(random) * noise * 0.3),
                y: clamp(r * Math.sin(angle) + gaussian(random) * noise * 0.3),
                label: inner ? 1 : 0
            });
        }
        return points;
    },
    xor(n, noise, random) {
        const points = [];
        for (let i = 0; i < n; i++) {
            let x = random() * 2 - 1;
            let y = random() * 2 - 1;
            // keep a small gap around the axes so the four quadrants read clearly
            x += x > 0 ? 0.05 : -0.05;
            y += y > 0 ? 0.05 : -0.05;
            points.push({
                x: clamp(x + gaussian(random) * noise * 0.3),
                y: clamp(y + gaussian(random) * noise * 0.3),
                label: x * y > 0 ? 1 : 0
            });
        }
        return points;
    },
    gauss(n, noise, random) {
        const points = [];
        for (let i = 0; i < n; i++) {
            const label = i % 2;
            const center = label ? 0.45 : -0.45;
            const spread = 0.18 + noise * 0.35;
            points.push({
                x: clamp(center + gaussian(random) * spread),
                y: clamp(center + gaussian(random) * spread),
                label
            });
        }
        return points;
    },
    spiral(n, noise, random) {
        const points = [];
        const half = Math.ceil(n / 2);
        for (let i = 0; i < n; i++) {
            const label = i < half ? 1 : 0;
            const k = label ? i : i - half;
            const r = (k / half) * 0.9 + 0.05;
            const t = 1.75 * (k / half) * 2 * Math.PI + (label ? 0 : Math.PI);
            points.push({
                x: clamp(r * Math.sin(t) + gaussian(random) * noise * 0.12),
                y: clamp(r * Math.cos(t) + gaussian(random) * noise * 0.12),
                label
            });
        }
        return points;
    }
};

export function makeDataset(name, { n = 200, noise = 0, seed = 1 } = {}) {
    const generate = DATASETS[name];
    if (!generate) throw new Error(`Unknown dataset: ${name}`);
    return generate(n, noise, createRandom(seed));
}

// Deterministic shuffle-and-split into train and test sets.
export function split(points, testRatio = 0.5, seed = 1) {
    const random = createRandom(seed);
    const shuffled = points.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const cut = Math.round(shuffled.length * (1 - testRatio));
    return { train: shuffled.slice(0, cut), test: shuffled.slice(cut) };
}

// ---------------------------------------------------------------------------
// Input features: what the first layer sees for a point (x, y). Hand-made
// features such as x² let even a single neuron draw a circle; without them the
// network has to learn that shape in its hidden layers.
// ---------------------------------------------------------------------------

export const FEATURES = {
    x: (x) => x,
    y: (x, y) => y,
    x2: (x) => x * x,
    y2: (x, y) => y * y,
    xy: (x, y) => x * y,
    sinx: (x) => Math.sin(Math.PI * x),
    siny: (x, y) => Math.sin(Math.PI * y)
};

// ---------------------------------------------------------------------------
// Network
// ---------------------------------------------------------------------------

export class Network {
    // hidden: neurons per hidden layer, e.g. [4, 2]. [] is a single neuron
    // (logistic regression), which can only draw a straight boundary.
    constructor({ hidden = [4, 2], activation = 'tanh', features = ['x', 'y'], seed = 1 } = {}) {
        if (!ACTIVATIONS[activation]) throw new Error(`Unknown activation: ${activation}`);
        if (!features.length) throw new Error('A network needs at least one input feature');
        for (const name of features) if (!FEATURES[name]) throw new Error(`Unknown feature: ${name}`);
        this.activation = activation;
        this.features = features.slice();
        this.sizes = [features.length, ...hidden, 1];
        const random = createRandom(seed);
        // weights[l][j][i]: from neuron i in layer l to neuron j in layer l + 1
        this.weights = [];
        this.biases = [];
        for (let l = 0; l < this.sizes.length - 1; l++) {
            const fanIn = this.sizes[l];
            const fanOut = this.sizes[l + 1];
            // Xavier/Glorot uniform init keeps tanh units out of saturation at the start
            const limit = Math.sqrt(6 / (fanIn + fanOut));
            this.weights.push(Array.from({ length: fanOut }, () =>
                Array.from({ length: fanIn }, () => (random() * 2 - 1) * limit)));
            this.biases.push(Array.from({ length: fanOut }, () => (activation === 'relu' ? 0.1 : 0)));
        }
    }

    // Returns every layer's activations; the last one holds the output probability.
    forwardAll(x, y) {
        const act = ACTIVATIONS[this.activation].f;
        const layers = [this.features.map(name => FEATURES[name](x, y))];
        for (let l = 0; l < this.weights.length; l++) {
            const input = layers[l];
            const isOutput = l === this.weights.length - 1;
            layers.push(this.weights[l].map((row, j) => {
                let z = this.biases[l][j];
                for (let i = 0; i < row.length; i++) z += row[i] * input[i];
                return isOutput ? sigmoid(z) : act(z);
            }));
        }
        return layers;
    }

    predict(x, y) {
        const layers = this.forwardAll(x, y);
        return layers[layers.length - 1][0];
    }

    // One gradient step on a batch. Returns the batch's mean loss before the step.
    trainBatch(batch, learningRate = 0.03, l2 = 0) {
        const dAct = ACTIVATIONS[this.activation].df;
        const gradW = this.weights.map(layer => layer.map(row => row.map(() => 0)));
        const gradB = this.biases.map(layer => layer.map(() => 0));
        let loss = 0;

        for (const { x, y, label } of batch) {
            const layers = this.forwardAll(x, y);
            const out = layers[layers.length - 1][0];
            loss += crossEntropy(out, label);

            // sigmoid + cross-entropy: dL/dz at the output is simply (prediction - label)
            let delta = [out - label];
            for (let l = this.weights.length - 1; l >= 0; l--) {
                const input = layers[l];
                for (let j = 0; j < delta.length; j++) {
                    gradB[l][j] += delta[j];
                    for (let i = 0; i < input.length; i++) gradW[l][j][i] += delta[j] * input[i];
                }
                if (l === 0) break;
                const previous = new Array(input.length).fill(0);
                for (let i = 0; i < input.length; i++) {
                    let sum = 0;
                    for (let j = 0; j < delta.length; j++) sum += this.weights[l][j][i] * delta[j];
                    previous[i] = sum * dAct(input[i]);
                }
                delta = previous;
            }
        }

        const scale = learningRate / batch.length;
        for (let l = 0; l < this.weights.length; l++) {
            for (let j = 0; j < this.weights[l].length; j++) {
                const row = this.weights[l][j];
                for (let i = 0; i < row.length; i++) row[i] -= scale * gradW[l][j][i] + learningRate * l2 * row[i];
                this.biases[l][j] -= scale * gradB[l][j];
            }
        }
        return loss / batch.length;
    }

    // One pass over the data in shuffled mini-batches.
    trainEpoch(points, { learningRate = 0.03, batchSize = 10, l2 = 0, random = Math.random } = {}) {
        const order = points.slice();
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        for (let start = 0; start < order.length; start += batchSize) {
            this.trainBatch(order.slice(start, start + batchSize), learningRate, l2);
        }
    }

    loss(points) {
        if (!points.length) return 0;
        let total = 0;
        for (const p of points) total += crossEntropy(this.predict(p.x, p.y), p.label);
        return total / points.length;
    }

    accuracy(points) {
        if (!points.length) return 0;
        let correct = 0;
        for (const p of points) if ((this.predict(p.x, p.y) >= 0.5 ? 1 : 0) === p.label) correct++;
        return correct / points.length;
    }

    parameterCount() {
        return this.weights.reduce((sum, layer, l) =>
            sum + layer.length * layer[0].length + this.biases[l].length, 0);
    }
}

export function crossEntropy(prediction, label) {
    const p = Math.min(1 - 1e-7, Math.max(1e-7, prediction));
    return label ? -Math.log(p) : -Math.log(1 - p);
}
