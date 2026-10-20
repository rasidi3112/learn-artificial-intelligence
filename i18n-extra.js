// Translation completions and corrections, merged into the dictionaries defined in app.js.
// Loaded after app.js and before DOMContentLoaded, so init() already sees the full set.
// - uiKeys: strings that were missing outside id/en, plus keys for the editorial layout
// - lessonDescFix: fuller descriptions for lessons 2–8 (earlier versions were truncated)
// - sectionTitleFix: lessons 6–8 have three sections; earlier arrays had four and drifted out of sync

const uiKeys = {
    id: {
        app_desc: 'Kursus terbuka kecerdasan buatan',
        forum_demo_notice: 'Mode lokal: data forum hanya tersimpan di perangkat ini.',
        lb_demo_notice: 'Papan peringkat ini berbasis progres di perangkat Anda dan belum terhubung ke server.',
        hero_kicker: 'Kursus terbuka kecerdasan buatan',
        hero_title: 'Pahami cara mesin belajar, dari prinsip pertama hingga sistem nyata.',
        hero_lede: 'Tujuh belas modul ringkas, dari sejarah AI dan machine learning hingga robotika, edge AI, dan tata kelola. Baca dengan tempo Anda sendiri, uji pemahaman, dan simpan catatan. Semuanya tersimpan di perangkat Anda.',
        hero_cta: 'Mulai membaca', hero_cta_quiz: 'Kerjakan kuis',
        meta_lessons: 'modul', meta_questions: 'soal kuis', meta_languages: 'bahasa', meta_minutes: 'menit bacaan',
        fig_caption: 'Gbr. 1. Satu neuron buatan: input berbobot dijumlahkan, lalu diteruskan lewat fungsi aktivasi.',
        label_lesson: 'Modul', progress_of: '{a} dari {b} modul selesai',
        notif_welcome: 'Selamat datang di Belajar AI! Mulai dari modul pertama.', notif_lesson_done: 'Selesai membaca', notif_quiz_done: 'Kuis selesai dengan skor {n}%', notif_badge: 'Pencapaian diraih', notif_none: 'Belum ada notifikasi baru.', notif_new: 'baru',
        user_default: 'Pelajar', aria_profile: 'Profil pengguna', aria_notifications: 'Notifikasi', aria_theme: 'Ganti tema terang/gelap', aria_language: 'Pilih bahasa', aria_close: 'Tutup', skip_link: 'Lewati ke konten'
    },
    en: {
        app_desc: 'An open course in artificial intelligence',
        forum_demo_notice: 'Local mode: forum posts are stored only on this device.',
        lb_demo_notice: 'This leaderboard reflects progress on your device and is not connected to a server yet.',
        hero_kicker: 'An open course in artificial intelligence',
        hero_title: 'Understand how machines learn, from first principles to real systems.',
        hero_lede: 'Seventeen concise modules, from the history of AI and machine learning to robotics, edge AI and governance. Read at your own pace, test what you know, and keep notes. Everything stays on your device.',
        hero_cta: 'Start reading', hero_cta_quiz: 'Take the quiz',
        meta_lessons: 'modules', meta_questions: 'quiz questions', meta_languages: 'languages', meta_minutes: 'minutes of reading',
        fig_caption: 'Fig. 1. A single artificial neuron: weighted inputs are summed, then passed through an activation function.',
        label_lesson: 'Module', progress_of: '{a} of {b} modules complete',
        notif_welcome: 'Welcome to Learn AI! Start with the first module.', notif_lesson_done: 'Finished reading', notif_quiz_done: 'Quiz completed with a score of {n}%', notif_badge: 'Achievement unlocked', notif_none: 'No new notifications.', notif_new: 'new',
        user_default: 'Learner', aria_profile: 'User profile', aria_notifications: 'Notifications', aria_theme: 'Toggle light/dark theme', aria_language: 'Select language', aria_close: 'Close', skip_link: 'Skip to content'
    },
    zh: {
        app_desc: '人工智能公开课',
        achievements_title: '成就', forum_demo_notice: '本地模式：论坛内容仅保存在此设备上。', lb_demo_notice: '排行榜基于你在本设备上的进度，尚未连接服务器。', footer_rights: '保留所有权利。',
        btn_export: '导出数据', btn_import: '导入数据', quiz_correct_badge: '正确', quiz_wrong_badge: '错误', notify_note_updated: '笔记已更新！', btn_edit: '编辑', notify_reply_added: '回复已添加！',
        btn_show_replies: '显示回复', btn_hide_replies: '隐藏回复', lb_you: '你', lb_empty: '暂无本地数据。完成课程和测验即可获得积分！', lb_local_note: '此排行榜基于你在本设备上的自主学习进度。',
        notify_export_done: '数据导出成功！', notify_import_done: '数据导入成功！', notify_import_fail: '数据格式无效！', badge_locked: '未解锁',
        hero_kicker: '人工智能公开课', hero_title: '理解机器如何学习：从基本原理到真实系统。',
        hero_lede: '十七个精炼模块，从人工智能与机器学习的历史，到机器人、边缘 AI 与治理。按自己的节奏阅读、检验所学、记录笔记，所有数据都保存在你的设备上。',
        hero_cta: '开始阅读', hero_cta_quiz: '参加测验', meta_lessons: '个模块', meta_questions: '道测验题', meta_languages: '种语言', meta_minutes: '分钟阅读',
        fig_caption: '图 1　单个人工神经元：加权输入求和后，经过激活函数输出。', label_lesson: '模块', progress_of: '已完成 {a} / {b} 个模块',
        notif_welcome: '欢迎来到学习 AI！从第一个模块开始吧。', notif_lesson_done: '已读完', notif_quiz_done: '测验完成，得分 {n}%', notif_badge: '获得成就', notif_none: '暂无新通知。', notif_new: '条新',
        user_default: '学习者', aria_profile: '用户资料', aria_notifications: '通知', aria_theme: '切换浅色/深色主题', aria_language: '选择语言', aria_close: '关闭', skip_link: '跳到正文'
    },
    es: {
        app_desc: 'Un curso abierto de inteligencia artificial',
        achievements_title: 'Logros', forum_demo_notice: 'Modo local: las publicaciones del foro solo se guardan en este dispositivo.', lb_demo_notice: 'Esta clasificación refleja el progreso en tu dispositivo y aún no está conectada a un servidor.', footer_rights: 'Todos los derechos reservados.',
        btn_export: 'Exportar datos', btn_import: 'Importar datos', quiz_correct_badge: 'Correcto', quiz_wrong_badge: 'Incorrecto', notify_note_updated: '¡Nota actualizada!', btn_edit: 'Editar', notify_reply_added: '¡Respuesta añadida!',
        btn_show_replies: 'Ver respuestas', btn_hide_replies: 'Ocultar respuestas', lb_you: 'Tú', lb_empty: 'Aún no hay datos locales. ¡Completa lecciones y cuestionarios para sumar puntos!', lb_local_note: 'Esta clasificación se basa en tu progreso en este dispositivo.',
        notify_export_done: '¡Datos exportados!', notify_import_done: '¡Datos importados!', notify_import_fail: '¡Formato de datos no válido!', badge_locked: 'Bloqueado',
        hero_kicker: 'Un curso abierto de inteligencia artificial', hero_title: 'Entiende cómo aprenden las máquinas: de los primeros principios a sistemas reales.',
        hero_lede: 'Diecisiete módulos concisos, desde la historia de la IA y el aprendizaje automático hasta la robótica, la IA en el borde y la gobernanza. Lee a tu ritmo, pon a prueba lo que sabes y toma notas: todo se queda en tu dispositivo.',
        hero_cta: 'Empezar a leer', hero_cta_quiz: 'Hacer el cuestionario', meta_lessons: 'módulos', meta_questions: 'preguntas', meta_languages: 'idiomas', meta_minutes: 'minutos de lectura',
        fig_caption: 'Fig. 1. Una neurona artificial: las entradas ponderadas se suman y pasan por una función de activación.', label_lesson: 'Módulo', progress_of: '{a} de {b} módulos completados',
        notif_welcome: '¡Bienvenido a Aprender IA! Empieza por el primer módulo.', notif_lesson_done: 'Lectura terminada', notif_quiz_done: 'Cuestionario completado con {n}%', notif_badge: 'Logro desbloqueado', notif_none: 'No hay notificaciones nuevas.', notif_new: 'nuevas',
        user_default: 'Estudiante', aria_profile: 'Perfil de usuario', aria_notifications: 'Notificaciones', aria_theme: 'Cambiar tema claro/oscuro', aria_language: 'Seleccionar idioma', aria_close: 'Cerrar', skip_link: 'Saltar al contenido'
    },
    ar: {
        app_desc: 'مقرر مفتوح في الذكاء الاصطناعي',
        achievements_title: 'الإنجازات', forum_demo_notice: 'الوضع المحلي: تُحفظ منشورات المنتدى على هذا الجهاز فقط.', lb_demo_notice: 'تعكس لوحة المتصدرين تقدمك على هذا الجهاز ولم تُربط بخادم بعد.', footer_rights: 'جميع الحقوق محفوظة.',
        btn_export: 'تصدير البيانات', btn_import: 'استيراد البيانات', quiz_correct_badge: 'صحيح', quiz_wrong_badge: 'خطأ', notify_note_updated: 'تم تحديث الملاحظة!', btn_edit: 'تعديل', notify_reply_added: 'تمت إضافة الرد!',
        btn_show_replies: 'عرض الردود', btn_hide_replies: 'إخفاء الردود', lb_you: 'أنت', lb_empty: 'لا توجد بيانات محلية بعد. أكمل الدروس والاختبارات لجمع النقاط!', lb_local_note: 'تعتمد لوحة المتصدرين هذه على تقدمك الذاتي على هذا الجهاز.',
        notify_export_done: 'تم تصدير البيانات بنجاح!', notify_import_done: 'تم استيراد البيانات بنجاح!', notify_import_fail: 'تنسيق البيانات غير صالح!', badge_locked: 'مقفل',
        hero_kicker: 'مقرر مفتوح في الذكاء الاصطناعي', hero_title: 'افهم كيف تتعلم الآلات، من المبادئ الأولى إلى الأنظمة الحقيقية.',
        hero_lede: 'سبع عشرة وحدة موجزة، من تاريخ الذكاء الاصطناعي والتعلم الآلي إلى الروبوتات والذكاء الاصطناعي الطرفي والحوكمة. اقرأ بالسرعة التي تناسبك، واختبر ما تعلمته، ودوّن ملاحظاتك. كل شيء يبقى على جهازك.',
        hero_cta: 'ابدأ القراءة', hero_cta_quiz: 'ابدأ الاختبار', meta_lessons: 'وحدة', meta_questions: 'سؤالًا', meta_languages: 'لغة', meta_minutes: 'دقيقة قراءة',
        fig_caption: 'الشكل 1. خلية عصبية اصطناعية واحدة: تُجمع المدخلات الموزونة ثم تمر عبر دالة التفعيل.', label_lesson: 'الوحدة', progress_of: 'اكتملت {a} من {b} وحدة',
        notif_welcome: 'مرحبًا بك! ابدأ بالوحدة الأولى.', notif_lesson_done: 'انتهيت من قراءة', notif_quiz_done: 'اكتمل الاختبار بنتيجة {n}%', notif_badge: 'تم فتح إنجاز', notif_none: 'لا توجد إشعارات جديدة.', notif_new: 'جديدة',
        user_default: 'متعلم', aria_profile: 'الملف الشخصي', aria_notifications: 'الإشعارات', aria_theme: 'تبديل الوضع الفاتح/الداكن', aria_language: 'اختر اللغة', aria_close: 'إغلاق', skip_link: 'انتقل إلى المحتوى'
    },
    hi: {
        app_desc: 'कृत्रिम बुद्धिमत्ता का एक खुला पाठ्यक्रम',
        achievements_title: 'उपलब्धियाँ', forum_demo_notice: 'लोकल मोड: फ़ोरम पोस्ट केवल इसी डिवाइस पर सहेजी जाती हैं।', lb_demo_notice: 'यह लीडरबोर्ड आपके डिवाइस की प्रगति दिखाता है और अभी सर्वर से जुड़ा नहीं है।', footer_rights: 'सर्वाधिकार सुरक्षित।',
        btn_export: 'डेटा निर्यात करें', btn_import: 'डेटा आयात करें', quiz_correct_badge: 'सही', quiz_wrong_badge: 'गलत', notify_note_updated: 'नोट अपडेट हो गया!', btn_edit: 'संपादित करें', notify_reply_added: 'जवाब जोड़ा गया!',
        btn_show_replies: 'जवाब दिखाएँ', btn_hide_replies: 'जवाब छिपाएँ', lb_you: 'आप', lb_empty: 'अभी कोई स्थानीय डेटा नहीं है। अंक पाने के लिए पाठ और क्विज़ पूरे करें!', lb_local_note: 'यह लीडरबोर्ड इस डिवाइस पर आपकी स्व-गति प्रगति पर आधारित है।',
        notify_export_done: 'डेटा सफलतापूर्वक निर्यात हुआ!', notify_import_done: 'डेटा सफलतापूर्वक आयात हुआ!', notify_import_fail: 'अमान्य डेटा प्रारूप!', badge_locked: 'लॉक',
        hero_kicker: 'कृत्रिम बुद्धिमत्ता का एक खुला पाठ्यक्रम', hero_title: 'समझिए मशीनें कैसे सीखती हैं, बुनियादी सिद्धांतों से वास्तविक प्रणालियों तक।',
        hero_lede: 'सत्रह संक्षिप्त मॉड्यूल: AI और मशीन लर्निंग के इतिहास से लेकर रोबोटिक्स, एज AI और गवर्नेंस तक। अपनी गति से पढ़ें, अपनी समझ परखें और नोट्स रखें। सब कुछ आपके डिवाइस पर ही रहता है।',
        hero_cta: 'पढ़ना शुरू करें', hero_cta_quiz: 'क्विज़ दें', meta_lessons: 'मॉड्यूल', meta_questions: 'क्विज़ प्रश्न', meta_languages: 'भाषाएँ', meta_minutes: 'मिनट का पाठ',
        fig_caption: 'चित्र 1. एक कृत्रिम न्यूरॉन: भारित इनपुट जोड़े जाते हैं, फिर एक्टिवेशन फ़ंक्शन से गुज़रते हैं।', label_lesson: 'मॉड्यूल', progress_of: '{b} में से {a} मॉड्यूल पूरे',
        notif_welcome: 'स्वागत है! पहले मॉड्यूल से शुरुआत करें।', notif_lesson_done: 'पढ़ना पूरा हुआ', notif_quiz_done: 'क्विज़ {n}% अंक के साथ पूरा हुआ', notif_badge: 'उपलब्धि अनलॉक हुई', notif_none: 'कोई नई सूचना नहीं।', notif_new: 'नई',
        user_default: 'शिक्षार्थी', aria_profile: 'उपयोगकर्ता प्रोफ़ाइल', aria_notifications: 'सूचनाएँ', aria_theme: 'लाइट/डार्क थीम बदलें', aria_language: 'भाषा चुनें', aria_close: 'बंद करें', skip_link: 'सामग्री पर जाएँ'
    },
    pt: {
        app_desc: 'Um curso aberto de inteligência artificial',
        achievements_title: 'Conquistas', forum_demo_notice: 'Modo local: as publicações do fórum ficam salvas apenas neste dispositivo.', lb_demo_notice: 'Esta classificação reflete o progresso no seu dispositivo e ainda não está conectada a um servidor.', footer_rights: 'Todos os direitos reservados.',
        btn_export: 'Exportar dados', btn_import: 'Importar dados', quiz_correct_badge: 'Correto', quiz_wrong_badge: 'Incorreto', notify_note_updated: 'Nota atualizada!', btn_edit: 'Editar', notify_reply_added: 'Resposta adicionada!',
        btn_show_replies: 'Ver respostas', btn_hide_replies: 'Ocultar respostas', lb_you: 'Você', lb_empty: 'Ainda não há dados locais. Conclua lições e quizzes para ganhar pontos!', lb_local_note: 'Esta classificação se baseia no seu progresso neste dispositivo.',
        notify_export_done: 'Dados exportados!', notify_import_done: 'Dados importados!', notify_import_fail: 'Formato de dados inválido!', badge_locked: 'Bloqueado',
        hero_kicker: 'Um curso aberto de inteligência artificial', hero_title: 'Entenda como as máquinas aprendem, dos primeiros princípios a sistemas reais.',
        hero_lede: 'Dezessete módulos concisos, da história da IA e do aprendizado de máquina à robótica, IA de borda e governança. Leia no seu ritmo, teste o que aprendeu e faça anotações. Tudo fica no seu dispositivo.',
        hero_cta: 'Começar a ler', hero_cta_quiz: 'Fazer o quiz', meta_lessons: 'módulos', meta_questions: 'perguntas', meta_languages: 'idiomas', meta_minutes: 'minutos de leitura',
        fig_caption: 'Fig. 1. Um neurônio artificial: as entradas ponderadas são somadas e passam por uma função de ativação.', label_lesson: 'Módulo', progress_of: '{a} de {b} módulos concluídos',
        notif_welcome: 'Bem-vindo ao Aprender IA! Comece pelo primeiro módulo.', notif_lesson_done: 'Leitura concluída', notif_quiz_done: 'Quiz concluído com {n}%', notif_badge: 'Conquista desbloqueada', notif_none: 'Nenhuma notificação nova.', notif_new: 'novas',
        user_default: 'Estudante', aria_profile: 'Perfil do usuário', aria_notifications: 'Notificações', aria_theme: 'Alternar tema claro/escuro', aria_language: 'Selecionar idioma', aria_close: 'Fechar', skip_link: 'Pular para o conteúdo'
    },
    fr: {
        app_desc: "Un cours ouvert d'intelligence artificielle",
        achievements_title: 'Succès', forum_demo_notice: 'Mode local : les messages du forum sont enregistrés uniquement sur cet appareil.', lb_demo_notice: "Ce classement reflète la progression sur votre appareil et n'est pas encore relié à un serveur.", footer_rights: 'Tous droits réservés.',
        btn_export: 'Exporter les données', btn_import: 'Importer des données', quiz_correct_badge: 'Correct', quiz_wrong_badge: 'Incorrect', notify_note_updated: 'Note mise à jour !', btn_edit: 'Modifier', notify_reply_added: 'Réponse ajoutée !',
        btn_show_replies: 'Afficher les réponses', btn_hide_replies: 'Masquer les réponses', lb_you: 'Vous', lb_empty: 'Aucune donnée locale pour le moment. Terminez des leçons et des quiz pour gagner des points !', lb_local_note: 'Ce classement repose sur votre progression sur cet appareil.',
        notify_export_done: 'Données exportées !', notify_import_done: 'Données importées !', notify_import_fail: 'Format de données invalide !', badge_locked: 'Verrouillé',
        hero_kicker: "Un cours ouvert d'intelligence artificielle", hero_title: 'Comprendre comment les machines apprennent, des premiers principes aux systèmes réels.',
        hero_lede: "Dix-sept modules concis, de l'histoire de l'IA et de l'apprentissage automatique à la robotique, l'IA embarquée et la gouvernance. Lisez à votre rythme, testez vos connaissances et prenez des notes. Tout reste sur votre appareil.",
        hero_cta: 'Commencer la lecture', hero_cta_quiz: 'Passer le quiz', meta_lessons: 'modules', meta_questions: 'questions', meta_languages: 'langues', meta_minutes: 'minutes de lecture',
        fig_caption: "Fig. 1. Un neurone artificiel : les entrées pondérées sont additionnées, puis passent par une fonction d'activation.", label_lesson: 'Module', progress_of: '{a} modules terminés sur {b}',
        notif_welcome: 'Bienvenue ! Commencez par le premier module.', notif_lesson_done: 'Lecture terminée', notif_quiz_done: 'Quiz terminé avec un score de {n} %', notif_badge: 'Succès débloqué', notif_none: 'Aucune nouvelle notification.', notif_new: 'nouvelles',
        user_default: 'Apprenant', aria_profile: 'Profil utilisateur', aria_notifications: 'Notifications', aria_theme: 'Basculer thème clair/sombre', aria_language: 'Choisir la langue', aria_close: 'Fermer', skip_link: 'Aller au contenu'
    },
    de: {
        app_desc: 'Ein offener Kurs über künstliche Intelligenz',
        achievements_title: 'Erfolge', forum_demo_notice: 'Lokaler Modus: Forenbeiträge werden nur auf diesem Gerät gespeichert.', lb_demo_notice: 'Diese Bestenliste zeigt den Fortschritt auf Ihrem Gerät und ist noch nicht mit einem Server verbunden.', footer_rights: 'Alle Rechte vorbehalten.',
        btn_export: 'Daten exportieren', btn_import: 'Daten importieren', quiz_correct_badge: 'Richtig', quiz_wrong_badge: 'Falsch', notify_note_updated: 'Notiz aktualisiert!', btn_edit: 'Bearbeiten', notify_reply_added: 'Antwort hinzugefügt!',
        btn_show_replies: 'Antworten anzeigen', btn_hide_replies: 'Antworten ausblenden', lb_you: 'Sie', lb_empty: 'Noch keine lokalen Daten. Schließen Sie Lektionen und Quizze ab, um Punkte zu sammeln!', lb_local_note: 'Diese Bestenliste basiert auf Ihrem Fortschritt auf diesem Gerät.',
        notify_export_done: 'Daten exportiert!', notify_import_done: 'Daten importiert!', notify_import_fail: 'Ungültiges Datenformat!', badge_locked: 'Gesperrt',
        hero_kicker: 'Ein offener Kurs über künstliche Intelligenz', hero_title: 'Verstehen, wie Maschinen lernen: von den Grundprinzipien bis zu realen Systemen.',
        hero_lede: 'Siebzehn kompakte Module, von der Geschichte der KI und des maschinellen Lernens bis zu Robotik, Edge AI und Governance. Lesen Sie in Ihrem Tempo, prüfen Sie Ihr Wissen und machen Sie Notizen. Alles bleibt auf Ihrem Gerät.',
        hero_cta: 'Lesen beginnen', hero_cta_quiz: 'Zum Quiz', meta_lessons: 'Module', meta_questions: 'Quizfragen', meta_languages: 'Sprachen', meta_minutes: 'Minuten Lesezeit',
        fig_caption: 'Abb. 1. Ein künstliches Neuron: Gewichtete Eingaben werden summiert und durch eine Aktivierungsfunktion geleitet.', label_lesson: 'Modul', progress_of: '{a} von {b} Modulen abgeschlossen',
        notif_welcome: 'Willkommen! Beginnen Sie mit dem ersten Modul.', notif_lesson_done: 'Gelesen', notif_quiz_done: 'Quiz mit {n} % abgeschlossen', notif_badge: 'Erfolg freigeschaltet', notif_none: 'Keine neuen Benachrichtigungen.', notif_new: 'neu',
        user_default: 'Lernende Person', aria_profile: 'Benutzerprofil', aria_notifications: 'Benachrichtigungen', aria_theme: 'Helles/dunkles Design umschalten', aria_language: 'Sprache wählen', aria_close: 'Schließen', skip_link: 'Zum Inhalt springen'
    },
    ja: {
        app_desc: '人工知能のオープンコース',
        achievements_title: '実績', forum_demo_notice: 'ローカルモード：フォーラムの投稿はこの端末にのみ保存されます。', lb_demo_notice: 'このリーダーボードは端末上の進捗を反映しており、まだサーバーには接続されていません。', footer_rights: 'All rights reserved.',
        btn_export: 'データを書き出す', btn_import: 'データを読み込む', quiz_correct_badge: '正解', quiz_wrong_badge: '不正解', notify_note_updated: 'ノートを更新しました！', btn_edit: '編集', notify_reply_added: '返信を追加しました！',
        btn_show_replies: '返信を表示', btn_hide_replies: '返信を隠す', lb_you: 'あなた', lb_empty: 'ローカルデータはまだありません。レッスンとクイズを完了してポイントを集めましょう！', lb_local_note: 'このリーダーボードは、この端末での学習進捗に基づいています。',
        notify_export_done: 'データを書き出しました！', notify_import_done: 'データを読み込みました！', notify_import_fail: 'データ形式が無効です！', badge_locked: '未解除',
        hero_kicker: '人工知能のオープンコース', hero_title: '機械はどのように学ぶのか。基本原理から実際のシステムまで。',
        hero_lede: 'AIと機械学習の歴史から、ロボティクス、エッジAI、ガバナンスまでを扱う17の簡潔なモジュール。自分のペースで読み、理解度を確かめ、ノートを残せます。データはすべてお使いの端末に保存されます。',
        hero_cta: '読み始める', hero_cta_quiz: 'クイズに挑戦', meta_lessons: 'モジュール', meta_questions: '問のクイズ', meta_languages: '言語', meta_minutes: '分の読み物',
        fig_caption: '図1　1つの人工ニューロン：重み付きの入力を合計し、活性化関数を通して出力する。', label_lesson: 'モジュール', progress_of: '{b}モジュール中 {a} 完了',
        notif_welcome: 'ようこそ！最初のモジュールから始めましょう。', notif_lesson_done: '読了', notif_quiz_done: 'クイズ完了：スコア {n}%', notif_badge: '実績を解除', notif_none: '新しい通知はありません。', notif_new: '件の新着',
        user_default: '学習者', aria_profile: 'ユーザープロフィール', aria_notifications: '通知', aria_theme: 'ライト/ダークテーマ切替', aria_language: '言語を選択', aria_close: '閉じる', skip_link: '本文へスキップ'
    },
    ko: {
        app_desc: '인공지능 공개 강좌',
        achievements_title: '업적', forum_demo_notice: '로컬 모드: 포럼 게시물은 이 기기에만 저장됩니다.', lb_demo_notice: '이 리더보드는 기기에 저장된 진행 상황을 반영하며 아직 서버와 연결되어 있지 않습니다.', footer_rights: 'All rights reserved.',
        btn_export: '데이터 내보내기', btn_import: '데이터 가져오기', quiz_correct_badge: '정답', quiz_wrong_badge: '오답', notify_note_updated: '노트가 수정되었습니다!', btn_edit: '편집', notify_reply_added: '답글이 추가되었습니다!',
        btn_show_replies: '답글 보기', btn_hide_replies: '답글 숨기기', lb_you: '나', lb_empty: '아직 로컬 데이터가 없습니다. 레슨과 퀴즈를 완료해 포인트를 모으세요!', lb_local_note: '이 리더보드는 이 기기에서의 자기 주도 학습 진행을 기반으로 합니다.',
        notify_export_done: '데이터를 내보냈습니다!', notify_import_done: '데이터를 가져왔습니다!', notify_import_fail: '잘못된 데이터 형식입니다!', badge_locked: '잠김',
        hero_kicker: '인공지능 공개 강좌', hero_title: '기본 원리부터 실제 시스템까지, 기계가 배우는 방식을 이해하세요.',
        hero_lede: 'AI와 머신러닝의 역사부터 로보틱스, 엣지 AI, 거버넌스까지 다루는 17개의 간결한 모듈. 자신의 속도로 읽고, 이해도를 점검하고, 노트를 남기세요. 모든 데이터는 기기에만 저장됩니다.',
        hero_cta: '읽기 시작', hero_cta_quiz: '퀴즈 풀기', meta_lessons: '모듈', meta_questions: '퀴즈 문항', meta_languages: '언어', meta_minutes: '분 분량',
        fig_caption: '그림 1. 하나의 인공 뉴런: 가중치가 적용된 입력을 더한 뒤 활성화 함수를 통과시킨다.', label_lesson: '모듈', progress_of: '{b}개 중 {a}개 모듈 완료',
        notif_welcome: '환영합니다! 첫 번째 모듈부터 시작해 보세요.', notif_lesson_done: '읽기 완료', notif_quiz_done: '퀴즈 완료: {n}%', notif_badge: '업적 달성', notif_none: '새 알림이 없습니다.', notif_new: '개 새 알림',
        user_default: '학습자', aria_profile: '사용자 프로필', aria_notifications: '알림', aria_theme: '라이트/다크 테마 전환', aria_language: '언어 선택', aria_close: '닫기', skip_link: '본문으로 건너뛰기'
    },
    ru: {
        app_desc: 'Открытый курс по искусственному интеллекту',
        achievements_title: 'Достижения', forum_demo_notice: 'Локальный режим: сообщения форума хранятся только на этом устройстве.', lb_demo_notice: 'Таблица отражает прогресс на вашем устройстве и пока не подключена к серверу.', footer_rights: 'Все права защищены.',
        btn_export: 'Экспорт данных', btn_import: 'Импорт данных', quiz_correct_badge: 'Верно', quiz_wrong_badge: 'Неверно', notify_note_updated: 'Заметка обновлена!', btn_edit: 'Изменить', notify_reply_added: 'Ответ добавлен!',
        btn_show_replies: 'Показать ответы', btn_hide_replies: 'Скрыть ответы', lb_you: 'Вы', lb_empty: 'Локальных данных пока нет. Проходите уроки и тесты, чтобы набирать очки!', lb_local_note: 'Таблица основана на вашем прогрессе на этом устройстве.',
        notify_export_done: 'Данные экспортированы!', notify_import_done: 'Данные импортированы!', notify_import_fail: 'Неверный формат данных!', badge_locked: 'Закрыто',
        hero_kicker: 'Открытый курс по искусственному интеллекту', hero_title: 'Поймите, как учатся машины: от базовых принципов до реальных систем.',
        hero_lede: 'Семнадцать сжатых модулей: от истории ИИ и машинного обучения до робототехники, периферийного ИИ и управления. Читайте в своём темпе, проверяйте знания и ведите заметки. Всё хранится на вашем устройстве.',
        hero_cta: 'Начать чтение', hero_cta_quiz: 'Пройти тест', meta_lessons: 'модулей', meta_questions: 'вопросов', meta_languages: 'языков', meta_minutes: 'минут чтения',
        fig_caption: 'Рис. 1. Искусственный нейрон: взвешенные входы суммируются и проходят через функцию активации.', label_lesson: 'Модуль', progress_of: 'Пройдено модулей: {a} из {b}',
        notif_welcome: 'Добро пожаловать! Начните с первого модуля.', notif_lesson_done: 'Прочитано', notif_quiz_done: 'Тест пройден с результатом {n}%', notif_badge: 'Получено достижение', notif_none: 'Новых уведомлений нет.', notif_new: 'новых',
        user_default: 'Ученик', aria_profile: 'Профиль', aria_notifications: 'Уведомления', aria_theme: 'Переключить светлую/тёмную тему', aria_language: 'Выбрать язык', aria_close: 'Закрыть', skip_link: 'Перейти к содержанию'
    },
    tr: {
        app_desc: 'Yapay zekâ üzerine açık bir kurs',
        achievements_title: 'Başarılar', forum_demo_notice: 'Yerel mod: forum gönderileri yalnızca bu cihazda saklanır.', lb_demo_notice: 'Bu sıralama cihazınızdaki ilerlemeyi gösterir ve henüz bir sunucuya bağlı değildir.', footer_rights: 'Tüm hakları saklıdır.',
        btn_export: 'Verileri Dışa Aktar', btn_import: 'Verileri İçe Aktar', quiz_correct_badge: 'Doğru', quiz_wrong_badge: 'Yanlış', notify_note_updated: 'Not güncellendi!', btn_edit: 'Düzenle', notify_reply_added: 'Yanıt eklendi!',
        btn_show_replies: 'Yanıtları Göster', btn_hide_replies: 'Yanıtları Gizle', lb_you: 'Siz', lb_empty: 'Henüz yerel veri yok. Puan kazanmak için dersleri ve sınavları tamamlayın!', lb_local_note: 'Bu sıralama, bu cihazdaki kendi ilerlemenize dayanır.',
        notify_export_done: 'Veriler dışa aktarıldı!', notify_import_done: 'Veriler içe aktarıldı!', notify_import_fail: 'Geçersiz veri biçimi!', badge_locked: 'Kilitli',
        hero_kicker: 'Yapay zekâ üzerine açık bir kurs', hero_title: 'Makinelerin nasıl öğrendiğini anlayın: temel ilkelerden gerçek sistemlere.',
        hero_lede: 'Yapay zekâ ve makine öğreniminin tarihinden robotiğe, uç yapay zekâya ve yönetişime uzanan on yedi kısa modül. Kendi hızınızda okuyun, bilginizi sınayın ve not alın. Her şey cihazınızda kalır.',
        hero_cta: 'Okumaya başla', hero_cta_quiz: 'Sınava gir', meta_lessons: 'modül', meta_questions: 'sınav sorusu', meta_languages: 'dil', meta_minutes: 'dakika okuma',
        fig_caption: 'Şekil 1. Tek bir yapay nöron: ağırlıklı girdiler toplanır, ardından bir aktivasyon fonksiyonundan geçirilir.', label_lesson: 'Modül', progress_of: '{b} modülden {a} tanesi tamamlandı',
        notif_welcome: 'Hoş geldiniz! İlk modülle başlayın.', notif_lesson_done: 'Okuma tamamlandı', notif_quiz_done: 'Sınav %{n} puanla tamamlandı', notif_badge: 'Başarı kazanıldı', notif_none: 'Yeni bildirim yok.', notif_new: 'yeni',
        user_default: 'Öğrenen', aria_profile: 'Kullanıcı profili', aria_notifications: 'Bildirimler', aria_theme: 'Açık/koyu tema değiştir', aria_language: 'Dil seçin', aria_close: 'Kapat', skip_link: 'İçeriğe geç'
    },
    it: {
        app_desc: "Un corso aperto di intelligenza artificiale",
        achievements_title: 'Traguardi', forum_demo_notice: 'Modalità locale: i post del forum sono salvati solo su questo dispositivo.', lb_demo_notice: 'Questa classifica riflette i progressi sul tuo dispositivo e non è ancora collegata a un server.', footer_rights: 'Tutti i diritti riservati.',
        btn_export: 'Esporta dati', btn_import: 'Importa dati', quiz_correct_badge: 'Corretto', quiz_wrong_badge: 'Errato', notify_note_updated: 'Nota aggiornata!', btn_edit: 'Modifica', notify_reply_added: 'Risposta aggiunta!',
        btn_show_replies: 'Mostra risposte', btn_hide_replies: 'Nascondi risposte', lb_you: 'Tu', lb_empty: 'Nessun dato locale per ora. Completa lezioni e quiz per guadagnare punti!', lb_local_note: 'Questa classifica si basa sui tuoi progressi su questo dispositivo.',
        notify_export_done: 'Dati esportati!', notify_import_done: 'Dati importati!', notify_import_fail: 'Formato dati non valido!', badge_locked: 'Bloccato',
        hero_kicker: 'Un corso aperto di intelligenza artificiale', hero_title: 'Capire come imparano le macchine, dai principi primi ai sistemi reali.',
        hero_lede: "Diciassette moduli concisi, dalla storia dell'IA e del machine learning alla robotica, all'edge AI e alla governance. Leggi con i tuoi tempi, verifica ciò che sai e prendi appunti. Tutto resta sul tuo dispositivo.",
        hero_cta: 'Inizia a leggere', hero_cta_quiz: 'Fai il quiz', meta_lessons: 'moduli', meta_questions: 'domande', meta_languages: 'lingue', meta_minutes: 'minuti di lettura',
        fig_caption: 'Fig. 1. Un neurone artificiale: gli input pesati vengono sommati e passano per una funzione di attivazione.', label_lesson: 'Modulo', progress_of: '{a} di {b} moduli completati',
        notif_welcome: 'Benvenuto! Inizia dal primo modulo.', notif_lesson_done: 'Lettura completata', notif_quiz_done: 'Quiz completato con il {n}%', notif_badge: 'Traguardo sbloccato', notif_none: 'Nessuna nuova notifica.', notif_new: 'nuove',
        user_default: 'Studente', aria_profile: 'Profilo utente', aria_notifications: 'Notifiche', aria_theme: 'Cambia tema chiaro/scuro', aria_language: 'Seleziona lingua', aria_close: 'Chiudi', skip_link: 'Vai al contenuto'
    },
    vi: {
        app_desc: 'Khóa học mở về trí tuệ nhân tạo',
        achievements_title: 'Thành tích', forum_demo_notice: 'Chế độ cục bộ: bài viết diễn đàn chỉ được lưu trên thiết bị này.', lb_demo_notice: 'Bảng xếp hạng phản ánh tiến độ trên thiết bị của bạn và chưa kết nối với máy chủ.', footer_rights: 'Bảo lưu mọi quyền.',
        btn_export: 'Xuất dữ liệu', btn_import: 'Nhập dữ liệu', quiz_correct_badge: 'Đúng', quiz_wrong_badge: 'Sai', notify_note_updated: 'Đã cập nhật ghi chú!', btn_edit: 'Sửa', notify_reply_added: 'Đã thêm phản hồi!',
        btn_show_replies: 'Xem phản hồi', btn_hide_replies: 'Ẩn phản hồi', lb_you: 'Bạn', lb_empty: 'Chưa có dữ liệu cục bộ. Hoàn thành bài học và bài kiểm tra để tích điểm!', lb_local_note: 'Bảng xếp hạng này dựa trên tiến độ tự học của bạn trên thiết bị này.',
        notify_export_done: 'Đã xuất dữ liệu!', notify_import_done: 'Đã nhập dữ liệu!', notify_import_fail: 'Định dạng dữ liệu không hợp lệ!', badge_locked: 'Đã khóa',
        hero_kicker: 'Khóa học mở về trí tuệ nhân tạo', hero_title: 'Hiểu cách máy móc học, từ nguyên lý cơ bản đến hệ thống thực tế.',
        hero_lede: 'Mười bảy học phần ngắn gọn, từ lịch sử AI và học máy đến robot, AI biên và quản trị. Đọc theo nhịp của bạn, kiểm tra hiểu biết và ghi chú. Mọi dữ liệu đều nằm trên thiết bị của bạn.',
        hero_cta: 'Bắt đầu đọc', hero_cta_quiz: 'Làm bài kiểm tra', meta_lessons: 'học phần', meta_questions: 'câu hỏi', meta_languages: 'ngôn ngữ', meta_minutes: 'phút đọc',
        fig_caption: 'Hình 1. Một nơ-ron nhân tạo: các đầu vào có trọng số được cộng lại, rồi đi qua hàm kích hoạt.', label_lesson: 'Học phần', progress_of: 'Đã hoàn thành {a}/{b} học phần',
        notif_welcome: 'Chào mừng bạn! Hãy bắt đầu với học phần đầu tiên.', notif_lesson_done: 'Đã đọc xong', notif_quiz_done: 'Hoàn thành bài kiểm tra với {n}%', notif_badge: 'Mở khóa thành tích', notif_none: 'Không có thông báo mới.', notif_new: 'mới',
        user_default: 'Người học', aria_profile: 'Hồ sơ người dùng', aria_notifications: 'Thông báo', aria_theme: 'Chuyển giao diện sáng/tối', aria_language: 'Chọn ngôn ngữ', aria_close: 'Đóng', skip_link: 'Chuyển đến nội dung'
    }
};

// Achievement names and descriptions, in BADGE_DEFS order
const badgeKeyOrder = ['badge_first_lesson', 'badge_first_lesson_desc', 'badge_all_lessons', 'badge_all_lessons_desc', 'badge_perfect_quiz', 'badge_perfect_quiz_desc', 'badge_note_taker', 'badge_note_taker_desc', 'badge_social', 'badge_social_desc', 'badge_streak', 'badge_streak_desc'];
const badgeStrings = {
    zh: ['初学者', '完成第一个模块', 'AI 大师', '完成全部模块', '测验天才', '在测验中获得满分', '笔记达人', '写下 5 条笔记', '交流者', '发布 3 个论坛帖子', '坚持不懈', '连续学习 5 天'],
    es: ['Primer paso', 'Completa tu primer módulo', 'Maestría en IA', 'Completa todos los módulos', 'Genio del cuestionario', 'Obtén una puntuación perfecta', 'Tomador de notas', 'Escribe 5 notas', 'Conversador', 'Publica 3 temas en el foro', 'Constancia', 'Mantén una racha de 5 días'],
    ar: ['الخطوة الأولى', 'أكمل وحدتك الأولى', 'خبير الذكاء الاصطناعي', 'أكمل جميع الوحدات', 'عبقري الاختبار', 'احصل على درجة كاملة في الاختبار', 'مدوِّن الملاحظات', 'اكتب 5 ملاحظات', 'محاور', 'انشر 3 مواضيع في المنتدى', 'المثابرة', 'حافظ على سلسلة 5 أيام'],
    hi: ['पहला कदम', 'अपना पहला मॉड्यूल पूरा करें', 'AI विशेषज्ञ', 'सभी मॉड्यूल पूरे करें', 'क्विज़ जीनियस', 'क्विज़ में पूरे अंक पाएँ', 'नोट लेखक', '5 नोट्स लिखें', 'संवादी', 'फ़ोरम में 3 पोस्ट करें', 'निरंतरता', 'लगातार 5 दिन सीखें'],
    pt: ['Primeiro passo', 'Conclua seu primeiro módulo', 'Mestre em IA', 'Conclua todos os módulos', 'Gênio do quiz', 'Tire nota máxima no quiz', 'Anotador', 'Escreva 5 notas', 'Participativo', 'Publique 3 tópicos no fórum', 'Constância', 'Mantenha uma sequência de 5 dias'],
    fr: ['Premier pas', 'Terminez votre premier module', "Maître de l'IA", 'Terminez tous les modules', 'Génie du quiz', 'Obtenez un score parfait au quiz', 'Preneur de notes', 'Rédigez 5 notes', 'Contributeur', 'Publiez 3 messages sur le forum', 'Régularité', 'Tenez une série de 5 jours'],
    de: ['Erster Schritt', 'Schließen Sie Ihr erstes Modul ab', 'KI-Meister', 'Schließen Sie alle Module ab', 'Quiz-Genie', 'Erreichen Sie die volle Punktzahl im Quiz', 'Notizenschreiber', 'Schreiben Sie 5 Notizen', 'Gesprächig', 'Verfassen Sie 3 Forenbeiträge', 'Beständigkeit', 'Halten Sie eine 5-Tage-Serie'],
    ja: ['最初の一歩', '最初のモジュールを完了する', 'AIマスター', 'すべてのモジュールを完了する', 'クイズの天才', 'クイズで満点を取る', 'ノート職人', 'ノートを5件書く', '対話者', 'フォーラムに3件投稿する', '継続は力', '5日連続で学習する'],
    ko: ['첫걸음', '첫 번째 모듈 완료', 'AI 마스터', '모든 모듈 완료', '퀴즈 천재', '퀴즈 만점 달성', '기록가', '노트 5개 작성', '소통가', '포럼 글 3개 작성', '꾸준함', '5일 연속 학습'],
    ru: ['Первый шаг', 'Пройдите первый модуль', 'Мастер ИИ', 'Пройдите все модули', 'Гений тестов', 'Наберите максимум в тесте', 'Конспектист', 'Напишите 5 заметок', 'Собеседник', 'Опубликуйте 3 темы на форуме', 'Постоянство', 'Учитесь 5 дней подряд'],
    tr: ['İlk adım', 'İlk modülünüzü tamamlayın', 'Yapay Zekâ Ustası', 'Tüm modülleri tamamlayın', 'Sınav Dâhisi', 'Sınavda tam puan alın', 'Not Tutucu', '5 not yazın', 'Sohbetçi', 'Forumda 3 gönderi paylaşın', 'İstikrar', '5 günlük seri yapın'],
    it: ['Primo passo', 'Completa il tuo primo modulo', "Maestro dell'IA", 'Completa tutti i moduli', 'Genio del quiz', 'Ottieni il punteggio pieno nel quiz', 'Prendiappunti', 'Scrivi 5 note', 'Partecipativo', 'Pubblica 3 post nel forum', 'Costanza', 'Mantieni una serie di 5 giorni'],
    vi: ['Bước đầu tiên', 'Hoàn thành học phần đầu tiên', 'Bậc thầy AI', 'Hoàn thành tất cả học phần', 'Thiên tài trắc nghiệm', 'Đạt điểm tuyệt đối bài kiểm tra', 'Người ghi chép', 'Viết 5 ghi chú', 'Người kết nối', 'Đăng 3 bài trên diễn đàn', 'Bền bỉ', 'Học liên tục 5 ngày']
};
Object.entries(badgeStrings).forEach(([lang, list]) => {
    badgeKeyOrder.forEach((key, i) => { uiKeys[lang][key] = list[i]; });
});

const lessonDescFix = {
    zh: { 2: '理解机器学习的概念，以及监督学习与无监督学习。', 3: '深度学习入门，以及神经网络的工作原理。', 4: 'AI 如何理解和处理人类语言。', 5: '用于识别和处理图像与视频的 AI 技术。', 6: '与 ChatGPT 等生成式 AI 交互、获得最佳结果的技巧。', 7: '探讨在使用 AI 时安全、隐私与公平的重要性。', 8: '就业机会、未来趋势，以及如何开启 AI 行业的职业生涯。' },
    es: { 2: 'Comprende los conceptos de Machine Learning y el aprendizaje supervisado y no supervisado.', 3: 'Introducción al aprendizaje profundo y al funcionamiento de las redes neuronales.', 4: 'Cómo la IA comprende y procesa el lenguaje humano.', 5: 'Tecnología de IA para reconocer y procesar imágenes y vídeos.', 6: 'El arte de interactuar con IA generativa como ChatGPT para obtener los mejores resultados.', 7: 'La importancia de la seguridad, la privacidad y la equidad al usar la IA.', 8: 'Oportunidades laborales, tendencias futuras y cómo iniciar una carrera en la industria de la IA.' },
    ar: { 2: 'فهم مفاهيم التعلم الآلي، والتعلم الموجَّه وغير الموجَّه.', 3: 'مدخل إلى التعلم العميق وكيفية عمل الشبكات العصبية.', 4: 'كيف يفهم الذكاء الاصطناعي اللغة البشرية ويعالجها.', 5: 'تقنيات الذكاء الاصطناعي للتعرف على الصور ومقاطع الفيديو ومعالجتها.', 6: 'فن التفاعل مع الذكاء الاصطناعي التوليدي مثل ChatGPT للحصول على أفضل النتائج.', 7: 'أهمية الأمان والخصوصية والعدالة عند استخدام الذكاء الاصطناعي.', 8: 'فرص العمل، واتجاهات المستقبل، وكيف تبدأ مسيرتك في صناعة الذكاء الاصطناعي.' },
    hi: { 2: 'मशीन लर्निंग की अवधारणाएँ, तथा सुपरवाइज़्ड और अनसुपरवाइज़्ड लर्निंग को समझें।', 3: 'डीप लर्निंग का परिचय और न्यूरल नेटवर्क कैसे काम करते हैं।', 4: 'AI मानव भाषा को कैसे समझता और संसाधित करता है।', 5: 'छवियों और वीडियो को पहचानने और संसाधित करने की AI तकनीक।', 6: 'ChatGPT जैसे जनरेटिव AI से बेहतर परिणाम पाने के लिए संवाद की कला।', 7: 'AI के उपयोग में सुरक्षा, गोपनीयता और निष्पक्षता का महत्व।', 8: 'नौकरी के अवसर, भविष्य के रुझान और AI उद्योग में करियर कैसे शुरू करें।' },
    pt: { 2: 'Entenda os conceitos de Machine Learning e o aprendizado supervisionado e não supervisionado.', 3: 'Introdução ao aprendizado profundo e ao funcionamento das redes neurais.', 4: 'Como a IA compreende e processa a linguagem humana.', 5: 'Tecnologia de IA para reconhecer e processar imagens e vídeos.', 6: 'A arte de interagir com IA generativa como o ChatGPT para obter os melhores resultados.', 7: 'A importância da segurança, da privacidade e da equidade no uso da IA.', 8: 'Oportunidades de trabalho, tendências futuras e como começar uma carreira na indústria de IA.' },
    fr: { 2: "Comprendre les concepts du Machine Learning, l'apprentissage supervisé et non supervisé.", 3: "Introduction à l'apprentissage profond et au fonctionnement des réseaux de neurones.", 4: "Comment l'IA comprend et traite le langage humain.", 5: "Les technologies d'IA pour reconnaître et traiter images et vidéos.", 6: "L'art d'interagir avec une IA générative comme ChatGPT pour obtenir les meilleurs résultats.", 7: "L'importance de la sécurité, de la confidentialité et de l'équité dans l'usage de l'IA.", 8: "Débouchés, tendances à venir et comment démarrer une carrière dans l'industrie de l'IA." },
    de: { 2: 'Konzepte des Machine Learning sowie überwachtes und unüberwachtes Lernen verstehen.', 3: 'Einführung in Deep Learning und die Funktionsweise neuronaler Netze.', 4: 'Wie KI menschliche Sprache versteht und verarbeitet.', 5: 'KI-Technologie zum Erkennen und Verarbeiten von Bildern und Videos.', 6: 'Die Kunst, mit generativer KI wie ChatGPT zu arbeiten und bestmögliche Ergebnisse zu erzielen.', 7: 'Warum Sicherheit, Datenschutz und Fairness beim Einsatz von KI wichtig sind.', 8: 'Berufschancen, künftige Trends und der Einstieg in eine Karriere in der KI-Branche.' },
    ja: { 2: '機械学習の概念と、教師あり学習・教師なし学習を理解します。', 3: 'ディープラーニングの入門と、ニューラルネットワークの仕組み。', 4: 'AIが人間の言語をどのように理解し処理するか。', 5: '画像や動画を認識・処理するためのAI技術。', 6: 'ChatGPTなどの生成AIから最良の結果を引き出す対話の技術。', 7: 'AIを使ううえでの安全性、プライバシー、公平性の重要性。', 8: '求人の機会、今後の動向、そしてAI業界でキャリアを始める方法。' },
    ko: { 2: '머신러닝의 개념과 지도 학습, 비지도 학습을 이해합니다.', 3: '딥러닝 입문과 신경망의 작동 원리.', 4: 'AI가 인간의 언어를 이해하고 처리하는 방법.', 5: '이미지와 영상을 인식하고 처리하는 AI 기술.', 6: 'ChatGPT 같은 생성형 AI에서 최상의 결과를 얻기 위한 상호작용 기술.', 7: 'AI를 사용할 때 보안, 개인정보, 공정성이 중요한 이유.', 8: '취업 기회, 미래 동향, 그리고 AI 업계에서 커리어를 시작하는 방법.' },
    ru: { 2: 'Основные понятия машинного обучения: обучение с учителем и без учителя.', 3: 'Введение в глубокое обучение и принципы работы нейронных сетей.', 4: 'Как ИИ понимает и обрабатывает человеческий язык.', 5: 'Технологии ИИ для распознавания и обработки изображений и видео.', 6: 'Искусство взаимодействия с генеративным ИИ, таким как ChatGPT, для наилучших результатов.', 7: 'Почему безопасность, конфиденциальность и справедливость важны при использовании ИИ.', 8: 'Карьерные возможности, тенденции и как начать карьеру в индустрии ИИ.' },
    tr: { 2: 'Makine öğrenimi kavramlarını, denetimli ve denetimsiz öğrenmeyi anlayın.', 3: 'Derin öğrenmeye giriş ve sinir ağlarının nasıl çalıştığı.', 4: 'Yapay zekânın insan dilini nasıl anladığı ve işlediği.', 5: 'Görüntü ve videoları tanımak ve işlemek için yapay zekâ teknolojisi.', 6: 'ChatGPT gibi üretken yapay zekâdan en iyi sonucu almak için etkileşim sanatı.', 7: 'Yapay zekâ kullanırken güvenlik, gizlilik ve adaletin önemi.', 8: 'İş fırsatları, gelecek eğilimleri ve yapay zekâ sektöründe kariyere nasıl başlanır.' },
    it: { 2: "Comprendi i concetti del Machine Learning e l'apprendimento supervisionato e non supervisionato.", 3: "Introduzione al deep learning e al funzionamento delle reti neurali.", 4: "Come l'IA comprende ed elabora il linguaggio umano.", 5: "Tecnologie di IA per riconoscere ed elaborare immagini e video.", 6: "L'arte di interagire con l'IA generativa come ChatGPT per ottenere i migliori risultati.", 7: "L'importanza di sicurezza, privacy ed equità nell'uso dell'IA.", 8: "Opportunità di lavoro, tendenze future e come iniziare una carriera nel settore dell'IA." },
    vi: { 2: 'Hiểu các khái niệm Machine Learning, học có giám sát và không giám sát.', 3: 'Giới thiệu về học sâu và cách mạng nơ-ron hoạt động.', 4: 'Cách AI hiểu và xử lý ngôn ngữ con người.', 5: 'Công nghệ AI để nhận dạng và xử lý hình ảnh, video.', 6: 'Nghệ thuật tương tác với AI tạo sinh như ChatGPT để có kết quả tốt nhất.', 7: 'Tầm quan trọng của an ninh, quyền riêng tư và công bằng khi sử dụng AI.', 8: 'Cơ hội việc làm, xu hướng tương lai và cách bắt đầu sự nghiệp trong ngành AI.' }
};

const sectionTitleFix = {
    en: { 6: ['What is Prompt Engineering?', 'Core Prompting Principles', 'Advanced Prompting Techniques'], 7: ['Why Does AI Ethics Matter?', 'Bias in AI', 'Privacy and Security'], 8: ['Career Paths in AI', 'Essential Skills', 'How to Get Started'] },
    zh: { 6: ['什么是提示工程？', '提示的基本原则', '进阶提示技巧'], 7: ['为什么 AI 伦理很重要？', 'AI 中的偏见', '隐私与安全'], 8: ['AI 职业机会', '核心技能', '如何起步'] },
    es: { 6: ['¿Qué es la ingeniería de prompts?', 'Principios básicos', 'Técnicas avanzadas'], 7: ['¿Por qué importa la ética en IA?', 'Sesgo en la IA', 'Privacidad y seguridad'], 8: ['Oportunidades profesionales', 'Habilidades clave', 'Cómo empezar'] },
    ar: { 6: ['ما هي هندسة الأوامر؟', 'المبادئ الأساسية', 'تقنيات متقدمة'], 7: ['لماذا تهم أخلاقيات الذكاء الاصطناعي؟', 'التحيز في الذكاء الاصطناعي', 'الخصوصية والأمان'], 8: ['الفرص المهنية', 'المهارات الأساسية', 'كيف تبدأ'] },
    hi: { 6: ['प्रॉम्प्ट इंजीनियरिंग क्या है?', 'प्रॉम्प्टिंग के मूल सिद्धांत', 'उन्नत तकनीकें'], 7: ['AI नैतिकता क्यों ज़रूरी है?', 'AI में पूर्वाग्रह', 'गोपनीयता और सुरक्षा'], 8: ['AI में करियर के अवसर', 'मुख्य कौशल', 'शुरुआत कैसे करें'] },
    pt: { 6: ['O que é engenharia de prompts?', 'Princípios básicos', 'Técnicas avançadas'], 7: ['Por que a ética em IA importa?', 'Viés na IA', 'Privacidade e segurança'], 8: ['Oportunidades de carreira', 'Habilidades essenciais', 'Como começar'] },
    fr: { 6: ["Qu'est-ce que l'ingénierie de prompts ?", 'Principes de base', 'Techniques avancées'], 7: ["Pourquoi l'éthique de l'IA compte", "Les biais dans l'IA", 'Vie privée et sécurité'], 8: ['Débouchés en IA', 'Compétences clés', 'Par où commencer'] },
    de: { 6: ['Was ist Prompt Engineering?', 'Grundprinzipien', 'Fortgeschrittene Techniken'], 7: ['Warum KI-Ethik wichtig ist', 'Verzerrung in der KI', 'Datenschutz und Sicherheit'], 8: ['Karrierechancen in der KI', 'Wichtige Fähigkeiten', 'Der Einstieg'] },
    ja: { 6: ['プロンプトエンジニアリングとは？', 'プロンプトの基本原則', '応用テクニック'], 7: ['なぜAI倫理が重要なのか', 'AIにおけるバイアス', 'プライバシーとセキュリティ'], 8: ['AI分野のキャリア', '必要なスキル', '始め方'] },
    ko: { 6: ['프롬프트 엔지니어링이란?', '프롬프트 기본 원칙', '고급 기법'], 7: ['AI 윤리가 중요한 이유', 'AI의 편향', '개인정보와 보안'], 8: ['AI 커리어 기회', '핵심 역량', '시작하는 방법'] },
    ru: { 6: ['Что такое промпт-инжиниринг?', 'Базовые принципы', 'Продвинутые техники'], 7: ['Почему важна этика ИИ', 'Предвзятость в ИИ', 'Конфиденциальность и безопасность'], 8: ['Карьера в ИИ', 'Ключевые навыки', 'С чего начать'] },
    tr: { 6: ['Prompt Mühendisliği Nedir?', 'Temel İlkeler', 'İleri Teknikler'], 7: ['Yapay Zekâ Etiği Neden Önemli?', 'Yapay Zekâda Önyargı', 'Gizlilik ve Güvenlik'], 8: ['Yapay Zekâda Kariyer', 'Temel Beceriler', 'Nasıl Başlanır'] },
    it: { 6: ["Cos'è il prompt engineering?", 'Principi di base', 'Tecniche avanzate'], 7: ["Perché l'etica dell'IA è importante", "Bias nell'IA", 'Privacy e sicurezza'], 8: ["Carriere nell'IA", 'Competenze chiave', 'Come iniziare'] },
    vi: { 6: ['Prompt Engineering là gì?', 'Nguyên tắc cơ bản', 'Kỹ thuật nâng cao'], 7: ['Vì sao đạo đức AI quan trọng?', 'Thiên kiến trong AI', 'Quyền riêng tư và bảo mật'], 8: ['Cơ hội nghề nghiệp AI', 'Kỹ năng thiết yếu', 'Bắt đầu từ đâu'] }
};

Object.entries(uiKeys).forEach(([lang, keys]) => { if (translations[lang]) Object.assign(translations[lang], keys); });
Object.entries(lessonDescFix).forEach(([lang, descs]) => {
    Object.entries(descs).forEach(([id, desc]) => {
        if (lessonTranslations[lang] && lessonTranslations[lang][id]) lessonTranslations[lang][id].desc = desc;
    });
});
Object.entries(sectionTitleFix).forEach(([lang, sections]) => { if (sectionTranslations[lang]) Object.assign(sectionTranslations[lang], sections); });

// Translated string with {placeholder} substitution
function tf(key, vars) {
    return Object.entries(vars || {}).reduce((s, [k, v]) => s.split('{' + k + '}').join(v), t(key));
}
