import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
    Network, ACTIVATIONS, FEATURES, DATASETS,
    createRandom, makeDataset, split, crossEntropy
} from '../playground/nn.mjs';

// Trains a fresh network and returns it with its held-out test set.
function train(dataset, options, epochs = 300, learningRate = 0.1) {
    const { train: trainSet, test: testSet } = split(makeDataset(dataset, { n: 300, noise: 0.05, seed: 3 }), 0.5, 3);
    const net = new Network({ seed: 7, ...options });
    const random = createRandom(9);
    for (let i = 0; i < epochs; i++) net.trainEpoch(trainSet, { learningRate, batchSize: 10, random });
    return { net, trainSet, testSet };
}

test('the random generator is seeded and stays in [0, 1)', () => {
    const a = createRandom(42);
    const b = createRandom(42);
    const values = Array.from({ length: 1000 }, () => a());
    assert.deepEqual(values.slice(0, 5), Array.from({ length: 5 }, () => b()));
    assert.ok(values.every(v => v >= 0 && v < 1));
    assert.notDeepEqual(values.slice(0, 5), Array.from({ length: 5 }, createRandom(43)));
});

test('datasets are balanced, labelled 0/1 and inside the unit square', () => {
    for (const name of Object.keys(DATASETS)) {
        const points = makeDataset(name, { n: 200, noise: 0.5, seed: 1 });
        assert.equal(points.length, 200, name);
        assert.ok(points.every(p => (p.label === 0 || p.label === 1) && Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1), name);
        const ones = points.filter(p => p.label === 1).length;
        assert.ok(ones > 70 && ones < 130, `${name}: ${ones} of 200 in class 1`);
    }
    assert.deepEqual(makeDataset('xor', { seed: 5 }), makeDataset('xor', { seed: 5 }));
    assert.throws(() => makeDataset('moons'), /Unknown dataset/);
});

test('split keeps every point exactly once', () => {
    const points = makeDataset('circle', { n: 101, seed: 2 });
    const { train: a, test: b } = split(points, 0.3, 4);
    assert.equal(a.length + b.length, 101);
    assert.equal(b.length, 30);
    assert.equal(new Set([...a, ...b]).size, 101);
});

test('the network has the expected shape and parameter count', () => {
    const net = new Network({ hidden: [4, 2], features: ['x', 'y', 'x2'] });
    assert.deepEqual(net.sizes, [3, 4, 2, 1]);
    assert.equal(net.parameterCount(), (3 * 4 + 4) + (4 * 2 + 2) + (2 * 1 + 1));
    const p = net.predict(0.3, -0.2);
    assert.ok(p > 0 && p < 1);
    assert.throws(() => new Network({ activation: 'swish' }), /Unknown activation/);
    assert.throws(() => new Network({ features: [] }), /at least one/);
    assert.throws(() => new Network({ features: ['z'] }), /Unknown feature/);
});

test('backpropagation matches a numerical gradient', () => {
    for (const activation of Object.keys(ACTIVATIONS)) {
        const net = new Network({ hidden: [3, 2], activation, features: ['x', 'y', 'xy'], seed: 5 });
        const batch = makeDataset('xor', { n: 8, seed: 6 });
        // trainBatch with learning rate 1 subtracts exactly the mean gradient
        const before = JSON.parse(JSON.stringify(net.weights));
        const probe = new Network({ hidden: [3, 2], activation, features: ['x', 'y', 'xy'], seed: 5 });
        net.trainBatch(batch, 1);
        const meanLoss = () => batch.reduce((sum, p) => sum + crossEntropy(probe.predict(p.x, p.y), p.label), 0) / batch.length;
        for (const [l, j, i] of [[0, 0, 0], [0, 2, 1], [1, 1, 2], [2, 0, 1]]) {
            const h = 1e-5;
            const original = probe.weights[l][j][i];
            probe.weights[l][j][i] = original + h;
            const up = meanLoss();
            probe.weights[l][j][i] = original - h;
            const down = meanLoss();
            probe.weights[l][j][i] = original;
            const numeric = (up - down) / (2 * h);
            const analytic = before[l][j][i] - net.weights[l][j][i];
            assert.ok(Math.abs(numeric - analytic) < 1e-4, `${activation} w[${l}][${j}][${i}]: ${numeric} vs ${analytic}`);
        }
    }
});

test('a single neuron separates two clusters but cannot learn XOR', () => {
    const clusters = train('gauss', { hidden: [] });
    assert.ok(clusters.net.accuracy(clusters.testSet) > 0.95);
    const { net, testSet } = train('xor', { hidden: [] });
    assert.ok(net.accuracy(testSet) < 0.75, 'a straight line cannot solve XOR');
});

test('one hidden layer solves XOR and the circle', () => {
    for (const dataset of ['xor', 'circle']) {
        const { net, trainSet, testSet } = train(dataset, { hidden: [4] });
        assert.ok(net.loss(trainSet) < 0.15, `${dataset}: training loss ${net.loss(trainSet)}`);
        assert.ok(net.accuracy(testSet) > 0.9, `${dataset}: test accuracy ${net.accuracy(testSet)}`);
    }
});

test('the right features let a single neuron draw a circle', () => {
    const { net, testSet } = train('circle', { hidden: [], features: ['x2', 'y2'] });
    assert.ok(net.accuracy(testSet) > 0.95);
});

test('training lowers the loss step by step', () => {
    const points = makeDataset('circle', { n: 100, seed: 8 });
    const net = new Network({ hidden: [4], seed: 2 });
    const start = net.loss(points);
    for (let i = 0; i < 50; i++) net.trainBatch(points, 0.3);
    assert.ok(net.loss(points) < start);
});

test('features and cross-entropy behave at the edges', () => {
    assert.equal(FEATURES.x2(-0.5, 0), 0.25);
    assert.equal(FEATURES.xy(0.5, -0.5), -0.25);
    assert.ok(Number.isFinite(crossEntropy(0, 1)) && Number.isFinite(crossEntropy(1, 0)));
    assert.ok(crossEntropy(0.99, 1) < crossEntropy(0.5, 1));
});
