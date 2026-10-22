// Browser side of the neural network playground: wires the controls on the
// generated page to the network in nn.mjs and draws everything on canvas.
// The page is fully usable from the keyboard; nothing here talks to a server.

import { Network, makeDataset, split, createRandom } from './nn.mjs';

const root = document.getElementById('playground');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const text = key => root.dataset[key] || key;

// ---------------------------------------------------------------------------
// Colours come from CSS custom properties, so light and dark mode both work.
// ---------------------------------------------------------------------------

let palette;

function parseColor(value) {
    const probe = document.createElement('canvas').getContext('2d');
    probe.fillStyle = value.trim();
    const hex = probe.fillStyle; // normalised to #rrggbb
    return [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
}

function readPalette() {
    const style = getComputedStyle(root);
    palette = {
        c0: parseColor(style.getPropertyValue('--pg-c0')),
        c1: parseColor(style.getPropertyValue('--pg-c1')),
        paper: parseColor(style.getPropertyValue('--paper')),
        ink: style.getPropertyValue('--ink').trim(),
        muted: style.getPropertyValue('--muted').trim(),
        css0: style.getPropertyValue('--pg-c0').trim(),
        css1: style.getPropertyValue('--pg-c1').trim(),
        cssPaper: style.getPropertyValue('--paper').trim()
    };
}

// value in [-1, 1]: negative leans to class 0, positive to class 1, 0 is paper.
function shade(value, out, offset) {
    const v = Number.isFinite(value) ? Math.max(-1, Math.min(1, value)) : 0;
    const target = v < 0 ? palette.c0 : palette.c1;
    const t = Math.abs(v) * 0.8;
    out[offset] = palette.paper[0] + (target[0] - palette.paper[0]) * t;
    out[offset + 1] = palette.paper[1] + (target[1] - palette.paper[1]) * t;
    out[offset + 2] = palette.paper[2] + (target[2] - palette.paper[2]) * t;
    out[offset + 3] = 255;
}

const toPixel = (v, size) => ((v + 1) / 2) * size;
const toPixelY = (v, size) => ((1 - v) / 2) * size;

// Draws a heatmap produced by `valueAt(x, y)` (in [-1, 1]) onto a canvas at a
// low resolution, then scales it up smoothly.
function paintField(canvas, resolution, valueAt) {
    const buffer = paintField.buffers.get(resolution) || makeBuffer(resolution);
    const { ctx: small, image } = buffer;
    for (let row = 0; row < resolution; row++) {
        const y = 1 - (2 * (row + 0.5)) / resolution;
        for (let col = 0; col < resolution; col++) {
            const x = (2 * (col + 0.5)) / resolution - 1;
            shade(valueAt(x, y), image.data, (row * resolution + col) * 4);
        }
    }
    small.putImageData(image, 0, 0);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(small.canvas, 0, 0, canvas.width, canvas.height);
    return ctx;
}
paintField.buffers = new Map();

function makeBuffer(resolution) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = resolution;
    const ctx = canvas.getContext('2d');
    const buffer = { ctx, image: ctx.createImageData(resolution, resolution) };
    paintField.buffers.set(resolution, buffer);
    return buffer;
}

function drawPoints(ctx, points, { hollow = false } = {}) {
    const { width, height } = ctx.canvas;
    const radius = Math.max(2.5, width / 110);
    ctx.lineWidth = hollow ? 1.6 : 1;
    for (const p of points) {
        ctx.beginPath();
        ctx.arc(toPixel(p.x, width), toPixelY(p.y, height), radius, 0, 2 * Math.PI);
        if (hollow) {
            ctx.strokeStyle = p.label ? palette.css1 : palette.css0;
            ctx.fillStyle = palette.cssPaper;
            ctx.fill();
            ctx.stroke();
        } else {
            ctx.fillStyle = p.label ? palette.css1 : palette.css0;
            ctx.strokeStyle = palette.cssPaper;
            ctx.fill();
            ctx.stroke();
        }
    }
}

// Sharp canvases on high-density screens: keep the CSS size, scale the backing store.
function fitCanvas(canvas) {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const size = canvas.getBoundingClientRect();
    if (!size.width) return;
    const width = Math.round(size.width * ratio);
    const height = Math.round(size.height * ratio);
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
}

const format = (value, digits = 3) => (Number.isFinite(value) ? value.toFixed(digits) : 'NaN');
const percent = value => `${Math.round(value * 100)}%`;
const signed = value => (value < 0 ? `− ${Math.abs(value).toFixed(2)}` : `+ ${value.toFixed(2)}`);

// ---------------------------------------------------------------------------
// Part 1: one neuron with hand-tuned weights
// ---------------------------------------------------------------------------

function setupNeuron() {
    const canvas = document.getElementById('neuronCanvas');
    const sliders = ['w1', 'w2', 'b'].map(id => document.getElementById(id));
    const outputs = ['w1Out', 'w2Out', 'bOut'].map(id => document.getElementById(id));
    const formula = document.getElementById('neuronFormula');
    const accuracy = document.getElementById('neuronAcc');
    const lossOut = document.getElementById('neuronLoss');
    const fitButton = document.getElementById('neuronFit');

    const points = makeDataset('gauss', { n: 120, noise: 0.15, seed: 5 });
    const neuron = new Network({ hidden: [], features: ['x', 'y'], seed: 1 });
    let fitting = 0;

    function read() {
        neuron.weights[0][0][0] = Number(sliders[0].value);
        neuron.weights[0][0][1] = Number(sliders[1].value);
        neuron.biases[0][0] = Number(sliders[2].value);
    }

    function write() {
        sliders[0].value = neuron.weights[0][0][0].toFixed(1);
        sliders[1].value = neuron.weights[0][0][1].toFixed(1);
        sliders[2].value = neuron.biases[0][0].toFixed(1);
    }

    function draw() {
        const [w1, w2] = neuron.weights[0][0];
        const b = neuron.biases[0][0];
        outputs[0].value = w1.toFixed(1);
        outputs[1].value = w2.toFixed(1);
        outputs[2].value = b.toFixed(1);
        formula.textContent = `ŷ = σ(${w1.toFixed(2)}·x ${signed(w2)}·y ${signed(b)})`;
        accuracy.textContent = percent(neuron.accuracy(points));
        lossOut.textContent = format(neuron.loss(points));

        fitCanvas(canvas);
        const ctx = paintField(canvas, 48, (x, y) => 2 * neuron.predict(x, y) - 1);
        const { width, height } = canvas;

        // The boundary is where w1·x + w2·y + b = 0, i.e. where ŷ = 0.5.
        ctx.strokeStyle = palette.ink;
        ctx.lineWidth = Math.max(1.5, width / 220);
        ctx.beginPath();
        if (Math.abs(w2) > 1e-6) {
            const yAt = x => -(w1 * x + b) / w2;
            ctx.moveTo(0, toPixelY(yAt(-1), height));
            ctx.lineTo(width, toPixelY(yAt(1), height));
        } else if (Math.abs(w1) > 1e-6) {
            const x = -b / w1;
            ctx.moveTo(toPixel(x, width), 0);
            ctx.lineTo(toPixel(x, width), height);
        }
        ctx.stroke();
        drawPoints(ctx, points);
    }

    sliders.forEach(slider => slider.addEventListener('input', () => {
        fitting = 0;
        read();
        draw();
    }));

    function fitStep() {
        if (fitting <= 0) return;
        for (let i = 0; i < (reduceMotion ? fitting : 2); i++) neuron.trainBatch(points, 0.6);
        fitting = reduceMotion ? 0 : fitting - 2;
        write();
        draw();
        if (fitting > 0) requestAnimationFrame(fitStep);
    }

    fitButton.addEventListener('click', () => {
        read();
        fitting = 240;
        requestAnimationFrame(fitStep);
    });

    read();
    return draw;
}

// ---------------------------------------------------------------------------
// Part 2: a configurable multi-layer network
// ---------------------------------------------------------------------------

const FEATURE_LABELS = { x: 'x', y: 'y', x2: 'x²', y2: 'y²', xy: 'x·y', sinx: 'sin(x)', siny: 'sin(y)' };
const MAX_LAYERS = 4;
const MAX_NEURONS = 8;
const DEFAULTS = { dataset: 'circle', noise: 0.1, lr: 0.03, activation: 'tanh', features: ['x', 'y'], hidden: [4, 2] };

function readHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    const state = structuredClone(DEFAULTS);
    if (['circle', 'xor', 'gauss', 'spiral'].includes(params.get('d'))) state.dataset = params.get('d');
    const noise = Number(params.get('n'));
    if (params.has('n') && noise >= 0 && noise <= 50) state.noise = noise / 100;
    const lr = Number(params.get('lr'));
    if (lr > 0 && lr <= 10) state.lr = lr;
    if (['tanh', 'relu', 'sigmoid', 'linear'].includes(params.get('a'))) state.activation = params.get('a');
    const features = (params.get('f') || '').split(',').filter(name => name in FEATURE_LABELS);
    if (features.length) state.features = features;
    if (params.has('h')) {
        const hidden = params.get('h') === '' ? [] : params.get('h').split(',').map(Number);
        if (hidden.length <= MAX_LAYERS && hidden.every(n => Number.isInteger(n) && n >= 1 && n <= MAX_NEURONS)) state.hidden = hidden;
    }
    return state;
}

function writeHash(state) {
    const params = new URLSearchParams({
        d: state.dataset,
        n: String(Math.round(state.noise * 100)),
        lr: String(state.lr),
        a: state.activation,
        f: state.features.join(','),
        h: state.hidden.join(',')
    });
    history.replaceState(null, '', `#${String(params).replace(/%2C/g, ',')}`);
}

function setupNetwork() {
    const state = readHash();
    const el = id => document.getElementById(id);
    const playButton = el('netPlay');
    const graph = el('netGraph');
    const links = graph.querySelector('svg');
    const outputCanvas = el('outputCanvas');
    const lossCanvas = el('lossCanvas');
    const showTest = el('showTest');
    const noise = el('noise');
    const noiseOut = el('noiseOut');
    const learningRate = el('learningRate');
    const activation = el('activation');
    const layerCount = el('layerCount');

    let seed = 1;
    let data;
    let net;
    let random;
    let epoch = 0;
    let history = [];
    let playing = false;
    let neuronCanvases = []; // [layer][neuron] -> canvas, layer 0 = input features
    let linkPaths = [];      // [layer][to][from] -> path

    // ----- data and model -----

    function makeData() {
        const points = makeDataset(state.dataset, { n: 400, noise: state.noise, seed: 11 });
        data = split(points, 0.5, 11);
    }

    function makeNetwork() {
        net = new Network({ hidden: state.hidden, activation: state.activation, features: state.features, seed });
        random = createRandom(seed * 7919);
        epoch = 0;
        history = [];
        buildGraph();
        writeHash(state);
    }

    function trainOnce() {
        net.trainEpoch(data.train, { learningRate: state.lr, batchSize: 10, random });
        epoch++;
        const train = net.loss(data.train);
        const test = net.loss(data.test);
        history.push([train, test]);
        // keep the chart light: halve the resolution once it gets long
        if (history.length > 600) history = history.filter((_, i) => i % 2 === 0);
    }

    // ----- network diagram -----

    function buildGraph() {
        for (const column of graph.querySelectorAll('.pg-col')) column.remove();
        neuronCanvases = [];
        const sizes = net.sizes.slice(0, -1); // inputs and hidden layers; the output is the big canvas
        layerCount.textContent = String(state.hidden.length);
        el('addLayer').disabled = state.hidden.length >= MAX_LAYERS;
        el('removeLayer').disabled = state.hidden.length === 0;

        sizes.forEach((size, layer) => {
            const column = document.createElement('div');
            column.className = layer === 0 ? 'pg-col pg-col-input' : 'pg-col';
            const head = document.createElement('div');
            head.className = 'pg-col-head';
            if (layer === 0) {
                head.textContent = text('features');
            } else {
                const index = layer - 1;
                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'pg-mini';
                minus.textContent = '−';
                minus.setAttribute('aria-label', `${text('removeNeuron')} (${layer})`);
                minus.disabled = size <= 1;
                minus.addEventListener('click', () => { state.hidden[index]--; makeNetwork(); render(); });
                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'pg-mini';
                plus.textContent = '+';
                plus.setAttribute('aria-label', `${text('addNeuron')} (${layer})`);
                plus.disabled = size >= MAX_NEURONS;
                plus.addEventListener('click', () => { state.hidden[index]++; makeNetwork(); render(); });
                // just the count, so four layers still fit side by side; the full phrase is in the title
                const label = document.createElement('span');
                label.className = 'pg-count';
                label.textContent = String(size);
                label.title = `${size} ${text('neurons')}`;
                head.append(minus, label, plus);
            }
            column.append(head);

            const canvases = [];
            for (let i = 0; i < size; i++) {
                const cell = document.createElement('div');
                cell.className = 'pg-node';
                const canvas = document.createElement('canvas');
                canvas.width = canvas.height = 20;
                canvas.setAttribute('aria-hidden', 'true');
                if (layer === 0) {
                    const name = document.createElement('span');
                    name.className = 'pg-node-label';
                    name.textContent = FEATURE_LABELS[state.features[i]];
                    cell.append(name);
                }
                cell.append(canvas);
                column.append(cell);
                canvases.push(canvas);
            }
            neuronCanvases.push(canvases);
            graph.append(column);
        });
        requestAnimationFrame(layoutLinks);
    }

    // SVG lines between the neuron squares, plus one bundle into the output.
    function layoutLinks() {
        links.replaceChildren();
        linkPaths = [];
        const box = graph.getBoundingClientRect();
        links.setAttribute('viewBox', `0 0 ${graph.scrollWidth} ${graph.scrollHeight}`);
        links.setAttribute('width', graph.scrollWidth);
        links.setAttribute('height', graph.scrollHeight);
        const centre = (canvas, side) => {
            const r = canvas.getBoundingClientRect();
            return {
                x: (side === 'right' ? r.right : r.left) - box.left + graph.scrollLeft,
                y: r.top + r.height / 2 - box.top
            };
        };
        const ns = 'http://www.w3.org/2000/svg';
        const outputAnchor = { x: graph.scrollWidth, y: graph.scrollHeight / 2 };
        for (let l = 0; l < net.weights.length; l++) {
            const toLayer = neuronCanvases[l + 1];
            linkPaths.push(net.weights[l].map((row, j) => row.map((_, i) => {
                const a = centre(neuronCanvases[l][i], 'right');
                const b = toLayer ? centre(toLayer[j], 'left') : outputAnchor;
                const mid = (a.x + b.x) / 2;
                const path = document.createElementNS(ns, 'path');
                path.setAttribute('d', `M${a.x} ${a.y} C${mid} ${a.y} ${mid} ${b.y} ${b.x} ${b.y}`);
                links.append(path);
                return path;
            })));
        }
        styleLinks();
    }

    function styleLinks() {
        for (let l = 0; l < linkPaths.length; l++) {
            for (let j = 0; j < linkPaths[l].length; j++) {
                for (let i = 0; i < linkPaths[l][j].length; i++) {
                    const w = net.weights[l][j][i];
                    const path = linkPaths[l][j][i];
                    path.setAttribute('stroke', w < 0 ? palette.css0 : palette.css1);
                    path.setAttribute('stroke-width', Math.min(6, 0.4 + Math.abs(w) * 1.2).toFixed(2));
                }
            }
        }
    }

    // ----- drawing -----

    // Maps a hidden activation to [-1, 1] for shading.
    const normalise = {
        tanh: a => a,
        sigmoid: a => 2 * a - 1,
        relu: a => Math.tanh(a),
        linear: a => Math.tanh(a)
    };

    function render() {
        const norm = normalise[state.activation];
        // One forward pass per grid cell fills the output map and every neuron's map.
        const grid = 20;
        const cache = new Map();
        const layersAt = (x, y) => {
            const key = `${x},${y}`;
            if (!cache.has(key)) cache.set(key, net.forwardAll(x, y));
            return cache.get(key);
        };
        neuronCanvases.forEach((canvases, layer) => canvases.forEach((canvas, i) => {
            const shadeFor = layer === 0 ? v => Math.max(-1, Math.min(1, v)) : norm;
            paintField(canvas, grid, (x, y) => shadeFor(layersAt(x, y)[layer][i]));
        }));

        fitCanvas(outputCanvas);
        const ctx = paintField(outputCanvas, 50, (x, y) => 2 * net.predict(x, y) - 1);
        drawPoints(ctx, data.train);
        if (showTest.checked) drawPoints(ctx, data.test, { hollow: true });

        styleLinks();
        drawLoss();
        const last = history[history.length - 1];
        el('epoch').textContent = String(epoch).padStart(3, '0');
        el('trainLoss').textContent = format(last ? last[0] : net.loss(data.train));
        el('testLoss').textContent = format(last ? last[1] : net.loss(data.test));
    }

    function drawLoss() {
        fitCanvas(lossCanvas);
        const ctx = lossCanvas.getContext('2d');
        const { width, height } = lossCanvas;
        ctx.clearRect(0, 0, width, height);
        if (history.length < 2) return;
        const finite = history.flat().filter(Number.isFinite);
        const max = Math.max(0.1, ...finite);
        const pad = 3;
        [[1, palette.muted, [4, 3]], [0, palette.ink, []]].forEach(([series, colour, dash]) => {
            ctx.beginPath();
            ctx.setLineDash(dash.map(d => d * (width / 320)));
            ctx.strokeStyle = colour;
            ctx.lineWidth = Math.max(1.2, width / 260);
            history.forEach((point, i) => {
                const x = (i / (history.length - 1)) * width;
                const v = Number.isFinite(point[series]) ? point[series] : max;
                const y = pad + (1 - v / max) * (height - 2 * pad);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.stroke();
        });
        ctx.setLineDash([]);
    }

    // ----- loop -----

    function frame() {
        if (!playing) return;
        trainOnce();
        render();
        requestAnimationFrame(frame);
    }

    function setPlaying(value) {
        playing = value;
        playButton.textContent = playing ? text('pause') : text('play');
        playButton.setAttribute('aria-pressed', String(playing));
        if (playing) requestAnimationFrame(frame);
    }

    // ----- controls -----

    playButton.addEventListener('click', () => setPlaying(!playing));
    el('netStep').addEventListener('click', () => { setPlaying(false); trainOnce(); render(); });
    el('netReset').addEventListener('click', () => { seed++; makeNetwork(); render(); });

    for (const radio of root.querySelectorAll('input[name="dataset"]')) {
        radio.checked = radio.value === state.dataset;
        radio.addEventListener('change', () => {
            state.dataset = radio.value;
            makeData();
            makeNetwork();
            render();
        });
    }

    noise.value = String(Math.round(state.noise * 100));
    noiseOut.value = noise.value;
    noise.addEventListener('input', () => { noiseOut.value = noise.value; });
    noise.addEventListener('change', () => {
        state.noise = Number(noise.value) / 100;
        makeData();
        makeNetwork();
        render();
    });

    if (![...learningRate.options].some(o => Number(o.value) === state.lr)) {
        learningRate.append(new Option(String(state.lr), String(state.lr)));
    }
    learningRate.value = [...learningRate.options].find(o => Number(o.value) === state.lr).value;
    learningRate.addEventListener('change', () => { state.lr = Number(learningRate.value); writeHash(state); });

    activation.value = state.activation;
    activation.addEventListener('change', () => { state.activation = activation.value; makeNetwork(); render(); });

    const featureBoxes = [...root.querySelectorAll('input[name="feature"]')];
    for (const box of featureBoxes) {
        box.checked = state.features.includes(box.value);
        box.addEventListener('change', () => {
            const chosen = featureBoxes.filter(b => b.checked).map(b => b.value);
            if (!chosen.length) { box.checked = true; return; } // at least one input
            state.features = chosen;
            makeNetwork();
            render();
        });
    }

    el('addLayer').addEventListener('click', () => {
        if (state.hidden.length >= MAX_LAYERS) return;
        state.hidden.push(state.hidden[state.hidden.length - 1] || 2);
        makeNetwork();
        render();
    });
    el('removeLayer').addEventListener('click', () => {
        if (!state.hidden.length) return;
        state.hidden.pop();
        makeNetwork();
        render();
    });

    showTest.addEventListener('change', render);

    const shareStatus = el('shareStatus');
    el('shareLink').addEventListener('click', async () => {
        writeHash(state);
        try {
            await navigator.clipboard.writeText(location.href);
            shareStatus.textContent = text('copied');
        } catch {
            shareStatus.textContent = location.href;
        }
        setTimeout(() => { shareStatus.textContent = ''; }, 2500);
    });

    makeData();
    makeNetwork();
    return () => { layoutLinks(); render(); };
}

// ---------------------------------------------------------------------------

readPalette();
const redrawNeuron = setupNeuron();
const redrawNetwork = setupNetwork();
redrawNeuron();
redrawNetwork();

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { redrawNeuron(); redrawNetwork(); }, 120);
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    readPalette();
    redrawNeuron();
    redrawNetwork();
});

// Offline support: sw.js sits at the site root, one folder up from this file.
// It also saves the other pages in this page's language, and the fonts this
// page links, since they load before the worker is in control.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register(new URL('../sw.js', import.meta.url)).catch(() => {});
    if (!(navigator.connection && navigator.connection.saveData)) {
        const fontStylesheets = [...document.querySelectorAll('link[rel="stylesheet"][href^="https://fonts.googleapis.com/"]')].map(link => link.href);
        navigator.serviceWorker.ready.then(registration => {
            if (registration.active) registration.active.postMessage({ type: 'save-for-offline', lang: document.documentElement.lang, fontStylesheets });
        });
    }
}
