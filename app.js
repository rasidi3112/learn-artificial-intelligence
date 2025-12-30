const STORAGE_KEY = 'belajarAI_v2';

const LESSONS = [
    {
        id: 1,
        title: 'Apa itu Kecerdasan Buatan?',
        desc: 'Pelajari konsep dasar AI, sejarah, dan penerapannya dalam kehidupan sehari-hari.',
        level: 'Pemula',
        duration: '15 menit',
        sections: [
            {
                title: 'Pendahuluan',
                content: 'Artificial Intelligence (AI) atau Kecerdasan Buatan adalah bidang ilmu komputer yang berfokus pada penciptaan sistem yang dapat melakukan tugas-tugas yang biasanya memerlukan kecerdasan manusia. Ini mencakup kemampuan untuk belajar, bernalar, memecahkan masalah, memahami bahasa, dan mengenali pola.'
            },
            {
                title: 'Sejarah AI',
                content: 'AI pertama kali diperkenalkan pada tahun 1956 di konferensi Dartmouth oleh John McCarthy. Sejak saat itu, AI mengalami beberapa fase: periode optimisme (1956-1974), AI Winter pertama (1974-1980), kebangkitan Expert Systems (1980-1987), AI Winter kedua (1987-1993), dan era modern dengan Machine Learning dan Deep Learning (1993-sekarang).'
            },
            {
                title: 'Jenis-jenis AI',
                content: '1. Narrow AI (Weak AI): AI yang dirancang untuk tugas spesifik seperti Siri, Alexa, atau sistem rekomendasi Netflix.\n\n2. General AI (Strong AI): AI yang memiliki kemampuan kognitif setara manusia (masih teoritis).\n\n3. Super AI: AI yang melampaui kecerdasan manusia di semua bidang (masih hipotetis).'
            },
            {
                title: 'Penerapan AI dalam Kehidupan',
                content: '- Asisten Virtual: Siri, Google Assistant, Alexa\n- Rekomendasi: Netflix, Spotify, YouTube\n- Navigasi: Google Maps, Waze\n- E-commerce: Amazon, Tokopedia\n- Kesehatan: Diagnosis penyakit, analisis medis\n- Otomotif: Mobil self-driving Tesla\n- Keamanan: Pengenalan wajah, deteksi fraud\n- Pendidikan: Platform pembelajaran adaptif'
            },
            {
                title: 'Komponen Utama AI',
                content: '1. Machine Learning: Kemampuan sistem untuk belajar dari data\n2. Natural Language Processing: Pemrosesan bahasa manusia\n3. Computer Vision: Pengenalan dan pemrosesan gambar\n4. Robotics: Integrasi AI dengan sistem mekanis\n5. Expert Systems: Sistem berbasis aturan untuk pengambilan keputusan'
            },
            {
                title: 'Kesimpulan',
                content: 'AI telah menjadi bagian integral dari kehidupan modern. Pemahaman dasar tentang AI sangat penting karena teknologi ini akan terus berkembang dan mempengaruhi berbagai aspek kehidupan kita. Dengan memahami AI, kita dapat memanfaatkannya secara optimal dan juga memahami implikasi etis dan sosialnya.'
            }
        ]
    },
    {
        id: 2,
        title: 'Machine Learning Dasar',
        desc: 'Memahami konsep Machine Learning, pembelajaran yang diawasi dan tidak diawasi.',
        level: 'Menengah',
        duration: '20 menit',
        sections: [
            {
                title: 'Apa itu Machine Learning?',
                content: 'Machine Learning (ML) adalah cabang AI yang memungkinkan komputer untuk belajar dan membuat keputusan tanpa diprogram secara eksplisit untuk setiap tugas. Sistem ML menggunakan algoritma untuk mengidentifikasi pola dalam data dan membuat prediksi atau keputusan berdasarkan pola tersebut.'
            },
            {
                title: 'Supervised Learning',
                content: 'Supervised Learning adalah metode di mana model dilatih menggunakan data berlabel. Model belajar dari pasangan input-output untuk membuat prediksi pada data baru.\n\nContoh Algoritma:\n- Linear Regression: Prediksi nilai kontinu (harga rumah)\n- Logistic Regression: Klasifikasi biner (spam/bukan spam)\n- Decision Trees: Keputusan berbasis aturan\n- Random Forest: Ensemble dari decision trees\n- Support Vector Machines (SVM): Klasifikasi dengan margin optimal\n- Neural Networks: Model terinspirasi otak manusia'
            },
            {
                title: 'Unsupervised Learning',
                content: 'Unsupervised Learning adalah metode di mana model menemukan pola dalam data tanpa label.\n\nContoh Algoritma:\n- K-Means Clustering: Mengelompokkan data berdasarkan kesamaan\n- Hierarchical Clustering: Pengelompokan bertingkat\n- Principal Component Analysis (PCA): Reduksi dimensi\n- Association Rules: Menemukan hubungan antar item (market basket analysis)\n- Anomaly Detection: Mendeteksi outlier atau data tidak normal'
            },
            {
                title: 'Reinforcement Learning',
                content: 'Reinforcement Learning adalah metode di mana agen belajar melalui interaksi dengan lingkungan. Agen menerima reward atau punishment berdasarkan aksinya dan belajar untuk memaksimalkan reward.\n\nContoh Penerapan:\n- Game AI (AlphaGo, OpenAI Five)\n- Robot navigasi\n- Sistem rekomendasi\n- Trading otomatis\n- Kontrol kendaraan otonom'
            },
            {
                title: 'Proses Machine Learning',
                content: '1. Pengumpulan Data: Mengumpulkan data yang relevan\n2. Preprocessing: Membersihkan dan mempersiapkan data\n3. Feature Engineering: Memilih dan membuat fitur penting\n4. Pemilihan Model: Memilih algoritma yang sesuai\n5. Training: Melatih model dengan data\n6. Evaluasi: Menguji performa model\n7. Tuning: Mengoptimalkan hyperparameter\n8. Deployment: Menerapkan model ke produksi'
            },
            {
                title: 'Metrik Evaluasi',
                content: 'Klasifikasi:\n- Accuracy: Persentase prediksi benar\n- Precision: Ketepatan prediksi positif\n- Recall: Kemampuan menemukan semua positif\n- F1-Score: Harmonic mean precision dan recall\n\nRegresi:\n- Mean Absolute Error (MAE)\n- Mean Squared Error (MSE)\n- R-squared (R²)'
            }
        ]
    },
    {
        id: 3,
        title: 'Pembelajaran Mendalam & Jaringan Neural',
        desc: 'Pengenalan pembelajaran mendalam dan cara kerja jaringan saraf.',
        level: 'Lanjut',
        duration: '25 menit',
        sections: [
            {
                title: 'Apa itu Deep Learning?',
                content: 'Deep Learning adalah subset dari Machine Learning yang menggunakan neural networks dengan banyak layer (deep neural networks) untuk mempelajari representasi data secara hierarkis. Deep Learning sangat efektif untuk tugas-tugas kompleks seperti pengenalan gambar, pemrosesan bahasa, dan sintesis suara.'
            },
            {
                title: 'Struktur Neural Network',
                content: 'Neural Network terdiri dari tiga komponen utama:\n\n1. Input Layer: Menerima data masukan\n2. Hidden Layers: Memproses data melalui transformasi nonlinear\n3. Output Layer: Menghasilkan prediksi akhir\n\nSetiap neuron dalam layer terhubung ke neuron di layer berikutnya melalui weights (bobot). Setiap koneksi memiliki weight yang menentukan kekuatan hubungan.'
            },
            {
                title: 'Cara Kerja Neural Network',
                content: 'Forward Propagation:\n1. Input diterima di input layer\n2. Data dikalikan dengan weights dan ditambah bias\n3. Hasil melewati fungsi aktivasi (ReLU, Sigmoid, Tanh)\n4. Proses berlanjut ke layer berikutnya hingga output\n\nBackpropagation:\n1. Menghitung error (loss) di output\n2. Menyebarkan error ke layer sebelumnya\n3. Mengupdate weights menggunakan gradient descent\n4. Proses diulang hingga konvergen'
            },
            {
                title: 'Arsitektur Deep Learning',
                content: 'CNN (Convolutional Neural Network):\n- Untuk data berbentuk grid (gambar)\n- Menggunakan convolutional layers untuk ekstraksi fitur\n- Aplikasi: Klasifikasi gambar, deteksi objek, segmentasi\n\nRNN (Recurrent Neural Network):\n- Untuk data sekuensial (teks, time series)\n- Memiliki memori untuk informasi sebelumnya\n- Variasi: LSTM, GRU\n\nTransformer:\n- Arsitektur modern untuk NLP\n- Menggunakan mekanisme attention\n- Contoh: BERT, GPT, ChatGPT'
            },
            {
                title: 'Framework Deep Learning',
                content: '1. TensorFlow (Google):\n   - Ecosystem lengkap\n   - TensorFlow Lite untuk mobile\n   - TensorFlow.js untuk browser\n\n2. PyTorch (Meta/Facebook):\n   - Dynamic computation graph\n   - Populer di riset\n   - Mudah di-debug\n\n3. Keras:\n   - High-level API\n   - Bisa berjalan di atas TensorFlow\n   - Cocok untuk pemula\n\n4. JAX (Google):\n   - Automatic differentiation\n   - Performa tinggi dengan XLA'
            },
            {
                title: 'Tantangan Deep Learning',
                content: '- Membutuhkan data dalam jumlah besar\n- Komputasi intensif (GPU/TPU required)\n- Overfitting pada dataset kecil\n- Interpretabilitas rendah (black box)\n- Hyperparameter tuning kompleks\n\nSolusi:\n- Transfer Learning: Menggunakan model pre-trained\n- Data Augmentation: Memperbanyak data secara artifisial\n- Regularization: Dropout, L1/L2 regularization\n- Early Stopping: Menghentikan training sebelum overfit'
            }
        ]
    },
    {
        id: 4,
        title: 'Natural Language Processing (NLP)',
        desc: 'Bagaimana AI memahami dan memproses bahasa manusia.',
        level: 'Menengah',
        duration: '18 menit',
        sections: [
            {
                title: 'Pengenalan NLP',
                content: 'Natural Language Processing (NLP) adalah cabang AI yang memungkinkan komputer untuk memahami, menginterpretasi, dan menghasilkan bahasa manusia. NLP menggabungkan linguistik komputasional dengan machine learning dan deep learning untuk memproses teks dan ucapan.'
            },
            {
                title: 'Preprocessing Teks',
                content: '1. Tokenization: Memecah teks menjadi kata/kalimat\n2. Lowercasing: Mengubah ke huruf kecil\n3. Stopword Removal: Menghapus kata umum (dan, atau, yang)\n4. Stemming: Mengubah kata ke bentuk dasar (berlari → lari)\n5. Lemmatization: Seperti stemming tapi lebih akurat\n6. Part-of-Speech Tagging: Menandai jenis kata\n7. Named Entity Recognition: Mengidentifikasi entitas (nama, lokasi)'
            },
            {
                title: 'Representasi Teks',
                content: 'Bag of Words (BoW):\n- Representasi sederhana berdasarkan frekuensi kata\n- Mengabaikan urutan kata\n\nTF-IDF:\n- Term Frequency-Inverse Document Frequency\n- Memberi bobot berdasarkan kepentingan kata\n\nWord Embeddings:\n- Word2Vec: Skip-gram atau CBOW\n- GloVe: Global Vectors\n- FastText: Subword embeddings\n\nContextual Embeddings:\n- ELMo: Embeddings dari Language Models\n- BERT: Bidirectional representations\n- GPT: Generative Pre-trained Transformer'
            },
            {
                title: 'Aplikasi NLP',
                content: '1. Sentiment Analysis: Menentukan sentimen positif/negatif\n2. Machine Translation: Google Translate, DeepL\n3. Text Summarization: Meringkas dokumen\n4. Question Answering: Menjawab pertanyaan\n5. Chatbots: Customer service otomatis\n6. Speech Recognition: Siri, Google Speech\n7. Text Generation: ChatGPT, Claude\n8. Named Entity Recognition: Ekstraksi informasi\n9. Text Classification: Kategorisasi dokumen\n10. Information Extraction: Mengekstrak data terstruktur'
            },
            {
                title: 'Large Language Models (LLM)',
                content: 'LLM adalah model bahasa berskala besar yang dilatih pada dataset teks yang sangat besar.\n\nContoh LLM:\n- GPT-4 (OpenAI): Generasi teks, coding, analisis\n- Claude (Anthropic): Asisten AI yang aman\n- Gemini (Google): Multimodal AI\n- LLaMA (Meta): Open-source LLM\n- Mistral: Efficient open-source model\n\nKemampuan:\n- Few-shot learning\n- Chain-of-thought reasoning\n- Code generation\n- Multilingual understanding'
            },
            {
                title: 'Tantangan NLP',
                content: '- Ambiguitas: Satu kata punya banyak makna\n- Konteks: Makna bergantung konteks\n- Sarkasme dan Ironi: Sulit dideteksi\n- Bahasa Informal: Slang, typo, singkatan\n- Bahasa dengan Sumber Terbatas: Tidak semua bahasa punya data cukup\n- Bias: Model bisa mewarisi bias dari data training\n- Hallucination: LLM bisa menghasilkan informasi salah'
            }
        ]
    },
    {
        id: 5,
        title: 'Computer Vision',
        desc: 'Teknologi AI untuk mengenali dan memproses gambar dan video.',
        level: 'Lanjut',
        duration: '22 menit',
        sections: [
            {
                title: 'Pengenalan Computer Vision',
                content: 'Computer Vision adalah bidang AI yang memungkinkan komputer untuk menginterpretasi dan memahami informasi visual dari dunia nyata, seperti gambar dan video. Teknologi ini meniru cara manusia melihat dan memproses informasi visual.'
            },
            {
                title: 'Proses Pengolahan Gambar',
                content: '1. Image Acquisition: Mengambil gambar dari kamera/sensor\n2. Preprocessing: Resize, normalisasi, augmentasi\n3. Feature Extraction: Mengekstrak fitur penting\n4. Model Inference: Menjalankan model untuk prediksi\n5. Post-processing: Memproses hasil (NMS untuk deteksi)\n\nTeknik Preprocessing:\n- Grayscale conversion\n- Histogram equalization\n- Noise reduction\n- Edge detection (Sobel, Canny)\n- Image augmentation (flip, rotate, crop)'
            },
            {
                title: 'Tugas Computer Vision',
                content: 'Image Classification:\n- Mengkategorikan gambar ke dalam kelas\n- Contoh: Kucing vs Anjing, jenis tanaman\n\nObject Detection:\n- Mendeteksi dan melokalisasi objek dalam gambar\n- Algoritma: YOLO, SSD, Faster R-CNN\n\nSemantic Segmentation:\n- Mengklasifikasikan setiap pixel\n- Contoh: Segmentasi jalan untuk self-driving car\n\nInstance Segmentation:\n- Segmentasi + membedakan instance objek\n- Algoritma: Mask R-CNN\n\nPose Estimation:\n- Mendeteksi posisi tubuh manusia\n- Contoh: OpenPose, MediaPipe'
            },
            {
                title: 'Arsitektur CNN untuk Vision',
                content: 'LeNet (1998): Pionir CNN untuk digit recognition\n\nAlexNet (2012): Breakthrough di ImageNet, ReLU activation\n\nVGGNet (2014): Deeper network dengan 3x3 convolutions\n\nGoogLeNet/Inception (2014): Inception modules untuk efisiensi\n\nResNet (2015): Skip connections untuk very deep networks\n\nEfficientNet (2019): Balanced scaling untuk akurasi dan efisiensi\n\nVision Transformer (2020): Transformer untuk gambar'
            },
            {
                title: 'Aplikasi Computer Vision',
                content: '1. Self-Driving Cars: Tesla, Waymo\n2. Facial Recognition: Face ID, keamanan\n3. Medical Imaging: Deteksi kanker, analisis X-ray\n4. Augmented Reality: AR filters, Pokemon Go\n5. Quality Control: Inspeksi produk di pabrik\n6. Agriculture: Deteksi penyakit tanaman, drone monitoring\n7. Retail: Amazon Go (cashier-less stores)\n8. Sports Analytics: Pelacakan pemain, analisis performa\n9. Document Processing: OCR, digitalisasi\n10. Security: Surveillance, deteksi anomali'
            },
            {
                title: 'Tools dan Framework',
                content: 'OpenCV:\n- Library open-source untuk computer vision\n- Mendukung C++, Python, Java\n- Fitur: Image processing, video capture, object detection\n\nMediaPipe (Google):\n- Face detection, hand tracking, pose estimation\n- Optimized untuk real-time pada device\n\nTorchvision (PyTorch):\n- Datasets, transforms, pre-trained models\n\nTensorFlow Hub:\n- Repository model pre-trained\n\nHugging Face:\n- Vision Transformers dan model multimodal'
            }
        ]
    }
];
const QUIZ = [
    // Dasar AI
    { q: 'Apa kepanjangan dari AI?', opts: ['Advanced Integration', 'Artificial Intelligence', 'Automated Information', 'Applied Intelligence'], ans: 1 },
    { q: 'Siapa yang pertama kali memperkenalkan istilah AI pada tahun 1956?', opts: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Geoffrey Hinton'], ans: 1 },
    { q: 'Jenis AI yang dirancang untuk tugas spesifik disebut?', opts: ['Super AI', 'General AI', 'Narrow AI', 'Strong AI'], ans: 2 },
    // Machine Learning
    { q: 'Machine Learning adalah bagian dari?', opts: ['Database Management', 'Artificial Intelligence', 'Web Development', 'Network Security'], ans: 1 },
    { q: 'Supervised Learning menggunakan data yang?', opts: ['Tidak berlabel', 'Berlabel', 'Random', 'Kosong'], ans: 1 },
    { q: 'Algoritma K-Means termasuk dalam kategori?', opts: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning'], ans: 1 },
    { q: 'Metrik evaluasi untuk mengukur ketepatan prediksi positif adalah?', opts: ['Recall', 'Precision', 'Accuracy', 'F1-Score'], ans: 1 },
    // Deep Learning
    { q: 'Apa yang dimaksud dengan Neural Network?', opts: ['Jaringan komputer', 'Model terinspirasi otak manusia', 'Sistem operasi', 'Bahasa pemrograman'], ans: 1 },
    { q: 'Fungsi aktivasi yang populer digunakan di hidden layer adalah?', opts: ['Softmax', 'ReLU', 'Linear', 'Step'], ans: 1 },
    { q: 'CNN adalah arsitektur yang cocok untuk?', opts: ['Data teks', 'Data gambar', 'Data audio', 'Data tabular'], ans: 1 },
    // NLP
    { q: 'NLP digunakan untuk?', opts: ['Mengedit gambar', 'Bermain game', 'Memproses bahasa manusia', 'Membuat musik'], ans: 2 },
    { q: 'Proses memecah teks menjadi kata-kata disebut?', opts: ['Stemming', 'Lemmatization', 'Tokenization', 'Embedding'], ans: 2 },
    { q: 'GPT adalah singkatan dari?', opts: ['General Processing Tool', 'Generative Pre-trained Transformer', 'Global Pattern Technology', 'Graph Processing Technique'], ans: 1 },
    // Computer Vision
    { q: 'Computer Vision memungkinkan AI untuk?', opts: ['Mendengar suara', 'Mengenali gambar dan objek', 'Menulis kode', 'Mengirim email'], ans: 1 },
    { q: 'YOLO adalah algoritma untuk?', opts: ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'Image Generation'], ans: 1 }
];

let data = { name: 'Pengguna Baru', level: 3, points: 750, completed: [1, 2, 3, 4, 5], favorites: [], notes: [], forum: [], scores: [{ date: new Date().toLocaleDateString('id-ID'), score: 100 }], darkMode: false, streak: 5, leaderboard: [{ name: 'Ahmad Rizki', level: 10, points: 5000, completed: 25 }, { name: 'Siti Nurhaliza', level: 9, points: 4800, completed: 24 }, { name: 'Budi Santoso', level: 8, points: 4600, completed: 23 }, { name: 'Dewi Lestari', level: 7, points: 4200, completed: 21 }, { name: 'Rudi Hermawan', level: 6, points: 3800, completed: 19 }] };
let quiz = { current: 0, score: 0, answered: new Set() };

function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) data = JSON.parse(saved);
    if (data.darkMode) document.body.classList.add('dark-mode');
    document.getElementById('userName').textContent = data.name;
    document.getElementById('levelBadge').textContent = 'Level ' + data.level;
    renderLessons(); initQuiz(); renderLeaderboard(); updateDashboard();
}

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

function showTab(btn, id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
    if (id === 'catatan') renderNotes();
    if (id === 'forum') renderForum();
    if (id === 'sertifikat') showCertificate();
}

function toggleTheme() {
    data.darkMode = !data.darkMode;
    document.body.classList.toggle('dark-mode');
    save();
}

function renderLessons() {
    const c = document.getElementById('lessonsContainer');
    c.innerHTML = LESSONS.map(l => {
        const done = data.completed.includes(l.id), fav = data.favorites.includes(l.id);
        return `<div class="lesson-card ${done ? 'completed' : ''}" onclick="viewLesson(${l.id})">
            <div class="lesson-header"><span class="lesson-title">${l.title}</span><span class="lesson-status ${done ? 'done' : 'new'}">${done ? 'Selesai' : 'Baru'}</span></div>
            <p class="lesson-desc">${l.desc}</p>
            <div class="lesson-meta"><span>Tingkat: ${l.level}</span><span>Durasi: ${l.duration}</span></div>
            <div class="lesson-actions"><button class="btn-fav ${fav ? 'active' : ''}" onclick="toggleFav(event,${l.id})">${fav ? 'Hapus Favorit' : 'Tambah Favorit'}</button></div>
        </div>`;
    }).join('');
    renderFavorites();
}

function viewLesson(id) {
    const l = LESSONS.find(x => x.id === id);
    if (l) {
        if (!data.completed.includes(id)) {
            data.completed.push(id);
            data.points += 50;
            save();
            updateDashboard();
            renderLessons();
        }

        let html = `
            <div class="lesson-modal-header" style="margin-bottom:30px;padding-bottom:20px;border-bottom:2px solid var(--border-light)">
                <h2 style="font-size:1.8rem;font-weight:800;color:var(--primary);margin-bottom:8px">${l.title}</h2>
                <p style="color:var(--text-secondary);margin-bottom:16px">${l.desc}</p>
                <div style="display:flex;gap:20px;font-size:0.9rem;color:var(--text-secondary)">
                    <span style="background:var(--bg-light);padding:6px 14px;border-radius:20px">Tingkat: ${l.level}</span>
                    <span style="background:var(--bg-light);padding:6px 14px;border-radius:20px">Durasi: ${l.duration}</span>
                    <span style="background:rgba(16,185,129,0.1);color:var(--success);padding:6px 14px;border-radius:20px">Selesai</span>
                </div>
            </div>
        `;

        if (l.sections) {
            html += '<div class="lesson-sections">';
            l.sections.forEach((section, idx) => {
                html += `
                    <div class="lesson-section" style="margin-bottom:28px">
                        <h3 style="font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:12px;display:flex;align-items:center;gap:10px">
                            <span style="background:var(--primary);color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.85rem">${idx + 1}</span>
                            ${section.title}
                        </h3>
                        <div style="color:var(--text-secondary);line-height:1.8;padding-left:38px;white-space:pre-wrap">${section.content}</div>
                    </div>
                `;
            });
            html += '</div>';
        }

        html += `
            <div style="margin-top:30px;padding-top:20px;border-top:2px solid var(--border-light);display:flex;gap:12px;flex-wrap:wrap">
                <button class="btn-primary" onclick="closeModal('lessonModal')">Selesai Membaca</button>
                <button class="btn-secondary" onclick="addNoteFromLesson('${l.title}')">Buat Catatan</button>
            </div>
        `;

        document.getElementById('lessonModalContent').innerHTML = html;
        document.getElementById('lessonModal').classList.add('active');
        notify('success', 'Membuka: ' + l.title);
    }
}

function addNoteFromLesson(title) {
    closeModal('lessonModal');
    document.getElementById('noteTitleInput').value = 'Catatan: ' + title;
    openNoteModal();
}

function toggleFav(e, id) {
    e.stopPropagation();
    const i = data.favorites.indexOf(id);
    if (i > -1) data.favorites.splice(i, 1); else data.favorites.push(id);
    save(); renderLessons();
}

function renderFavorites() {
    const c = document.getElementById('favoritesContainer');
    const favs = LESSONS.filter(l => data.favorites.includes(l.id));
    if (!favs.length) { c.innerHTML = '<div class="empty-state"><p>Belum ada materi favorit.</p></div>'; return; }
    c.innerHTML = favs.map(l => `<div class="lesson-card" onclick="viewLesson(${l.id})"><div class="lesson-header"><span class="lesson-title">${l.title}</span></div><p class="lesson-desc">${l.desc}</p><button class="btn-fav active" onclick="toggleFav(event,${l.id})">Hapus Favorit</button></div>`).join('');
}

function searchMateri() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    if (!q.trim()) { renderLessons(); return; }
    const results = LESSONS.filter(l => l.title.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q));
    const c = document.getElementById('lessonsContainer');
    if (!results.length) { c.innerHTML = '<div class="empty-state"><p>Tidak ada materi yang sesuai.</p></div>'; return; }
    c.innerHTML = results.map(l => {
        const done = data.completed.includes(l.id);
        return `<div class="lesson-card ${done ? 'completed' : ''}" onclick="viewLesson(${l.id})"><div class="lesson-header"><span class="lesson-title">${l.title}</span><span class="lesson-status ${done ? 'done' : 'new'}">${done ? 'Selesai' : 'Baru'}</span></div><p class="lesson-desc">${l.desc}</p></div>`;
    }).join('');
}

function initQuiz() {
    const c = document.getElementById('quizContent');
    c.innerHTML = QUIZ.map((q, i) => `<div class="quiz-item ${i === 0 ? 'active' : ''}" id="q${i}" style="${i === 0 ? '' : 'display:none'}">
        <div class="quiz-header"><div class="question">${i + 1}. ${q.q}</div><span class="quiz-counter">Soal ${i + 1}/${QUIZ.length}</span></div>
        <div class="options">${q.opts.map((o, j) => `<div class="option" onclick="checkAnswer(${i},${j},this)">${o}</div>`).join('')}</div>
    </div>`).join('');
}

function checkAnswer(qi, oi, el) {
    if (quiz.answered.has(qi)) return;
    const correct = oi === QUIZ[qi].ans;
    el.parentElement.querySelectorAll('.option').forEach(o => o.style.pointerEvents = 'none');
    if (correct) { el.classList.add('correct'); quiz.score++; notify('success', 'Jawaban Benar!'); }
    else { el.classList.add('wrong'); el.parentElement.querySelectorAll('.option')[QUIZ[qi].ans].classList.add('correct'); notify('error', 'Jawaban Salah!'); }
    quiz.answered.add(qi);
    updateQuizProgress();
    setTimeout(() => {
        if (qi < QUIZ.length - 1) { document.getElementById('q' + qi).style.display = 'none'; document.getElementById('q' + (qi + 1)).style.display = 'block'; }
        else showQuizResult();
    }, 1200);
}

function updateQuizProgress() {
    const p = (quiz.answered.size / QUIZ.length) * 100;
    document.getElementById('quizProgressBar').style.width = p + '%';
    document.getElementById('quizProgressPercent').textContent = Math.round(p) + '%';
}

function showQuizResult() {
    document.querySelectorAll('.quiz-item').forEach(q => q.style.display = 'none');
    const r = document.getElementById('quizResult'); r.style.display = 'block';
    const pct = (quiz.score / QUIZ.length) * 100;
    document.getElementById('scoreDisplay').textContent = quiz.score + '/' + QUIZ.length;
    let msg = pct === 100 ? 'Sempurna! Anda menguasai semua materi!' : pct >= 80 ? 'Luar biasa! Nilai Anda sangat bagus!' : pct >= 60 ? 'Cukup baik! Terus belajar!' : 'Jangan menyerah! Coba lagi!';
    document.getElementById('resultMessage').textContent = msg;
    data.points += pct === 100 ? 500 : pct >= 80 ? 400 : pct >= 60 ? 300 : 100;
    data.scores.push({ date: new Date().toLocaleDateString('id-ID'), score: pct });
    data.level = Math.floor(data.points / 500) + 1;
    save(); updateDashboard();
}

function resetQuiz() {
    quiz = { current: 0, score: 0, answered: new Set() };
    document.getElementById('quizResult').style.display = 'none';
    initQuiz(); updateQuizProgress();
}

function downloadResult() {
    const txt = `LAPORAN HASIL KUIS\n\nNama: ${data.name}\nTanggal: ${new Date().toLocaleDateString('id-ID')}\nSkor: ${quiz.score}/${QUIZ.length}\nPersentase: ${Math.round((quiz.score / QUIZ.length) * 100)}%`;
    const blob = new Blob([txt], { type: 'text/plain' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'hasil-kuis.txt'; a.click();
}

function openNoteModal() { document.getElementById('noteModal').classList.add('active'); }
function openPostModal() { document.getElementById('postModal').classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function addNote() {
    const t = document.getElementById('noteTitleInput').value, c = document.getElementById('noteTextInput').value;
    if (!t || !c) { notify('warning', 'Lengkapi semua field!'); return; }
    data.notes.push({ id: Date.now(), title: t, text: c, date: new Date().toLocaleDateString('id-ID') });
    save(); renderNotes(); closeModal('noteModal');
    document.getElementById('noteTitleInput').value = ''; document.getElementById('noteTextInput').value = '';
    notify('success', 'Catatan berhasil ditambahkan!');
}

function renderNotes() {
    const c = document.getElementById('notesContainer');
    if (!data.notes.length) { c.innerHTML = '<div class="empty-state"><p>Belum ada catatan.</p></div>'; return; }
    const colors = ['', 'pink', 'blue', 'green'];
    c.innerHTML = data.notes.map((n, i) => `<div class="note-card ${colors[i % 4]}"><div class="note-title">${n.title}</div><div class="note-text">${n.text}</div><div class="note-footer"><span class="note-date">${n.date}</span><button class="note-delete" onclick="deleteNote(${n.id})">Hapus</button></div></div>`).join('');
}

function deleteNote(id) { data.notes = data.notes.filter(n => n.id !== id); save(); renderNotes(); notify('success', 'Catatan dihapus!'); }

function addPost() {
    const t = document.getElementById('postTitleInput').value, c = document.getElementById('postTextInput').value;
    if (!t || !c) { notify('warning', 'Lengkapi semua field!'); return; }
    data.forum.push({ id: Date.now(), author: data.name, title: t, text: c, date: new Date().toLocaleDateString('id-ID') });
    save(); renderForum(); closeModal('postModal');
    document.getElementById('postTitleInput').value = ''; document.getElementById('postTextInput').value = '';
    notify('success', 'Postingan berhasil dibuat!');
}

function renderForum() {
    const c = document.getElementById('forumContainer');
    if (!data.forum.length) { c.innerHTML = '<div class="empty-state"><p>Belum ada postingan.</p></div>'; return; }
    c.innerHTML = data.forum.slice().reverse().map(p => `<div class="post-card"><div class="post-header"><span class="post-author">${p.author}</span><span class="post-time">${p.date}</span></div><div class="post-title">${p.title}</div><div class="post-content">${p.text}</div><div class="post-actions"><span class="post-action">Suka</span><span class="post-action">Balas</span><span class="post-action" onclick="deletePost(${p.id})">Hapus</span></div></div>`).join('');
}

function deletePost(id) { data.forum = data.forum.filter(p => p.id !== id); save(); renderForum(); notify('success', 'Postingan dihapus!'); }

function renderLeaderboard() {
    const b = document.getElementById('leaderboardBody');
    b.innerHTML = data.leaderboard.map((u, i) => `<tr><td class="rank rank-${i + 1}">${i < 3 ? ['#1', '#2', '#3'][i] : i + 1}</td><td>${u.name}</td><td>Level ${u.level}</td><td><strong>${u.points.toLocaleString('id-ID')}</strong></td><td>${u.completed} Materi</td></tr>`).join('');
}

function updateDashboard() {
    document.getElementById('materiSelesai').textContent = data.completed.length;
    document.getElementById('skorRata').textContent = data.scores.length ? Math.round(data.scores.reduce((a, b) => a + b.score, 0) / data.scores.length) + '%' : '0%';
    document.getElementById('streakBelajar').textContent = data.streak;
    document.getElementById('poinTotal').textContent = data.points.toLocaleString('id-ID');
    const p = (data.completed.length / LESSONS.length) * 100;
    document.getElementById('progressBar').style.width = p + '%';
    document.getElementById('progressPercent').textContent = Math.round(p) + '%';
    document.getElementById('levelBadge').textContent = 'Level ' + data.level;
}

function showUserProfile() {
    document.getElementById('userNameInput').value = data.name;
    document.getElementById('profileLevel').textContent = data.level;
    document.getElementById('profilePoints').textContent = data.points.toLocaleString('id-ID');
    document.getElementById('profileCompleted').textContent = data.completed.length;
    document.getElementById('userModal').classList.add('active');
}

function saveProfile() {
    const n = document.getElementById('userNameInput').value.trim();
    if (n) { data.name = n; save(); document.getElementById('userName').textContent = n; closeModal('userModal'); notify('success', 'Profil diperbarui!'); }
}

function showCertificate() {
    const c = document.getElementById('certContainer');
    if (data.completed.length === LESSONS.length) {
        document.getElementById('certBtn').style.display = 'inline-block';
        document.getElementById('certMsg').style.display = 'none';
        const certId = 'CERT/' + new Date().getFullYear() + '/AI/' + Date.now().toString(36).toUpperCase();
        const issueDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        const issueDateID = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

        // Tanda tangan dengan font tulisan tangan
        const signatureSVG = `<div style="font-family:'Brush Script MT',cursive;font-size:42px;color:#1a1a1a;font-style:italic;transform:rotate(-5deg);">Rasidi</div>`;

        c.innerHTML = `
            <div id="certificatePDF" style="background:linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%);padding:0;max-width:1000px;margin:30px auto;position:relative;box-shadow: 0 20px 60px rgba(0,0,0,0.15);font-family:'Inter',sans-serif;">
                
                <!-- Outer Border Pattern -->
                <div style="border:4px solid #1a365d;padding:8px;background:#1a365d;">
                    <div style="border:2px solid #c9a227;padding:4px;background:transparent;">
                        <div style="background:linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%);padding:50px 60px;">
                            
                            <!-- Top Decorative Line -->
                            <div style="display:flex;align-items:center;justify-content:center;margin-bottom:30px;">
                                <div style="flex:1;height:1px;background:linear-gradient(90deg,transparent,#c9a227);"></div>
                                <div style="padding:0 20px;color:#c9a227;font-size:20px;">✦</div>
                                <div style="flex:1;height:1px;background:linear-gradient(90deg,#c9a227,transparent);"></div>
                            </div>
                            
                            <!-- Institution Header -->
                            <div style="text-align:center;margin-bottom:25px;">
                                <div style="font-size:13px;letter-spacing:4px;color:#666;text-transform:uppercase;margin-bottom:8px;">Belajar AI Learning Platform</div>
                                <div style="font-size:11px;color:#888;letter-spacing:2px;">INDONESIA</div>
                            </div>
                            
                            <!-- Main Title -->
                            <div style="text-align:center;margin-bottom:35px;">
                                <h1 style="font-family:'Playfair Display',serif;font-size:52px;color:#1a365d;font-weight:600;margin:0;letter-spacing:8px;text-transform:uppercase;">Certificate</h1>
                                <div style="font-family:'Playfair Display',serif;font-size:18px;color:#c9a227;margin-top:8px;font-style:italic;letter-spacing:3px;">of Completion</div>
                            </div>
                            
                            <!-- Decorative Element -->
                            <div style="display:flex;justify-content:center;margin-bottom:30px;">
                                <div style="width:150px;height:2px;background:linear-gradient(90deg,transparent,#1a365d,transparent);"></div>
                            </div>
                            
                            <!-- Certificate Body -->
                            <div style="text-align:center;margin-bottom:35px;">
                                <p style="font-size:14px;color:#555;margin-bottom:20px;letter-spacing:1px;">This is to certify that / Dengan ini menyatakan bahwa</p>
                                
                                <h2 style="font-family:'Playfair Display',serif;font-size:42px;color:#1a365d;margin:25px 0;font-weight:500;">${data.name}</h2>
                                
                                <div style="width:300px;height:1px;background:#c9a227;margin:0 auto 25px;"></div>
                                
                                <p style="font-size:15px;color:#444;max-width:650px;margin:0 auto;line-height:2;">
                                    has successfully completed the comprehensive training program in<br>
                                    <em style="color:#666;">/ telah berhasil menyelesaikan program pelatihan komprehensif dalam</em>
                                </p>
                                
                                <h3 style="font-family:'Playfair Display',serif;font-size:26px;color:#1a365d;margin:25px 0 10px;font-weight:600;">
                                    "Fundamentals of Artificial Intelligence"
                                </h3>
                                <p style="font-size:13px;color:#888;font-style:italic;">Dasar-Dasar Kecerdasan Buatan</p>
                                
                                <p style="font-size:13px;color:#666;margin-top:20px;">
                                    Covering: Machine Learning, Deep Learning, Neural Networks, NLP & Computer Vision
                                </p>
                            </div>
                            
                            <!-- Signature Section -->
                            <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:50px;padding-top:30px;border-top:1px solid #e5e5e5;">
                                
                                <!-- Left: Signature -->
                                <div style="text-align:center;flex:1;">
                                    <div style="margin-bottom:5px;">${signatureSVG}</div>
                                    <div style="width:180px;border-top:2px solid #1a365d;margin:0 auto;padding-top:10px;">
                                        <div style="font-size:14px;font-weight:700;color:#1a365d;">Ahmad Rasidi</div>
                                        <div style="font-size:11px;color:#666;margin-top:2px;">Founder & Lead Instructor</div>
                                        <div style="font-size:10px;color:#888;">Belajar AI Platform</div>
                                    </div>
                                </div>
                                
                                <!-- Center: Seal -->
                                <div style="text-align:center;flex:1;">
                                    <div style="width:100px;height:100px;border:3px solid #c9a227;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,#fffef5,#f8f6f0);box-shadow:inset 0 0 20px rgba(201,162,39,0.1);">
                                        <div style="text-align:center;">
                                            <div style="font-size:9px;color:#c9a227;font-weight:700;letter-spacing:1px;">VERIFIED</div>
                                            <div style="font-size:18px;color:#1a365d;font-weight:800;margin:3px 0;">AI</div>
                                            <div style="font-size:8px;color:#666;">CERTIFIED</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Right: Date & ID -->
                                <div style="text-align:center;flex:1;">
                                    <div style="margin-bottom:15px;">
                                        <div style="font-size:11px;color:#888;margin-bottom:3px;">Date of Issue / Tanggal Terbit</div>
                                        <div style="font-size:14px;font-weight:600;color:#1a365d;">${issueDate}</div>
                                        <div style="font-size:11px;color:#666;">${issueDateID}</div>
                                    </div>
                                    <div style="background:#f5f5f5;padding:10px 15px;border-radius:4px;border:1px solid #e0e0e0;">
                                        <div style="font-size:9px;color:#888;letter-spacing:1px;">CERTIFICATE ID</div>
                                        <div style="font-size:11px;font-weight:600;color:#1a365d;font-family:monospace;margin-top:3px;">${certId}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Bottom Note -->
                            <div style="text-align:center;margin-top:30px;padding-top:20px;border-top:1px solid #e5e5e5;">
                                <p style="font-size:10px;color:#999;line-height:1.8;">
                                    This certificate is issued by Belajar AI Platform and is valid without physical signature.<br>
                                    Verify authenticity at: belajar-ai.id/verify/${certId.replace(/\//g, '-')}
                                </p>
                            </div>
                            
                            <!-- Bottom Decorative Line -->
                            <div style="display:flex;align-items:center;justify-content:center;margin-top:25px;">
                                <div style="flex:1;height:1px;background:linear-gradient(90deg,transparent,#c9a227);"></div>
                                <div style="padding:0 20px;color:#c9a227;font-size:20px;">✦</div>
                                <div style="flex:1;height:1px;background:linear-gradient(90deg,#c9a227,transparent);"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function downloadCertificate() {
    const element = document.getElementById('certificatePDF');
    if (!element) {
        notify('error', 'Sertifikat tidak ditemukan!');
        return;
    }

    notify('success', 'Menyiapkan PDF...');

    const opt = {
        margin: 10,
        filename: 'Sertifikat-Belajar-AI-' + data.name.replace(/\s+/g, '-') + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        notify('success', 'Sertifikat PDF berhasil diunduh!');
    }).catch(err => {
        notify('error', 'Gagal membuat PDF: ' + err.message);
    });
}

function notify(type, msg) {
    const n = document.createElement('div'); n.className = 'notification ' + type; n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(() => { n.style.opacity = '0'; setTimeout(() => n.remove(), 300); }, 3000);
}

function showNotifications() { notify('success', 'Anda memiliki 3 notifikasi baru!'); }

window.onclick = e => { if (e.target.classList.contains('modal')) e.target.classList.remove('active'); };
document.addEventListener('DOMContentLoaded', init);
