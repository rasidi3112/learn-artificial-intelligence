#!/usr/bin/env node
// Generates one static, crawlable HTML page per lesson and language, plus a
// hub page per language, sitemap.xml and robots.txt.
//
// The interactive app keeps all lessons in JavaScript and renders them into a
// single page, which search engines index as one Indonesian document. These
// pages give every module its own URL, title, description and hreflang set.
//
// Lesson content is read straight from the app's own scripts, so the app stays
// the single source of truth. Output is committed, so hosting needs no build
// step. Run `npm run build:pages` after editing lesson text; CI fails when the
// committed pages are out of date.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SITE_URL = 'https://rasidi3112.github.io/learn-artificial-intelligence/';
export const PAGES_DIR = 'learn';
export const DEFAULT_LANG = 'id';
export const LANGS = ['id', 'en', 'zh', 'es', 'ar', 'hi', 'pt', 'fr', 'de', 'ja', 'ko', 'ru', 'tr', 'it', 'vi'];
const RTL_LANGS = new Set(['ar']);
const AUTHOR = 'Ahmad Rasidi';

// URL slugs are fixed per lesson id so that renaming a lesson never breaks links.
export const SLUGS = {
    1: 'what-is-artificial-intelligence',
    2: 'machine-learning-basics',
    3: 'deep-learning-neural-networks',
    4: 'natural-language-processing',
    5: 'computer-vision',
    6: 'prompt-engineering-basics',
    7: 'ai-ethics-and-bias',
    8: 'ai-career-guide',
    9: 'reinforcement-learning',
    10: 'generative-ai-large-language-models',
    11: 'ai-in-healthcare',
    12: 'ai-for-business-and-industry',
    13: 'robotics-and-ai',
    14: 'edge-ai-and-iot',
    15: 'automl-and-no-code-ai'
};

const LANG_NAMES = {
    id: 'Bahasa Indonesia', en: 'English', zh: '中文', es: 'Español', ar: 'العربية',
    hi: 'हिन्दी', pt: 'Português', fr: 'Français', de: 'Deutsch', ja: '日本語',
    ko: '한국어', ru: 'Русский', tr: 'Türkçe', it: 'Italiano', vi: 'Tiếng Việt'
};

// Strings that only the static pages need; everything else comes from the app's dictionaries.
const PAGE_STRINGS = {
    id: { prev: 'Modul sebelumnya', next: 'Modul berikutnya', all: 'Semua modul', open_app: 'Buka versi interaktif dengan kuis dan progres', language: 'Bahasa', course: 'Kursus' },
    en: { prev: 'Previous module', next: 'Next module', all: 'All modules', open_app: 'Open the interactive version with quiz and progress', language: 'Language', course: 'Course' },
    zh: { prev: '上一模块', next: '下一模块', all: '全部模块', open_app: '打开带测验和进度的互动版本', language: '语言', course: '课程' },
    es: { prev: 'Módulo anterior', next: 'Módulo siguiente', all: 'Todos los módulos', open_app: 'Abrir la versión interactiva con cuestionario y progreso', language: 'Idioma', course: 'Curso' },
    ar: { prev: 'الوحدة السابقة', next: 'الوحدة التالية', all: 'كل الوحدات', open_app: 'افتح النسخة التفاعلية مع الاختبار وتتبع التقدم', language: 'اللغة', course: 'الدورة' },
    hi: { prev: 'पिछला मॉड्यूल', next: 'अगला मॉड्यूल', all: 'सभी मॉड्यूल', open_app: 'क्विज़ और प्रगति के साथ इंटरैक्टिव संस्करण खोलें', language: 'भाषा', course: 'कोर्स' },
    pt: { prev: 'Módulo anterior', next: 'Próximo módulo', all: 'Todos os módulos', open_app: 'Abrir a versão interativa com quiz e progresso', language: 'Idioma', course: 'Curso' },
    fr: { prev: 'Module précédent', next: 'Module suivant', all: 'Tous les modules', open_app: 'Ouvrir la version interactive avec quiz et progression', language: 'Langue', course: 'Cours' },
    de: { prev: 'Vorheriges Modul', next: 'Nächstes Modul', all: 'Alle Module', open_app: 'Interaktive Version mit Quiz und Fortschritt öffnen', language: 'Sprache', course: 'Kurs' },
    ja: { prev: '前のモジュール', next: '次のモジュール', all: 'すべてのモジュール', open_app: 'クイズと進捗管理つきのインタラクティブ版を開く', language: '言語', course: 'コース' },
    ko: { prev: '이전 모듈', next: '다음 모듈', all: '전체 모듈', open_app: '퀴즈와 진행 상황이 있는 인터랙티브 버전 열기', language: '언어', course: '코스' },
    ru: { prev: 'Предыдущий модуль', next: 'Следующий модуль', all: 'Все модули', open_app: 'Открыть интерактивную версию с тестом и прогрессом', language: 'Язык', course: 'Курс' },
    tr: { prev: 'Önceki modül', next: 'Sonraki modül', all: 'Tüm modüller', open_app: 'Test ve ilerleme içeren etkileşimli sürümü aç', language: 'Dil', course: 'Kurs' },
    it: { prev: 'Modulo precedente', next: 'Modulo successivo', all: 'Tutti i moduli', open_app: 'Apri la versione interattiva con quiz e progressi', language: 'Lingua', course: 'Corso' },
    vi: { prev: 'Mô-đun trước', next: 'Mô-đun tiếp theo', all: 'Tất cả mô-đun', open_app: 'Mở phiên bản tương tác có bài kiểm tra và tiến độ', language: 'Ngôn ngữ', course: 'Khóa học' }
};

// ---------------------------------------------------------------------------
// Loading content from the app scripts
// ---------------------------------------------------------------------------

// A do-nothing stand-in for browser globals, so the app scripts can run in Node.
function browserStub() {
    const stub = new Proxy(function () {}, {
        get: (_, key) => (key === Symbol.toPrimitive ? () => '' : stub),
        apply: () => stub,
        construct: () => stub
    });
    return stub;
}

export function loadContent(root = ROOT) {
    const stub = browserStub();
    const context = vm.createContext({ document: stub, window: stub, localStorage: stub, navigator: stub, matchMedia: stub, console });
    // Same order as index.html, so the merges in app.js and i18n-extra.js apply as they do in the browser.
    const code = ['content-translations.js', 'app.js', 'i18n-extra.js']
        .map(file => fs.readFileSync(path.join(root, file), 'utf8'))
        .join('\n;\n');
    vm.runInContext(
        code + '\n;globalThis.__content = { LESSONS, translations, lessonTranslations, sectionTranslations, sectionContentTranslations };',
        context,
        { filename: 'app-bundle.js' }
    );
    return context.__content;
}

// Resolves every user-facing string for one lesson in one language, with the
// same fallbacks as the app (missing translations fall back to Indonesian).
export function localizeLesson(content, lesson, lang) {
    const native = lang === DEFAULT_LANG;
    const meta = native ? null : content.lessonTranslations[lang]?.[lesson.id];
    const titles = native ? null : content.sectionTranslations[lang]?.[lesson.id];
    const bodies = native ? null : content.sectionContentTranslations[lang]?.[lesson.id];
    return {
        id: lesson.id,
        slug: SLUGS[lesson.id],
        title: meta?.title || lesson.title,
        desc: meta?.desc || lesson.desc,
        level: lesson.level,
        minutes: Number((lesson.duration.match(/\d+/) || [0])[0]),
        sections: lesson.sections.map((section, idx) => ({
            title: titles?.[idx] || section.title,
            content: bodies?.[idx] || section.content
        }))
    };
}

// ---------------------------------------------------------------------------
// HTML helpers
// ---------------------------------------------------------------------------

export function escapeHTML(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// JSON-LD inside <script>: escape "<" so no string can close the tag.
function jsonLD(value) {
    return JSON.stringify(value, null, 2).replace(/</g, '\\u003c');
}

export function lessonPath(lang, slug) {
    return `${PAGES_DIR}/${lang}/${slug}/`;
}

export function hubPath(lang) {
    return `${PAGES_DIR}/${lang}/`;
}

// Lesson text is plain text: blank lines separate blocks, and a block whose
// lines all start with "- " or "1. " is a list.
export function renderBody(text) {
    return text
        .split(/\n\s*\n/)
        .map(block => block.trim())
        .filter(Boolean)
        .map(block => {
            const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
            if (lines.length > 1 && lines.every(line => /^[-•]\s+/.test(line))) {
                return '<ul>' + lines.map(line => `<li>${escapeHTML(line.replace(/^[-•]\s+/, ''))}</li>`).join('') + '</ul>';
            }
            if (lines.length > 1 && lines.every(line => /^\d+[.)]\s+/.test(line))) {
                return '<ol>' + lines.map(line => `<li>${escapeHTML(line.replace(/^\d+[.)]\s+/, ''))}</li>`).join('') + '</ol>';
            }
            return `<p>${lines.map(escapeHTML).join('<br>')}</p>`;
        })
        .join('\n');
}

function t(content, lang, key) {
    return content.translations[lang]?.[key] || content.translations[DEFAULT_LANG]?.[key] || key;
}

function levelLabel(content, lang, level) {
    const keys = { Pemula: 'level_beginner', Menengah: 'level_intermediate', Lanjut: 'level_advanced' };
    return keys[level] ? t(content, lang, keys[level]) : level;
}

function alternateLinks(pathFor) {
    return [
        ...LANGS.map(lang => `    <link rel="alternate" hreflang="${lang}" href="${SITE_URL}${pathFor(lang)}">`),
        `    <link rel="alternate" hreflang="x-default" href="${SITE_URL}${pathFor(DEFAULT_LANG)}">`
    ].join('\n');
}

function languageMenu(lang, pathFor, prefix, label) {
    const items = LANGS.map(code => {
        const current = code === lang ? ' aria-current="true"' : '';
        return `                <li><a href="${prefix}${pathFor(code)}" hreflang="${code}" lang="${code}"${current}>${escapeHTML(LANG_NAMES[code])}</a></li>`;
    }).join('\n');
    return `        <details class="lang-menu">
            <summary>${escapeHTML(label)}: ${escapeHTML(LANG_NAMES[lang])}</summary>
            <ul>
${items}
            </ul>
        </details>`;
}

function page({ lang, title, description, canonical, alternates, structuredData, prefix, body }) {
    const dir = RTL_LANGS.has(lang) ? ' dir="rtl"' : '';
    return `<!DOCTYPE html>
<html lang="${lang}"${dir}>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHTML(title)}</title>
    <meta name="description" content="${escapeHTML(description)}">
    <meta name="author" content="${AUTHOR}">
    <link rel="canonical" href="${canonical}">
${alternates}
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHTML(title)}">
    <meta property="og:description" content="${escapeHTML(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${SITE_URL}og-image.png">
    <meta property="og:locale" content="${lang}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#f7f5f0" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#141311" media="(prefers-color-scheme: dark)">
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; script-src 'none'; base-uri 'none'; form-action 'none'">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&amp;family=Geist:wght@400..600&amp;family=Geist+Mono:wght@400;500&amp;display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="${prefix}${PAGES_DIR}/pages.css">
    <script type="application/ld+json">
${jsonLD(structuredData)}
    </script>
</head>

<body>
${body}
</body>

</html>
`;
}

function masthead(content, lang, pathFor, prefix, strings) {
    return `    <header class="masthead">
        <a class="wordmark" href="${prefix}${hubPath(lang)}">
            <span class="wordmark-mark" aria-hidden="true">a</span>
            <span>${escapeHTML(t(content, lang, 'app_title'))}</span>
        </a>
${languageMenu(lang, pathFor, prefix, strings.language)}
    </header>`;
}

function footer(content, lang) {
    return `    <footer class="footer">
        <p>${escapeHTML(t(content, lang, 'footer_dev'))} ${AUTHOR}. <a href="https://github.com/rasidi3112/learn-artificial-intelligence">GitHub</a> · MIT</p>
    </footer>`;
}

// ---------------------------------------------------------------------------
// Pages
// ---------------------------------------------------------------------------

export function renderLessonPage(content, lang, index) {
    const lessons = content.LESSONS;
    const lesson = localizeLesson(content, lessons[index], lang);
    const strings = PAGE_STRINGS[lang];
    const prefix = '../../../';
    const courseName = t(content, lang, 'app_title');
    const canonical = SITE_URL + lessonPath(lang, lesson.slug);
    const pathFor = code => lessonPath(code, lesson.slug);
    const number = String(lesson.id).padStart(2, '0');

    const neighbour = (offset, rel, label) => {
        const other = lessons[index + offset];
        if (!other) return '<span></span>';
        const target = localizeLesson(content, other, lang);
        return `<a rel="${rel}" href="../${target.slug}/"><small>${escapeHTML(label)}</small>${escapeHTML(target.title)}</a>`;
    };

    const sections = lesson.sections.map((section, idx) => `            <section>
                <h2><span class="num">${String(idx + 1).padStart(2, '0')}</span> ${escapeHTML(section.title)}</h2>
${renderBody(section.content)}
            </section>`).join('\n');

    const body = `${masthead(content, lang, pathFor, prefix, strings)}

    <main class="lesson">
        <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="../">${escapeHTML(strings.all)}</a> <span aria-hidden="true">/</span> <span>${escapeHTML(t(content, lang, 'label_lesson'))} ${number}</span>
        </nav>
        <article>
            <header class="lesson-head">
                <p class="kicker">${escapeHTML(t(content, lang, 'label_lesson'))} ${number} / ${lessons.length}</p>
                <h1>${escapeHTML(lesson.title)}</h1>
                <p class="lede">${escapeHTML(lesson.desc)}</p>
                <p class="meta">
                    <span>${escapeHTML(t(content, lang, 'label_level'))}: ${escapeHTML(levelLabel(content, lang, lesson.level))}</span>
                    <span>${escapeHTML(t(content, lang, 'label_duration'))}: ${lesson.minutes} ${escapeHTML(t(content, lang, 'min'))}</span>
                </p>
            </header>
${sections}
        </article>
        <p><a class="cta" href="${prefix}?lang=${lang}&amp;lesson=${lesson.id}">${escapeHTML(strings.open_app)}</a></p>
        <nav class="pager" aria-label="${escapeHTML(strings.all)}">
            ${neighbour(-1, 'prev', strings.prev)}
            ${neighbour(1, 'next', strings.next)}
        </nav>
    </main>

${footer(content, lang)}`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LearningResource',
                '@id': canonical,
                name: lesson.title,
                description: lesson.desc,
                url: canonical,
                inLanguage: lang,
                learningResourceType: 'Lesson',
                educationalLevel: levelLabel(content, lang, lesson.level),
                timeRequired: `PT${lesson.minutes}M`,
                isAccessibleForFree: true,
                license: 'https://opensource.org/licenses/MIT',
                author: { '@type': 'Person', name: AUTHOR },
                isPartOf: { '@type': 'Course', name: courseName, url: SITE_URL + hubPath(lang) },
                position: lesson.id
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: courseName, item: SITE_URL + hubPath(lang) },
                    { '@type': 'ListItem', position: 2, name: lesson.title, item: canonical }
                ]
            }
        ]
    };

    return page({
        lang,
        title: `${lesson.title} · ${courseName}`,
        description: lesson.desc,
        canonical,
        alternates: alternateLinks(pathFor),
        structuredData,
        prefix,
        body
    });
}

export function renderHubPage(content, lang) {
    const strings = PAGE_STRINGS[lang];
    const prefix = '../../';
    const courseName = t(content, lang, 'app_title');
    const canonical = SITE_URL + hubPath(lang);
    const lessons = content.LESSONS.map(lesson => localizeLesson(content, lesson, lang));
    const description = t(content, lang, 'hero_lede');

    const items = lessons.map(lesson => `            <li>
                <a href="${lesson.slug}/">
                    <span class="num">${String(lesson.id).padStart(2, '0')}</span>
                    <span class="item-title">${escapeHTML(lesson.title)}</span>
                    <span class="item-desc">${escapeHTML(lesson.desc)}</span>
                    <span class="item-meta">${escapeHTML(levelLabel(content, lang, lesson.level))} · ${lesson.minutes} ${escapeHTML(t(content, lang, 'min'))}</span>
                </a>
            </li>`).join('\n');

    const body = `${masthead(content, lang, hubPath, prefix, strings)}

    <main class="hub">
        <header class="lesson-head">
            <p class="kicker">${escapeHTML(t(content, lang, 'hero_kicker'))}</p>
            <h1>${escapeHTML(t(content, lang, 'hero_title'))}</h1>
            <p class="lede">${escapeHTML(description)}</p>
            <p><a class="cta" href="${prefix}?lang=${lang}">${escapeHTML(t(content, lang, 'hero_cta'))}</a></p>
        </header>
        <h2>${escapeHTML(strings.all)}</h2>
        <ol class="module-list">
${items}
        </ol>
    </main>

${footer(content, lang)}`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': canonical,
        name: courseName,
        description,
        url: canonical,
        inLanguage: lang,
        isAccessibleForFree: true,
        license: 'https://opensource.org/licenses/MIT',
        provider: { '@type': 'Person', name: AUTHOR, url: 'https://github.com/rasidi3112' },
        hasPart: lessons.map(lesson => ({
            '@type': 'LearningResource',
            name: lesson.title,
            url: SITE_URL + lessonPath(lang, lesson.slug)
        }))
    };

    return page({
        lang,
        title: `${courseName} · ${t(content, lang, 'hero_kicker')}`,
        description,
        canonical,
        alternates: alternateLinks(hubPath),
        structuredData,
        prefix,
        body
    });
}

export function renderSitemap(content) {
    const entry = (pathFor) => LANGS.map(lang => {
        const links = [...LANGS, 'x-default'].map(code => {
            const target = code === 'x-default' ? DEFAULT_LANG : code;
            return `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${pathFor(target)}"/>`;
        }).join('\n');
        return `  <url>\n    <loc>${SITE_URL}${pathFor(lang)}</loc>\n${links}\n  </url>`;
    }).join('\n');

    const urls = [
        `  <url>\n    <loc>${SITE_URL}</loc>\n  </url>`,
        entry(hubPath),
        ...content.LESSONS.map(lesson => entry(lang => lessonPath(lang, SLUGS[lesson.id])))
    ];
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

export function renderRobots() {
    return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml
`;
}

// A plain list of links in index.html, so crawlers that do not run JavaScript
// can still reach every lesson page from the home page.
export function renderIndexLinks(content) {
    const links = content.LESSONS.map(lesson => {
        const l = localizeLesson(content, lesson, DEFAULT_LANG);
        return `                    <li><a href="${lessonPath(DEFAULT_LANG, l.slug)}">${escapeHTML(l.title)}</a></li>`;
    }).join('\n');
    const languages = LANGS.map(lang => `<a href="${hubPath(lang)}" hreflang="${lang}" lang="${lang}">${escapeHTML(LANG_NAMES[lang])}</a>`).join(' · ');
    return `            <!-- lesson-links:start (generated by scripts/build-pages.mjs) -->
            <nav class="footer-modules" aria-label="${escapeHTML(PAGE_STRINGS[DEFAULT_LANG].all)}">
                <ol>
${links}
                </ol>
                <p>${languages}</p>
            </nav>
            <!-- lesson-links:end -->`;
}

const INDEX_LINKS_PATTERN = / *<!-- lesson-links:start[\s\S]*?<!-- lesson-links:end -->/;

// Every generated file, as { relative path: contents }.
export function buildAll(root = ROOT) {
    const content = loadContent(root);
    const files = {};
    for (const lang of LANGS) {
        files[hubPath(lang) + 'index.html'] = renderHubPage(content, lang);
        content.LESSONS.forEach((lesson, index) => {
            files[lessonPath(lang, SLUGS[lesson.id]) + 'index.html'] = renderLessonPage(content, lang, index);
        });
    }
    files['sitemap.xml'] = renderSitemap(content);
    files['robots.txt'] = renderRobots();

    const indexHTML = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    if (!INDEX_LINKS_PATTERN.test(indexHTML)) {
        throw new Error('index.html is missing the <!-- lesson-links:start --> ... <!-- lesson-links:end --> markers');
    }
    files['index.html'] = indexHTML.replace(INDEX_LINKS_PATTERN, renderIndexLinks(content));
    return files;
}

// Language folders under learn/ that the generator owns; anything else there (pages.css) is hand-written.
export function generatedLangDirs(root = ROOT) {
    return LANGS.map(lang => path.join(root, PAGES_DIR, lang));
}

function write(root = ROOT) {
    for (const dir of generatedLangDirs(root)) fs.rmSync(dir, { recursive: true, force: true });
    const files = buildAll(root);
    for (const [relative, text] of Object.entries(files)) {
        const target = path.join(root, relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, text);
    }
    console.log(`Wrote ${Object.keys(files).length} files (${LANGS.length} languages × ${Object.keys(SLUGS).length} lessons, hubs, sitemap, robots.txt).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    write();
}
