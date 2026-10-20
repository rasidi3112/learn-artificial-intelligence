#!/bin/bash
# Script untuk menyiapkan file bersih yang siap di-drag ke app.netlify.com/drop

set -e

# Pindah ke direktori script ini berada
cd "$(dirname "$0")"

echo "📦 Mengemas file website untuk Netlify Drop..."

# Bersihkan build sebelumnya
rm -rf dist deploy.zip

# Buat folder dist bersih berisi semua file yang dibutuhkan
mkdir -p dist
cp index.html styles.css app.js content-translations.js quiz-translations.js i18n-extra.js lessons-agents-rag.js motion.js netlify.toml LICENSE manifest.json og-image.png sitemap.xml robots.txt dist/
cp -R learn dist/

# Buat file zip dari isi folder dist
(cd dist && zip -q -r ../deploy.zip .)

echo "✅ Berhasil! File 'deploy.zip' telah dibuat (bebas dari file .git / sampah sistem)."
echo "📂 Membuka Finder sekarang..."

# Membuka Finder dan langsung menyorot file deploy.zip agar tinggal di-drag
open -R deploy.zip
