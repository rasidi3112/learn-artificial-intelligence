#  Belajar AI
**Platform Pembelajaran AI Premium untuk Pemula**

Selamat datang di **Belajar AI** — platform pembelajaran interaktif untuk memahami dasar hingga lanjutan *Artificial Intelligence (AI)* secara menyenangkan, terstruktur, dan modern.

Platform ini dirancang khusus untuk **pemula yang ingin memulai perjalanan di dunia AI**, dengan fitur-fitur lengkap seperti progress tracker, kuis interaktif, achievement badges, leaderboard, dan sertifikat digital.

> "Belajar AI bukan tentang menjadi robot, tapi memahami bagaimana kecerdasan bisa membuat manusia lebih bijak."
> — *Ahmad Rasidi*

---

##  Cara Menjalankan

```bash
# Clone repository
git clone https://github.com/rasidi3112/learn-artificial-intelligence.git

# Buka di browser
open index.html
```

Atau buka langsung file `index.html` di browser (Chrome, Edge, Safari, Firefox).

> **Tidak perlu install apapun.** Tidak perlu `npm install`, tidak perlu server. Cukup buka file HTML.

---

##  Daftar Materi Pembelajaran

| # | Materi | Level | Durasi |
|---|--------|-------|--------|
| 1 | **Apa itu Artificial Intelligence?** — Konsep dasar AI, sejarah, dan penerapannya | Pemula | 15 menit |
| 2 | **Machine Learning Dasar** — Supervised vs unsupervised learning | Menengah | 20 menit |
| 3 | **Deep Learning & Neural Networks** — Pengenalan deep learning | Lanjut | 25 menit |
| 4 | **Natural Language Processing (NLP)** — AI memahami bahasa manusia | Menengah | 18 menit |
| 5 | **Computer Vision** — AI mengenali gambar dan video | Lanjut | 22 menit |
| 6 | **Reinforcement Learning** — AI belajar dari interaksi lingkungan | Lanjut | 20 menit |
| 7 | **AI Ethics & Responsible AI** — Etika dan tanggung jawab dalam AI | Pemula | 15 menit |
| 8 | **Generative AI & Large Language Models** — ChatGPT, DALL-E, dan model generatif | Menengah | 22 menit |
| 9 | **AI in Healthcare** — Penerapan AI di bidang kesehatan | Menengah | 18 menit |
| 10 | **AI untuk Bisnis & Industri** — Transformasi digital dengan AI | Menengah | 20 menit |
| 11 | **Robotika & AI** — Integrasi kecerdasan buatan dengan robotika | Lanjut | 25 menit |
| 12 | **Edge AI & IoT** — AI di perangkat edge dan Internet of Things | Lanjut | 20 menit |
| 13 | **AI dalam Keamanan Siber** — Deteksi ancaman dan keamanan berbasis AI | Lanjut | 22 menit |
| 14 | **AutoML & No-Code AI** — Membuat model AI tanpa coding | Pemula | 15 menit |
| 15 | **Karier di Bidang AI** — Peluang karier dan skill yang dibutuhkan | Pemula | 12 menit |

---

##  Fitur Lengkap

###  Pembelajaran & Tracking
| Fitur | Deskripsi |
|-------|-----------|
| **Dashboard Analitik** | Statistik belajar real-time dengan animated counters |
| **Progress Bar** | Tracking kemajuan pembelajaran secara visual |
| **Sistem Level & Poin** | Gamifikasi — naik level seiring aktivitas belajar |
| **Streak Belajar** | Motivasi belajar harian berturut-turut |

###  Kuis Interaktif
| Fitur | Deskripsi |
|-------|-----------|
| **20 Soal Kuis** | Uji pemahaman dari semua materi |
| **Urutan Acak** | Soal diacak setiap percobaan (Fisher-Yates shuffle) |
| **Navigasi Keyboard** | Jawab soal dengan Enter/Space |
| **Download Hasil** | Unduh laporan kuis sebagai file teks |

###  Achievement Badges
| Badge | Kondisi Unlock |
|-------|----------------|
| 🎓 Pelajar Pertama | Selesaikan 1 pelajaran |
| 🏆 Master AI | Selesaikan semua 15 pelajaran |
| 💯 Jenius Kuis | Raih skor sempurna (100%) |
| 📝 Pencatat | Buat 5 catatan |
| 💬 Sosial | Buat 3 postingan forum |
| 🔥 Konsisten | Raih streak 5 hari |

### 📒 Catatan & Forum
| Fitur | Deskripsi |
|-------|-----------|
| **Catatan Pribadi** | Buat, edit, dan hapus catatan selama belajar |
| **Forum Diskusi** | Buat postingan, balas, dan like postingan pengguna lain |
| **Reply System** | Balas postingan dengan collapsible thread |

###  Keamanan & Data
| Fitur | Deskripsi |
|-------|-----------|
| **XSS Protection** | Sanitasi input untuk mencegah serangan script injection |
| **Ekspor Data** | Download seluruh data user sebagai file JSON |
| **Impor Data** | Restore data dari file JSON backup |
| **Local Storage** | Data tersimpan aman di browser tanpa server |

###  Tampilan & Aksesibilitas
| Fitur | Deskripsi |
|-------|-----------|
| **Dark/Light Mode** | Tema tampilan sesuai preferensi |
| **15 Bahasa** | Indonesia, English, 中文, Español, العربية, हिन्दी, Português, Français, Deutsch, 日本語, 한국어, Русский, Türkçe, Italiano, Tiếng Việt |
| **Responsive Design** | Optimal di desktop & mobile |
| **ARIA Accessibility** | Tab navigation, keyboard support, screen reader friendly |
| **Skip-to-Content** | Navigasi cepat untuk pengguna keyboard |
| **Sertifikat Digital** | Sertifikat PDF otomatis setelah menyelesaikan semua materi |

---

##  Teknologi

| Kategori | Teknologi |
|----------|-----------|
| **Struktur** | HTML5 (Semantic) |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logika** | JavaScript ES6+ (Vanilla, tanpa framework) |
| **Font** | Google Fonts (Inter, Playfair Display) |
| **PDF** | html2pdf.js |
| **Penyimpanan** | Local Storage API (`belajarAI_v2`) |

> **Catatan:** Proyek ini sepenuhnya client-side. Tidak menggunakan React, Vue, atau framework apapun. Murni vanilla HTML/CSS/JS.

---

##  Struktur Proyek

```
learn-artificial-intelligence/
├── index.html              # Halaman utama (310 baris)
├── app.js                  # Logika aplikasi (1143 baris)
├── content-translations.js # Konten materi & terjemahan (811 baris)
├── styles.css              # Styling & animasi (1381 baris)
├── assets/
│   └── img/                # Folder aset gambar
└── README.md               # Dokumentasi ini
```

---

##  Data yang Tersimpan

Semua data pengguna tersimpan secara lokal di browser menggunakan **Local Storage** (key: `belajarAI_v2`):

- Nama pengguna & profil
- Level, poin, dan streak
- Materi yang diselesaikan
- Materi favorit
- Skor kuis
- Catatan pribadi
- Postingan & reply forum
- Achievement badges
- ID sertifikat
- Preferensi bahasa & tema

*Privasi terjaga sepenuhnya — tidak ada data yang dikirim ke server.*

---

##  Tujuan Proyek

- Mempermudah pemula memahami konsep AI dengan cara yang menarik
- Menyediakan sistem pembelajaran berbasis progress & gamifikasi
- Menjadi pondasi untuk pengembangan sistem pembelajaran AI yang lebih pintar

---

##  Rencana Pengembangan

- [ ] Integrasi AI Chat Tutor
- [ ] Sistem rekomendasi materi berbasis machine learning
- [ ] Progress sync antar perangkat
- [ ] Mode offline learning (Service Worker)
- [ ] Sistem mentor & pembelajaran kolaboratif
- [ ] Penambahan konten materi baru

---

##  Kontribusi

Ingin bantu kembangkan proyek ini?

1. **Fork** repositori ini
2. Buat **branch baru** (`git checkout -b fitur-baru`)
3. **Commit** perubahan (`git commit -m 'Tambah fitur baru'`)
4. **Push** ke branch (`git push origin fitur-baru`)
5. Ajukan **Pull Request**

Kontribusi Anda sangat berarti bagi ekosistem pembelajaran AI Indonesia 🇮🇩

---

##  Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
Silakan gunakan, ubah, dan kembangkan untuk kepentingan edukasi.

---

**Dikembangkan oleh [Ahmad Rasidi](https://github.com/rasidi3112)**
© 2025 Belajar AI. Semua hak dilindungi.
