import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
    ROOT, SITE_URL, LANGS, SLUGS, PAGES_DIR,
    buildAll, loadContent, renderBody, escapeHTML, lessonPath, playgroundPath
} from '../scripts/build-pages.mjs';
import { PLAYGROUND_STRINGS } from '../scripts/playground-strings.mjs';

const files = buildAll();
const content = loadContent();
const lessonSlugs = new Set(Object.values(SLUGS));
const lessonFiles = Object.keys(files).filter(f => f.split('/').length === 4 && lessonSlugs.has(f.split('/')[2]));
const playgroundFiles = LANGS.map(lang => playgroundPath(lang) + 'index.html');

test('committed pages match the generator output (run `npm run build:pages`)', () => {
    const stale = Object.entries(files)
        .filter(([relative, text]) => {
            const target = path.join(ROOT, relative);
            return !fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== text;
        })
        .map(([relative]) => relative);
    assert.deepEqual(stale, []);

    const onDisk = LANGS.flatMap(lang => fs.readdirSync(path.join(ROOT, PAGES_DIR, lang), { recursive: true })
        .filter(name => name.endsWith('.html'))
        .map(name => `${PAGES_DIR}/${lang}/${name.split(path.sep).join('/')}`));
    const orphans = onDisk.filter(relative => !(relative in files));
    assert.deepEqual(orphans, []);
});

test('every lesson has a unique slug', () => {
    const ids = [...content.LESSONS.map(l => l.id)];
    assert.deepEqual(Object.keys(SLUGS).map(Number).sort((a, b) => a - b), ids);
    assert.equal(new Set(Object.values(SLUGS)).size, ids.length);
    for (const slug of Object.values(SLUGS)) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test('one page per lesson and language', () => {
    assert.equal(lessonFiles.length, LANGS.length * content.LESSONS.length);
});

test('lesson pages carry the SEO essentials', () => {
    for (const relative of lessonFiles) {
        const html = files[relative];
        const url = SITE_URL + relative.replace(/index\.html$/, '');
        assert.equal((html.match(/<h1>/g) || []).length, 1, `${relative}: one h1`);
        assert.ok(html.includes(`<link rel="canonical" href="${url}">`), `${relative}: self canonical`);
        assert.equal((html.match(/hreflang="[^"]+" href=/g) || []).length, LANGS.length + 1, `${relative}: hreflang set`);
        assert.match(html, /<meta name="description" content="[^"]{8,}">/, `${relative}: description`);
        const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        assert.ok(ld, `${relative}: structured data`);
        assert.doesNotThrow(() => JSON.parse(ld[1]), `${relative}: valid JSON-LD`);
        assert.doesNotMatch(html, /<script(?! type="application\/ld\+json")/, `${relative}: no executable scripts`);
    }
});

test('translated pages are actually translated', () => {
    for (const lesson of content.LESSONS) {
        const id = files[lessonPath('id', SLUGS[lesson.id]) + 'index.html'];
        for (const lang of LANGS.filter(code => code !== 'id')) {
            const html = files[lessonPath(lang, SLUGS[lesson.id]) + 'index.html'];
            const firstSection = lesson.sections[0].content.split('\n')[0].replace(/^(-|\d+\.)\s+/, '').slice(0, 40);
            assert.ok(id.includes(escapeHTML(firstSection)), `id/${lesson.id}: Indonesian text present`);
            assert.ok(!html.includes(escapeHTML(firstSection)), `${lang}/${lesson.id}: no Indonesian fallback`);
        }
    }
});

test('Arabic pages are right-to-left', () => {
    const html = files[lessonPath('ar', SLUGS[1]) + 'index.html'];
    assert.match(html, /<html lang="ar" dir="rtl">/);
});

test('sitemap lists the home page, every hub and every lesson', () => {
    const locs = files['sitemap.xml'].match(/<loc>[^<]+<\/loc>/g);
    assert.equal(locs.length, 1 + LANGS.length * (content.LESSONS.length + 2));
    assert.equal(new Set(locs).size, locs.length);
    assert.match(files['robots.txt'], new RegExp(`Sitemap: ${SITE_URL}sitemap.xml`));
});

test('index.html links to every Indonesian lesson page', () => {
    for (const slug of Object.values(SLUGS)) {
        assert.ok(files['index.html'].includes(`href="${lessonPath('id', slug)}"`), slug);
    }
});

test('renderBody turns plain text into paragraphs and lists', () => {
    assert.equal(renderBody('One\n\nTwo'), '<p>One</p>\n<p>Two</p>');
    assert.equal(renderBody('- a\n- b'), '<ul><li>a</li><li>b</li></ul>');
    assert.equal(renderBody('1. a\n2. b'), '<ol><li>a</li><li>b</li></ol>');
    assert.equal(renderBody('<b>&'), '<p>&lt;b&gt;&amp;</p>');
});

test('one playground page per language, with the SEO essentials', () => {
    for (const relative of playgroundFiles) {
        const html = files[relative];
        assert.ok(html, `${relative}: generated`);
        assert.equal((html.match(/<h1>/g) || []).length, 1, `${relative}: one h1`);
        assert.ok(html.includes(`<link rel="canonical" href="${SITE_URL}${relative.replace(/index\.html$/, '')}">`), `${relative}: self canonical`);
        assert.equal((html.match(/hreflang="[^"]+" href=/g) || []).length, LANGS.length + 1, `${relative}: hreflang set`);
        const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        assert.doesNotThrow(() => JSON.parse(ld[1]), `${relative}: valid JSON-LD`);
        // the only executable script is the playground module, loaded from this site
        const scripts = html.match(/<script(?! type="application\/ld\+json")[^>]*>/g);
        assert.deepEqual(scripts, ['<script type="module" src="../../../playground/playground.mjs">']);
        assert.match(html, /script-src 'self'/);
    }
});

test('playground pages are translated and share the control ids the script expects', () => {
    const ids = ['playground', 'neuronCanvas', 'w1', 'w2', 'b', 'neuronFit', 'netPlay', 'netStep', 'netReset',
        'netGraph', 'outputCanvas', 'lossCanvas', 'showTest', 'noise', 'learningRate', 'activation',
        'addLayer', 'removeLayer', 'layerCount', 'epoch', 'trainLoss', 'testLoss', 'shareLink', 'shareStatus'];
    const keys = Object.keys(PLAYGROUND_STRINGS.en);
    for (const lang of LANGS) {
        assert.deepEqual(Object.keys(PLAYGROUND_STRINGS[lang]), keys, `${lang}: same keys as English`);
        assert.equal(PLAYGROUND_STRINGS[lang].try_list.length, PLAYGROUND_STRINGS.en.try_list.length, `${lang}: same tips`);
        const html = files[playgroundPath(lang) + 'index.html'];
        assert.ok(html.includes(`<h1>${escapeHTML(PLAYGROUND_STRINGS[lang].title)}</h1>`), `${lang}: localized title`);
        if (lang !== 'en') assert.ok(!html.includes(escapeHTML(PLAYGROUND_STRINGS.en.lede)), `${lang}: no English fallback`);
        for (const id of ids) assert.ok(html.includes(`id="${id}"`), `${lang}: #${id}`);
    }
});

test('hubs and the deep learning lesson link to the playground', () => {
    for (const lang of LANGS) {
        assert.ok(files[`${PAGES_DIR}/${lang}/index.html`].includes('href="neural-network-playground/"'), `${lang} hub`);
        assert.ok(files[lessonPath(lang, SLUGS[3]) + 'index.html'].includes('href="../neural-network-playground/"'), `${lang} lesson 3`);
    }
    assert.ok(files['index.html'].includes(`href="${playgroundPath('id')}"`));
});
