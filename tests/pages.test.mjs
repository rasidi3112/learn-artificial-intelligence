import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
    ROOT, SITE_URL, LANGS, SLUGS, PAGES_DIR,
    buildAll, loadContent, renderBody, escapeHTML, lessonPath
} from '../scripts/build-pages.mjs';

const files = buildAll();
const content = loadContent();
const lessonFiles = Object.keys(files).filter(f => f.split('/').length === 4);

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
    assert.equal(locs.length, 1 + LANGS.length * (content.LESSONS.length + 1));
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
