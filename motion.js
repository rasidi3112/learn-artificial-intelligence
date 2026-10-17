/* ==========================================================================
   Belajar AI: motion & depth
   A rotating 3D neural network behind the hero, signal pulses through the
   Fig. 1 neuron, pointer tilt on cards, count-up figures, section reveals
   and a reading-progress rule. No dependencies; everything respects
   prefers-reduced-motion and pauses when off screen.
   ========================================================================== */

(function () {
    'use strict';

    const root = document.documentElement;
    const reduceQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    const fineQuery = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)') : null;
    let reduced = reduceQuery ? reduceQuery.matches : false;

    const isRTL = () => root.getAttribute('dir') === 'rtl';
    const canTilt = () => !reduced && (!fineQuery || fineQuery.matches);

    function onReduceChange(fn) {
        if (!reduceQuery) return;
        const handler = (e) => { reduced = e.matches; fn(); };
        if (typeof reduceQuery.addEventListener === 'function') reduceQuery.addEventListener('change', handler);
        else if (typeof reduceQuery.addListener === 'function') reduceQuery.addListener(handler);
    }

    function cssVar(name, fallback) {
        const v = getComputedStyle(document.body).getPropertyValue(name).trim();
        return v || fallback;
    }

    // Parse "#rrggbb" / "#rgb" / "rgb(...)" into [r, g, b] so we can apply our own alpha.
    function toRGB(color) {
        const c = color.trim();
        if (c[0] === '#') {
            let hex = c.slice(1);
            if (hex.length === 3) hex = hex.split('').map(ch => ch + ch).join('');
            const n = parseInt(hex.slice(0, 6), 16);
            return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
        }
        const m = c.match(/[\d.]+/g);
        return m ? [+m[0], +m[1], +m[2]] : [23, 22, 20];
    }

    const rgba = (rgb, a) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a.toFixed(3)})`;

    /* ------------------------------------------------------------------
       1. 3D neural network behind the hero
       ------------------------------------------------------------------ */
    const Net3D = {
        hero: null,
        figure: null,
        canvas: null,
        ctx: null,
        w: 0,
        h: 0,
        dpr: 1,
        nodes: [],
        layers: [],
        edges: [],
        pulses: [],
        ink: [23, 22, 20],
        accent: [163, 52, 28],
        rotY: 0.6,
        pointer: { x: 0, y: 0, tx: 0, ty: 0 },
        scrollTilt: 0,
        visible: true,
        running: false,
        raf: 0,
        last: 0,
        spawnClock: 0,

        init() {
            this.hero = document.querySelector('.hero');
            this.figure = document.querySelector('.hero-figure');
            if (!this.hero || !this.figure || !document.createElement('canvas').getContext) return;

            this.canvas = document.createElement('canvas');
            this.canvas.className = 'hero-net';
            this.canvas.setAttribute('aria-hidden', 'true');
            this.hero.insertBefore(this.canvas, this.hero.firstChild);
            this.ctx = this.canvas.getContext('2d');

            this.build();
            this.readColors();
            this.resize();

            window.addEventListener('resize', () => { this.resize(); if (!this.running) this.frame(0); }, { passive: true });
            window.addEventListener('scroll', () => {
                const rect = this.hero.getBoundingClientRect();
                this.scrollTilt = Math.max(-1, Math.min(1, -rect.top / Math.max(rect.height, 1)));
            }, { passive: true });

            this.hero.addEventListener('pointermove', (e) => {
                if (e.pointerType !== 'mouse') return;
                const rect = this.hero.getBoundingClientRect();
                this.pointer.tx = (e.clientX - rect.left) / rect.width - 0.5;
                this.pointer.ty = (e.clientY - rect.top) / rect.height - 0.5;
            });
            this.hero.addEventListener('pointerleave', () => { this.pointer.tx = 0; this.pointer.ty = 0; });

            if ('IntersectionObserver' in window) {
                new IntersectionObserver((entries) => {
                    this.visible = entries[0].isIntersecting;
                    this.sync();
                }, { threshold: 0 }).observe(this.hero);
            }
            document.addEventListener('visibilitychange', () => this.sync());

            // Theme and language (dir) changes swap colours and the network's side.
            new MutationObserver(() => { this.readColors(); this.resize(); if (!this.running) this.frame(0); })
                .observe(document.body, { attributes: true, attributeFilter: ['class'] });
            new MutationObserver(() => { this.resize(); if (!this.running) this.frame(0); })
                .observe(root, { attributes: true, attributeFilter: ['dir'] });

            onReduceChange(() => this.sync());
            this.sync();
        },

        // Layered perceptron: each layer is a ring of neurons in the YZ plane.
        build() {
            const sizes = [5, 9, 9, 7, 3];
            const spanX = 1.9;
            this.nodes = [];
            this.layers = [];
            sizes.forEach((count, li) => {
                const x = -spanX / 2 + (spanX * li) / (sizes.length - 1);
                const radius = count === 3 ? 0.42 : 0.5 + count * 0.05;
                const layer = [];
                for (let i = 0; i < count; i++) {
                    const a = (i / count) * Math.PI * 2 + li * 0.45;
                    const node = {
                        x,
                        y: Math.sin(a) * radius,
                        z: Math.cos(a) * radius,
                        layer: li,
                        flash: 0,
                        sx: 0, sy: 0, sz: 0, scale: 1
                    };
                    layer.push(this.nodes.length);
                    this.nodes.push(node);
                }
                this.layers.push(layer);
            });
            this.edges = [];
            for (let li = 0; li < this.layers.length - 1; li++) {
                this.layers[li].forEach(a => this.layers[li + 1].forEach(b => this.edges.push([a, b])));
            }
        },

        readColors() {
            this.ink = toRGB(cssVar('--ink', '#171614'));
            this.accent = toRGB(cssVar('--accent', '#a3341c'));
        },

        resize() {
            const rect = this.hero.getBoundingClientRect();
            this.dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.w = rect.width;
            this.h = rect.height;
            this.canvas.width = Math.round(this.w * this.dpr);
            this.canvas.height = Math.round(this.h * this.dpr);
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

            // Centre the network on the figure so it wraps around the card.
            const f = this.figure.getBoundingClientRect();
            this.cx = f.left - rect.left + f.width / 2;
            this.cy = f.top - rect.top + f.height / 2;
            // Elliptical falloff so the network dissolves before it reaches the copy.
            // When the hero stacks (figure under the text) keep it tight to the card.
            const stacked = f.width > rect.width * 0.7;
            this.unit = stacked ? Math.min(f.width * 0.5, 300) : Math.min(f.width * 0.66, 380);
            this.rx = f.width * (stacked ? 0.62 : 0.82);
            this.ry = f.height * (stacked ? 0.62 : 1.0);
        },

        fade(x, y) {
            const dx = (x - this.cx) / this.rx;
            const dy = (y - this.cy) / this.ry;
            const d = Math.sqrt(dx * dx + dy * dy);
            return d < 0.55 ? 1 : Math.max(0, 1 - (d - 0.55) / 0.5);
        },

        sync() {
            const shouldRun = !reduced && this.visible && !document.hidden;
            if (shouldRun && !this.running) {
                this.running = true;
                this.last = performance.now();
                this.raf = requestAnimationFrame((t) => this.loop(t));
            } else if (!shouldRun && this.running) {
                this.running = false;
                cancelAnimationFrame(this.raf);
            }
            if (!shouldRun) {
                this.pulses = [];
                this.frame(0);
            }
        },

        loop(now) {
            if (!this.running) return;
            const dt = Math.min(now - this.last, 50);
            this.last = now;
            this.frame(dt);
            this.raf = requestAnimationFrame((t) => this.loop(t));
        },

        spawnPulse() {
            // A signal picks one neuron per layer and travels forward through them.
            const path = this.layers.map(layer => layer[Math.floor(Math.random() * layer.length)]);
            this.pulses.push({ path, seg: 0, t: 0, speed: 0.0011 + Math.random() * 0.0008 });
        },

        project(n, cosY, sinY, cosX, sinX) {
            // Rotate around Y, then X, then perspective-project.
            const x1 = n.x * cosY - n.z * sinY;
            const z1 = n.x * sinY + n.z * cosY;
            const y2 = n.y * cosX - z1 * sinX;
            const z2 = n.y * sinX + z1 * cosX;
            const fov = 3.2;
            const scale = fov / (fov + z2);
            n.sx = this.cx + x1 * scale * this.unit;
            n.sy = this.cy + y2 * scale * this.unit;
            n.sz = z2;
            n.scale = scale;
        },

        frame(dt) {
            const ctx = this.ctx;
            const p = this.pointer;
            p.x += (p.tx - p.x) * 0.06;
            p.y += (p.ty - p.y) * 0.06;

            if (dt) this.rotY += dt * 0.00012;
            const dir = isRTL() ? -1 : 1;
            const ay = (this.rotY + p.x * 0.9) * dir;
            const ax = -0.32 + p.y * 0.5 + this.scrollTilt * 0.6;
            const cosY = Math.cos(ay), sinY = Math.sin(ay);
            const cosX = Math.cos(ax), sinX = Math.sin(ax);

            this.nodes.forEach(n => this.project(n, cosY, sinY, cosX, sinX));

            ctx.clearRect(0, 0, this.w, this.h);

            // Edges: fainter the further back they sit.
            ctx.lineWidth = 0.6;
            for (let i = 0; i < this.edges.length; i++) {
                const a = this.nodes[this.edges[i][0]];
                const b = this.nodes[this.edges[i][1]];
                const depth = (a.scale + b.scale) / 2;
                const f = this.fade((a.sx + b.sx) / 2, (a.sy + b.sy) / 2);
                if (f <= 0) continue;
                ctx.strokeStyle = rgba(this.ink, Math.max(0.025, (depth - 0.72) * 0.34) * f);
                ctx.beginPath();
                ctx.moveTo(a.sx, a.sy);
                ctx.lineTo(b.sx, b.sy);
                ctx.stroke();
            }

            // Pulses travelling along their path.
            if (dt) {
                this.spawnClock += dt;
                if (this.spawnClock > 260 && this.pulses.length < 14) {
                    this.spawnClock = 0;
                    this.spawnPulse();
                }
            }
            for (let i = this.pulses.length - 1; i >= 0; i--) {
                const pulse = this.pulses[i];
                pulse.t += dt * pulse.speed * 1.6;
                if (pulse.t >= 1) {
                    pulse.t = 0;
                    pulse.seg++;
                    this.nodes[pulse.path[pulse.seg]].flash = 1;
                    if (pulse.seg >= pulse.path.length - 1) { this.pulses.splice(i, 1); continue; }
                }
                const a = this.nodes[pulse.path[pulse.seg]];
                const b = this.nodes[pulse.path[pulse.seg + 1]];
                const x = a.sx + (b.sx - a.sx) * pulse.t;
                const y = a.sy + (b.sy - a.sy) * pulse.t;
                const s = a.scale + (b.scale - a.scale) * pulse.t;
                const f = this.fade(x, y);
                if (f <= 0) continue;

                ctx.strokeStyle = rgba(this.accent, 0.35 * s * f);
                ctx.lineWidth = 1.1;
                ctx.beginPath();
                ctx.moveTo(a.sx, a.sy);
                ctx.lineTo(x, y);
                ctx.stroke();

                const g = ctx.createRadialGradient(x, y, 0, x, y, 9 * s);
                g.addColorStop(0, rgba(this.accent, 0.9 * f));
                g.addColorStop(1, rgba(this.accent, 0));
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(x, y, 9 * s, 0, Math.PI * 2);
                ctx.fill();
            }

            // Nodes, painted back to front.
            const order = this.nodes.slice().sort((a, b) => b.sz - a.sz);
            for (let i = 0; i < order.length; i++) {
                const n = order[i];
                const r = (n.layer === 0 || n.layer === this.layers.length - 1 ? 4.2 : 3.4) * n.scale;
                const f = this.fade(n.sx, n.sy);
                if (f <= 0) { n.flash = 0; continue; }
                const alpha = Math.max(0.12, Math.min(0.75, (n.scale - 0.7) * 1.4)) * f;
                if (n.flash > 0.01) {
                    ctx.fillStyle = rgba(this.accent, 0.18 * n.flash * f);
                    ctx.beginPath();
                    ctx.arc(n.sx, n.sy, r * (2.2 + n.flash * 2), 0, Math.PI * 2);
                    ctx.fill();
                    n.flash *= dt ? Math.pow(0.992, dt) : 0;
                }
                ctx.fillStyle = n.flash > 0.2 ? rgba(this.accent, Math.max(alpha, 0.8 * f)) : rgba(this.ink, alpha);
                ctx.beginPath();
                ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    };

    /* ------------------------------------------------------------------
       2. Signal pulses through the Fig. 1 neuron
       ------------------------------------------------------------------ */
    const NeuronPulse = {
        svg: null,
        dots: [],
        sum: null,
        raf: 0,
        running: false,
        visible: true,
        start: 0,

        init() {
            this.svg = document.querySelector('.hero-figure .neuron');
            if (!this.svg) return;
            const ns = 'http://www.w3.org/2000/svg';
            this.sum = this.svg.querySelector('.sum');

            // Each input signal follows: input → Σ → activation → ŷ.
            const routes = [
                'M56 54 L192 118 L220 125 L276 125 L344 125 L392 125',
                'M56 125 L190 125 L220 125 L276 125 L344 125 L392 125',
                'M56 196 L192 132 L220 125 L276 125 L344 125 L392 125'
            ];
            const g = document.createElementNS(ns, 'g');
            g.setAttribute('class', 'neuron-pulses');
            routes.forEach((d, i) => {
                const path = document.createElementNS(ns, 'path');
                path.setAttribute('d', d);
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'none');
                const dot = document.createElementNS(ns, 'circle');
                dot.setAttribute('r', '3.2');
                dot.setAttribute('class', 'pulse-dot');
                dot.style.opacity = '0';
                g.appendChild(path);
                g.appendChild(dot);
                this.dots.push({ path, dot, len: path.getTotalLength(), offset: i * 0.12 });
            });
            this.svg.appendChild(g);

            if ('IntersectionObserver' in window) {
                new IntersectionObserver((entries) => {
                    this.visible = entries[0].isIntersecting;
                    this.sync();
                }).observe(this.svg);
            }
            document.addEventListener('visibilitychange', () => this.sync());
            onReduceChange(() => this.sync());

            // Wait for the stroke-drawing intro to finish before signals flow.
            setTimeout(() => this.sync(), 2300);
        },

        sync() {
            const shouldRun = !reduced && this.visible && !document.hidden;
            if (shouldRun && !this.running) {
                this.running = true;
                this.start = performance.now();
                this.raf = requestAnimationFrame((t) => this.loop(t));
            } else if (!shouldRun && this.running) {
                this.running = false;
                cancelAnimationFrame(this.raf);
                this.dots.forEach(d => { d.dot.style.opacity = '0'; });
                if (this.sum) this.sum.classList.remove('firing');
            }
        },

        loop(now) {
            if (!this.running) return;
            const cycle = 3200;
            const travel = 0.62; // fraction of the cycle spent travelling
            const phase = ((now - this.start) % cycle) / cycle;
            let atSum = false;
            this.dots.forEach(d => {
                const local = (phase - d.offset + 1) % 1;
                if (local > travel) { d.dot.style.opacity = '0'; return; }
                const k = local / travel;
                const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
                const pt = d.path.getPointAtLength(eased * d.len);
                d.dot.setAttribute('cx', pt.x.toFixed(1));
                d.dot.setAttribute('cy', pt.y.toFixed(1));
                d.dot.style.opacity = k < 0.06 ? String(k / 0.06) : (k > 0.94 ? String((1 - k) / 0.06) : '1');
                if (Math.abs(pt.x - 220) < 26 && Math.abs(pt.y - 125) < 26) atSum = true;
            });
            if (this.sum) this.sum.classList.toggle('firing', atSum);
            this.raf = requestAnimationFrame((t) => this.loop(t));
        }
    };

    /* ------------------------------------------------------------------
       3. Pointer tilt (figure, badges), delegated so re-rendered cards work
       ------------------------------------------------------------------ */
    const Tilt = {
        selector: '.hero-figure, .badge-card',
        active: null,

        init() {
            document.addEventListener('pointermove', (e) => {
                if (e.pointerType !== 'mouse' || !canTilt()) return;
                const el = e.target.closest ? e.target.closest(this.selector) : null;
                if (el !== this.active) {
                    if (this.active) this.reset(this.active);
                    this.active = el;
                }
                if (!el) return;
                const r = el.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const max = el.classList.contains('hero-figure') ? 7 : 10;
                el.classList.add('is-tilting');
                el.style.setProperty('--rx', ((0.5 - py) * max).toFixed(2) + 'deg');
                el.style.setProperty('--ry', ((px - 0.5) * max).toFixed(2) + 'deg');
                el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
                el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
            }, { passive: true });

            document.addEventListener('pointerleave', () => { if (this.active) this.reset(this.active); this.active = null; });
            onReduceChange(() => { if (this.active) this.reset(this.active); });
        },

        reset(el) {
            el.classList.remove('is-tilting');
            el.style.removeProperty('--rx');
            el.style.removeProperty('--ry');
        }
    };

    /* ------------------------------------------------------------------
       4. Count-up for the hero figures (15 / 33 / 330 / 15)
       ------------------------------------------------------------------ */
    function countUp() {
        const items = document.querySelectorAll('.hero-facts dd');
        if (!items.length || reduced) return;
        items.forEach((dd, i) => {
            const final = dd.textContent.trim();
            if (!/^\d+$/.test(final)) return; // leave localised numerals alone
            const target = parseInt(final, 10);
            const delay = 350 + i * 120;
            const duration = 1100;
            dd.textContent = '0';
            setTimeout(() => {
                const t0 = performance.now();
                (function step(now) {
                    const k = Math.min((now - t0) / duration, 1);
                    const eased = 1 - Math.pow(1 - k, 3);
                    dd.textContent = k < 1 ? String(Math.round(target * eased)) : final;
                    if (k < 1) requestAnimationFrame(step);
                })(t0);
            }, delay);
        });
    }

    /* ------------------------------------------------------------------
       5. Section reveals (block headings rule draws in, title rises)
       ------------------------------------------------------------------ */
    function sectionReveal() {
        const heads = document.querySelectorAll('.block-head, .hero-facts');
        if (!heads.length) return;
        if (reduced || !('IntersectionObserver' in window)) return;
        root.classList.add('motion-reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
        heads.forEach(h => io.observe(h));
        // Safety net: never leave a heading hidden if the observer misses it.
        setTimeout(() => heads.forEach(h => {
            const r = h.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) h.classList.add('in-view');
        }), 1500);
        onReduceChange(() => heads.forEach(h => h.classList.add('in-view')));
    }

    /* ------------------------------------------------------------------
       6. Reading progress rule along the top edge
       ------------------------------------------------------------------ */
    function scrollProgress() {
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        bar.setAttribute('aria-hidden', 'true');
        document.body.appendChild(bar);
        let ticking = false;
        const update = () => {
            ticking = false;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const k = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
            bar.style.transform = `scaleX(${k.toFixed(4)})`;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        update();
    }

    /* ------------------------------------------------------------------
       7. Quiz feedback: pop on correct, shake on wrong
       ------------------------------------------------------------------ */
    function quizFeedback() {
        const quiz = document.getElementById('quizContent');
        if (!quiz || !('MutationObserver' in window)) return;
        new MutationObserver((mutations) => {
            if (reduced) return;
            mutations.forEach(m => {
                if (m.type !== 'attributes' || !m.target.classList || !m.target.classList.contains('option')) return;
                const el = m.target;
                if (el.classList.contains('correct') && !el.dataset.fxDone) {
                    el.dataset.fxDone = '1';
                    el.classList.add('fx-pop');
                } else if (el.classList.contains('wrong') && !el.dataset.fxDone) {
                    el.dataset.fxDone = '1';
                    el.classList.add('fx-shake');
                }
            });
        }).observe(quiz, { attributes: true, attributeFilter: ['class'], subtree: true });
    }

    function start() {
        root.classList.add('motion-ready');
        try { Net3D.init(); } catch (e) { /* decorative only */ }
        try { NeuronPulse.init(); } catch (e) { /* decorative only */ }
        Tilt.init();
        countUp();
        sectionReveal();
        scrollProgress();
        quizFeedback();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
