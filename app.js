const STORAGE_KEY = 'belajarAI_v2';

const translations = {
    id: { app_title: 'Belajar AI', app_desc: 'Platform Pembelajaran AI Premium untuk Pemula', tab_materi: 'Materi', tab_kuis: 'Kuis', tab_catatan: 'Catatan', tab_forum: 'Forum', tab_leaderboard: 'Leaderboard', tab_sertifikat: 'Sertifikat', dashboard_title: 'Dashboard Pembelajaran', stat_materi: 'Materi Selesai', stat_skor: 'Skor Rata-Rata', stat_streak: 'Streak Belajar', stat_poin: 'Total Poin', progress_title: 'Progress Pembelajaran', search_placeholder: 'Cari materi pembelajaran...', btn_cari: 'Cari', list_materi_title: 'Daftar Materi Pembelajaran', fav_materi_title: 'Materi Favorit', fav_empty: 'Belum ada materi favorit.', footer_quote: '"Belajar AI bukan tentang menjadi robot, tapi memahami bagaimana kecerdasan bisa membuat manusia lebih bijak."', footer_dev: 'Dikembangkan oleh', footer_desc: 'Proyek ini dikembangkan untuk tujuan pendidikan dan pembelajaran.', footer_copy: '© 2025 Belajar AI. Semua hak dilindungi.' },
    en: { app_title: 'Learn AI', app_desc: 'Premium AI Learning Platform for Beginners', tab_materi: 'Lessons', tab_kuis: 'Quiz', tab_catatan: 'Notes', tab_forum: 'Forum', tab_leaderboard: 'Leaderboard', tab_sertifikat: 'Certificate', dashboard_title: 'Learning Dashboard', stat_materi: 'Completed Lessons', stat_skor: 'Average Score', stat_streak: 'Learning Streak', stat_poin: 'Total Points', progress_title: 'Learning Progress', search_placeholder: 'Search for lessons...', btn_cari: 'Search', list_materi_title: 'List of Learning Materials', fav_materi_title: 'Favorite Lessons', fav_empty: 'No favorite lessons yet.', footer_quote: '"Learning AI is not about becoming a robot, but understanding how intelligence can make humans wiser."', footer_dev: 'Developed by', footer_desc: 'This project was developed for educational and learning purposes.', footer_copy: '© 2025 Learn AI. All rights reserved.' },
    zh: { app_title: '学习 AI', app_desc: '面向初学者的高级 AI 学习平台', tab_materi: '课程', tab_kuis: '测验', tab_catatan: '笔记', tab_forum: '论坛', tab_leaderboard: '排行榜', tab_sertifikat: '证书', dashboard_title: '学习仪表板', stat_materi: '已完成课程', stat_skor: '平均分', stat_streak: '学习连续天数', stat_poin: '总积分', progress_title: '学习进度', search_placeholder: '搜索课程...', btn_cari: '搜索', list_materi_title: '学习资料列表', fav_materi_title: '收藏夹', fav_empty: '暂无收藏的课程。', footer_quote: '"学习人工智能不是为了成为机器人，而是为了理解智能如何让人类变得更明智。"', footer_dev: '开发者：', footer_desc: '本项目为教育和学习目的而开发。', footer_copy: '© 2025 学习 AI。保留所有权利。' },
    es: { app_title: 'Aprender IA', app_desc: 'Plataforma Premium de Aprendizaje de IA para Principiantes', tab_materi: 'Lecciones', tab_kuis: 'Prueba', tab_catatan: 'Notas', tab_forum: 'Foro', tab_leaderboard: 'Clasificación', tab_sertifikat: 'Certificado', dashboard_title: 'Panel de Aprendizaje', stat_materi: 'Lecciones Completadas', stat_skor: 'Puntuación Promedio', stat_streak: 'Racha de Aprendizaje', stat_poin: 'Puntos Totales', progress_title: 'Progreso de Aprendizaje', search_placeholder: 'Buscar lecciones...', btn_cari: 'Buscar', list_materi_title: 'Lista de Materiales de Aprendizaje', fav_materi_title: 'Lecciones Favoritas', fav_empty: 'No hay lecciones favoritas todavía.', footer_quote: '"Aprender IA no se trata de convertirse en un robot, sino de entender cómo la inteligencia puede hacer a los humanos más sabios."', footer_dev: 'Desarrollado por', footer_desc: 'Este proyecto fue desarrollado con fines educativos y de aprendizaje.', footer_copy: '© 2025 Aprender IA. Todos los derechos reservados.' },
    ar: { app_title: 'تعلم الذكاء الاصطناعي', app_desc: 'منصة تعلم الذكاء الاصطناعي المميزة للمبتدئين', tab_materi: 'الدروس', tab_kuis: 'اختبار', tab_catatan: 'ملاحظات', tab_forum: 'المنتدى', tab_leaderboard: 'المتصدرين', tab_sertifikat: 'شهادة', dashboard_title: 'لوحة التعلم', stat_materi: 'الدروس المكتملة', stat_skor: 'متوسط النتيجة', stat_streak: 'سلسلة التعلم', stat_poin: 'إجمالي النقاط', progress_title: 'تقدم التعلم', search_placeholder: 'ابحث عن الدروس...', btn_cari: 'بحث', list_materi_title: 'قائمة المواد التعليمية', fav_materi_title: 'الدروس المفضلة', fav_empty: 'لا توجد دروس مفضلة بعد.', footer_quote: '"تعلم الذكاء الاصطناعي لا يعني أن تصبح روبوتًا ، بل إن فهم كيف يمكن للذكاء أن يجعل البشر أكثر حكمة."', footer_dev: 'طوره بواسطة', footer_desc: 'تم تطوير هذا المشروع لأغراض تعليمية.', footer_copy: '© 2025 تعلم الذكاء الاصطناعي. كل الحقوق محفوظة.' },
    hi: { app_title: 'AI सीखें', app_desc: 'शुरुआती लोगों के लिए प्रीमियम AI लर्निंग प्लेटफॉर्म', tab_materi: 'पाठ', tab_kuis: 'प्रश्नोत्तरी', tab_catatan: 'नोट्स', tab_forum: 'मंच', tab_leaderboard: 'लीडरबोर्ड', tab_sertifikat: 'प्रमाणपत्र', dashboard_title: 'लर्निंग डैशबोर्ड', stat_materi: 'पूरे किए गए पाठ', stat_skor: 'औसत स्कोर', stat_streak: 'सीखने का सिलसिला', stat_poin: 'कुल अंक', progress_title: 'सीखने की प्रगति', search_placeholder: 'पाठ खोजें...', btn_cari: 'खोजें', list_materi_title: 'शिक्षण सामग्री की सूची', fav_materi_title: 'पसंदीदा पाठ', fav_empty: 'अभी तक कोई पसंदीदा पाठ नहीं है।', footer_quote: '"एआई सीखना रोबोट बनने के बारे में नहीं है, बल्कि यह समझना है कि बुद्धिमत्ता इंसानों को समझदार कैसे बना सकती है।"', footer_dev: 'द्वारा विकसित', footer_desc: 'यह परियोजना शैक्षिक और सीखने के उद्देश्यों के लिए विकसित की गई थी।', footer_copy: '© 2025 AI सीखें। सर्वाधिकार सुरक्षित।' },
    pt: { app_title: 'Aprender IA', app_desc: 'Plataforma Premium de Aprendizado de IA para Iniciantes', tab_materi: 'Lições', tab_kuis: 'Quiz', tab_catatan: 'Notas', tab_forum: 'Fórum', tab_leaderboard: 'Tabela de Classificação', tab_sertifikat: 'Certificado', dashboard_title: 'Painel de Aprendizado', stat_materi: 'Lições Concluídas', stat_skor: 'Pontuação Média', stat_streak: 'Sequência de Aprendizado', stat_poin: 'Pontos Totais', progress_title: 'Progresso do Aprendizado', search_placeholder: 'Procurar lições...', btn_cari: 'Buscar', list_materi_title: 'Lista de Materiais de Aprendizado', fav_materi_title: 'Lições Favoritas', fav_empty: 'Nenhuma lição favorita ainda.', footer_quote: '"Aprender IA não é sobre se tornar um robô, mas entender como a inteligência pode tornar os humanos mais sábios."', footer_dev: 'Desenvolvido por', footer_desc: 'Este projeto foi desenvolvido para fins educacionais e de aprendizagem.', footer_copy: '© 2025 Aprender IA. Todos os direitos reservados.' },
    fr: { app_title: 'Apprendre l\'IA', app_desc: 'Plateforme Premium d\'Apprentissage de l\'IA pour Débutants', tab_materi: 'Leçons', tab_kuis: 'Quiz', tab_catatan: 'Notes', tab_forum: 'Forum', tab_leaderboard: 'Classement', tab_sertifikat: 'Certificat', dashboard_title: 'Tableau de Bord', stat_materi: 'Leçons Terminées', stat_skor: 'Score Moyen', stat_streak: 'Série d\'Apprentissage', stat_poin: 'Points Totaux', progress_title: 'Progrès d\'Apprentissage', search_placeholder: 'Rechercher des leçons...', btn_cari: 'Rechercher', list_materi_title: 'Liste des Matériels d\'Apprentissage', fav_materi_title: 'Leçons Favorites', fav_empty: 'Aucune leçon favorite pour le moment.', footer_quote: '"Apprendre l\'IA ne consiste pas à devenir un robot, mais à comprendre comment l\'intelligence peut rendre les humains plus sages."', footer_dev: 'Développé par', footer_desc: 'Ce projet a été développé à des fins éducatives et d\'apprentissage.', footer_copy: '© 2025 Apprendre l\'IA. Tous droits réservés.' },
    de: { app_title: 'KI Lernen', app_desc: 'Premium KI-Lernplattform für Anfänger', tab_materi: 'Lektionen', tab_kuis: 'Quiz', tab_catatan: 'Notizen', tab_forum: 'Forum', tab_leaderboard: 'Bestenliste', tab_sertifikat: 'Zertifikat', dashboard_title: 'Lern-Dashboard', stat_materi: 'Abgeschlossene Lektionen', stat_skor: 'Durchschnittliche Punktzahl', stat_streak: 'Lern-Serie', stat_poin: 'Gesamtpunktzahl', progress_title: 'Lernfortschritt', search_placeholder: 'Suche nach Lektionen...', btn_cari: 'Suchen', list_materi_title: 'Liste der Lernmaterialien', fav_materi_title: 'Lieblingslektionen', fav_empty: 'Noch keine Lieblingslektionen.', footer_quote: '"KI zu lernen bedeutet nicht, ein Roboter zu werden, sondern zu verstehen, wie Intelligenz Menschen weiser machen kann."', footer_dev: 'Entwickelt von', footer_desc: 'Dieses Projekt wurde für Bildungs- und Lernzwecke entwickelt.', footer_copy: '© 2025 KI Lernen. Alle Rechte vorbehalten.' },
    ja: { app_title: 'AIを学ぶ', app_desc: '初心者のためのプレミアムAI学習プラットフォーム', tab_materi: 'レッスン', tab_kuis: 'クイズ', tab_catatan: 'ノート', tab_forum: 'フォーラム', tab_leaderboard: 'リーダーボード', tab_sertifikat: '証明書', dashboard_title: '学習ダッシュボード', stat_materi: '完了したレッスン', stat_skor: '平均スコア', stat_streak: '学習ストリーク', stat_poin: '合計ポイント', progress_title: '学習の進捗状況', search_placeholder: 'レッスンを検索する...', btn_cari: '検索', list_materi_title: '学習資料リスト', fav_materi_title: 'お気に入りのレッスン', fav_empty: 'お気に入りのレッスンはまだありません。', footer_quote: '「AIを学ぶことはロボットになることではなく、知性が人間をどのように賢くするかを理解することです。」', footer_dev: '開発者：', footer_desc: 'このプロジェクトは教育と学習を目的として開発されました。', footer_copy: '© 2025 AIを学ぶ。全著作権所有。' },
    ko: { app_title: 'AI 배우기', app_desc: '초보자를 위한 프리미엄 AI 학습 플랫폼', tab_materi: '레슨', tab_kuis: '퀴즈', tab_catatan: '노트', tab_forum: '포럼', tab_leaderboard: '리더보드', tab_sertifikat: '인증서', dashboard_title: '학습 대시보드', stat_materi: '완료된 레슨', stat_skor: '평균 점수', stat_streak: '학습 스트릭', stat_poin: '총 포인트', progress_title: '학습 진도', search_placeholder: '레슨 검색...', btn_cari: '검색', list_materi_title: '학습 자료 목록', fav_materi_title: '즐겨찾는 레슨', fav_empty: '즐겨찾는 레슨이 없습니다.', footer_quote: '"AI를 배우는 것은 로봇이 되는 것이 아니라, 지능이 인간을 어떻게 더 현명하게 만들 수 있는지 이해하는 것입니다."', footer_dev: '개발자:', footer_desc: '이 프로젝트는 교육 및 학습 목적으로 개발되었습니다.', footer_copy: '© 2025 AI 배우기. 모든 권리 보유.' },
    ru: { app_title: 'Изучение ИИ', app_desc: 'Премиум платформа для изучения ИИ для начинающих', tab_materi: 'Уроки', tab_kuis: 'Викторина', tab_catatan: 'Заметки', tab_forum: 'Форум', tab_leaderboard: 'Таблица лидеров', tab_sertifikat: 'Сертификат', dashboard_title: 'Панель обучения', stat_materi: 'Пройденные уроки', stat_skor: 'Средний балл', stat_streak: 'Серия обучения', stat_poin: 'Всего очков', progress_title: 'Прогресс в учебе', search_placeholder: 'Поиск уроков...', btn_cari: 'Поиск', list_materi_title: 'Список учебных материалов', fav_materi_title: 'Любимые уроки', fav_empty: 'Пока нет любимых уроков.', footer_quote: '"Изучать ИИ — значит не становиться роботом, а понимать, как интеллект может сделать людей мудрее."', footer_dev: 'Разработчик:', footer_desc: 'Этот проект был разработан в образовательных и учебных целях.', footer_copy: '© 2025 Изучение ИИ. Все права защищены.' },
    tr: { app_title: 'Yapay Zeka Öğrenin', app_desc: 'Yeni Başlayanlar İçin Premium Yapay Zeka Öğrenme Platformu', tab_materi: 'Dersler', tab_kuis: 'Sınav', tab_catatan: 'Notlar', tab_forum: 'Forum', tab_leaderboard: 'Liderler Sıralaması', tab_sertifikat: 'Sertifika', dashboard_title: 'Öğrenme Paneli', stat_materi: 'Tamamlanan Dersler', stat_skor: 'Ortalama Puan', stat_streak: 'Öğrenme Serisi', stat_poin: 'Toplam Puan', progress_title: 'Öğrenme İlerlemesi', search_placeholder: 'Dersleri ara...', btn_cari: 'Ara', list_materi_title: 'Öğrenim Materyalleri Listesi', fav_materi_title: 'Favori Dersler', fav_empty: 'Henüz favori ders yok.', footer_quote: '"Yapay zekayı öğrenmek, bir robot olmakla ilgili değil, zekanın insanları nasıl daha bilge yapabileceğini anlamakla ilgilidir."', footer_dev: 'Geliştiren:', footer_desc: 'Bu proje eğitim ve öğrenme amacıyla geliştirilmiştir.', footer_copy: '© 2025 Yapay Zeka Öğrenin. Tüm Hakları Saklıdır.' },
    it: { app_title: 'Imparare l\'IA', app_desc: 'Piattaforma Premium di Apprendimento dell\'IA per Principianti', tab_materi: 'Lezioni', tab_kuis: 'Quiz', tab_catatan: 'Note', tab_forum: 'Forum', tab_leaderboard: 'Classifica', tab_sertifikat: 'Certificato', dashboard_title: 'Dashboard di Apprendimento', stat_materi: 'Lezioni Completate', stat_skor: 'Punteggio Medio', stat_streak: 'Striscia di Apprendimento', stat_poin: 'Punti Totali', progress_title: 'Progresso di Apprendimento', search_placeholder: 'Cerca lezioni...', btn_cari: 'Cerca', list_materi_title: 'Elenco dei Materiali di Apprendimento', fav_materi_title: 'Lezioni Preferite', fav_empty: 'Nessuna lezione preferita ancora.', footer_quote: '"Imparare l\'IA non significa diventare un robot, ma capire come l\'intelligenza può rendere gli esseri umani più saggi."', footer_dev: 'Sviluppato da', footer_desc: 'Questo progetto è stato sviluppato per scopi educativi e di apprendimento.', footer_copy: '© 2025 Imparare l\'IA. Tutti i diritti riservati.' },
    vi: { app_title: 'Học AI', app_desc: 'Nền Tảng Học Trí Tuệ Nhân Tạo Cao Cấp Cho Người Mới', tab_materi: 'Bài Học', tab_kuis: 'Câu Hỏi', tab_catatan: 'Ghi Chú', tab_forum: 'Diễn Đàn', tab_leaderboard: 'Bảng Xếp Hạng', tab_sertifikat: 'Chứng Chỉ', dashboard_title: 'Bảng Điều Khiển Học Tập', stat_materi: 'Bài Học Đã Hoàn Thành', stat_skor: 'Điểm Trung Bình', stat_streak: 'Chuỗi Học Tập', stat_poin: 'Tổng Điểm', progress_title: 'Tiến Độ Học Tập', search_placeholder: 'Tìm kiếm bài học...', btn_cari: 'Tìm Kiếm', list_materi_title: 'Danh Sách Tài Liệu Học Tập', fav_materi_title: 'Bài Học Yêu Thích', fav_empty: 'Chưa có bài học yêu thích nào.', footer_quote: '"Học AI không phải là trở thành một cỗ máy, mà là hiểu được cách trí tuệ giúp con người trở nên khôn ngoan hơn."', footer_dev: 'Phát triển bởi', footer_desc: 'Dự án này được phát triển cho mục đích giáo dục và học tập.', footer_copy: '© 2025 Học AI. Bảo lưu mọi quyền.' }
};

// Extra translation keys for Quiz, Notes, Forum, Leaderboard, Certificate, Modals, Buttons
const extraKeys = {
    id: { quiz_title: 'Uji Pemahaman Anda', quiz_progress: 'Progress Kuis', quiz_download: 'Download Hasil', quiz_retry: 'Ulangi Kuis', quiz_back: 'Kembali', notes_title: 'Catatan Pembelajaran', notes_add: 'Tambah Catatan', notes_empty: 'Belum ada catatan. Mulai buat catatan Anda!', forum_title: 'Forum Diskusi', forum_add: 'Buat Postingan', forum_empty: 'Belum ada postingan. Jadilah yang pertama!', lb_title: 'Papan Peringkat', lb_rank: 'Peringkat', lb_name: 'Nama', lb_level: 'Level', lb_points: 'Poin', lb_lessons: 'Materi', cert_title: 'Sertifikat Digital', cert_download: 'Download Sertifikat', cert_msg: 'Selesaikan semua materi untuk mendapatkan sertifikat!', modal_note_title: 'Tambah Catatan', modal_label_title: 'Judul', modal_note_content: 'Isi Catatan', modal_note_ph_title: 'Judul catatan...', modal_note_ph_content: 'Tulis catatan Anda...', modal_post_title: 'Buat Postingan', modal_post_content: 'Isi Postingan', modal_post_ph_title: 'Judul diskusi...', modal_post_ph_content: 'Tulis pertanyaan atau diskusi...', modal_profile_title: 'Profil Pengguna', modal_profile_name: 'Nama', modal_profile_ph: 'Nama Anda...', modal_profile_level: 'Level:', modal_profile_points: 'Poin:', modal_profile_completed: 'Materi Selesai:', btn_save: 'Simpan', btn_cancel: 'Batal', btn_close: 'Tutup', btn_post: 'Posting' },
    en: { quiz_title: 'Test Your Understanding', quiz_progress: 'Quiz Progress', quiz_download: 'Download Results', quiz_retry: 'Retry Quiz', quiz_back: 'Back', notes_title: 'Learning Notes', notes_add: 'Add Note', notes_empty: 'No notes yet. Start writing your notes!', forum_title: 'Discussion Forum', forum_add: 'Create Post', forum_empty: 'No posts yet. Be the first!', lb_title: 'Leaderboard', lb_rank: 'Rank', lb_name: 'Name', lb_level: 'Level', lb_points: 'Points', lb_lessons: 'Lessons', cert_title: 'Digital Certificate', cert_download: 'Download Certificate', cert_msg: 'Complete all lessons to get your certificate!', modal_note_title: 'Add Note', modal_label_title: 'Title', modal_note_content: 'Note Content', modal_note_ph_title: 'Note title...', modal_note_ph_content: 'Write your note...', modal_post_title: 'Create Post', modal_post_content: 'Post Content', modal_post_ph_title: 'Discussion title...', modal_post_ph_content: 'Write your question or discussion...', modal_profile_title: 'User Profile', modal_profile_name: 'Name', modal_profile_ph: 'Your name...', modal_profile_level: 'Level:', modal_profile_points: 'Points:', modal_profile_completed: 'Completed Lessons:', btn_save: 'Save', btn_cancel: 'Cancel', btn_close: 'Close', btn_post: 'Post' },
    zh: { quiz_title: '测试你的理解', quiz_progress: '测验进度', quiz_download: '下载结果', quiz_retry: '重试测验', quiz_back: '返回', notes_title: '学习笔记', notes_add: '添加笔记', notes_empty: '还没有笔记。开始写笔记吧！', forum_title: '讨论区', forum_add: '创建帖子', forum_empty: '还没有帖子。成为第一个！', lb_title: '排行榜', lb_rank: '排名', lb_name: '姓名', lb_level: '等级', lb_points: '积分', lb_lessons: '课程', cert_title: '数字证书', cert_download: '下载证书', cert_msg: '完成所有课程即可获得证书！', modal_note_title: '添加笔记', modal_label_title: '标题', modal_note_content: '笔记内容', modal_note_ph_title: '笔记标题...', modal_note_ph_content: '写下你的笔记...', modal_post_title: '创建帖子', modal_post_content: '帖子内容', modal_post_ph_title: '讨论标题...', modal_post_ph_content: '写下你的问题或讨论...', modal_profile_title: '用户资料', modal_profile_name: '姓名', modal_profile_ph: '你的名字...', modal_profile_level: '等级：', modal_profile_points: '积分：', modal_profile_completed: '已完成课程：', btn_save: '保存', btn_cancel: '取消', btn_close: '关闭', btn_post: '发布' },
    es: { quiz_title: 'Pon a Prueba tu Comprensión', quiz_progress: 'Progreso del Quiz', quiz_download: 'Descargar Resultados', quiz_retry: 'Reintentar Quiz', quiz_back: 'Volver', notes_title: 'Notas de Aprendizaje', notes_add: 'Agregar Nota', notes_empty: 'No hay notas aún. ¡Comienza a escribir!', forum_title: 'Foro de Discusión', forum_add: 'Crear Publicación', forum_empty: 'No hay publicaciones. ¡Sé el primero!', lb_title: 'Tabla de Clasificación', lb_rank: 'Rango', lb_name: 'Nombre', lb_level: 'Nivel', lb_points: 'Puntos', lb_lessons: 'Lecciones', cert_title: 'Certificado Digital', cert_download: 'Descargar Certificado', cert_msg: '¡Completa todas las lecciones para obtener tu certificado!', modal_note_title: 'Agregar Nota', modal_label_title: 'Título', modal_note_content: 'Contenido de la Nota', modal_note_ph_title: 'Título de la nota...', modal_note_ph_content: 'Escribe tu nota...', modal_post_title: 'Crear Publicación', modal_post_content: 'Contenido', modal_post_ph_title: 'Título de la discusión...', modal_post_ph_content: 'Escribe tu pregunta o discusión...', modal_profile_title: 'Perfil de Usuario', modal_profile_name: 'Nombre', modal_profile_ph: 'Tu nombre...', modal_profile_level: 'Nivel:', modal_profile_points: 'Puntos:', modal_profile_completed: 'Lecciones Completadas:', btn_save: 'Guardar', btn_cancel: 'Cancelar', btn_close: 'Cerrar', btn_post: 'Publicar' },
    ar: { quiz_title: 'اختبر فهمك', quiz_progress: 'تقدم الاختبار', quiz_download: 'تحميل النتائج', quiz_retry: 'إعادة الاختبار', quiz_back: 'رجوع', notes_title: 'ملاحظات التعلم', notes_add: 'إضافة ملاحظة', notes_empty: 'لا توجد ملاحظات بعد. ابدأ بالكتابة!', forum_title: 'منتدى النقاش', forum_add: 'إنشاء منشور', forum_empty: 'لا توجد منشورات بعد. كن الأول!', lb_title: 'لوحة المتصدرين', lb_rank: 'الترتيب', lb_name: 'الاسم', lb_level: 'المستوى', lb_points: 'النقاط', lb_lessons: 'الدروس', cert_title: 'شهادة رقمية', cert_download: 'تحميل الشهادة', cert_msg: 'أكمل جميع الدروس للحصول على شهادتك!', modal_note_title: 'إضافة ملاحظة', modal_label_title: 'العنوان', modal_note_content: 'محتوى الملاحظة', modal_note_ph_title: 'عنوان الملاحظة...', modal_note_ph_content: 'اكتب ملاحظتك...', modal_post_title: 'إنشاء منشور', modal_post_content: 'محتوى المنشور', modal_post_ph_title: 'عنوان النقاش...', modal_post_ph_content: 'اكتب سؤالك أو نقاشك...', modal_profile_title: 'الملف الشخصي', modal_profile_name: 'الاسم', modal_profile_ph: 'اسمك...', modal_profile_level: 'المستوى:', modal_profile_points: 'النقاط:', modal_profile_completed: 'الدروس المكتملة:', btn_save: 'حفظ', btn_cancel: 'إلغاء', btn_close: 'إغلاق', btn_post: 'نشر' },
    hi: { quiz_title: 'अपनी समझ परखें', quiz_progress: 'क्विज़ प्रगति', quiz_download: 'परिणाम डाउनलोड', quiz_retry: 'फिर से प्रयास', quiz_back: 'वापस', notes_title: 'अध्ययन नोट्स', notes_add: 'नोट जोड़ें', notes_empty: 'अभी कोई नोट नहीं। लिखना शुरू करें!', forum_title: 'चर्चा मंच', forum_add: 'पोस्ट बनाएं', forum_empty: 'अभी कोई पोस्ट नहीं। पहले बनें!', lb_title: 'लीडरबोर्ड', lb_rank: 'रैंक', lb_name: 'नाम', lb_level: 'स्तर', lb_points: 'अंक', lb_lessons: 'पाठ', cert_title: 'डिजिटल प्रमाणपत्र', cert_download: 'प्रमाणपत्र डाउनलोड', cert_msg: 'प्रमाणपत्र पाने के लिए सभी पाठ पूरे करें!', modal_note_title: 'नोट जोड़ें', modal_label_title: 'शीर्षक', modal_note_content: 'नोट सामग्री', modal_note_ph_title: 'नोट शीर्षक...', modal_note_ph_content: 'अपना नोट लिखें...', modal_post_title: 'पोस्ट बनाएं', modal_post_content: 'पोस्ट सामग्री', modal_post_ph_title: 'चर्चा शीर्षक...', modal_post_ph_content: 'अपना प्रश्न या चर्चा लिखें...', modal_profile_title: 'उपयोगकर्ता प्रोफ़ाइल', modal_profile_name: 'नाम', modal_profile_ph: 'आपका नाम...', modal_profile_level: 'स्तर:', modal_profile_points: 'अंक:', modal_profile_completed: 'पूरे किए गए पाठ:', btn_save: 'सहेजें', btn_cancel: 'रद्द करें', btn_close: 'बंद करें', btn_post: 'पोस्ट' },
    pt: { quiz_title: 'Teste seu Entendimento', quiz_progress: 'Progresso do Quiz', quiz_download: 'Baixar Resultados', quiz_retry: 'Repetir Quiz', quiz_back: 'Voltar', notes_title: 'Notas de Aprendizado', notes_add: 'Adicionar Nota', notes_empty: 'Nenhuma nota ainda. Comece a escrever!', forum_title: 'Fórum de Discussão', forum_add: 'Criar Postagem', forum_empty: 'Nenhuma postagem. Seja o primeiro!', lb_title: 'Classificação', lb_rank: 'Posição', lb_name: 'Nome', lb_level: 'Nível', lb_points: 'Pontos', lb_lessons: 'Lições', cert_title: 'Certificado Digital', cert_download: 'Baixar Certificado', cert_msg: 'Complete todas as lições para obter seu certificado!', modal_note_title: 'Adicionar Nota', modal_label_title: 'Título', modal_note_content: 'Conteúdo da Nota', modal_note_ph_title: 'Título da nota...', modal_note_ph_content: 'Escreva sua nota...', modal_post_title: 'Criar Postagem', modal_post_content: 'Conteúdo', modal_post_ph_title: 'Título da discussão...', modal_post_ph_content: 'Escreva sua pergunta ou discussão...', modal_profile_title: 'Perfil do Usuário', modal_profile_name: 'Nome', modal_profile_ph: 'Seu nome...', modal_profile_level: 'Nível:', modal_profile_points: 'Pontos:', modal_profile_completed: 'Lições Concluídas:', btn_save: 'Salvar', btn_cancel: 'Cancelar', btn_close: 'Fechar', btn_post: 'Publicar' },
    fr: { quiz_title: 'Testez votre Compréhension', quiz_progress: 'Progrès du Quiz', quiz_download: 'Télécharger les Résultats', quiz_retry: 'Recommencer le Quiz', quiz_back: 'Retour', notes_title: 'Notes d\'Apprentissage', notes_add: 'Ajouter une Note', notes_empty: 'Pas encore de notes. Commencez à écrire !', forum_title: 'Forum de Discussion', forum_add: 'Créer une Publication', forum_empty: 'Pas encore de publications. Soyez le premier !', lb_title: 'Classement', lb_rank: 'Rang', lb_name: 'Nom', lb_level: 'Niveau', lb_points: 'Points', lb_lessons: 'Leçons', cert_title: 'Certificat Numérique', cert_download: 'Télécharger le Certificat', cert_msg: 'Complétez toutes les leçons pour obtenir votre certificat !', modal_note_title: 'Ajouter une Note', modal_label_title: 'Titre', modal_note_content: 'Contenu de la Note', modal_note_ph_title: 'Titre de la note...', modal_note_ph_content: 'Écrivez votre note...', modal_post_title: 'Créer une Publication', modal_post_content: 'Contenu', modal_post_ph_title: 'Titre de la discussion...', modal_post_ph_content: 'Écrivez votre question ou discussion...', modal_profile_title: 'Profil Utilisateur', modal_profile_name: 'Nom', modal_profile_ph: 'Votre nom...', modal_profile_level: 'Niveau :', modal_profile_points: 'Points :', modal_profile_completed: 'Leçons Terminées :', btn_save: 'Sauvegarder', btn_cancel: 'Annuler', btn_close: 'Fermer', btn_post: 'Publier' },
    de: { quiz_title: 'Testen Sie Ihr Verständnis', quiz_progress: 'Quiz-Fortschritt', quiz_download: 'Ergebnisse herunterladen', quiz_retry: 'Quiz wiederholen', quiz_back: 'Zurück', notes_title: 'Lernnotizen', notes_add: 'Notiz hinzufügen', notes_empty: 'Noch keine Notizen. Fangen Sie an zu schreiben!', forum_title: 'Diskussionsforum', forum_add: 'Beitrag erstellen', forum_empty: 'Noch keine Beiträge. Seien Sie der Erste!', lb_title: 'Bestenliste', lb_rank: 'Rang', lb_name: 'Name', lb_level: 'Stufe', lb_points: 'Punkte', lb_lessons: 'Lektionen', cert_title: 'Digitales Zertifikat', cert_download: 'Zertifikat herunterladen', cert_msg: 'Schließen Sie alle Lektionen ab, um Ihr Zertifikat zu erhalten!', modal_note_title: 'Notiz hinzufügen', modal_label_title: 'Titel', modal_note_content: 'Notizinhalt', modal_note_ph_title: 'Notiztitel...', modal_note_ph_content: 'Schreiben Sie Ihre Notiz...', modal_post_title: 'Beitrag erstellen', modal_post_content: 'Inhalt', modal_post_ph_title: 'Diskussionstitel...', modal_post_ph_content: 'Schreiben Sie Ihre Frage oder Diskussion...', modal_profile_title: 'Benutzerprofil', modal_profile_name: 'Name', modal_profile_ph: 'Ihr Name...', modal_profile_level: 'Stufe:', modal_profile_points: 'Punkte:', modal_profile_completed: 'Abgeschlossene Lektionen:', btn_save: 'Speichern', btn_cancel: 'Abbrechen', btn_close: 'Schließen', btn_post: 'Veröffentlichen' },
    ja: { quiz_title: '理解度テスト', quiz_progress: 'クイズの進捗', quiz_download: '結果をダウンロード', quiz_retry: 'クイズをやり直す', quiz_back: '戻る', notes_title: '学習ノート', notes_add: 'ノートを追加', notes_empty: 'まだノートがありません。書き始めましょう！', forum_title: 'ディスカッションフォーラム', forum_add: '投稿を作成', forum_empty: 'まだ投稿がありません。最初の投稿者になりましょう！', lb_title: 'リーダーボード', lb_rank: '順位', lb_name: '名前', lb_level: 'レベル', lb_points: 'ポイント', lb_lessons: 'レッスン', cert_title: 'デジタル証明書', cert_download: '証明書をダウンロード', cert_msg: 'すべてのレッスンを完了して証明書を取得しましょう！', modal_note_title: 'ノートを追加', modal_label_title: 'タイトル', modal_note_content: 'ノートの内容', modal_note_ph_title: 'ノートのタイトル...', modal_note_ph_content: 'ノートを書く...', modal_post_title: '投稿を作成', modal_post_content: '投稿内容', modal_post_ph_title: 'ディスカッションのタイトル...', modal_post_ph_content: '質問やディスカッションを書く...', modal_profile_title: 'ユーザープロフィール', modal_profile_name: '名前', modal_profile_ph: 'あなたの名前...', modal_profile_level: 'レベル：', modal_profile_points: 'ポイント：', modal_profile_completed: '完了したレッスン：', btn_save: '保存', btn_cancel: 'キャンセル', btn_close: '閉じる', btn_post: '投稿' },
    ko: { quiz_title: '이해도 테스트', quiz_progress: '퀴즈 진행률', quiz_download: '결과 다운로드', quiz_retry: '퀴즈 다시하기', quiz_back: '돌아가기', notes_title: '학습 노트', notes_add: '노트 추가', notes_empty: '아직 노트가 없습니다. 작성을 시작하세요!', forum_title: '토론 포럼', forum_add: '게시물 작성', forum_empty: '아직 게시물이 없습니다. 첫 번째가 되세요!', lb_title: '리더보드', lb_rank: '순위', lb_name: '이름', lb_level: '레벨', lb_points: '포인트', lb_lessons: '레슨', cert_title: '디지털 인증서', cert_download: '인증서 다운로드', cert_msg: '인증서를 받으려면 모든 레슨을 완료하세요!', modal_note_title: '노트 추가', modal_label_title: '제목', modal_note_content: '노트 내용', modal_note_ph_title: '노트 제목...', modal_note_ph_content: '노트를 작성하세요...', modal_post_title: '게시물 작성', modal_post_content: '게시물 내용', modal_post_ph_title: '토론 제목...', modal_post_ph_content: '질문이나 토론을 작성하세요...', modal_profile_title: '사용자 프로필', modal_profile_name: '이름', modal_profile_ph: '이름 입력...', modal_profile_level: '레벨:', modal_profile_points: '포인트:', modal_profile_completed: '완료된 레슨:', btn_save: '저장', btn_cancel: '취소', btn_close: '닫기', btn_post: '게시' },
    ru: { quiz_title: 'Проверьте свои знания', quiz_progress: 'Прогресс викторины', quiz_download: 'Скачать результаты', quiz_retry: 'Повторить викторину', quiz_back: 'Назад', notes_title: 'Учебные заметки', notes_add: 'Добавить заметку', notes_empty: 'Пока нет заметок. Начните писать!', forum_title: 'Дискуссионный форум', forum_add: 'Создать пост', forum_empty: 'Пока нет постов. Будьте первым!', lb_title: 'Таблица лидеров', lb_rank: 'Ранг', lb_name: 'Имя', lb_level: 'Уровень', lb_points: 'Очки', lb_lessons: 'Уроки', cert_title: 'Цифровой сертификат', cert_download: 'Скачать сертификат', cert_msg: 'Завершите все уроки, чтобы получить сертификат!', modal_note_title: 'Добавить заметку', modal_label_title: 'Заголовок', modal_note_content: 'Содержание заметки', modal_note_ph_title: 'Заголовок заметки...', modal_note_ph_content: 'Напишите заметку...', modal_post_title: 'Создать пост', modal_post_content: 'Содержание', modal_post_ph_title: 'Заголовок обсуждения...', modal_post_ph_content: 'Напишите свой вопрос или обсуждение...', modal_profile_title: 'Профиль пользователя', modal_profile_name: 'Имя', modal_profile_ph: 'Ваше имя...', modal_profile_level: 'Уровень:', modal_profile_points: 'Очки:', modal_profile_completed: 'Пройденные уроки:', btn_save: 'Сохранить', btn_cancel: 'Отмена', btn_close: 'Закрыть', btn_post: 'Опубликовать' },
    tr: { quiz_title: 'Anlayışınızı Test Edin', quiz_progress: 'Sınav İlerlemesi', quiz_download: 'Sonuçları İndir', quiz_retry: 'Sınavı Tekrarla', quiz_back: 'Geri', notes_title: 'Öğrenme Notları', notes_add: 'Not Ekle', notes_empty: 'Henüz not yok. Yazmaya başlayın!', forum_title: 'Tartışma Forumu', forum_add: 'Gönderi Oluştur', forum_empty: 'Henüz gönderi yok. İlk siz olun!', lb_title: 'Lider Tablosu', lb_rank: 'Sıra', lb_name: 'Ad', lb_level: 'Seviye', lb_points: 'Puan', lb_lessons: 'Dersler', cert_title: 'Dijital Sertifika', cert_download: 'Sertifika İndir', cert_msg: 'Sertifikanızı almak için tüm dersleri tamamlayın!', modal_note_title: 'Not Ekle', modal_label_title: 'Başlık', modal_note_content: 'Not İçeriği', modal_note_ph_title: 'Not başlığı...', modal_note_ph_content: 'Notunuzu yazın...', modal_post_title: 'Gönderi Oluştur', modal_post_content: 'İçerik', modal_post_ph_title: 'Tartışma başlığı...', modal_post_ph_content: 'Sorunuzu veya tartışmanızı yazın...', modal_profile_title: 'Kullanıcı Profili', modal_profile_name: 'Ad', modal_profile_ph: 'Adınız...', modal_profile_level: 'Seviye:', modal_profile_points: 'Puan:', modal_profile_completed: 'Tamamlanan Dersler:', btn_save: 'Kaydet', btn_cancel: 'İptal', btn_close: 'Kapat', btn_post: 'Yayınla' },
    it: { quiz_title: 'Metti alla Prova la tua Comprensione', quiz_progress: 'Progresso Quiz', quiz_download: 'Scarica Risultati', quiz_retry: 'Riprova Quiz', quiz_back: 'Indietro', notes_title: 'Note di Apprendimento', notes_add: 'Aggiungi Nota', notes_empty: 'Nessuna nota ancora. Inizia a scrivere!', forum_title: 'Forum di Discussione', forum_add: 'Crea Post', forum_empty: 'Nessun post. Sii il primo!', lb_title: 'Classifica', lb_rank: 'Posizione', lb_name: 'Nome', lb_level: 'Livello', lb_points: 'Punti', lb_lessons: 'Lezioni', cert_title: 'Certificato Digitale', cert_download: 'Scarica Certificato', cert_msg: 'Completa tutte le lezioni per ottenere il tuo certificato!', modal_note_title: 'Aggiungi Nota', modal_label_title: 'Titolo', modal_note_content: 'Contenuto della Nota', modal_note_ph_title: 'Titolo della nota...', modal_note_ph_content: 'Scrivi la tua nota...', modal_post_title: 'Crea Post', modal_post_content: 'Contenuto', modal_post_ph_title: 'Titolo della discussione...', modal_post_ph_content: 'Scrivi la tua domanda o discussione...', modal_profile_title: 'Profilo Utente', modal_profile_name: 'Nome', modal_profile_ph: 'Il tuo nome...', modal_profile_level: 'Livello:', modal_profile_points: 'Punti:', modal_profile_completed: 'Lezioni Completate:', btn_save: 'Salva', btn_cancel: 'Annulla', btn_close: 'Chiudi', btn_post: 'Pubblica' },
    vi: { quiz_title: 'Kiểm Tra Hiểu Biết', quiz_progress: 'Tiến Độ Câu Hỏi', quiz_download: 'Tải Kết Quả', quiz_retry: 'Làm Lại', quiz_back: 'Quay Lại', notes_title: 'Ghi Chú Học Tập', notes_add: 'Thêm Ghi Chú', notes_empty: 'Chưa có ghi chú. Bắt đầu viết nào!', forum_title: 'Diễn Đàn Thảo Luận', forum_add: 'Tạo Bài Viết', forum_empty: 'Chưa có bài viết. Hãy là người đầu tiên!', lb_title: 'Bảng Xếp Hạng', lb_rank: 'Hạng', lb_name: 'Tên', lb_level: 'Cấp Độ', lb_points: 'Điểm', lb_lessons: 'Bài Học', cert_title: 'Chứng Chỉ Số', cert_download: 'Tải Chứng Chỉ', cert_msg: 'Hoàn thành tất cả bài học để nhận chứng chỉ!', modal_note_title: 'Thêm Ghi Chú', modal_label_title: 'Tiêu Đề', modal_note_content: 'Nội Dung Ghi Chú', modal_note_ph_title: 'Tiêu đề ghi chú...', modal_note_ph_content: 'Viết ghi chú của bạn...', modal_post_title: 'Tạo Bài Viết', modal_post_content: 'Nội Dung', modal_post_ph_title: 'Tiêu đề thảo luận...', modal_post_ph_content: 'Viết câu hỏi hoặc thảo luận...', modal_profile_title: 'Hồ Sơ Người Dùng', modal_profile_name: 'Tên', modal_profile_ph: 'Tên của bạn...', modal_profile_level: 'Cấp Độ:', modal_profile_points: 'Điểm:', modal_profile_completed: 'Bài Học Đã Hoàn Thành:', btn_save: 'Lưu', btn_cancel: 'Hủy', btn_close: 'Đóng', btn_post: 'Đăng' }
};

// Dynamic UI labels for render functions
const dynamicKeys = {
    id: { status_done: 'Selesai', status_new: 'Baru', label_level: 'Tingkat', label_duration: 'Durasi', btn_add_fav: 'Tambah Favorit', btn_remove_fav: 'Hapus Favorit', no_fav: 'Belum ada materi favorit.', no_search: 'Tidak ada materi yang sesuai.', btn_done_read: 'Selesai Membaca', btn_make_note: 'Buat Catatan', notify_open: 'Membuka', quiz_q: 'Soal', level_beginner: 'Pemula', level_intermediate: 'Menengah', level_advanced: 'Lanjut', min: 'menit' },
    en: { status_done: 'Completed', status_new: 'New', label_level: 'Level', label_duration: 'Duration', btn_add_fav: 'Add Favorite', btn_remove_fav: 'Remove Favorite', no_fav: 'No favorite lessons yet.', no_search: 'No matching lessons found.', btn_done_read: 'Done Reading', btn_make_note: 'Make Note', notify_open: 'Opening', quiz_q: 'Question', level_beginner: 'Beginner', level_intermediate: 'Intermediate', level_advanced: 'Advanced', min: 'min' },
    zh: { status_done: '已完成', status_new: '新', label_level: '等级', label_duration: '时长', btn_add_fav: '添加收藏', btn_remove_fav: '取消收藏', no_fav: '暂无收藏的课程。', no_search: '没有找到匹配的课程。', btn_done_read: '阅读完毕', btn_make_note: '做笔记', notify_open: '正在打开', quiz_q: '题目', level_beginner: '初级', level_intermediate: '中级', level_advanced: '高级', min: '分钟' },
    es: { status_done: 'Completado', status_new: 'Nuevo', label_level: 'Nivel', label_duration: 'Duración', btn_add_fav: 'Agregar Favorito', btn_remove_fav: 'Quitar Favorito', no_fav: 'No hay lecciones favoritas.', no_search: 'No se encontraron lecciones.', btn_done_read: 'Terminado', btn_make_note: 'Crear Nota', notify_open: 'Abriendo', quiz_q: 'Pregunta', level_beginner: 'Principiante', level_intermediate: 'Intermedio', level_advanced: 'Avanzado', min: 'min' },
    ar: { status_done: 'مكتمل', status_new: 'جديد', label_level: 'المستوى', label_duration: 'المدة', btn_add_fav: 'إضافة مفضلة', btn_remove_fav: 'إزالة مفضلة', no_fav: 'لا توجد دروس مفضلة.', no_search: 'لا توجد نتائج.', btn_done_read: 'تم القراءة', btn_make_note: 'إنشاء ملاحظة', notify_open: 'جاري الفتح', quiz_q: 'سؤال', level_beginner: 'مبتدئ', level_intermediate: 'متوسط', level_advanced: 'متقدم', min: 'دقيقة' },
    hi: { status_done: 'पूर्ण', status_new: 'नया', label_level: 'स्तर', label_duration: 'अवधि', btn_add_fav: 'पसंदीदा जोड़ें', btn_remove_fav: 'पसंदीदा हटाएं', no_fav: 'कोई पसंदीदा नहीं।', no_search: 'कोई परिणाम नहीं।', btn_done_read: 'पढ़ना समाप्त', btn_make_note: 'नोट बनाएं', notify_open: 'खोल रहे हैं', quiz_q: 'प्रश्न', level_beginner: 'शुरुआती', level_intermediate: 'मध्यवर्ती', level_advanced: 'उन्नत', min: 'मिनट' },
    pt: { status_done: 'Concluído', status_new: 'Novo', label_level: 'Nível', label_duration: 'Duração', btn_add_fav: 'Adicionar Favorito', btn_remove_fav: 'Remover Favorito', no_fav: 'Nenhuma lição favorita.', no_search: 'Nenhuma lição encontrada.', btn_done_read: 'Leitura Concluída', btn_make_note: 'Criar Nota', notify_open: 'Abrindo', quiz_q: 'Questão', level_beginner: 'Iniciante', level_intermediate: 'Intermediário', level_advanced: 'Avançado', min: 'min' },
    fr: { status_done: 'Terminé', status_new: 'Nouveau', label_level: 'Niveau', label_duration: 'Durée', btn_add_fav: 'Ajouter Favori', btn_remove_fav: 'Retirer Favori', no_fav: 'Aucune leçon favorite.', no_search: 'Aucune leçon trouvée.', btn_done_read: 'Lecture terminée', btn_make_note: 'Créer Note', notify_open: 'Ouverture de', quiz_q: 'Question', level_beginner: 'Débutant', level_intermediate: 'Intermédiaire', level_advanced: 'Avancé', min: 'min' },
    de: { status_done: 'Abgeschlossen', status_new: 'Neu', label_level: 'Stufe', label_duration: 'Dauer', btn_add_fav: 'Favorit hinzufügen', btn_remove_fav: 'Favorit entfernen', no_fav: 'Keine Lieblingslektionen.', no_search: 'Keine Lektionen gefunden.', btn_done_read: 'Fertig gelesen', btn_make_note: 'Notiz erstellen', notify_open: 'Öffne', quiz_q: 'Frage', level_beginner: 'Anfänger', level_intermediate: 'Mittel', level_advanced: 'Fortgeschritten', min: 'Min' },
    ja: { status_done: '完了', status_new: '新規', label_level: 'レベル', label_duration: '所要時間', btn_add_fav: 'お気に入り追加', btn_remove_fav: 'お気に入り解除', no_fav: 'お気に入りはありません。', no_search: '該当するレッスンがありません。', btn_done_read: '読了', btn_make_note: 'ノートを作成', notify_open: '開く', quiz_q: '問題', level_beginner: '初級', level_intermediate: '中級', level_advanced: '上級', min: '分' },
    ko: { status_done: '완료', status_new: '새로운', label_level: '레벨', label_duration: '소요시간', btn_add_fav: '즐겨찾기 추가', btn_remove_fav: '즐겨찾기 해제', no_fav: '즐겨찾기가 없습니다.', no_search: '일치하는 레슨이 없습니다.', btn_done_read: '읽기 완료', btn_make_note: '노트 작성', notify_open: '열기', quiz_q: '문제', level_beginner: '초급', level_intermediate: '중급', level_advanced: '고급', min: '분' },
    ru: { status_done: 'Завершено', status_new: 'Новый', label_level: 'Уровень', label_duration: 'Длительность', btn_add_fav: 'В избранное', btn_remove_fav: 'Из избранного', no_fav: 'Нет избранных уроков.', no_search: 'Уроки не найдены.', btn_done_read: 'Прочитано', btn_make_note: 'Создать заметку', notify_open: 'Открытие', quiz_q: 'Вопрос', level_beginner: 'Начальный', level_intermediate: 'Средний', level_advanced: 'Продвинутый', min: 'мин' },
    tr: { status_done: 'Tamamlandı', status_new: 'Yeni', label_level: 'Seviye', label_duration: 'Süre', btn_add_fav: 'Favori Ekle', btn_remove_fav: 'Favori Kaldır', no_fav: 'Favori ders yok.', no_search: 'Eşleşen ders bulunamadı.', btn_done_read: 'Okuma Tamamlandı', btn_make_note: 'Not Oluştur', notify_open: 'Açılıyor', quiz_q: 'Soru', level_beginner: 'Başlangıç', level_intermediate: 'Orta', level_advanced: 'İleri', min: 'dk' },
    it: { status_done: 'Completato', status_new: 'Nuovo', label_level: 'Livello', label_duration: 'Durata', btn_add_fav: 'Aggiungi Preferito', btn_remove_fav: 'Rimuovi Preferito', no_fav: 'Nessuna lezione preferita.', no_search: 'Nessuna lezione trovata.', btn_done_read: 'Lettura completata', btn_make_note: 'Crea Nota', notify_open: 'Apertura di', quiz_q: 'Domanda', level_beginner: 'Principiante', level_intermediate: 'Intermedio', level_advanced: 'Avanzato', min: 'min' },
    vi: { status_done: 'Hoàn thành', status_new: 'Mới', label_level: 'Cấp độ', label_duration: 'Thời gian', btn_add_fav: 'Thêm Yêu thích', btn_remove_fav: 'Bỏ Yêu thích', no_fav: 'Chưa có bài học yêu thích.', no_search: 'Không tìm thấy bài học.', btn_done_read: 'Đọc xong', btn_make_note: 'Tạo Ghi chú', notify_open: 'Đang mở', quiz_q: 'Câu', level_beginner: 'Cơ bản', level_intermediate: 'Trung cấp', level_advanced: 'Nâng cao', min: 'phút' }
};

// Lesson titles & descriptions per language (keyed by lesson id)
const lessonTranslations = {
    en: { 1: { title: 'What is Artificial Intelligence?', desc: 'Learn the basic concepts of AI, its history, and applications in daily life.' }, 2: { title: 'Machine Learning Basics', desc: 'Understand Machine Learning concepts, supervised and unsupervised learning.' }, 3: { title: 'Deep Learning & Neural Networks', desc: 'Introduction to deep learning and how neural networks work.' }, 4: { title: 'Natural Language Processing (NLP)', desc: 'How AI understands and processes human language.' }, 5: { title: 'Computer Vision', desc: 'AI technology for recognizing and processing images and videos.' }, 6: { title: 'Basic Prompt Engineering', desc: 'The art of interacting with generative AI like ChatGPT for maximum results.' }, 7: { title: 'Ethics and Bias in AI', desc: 'Discussing the importance of security, privacy, and fairness in using AI.' }, 8: { title: 'Career Guide in AI', desc: 'Job opportunities, future trends, and how to start a career in the AI industry.' } },
    zh: { 1: { title: '什么是人工智能？', desc: '学习AI的基本概念、历史及其在日常生活中的应用。' }, 2: { title: '机器学习基础', desc: '了解机器学习概念、监督学习和无监督学习。' }, 3: { title: '深度学习与神经网络', desc: '深度学习入门及神经网络的工作原理。' }, 4: { title: '自然语言处理（NLP）', desc: 'AI如何理解和处理人类语言。' }, 5: { title: '计算机视觉', desc: '用于识别和处理图像与视频的AI技术。' }, 6: { title: '提示工程基础', desc: '与ChatGPT等生成式AI互动以获得最佳效果的艺术。' }, 7: { title: 'AI中的伦理与偏见', desc: '讨论在使用AI时安全、隐私和公平的重要性。' }, 8: { title: 'AI领域职业指南', desc: '就业机会、未来趋势以及如何在AI行业开始职业生涯。' } },
    es: { 1: { title: '¿Qué es la Inteligencia Artificial?', desc: 'Aprende los conceptos básicos de IA, su historia y aplicaciones.' }, 2: { title: 'Fundamentos de Machine Learning', desc: 'Comprende los conceptos de aprendizaje automático.' }, 3: { title: 'Deep Learning y Redes Neuronales', desc: 'Introducción al aprendizaje profundo y redes neuronales.' }, 4: { title: 'Procesamiento de Lenguaje Natural', desc: 'Cómo la IA entiende y procesa el lenguaje humano.' }, 5: { title: 'Visión por Computadora', desc: 'Tecnología IA para reconocer y procesar imágenes y videos.' }, 6: { title: 'Ingeniería de Prompts Básica', desc: 'El arte de interactuar con IA generativa para obtener resultados máximos.' }, 7: { title: 'Ética y Sesgo en la IA', desc: 'Seguridad, privacidad y equidad en el uso de IA.' }, 8: { title: 'Guía de Carrera en IA', desc: 'Oportunidades laborales y cómo iniciar una carrera en IA.' } },
    ar: { 1: { title: 'ما هو الذكاء الاصطناعي؟', desc: 'تعلم المفاهيم الأساسية للذكاء الاصطناعي وتاريخه وتطبيقاته.' }, 2: { title: 'أساسيات تعلم الآلة', desc: 'فهم مفاهيم التعلم الآلي.' }, 3: { title: 'التعلم العميق والشبكات العصبية', desc: 'مقدمة في التعلم العميق والشبكات العصبية.' }, 4: { title: 'معالجة اللغة الطبيعية', desc: 'كيف يفهم الذكاء الاصطناعي اللغة البشرية.' }, 5: { title: 'الرؤية الحاسوبية', desc: 'تقنية الذكاء الاصطناعي للتعرف على الصور والفيديو.' }, 6: { title: 'هندسة الأوامر الأساسية', desc: 'فن التفاعل مع الذكاء الاصطناعي التوليدي.' }, 7: { title: 'الأخلاقيات والتحيز في الذكاء الاصطناعي', desc: 'أهمية الأمان والخصوصية والعدالة.' }, 8: { title: 'دليل المهنة في الذكاء الاصطناعي', desc: 'فرص العمل وكيفية بدء مسيرة مهنية.' } },
    hi: { 1: { title: 'कृत्रिम बुद्धिमत्ता क्या है?', desc: 'AI की बुनियादी अवधारणाएं, इतिहास और दैनिक जीवन में अनुप्रयोग सीखें।' }, 2: { title: 'मशीन लर्निंग मूल बातें', desc: 'मशीन लर्निंग अवधारणाओं को समझें।' }, 3: { title: 'डीप लर्निंग और न्यूरल नेटवर्क', desc: 'डीप लर्निंग और न्यूरल नेटवर्क का परिचय।' }, 4: { title: 'प्राकृतिक भाषा प्रसंस्करण', desc: 'AI मानव भाषा को कैसे समझता है।' }, 5: { title: 'कंप्यूटर विज़न', desc: 'छवियों और वीडियो को पहचानने की AI तकनीक।' }, 6: { title: 'प्रॉम्प्ट इंजीनियरिंग मूल बातें', desc: 'जनरेटिव AI के साथ इंटरैक्ट करने की कला।' }, 7: { title: 'AI में नैतिकता और पूर्वाग्रह', desc: 'AI में सुरक्षा, गोपनीयता और निष्पक्षता।' }, 8: { title: 'AI में करियर गाइड', desc: 'नौकरी के अवसर और AI उद्योग में करियर कैसे शुरू करें।' } },
    pt: { 1: { title: 'O que é Inteligência Artificial?', desc: 'Aprenda conceitos básicos de IA, história e aplicações.' }, 2: { title: 'Fundamentos de Machine Learning', desc: 'Compreenda conceitos de aprendizado de máquina.' }, 3: { title: 'Deep Learning e Redes Neurais', desc: 'Introdução ao aprendizado profundo e redes neurais.' }, 4: { title: 'Processamento de Linguagem Natural', desc: 'Como a IA entende a linguagem humana.' }, 5: { title: 'Visão Computacional', desc: 'Tecnologia IA para reconhecer imagens e vídeos.' }, 6: { title: 'Engenharia de Prompts Básica', desc: 'A arte de interagir com IA generativa.' }, 7: { title: 'Ética e Viés na IA', desc: 'Segurança, privacidade e equidade no uso de IA.' }, 8: { title: 'Guia de Carreira em IA', desc: 'Oportunidades e como iniciar carreira em IA.' } },
    fr: { 1: { title: "Qu'est-ce que l'Intelligence Artificielle ?", desc: "Apprenez les concepts de base de l'IA, son histoire et ses applications." }, 2: { title: 'Les Bases du Machine Learning', desc: "Comprenez les concepts d'apprentissage automatique." }, 3: { title: 'Deep Learning et Réseaux Neuronaux', desc: "Introduction à l'apprentissage profond." }, 4: { title: 'Traitement du Langage Naturel', desc: "Comment l'IA comprend le langage humain." }, 5: { title: 'Vision par Ordinateur', desc: "Technologie IA pour reconnaître images et vidéos." }, 6: { title: "Ingénierie de Prompts de Base", desc: "L'art d'interagir avec l'IA générative." }, 7: { title: "Éthique et Biais dans l'IA", desc: "Sécurité, confidentialité et équité dans l'utilisation de l'IA." }, 8: { title: "Guide de Carrière en IA", desc: "Opportunités et comment démarrer une carrière en IA." } },
    de: { 1: { title: 'Was ist Künstliche Intelligenz?', desc: 'Lernen Sie die Grundlagen der KI, ihre Geschichte und Anwendungen.' }, 2: { title: 'Grundlagen des Machine Learning', desc: 'Verstehen Sie Machine-Learning-Konzepte.' }, 3: { title: 'Deep Learning & Neuronale Netze', desc: 'Einführung in Deep Learning und neuronale Netze.' }, 4: { title: 'Natürliche Sprachverarbeitung', desc: 'Wie KI menschliche Sprache versteht.' }, 5: { title: 'Computer Vision', desc: 'KI-Technologie zur Bild- und Videoerkennung.' }, 6: { title: 'Grundlagen des Prompt Engineering', desc: 'Die Kunst der Interaktion mit generativer KI.' }, 7: { title: 'Ethik und Voreingenommenheit in KI', desc: 'Sicherheit, Datenschutz und Fairness bei der Nutzung von KI.' }, 8: { title: 'Karriereguide im Bereich KI', desc: 'Jobmöglichkeiten und Karrierestart in der KI-Branche.' } },
    ja: { 1: { title: '人工知能とは？', desc: 'AIの基本概念、歴史、日常生活での応用を学びます。' }, 2: { title: '機械学習の基礎', desc: '機械学習の概念を理解します。' }, 3: { title: 'ディープラーニングとニューラルネットワーク', desc: 'ディープラーニングの入門。' }, 4: { title: '自然言語処理（NLP）', desc: 'AIが人間の言語を理解する方法。' }, 5: { title: 'コンピュータビジョン', desc: '画像と動画を認識するAI技術。' }, 6: { title: 'プロンプトエンジニアリング基礎', desc: '生成AIと対話する技術。' }, 7: { title: 'AIにおける倫理とバイアス', desc: 'AIにおけるセキュリティ、プライバシー、公平性。' }, 8: { title: 'AI分野のキャリアガイド', desc: 'AI業界でのキャリアの始め方。' } },
    ko: { 1: { title: '인공지능이란?', desc: 'AI의 기본 개념, 역사, 일상 생활에서의 적용을 배웁니다.' }, 2: { title: '머신러닝 기초', desc: '머신러닝 개념을 이해합니다.' }, 3: { title: '딥러닝과 신경망', desc: '딥러닝과 신경망 소개.' }, 4: { title: '자연어 처리(NLP)', desc: 'AI가 인간 언어를 이해하는 방법.' }, 5: { title: '컴퓨터 비전', desc: '이미지와 비디오를 인식하는 AI 기술.' }, 6: { title: '프롬프트 엔지니어링 기초', desc: '생성 AI와 상호작용하는 기술.' }, 7: { title: 'AI의 윤리와 편견', desc: 'AI 사용의 보안, 개인정보 보호, 공정성.' }, 8: { title: 'AI 분야 커리어 가이드', desc: 'AI 산업에서 커리어를 시작하는 방법.' } },
    ru: { 1: { title: 'Что такое Искусственный Интеллект?', desc: 'Изучите основы ИИ, его историю и применения.' }, 2: { title: 'Основы Машинного Обучения', desc: 'Понимание концепций машинного обучения.' }, 3: { title: 'Глубокое Обучение и Нейронные Сети', desc: 'Введение в глубокое обучение.' }, 4: { title: 'Обработка Естественного Языка', desc: 'Как ИИ понимает человеческий язык.' }, 5: { title: 'Компьютерное Зрение', desc: 'Технология ИИ для распознавания изображений и видео.' }, 6: { title: 'Основы Промпт-Инженерии', desc: 'Искусство взаимодействия с генеративным ИИ.' }, 7: { title: 'Этика и Предвзятость в ИИ', desc: 'Безопасность, конфиденциальность и справедливость.' }, 8: { title: 'Карьерный Гид в Области ИИ', desc: 'Возможности и как начать карьеру в ИИ.' } },
    tr: { 1: { title: 'Yapay Zeka Nedir?', desc: 'Yapay zekanın temel kavramları, tarihi ve uygulamalarını öğrenin.' }, 2: { title: 'Makine Öğrenimi Temelleri', desc: 'Makine öğrenimi kavramlarını anlayın.' }, 3: { title: 'Derin Öğrenme ve Sinir Ağları', desc: 'Derin öğrenme ve sinir ağlarına giriş.' }, 4: { title: 'Doğal Dil İşleme', desc: 'Yapay zeka insan dilini nasıl anlar.' }, 5: { title: 'Bilgisayarla Görü', desc: 'Görüntü ve video tanıma AI teknolojisi.' }, 6: { title: 'Temel Prompt Mühendisliği', desc: 'Üretken yapay zekalarla etkileşim sanatı.' }, 7: { title: "AI'da Etik ve Önyargı", desc: 'AI kullanımında güvenlik, gizlilik ve adalet.' }, 8: { title: "AI Alanında Kariyer Rehberi", desc: 'İş fırsatları ve AI kariyerine nasıl başlanır.' } },
    it: { 1: { title: "Cos'è l'Intelligenza Artificiale?", desc: "Impara i concetti base dell'IA, la sua storia e applicazioni." }, 2: { title: 'Fondamenti di Machine Learning', desc: "Comprendi i concetti dell'apprendimento automatico." }, 3: { title: 'Deep Learning e Reti Neurali', desc: 'Introduzione al deep learning e reti neurali.' }, 4: { title: 'Elaborazione del Linguaggio Naturale', desc: "Come l'IA comprende il linguaggio umano." }, 5: { title: 'Visione Artificiale', desc: "Tecnologia IA per il riconoscimento di immagini e video." }, 6: { title: 'Ingegneria dei Prompt di Base', desc: "L'arte di interagire con l'IA generativa." }, 7: { title: "Etica e Pregiudizi nell'IA", desc: "Sicurezza, privacy e equità nell'uso dell'IA." }, 8: { title: "Guida alla Carriera nell'IA", desc: "Opportunità e come iniziare una carriera nell'IA." } },
    vi: { 1: { title: 'Trí Tuệ Nhân Tạo Là Gì?', desc: 'Học các khái niệm cơ bản về AI, lịch sử và ứng dụng.' }, 2: { title: 'Cơ Bản Về Machine Learning', desc: 'Hiểu các khái niệm học máy.' }, 3: { title: 'Deep Learning & Mạng Nơ-ron', desc: 'Giới thiệu về học sâu và mạng nơ-ron.' }, 4: { title: 'Xử Lý Ngôn Ngữ Tự Nhiên', desc: 'AI hiểu ngôn ngữ con người như thế nào.' }, 5: { title: 'Thị Giác Máy Tính', desc: 'Công nghệ AI nhận dạng hình ảnh và video.' }, 6: { title: 'Kỹ Thuật Prompt Cơ Bản', desc: 'Nghệ thuật tương tác với AI tạo sinh.' }, 7: { title: 'Đạo Đức và Thiên Kiến Trong AI', desc: 'An ninh, quyền riêng tư và công bằng trong AI.' }, 8: { title: 'Hướng Dẫn Nghề Nghiệp AI', desc: 'Cơ hội việc làm và cách bắt đầu sự nghiệp AI.' } }
};

// Merge all extra keys
Object.keys(extraKeys).forEach(lang => { if (translations[lang]) Object.assign(translations[lang], extraKeys[lang]); });
Object.keys(dynamicKeys).forEach(lang => { if (translations[lang]) Object.assign(translations[lang], dynamicKeys[lang]); });

// Helper: get translated string
function t(key) {
    const lang = (data && data.lang) || 'id';
    const dict = translations[lang];
    return (dict && dict[key]) || (translations.id && translations.id[key]) || key;
}

// Helper: get translated lesson title/desc
function tLesson(id, field) {
    const lang = (data && data.lang) || 'id';
    if (lang === 'id') return null; // use original
    const lt = lessonTranslations[lang];
    return (lt && lt[id] && lt[id][field]) || null;
}

// Helper: translate level
function tLevel(level) {
    const map = { 'Pemula': 'level_beginner', 'Menengah': 'level_intermediate', 'Lanjut': 'level_advanced' };
    return map[level] ? t(map[level]) : level;
}

// Helper: translate duration
function tDuration(duration) {
    const match = duration.match(/(\d+)\s*menit/);
    if (match) return match[1] + ' ' + t('min');
    return duration;
}

// Section title translations: { lessonId: [sectionTitle1, sectionTitle2, ...] }
const sectionTranslations = {
    en: { 1: ['Introduction', 'History of AI', 'Types of AI', 'AI Applications in Daily Life', 'Main Components of AI', 'Conclusion'], 2: ['What is Machine Learning?', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Machine Learning Process', 'Evaluation Metrics'], 3: ['What is Deep Learning?', 'Neural Network Structure', 'How Neural Networks Work', 'Deep Learning Architectures', 'Deep Learning Frameworks', 'Deep Learning Challenges'], 4: ['Introduction to NLP', 'Text Preprocessing', 'Text Representation', 'NLP Applications', 'Large Language Models (LLM)', 'NLP Challenges'], 5: ['Introduction to Computer Vision', 'Image Processing Pipeline', 'Computer Vision Tasks', 'CV Architectures', 'Practical Applications', 'Challenges'], 6: ['What is Prompt Engineering?', 'Prompt Techniques', 'Tips for Effective Prompts', 'Practical Use Cases'], 7: ['Why AI Ethics?', 'Bias in AI', 'Privacy & Security', 'Responsible AI Principles'], 8: ['AI Career Landscape', 'Key Roles in AI', 'Essential Skills', 'Getting Started'] },
    zh: { 1: ['引言', 'AI的历史', 'AI的类型', 'AI在生活中的应用', 'AI的主要组成部分', '总结'], 2: ['什么是机器学习？', '监督学习', '无监督学习', '强化学习', '机器学习流程', '评估指标'], 3: ['什么是深度学习？', '神经网络结构', '神经网络工作原理', '深度学习架构', '深度学习框架', '深度学习挑战'], 4: ['NLP简介', '文本预处理', '文本表示', 'NLP应用', '大型语言模型', 'NLP挑战'], 5: ['计算机视觉简介', '图像处理流程', '计算机视觉任务', 'CV架构', '实际应用', '挑战'], 6: ['什么是提示工程？', '提示技术', '有效提示的技巧', '实际用例'], 7: ['为什么需要AI伦理？', 'AI中的偏见', '隐私与安全', '负责任的AI原则'], 8: ['AI职业前景', 'AI关键角色', '必备技能', '如何入门'] },
    es: { 1: ['Introducción', 'Historia de la IA', 'Tipos de IA', 'Aplicaciones de IA', 'Componentes Principales', 'Conclusión'], 2: ['¿Qué es Machine Learning?', 'Aprendizaje Supervisado', 'Aprendizaje No Supervisado', 'Aprendizaje por Refuerzo', 'Proceso de ML', 'Métricas'], 3: ['¿Qué es Deep Learning?', 'Estructura de Redes Neuronales', 'Funcionamiento', 'Arquitecturas', 'Frameworks', 'Desafíos'], 4: ['Introducción a NLP', 'Preprocesamiento', 'Representación', 'Aplicaciones', 'Modelos de Lenguaje', 'Desafíos'], 5: ['Introducción a CV', 'Procesamiento de Imágenes', 'Tareas', 'Arquitecturas', 'Aplicaciones', 'Desafíos'], 6: ['¿Qué es Prompt Engineering?', 'Técnicas', 'Consejos', 'Casos de Uso'], 7: ['¿Por qué Ética en IA?', 'Sesgos', 'Privacidad', 'IA Responsable'], 8: ['Panorama', 'Roles', 'Habilidades', 'Cómo Empezar'] },
    ar: { 1: ['مقدمة', 'تاريخ الذكاء الاصطناعي', 'أنواعه', 'تطبيقاته', 'المكونات الرئيسية', 'الخلاصة'], 2: ['ما هو التعلم الآلي؟', 'التعلم الموجه', 'التعلم غير الموجه', 'التعلم المعزز', 'العملية', 'مقاييس التقييم'], 3: ['ما هو التعلم العميق؟', 'البنية', 'كيف تعمل', 'البنى', 'أطر العمل', 'التحديات'], 4: ['مقدمة في NLP', 'معالجة النص', 'تمثيل النص', 'التطبيقات', 'نماذج اللغة', 'التحديات'], 5: ['مقدمة في CV', 'معالجة الصور', 'المهام', 'البنى', 'التطبيقات', 'التحديات'], 6: ['ما هي هندسة الأوامر؟', 'التقنيات', 'نصائح', 'أمثلة'], 7: ['لماذا الأخلاقيات؟', 'التحيز', 'الخصوصية', 'مبادئ'], 8: ['المشهد الوظيفي', 'الأدوار', 'المهارات', 'كيف تبدأ'] },
    hi: { 1: ['परिचय', 'AI का इतिहास', 'AI के प्रकार', 'AI अनुप्रयोग', 'मुख्य घटक', 'निष्कर्ष'], 2: ['ML क्या है?', 'सुपरवाइज्ड', 'अनसुपरवाइज्ड', 'रीइन्फोर्समेंट', 'प्रक्रिया', 'मेट्रिक्स'], 3: ['डीप लर्निंग क्या है?', 'संरचना', 'कार्यप्रणाली', 'आर्किटेक्चर', 'फ्रेमवर्क', 'चुनौतियां'], 4: ['NLP परिचय', 'प्रीप्रोसेसिंग', 'रिप्रेजेंटेशन', 'अनुप्रयोग', 'भाषा मॉडल', 'चुनौतियां'], 5: ['CV परिचय', 'इमेज प्रोसेसिंग', 'कार्य', 'आर्किटेक्चर', 'अनुप्रयोग', 'चुनौतियां'], 6: ['प्रॉम्प्ट इंजीनियरिंग क्या?', 'तकनीकें', 'सुझाव', 'उपयोग'], 7: ['नैतिकता क्यों?', 'पूर्वाग्रह', 'गोपनीयता', 'जिम्मेदार AI'], 8: ['करियर', 'भूमिकाएं', 'कौशल', 'शुरुआत'] },
    pt: { 1: ['Introdução', 'História da IA', 'Tipos', 'Aplicações', 'Componentes', 'Conclusão'], 2: ['O que é ML?', 'Supervisionado', 'Não Supervisionado', 'Por Reforço', 'Processo', 'Métricas'], 3: ['O que é DL?', 'Estrutura', 'Como Funciona', 'Arquiteturas', 'Frameworks', 'Desafios'], 4: ['Introdução NLP', 'Pré-processamento', 'Representação', 'Aplicações', 'LLMs', 'Desafios'], 5: ['Introdução CV', 'Processamento', 'Tarefas', 'Arquiteturas', 'Aplicações', 'Desafios'], 6: ['O que é Prompt?', 'Técnicas', 'Dicas', 'Casos de Uso'], 7: ['Por que Ética?', 'Viés', 'Privacidade', 'IA Responsável'], 8: ['Panorama', 'Funções', 'Habilidades', 'Como Começar'] },
    fr: { 1: ['Introduction', "Histoire de l'IA", "Types d'IA", 'Applications', 'Composants', 'Conclusion'], 2: ["Qu'est-ce que le ML ?", 'Supervisé', 'Non Supervisé', 'Par Renforcement', 'Processus', 'Métriques'], 3: ["Qu'est-ce que le DL ?", 'Structure', 'Fonctionnement', 'Architectures', 'Frameworks', 'Défis'], 4: ['Introduction NLP', 'Prétraitement', 'Représentation', 'Applications', 'LLM', 'Défis'], 5: ['Introduction CV', 'Traitement', 'Tâches', 'Architectures', 'Applications', 'Défis'], 6: ["Qu'est-ce que le Prompt ?", 'Techniques', 'Conseils', 'Cas'], 7: ["Pourquoi l'Éthique ?", 'Biais', 'Confidentialité', 'IA Responsable'], 8: ['Panorama', 'Rôles', 'Compétences', 'Débuter'] },
    de: { 1: ['Einführung', 'Geschichte', 'Arten', 'Anwendungen', 'Komponenten', 'Fazit'], 2: ['Was ist ML?', 'Überwacht', 'Unüberwacht', 'Bestärkend', 'Prozess', 'Metriken'], 3: ['Was ist DL?', 'Struktur', 'Funktionsweise', 'Architekturen', 'Frameworks', 'Herausforderungen'], 4: ['Einführung NLP', 'Vorverarbeitung', 'Darstellung', 'Anwendungen', 'LLM', 'Herausforderungen'], 5: ['Einführung CV', 'Bildverarbeitung', 'Aufgaben', 'Architekturen', 'Anwendungen', 'Herausforderungen'], 6: ['Was ist Prompt?', 'Techniken', 'Tipps', 'Anwendungsfälle'], 7: ['Warum Ethik?', 'Vorurteile', 'Datenschutz', 'Verantwortungsvolle KI'], 8: ['Karriere', 'Rollen', 'Fähigkeiten', 'Erste Schritte'] },
    ja: { 1: ['はじめに', 'AIの歴史', 'AIの種類', '日常生活でのAI応用', 'AIの主要コンポーネント', 'まとめ'], 2: ['機械学習とは？', '教師あり学習', '教師なし学習', '強化学習', '機械学習のプロセス', '評価指標'], 3: ['ディープラーニングとは？', 'ニューラルネットワークの構造', '動作の仕組み', 'アーキテクチャ', 'フレームワーク', '課題'], 4: ['NLP入門', 'テキスト前処理', 'テキスト表現', '応用例', '大規模言語モデル', '課題'], 5: ['コンピュータビジョン入門', '画像処理', 'CVタスク', 'アーキテクチャ', '実用例', '課題'], 6: ['プロンプトエンジニアリングとは？', 'テクニック', '効果的なヒント', 'ユースケース'], 7: ['なぜAI倫理が重要か？', 'AIのバイアス', 'プライバシーとセキュリティ', '責任あるAIの原則'], 8: ['AIキャリアの展望', '主要な役割', '必須スキル', '始め方'] },
    ko: { 1: ['소개', 'AI의 역사', 'AI의 유형', 'AI 적용', '주요 구성요소', '결론'], 2: ['ML이란?', '지도 학습', '비지도 학습', '강화 학습', 'ML 프로세스', '평가 지표'], 3: ['딥러닝이란?', '신경망 구조', '작동 원리', '아키텍처', '프레임워크', '과제'], 4: ['NLP 소개', '전처리', '텍스트 표현', '응용', 'LLM', '과제'], 5: ['CV 소개', '이미지 처리', 'CV 작업', '아키텍처', '응용', '과제'], 6: ['프롬프트 엔지니어링이란?', '기법', '팁', '사용 사례'], 7: ['왜 AI 윤리?', '편견', '보안', '책임 있는 AI'], 8: ['커리어 전망', '역할', '스킬', '시작하기'] },
    ru: { 1: ['Введение', 'История ИИ', 'Типы ИИ', 'Применения', 'Компоненты', 'Заключение'], 2: ['Что такое ML?', 'С учителем', 'Без учителя', 'С подкреплением', 'Процесс', 'Метрики'], 3: ['Что такое DL?', 'Структура', 'Принцип работы', 'Архитектуры', 'Фреймворки', 'Проблемы'], 4: ['Введение в NLP', 'Предобработка', 'Представление', 'Применения', 'LLM', 'Проблемы'], 5: ['Введение в CV', 'Обработка', 'Задачи', 'Архитектуры', 'Применения', 'Проблемы'], 6: ['Что такое Prompt?', 'Техники', 'Советы', 'Примеры'], 7: ['Зачем этика?', 'Предвзятость', 'Конфиденциальность', 'Ответственный ИИ'], 8: ['Ландшафт', 'Роли', 'Навыки', 'Как начать'] },
    tr: { 1: ['Giriş', 'Tarih', 'Türler', 'Uygulamalar', 'Bileşenler', 'Sonuç'], 2: ['ML Nedir?', 'Denetimli', 'Denetimsiz', 'Pekiştirmeli', 'Süreç', 'Metrikler'], 3: ['DL Nedir?', 'Yapı', 'Çalışma', 'Mimariler', 'Çerçeveler', 'Zorluklar'], 4: ['NLP Giriş', 'Ön İşleme', 'Temsil', 'Uygulamalar', 'LLM', 'Zorluklar'], 5: ['CV Girişi', 'Görüntü İşleme', 'Görevler', 'Mimariler', 'Uygulamalar', 'Zorluklar'], 6: ['Prompt Nedir?', 'Teknikler', 'İpuçları', 'Örnekler'], 7: ['Neden Etik?', 'Önyargı', 'Gizlilik', 'Sorumlu AI'], 8: ['Kariyer', 'Roller', 'Beceriler', 'Başlangıç'] },
    it: { 1: ['Introduzione', "Storia dell'IA", 'Tipi', 'Applicazioni', 'Componenti', 'Conclusione'], 2: ["Cos'è il ML?", 'Supervisionato', 'Non Supervisionato', 'Per Rinforzo', 'Processo', 'Metriche'], 3: ["Cos'è il DL?", 'Struttura', 'Funzionamento', 'Architetture', 'Framework', 'Sfide'], 4: ['Intro NLP', 'Pre-elaborazione', 'Rappresentazione', 'Applicazioni', 'LLM', 'Sfide'], 5: ['Intro CV', 'Elaborazione', 'Compiti', 'Architetture', 'Applicazioni', 'Sfide'], 6: ["Cos'è il Prompt?", 'Tecniche', 'Consigli', "Casi d'Uso"], 7: ["Perché l'Etica?", 'Pregiudizi', 'Privacy', 'IA Responsabile'], 8: ['Panorama', 'Ruoli', 'Competenze', 'Come Iniziare'] },
    vi: { 1: ['Giới thiệu', 'Lịch sử AI', 'Các loại AI', 'Ứng dụng', 'Thành phần chính', 'Kết luận'], 2: ['ML là gì?', 'Có giám sát', 'Không giám sát', 'Tăng cường', 'Quy trình', 'Đánh giá'], 3: ['DL là gì?', 'Cấu trúc', 'Hoạt động', 'Kiến trúc', 'Framework', 'Thách thức'], 4: ['Giới thiệu NLP', 'Tiền xử lý', 'Biểu diễn', 'Ứng dụng', 'LLM', 'Thách thức'], 5: ['Giới thiệu CV', 'Xử lý ảnh', 'Nhiệm vụ', 'Kiến trúc', 'Ứng dụng', 'Thách thức'], 6: ['Prompt là gì?', 'Kỹ thuật', 'Mẹo', 'Ví dụ'], 7: ['Tại sao đạo đức?', 'Thiên kiến', 'Bảo mật', 'AI có trách nhiệm'], 8: ['Toàn cảnh', 'Vai trò', 'Kỹ năng', 'Bắt đầu'] }
};

// Content notice for non-Indonesian languages
const contentNotice = {
    en: '📌 The detailed lesson content below is in Indonesian (Bahasa Indonesia).',
    zh: '📌 以下详细课程内容使用印尼语。',
    es: '📌 El contenido detallado está en indonesio.',
    ar: '📌 المحتوى التفصيلي أدناه باللغة الإندونيسية.',
    hi: '📌 नीचे दी गई सामग्री इंडोनेशियाई भाषा में है।',
    pt: '📌 O conteúdo detalhado está em indonésio.',
    fr: "📌 Le contenu détaillé est en indonésien.",
    de: '📌 Der detaillierte Inhalt ist auf Indonesisch.',
    ja: '📌 以下の詳細なレッスン内容はインドネシア語です。',
    ko: '📌 아래 상세 콘텐츠는 인도네시아어입니다.',
    ru: '📌 Подробное содержание на индонезийском языке.',
    tr: '📌 Detaylı içerik Endonezce olarak sunulmaktadır.',
    it: "📌 Il contenuto dettagliato è in indonesiano.",
    vi: '📌 Nội dung chi tiết bên dưới bằng tiếng Indonesia.'
};

// Helper: get translated section title
function tSectionTitle(lessonId, sectionIdx) {
    const lang = (data && data.lang) || 'id';
    if (lang === 'id') return null;
    const st = sectionTranslations[lang];
    return (st && st[lessonId] && st[lessonId][sectionIdx]) || null;
}

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
    },
    {
        id: 6,
        title: 'Prompt Engineering Dasar',
        desc: 'Seni berinteraksi dengan AI generatif seperti ChatGPT untuk hasil maksimal.',
        level: 'Pemula',
        duration: '15 menit',
        sections: [
            {
                title: 'Apa itu Prompt Engineering?',
                content: 'Prompt Engineering adalah keterampilan merancang, mengoptimalkan, dan menstrukturkan instruksi (prompt) yang diberikan kepada model AI Generatif (seperti LLM) agar menghasilkan output yang relevan, akurat, dan sesuai dengan keinginan pengguna.'
            },
            {
                title: 'Prinsip Dasar Prompting',
                content: '1. Jelas dan Spesifik: Hindari ambiguitas.\n2. Berikan Konteks: Beritahu AI peran apa yang harus dimainkan (misal: "Bertindak sebagai pakar marketing").\n3. Tentukan Format Output: Minta AI merespons dalam format tertentu (tabel, daftar, poin-poin).\n4. Batasi Ruang Lingkup: Jelaskan apa yang TIDAK boleh dilakukan AI.'
            },
            {
                title: 'Teknik Prompting Lanjutan',
                content: 'Zero-shot Prompting: Meminta AI melakukan tugas tanpa memberikan contoh sama sekali.\n\nFew-shot Prompting: Memberikan satu atau beberapa contoh output agar model memahami pola yang diinginkan.\n\nChain of Thought (CoT): Meminta model untuk menjelaskan langkah demi langkah pemikirannya ("Mari berpikir selangkah demi selangkah") sebelum memberikan jawaban akhir.'
            }
        ]
    },
    {
        id: 7,
        title: 'Etika dan Bias dalam AI',
        desc: 'Membahas pentingnya keamanan, privasi, dan keadilan dalam menggunakan AI.',
        level: 'Menengah',
        duration: '20 menit',
        sections: [
            {
                title: 'Mengapa Etika AI Penting?',
                content: 'Saat AI mengambil peran lebih besar dalam keputusan hidup (kredit bank, rekrutmen kerja, diagnosa medis), sangat penting untuk memastikan sistem ini adil, transparan, dan tidak merugikan kelompok mana pun.'
            },
            {
                title: 'Bias dalam AI',
                content: 'AI belajar dari data yang dibuat oleh manusia. Jika data historis mengandung prasangka (bias), model AI akan memperbesar bias tersebut. Contoh: Alat rekrutmen AI yang lebih menyukai kandidat pria karena dipelajari dari data masa lalu yang didominasi pria.'
            },
            {
                title: 'Privasi dan Keamanan',
                content: 'Sistem AI modern membutuhkan jumlah data yang luar biasa besar (Big Data). Hal ini memunculkan kekhawatiran terkait pengumpulan data pribadi, pengawasan massal, dan keamanan jika data tersebut bocor atau disalahgunakan.'
            }
        ]
    },
    {
        id: 8,
        title: 'Panduan Karir di Bidang AI',
        desc: 'Peluang pekerjaan, tren masa depan, dan cara memulai karir di industri AI.',
        level: 'Pemula',
        duration: '15 menit',
        sections: [
            {
                title: 'Peluang Karir AI',
                content: '1. Machine Learning Engineer: Membangun dan men-deploy model AI ke produksi.\n2. Data Scientist: Menganalisa data kompleks untuk wawasan bisnis.\n3. Data Engineer: Membangun infrastruktur dan pipeline untuk memproses data.\n4. AI Researcher: Melakukan penelitian untuk menemukan terobosan algoritma baru.\n5. Prompt Engineer: Menguji dan memaksimalkan output AI Generatif.'
            },
            {
                title: 'Keterampilan Utama',
                content: '- Bahasa Pemrograman: Python, R, SQL.\n- Matematika: Aljabar Linier, Kalkulus, Probabilitas, dan Statistik.\n- Tools/Framework: PyTorch, TensorFlow, Scikit-learn, Pandas.\n- Soft Skills: Pemecahan masalah, komunikasi, dan berpikir kritis.'
            },
            {
                title: 'Cara Memulai',
                content: 'Mulailah dengan memperkuat dasar Python dan matematika. Ikuti kursus online dasar-dasar Machine Learning (seperti modul di platform ini!), cobalah membangun proyek portofolio kecil-kecilan (seperti klasifikasi gambar sederhana atau prediksi harga), lalu berpartisipasi dalam komunitas seperti Kaggle atau GitHub.'
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
    { q: 'YOLO adalah algoritma untuk?', opts: ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'Image Generation'], ans: 1 },
    // Penambahan Kuis Baru
    { q: 'Seni merancang instruksi untuk LLM seperti ChatGPT disebut?', opts: ['Software Engineering', 'Prompt Engineering', 'Data Engineering', 'Machine Learning'], ans: 1 },
    { q: 'Teknik memberikan satu atau lebih contoh agar AI tahu pola output yang kita inginkan dinamakan?', opts: ['Zero-shot prompting', 'One-shot attack', 'Few-shot prompting', 'Chain of thought'], ans: 2 },
    { q: 'Penyebab utama munculnya bias pada algoritma AI adalah?', opts: ['Komputer terlalu pintar', 'Kecepatan internet lambat', 'Data latih yang mengandung bias manusia', 'Listrik yang tidak stabil'], ans: 2 },
    { q: 'Profesi AI yang bertugas membangun infrastruktur dan saluran data (pipeline) adalah?', opts: ['Data Engineer', 'Data Scientist', 'Machine Learning Engineer', 'Web Developer'], ans: 0 }
];

let data = { name: 'Pengguna Baru', level: 3, points: 750, completed: [1, 2, 3, 4, 5], favorites: [], notes: [], forum: [], scores: [{ date: new Date().toLocaleDateString('id-ID'), score: 100 }], darkMode: false, streak: 5, lang: 'id', leaderboard: [{ name: 'Ahmad Rizki', level: 10, points: 5000, completed: 25 }, { name: 'Siti Nurhaliza', level: 9, points: 4800, completed: 24 }, { name: 'Budi Santoso', level: 8, points: 4600, completed: 23 }, { name: 'Dewi Lestari', level: 7, points: 4200, completed: 21 }, { name: 'Rudi Hermawan', level: 6, points: 3800, completed: 19 }] };
let quiz = { current: 0, score: 0, answered: new Set() };

function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) data = JSON.parse(saved);
    if (data.darkMode) document.body.classList.add('dark-mode');

    // Set language selector to saved preference
    const langSelect = document.getElementById('langSelect');
    if (langSelect && data.lang) {
        langSelect.value = data.lang;
    }

    // Apply translation logic
    applyLanguage();

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

function applyLanguage() {
    const lang = data.lang || 'id';
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            const prop = el.getAttribute('data-i18n-prop');
            if (prop === 'placeholder') {
                el.placeholder = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    document.documentElement.lang = lang;
}

function changeLanguage() {
    const select = document.getElementById('langSelect');
    if (select) {
        data.lang = select.value;
        const langName = select.options[select.selectedIndex].text;
        save();
        applyLanguage();
        renderLessons();
        initQuiz();
        notify('success', 'Language → ' + langName);
    }
}

function renderLessons() {
    const c = document.getElementById('lessonsContainer');
    c.innerHTML = LESSONS.map(l => {
        const done = data.completed.includes(l.id), fav = data.favorites.includes(l.id);
        const title = tLesson(l.id, 'title') || l.title;
        const desc = tLesson(l.id, 'desc') || l.desc;
        return `<div class="lesson-card ${done ? 'completed' : ''}" onclick="viewLesson(${l.id})">
            <div class="lesson-header"><span class="lesson-title">${title}</span><span class="lesson-status ${done ? 'done' : 'new'}">${done ? t('status_done') : t('status_new')}</span></div>
            <p class="lesson-desc">${desc}</p>
            <div class="lesson-meta"><span>${t('label_level')}: ${tLevel(l.level)}</span><span>${t('label_duration')}: ${tDuration(l.duration)}</span></div>
            <div class="lesson-actions"><button class="btn-fav ${fav ? 'active' : ''}" onclick="toggleFav(event,${l.id})">${fav ? t('btn_remove_fav') : t('btn_add_fav')}</button></div>
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
        const title = tLesson(l.id, 'title') || l.title;
        const desc = tLesson(l.id, 'desc') || l.desc;

        let html = `
            <div class="lesson-modal-header" style="margin-bottom:30px;padding-bottom:20px;border-bottom:2px solid var(--border-light)">
                <h2 style="font-size:1.8rem;font-weight:800;color:var(--primary);margin-bottom:8px">${title}</h2>
                <p style="color:var(--text-secondary);margin-bottom:16px">${desc}</p>
                <div style="display:flex;gap:20px;font-size:0.9rem;color:var(--text-secondary)">
                    <span style="background:var(--bg-light);padding:6px 14px;border-radius:20px">${t('label_level')}: ${tLevel(l.level)}</span>
                    <span style="background:var(--bg-light);padding:6px 14px;border-radius:20px">${t('label_duration')}: ${tDuration(l.duration)}</span>
                    <span style="background:rgba(16,185,129,0.1);color:var(--success);padding:6px 14px;border-radius:20px">${t('status_done')}</span>
                </div>
            </div>
        `;

        if (l.sections) {
            html += '<div class="lesson-sections">';
            l.sections.forEach((section, idx) => {
                const secTitle = tSectionTitle(l.id, idx) || section.title;
                const secContent = (typeof tSectionContent === 'function' ? tSectionContent(l.id, idx) : null) || section.content;
                html += `
                    <div class="lesson-section" style="margin-bottom:28px">
                        <h3 style="font-size:1.2rem;font-weight:700;color:var(--text-primary);margin-bottom:12px;display:flex;align-items:center;gap:10px">
                            <span style="background:var(--primary);color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.85rem">${idx + 1}</span>
                            ${secTitle}
                        </h3>
                        <div style="color:var(--text-secondary);line-height:1.8;padding-left:38px;white-space:pre-wrap">${secContent}</div>
                    </div>
                `;
            });
            html += '</div>';
        }

        html += `
            <div style="margin-top:30px;padding-top:20px;border-top:2px solid var(--border-light);display:flex;gap:12px;flex-wrap:wrap">
                <button class="btn-primary" onclick="closeModal('lessonModal')">${t('btn_done_read')}</button>
                <button class="btn-secondary" onclick="addNoteFromLesson('${l.title}')">${t('btn_make_note')}</button>
            </div>
        `;

        document.getElementById('lessonModalContent').innerHTML = html;
        document.getElementById('lessonModal').classList.add('active');
        notify('success', t('notify_open') + ': ' + title);
    }
}

function addNoteFromLesson(title) {
    closeModal('lessonModal');
    document.getElementById('noteTitleInput').value = t('tab_catatan') + ': ' + title;
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
    if (!favs.length) { c.innerHTML = '<div class="empty-state"><p>' + t('no_fav') + '</p></div>'; return; }
    c.innerHTML = favs.map(l => {
        const title = tLesson(l.id, 'title') || l.title;
        const desc = tLesson(l.id, 'desc') || l.desc;
        return `<div class="lesson-card" onclick="viewLesson(${l.id})"><div class="lesson-header"><span class="lesson-title">${title}</span></div><p class="lesson-desc">${desc}</p><button class="btn-fav active" onclick="toggleFav(event,${l.id})">${t('btn_remove_fav')}</button></div>`;
    }).join('');
}

function searchMateri() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    if (!q.trim()) { renderLessons(); return; }
    const results = LESSONS.filter(l => {
        const title = tLesson(l.id, 'title') || l.title;
        const desc = tLesson(l.id, 'desc') || l.desc;
        return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || l.title.toLowerCase().includes(q) || l.desc.toLowerCase().includes(q);
    });
    const c = document.getElementById('lessonsContainer');
    if (!results.length) { c.innerHTML = '<div class="empty-state"><p>' + t('no_search') + '</p></div>'; return; }
    c.innerHTML = results.map(l => {
        const done = data.completed.includes(l.id);
        const title = tLesson(l.id, 'title') || l.title;
        const desc = tLesson(l.id, 'desc') || l.desc;
        return `<div class="lesson-card ${done ? 'completed' : ''}" onclick="viewLesson(${l.id})"><div class="lesson-header"><span class="lesson-title">${title}</span><span class="lesson-status ${done ? 'done' : 'new'}">${done ? t('status_done') : t('status_new')}</span></div><p class="lesson-desc">${desc}</p></div>`;
    }).join('');
}

function initQuiz() {
    const c = document.getElementById('quizContent');
    c.innerHTML = QUIZ.map((q, i) => `<div class="quiz-item ${i === 0 ? 'active' : ''}" id="q${i}" style="${i === 0 ? '' : 'display:none'}">
        <div class="quiz-header"><div class="question">${i + 1}. ${q.q}</div><span class="quiz-counter">${t('quiz_q')} ${i + 1}/${QUIZ.length}</span></div>
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
