import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, LANGS, SHELL_FILES, playgroundPath } from '../scripts/build-pages.mjs';

const read = relative => fs.readFileSync(path.join(ROOT, relative), 'utf8');

// Same-origin scripts, stylesheets and the manifest a page loads, relative to the site root.
function localAssets(relative) {
    const html = read(relative);
    const refs = [
        ...[...html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g)].map(m => m[1]),
        ...[...html.matchAll(/<link[^>]*\srel="(?:stylesheet|manifest|modulepreload)"[^>]*\shref="([^"]+)"/g)].map(m => m[1]),
        ...[...html.matchAll(/<script type="module"[^>]*\ssrc="([^"]+)"/g)].map(m => m[1])
    ];
    const base = new URL(relative, 'https://site.test/');
    return [...new Set(refs)]
        .map(ref => new URL(ref, base))
        .filter(url => url.origin === 'https://site.test')
        .map(url => url.pathname.slice(1));
}

test('the service worker precaches files that exist, by relative path', () => {
    for (const file of SHELL_FILES) {
        assert.doesNotMatch(file, /^\/|\.\./, `${file}: relative to sw.js`);
        assert.ok(fs.existsSync(path.join(ROOT, file)), `${file}: exists`);
    }
});

test('everything the home page and playground load is in the app shell', () => {
    const pages = ['index.html', ...LANGS.map(lang => playgroundPath(lang) + 'index.html')];
    for (const page of pages) {
        for (const asset of localAssets(page)) {
            assert.ok(SHELL_FILES.includes(asset), `${page} loads ${asset}, which sw.js does not precache`);
        }
    }
});

test('the home page and playground register the service worker', () => {
    assert.match(read('app.js'), /navigator\.serviceWorker\.register\('sw\.js'\)/);
    assert.match(read('playground/playground.mjs'), /navigator\.serviceWorker\.register\(new URL\('\.\.\/sw\.js', import\.meta\.url\)\)/);
});

test('sw.js runs and handles install, activate, fetch and message', () => {
    const listeners = {};
    const self = {
        location: new URL('https://site.test/learn-artificial-intelligence/sw.js'),
        addEventListener: (type, fn) => { listeners[type] = fn; }
    };
    vm.runInNewContext(read('sw.js'), { self, URL, caches: {}, fetch: () => {} });
    assert.deepEqual(Object.keys(listeners).sort(), ['activate', 'fetch', 'install', 'message']);
});
