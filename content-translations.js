// Content translations for lesson section paragraphs
// Structure: { lang: { lessonId: [ content1, content2, ... ] } }
const sectionContentTranslations = {
    en: {
        1: [
            'Artificial Intelligence (AI) is a field of computer science focused on creating systems that can perform tasks that typically require human intelligence. This includes the ability to learn, reason, solve problems, understand language, and recognize patterns.',
            'AI was first introduced in 1956 at the Dartmouth Conference by John McCarthy. Since then, AI has gone through several phases: the optimism period (1956-1974), the first AI Winter (1974-1980), the rise of Expert Systems (1980-1987), the second AI Winter (1987-1993), and the modern era with Machine Learning and Deep Learning (1993-present).',
            '1. Narrow AI (Weak AI): AI designed for specific tasks like Siri, Alexa, or Netflix recommendation systems.\n\n2. General AI (Strong AI): AI with human-level cognitive abilities (still theoretical).\n\n3. Super AI: AI that surpasses human intelligence in all areas (still hypothetical).',
            '- Virtual Assistants: Siri, Google Assistant, Alexa\n- Recommendations: Netflix, Spotify, YouTube\n- Navigation: Google Maps, Waze\n- E-commerce: Amazon, Tokopedia\n- Healthcare: Disease diagnosis, medical analysis\n- Automotive: Tesla self-driving cars\n- Security: Facial recognition, fraud detection\n- Education: Adaptive learning platforms',
            '1. Machine Learning: The ability of systems to learn from data\n2. Natural Language Processing: Processing human language\n3. Computer Vision: Recognition and processing of images\n4. Robotics: Integration of AI with mechanical systems\n5. Expert Systems: Rule-based systems for decision making',
            'AI has become an integral part of modern life. A basic understanding of AI is crucial as this technology will continue to evolve and influence various aspects of our lives. By understanding AI, we can utilize it optimally and also understand its ethical and social implications.'
        ],
        2: [
            'Machine Learning (ML) is a branch of AI that enables computers to learn and make decisions without being explicitly programmed for each task. ML systems use algorithms to identify patterns in data and make predictions or decisions based on those patterns.',
            'Supervised Learning is a method where the model is trained using labeled data. The model learns from input-output pairs to make predictions on new data.\n\nExample Algorithms:\n- Linear Regression: Predicting continuous values (house prices)\n- Logistic Regression: Binary classification (spam/not spam)\n- Decision Trees: Rule-based decisions\n- Random Forest: Ensemble of decision trees\n- Support Vector Machines (SVM): Classification with optimal margin\n- Neural Networks: Brain-inspired models',
            'Unsupervised Learning is a method where the model finds patterns in unlabeled data.\n\nExample Algorithms:\n- K-Means Clustering: Grouping data by similarity\n- Hierarchical Clustering: Multi-level grouping\n- Principal Component Analysis (PCA): Dimensionality reduction\n- Association Rules: Finding relationships between items (market basket analysis)\n- Anomaly Detection: Detecting outliers or abnormal data',
            'Reinforcement Learning is a method where an agent learns through interaction with an environment. The agent receives rewards or punishments based on its actions and learns to maximize rewards.\n\nApplications:\n- Game AI (AlphaGo, OpenAI Five)\n- Robot navigation\n- Recommendation systems\n- Automated trading\n- Autonomous vehicle control',
            '1. Data Collection: Gathering relevant data\n2. Preprocessing: Cleaning and preparing data\n3. Feature Engineering: Selecting and creating important features\n4. Model Selection: Choosing the appropriate algorithm\n5. Training: Training the model with data\n6. Evaluation: Testing model performance\n7. Tuning: Optimizing hyperparameters\n8. Deployment: Deploying the model to production',
            'Classification:\n- Accuracy: Percentage of correct predictions\n- Precision: Correctness of positive predictions\n- Recall: Ability to find all positives\n- F1-Score: Harmonic mean of precision and recall\n\nRegression:\n- Mean Absolute Error (MAE)\n- Mean Squared Error (MSE)\n- R-squared (R²)'
        ],
        3: [
            'Deep Learning is a subset of Machine Learning that uses neural networks with many layers (deep neural networks) to learn hierarchical representations of data. Deep Learning is very effective for complex tasks such as image recognition, language processing, and speech synthesis.',
            'A Neural Network consists of three main components:\n\n1. Input Layer: Receives input data\n2. Hidden Layers: Processes data through nonlinear transformations\n3. Output Layer: Produces final predictions\n\nEach neuron in a layer is connected to neurons in the next layer through weights. Each connection has a weight that determines the strength of the relationship.',
            'Forward Propagation:\n1. Input is received at the input layer\n2. Data is multiplied by weights and bias is added\n3. Result passes through activation function (ReLU, Sigmoid, Tanh)\n4. Process continues to the next layer until output\n\nBackpropagation:\n1. Calculate error (loss) at output\n2. Propagate error to previous layers\n3. Update weights using gradient descent\n4. Process repeats until convergence',
            'CNN (Convolutional Neural Network):\n- For grid-shaped data (images)\n- Uses convolutional layers for feature extraction\n- Applications: Image classification, object detection, segmentation\n\nRNN (Recurrent Neural Network):\n- For sequential data (text, time series)\n- Has memory for previous information\n- Variants: LSTM, GRU\n\nTransformer:\n- Modern architecture for NLP\n- Uses attention mechanism\n- Examples: BERT, GPT, ChatGPT',
            '1. TensorFlow (Google):\n   - Complete ecosystem\n   - TensorFlow Lite for mobile\n   - TensorFlow.js for browser\n\n2. PyTorch (Meta/Facebook):\n   - Dynamic computation graph\n   - Popular in research\n   - Easy to debug\n\n3. Keras:\n   - High-level API\n   - Runs on top of TensorFlow\n   - Suitable for beginners\n\n4. JAX (Google):\n   - Automatic differentiation\n   - High performance with XLA',
            '- Requires large amounts of data\n- Computationally intensive (GPU/TPU required)\n- Overfitting on small datasets\n- Low interpretability (black box)\n- Complex hyperparameter tuning\n\nSolutions:\n- Transfer Learning: Using pre-trained models\n- Data Augmentation: Artificially expanding data\n- Regularization: Dropout, L1/L2 regularization\n- Early Stopping: Stopping training before overfitting'
        ],
        4: [
            'Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language. NLP combines computational linguistics with machine learning and deep learning to process text and speech.',
            '1. Tokenization: Breaking text into words/sentences\n2. Lowercasing: Converting to lowercase\n3. Stopword Removal: Removing common words (and, or, the)\n4. Stemming: Reducing words to root form (running → run)\n5. Lemmatization: Like stemming but more accurate\n6. Part-of-Speech Tagging: Labeling word types\n7. Named Entity Recognition: Identifying entities (names, locations)',
            'Bag of Words (BoW):\n- Simple representation based on word frequency\n- Ignores word order\n\nTF-IDF:\n- Term Frequency-Inverse Document Frequency\n- Weights based on word importance\n\nWord Embeddings:\n- Word2Vec: Skip-gram or CBOW\n- GloVe: Global Vectors\n- FastText: Subword embeddings\n\nContextual Embeddings:\n- ELMo: Embeddings from Language Models\n- BERT: Bidirectional representations\n- GPT: Generative Pre-trained Transformer',
            '1. Sentiment Analysis: Determining positive/negative sentiment\n2. Machine Translation: Google Translate, DeepL\n3. Text Summarization: Summarizing documents\n4. Question Answering: Answering questions\n5. Chatbots: Automated customer service\n6. Speech Recognition: Siri, Google Speech\n7. Text Generation: ChatGPT, Claude\n8. Named Entity Recognition: Information extraction\n9. Text Classification: Document categorization\n10. Information Extraction: Extracting structured data',
            'LLMs are large-scale language models trained on very large text datasets.\n\nExamples:\n- GPT-4 (OpenAI): Text generation, coding, analysis\n- Claude (Anthropic): Safe AI assistant\n- Gemini (Google): Multimodal AI\n- LLaMA (Meta): Open-source LLM\n- Mistral: Efficient open-source model\n\nCapabilities:\n- Few-shot learning\n- Chain-of-thought reasoning\n- Code generation\n- Multilingual understanding',
            '- Ambiguity: One word has many meanings\n- Context: Meaning depends on context\n- Sarcasm and Irony: Difficult to detect\n- Informal Language: Slang, typos, abbreviations\n- Low-Resource Languages: Not all languages have enough data\n- Bias: Models can inherit bias from training data\n- Hallucination: LLMs can generate false information'
        ],
        5: [
            'Computer Vision is a field of AI that enables computers to interpret and understand visual information from the real world, such as images and videos. This technology mimics how humans see and process visual information.',
            '1. Image Acquisition: Capturing images from cameras/sensors\n2. Preprocessing: Resize, normalization, augmentation\n3. Feature Extraction: Extracting important features\n4. Model Inference: Running model for prediction\n5. Post-processing: Processing results (NMS for detection)\n\nPreprocessing Techniques:\n- Grayscale conversion\n- Histogram equalization\n- Noise reduction\n- Edge detection (Sobel, Canny)\n- Image augmentation (flip, rotate, crop)',
            'Image Classification:\n- Categorizing images into classes\n- Example: Cat vs Dog, plant types\n\nObject Detection:\n- Detecting and localizing objects in images\n- Algorithms: YOLO, SSD, Faster R-CNN\n\nSemantic Segmentation:\n- Classifying each pixel\n- Example: Road segmentation for self-driving cars\n\nInstance Segmentation:\n- Segmentation + distinguishing object instances\n- Algorithm: Mask R-CNN\n\nPose Estimation:\n- Detecting human body positions\n- Example: OpenPose, MediaPipe',
            'LeNet (1998): Pioneer CNN for digit recognition\n\nAlexNet (2012): Breakthrough on ImageNet, ReLU activation\n\nVGGNet (2014): Deeper network with 3x3 convolutions\n\nGoogLeNet/Inception (2014): Inception modules for efficiency\n\nResNet (2015): Skip connections for very deep networks\n\nEfficientNet (2019): Balanced scaling for accuracy and efficiency\n\nVision Transformer (2020): Transformer for images',
            '1. Self-Driving Cars: Tesla, Waymo\n2. Facial Recognition: Face ID, security\n3. Medical Imaging: Cancer detection, X-ray analysis\n4. Augmented Reality: AR filters, Pokemon Go\n5. Quality Control: Product inspection in factories\n6. Agriculture: Plant disease detection, drone monitoring\n7. Retail: Amazon Go (cashier-less stores)\n8. Sports Analytics: Player tracking, performance analysis\n9. Document Processing: OCR, digitization\n10. Security: Surveillance, anomaly detection',
            'OpenCV:\n- Open-source library for computer vision\n- Supports C++, Python, Java\n- Features: Image processing, video capture, object detection\n\nMediaPipe (Google):\n- Face detection, hand tracking, pose estimation\n- Optimized for real-time on device\n\nTorchvision (PyTorch):\n- Datasets, transforms, pre-trained models\n\nTensorFlow Hub:\n- Pre-trained model repository\n\nHugging Face:\n- Vision Transformers and multimodal models'
        ],
        6: [
            'Prompt Engineering is the skill of designing, optimizing, and structuring instructions (prompts) given to Generative AI models (such as LLMs) to produce relevant, accurate, and user-desired outputs.',
            '1. Be Clear and Specific: Avoid ambiguity.\n2. Provide Context: Tell the AI what role to play (e.g., "Act as a marketing expert").\n3. Specify Output Format: Ask the AI to respond in a specific format (table, list, bullet points).\n4. Limit Scope: Explain what the AI should NOT do.',
            'Zero-shot Prompting: Asking AI to perform a task without giving any examples.\n\nFew-shot Prompting: Providing one or more output examples so the model understands the desired pattern.\n\nChain of Thought (CoT): Asking the model to explain its thinking step by step ("Let\'s think step by step") before giving the final answer.'
        ],
        7: [
            'As AI takes on larger roles in life decisions (bank credit, job recruitment, medical diagnosis), it is crucial to ensure these systems are fair, transparent, and do not harm any group.',
            'AI learns from human-created data. If historical data contains prejudice (bias), the AI model will amplify that bias. Example: An AI recruitment tool that favors male candidates because it learned from historical data dominated by men.',
            'Modern AI systems require enormous amounts of data (Big Data). This raises concerns about collecting personal data, mass surveillance, and security if the data is leaked or misused.'
        ],
        8: [
            '1. Machine Learning Engineer: Building and deploying AI models to production.\n2. Data Scientist: Analyzing complex data for business insights.\n3. Data Engineer: Building infrastructure and pipelines for data processing.\n4. AI Researcher: Conducting research to discover new algorithm breakthroughs.\n5. Prompt Engineer: Testing and maximizing Generative AI outputs.',
            '- Programming Languages: Python, R, SQL.\n- Mathematics: Linear Algebra, Calculus, Probability, and Statistics.\n- Tools/Frameworks: PyTorch, TensorFlow, Scikit-learn, Pandas.\n- Soft Skills: Problem solving, communication, and critical thinking.',
            'Start by strengthening your Python and math foundations. Take online courses on Machine Learning basics (like the modules on this platform!), try building small portfolio projects (like simple image classification or price prediction), then participate in communities like Kaggle or GitHub.'
        ]
    },
    ja: {
        1: [
            '人工知能（AI）は、通常人間の知能を必要とするタスクを実行できるシステムの作成に焦点を当てたコンピューターサイエンスの分野です。これには、学習、推論、問題解決、言語理解、パターン認識の能力が含まれます。',
            'AIは1956年にジョン・マッカーシーによってダートマス会議で初めて紹介されました。それ以来、AIはいくつかの段階を経てきました：楽観主義の時代（1956-1974）、第一次AIの冬（1974-1980）、エキスパートシステムの台頭（1980-1987）、第二次AIの冬（1987-1993）、そして機械学習とディープラーニングの現代（1993-現在）。',
            '1. 特化型AI（弱いAI）：Siri、Alexa、Netflixのレコメンドシステムのような特定のタスク向けに設計されたAI。\n\n2. 汎用AI（強いAI）：人間レベルの認知能力を持つAI（まだ理論的）。\n\n3. 超知能AI：すべての分野で人間の知能を超えるAI（まだ仮説的）。',
            '- 仮想アシスタント：Siri、Googleアシスタント、Alexa\n- レコメンド：Netflix、Spotify、YouTube\n- ナビゲーション：Googleマップ、Waze\n- Eコマース：Amazon、Tokopedia\n- 医療：病気の診断、医療分析\n- 自動車：Teslaの自動運転車\n- セキュリティ：顔認証、詐欺検出\n- 教育：適応型学習プラットフォーム',
            '1. 機械学習：データから学習するシステムの能力\n2. 自然言語処理：人間の言語の処理\n3. コンピュータビジョン：画像の認識と処理\n4. ロボティクス：AIと機械システムの統合\n5. エキスパートシステム：意思決定のためのルールベースシステム',
            'AIは現代生活の不可欠な部分となっています。この技術は進化し続け、私たちの生活のさまざまな側面に影響を与えるため、AIの基本的な理解は非常に重要です。AIを理解することで、最適に活用し、倫理的・社会的影響も理解できます。'
        ],
        2: [
            '機械学習（ML）は、各タスクに対して明示的にプログラムされることなく、コンピューターが学習し意思決定することを可能にするAIの分野です。MLシステムはアルゴリズムを使用してデータ内のパターンを識別し、それらのパターンに基づいて予測や意思決定を行います。',
            '教師あり学習は、ラベル付きデータを使用してモデルをトレーニングする方法です。モデルは入出力ペアから学習し、新しいデータに対する予測を行います。\n\nアルゴリズムの例：\n- 線形回帰：連続値の予測（住宅価格）\n- ロジスティック回帰：二値分類（スパム/非スパム）\n- 決定木：ルールベースの決定\n- ランダムフォレスト：決定木のアンサンブル\n- サポートベクターマシン（SVM）：最適マージンでの分類\n- ニューラルネットワーク：脳にインスパイアされたモデル',
            '教師なし学習は、ラベルなしデータからパターンを見つける方法です。\n\nアルゴリズムの例：\n- K-Meansクラスタリング：類似性によるデータのグループ化\n- 階層的クラスタリング：多段階グループ化\n- 主成分分析（PCA）：次元削減\n- アソシエーションルール：アイテム間の関係の発見\n- 異常検知：外れ値や異常データの検出',
            '強化学習は、エージェントが環境との相互作用を通じて学習する方法です。エージェントはアクションに基づいて報酬やペナルティを受け取り、報酬を最大化するように学習します。\n\n応用例：\n- ゲームAI（AlphaGo、OpenAI Five）\n- ロボットナビゲーション\n- レコメンドシステム\n- 自動取引\n- 自動運転車の制御',
            '1. データ収集：関連データの収集\n2. 前処理：データのクリーニングと準備\n3. 特徴エンジニアリング：重要な特徴の選択と作成\n4. モデル選択：適切なアルゴリズムの選択\n5. トレーニング：データでモデルをトレーニング\n6. 評価：モデルの性能テスト\n7. チューニング：ハイパーパラメータの最適化\n8. デプロイ：モデルを本番環境に展開',
            '分類：\n- 精度：正しい予測の割合\n- 適合率：正の予測の正確さ\n- 再現率：すべての正例を見つける能力\n- F1スコア：適合率と再現率の調和平均\n\n回帰：\n- 平均絶対誤差（MAE）\n- 平均二乗誤差（MSE）\n- 決定係数（R²）'
        ],
        3: [
            'ディープラーニングは、多くの層を持つニューラルネットワーク（ディープニューラルネットワーク）を使用してデータの階層的表現を学習する機械学習のサブセットです。画像認識、言語処理、音声合成などの複雑なタスクに非常に効果的です。',
            'ニューラルネットワークは3つの主要コンポーネントで構成されます：\n\n1. 入力層：入力データを受け取る\n2. 隠れ層：非線形変換でデータを処理\n3. 出力層：最終予測を生成\n\n各層のニューロンは重みを通じて次の層のニューロンに接続されています。',
            '順伝播：\n1. 入力層で入力を受け取る\n2. データに重みを掛けてバイアスを加える\n3. 活性化関数を通過（ReLU、Sigmoid、Tanh）\n4. 出力まで次の層へ\n\n逆伝播：\n1. 出力での誤差（損失）を計算\n2. 前の層へ誤差を伝播\n3. 勾配降下法で重みを更新\n4. 収束するまで繰り返し',
            'CNN（畳み込みニューラルネットワーク）：\n- グリッド状データ（画像）向け\n- 畳み込み層で特徴抽出\n- 応用：画像分類、物体検出、セグメンテーション\n\nRNN（回帰型ニューラルネットワーク）：\n- シーケンシャルデータ（テキスト、時系列）向け\n- 前の情報のメモリを持つ\n- 変種：LSTM、GRU\n\nTransformer：\n- NLP向け現代アーキテクチャ\n- アテンション機構を使用\n- 例：BERT、GPT、ChatGPT',
            '1. TensorFlow（Google）：\n   - 完全なエコシステム\n   - モバイル向けTensorFlow Lite\n   - ブラウザ向けTensorFlow.js\n\n2. PyTorch（Meta/Facebook）：\n   - 動的計算グラフ\n   - 研究で人気\n   - デバッグが容易\n\n3. Keras：\n   - 高レベルAPI\n   - TensorFlow上で動作\n   - 初心者向け\n\n4. JAX（Google）：\n   - 自動微分\n   - XLAによる高性能',
            '- 大量のデータが必要\n- 計算集約的（GPU/TPUが必要）\n- 小さなデータセットでの過学習\n- 解釈性が低い（ブラックボックス）\n- 複雑なハイパーパラメータ調整\n\n解決策：\n- 転移学習：事前学習済みモデルの使用\n- データ拡張：人工的にデータを増やす\n- 正則化：Dropout、L1/L2正則化\n- 早期停止：過学習前にトレーニングを停止'
        ],
        4: [
            '自然言語処理（NLP）は、コンピューターが人間の言語を理解、解釈、生成することを可能にするAIの分野です。NLPは計算言語学と機械学習、ディープラーニングを組み合わせてテキストと音声を処理します。',
            '1. トークン化：テキストを単語/文に分割\n2. 小文字化：小文字に変換\n3. ストップワード除去：一般的な単語の削除\n4. ステミング：単語を語幹に変換\n5. レンマ化：ステミングと同様だがより正確\n6. 品詞タグ付け：単語の種類をラベル付け\n7. 固有表現認識：エンティティの識別（名前、場所）',
            'Bag of Words（BoW）：\n- 単語頻度に基づく単純な表現\n- 単語の順序を無視\n\nTF-IDF：\n- 単語の重要度に基づく重み付け\n\n単語埋め込み：\n- Word2Vec：Skip-gramまたはCBOW\n- GloVe：グローバルベクトル\n- FastText：サブワード埋め込み\n\n文脈的埋め込み：\n- ELMo\n- BERT：双方向表現\n- GPT：生成事前学習Transformer',
            '1. 感情分析：肯定的/否定的感情の判定\n2. 機械翻訳：Google翻訳、DeepL\n3. テキスト要約：文書の要約\n4. 質問応答：質問への回答\n5. チャットボット：自動カスタマーサービス\n6. 音声認識：Siri、Google Speech\n7. テキスト生成：ChatGPT、Claude\n8. 固有表現認識：情報抽出\n9. テキスト分類：文書の分類\n10. 情報抽出：構造化データの抽出',
            'LLMは非常に大きなテキストデータセットで訓練された大規模言語モデルです。\n\n例：\n- GPT-4（OpenAI）：テキスト生成、コーディング、分析\n- Claude（Anthropic）：安全なAIアシスタント\n- Gemini（Google）：マルチモーダルAI\n- LLaMA（Meta）：オープンソースLLM\n- Mistral：効率的なオープンソースモデル\n\n能力：\n- Few-shot学習\n- Chain-of-thought推論\n- コード生成\n- 多言語理解',
            '- 曖昧性：一つの単語に多くの意味\n- 文脈：意味は文脈に依存\n- 皮肉とアイロニー：検出が困難\n- 非公式言語：スラング、タイプミス、略語\n- 低リソース言語：十分なデータがない言語\n- バイアス：モデルは訓練データからバイアスを継承\n- ハルシネーション：LLMは誤った情報を生成する可能性'
        ],
        5: [
            'コンピュータビジョンは、コンピューターが画像やビデオなどの現実世界の視覚情報を解釈し理解することを可能にするAIの分野です。この技術は人間が視覚情報を見て処理する方法を模倣しています。',
            '1. 画像取得：カメラ/センサーから画像をキャプチャ\n2. 前処理：リサイズ、正規化、拡張\n3. 特徴抽出：重要な特徴の抽出\n4. モデル推論：予測のためのモデル実行\n5. 後処理：結果の処理（検出のNMS）\n\n前処理技術：\n- グレースケール変換\n- ヒストグラム均等化\n- ノイズ除去\n- エッジ検出（Sobel、Canny）\n- 画像拡張（反転、回転、切り取り）',
            '画像分類：\n- 画像をクラスに分類\n- 例：猫vs犬、植物の種類\n\n物体検出：\n- 画像内の物体を検出し位置を特定\n- アルゴリズム：YOLO、SSD、Faster R-CNN\n\nセマンティックセグメンテーション：\n- 各ピクセルを分類\n- 例：自動運転車の道路セグメンテーション\n\nインスタンスセグメンテーション：\n- セグメンテーション＋物体インスタンスの区別\n- アルゴリズム：Mask R-CNN\n\n姿勢推定：\n- 人体の位置を検出\n- 例：OpenPose、MediaPipe',
            'LeNet（1998）：手書き数字認識のパイオニアCNN\n\nAlexNet（2012）：ImageNetでのブレークスルー、ReLU活性化\n\nVGGNet（2014）：3x3畳み込みによる深いネットワーク\n\nGoogLeNet/Inception（2014）：効率的なInceptionモジュール\n\nResNet（2015）：非常に深いネットワークのためのスキップ接続\n\nEfficientNet（2019）：精度と効率のバランスのとれたスケーリング\n\nVision Transformer（2020）：画像向けTransformer',
            '1. 自動運転車：Tesla、Waymo\n2. 顔認識：Face ID、セキュリティ\n3. 医用画像：がん検出、X線分析\n4. 拡張現実：ARフィルター、ポケモンGO\n5. 品質管理：工場での製品検査\n6. 農業：植物病害検出、ドローン監視\n7. 小売：Amazon Go（無人店舗）\n8. スポーツ分析：選手追跡、パフォーマンス分析\n9. 文書処理：OCR、デジタル化\n10. セキュリティ：監視、異常検出',
            'OpenCV：\n- コンピュータビジョン用オープンソースライブラリ\n- C++、Python、Javaをサポート\n- 機能：画像処理、ビデオキャプチャ、物体検出\n\nMediaPipe（Google）：\n- 顔検出、手の追跡、姿勢推定\n- デバイス上のリアルタイムに最適化\n\nTorchvision（PyTorch）：\n- データセット、変換、事前学習モデル\n\nTensorFlow Hub：\n- 事前学習モデルリポジトリ\n\nHugging Face：\n- Vision Transformerとマルチモーダルモデル'
        ],
        6: [
            'プロンプトエンジニアリングとは、生成AIモデル（LLMなど）に与える指示（プロンプト）を設計、最適化、構造化し、関連性が高く正確でユーザーの望む出力を生成するスキルです。',
            '1. 明確で具体的に：曖昧さを避ける。\n2. コンテキストを提供：AIにどの役割を演じるか伝える（例：「マーケティングの専門家として行動してください」）。\n3. 出力形式を指定：特定の形式で応答を求める（表、リスト、箇条書き）。\n4. 範囲を制限：AIがすべきでないことを説明する。',
            'ゼロショットプロンプティング：例を一切与えずにAIにタスクを実行させる。\n\nフューショットプロンプティング：モデルが望むパターンを理解できるよう、1つ以上の出力例を提供する。\n\nChain of Thought（CoT）：最終的な回答を出す前に、モデルに段階的に思考を説明させる（「ステップバイステップで考えましょう」）。'
        ],
        7: [
            'AIが人生の重要な決定（銀行融資、採用、医療診断）においてより大きな役割を果たすようになるにつれ、これらのシステムが公平で透明性があり、どのグループにも害を与えないことを確保することが非常に重要です。',
            'AIは人間が作成したデータから学習します。歴史的データに偏見（バイアス）が含まれている場合、AIモデルはそのバイアスを増幅します。例：男性が支配的な過去のデータから学習したため、男性候補を好むAI採用ツール。',
            '現代のAIシステムは膨大な量のデータ（ビッグデータ）を必要とします。これにより、個人データの収集、大量監視、データが漏洩や悪用された場合のセキュリティに関する懸念が生じます。'
        ],
        8: [
            '1. 機械学習エンジニア：AIモデルを構築し本番環境にデプロイ。\n2. データサイエンティスト：ビジネスインサイトのための複雑なデータ分析。\n3. データエンジニア：データ処理のためのインフラとパイプラインの構築。\n4. AI研究者：新しいアルゴリズムのブレークスルーの研究。\n5. プロンプトエンジニア：生成AI出力のテストと最大化。',
            '- プログラミング言語：Python、R、SQL。\n- 数学：線形代数、微積分、確率、統計。\n- ツール/フレームワーク：PyTorch、TensorFlow、Scikit-learn、Pandas。\n- ソフトスキル：問題解決、コミュニケーション、批判的思考。',
            'Pythonと数学の基礎を強化することから始めましょう。機械学習の基礎に関するオンラインコースを受講し（このプラットフォームのモジュールのように！）、小さなポートフォリオプロジェクト（簡単な画像分類や価格予測など）の構築を試み、KaggleやGitHubなどのコミュニティに参加しましょう。'
        ]
    },
    zh: {
        1: [
            '人工智能（AI）是计算机科学的一个领域，专注于创建能够执行通常需要人类智能的任务的系统。这包括学习、推理、解决问题、理解语言和识别模式的能力。',
            'AI于1956年由约翰·麦卡锡在达特茅斯会议上首次提出。此后，AI经历了几个阶段：乐观时期（1956-1974）、第一次AI寒冬（1974-1980）、专家系统的兴起（1980-1987）、第二次AI寒冬（1987-1993）以及机器学习和深度学习的现代时代（1993-至今）。',
            '1. 窄人工智能（弱AI）：为特定任务设计的AI，如Siri、Alexa或Netflix推荐系统。\n\n2. 通用人工智能（强AI）：具有人类级认知能力的AI（仍处于理论阶段）。\n\n3. 超级AI：在所有领域超越人类智能的AI（仍处于假设阶段）。',
            '- 虚拟助手：Siri、Google助手、Alexa\n- 推荐系统：Netflix、Spotify、YouTube\n- 导航：Google地图、Waze\n- 电子商务：Amazon、Tokopedia\n- 医疗：疾病诊断、医学分析\n- 汽车：特斯拉自动驾驶汽车\n- 安全：人脸识别、欺诈检测\n- 教育：自适应学习平台',
            '1. 机器学习：系统从数据中学习的能力\n2. 自然语言处理：处理人类语言\n3. 计算机视觉：图像的识别和处理\n4. 机器人技术：AI与机械系统的集成\n5. 专家系统：基于规则的决策系统',
            'AI已成为现代生活不可或缺的一部分。对AI的基本理解至关重要，因为这项技术将继续发展并影响我们生活的各个方面。通过理解AI，我们可以最优地利用它，同时也能理解其伦理和社会影响。'
        ],
        2: [
            '机器学习（ML）是AI的一个分支，它使计算机能够在没有为每个任务明确编程的情况下学习和做出决策。ML系统使用算法识别数据中的模式，并根据这些模式进行预测或决策。',
            '监督学习是使用标记数据训练模型的方法。模型从输入-输出对中学习，以对新数据进行预测。\n\n算法示例：\n- 线性回归：预测连续值（房价）\n- 逻辑回归：二分类（垃圾邮件/非垃圾邮件）\n- 决策树：基于规则的决策\n- 随机森林：决策树的集成\n- 支持向量机（SVM）：最优间隔分类\n- 神经网络：受大脑启发的模型',
            '无监督学习是模型在未标记数据中发现模式的方法。\n\n算法示例：\n- K-Means聚类：按相似性分组数据\n- 层次聚类：多级分组\n- 主成分分析（PCA）：降维\n- 关联规则：发现项目间关系\n- 异常检测：检测异常值',
            '强化学习是智能体通过与环境互动来学习的方法。智能体根据其行为获得奖励或惩罚，并学习最大化奖励。\n\n应用：\n- 游戏AI（AlphaGo、OpenAI Five）\n- 机器人导航\n- 推荐系统\n- 自动交易\n- 自动驾驶车辆控制',
            '1. 数据收集：收集相关数据\n2. 预处理：清理和准备数据\n3. 特征工程：选择和创建重要特征\n4. 模型选择：选择适当的算法\n5. 训练：用数据训练模型\n6. 评估：测试模型性能\n7. 调优：优化超参数\n8. 部署：将模型部署到生产环境',
            '分类：\n- 准确率：正确预测的百分比\n- 精确率：正预测的正确性\n- 召回率：找到所有正例的能力\n- F1分数：精确率和召回率的调和平均\n\n回归：\n- 平均绝对误差（MAE）\n- 均方误差（MSE）\n- R平方（R²）'
        ],
        3: [
            '深度学习是机器学习的一个子集，使用具有多层的神经网络（深度神经网络）来学习数据的层次表示。深度学习对于图像识别、语言处理和语音合成等复杂任务非常有效。',
            '神经网络由三个主要组件组成：\n\n1. 输入层：接收输入数据\n2. 隐藏层：通过非线性变换处理数据\n3. 输出层：产生最终预测\n\n每层中的神经元通过权重连接到下一层的神经元。每个连接都有一个权重，决定了关系的强度。',
            '前向传播：\n1. 在输入层接收输入\n2. 数据乘以权重并加上偏置\n3. 结果通过激活函数（ReLU、Sigmoid、Tanh）\n4. 过程继续到下一层直到输出\n\n反向传播：\n1. 计算输出处的误差（损失）\n2. 将误差传播到前一层\n3. 使用梯度下降更新权重\n4. 过程重复直到收敛',
            'CNN（卷积神经网络）：\n- 用于网格状数据（图像）\n- 使用卷积层进行特征提取\n- 应用：图像分类、目标检测、分割\n\nRNN（循环神经网络）：\n- 用于序列数据（文本、时间序列）\n- 具有先前信息的记忆\n- 变体：LSTM、GRU\n\nTransformer：\n- NLP的现代架构\n- 使用注意力机制\n- 示例：BERT、GPT、ChatGPT',
            '1. TensorFlow（Google）：\n   - 完整的生态系统\n   - 移动端TensorFlow Lite\n   - 浏览器端TensorFlow.js\n\n2. PyTorch（Meta/Facebook）：\n   - 动态计算图\n   - 研究中流行\n   - 易于调试\n\n3. Keras：\n   - 高级API\n   - 在TensorFlow上运行\n   - 适合初学者\n\n4. JAX（Google）：\n   - 自动微分\n   - XLA高性能',
            '- 需要大量数据\n- 计算密集（需要GPU/TPU）\n- 小数据集过拟合\n- 可解释性低（黑盒）\n- 超参数调优复杂\n\n解决方案：\n- 迁移学习：使用预训练模型\n- 数据增强：人工扩展数据\n- 正则化：Dropout、L1/L2正则化\n- 早停：在过拟合前停止训练'
        ],
        4: [
            '自然语言处理（NLP）是AI的一个分支，使计算机能够理解、解释和生成人类语言。NLP将计算语言学与机器学习和深度学习相结合来处理文本和语音。',
            '1. 分词：将文本拆分为单词/句子\n2. 小写化：转换为小写\n3. 停用词去除：删除常见词\n4. 词干提取：将词还原为词根\n5. 词形还原：类似词干提取但更准确\n6. 词性标注：标记词性\n7. 命名实体识别：识别实体（名称、地点）',
            '词袋模型（BoW）：\n- 基于词频的简单表示\n- 忽略词序\n\nTF-IDF：\n- 基于词重要性的加权\n\n词嵌入：\n- Word2Vec\n- GloVe\n- FastText\n\n上下文嵌入：\n- ELMo\n- BERT\n- GPT',
            '1. 情感分析\n2. 机器翻译：Google翻译、DeepL\n3. 文本摘要\n4. 问答系统\n5. 聊天机器人\n6. 语音识别\n7. 文本生成：ChatGPT、Claude\n8. 命名实体识别\n9. 文本分类\n10. 信息提取',
            'LLM是在非常大的文本数据集上训练的大规模语言模型。\n\n示例：\n- GPT-4（OpenAI）\n- Claude（Anthropic）\n- Gemini（Google）\n- LLaMA（Meta）\n- Mistral\n\n能力：\n- 少样本学习\n- 思维链推理\n- 代码生成\n- 多语言理解',
            '- 歧义性\n- 上下文依赖\n- 讽刺和反语\n- 非正式语言\n- 低资源语言\n- 偏见\n- 幻觉'
        ],
        5: [
            '计算机视觉是AI的一个领域，使计算机能够解释和理解来自现实世界的视觉信息，如图像和视频。',
            '1. 图像获取\n2. 预处理：调整大小、归一化、增强\n3. 特征提取\n4. 模型推理\n5. 后处理\n\n预处理技术：\n- 灰度转换\n- 直方图均衡\n- 降噪\n- 边缘检测（Sobel、Canny）\n- 图像增强（翻转、旋转、裁剪）',
            '图像分类：将图像归入类别\n\n目标检测：检测和定位图像中的物体\n- YOLO、SSD、Faster R-CNN\n\n语义分割：分类每个像素\n\n实例分割：分割+区分物体实例\n- Mask R-CNN\n\n姿态估计：检测人体位置\n- OpenPose、MediaPipe',
            'LeNet（1998）\nAlexNet（2012）\nVGGNet（2014）\nGoogLeNet/Inception（2014）\nResNet（2015）\nEfficientNet（2019）\nVision Transformer（2020）',
            '1. 自动驾驶\n2. 人脸识别\n3. 医学影像\n4. 增强现实\n5. 质量控制\n6. 农业\n7. 零售\n8. 体育分析\n9. 文档处理\n10. 安全监控',
            'OpenCV\nMediaPipe（Google）\nTorchvision（PyTorch）\nTensorFlow Hub\nHugging Face'
        ],
        6: [
            '提示工程是设计、优化和构建指令（提示）以使生成式AI模型产生相关、准确和符合用户期望的输出的技能。',
            '1. 清晰具体：避免模糊。\n2. 提供上下文：告诉AI扮演什么角色。\n3. 指定输出格式。\n4. 限制范围。',
            '零样本提示：不提供任何示例。\n\n少样本提示：提供一个或多个输出示例。\n\n思维链（CoT）：让模型逐步解释思考过程。'
        ],
        7: [
            '随着AI在重大决策中承担更大角色，确保这些系统公平、透明且不伤害任何群体至关重要。',
            'AI从人类创建的数据中学习。如果历史数据包含偏见，AI模型会放大这种偏见。',
            '现代AI系统需要大量数据（大数据），这引发了关于个人数据收集、大规模监控和数据安全的担忧。'
        ],
        8: [
            '1. 机器学习工程师\n2. 数据科学家\n3. 数据工程师\n4. AI研究员\n5. 提示工程师',
            '- 编程语言：Python、R、SQL\n- 数学：线性代数、微积分、概率统计\n- 工具：PyTorch、TensorFlow、Scikit-learn\n- 软技能：问题解决、沟通、批判性思维',
            '从加强Python和数学基础开始。参加在线课程，构建小型作品集项目，加入Kaggle或GitHub等社区。'
        ]
    },
    es: {
        1: [
            'La Inteligencia Artificial (IA) es un campo de la informática centrado en la creación de sistemas que pueden realizar tareas que normalmente requieren inteligencia humana. Esto incluye la capacidad de aprender, razonar, resolver problemas, comprender el lenguaje y reconocer patrones.',
            'La IA fue introducida por primera vez en 1956 en la Conferencia de Dartmouth por John McCarthy. Desde entonces, la IA ha pasado por varias fases: el período de optimismo (1956-1974), el primer Invierno de la IA (1974-1980), el auge de los Sistemas Expertos (1980-1987), el segundo Invierno de la IA (1987-1993) y la era moderna con Machine Learning y Deep Learning (1993-presente).',
            '1. IA Estrecha (IA Débil): IA diseñada para tareas específicas como Siri, Alexa o el sistema de recomendaciones de Netflix.\n\n2. IA General (IA Fuerte): IA con habilidades cognitivas a nivel humano (aún teórica).\n\n3. Súper IA: IA que supera la inteligencia humana en todas las áreas (aún hipotética).',
            '- Asistentes Virtuales: Siri, Google Assistant, Alexa\n- Recomendaciones: Netflix, Spotify, YouTube\n- Navegación: Google Maps, Waze\n- Comercio electrónico: Amazon, Tokopedia\n- Salud: Diagnóstico de enfermedades, análisis médico\n- Automoción: Coches autónomos de Tesla\n- Seguridad: Reconocimiento facial, detección de fraude\n- Educación: Plataformas de aprendizaje adaptativo',
            '1. Machine Learning: La capacidad de los sistemas para aprender de los datos\n2. Procesamiento del Lenguaje Natural: Procesamiento del lenguaje humano\n3. Visión por Computadora: Reconocimiento y procesamiento de imágenes\n4. Robótica: Integración de la IA con sistemas mecánicos\n5. Sistemas Expertos: Sistemas basados en reglas para la toma de decisiones',
            'La IA se ha convertido en una parte integral de la vida moderna. Una comprensión básica de la IA es crucial ya que esta tecnología continuará evolucionando e influyendo en varios aspectos de nuestras vidas. Al comprender la IA, podemos utilizarla de manera óptima y también comprender sus implicaciones éticas y sociales.'
        ],
        2: [
            'Machine Learning (ML) es una rama de la IA que permite a las computadoras aprender y tomar decisiones sin estar programadas explícitamente para cada tarea. Los sistemas de ML utilizan algoritmos para identificar patrones en los datos y hacer predicciones basadas en esos patrones.',
            'El Aprendizaje Supervisado es un método donde el modelo se entrena usando datos etiquetados. El modelo aprende de pares entrada-salida para hacer predicciones en datos nuevos.\n\nAlgoritmos de Ejemplo:\n- Regresión Lineal: Predecir valores continuos (precios de casas)\n- Regresión Logística: Clasificación binaria (spam/no spam)\n- Árboles de Decisión: Decisiones basadas en reglas\n- Random Forest: Conjunto de árboles de decisión\n- Support Vector Machines (SVM): Clasificación con margen óptimo\n- Redes Neuronales: Modelos inspirados en el cerebro',
            'El Aprendizaje No Supervisado es un método donde el modelo encuentra patrones en datos no etiquetados.\n\nAlgoritmos:\n- K-Means Clustering: Agrupación de datos por similitud\n- Clustering Jerárquico: Agrupación multinivel\n- Análisis de Componentes Principales (PCA): Reducción de dimensionalidad\n- Reglas de Asociación: Encontrar relaciones entre elementos\n- Detección de Anomalías: Detectar valores atípicos',
            'El Aprendizaje por Refuerzo es un método donde un agente aprende interactuando con un entorno. Recibe recompensas o castigos basados en sus acciones y aprende a maximizar las recompensas.\n\nAplicaciones:\n- IA de Juegos (AlphaGo, OpenAI Five)\n- Navegación de robots\n- Sistemas de recomendación\n- Trading automatizado\n- Control de vehículos autónomos',
            '1. Recopilación de Datos: Reunir datos relevantes\n2. Preprocesamiento: Limpieza y preparación de datos\n3. Ingeniería de Características: Creación de características importantes\n4. Selección de Modelo: Elección del algoritmo\n5. Entrenamiento: Entrenar el modelo con datos\n6. Evaluación: Probar el rendimiento\n7. Ajuste: Optimizar hiperparámetros\n8. Despliegue: Implementar en producción',
            'Clasificación:\n- Exactitud: Porcentaje de predicciones correctas\n- Precisión: Exactitud de predicciones positivas\n- Recall: Capacidad de encontrar todos los positivos\n- F1-Score: Media armónica de precisión y recall\n\nRegresión:\n- Error Absoluto Medio (MAE)\n- Error Cuadrático Medio (MSE)\n- R-cuadrado (R²)'
        ],
        3: [
            'Deep Learning es un subconjunto de Machine Learning que utiliza redes neuronales con muchas capas (redes neuronales profundas) para aprender representaciones jerárquicas de datos. Es muy efectivo para tareas complejas como reconocimiento de imágenes y procesamiento de lenguaje.',
            'Una Red Neuronal consta de tres componentes principales:\n\n1. Capa de Entrada: Recibe los datos\n2. Capas Ocultas: Procesa datos mediante transformaciones no lineales\n3. Capa de Salida: Produce las predicciones finales\n\nCada neurona está conectada a la siguiente capa mediante pesos.',
            'Propagación Hacia Adelante:\n1. La entrada se recibe en la capa de entrada\n2. Los datos se multiplican por los pesos y se añade sesgo\n3. El resultado pasa por la función de activación (ReLU, Sigmoid, Tanh)\n4. El proceso continúa hasta la salida\n\nRetropropagación:\n1. Calcular el error (pérdida) en la salida\n2. Propagar el error a capas anteriores\n3. Actualizar pesos usando descenso de gradiente\n4. El proceso se repite hasta la convergencia',
            'CNN (Red Neuronal Convolucional):\n- Para datos en forma de cuadrícula (imágenes)\n- Aplicaciones: Clasificación de imágenes, detección de objetos\n\nRNN (Red Neuronal Recurrente):\n- Para datos secuenciales (texto, series temporales)\n- Variantes: LSTM, GRU\n\nTransformer:\n- Arquitectura moderna para NLP\n- Ejemplos: BERT, GPT, ChatGPT',
            '1. TensorFlow (Google)\n2. PyTorch (Meta/Facebook)\n3. Keras\n4. JAX (Google)',
            '- Requiere grandes cantidades de datos\n- Intensivo computacionalmente (requiere GPU/TPU)\n- Sobreajuste en conjuntos de datos pequeños\n- Baja interpretabilidad\n\nSoluciones:\n- Transfer Learning\n- Aumento de Datos\n- Regularización (Dropout, L1/L2)\n- Parada Temprana'
        ],
        4: [
            'El Procesamiento del Lenguaje Natural (NLP) es una rama de la IA que permite a las computadoras comprender, interpretar y generar el lenguaje humano.',
            '1. Tokenización: Dividir el texto en palabras/oraciones\n2. Minúsculas: Convertir a minúsculas\n3. Eliminación de Stopwords: Eliminar palabras comunes\n4. Stemming: Reducir palabras a su raíz\n5. Lematización: Similar al stemming pero más preciso\n6. Etiquetado POS: Etiquetar tipos de palabras\n7. Reconocimiento de Entidades Nombradas: Identificar entidades (nombres, lugares)',
            'Bag of Words (BoW): Representación basada en la frecuencia de palabras.\n\nTF-IDF: Pesos basados en la importancia de la palabra.\n\nWord Embeddings: Word2Vec, GloVe.\n\nContextual Embeddings: BERT, GPT.',
            '1. Análisis de Sentimiento\n2. Traducción Automática\n3. Resumen de Texto\n4. Respuesta a Preguntas\n5. Chatbots\n6. Reconocimiento de Voz\n7. Generación de Texto\n8. Extracción de Información\n9. Clasificación de Texto',
            'Los LLMs son modelos de lenguaje a gran escala entrenados en conjuntos de datos muy grandes.\n\nEjemplos: GPT-4, Claude, Gemini, LLaMA, Mistral.\n\nCapacidades: Aprendizaje few-shot, razonamiento lógico, generación de código.',
            '- Ambigüedad\n- Dependencia del contexto\n- Sarcasmo e ironía\n- Lenguaje informal\n- Idiomas de bajos recursos\n- Sesgos en datos\n- Alucinaciones (generación de información falsa)'
        ],
        5: [
            'La Visión por Computadora es un campo de la IA que permite a las computadoras interpretar y comprender información visual del mundo real, como imágenes y videos.',
            '1. Adquisición de la Imagen\n2. Preprocesamiento: Redimensionamiento, normalización\n3. Extracción de Características\n4. Inferencia del Modelo\n5. Postprocesamiento\n\nTécnicas de Preprocesamiento: Escala de grises, reducción de ruido, detección de bordes.',
            'Clasificación de Imágenes: Categorizar imágenes en clases.\n\nDetección de Objetos: Detectar y localizar objetos en imágenes.\n\nSegmentación Semántica: Clasificar cada píxel.\n\nSegmentación de Instancias: Segmentación + distinguir instancias.\n\nEstimación de Pose: Detectar posiciones del cuerpo.',
            'LeNet (1998)\nAlexNet (2012)\nVGGNet (2014)\nGoogLeNet/Inception (2014)\nResNet (2015)\nEfficientNet (2019)\nVision Transformer (2020)',
            '1. Coches Autónomos\n2. Reconocimiento Facial\n3. Imágenes Médicas\n4. Realidad Aumentada\n5. Control de Calidad\n6. Agricultura\n7. Retail (Tiendas sin cajeros)\n8. Análisis Deportivo\n9. Procesamiento de Documentos\n10. Seguridad de Videovigilancia',
            'OpenCV: Biblioteca de código abierto.\n\nMediaPipe (Google): Optimizado para tiempo real en dispositivos.\n\nTorchvision (PyTorch).\n\nTensorFlow Hub.\n\nHugging Face.'
        ],
        6: [
            'El Prompt Engineering es la habilidad de diseñar, optimizar y estructurar instrucciones (prompts) dadas a modelos de IA Generativa para producir salidas relevantes y precisas.',
            '1. Sé Claro y Específico: Evita la ambigüedad.\n2. Proporciona Contexto: Dile a la IA qué papel jugar.\n3. Especifica el Formato de Salida.\n4. Limita el Alcance.',
            'Zero-shot Prompting: Pedir a la IA que realice una tarea sin dar ejemplos.\n\nFew-shot Prompting: Proporcionar uno o más ejemplos de salida.\n\nChain of Thought (CoT): Pedir al modelo que explique su pensamiento paso a paso.'
        ],
        7: [
            'A medida que la IA asume roles más importantes en decisiones de la vida (créditos bancarios, reclutamiento, diagnósticos médicos), es crucial garantizar que estos sistemas sean justos y transparentes.',
            'La IA aprende de datos creados por humanos. Si los datos históricos contienen prejuicios (sesgos), el modelo de IA amplificará ese sesgo.',
            'Los sistemas modernos de IA requieren enormes cantidades de datos (Big Data). Esto plantea preocupaciones sobre la recopilación de datos personales y la privacidad.'
        ],
        8: [
            '1. Machine Learning Engineer: Construir e implementar modelos.\n2. Data Scientist: Analizar datos complejos.\n3. Data Engineer: Construir infraestructura de datos.\n4. AI Researcher: Investigación algorítmica.\n5. Prompt Engineer: Optimizar salidas de IA.',
            '- Lenguajes: Python, R, SQL\n- Matemáticas: Álgebra Lineal, Cálculo, Probabilidad y Estadística\n- Frameworks: PyTorch, TensorFlow, Scikit-learn\n- Soft Skills: Resolución de problemas, comunicación',
            'Comienza fortaleciendo tus bases de Python y matemáticas. Toma cursos en línea sobre ML, intenta construir pequeños proyectos de portafolio y participa en comunidades como Kaggle o GitHub.'
        ]
    },
    ar: {
        1: [
            'الذكاء الاصطناعي (AI) هو مجال في علوم الحاسوب يركز على إنشاء أنظمة يمكنها أداء المهام التي تتطلب عادة ذكاء بشري. وهذا يشمل القدرة على التعلم والتفكير وحل المشكلات وفهم اللغة والتعرف على الأنماط.',
            'تم تقديم الذكاء الاصطناعي لأول مرة في عام 1956 في مؤتمر دارتموث بواسطة جون مكارثي. ومنذ ذلك الحين مر بعدة مراحل.',
            '1. الذكاء الاصطناعي الضيق: مصمم لمهام محددة مثل سيري.\n2. الذكاء الاصطناعي العام: قدرات معرفية بمستوى بشري.\n3. الذكاء الاصطناعي الفائق: يتجاوز الذكاء البشري في جميع المجالات.',
            '- المساعدين الافتراضيين\n- التوصيات: نتفليكس ويوتيوب\n- الملاحة: خرائط جوجل\n- التجارة الإلكترونية\n- الرعاية الصحية\n- السيارات ذاتية القيادة\n- الأمن\n- التعليم',
            '1. التعلم الآلي\n2. معالجة اللغة الطبيعية\n3. الرؤية الحاسوبية\n4. الروبوتات\n5. الأنظمة الخبيرة',
            'أصبح الذكاء الاصطناعي جزءًا لا يتجزأ من الحياة الحديثة. ويعد الفهم الأساسي للذكاء الاصطناعي أمرًا بالغ الأهمية لتطوير حياتنا بشكل أفضل.'
        ],
        2: [
            'التعلم الآلي (ML) هو فرع من الذكاء الاصطناعي يسمح لأجهزة الكمبيوتر بالتعلم واتخاذ القرارات دون برمجتها بشكل صريح لكل مهمة.',
            'التعلم الخاضع للإشراف يتم تدريب النموذج باستخدام بيانات مصنفة. الخوارزميات: الانحدار الخطي واللوجستي وأشجار القرار والشبكات العصبية.',
            'التعلم غير الخاضع للإشراف يجد الأنماط في البيانات غير المصنفة. الخوارزميات: التجميع بالوسائل k.',
            'التعلم المعزز هو طريقة يتعلم فيها الوكيل من خلال التفاعل مع بيئته بناءً على المكافآت أو العقوبات.',
            '1. جمع البيانات\n2. المعالجة المسبقة\n3. هندسة الميزات\n4. اختيار النموذج\n5. التدريب\n6. التقييم\n7. الضبط\n8. النشر',
            'مقاييس التقييم تشمل الدقة والاستدعاء و F1-Score للتصنيف، و MSE و MAE للانحدار.'
        ],
        3: [
            'التعلم العميق هو مجموعة فرعية من التعلم الآلي تستخدم الشبكات العصبية ذات الطبقات المتعددة.',
            'تتكون الشبكة العصبية من:\n1. طبقة الإدخال\n2. الطبقات المخفية\n3. طبقة الإخراج',
            'تتضمن العملية الانتشار الأمامي (حساب المخرجات) والانتشار العكسي (تحديث الأوزان بناءً على الخطأ).',
            'تشمل البنى شبکه عصبية التلافيفية (CNN) للصور، والشبكات العصبية المتكررة (RNN) للنصوص، والمحولات (Transformers).',
            'أطر العمل: TensorFlow، PyTorch، Keras، JAX.',
            'التحديات: يتطلب الكثير من البيانات، مكثف حسابياً. الحلول: نقل التعلم وتعزيز البيانات.'
        ],
        4: [
            'معالجة اللغة الطبيعية (NLP) هو فرع يمكن الحواسيب من فهم لغة البشر.',
            '1. الترميز\n2. تحويل للحروف الصغيرة\n3. إزالة كلمات التوقف\n4. التجذير واللمتزة',
            'التمثيلات تشمل Bag of Words و TF-IDF والتضمينات (Word2Vec، BERT).',
            'التطبيقات: تحليل المشاعر، الترجمة الآلية، روبوتات المحادثة، التلخيص.',
            'نماذج اللغات الكبيرة (LLMs) مثل GPT-4 و Claude تم تدريبها على كميات هائلة من النصوص.',
            'التحديات: الغموض والسخرية واختلاف السياقات واللغات ضعيفة الموارد.'
        ],
        5: [
            'الرؤية الحاسوبية هي مجال في الذكاء الاصطناعي يتيح للحواسيب فهم العالم المرئي.',
            'المهام تشمل التقاط الصور، المعالجة المسبقة، الاستخراج، الاستدلال، والمعالجة البعدية.',
            'تصنيف الصور، اكتشاف الكائنات، التجزئة الدلالية، وتقدير الوضعية.',
            'بنى شهيرة: ResNet، VGGNet، Yolo، Vision Transformer.',
            'تطبيقات: سيارات ذاتية القيادة، التعرف على الوجه، التشخيص الطبي.',
            'الأدوات: OpenCV، MediaPipe.'
        ],
        6: [
            'هندسة الأوامر (Prompt Engineering) هي تصميم وتحسين الأوامر المعطاة للذكاء الاصطناعي التوليدي للحصول على أفضل النتائج.',
            '1. كن واضحاً ومحدداً\n2. وفر السياق\n3. حدد شكل المخرجات\n4. الحد من النطاق',
            'الأساليب تشمل Zero-shot و Few-shot و سلسلة الأفكار (Chain of Thought).'
        ],
        7: [
            'مع تولي الذكاء الاصطناعي أدواراً مهمة، من الضروري ضمان أن هذه الأنظمة عادلة وشفافة ولا تضر بأي مجموعة.',
            'التحيز في الذكاء الاصطناعي: إذا كانت بيانات التدريب متحيزة، فإن الذكاء الاصطناعي سيكرر هذا التحيز.',
            'الخصوصية والأمان: أنظمة الذكاء الاصطناعي تحتاج بيانات ضخمة، مما يثير مخاوف الخصوصية والمراقبة.'
        ],
        8: [
            'المهن تشمل مهندس التعلم الآلي، عالم البيانات، باحث الذكاء الاصطناعي، ومهندس الأوامر.',
            'المهارات: برمجة (بايثون)، رياضيات (جبر، إحصاء)، أطر عمل، ومهارات مرنة.',
            'ابدأ بتعلم بايثون والرياضيات ثم طبق في مشاريع عملية وابنِ معرض أعمالك.'
        ]
    },
    hi: {
        1: [
            'आर्टिफिशियल इंटेलिजेंस (AI) कंप्यूटर विज्ञान का एक क्षेत्र है जो ऐसी प्रणालियाँ बनाने पर केंद्रित है जिन्हें आम तौर पर मानव बुद्धि की आवश्यकता होती है।',
            'AI को पहली बार 1956 में जॉन मैकार्थी द्वारा पेश किया गया था। तब से यह कई चरणों से गुजरा है।',
            '1. नैरो AI: विशिष्ट कार्यों के लिए डिज़ाइन किया गया।\n2. जनरल AI: मानव-समान क्षमताओं के साथ।\n3. सुपर AI: हर क्षेत्र में मनुष्य से बेहतर।',
            '- वर्चुअल असिस्टेंट (Siri, Alexa)\n- ऑनलाइन अनुशंसाएँ\n- नेविगेशन\n- स्वास्थ्य सेवा\n- स्वचालित कारें',
            '1. मशीन लर्निंग\n2. प्राकृतिक भाषा प्रसंस्करण (NLP)\n3. कंप्यूटर विजन\n4. रोबोटिक्स',
            'AI आधुनिक जीवन का अहम हिस्सा बन गया है और इसके प्रति बुनियादी समझ हर किसी के लिए महत्वपूर्ण है।'
        ],
        2: [
            'मशीन लर्निंग (ML) AI की वह शाखा है जो कंप्यूटर को बिना स्पष्ट प्रोग्रामिंग के निर्णय लेने में सक्षम बनाती है।',
            'सुपरवाइज्ड लर्निंग: मॉडल लेबल किए गए डेटा से सीखता है (उदा: रेखीय प्रतिगमन)।',
            'अनसुपरवाइज्ड लर्निंग: मॉडल बिना लेबल वाले डेटा में छिपे पैटर्न ढूंढता है।',
            'रीइन्फोर्समेंट लर्निंग: पर्यावरण के साथ बातचीत और पुरस्कार/दंड के माध्यम से सीखना।',
            'प्रक्रिया: 1. डेटा संग्रह 2. प्रीप्रोसेसिंग 3. फीचर इंजीनियरिंग 4. ट्रेनिंग 5. मूल्यांकन।',
            'मूल्यांकन के मेट्रिक्स: एक्यूरेसी, प्रेसिजन, रिकॉल, F1-स्कोर और रिग्रेशन के लिए MSE, MAE।'
        ],
        3: [
            'डीप लर्निंग मशीन लर्निंग का एक सब-सेट है जो कई परतों (layers) वाले न्यूरल नेटवर्क का उपयोग करता है।',
            'न्यूरल नेटवर्क की संरचना: इनपुट लेयर, हिडन लेयर्स और आउटपुट लेयर।',
            'वर्किंग: फॉरवर्ड प्रोपेगेशन (डेटा आगे बढ़ता है) और बैक प्रोपेगेशन (त्रुटि सुधारने के लिए)।',
            'आर्किटेक्चर: इमेजेज के लिए CNN और सीक्वेंस डेटा के लिए RNN और ट्रांसफॉर्मर।',
            'फ्रेमवर्क: TensorFlow, PyTorch और Keras।',
            'चुनौतियां: बड़े डेटा की आवश्यकता, ओवरफिटिंग और ब्लैक-बॉक्स नेचर।'
        ],
        4: [
            'प्राकृतिक भाषा प्रसंस्करण (NLP) कंप्यूटर को इंसानी भाषा को समझने और अर्थ निकालने की क्षमता देता है।',
            'प्रीप्रोसेसिंग: टोकनाइजेशन, लोअरकेसिंग, स्टॉपवर्ड रिमूवल और स्टेमिंग।',
            'टेक्स्ट रिप्रेजेंटेशन: BoW, TF-IDF, Word2Vec और BERT (एम्बेडिंग्स)।',
            'अनुप्रयोग: सेंटिमेंट एनालिसिस, मशीन अनुवाद (Google Translate), और चैटबॉट।',
            'LLM (लार्ज लैंग्वेज मॉडल): GPT-4, LLaMA और Gemini जैसे विशाल मॉडल।',
            'समस्याएं: अस्पष्टता, व्यंग्य, संदर्भ और हलूसीनेशन (गलत जानकारी)।'
        ],
        5: [
            'कंप्यूटर विजन (CV) कंप्यूटर को इमेज और वीडियो जैसी विजुअल जानकारी को एनालाइज करने में मदद करता है।',
            'इमेज प्रोसेसिंग: नॉइज़ कम करना, एज डिटेक्शन और इमेज ऑग्मेंटेशन।',
            'कार्य: इमेज क्लासिफिकेशन, ऑब्जेक्ट डिटेक्शन (YOLO), और सेगमेंटेशन।',
            'प्रमुख मॉडल: ResNet, YOLO, Vision Transformer।',
            'अनुप्रयोग: सेल्फ-ड्राइविंग कार, मेडिकल डायग्नोसिस और फेस रिकॉग्निशन।',
            'टूल्स: OpenCV, MediaPipe।'
        ],
        6: [
            'प्रॉम्प्ट इंजीनियरिंग (Prompt Engineering) जेनरेटिव AI से बेहतर उत्तर पाने के लिए निर्देश डिज़ाइन करने की कला है।',
            'सिद्धांत: स्पष्ट निर्देश दें, संदर्भ बताएं, उत्तर का फॉर्मेट सेट करें।',
            'तकनीकें: जीरो-शॉट, फ्यू-शॉट और चेन-ऑफ-थॉट (CoT) प्रॉम्प्टिंग।'
        ],
        7: [
            'यह सुनिश्चित करना आवश्यक है कि AI सिस्टम पारदर्शी हैं और किसी भी समूह के साथ भेदभाव नहीं करते हैं।',
            'पूर्वाग्रह: यदि ट्रेनिंग डेटा में मानव पूर्वाग्रह है, तो AI भी पूर्वाग्रह दिखाएगा।',
            'गोपनीयता: AI को बहुत अधिक डेटा चाहिए, जिससे व्यक्तिगत गोपनीयता का खतरा पैदा होता है।'
        ],
        8: [
            'भूमिकाएं: ML इंजीनियर, डेटा साइंटिस्ट, डेटा इंजीनियर, AI रिसर्चर।',
            'स्किल्स: पायथन, गणित (कैलकुलस, रेखीय बीजगणित), और फ्रेमवर्क।',
            'शुरुआत: पायथन और आधारभूत गणित से शुरू करें और छोटे प्रोजेक्ट्स बनाएं।'
        ]
    },
    pt: {
        1: [
            'A Inteligência Artificial (IA) é um campo da ciência da computação focado na criação de sistemas que podem realizar tarefas que normalmente requerem inteligência humana. Isso inclui a capacidade de aprender, raciocinar, resolver problemas, entender a linguagem e reconhecer padrões.',
            'A IA foi introduzida pela primeira vez em 1956 na Conferência de Dartmouth por John McCarthy. Desde então, passou por várias fases, desde os Invernos da IA até a era atual do Machine Learning e Deep Learning.',
            '1. IA Estreita (Weak AI): Projetada para tarefas específicas como Siri ou recomendações do Netflix.\n2. IA Geral (Strong AI): Habilidades cognitivas de nível humano.\n3. Super IA: Supera a inteligência humana em todas as áreas.',
            'Aplicações: Assistentes Virtuais, Recomendações online, Navegação (Google Maps), Saúde (diagnósticos), Veículos Autônomos.',
            'Componentes: Machine Learning, Processamento de Linguagem Natural, Visão Computacional, Robótica.',
            'A IA já é parte integral da vida moderna. Uma compreensão básica é crucial para aproveitar a tecnologia de forma responsável e ética.'
        ],
        2: [
            'Machine Learning (ML) ou Aprendizado de Máquina é o campo da IA que permite aos computadores aprender sem programação explícita para cada tarefa.',
            'Aprendizado Supervisionado: O modelo é treinado com dados rotulados. Algoritmos: Regressão Linear, Árvores de Decisão, Redes Neurais.',
            'Aprendizado Não Supervisionado: O modelo encontra padrões em dados sem rótulos. Exemplo: Clusterização K-Means e PCA.',
            'Aprendizado por Reforço: O agente aprende através de interações com o ambiente (recompensas/punições).',
            'O processo envolve: Coleta de Dados, Pré-processamento, Engenharia de Features, Treinamento e Avaliação.',
            'Métricas de avaliação incluem Acurácia, Precisão e Recall para classificação; e MSE para regressão.'
        ],
        3: [
            'Deep Learning é um subconjunto focado em usar redes neurais com muitas camadas profundas para extrair padrões complexos.',
            'Estrutura: Camada de entrada, camadas ocultas (processamento não-linear) e camada de saída.',
            'Funcionamento: Forward Propagation (previsão) e Backpropagation (atualização dos pesos para minimizar o erro).',
            'Arquiteturas: CNN para imagens, RNN e Transformers para textos e séries temporais.',
            'Frameworks mais populares: PyTorch e TensorFlow/Keras.',
            'Desafios: Necessidade de muito poder computacional e dados, risco de overfitting.'
        ],
        4: [
            'Processamento de Linguagem Natural (NLP) ajuda computadores a interpretar e gerar linguagem humana.',
            'Pré-processamento: Tokenização, remoção de stopwords, stemming e lematização.',
            'Representação de texto: BoW, TF-IDF, embeddings (Word2Vec) e embeddings contextuais (BERT).',
            'Aplicações: Análise de sentimento, Tradução automática (DeepL), Chatbots.',
            'LLMs (Large Language Models): Modelos massivos como GPT-4, LLaMA e Gemini.',
            'Problemas recorrentes: Ambiguidade, ironia, viés de dados e alucinações de informações.'
        ],
        5: [
            'Visão Computacional permite que os computadores "vejam" e extraiam informações de imagens e vídeos.',
            'Tarefas básicas incluem pré-processamento (escala de cinza), remoção de ruídos e data augmentation.',
            'Tarefas principais: Classificação de Imagens, Detecção de Objetos (YOLO) e Segmentação.',
            'Modelos: ResNet e Vision Transformers redefiniram a precisão.',
            'Usado amplamente na saúde, segurança, controle de qualidade industrial.',
            'Ferramentas: OpenCV, MediaPipe.'
        ],
        6: [
            'Prompt Engineering é a técnica de escrever instruções ou contexto para obter respostas precisas e desejadas de modelos generativos de IA.',
            'Princípios: Ser específico e claro, fornecer exemplos e limitar o escopo.',
            'Técnicas: Zero-shot, Few-shot e Cadeia de Raciocínio (Chain of Thought).'
        ],
        7: [
            'Com a IA tomando decisões críticas (empréstimos, contratações, saúde), a garantia de não-discriminação e justiça é a base da Ética na IA.',
            'Viés: Os modelos absorvem preconceitos embutidos nos dados históricos humanos.',
            'Privacidade: O consumo massivo de dados para treinamento gera grandes preocupações de segurança.'
        ],
        8: [
            'Papéis de carreira: Engenheiro de ML, Cientista de Dados, Pesquisador de IA, Engenheiro de Prompt.',
            'Um bom profissional domina Python, Matemática (álgebra, estatística) e framework específico.',
            'Inicie estudando matemática e programação básica, e aplique os conhecimentos em projetos de portfólio.'
        ]
    },
    fr: {
        1: [
            "L'Intelligence Artificielle (IA) est un domaine de l'informatique axé sur la création de systèmes capables d'effectuer des tâches nécessitant généralement l'intelligence humaine. Cela inclut la capacité d'apprendre, de raisonner, de résoudre des problèmes et de comprendre le langage.",
            "L'IA a été introduite en 1956 par John McCarthy. Depuis, elle est passée par plusieurs phases, y compris des hivers de l'IA et l'ère moderne du Machine Learning.",
            "1. IA Étroite: Conçue pour des tâches spécifiques comme Siri.\n2. IA Générale: Capacités cognitives de niveau humain.\n3. Super IA: Dépasse l'intelligence humaine.",
            "Applications: Assistants, Navigation, Santé, Voitures autonomes.",
            "Composants: Apprentissage automatique, Traitement du langage, Vision par ordinateur.",
            "Une compréhension de base de l'IA est cruciale dans le monde moderne."
        ],
        2: [
            "Le Machine Learning (ML) permet aux ordinateurs d'apprendre sans être programmés explicitement. Les systèmes utilisent des algorithmes pour identifier des modèles.",
            "L'Apprentissage Supervisé utilise des données étiquetées pour faire des prédictions. Algorithmes: Régression linéaire, Arbres de décision.",
            "L'Apprentissage Non Supervisé trouve des modèles dans des données non étiquetées. Exemple: K-Means.",
            "L'Apprentissage par Renforcement apprend via des récompenses et punitions. Applications: AlphaGo.",
            "Le processus: Collecte, Préparation, Ingénierie des caractéristiques, Entraînement, Évaluation.",
            "Métriques: Précision, Rappel, F1-Score pour la classification."
        ],
        3: [
            "Le Deep Learning utilise des réseaux de neurones profonds pour apprendre des représentations hiérarchiques.",
            "Structure: Couche d'entrée, Couches cachées, Couche de sortie.",
            "Propagation avant et Rétropropagation (Backpropagation) pour mettre à jour les poids.",
            "Les architectures: CNN (images), RNN (textes), Transformers.",
            "Frameworks: TensorFlow, PyTorch.",
            "Défis: Nécessite beaucoup de données et de puissance de calcul."
        ],
        4: [
            "Le Traitement du Langage Naturel (NLP) permet aux machines de comprendre le langage humain.",
            "Pré-traitement: Tokenisation, suppression des mots vides (stopwords), lemmatisation.",
            "Représentation: Word2Vec, BERT, embeddings contextuels.",
            "Applications: Analyse de sentiment, Traduction, Chatbots.",
            "LLM (Grands Modèles de Langage): Modèles massifs comme GPT-4, Claude, Gemini.",
            "Problèmes: Ambiguïté, sarcasme, hallucinations."
        ],
        5: [
            "La Vision par Ordinateur (CV) permet aux ordinateurs de comprendre les images et vidéos.",
            "Étapes: Acquisition, Pré-traitement, Détection de contours.",
            "Tâches principales: Classification, Détection d'objets (YOLO), Segmentation.",
            "Architectures populaires: ResNet, Vision Transformers.",
            "Utilisé dans la sécurité, les véhicules autonomes, l'imagerie médicale.",
            "Outils très utilisés: OpenCV, MediaPipe."
        ],
        6: [
            "Le Prompt Engineering est l'art de créer des directives claires pour obtenir les meilleurs résultats de l'IA.",
            "Principes: Être clair et spécifique, fournir du contexte, définir le format de sortie.",
            "Astuces: Zero-shot, Few-shot et Chain of Thought."
        ],
        7: [
            "L'éthique est essentielle car l'IA prend des décisions avec de vraies conséquences.",
            "Biais: Si les données historiques sont biaisées, l'IA reproduira ces biais.",
            "Confidentialité: Une collecte massive de données soulève des problèmes de vie privée."
        ],
        8: [
            "Rôles: Ingénieur ML, Data Scientist, Ingénieur Data, Ingénieur Prompt.",
            "Compétences: Python, Algèbre linéaire, Statistiques.",
            "Comment commencer: Apprendre Python et créer de petits projets sur GitHub."
        ]
    },
    de: {
        1: [
            'Künstliche Intelligenz (KI) ist ein Bereich der Informatik, der sich auf Systeme konzentriert, die menschliche Intelligenz erfordern.',
            'KI wurde 1956 von John McCarthy eingeführt. Seitdem gab es KI-Winter und nun die Ära des Deep Learning.',
            '1. Schwache KI: Für spezifische Aufgaben (Siri).\n2. Starke KI: Menschliche kognitive Fähigkeiten.\n3. Super-KI: Übertrifft den Menschen.',
            'Anwendungen: Virtuelle Assistenten, Navigation (Google Maps), Gesundheitswesen, Autonome Autos.',
            'Komponenten: Maschinelles Lernen, Computer Vision, Robotik.',
            'Ein grundlegendes Verständnis von KI ist heute unerlässlich.'
        ],
        2: [
            'Maschinelles Lernen (ML) ermöglicht es Computern, aus Daten zu lernen, ohne explizit programmiert zu werden.',
            'Überwachtes Lernen: Das Modell lernt aus gekennzeichneten Daten (Label). Algorithmen: Lineare Regression, Entscheidungsbäume.',
            'Unüberwachtes Lernen: Findet Muster in unstrukturierten Daten (z. B. K-Means-Clustering).',
            'Bestärkendes Lernen: Ein Agent lernt durch Belohnungen/Strafen (z. B. AlphaGo).',
            'Prozess: Datensammlung, Vorverarbeitung, Training, Evaluierung, Deployment.',
            'Metriken: Genauigkeit (Accuracy), Precision, Recall, F1-Score.'
        ],
        3: [
            'Deep Learning nutzt künstliche neuronale Netze mit vielen Schichten zur Mustererkennung.',
            'Struktur: Eingabeschicht, Verborgene Schichten (Hidden Layers), Ausgabeschicht.',
            'Training: Vorwärtspropagation (Forward Propagation) und Backpropagation.',
            'Architekturen: CNN für Bilder, RNN/Transformers für Texte.',
            'Frameworks: TensorFlow, PyTorch, Keras.',
            'Herausforderungen: Hoher Rechenbedarf und große Datenmengen erforderlich.'
        ],
        4: [
            'Natural Language Processing (NLP) ermöglicht es Computern, menschliche Sprache zu verstehen.',
            'Preprocessing: Tokenisierung, Entfernung von Stoppwörtern, Stemming.',
            'Textrepräsentation: Word Embeddings (Word2Vec), BERT.',
            'Anwendungen: Stimmungsanalyse, Automatische Übersetzung, Chatbots.',
            'LLMs (Große Sprachmodelle): Modelle wie ChatGPT, Gemini und Claude.',
            'Herausforderungen: Sarkasmus, Mehrdeutigkeit, Halluzinationen.'
        ],
        5: [
            'Computer Vision ermöglicht Computern das maschinelle Sehen von Bildern und Videos.',
            'Techniken zur Vorverarbeitung: Graustufen, Rauschunterdrückung, Kantenerkennung.',
            'Aufgaben: Bildklassifizierung, Objekterkennung (YOLO), Segmentierung.',
            'Modelle: ResNet, Vision Transformer (ViT).',
            'Gesichtserkennung, Medizinische Bildgebung, Autonome Fahrzeuge.',
            'Bibliotheken: OpenCV, MediaPipe.'
        ],
        6: [
            'Prompt Engineering ist die Kunst, Befehle für generative KI klar und strukturiert zu formulieren.',
            'Prinzipien: Klar und spezifisch sein, Kontext geben, Format definieren.',
            'Methoden: Zero-shot, Few-shot-Prompting und Chain of Thought.'
        ],
        7: [
            'KI-Ethik sorgt dafür, dass algorithmische Entscheidungen fair und transparent sind.',
            'Verzerrungen (Bias): Maschinen übernehmen menschliche Vorurteile aus Trainingsdaten.',
            'Datenschutzprobleme durch die Notwendigkeit riesiger Datenmengen (Big Data).'
        ],
        8: [
            'Berufe: ML-Ingenieur, Datenwissenschaftler, Daten-Ingenieur.',
            'Kompetenzen: Programmierung in Python, Lineare Algebra, Frameworks.',
            'Der Start: Mathematische Grundlagen lernen, eigene Projekte bauen und auf GitHub teilen.'
        ]
    },
    ko: {
        1: [
            '인공 지능(AI)은 일반적으로 인간의 지능이 필요한 작업을 수행할 수 있는 시스템을 개발하는 컴퓨터 과학 분야입니다. 여기에는 학습, 추론, 문제 해결, 패턴 인식 등의 기능이 포함됩니다.',
            'AI는 1956년 다트머스 회의에서 존 매카시가 처음 소개했으며, 여러 번의 AI 겨울을 거쳐 오늘날 기계 학습 및 딥러닝의 시대로 발전했습니다.',
            '1. 약인공지능: 특정 작업(Siri, Alexa)을 위해 설계된 AI.\n2. 강인공지능: 인간 수준의 인지 능력.\n3. 초인공지능: 인간을 능가하는 AI.',
            '활용: 가상 비서, 추천 시스템, 자율 주행 자동차, 의료 진단, 보안.',
            '1. 기계 학습 2. 자연어 처리 3. 컴퓨터 비전 4. 로봇 공학.',
            '현대 사회에서 AI의 기초적인 이해는 필수입니다. AI를 이해하면 이를 최적으로 활용하고 윤리적 영향을 파악할 수 있습니다.'
        ],
        2: [
            '머신러닝(ML)은 명시적인 프로그래밍 없이 기계가 데이터에서 스스로 학습하는 AI의 한 분야입니다.',
            '지도 학습: 라벨이 지정된 데이터를 사용하여 훈련. 알고리즘: 선형 회귀, 의사결정 나무, 인공 신경망.',
            '비지도 학습: 라벨 없는 데이터에서 패턴 찾기. 예: K-Means 군집화.',
            '강화 학습: 환경과 상호 작용하며 보상을 극대화하는 방식 (예: AlphaGo).',
            '과정: 데이터 수집, 데이터 전처리, 모델 선택, 훈련 및 평가.',
            '분류 평가 지표로는 정확도, 정밀도, 재현율, F1-스코어가 있습니다.'
        ],
        3: [
            '딥러닝은 다층 구조의 인공 신경망을 사용하여 데이터의 복잡한 표현을 학습합니다.',
            '구조: 입력층, 은닉층(비선형 처리), 출력층.',
            '작동 방식: 순전파(Forward Propagation)를 통해 예측하고, 역전파(Backpropagation)로 오차를 줄입니다.',
            '아키텍처: 이미지용 CNN, 텍스트용 RNN 및 Transformer.',
            '프레임워크: TensorFlow, PyTorch, Keras.',
            '과제: 막대한 데이터와 연산 능력(GPU) 필요, 과적합(Overfitting) 발생 가능성.'
        ],
        4: [
            '자연어 처리(NLP)는 컴퓨터가 인간의 언어를 이해하고 생성할 수 있게 해줍니다.',
            '전처리: 토큰화(Tokenization), 불용어 제거, 어간 추출.',
            '텍스트 표현: Word2Vec, BERT 의 문맥 임베딩.',
            '응용: 감성 분석, 기계 번역(DeepL), 챗봇, 요약.',
            'LLM(거대 언어 모델): 막대한 텍스트로 훈련된 GPT-4, Claude 등의 모델.',
            '한계: 모호성, 풍자/비꼬기 이해, 정보 환각(Hallucination).'
        ],
        5: [
            '컴퓨터 비전은 컴퓨터가 이미지나 영상을 해석할 수 있게 해주는 분야입니다.',
            '작업 흐름: 이미지 획득, 전처리, 특징 추출 및 예측.',
            '주요 작업: 이미지 분류, 객체 탐지(YOLO), 세그먼테이션.',
            '모델: ResNet, AlexNet, Vision Transformer(ViT).',
            '활용: 자율 주행, 얼굴 인식, 의료 영상 분석 및 공장 품질 관리.',
            '주요 도구: OpenCV, Google MediaPipe.'
        ],
        6: [
            '프롬프트 엔지니어링은 생성형 AI에서 최적의 결과를 얻기 위해 지침을 설계하는 기술입니다.',
            '원칙: 명확하고 구체적으로 작성하고 맥락을 제공하라.',
            '기법: Zero-shot, Few-shot 및 생각의 사슬(Chain of Thought).'
        ],
        7: [
            'AI 윤리는 시스템이 모든 그룹에게 공정하고 прозрач하게 결정하도록 보장하는 것입니다.',
            '편향(Bias): 과거 데이터에 사회적 편견이 있다면 AI 모델도 이를 증폭시킵니다.',
            '개인정보 보호: AI 학습에 대량의 데이터가 필요해 개인정보 유출 우려가 있습니다.'
        ],
        8: [
            '직업: ML 엔지니어, 데이터 과학자, 데이터 엔지니어, AI 연구원.',
            '요구 기술: Python 코딩, 수학(선형 대수학, 미적분, 통계).',
            '시작 방법: Python 기본기를 다지고 포트폴리오 프로젝트(Kaggle 등)에 참여하세요.'
        ]
    },
    ru: {
        1: [
            'Искусственный интеллект (ИИ) — это область информатики, специализирующаяся на создании систем, способных выполнять задачи, обычно требующие человеческого интеллекта. Это включает способность к обучению, рассуждению, решению проблем и пониманию языка.',
            'ИИ был впервые представлен в 1956 году Джоном Маккарти. С тех пор он прошел через «зимы ИИ» и перешел в современную эру машинного обучения.',
            '1. Узкий ИИ: Создан для конкретных задач (Siri).\n2. Общий ИИ: Когнитивные способности уровня человека.\n3. Супер ИИ: Превосходит человеческий интеллект.',
            'Применения: Виртуальные помощники, Навигация, Медицина, Автономные автомобили.',
            'Компоненты: Машинное обучение, Обработка естественного языка, Компьютерное зрение.',
            'Базовое понимание ИИ необходимо в современном мире для всех.'
        ],
        2: [
            'Машинное обучение (ML) позволяет компьютерам учиться на основе данных без явного программирования.',
            'Обучение с учителем (Supervised Learning): Модель обучается на размеченных данных. Пример: Линейная регрессия.',
            'Обучение без учителя (Unsupervised Learning): Поиск скрытых закономерностей. Пример: Кластеризация K-Means.',
            'Обучение с подкреплением (Reinforcement Learning): Обучение через взаимодействия с наградами.',
            'Процесс: Сбор данных, очистка, выбор признаков, тренировка, оценка.',
            'Метрики: Точность, Полнота, F1-мера.'
        ],
        3: [
            'Глубокое обучение — это подмножество машинного обучения, использующее многослойные нейронные сети.',
            'Структура: Входной слой, Скрытые слои, Выходной слой.',
            'Как работает: Прямое распространение (Forward Propagation) и обратное распространение (Backpropagation).',
            'Архитектуры: CNN для изображений, RNN/Transformers для текста.',
            'Фреймворки: TensorFlow, PyTorch, Keras.',
            'Проблемы: Требуются мощные видеокарты (GPU) и большие объемы данных.'
        ],
        4: [
            'Обработка естественного языка (NLP) позволяет компьютерам понимать и создавать человеческую речь.',
            'Предобработка: Токенизация, удаление стоп-слов, стемминг.',
            'Векторизация текстов: Word2Vec, BERT.',
            'Применения: Анализ тональности, Машинный перевод, Чат-боты.',
            'LLM (Большие языковые модели): GPT-4, LLaMA, Gemini.',
            'Проблемы: Сарказм, двусмысленность, галлюцинации моделей.'
        ],
        5: [
            'Компьютерное зрение (CV) позволяет компьютерам распознавать и анализировать изображения и видео.',
            'Методы: Обнаружение краев, нормализация, аугментация.',
            'Задачи: Классификация изображений, Обнаружение объектов (YOLO).',
            'Архитектуры: ResNet, Vision Transformer (ViT).',
            'Применение: Распознавание лиц, Диагностика в медицине, Беспилотные авто.',
            'Инструменты: OpenCV, MediaPipe.'
        ],
        6: [
            'Промпт-инжиниринг — это искусство составления эффективных запросов к генеративному ИИ для получения идеальных ответов.',
            'Принципы: Будьте точны, задавайте контекст, указывайте формат вывода.',
            'Методы: Zero-shot, Few-shot и Chain of Thought (размышление по шагам).'
        ],
        7: [
            'Этика ИИ обеспечивает справедливое и беспристрастное использование алгоритмов.',
            'Предвзятость: Модели наследуют предрассудки людей из обучающей выборки.',
            'Конфиденциальность: Огромный сбор данных ставит под угрозу личную жизнь (Big Data).'
        ],
        8: [
            'Роли: ML-инженер, Специалист по данным (Data Scientist), Промпт-инженер.',
            'Навыки: Программирование на Python, Линейная алгебра, Статистика.',
            'Как начать: Изучайте основы Python и математики, создавайте портфолио на GitHub или Kaggle.'
        ]
    },
    tr: {
        1: [
            'Yapay Zeka (AI), genellikle insan zekası gerektiren görevleri yerine getirebilen sistemler oluşturmaya odaklanan bir bilgisayar bilimi alanıdır.',
            'Yapay Zeka ilk kez 1956 yılında John McCarthy tarafından tanıtıldı. Günümüze kadar yapay zeka kışları ve derin öğrenme çağını yaşadı.',
            '1. Dar Yapay Zeka (Siri, Alexa)\n2. Genel Yapay Zeka (İnsan seviyesi)\n3. Süper Yapay Zeka.',
            'Uygulamalar: Sanal Asistanlar, Otonom Araçlar, Sağlık, E-ticaret.',
            'Bileşenler: Makine Öğrenimi, Doğal Dil İşleme, Bilgisayarlı Görü.',
            'Yapay zekanın temel anlayışı, günümüz dünyası için kritik bir beceridir.'
        ],
        2: [
            'Makine Öğrenimi (ML), bilgisayarların verilerden öğrenmesini ve deneyimle gelişmesini sağlar.',
            'Gözetimli Öğrenme (Supervised): Etiketlenmiş verilerle model eğitilir.',
            'Gözetimsiz Öğrenme (Unsupervised): Etiketsiz verilerdeki desenler bulunur (K-Means).',
            'Pekiştirmeli Öğrenme (Reinforcement): Ödül ve ceza sistemiyle öğrenir (AlphaGo).',
            'Süreç: Veri toplama, Ön işleme, Eğitim, Değerlendirme, Dağıtım.',
            'Metrikler: Doğruluk (Accuracy), Kesinlik, Duyarlılık, F1-Score.'
        ],
        3: [
            'Derin Öğrenme, yapay sinir ağlarını kullanarak karmaşık verileri işleyen bir makine öğrenimi alt dalıdır.',
            'Yapı: Girdi Katmanı, Gizli Katmanlar, Çıktı Katmanı.',
            'Çalışma Prensibi: İleri Besleme (Forward Propagation) ve Geri Yayılım (Backpropagation).',
            'Mimari: Görüntü için CNN, Metin için RNN ve Transformers.',
            'Çerçeveler: TensorFlow, PyTorch, Keras.',
            'Zorluklar: Yüksek GPU ihtiyacı ve büyük veri gereksinimi.'
        ],
        4: [
            'Doğal Dil İşleme (NLP), bilgisayarların insan dilini anlamasını ve üretmesini sağlar.',
            'Ön işleme: Tokenizasyon, Etkisiz Kelime (Stopword) çıkarma, Stemming.',
            'Temsiller: Word2Vec, BERT.',
            'Alanlar: Duygu Analizi, Çeviri (Google Translate), Chatbotlar.',
            'Büyük Dil Modelleri (LLM): GPT-4, LLaMA, Gemini gibi trilyonlarca veri ile eğitilen modeller.',
            'Zorluklar: İroni, Alay, Kelime çok anlamlılığı, Halüsinasyon.'
        ],
        5: [
            'Bilgisayarlı Görü (CV), bilgisayarların görüntü ve videoları analiz etmesini sağlar.',
            'Yöntemler: Kenar tespiti, Görüntü ölçekleme.',
            'Temel Görevler: Görüntü Sınıflandırma, Nesne Tespiti (YOLO), Segmentasyon.',
            'Modeller: ResNet, Vision Transformer.',
            'Uygulamalar: Otonom sürüş, Yüz tanıma sistemi, Tıbbi görüntüleme.',
            'Araçlar: OpenCV, MediaPipe.'
        ],
        6: [
            'İstem Mühendisliği (Prompt Engineering), üretken yapay zekadan en iyi sonuçları elde etmek için komutları tasarlama eğitimidir.',
            'Prensipler: Açık ve net olun, bağlam sağlayın, format belirleyin.',
            'Teknikler: Zero-shot, Few-shot ve Düşünce Zinciri (Chain of Thought).'
        ],
        7: [
            'Yapay Zeka Etiği, algoritmik sistemlerin adil ve tarafsız kararlar vermesini sağlar.',
            'Ön Yargı (Bias): Eğitim verilerindeki insani ön yargılar algoritmaya yansır.',
            'Gizlilik: Büyük veri toplama süreci, kişisel gizliliği tehdit edebilir.'
        ],
        8: [
            'Kariyerler: Makine Öğrenimi Mühendisi, Veri Bilimcisi, Prompt Mühendisi.',
            'Yetenekler: Python, Doğrusal Cebir ve İstatistik.',
            'Nereden Başlamalı: Python ve Matematiğin temellerini atın, Kaggle projelerine katılın.'
        ]
    },
    it: {
        1: [
            "L'Intelligenza Artificiale (IA) è un campo dell'informatica che sviluppa sistemi in grado di svolgere compiti tipicamente umani.",
            "Introdotta nel 1956, l'IA è passata da inverni a una rinascita con il Deep Learning.",
            "Tipi: IA Debole (Sistemi specifici), IA Generale (Umana), Super IA.",
            "Applicazioni: Assistenti Vocali, Chatbot, Medicina, Auto a Guida Autonoma.",
            "Fondamenti: Machine Learning, NLP, Computer Vision.",
            "Oggi l'IA è integrata nella nostra vita e comprenderla è essenziale."
        ],
        2: [
            "Il Machine Learning permette ai computer di apprendere dai dati.",
            "Apprendimento Supervisionato: Modelli addestrati su dati etichettati (es. Regressione Lineare).",
            "Apprendimento Non Supervisionato: Scoperta di cluster nei dati grezzi (es. K-Means).",
            "Apprendimento per Rinforzo: Imparare attraverso ricompense e punizioni.",
            "Pipeline: Raccolta dati, Pulizia, Feature Engineering, Training, Test.",
            "Metriche: Accuratezza, Precision, Recall."
        ],
        3: [
            "Il Deep Learning utilizza Reti Neurali con molti strati nascosti.",
            "Elementi: Livello di Input, Livelli Nascosti, Livello di Output.",
            "Funzionamento: Forward propagation (predizione) e Backpropagation (aggiornamento dei pesi).",
            "Architetture: CNN per le immagini, RNN/Transformers per il testo.",
            "Strumenti: TensorFlow, PyTorch.",
            "Criticità: Molti dati e grande potenza di calcolo (GPU)."
        ],
        4: [
            "Il Natural Language Processing (NLP) consente ai computer di processare il linguaggio.",
            "Pipeline: Tokenizzazione, rimozione di stopwords, lematizzazione.",
            "Vettorizzazione: Da Word2Vec ai modelli contestuali (BERT).",
            "Usi comuni: Analisi del Sentimento, Traduzione Automatica, Riassunti automatici.",
            "Grandi Modelli Linguistici (LLM): Architetture massicce come ChatGPT, Claude.",
            "Sfide: Ambiguità, Sarcasmo, Allucinazioni."
        ],
        5: [
            "La Computer Vision permette ai sistemi di comprendere il mondo visivo.",
            "Fasi: Acquisizione, Pre-processing, Estrazione delle caratteristiche.",
            "Task: Classificazione Immagini, Rilevamento Oggetti (YOLO), Segmentazione.",
            "Modelli iconici: ResNet, Vision Transformer.",
            "Usi comuni: Diagnosi mediche, riconoscimento facciale (Face ID).",
            "Librerie popolari: OpenCV, MediaPipe."
        ],
        6: [
            "Il Prompt Engineering è la tecnica di definire input chiari per i modelli generativi.",
            "Regole d'oro: Essere chiari, fornire il contesto, dare esempi.",
            "Tipologie: Zero-shot, Few-shot e Chain-of-Thought."
        ],
        7: [
            "L'Etica dell'IA si assicura che i sistemi siano trasparenti e non discriminatori.",
            "Bias (Pregiudizio): Modelli allenati su dati imperfetti replicano i pregiudizi.",
            "Privacy: La raccolta su larga scala espone i dati personali a rischi."
        ],
        8: [
            "Lavori: Machine Learning Engineer, Data Scientist, AI Researcher.",
            "Competenze: Python, Algebra Lineare, Statistica.",
            "Come iniziare: Studiare matematica, programmare in Python e fare progetti open-source (GitHub, Kaggle)."
        ]
    },
    vi: {
        1: [
            'Trí tuệ Nhân tạo (AI) là lĩnh vực CNTT tập trung vào việc tạo ra các hệ thống có thể thực hiện các tác vụ đòi hỏi trí tuệ con người.',
            'Được giới thiệu vào năm 1956, AI đã trải qua nhiều giai đoạn phát triển lên tới kỷ nguyên Học Sâu (Deep Learning) hiện tại.',
            '1. AI Hẹp (Siri, Alexa)\n2. AI Tổng Quát (Trí tuệ như con người)\n3. Siêu AI.',
            'Ứng dụng: Trợ lý Ảo, Đề xuất (Netflix), Y tế, Lái xe tự động.',
            'Thành phần: Học Máy Trí tuệ (ML), Xử lý Ngôn ngữ Tự nhiên (NLP), Thị giác Máy tính (CV).',
            'Hiểu biết cơ bản về AI là yếu tố then chốt trong thế giới hiện đại.'
        ],
        2: [
            'Học Máy (Machine Learning - ML) cho phép máy móc tự học từ dữ liệu mà không cần lập trình rõ ràng.',
            'Học Có Giám Sát: Mô hình được huấn luyện bằng dữ liệu có nhãn.',
            'Học Không Giám Sát: Tìm kiếm mẫu ẩn trong dữ liệu không nhãn (Phân cụm K-Means).',
            'Học Tăng Cường: Tác tử học qua quá trình thử và sai dựa trên phần thưởng/hình phạt.',
            'Quy trình: Thu thập dữ liệu, Tiền xử lý, Trích xuất đặc trưng, Huấn luyện, Đánh giá.',
            'Số liệu: Độ chính xác (Accuracy), Độ chuẩn xác (Precision), Độ thu hồi (Recall), F1-Score.'
        ],
        3: [
            'Học Sâu (Deep Learning) sử dụng Mạng Nơ-ron Nhân tạo nhiều lớp để xử lý dữ liệu phức tạp.',
            'Cấu trúc: Lớp đầu vào, Các lớp ẩn, Lớp đầu ra.',
            'Lan truyền thuận (Dự đoán) và Lan truyền ngược (Backpropagation - Cập nhật trọng số).',
            'Kiến trúc: CNN (Xử lý ảnh), RNN và Transformers (Xử lý văn bản, chuỗi thời gian).',
            'Các thư viện: TensorFlow, PyTorch.',
            'Thách thức: Yêu cầu GPU mạnh mẽ và lượng dữ liệu khổng lồ.'
        ],
        4: [
            'Xử lý Ngôn ngữ Tự nhiên (NLP) giúp máy tính hiểu và tạo ra ngôn ngữ của con người.',
            'Tiền xử lý: Token hóa, Xóa Stopwords, Chuyển về từ gốc (Stemming/Lemmatization).',
            'Biểu diễn văn bản: Word Embeddings (Word2Vec), BERT.',
            'Ứng dụng: Phân tích Cảm xúc, Dịch Máy, Chatbot thông minh.',
            'Mô hình Ngôn ngữ Lớn (LLM): GPT-4, LLaMA, Gemini, Claude.',
            'Thách thức: Ảo giác (Hallucination), Từ nhiều nghĩa, Sự mỉa mai.'
        ],
        5: [
            'Thị giác Máy tính (CV) hỗ trợ xử lý và phân tích hình ảnh/video.',
            'Tiền xử lý: Cắt tỷ lệ, Xóa nhiễu, Biên cạnh.',
            'Nhiệm vụ: Phân loại Ảnh, Ký hiệu Vật thể (YOLO), Phân đoạn.',
            'Mô hình phổ biến: ResNet, Vision Transformer.',
            'Ứng dụng: Xe tự lái, Nhận diện khuôn mặt (Face ID), Chụp X-quang y tế.',
            'Công cụ: OpenCV, MediaPipe.'
        ],
        6: [
            'Kỹ thuật Viết Lời Nhắc (Prompt Engineering) là cách thiết kế câu lệnh để nhận được kết quả tốt nhất từ AI tạo sinh.',
            'Quy tắc: Rõ ràng, cung cấp ngữ cảnh, chỉ định định dạng đầu ra.',
            'Kỹ thuật: Zero-shot, Few-shot và Tư duy Từng bước (Chain of Thought).'
        ],
        7: [
            'Đạo đức AI đảm bảo rằng các quyết định thuật toán công bằng và không gây hại.',
            'Định kiến (Bias): Nếu dữ liệu lịch sử chứa định kiến, mô hình AI sẽ lặp lại sự bất công đó.',
            'Quyền Riêng Tư: Yêu cầu về Big Data đe dọa trực tiếp đến bảo mật thông tin cá nhân.'
        ],
        8: [
            'Nghề nghiệp: Kỹ sư ML, Nhà Khoa học Dữ liệu, Kỹ sư Phát triển Prompt.',
            'Kỹ năng: Lập trình Python, Đại số tuyến tính, Thống kê.',
            'Bắt đầu: Học vững đại số và Python, sau đó xây dựng các dự án trên GitHub và Kaggle.'
        ]
    }
};

/*
 * Content for lessons 9–15.
 * Kept as an extension block so the original translations for lessons 1–8
 * remain untouched and the fallback behaviour stays backwards-compatible.
 */
Object.assign(sectionContentTranslations.en, {
    9: [
        `Reinforcement Learning (RL) models decisions as a Markov Decision Process: an agent observes a state, chooses an action, then receives a reward and a new state. Policy π(a|s) chooses actions while discount factor γ weights future rewards. In Gymnasium's CartPole, the agent receives +1 while the pole remains upright.`,
        `Value-based RL estimates the long-term value of a state or state-action pair. Q-learning updates Q(s,a) with α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy exploration occasionally tries a random action; DQN replaces the table with a neural network and uses replay buffers plus a target network for more stable Atari training.`,
        `For continuous actions such as a robot arm angle, a policy can output an action distribution. REINFORCE learns from episode rewards, actor-critic adds a value estimator, and PPO limits how much the policy changes per update. Stable-Baselines3 provides practical PPO, DQN, and SAC implementations.`,
        `A badly designed reward can optimize the metric while missing the real goal. For a warehouse robot, add collision, energy, and waiting-time penalties instead of rewarding speed alone. Compare several random seeds in a separate evaluation environment, then use MuJoCo or Isaac Sim, domain randomization, action limits, and an emergency stop before moving to hardware.`
    ],
    10: [
        `Discriminative models choose labels such as spam or not spam, while generative models learn data patterns to create new examples. Autoregressive LLMs predict the next token; diffusion models gradually remove noise to form an image. GPT, Llama, Mistral, and Stable Diffusion illustrate these two families.`,
        `A tokenizer such as Byte Pair Encoding turns text into tokens, which become embeddings. Self-attention measures which tokens matter to one another, while positional encoding preserves order. During pre-training the model reduces next-token prediction error; temperature and top-p change variety, not factual correctness.`,
        `Retrieval-Augmented Generation (RAG) retrieves relevant document chunks before the LLM answers. Embeddings from text-embedding-3 or BGE can be searched with FAISS, pgvector, or Chroma. Fine-tuning and LoRA stabilize repeated formats, while validated JSON schemas make function calling safer for stock or calendar APIs.`,
        `Test normal cases, edge cases, and questions with no answer. Measure groundedness, citation accuracy, latency, tokens per request, and human escalation. Treat hallucination as a real failure mode, protect system instructions from prompt injection, restrict tool permissions, redact personal data, and keep logs free of secrets.`
    ],
    11: [
        `Healthcare AI can support image triage, risk prediction, documentation, and drug research; it does not replace clinical judgment. Computer vision may flag a suspicious area on an X-ray or CT, while NLP extracts medicines and allergies from notes. A useful output states the population, purpose, and next action, such as prioritizing a doctor's review.`,
        `Clinical data contains delayed labels, incomplete codes, and differences between hospitals and devices. DICOM stores images with metadata, while datasets such as MIMIC require strict access governance. Split by patient and time, prevent leakage, validate externally, and report sensitivity, specificity, positive predictive value, and calibration rather than accuracy alone.`,
        `An auditable radiology pipeline can de-identify DICOM, normalize images, run DenseNet or U-Net, and show Grad-CAM as a review aid. A heatmap is not a causal explanation. Record data, preprocessing, model, threshold, and approval versions, then test subgroups by age, sex, device, and location.`,
        `An authorized clinician should see context, confidence, and a way to reject a recommendation. Define alert ownership and adverse-event reporting, apply least-privilege access, encryption, minimum retention, and de-identification. Before deployment, include clinical, security, privacy, and compliance teams in the risk review.`
    ],
    12: [
        `Start with a repeated decision that has a measurable outcome, not with a favorite model. Retail demand forecasting, fraud review, and factory visual inspection need a baseline, a decision owner, and KPIs such as service level, false-positive rate, processing time, or cost per case. A higher accuracy score is not automatically business value.`,
        `Transaction, CRM, ERP, sensor, and service-log data often need to be joined first. XGBoost or Prophet can forecast demand with promotion and holiday features; recommendations can combine collaborative filtering with stock rules. OCR plus validation can check invoice PO numbers and totals, but feature definitions must match between training and production.`,
        `A production model needs data and code versioning, experiment tracking in MLflow, pipeline tests, and a batch or API deployment. Monitor input drift, prediction drift, latency, error rate, and downstream business metrics. PSI can signal distribution changes; delayed labels must be linked back to the original prediction, with rollback and a manual path ready.`,
        `A useful pilot limits one process, one primary user, and a defined evaluation period. Show important factors when a person reviews a recommendation and collect rejected examples. Define prohibited data, automation limits, and accountability; compare ROI with a baseline or control group so seasonality is not mistaken for AI impact.`
    ],
    13: [
        `Robots combine RGB-D cameras, LiDAR, IMU, wheel encoders, and force-torque sensors to estimate the world. Perception detects objects or poses, a planner chooses a path, and a controller sends motor commands. ROS 2 connects these components through nodes, topics, services, and actions.`,
        `SLAM builds a map while estimating the robot's position. ORB-SLAM uses visual features, LiDAR SLAM matches scans, and an Extended Kalman Filter can fuse IMU, odometry, and GPS. ROS 2 Navigation2 commonly uses A* or NavFn for global paths and costmaps for local obstacle avoidance.`,
        `A robot arm solves inverse kinematics to turn a target pose into joint angles. MoveIt plans motion and checks collisions; a vision model estimates a grasp point and the gripper closes with force feedback. Imitation learning and simulation in MuJoCo or Isaac Sim can reduce the risk before limited robot fine-tuning.`,
        `The physical world has no undo button. Limit speed, force, workspace, and policy actions; add an emergency stop, safety sensors, and interlocks. Test blocked sensors, dropped objects, network loss, and people entering the workspace. Timestamped logs, incident replay, and manual mode make failures recoverable.`
    ],
    14: [
        `Edge AI runs a model on or near the device that produces the data. A camera can reject a defective product in milliseconds and a vibration sensor can detect an anomaly while offline. ESP32, Raspberry Pi, Jetson, and Coral differ in RAM, power, and accelerators, so choose hardware from latency and field conditions.`,
        `Quantization turns float32 weights into int8, pruning removes less useful connections, and knowledge distillation trains a smaller model from a teacher. TensorFlow Lite, TensorRT, ONNX Runtime, and OpenVINO target different devices. Measure accuracy, p50/p95 latency, memory, temperature, and power—not only file size.`,
        `In a factory, an accelerometer can send a vibration window to a gateway, score an anomaly locally, and publish only the score or an important clip over MQTT. Include device ID, synchronized time, firmware version, and model version. Buffer during outages, avoid duplicate actuator commands, and separate telemetry from control.`,
        `Verify signed firmware and models before execution. Use secure boot where supported, unique device credentials, TLS, and key rotation. Roll out models to a small cohort first, monitor crashes and drift, and keep rollback available. Retraining and regression tests belong in the device lifecycle, not only at launch.`
    ],
    15: [
        `AutoML can automate basic cleaning, category encoding, model selection, limited feature engineering, and hyperparameter tuning. Auto-sklearn, H2O AutoML, and AutoGluon compare pipelines; Vertex AI and Azure Machine Learning provide managed workflows. Teachable Machine is useful for small image or audio prototypes, but automation cannot repair a bad target.`,
        `Define what one row represents, when the prediction is made, and which columns exist at that moment. For churn within 30 days, a later cancellation reason is leakage. Split temporal data by time, check missing values, duplicate customers, class imbalance, and units before pressing train.`,
        `An AutoML leaderboard may favor accuracy even when fraud is only 2% of transactions. Choose precision-recall, ROC-AUC, F1, MAE, or business cost for the problem. Inspect the confusion matrix at the operational threshold and compare against a rule-based or logistic-regression baseline.`,
        `Store the dataset, configuration, metrics, and prediction examples so results can be reproduced. Use SHAP or feature importance to check whether signals make sense; correlation is not causation. Retest exported models on production data, monitor drift, and keep human review for high-risk decisions. No-code still requires an accountable process owner.`
    ]
});

Object.assign(sectionContentTranslations.zh, {
    9: [
        `强化学习（RL）把决策建模为马尔可夫决策过程：智能体观察状态、选择动作，然后获得奖励和下一个状态。策略 π(a|s) 选择动作，折扣因子 γ 衡量未来奖励。在 Gymnasium 的 CartPole 中，只要杆子保持直立，智能体每步获得 +1 奖励。`,
        `基于价值的方法估计状态或状态-动作对的长期价值。Q-learning 使用 α[r + γ max Q(s′,a′) − Q(s,a)] 更新 Q 值。ε-greedy 偶尔随机探索；DQN 用神经网络替代表格，并使用 replay buffer 和 target network 稳定 Atari 游戏训练。`,
        `对于机械臂角度等连续动作，策略可以输出动作分布。REINFORCE 从回合奖励学习，actor-critic 增加价值估计器，PPO 限制每次更新的策略变化幅度。Stable-Baselines3 提供了可实践的 PPO、DQN 和 SAC 实现。`,
        `奖励设计错误时，模型可能只优化指标而没有完成真实目标。仓储机器人不应只奖励速度，还应加入碰撞、能耗和等待时间惩罚。使用多个随机种子和独立评估环境，再在转向真实硬件前用 MuJoCo 或 Isaac Sim、域随机化、动作限制和急停进行测试。`
    ],
    10: [
        `判别模型决定垃圾邮件等标签，生成模型则学习数据规律并创造新样本。自回归 LLM 预测下一个 token；扩散模型逐步去除噪声生成图像。GPT、Llama、Mistral 和 Stable Diffusion 展示了这些模型家族。`,
        `Byte Pair Encoding 等 tokenizer 把文本切成 token，再转换为 embedding。Self-attention 计算 token 之间的相关性，位置编码保留顺序。预训练通过降低下一个 token 的预测误差学习；temperature 和 top-p 改变多样性，并不保证事实正确。`,
        `RAG 会在 LLM 回答前检索相关文档片段。text-embedding-3 或 BGE 生成的 embedding 可以用 FAISS、pgvector 或 Chroma 搜索。Fine-tuning 和 LoRA 可稳定重复格式，经过验证的 JSON schema 能让库存或日历 API 的 function calling 更安全。`,
        `用正常案例、边界案例和没有答案的问题测试系统。记录 groundedness、引用准确率、延迟、每次请求的 token 和人工升级率。把幻觉当作真实故障，防范 prompt injection，限制工具权限，先删除个人数据，并确保日志不含秘密。`
    ],
    11: [
        `医疗 AI 可以辅助影像分诊、风险预测、文档处理和药物研究，但不能替代临床判断。计算机视觉可以标记 X 光或 CT 中的可疑区域，NLP 可以从病历提取药物和过敏信息。好的输出应说明人群、目的和下一步，例如优先安排医生复核。`,
        `临床数据常有延迟标签、不完整编码，以及医院和设备之间的差异。DICOM 保存医学影像和元数据，MIMIC 等数据集需要严格的访问治理。按患者和时间划分数据，避免泄漏，进行外部验证，并报告 sensitivity、specificity、PPV 和 calibration，而不只是 accuracy。`,
        `可审计的放射学 pipeline 可以先对 DICOM 去标识化和归一化，再运行 DenseNet 或 U-Net，并用 Grad-CAM 展示需要复核的区域。热力图不是因果解释。记录数据、预处理、模型、阈值和审批版本，并按年龄、性别、设备和地点测试子群体。`,
        `授权医护人员需要看到患者背景、置信度，并能拒绝建议。明确告警由谁处理以及如何报告不良事件，使用最小权限、传输和存储加密、最短保留期限及二次使用前去标识化。部署前应让临床、安全、隐私和合规团队共同评估风险。`
    ],
    12: [
        `先选择可重复且有明确结果的决策，而不是先挑模型。零售需求预测、欺诈审核和工厂视觉检测都需要业务基线、决策负责人以及 service level、误报率、处理时间或单案成本等 KPI。accuracy 上升不等于业务价值上升。`,
        `交易、CRM、ERP、传感器和服务日志通常需要先整合。XGBoost 或 Prophet 可以利用促销和节假日特征预测需求；推荐系统可以结合协同过滤和库存规则。OCR 能提取发票文字，再由分类器或规则检查 PO 编号和总额，训练和生产必须使用同一特征定义。`,
        `生产模型需要数据和代码版本管理、MLflow 实验记录、pipeline 测试，以及 batch job 或 API 部署。监控输入漂移、预测漂移、延迟、错误率和业务结果。PSI 可以提示分布变化；延迟标签要关联回原始预测，并准备回滚和人工流程。`,
        `有效的试点应限制在一个流程、一个主要用户和一段明确的评估期内。让审核者看到重要因素，并收集被拒绝的案例。规定禁止使用的数据、自动化边界和责任人；用基线或对照组比较 ROI，避免把季节性误认为 AI 影响。`
    ],
    13: [
        `机器人结合 RGB-D 摄像头、LiDAR、IMU、轮编码器和力矩传感器来估计环境。感知系统检测物体或姿态，规划器选择路径，控制器发送电机命令。ROS 2 通过 node、topic、service 和 action 连接这些组件。`,
        `SLAM 在估计机器人位置的同时建立地图。ORB-SLAM 使用视觉特征，LiDAR SLAM 匹配扫描，扩展卡尔曼滤波器可以融合 IMU、里程计和 GPS。ROS 2 Navigation2 通常使用 A* 或 NavFn 规划全局路径，再用 costmap 避开局部障碍。`,
        `机械臂通过逆运动学把目标姿态转换成关节角度。MoveIt 负责运动规划和碰撞检查；视觉模型估计抓取点，夹爪用力反馈闭合。模仿学习以及 MuJoCo 或 Isaac Sim 中的仿真，可以在有限的真实机器人微调前降低风险。`,
        `物理世界没有撤销按钮。限制速度、力度、工作空间和策略动作，加入急停、安全传感器和互锁。测试传感器被遮挡、物体掉落、网络中断及人员进入工作区的情况。带时间戳的日志、事件回放和手动模式帮助恢复故障。`
    ],
    14: [
        `Edge AI 把模型运行在产生数据的设备上或附近。摄像头可以在毫秒级拒绝缺陷产品，振动传感器即使离线也能检测异常。ESP32、树莓派、Jetson 和 Coral 的内存、功耗和加速器不同，应根据延迟和现场条件选硬件。`,
        `量化把 float32 权重变成 int8，剪枝移除不重要的连接，知识蒸馏则让小模型学习教师模型。TensorFlow Lite、TensorRT、ONNX Runtime 和 OpenVINO 面向不同设备。应同时测量准确率、p50/p95 延迟、内存、温度和功耗，而不只是文件大小。`,
        `在工厂中，加速度计可以把振动窗口发给 gateway，模型在本地计算异常分数，再通过 MQTT 只发送分数或重要片段。消息要包含设备 ID、同步时间、固件版本和模型版本。断网时使用本地缓存，避免重复执行执行器命令，并分离遥测和控制链路。`,
        `设备运行前应验证已签名的固件和模型。硬件支持时启用 secure boot，为设备使用唯一凭据、TLS 和密钥轮换。先向小范围设备发布模型，监控崩溃和漂移并保留回滚；重训练和回归测试属于设备生命周期的一部分。`
    ],
    15: [
        `AutoML 可以自动完成基础清洗、类别编码、模型选择、有限的特征工程和超参数调优。Auto-sklearn、H2O AutoML 和 AutoGluon 会比较多个 pipeline；Vertex AI 和 Azure Machine Learning 提供托管流程。Teachable Machine 适合小型图像或音频原型，但自动化不能修复错误的目标。`,
        `先定义一行数据代表什么、何时做预测，以及当时能看到哪些列。预测 30 天内流失时，之后才出现的“取消原因”属于数据泄漏。时间数据应按时间切分，并在训练前检查缺失值、重复客户、类别不平衡和单位。`,
        `当欺诈交易只占 2% 时，AutoML leaderboard 偏好的 accuracy 可能会误导。按问题选择 precision-recall、ROC-AUC、F1、MAE 或业务成本，在实际阈值查看 confusion matrix，并与规则或 logistic regression 基线比较。`,
        `保存数据集、配置版本、指标和预测样例，确保结果可复现。用 SHAP 或 feature importance 检查模型是否依赖合理信号；相关性不代表因果。导出的模型还要在生产数据上复测、监控漂移，高风险决策保留人工复核。No-code 仍需要责任人。`
    ]
});

Object.assign(sectionContentTranslations.es, {
    9: [
        `El aprendizaje por refuerzo modela las decisiones como un proceso de decisión de Markov: el agente observa un estado, elige una acción y recibe una recompensa y un nuevo estado. La política π(a|s) elige acciones y γ pondera las recompensas futuras. En CartPole de Gymnasium, el agente recibe +1 mientras el poste siga en pie.`,
        `El RL basado en valores estima el valor a largo plazo de un estado o de un par estado-acción. Q-learning actualiza Q(s,a) con α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy explora ocasionalmente acciones aleatorias; DQN usa una red neuronal, replay buffer y target network para estabilizar el entrenamiento.`,
        `Para acciones continuas, como el ángulo de un brazo robótico, la política puede producir una distribución de acciones. REINFORCE aprende de las recompensas del episodio, actor-critic añade un estimador de valor y PPO limita el cambio de política por actualización. Stable-Baselines3 incluye implementaciones de PPO, DQN y SAC.`,
        `Una recompensa mal diseñada puede optimizar la métrica y fallar el objetivo real. En un robot de almacén hay que penalizar colisiones, energía y espera, no solo premiar la velocidad. Compara varias semillas en un entorno de evaluación separado y usa MuJoCo o Isaac Sim, randomización de dominio, límites de acción y parada de emergencia antes del hardware.`
    ],
    10: [
        `Los modelos discriminativos eligen etiquetas, como spam o no spam; los generativos aprenden patrones para crear ejemplos nuevos. Los LLM autorregresivos predicen el token siguiente y los modelos de difusión eliminan ruido gradualmente para crear imágenes. GPT, Llama, Mistral y Stable Diffusion son ejemplos conocidos.`,
        `Un tokenizer como Byte Pair Encoding convierte el texto en tokens y después en embeddings. Self-attention calcula qué tokens son relevantes entre sí y la codificación posicional conserva el orden. En el preentrenamiento se minimiza el error del siguiente token; temperature y top-p cambian la variedad, no garantizan la verdad.`,
        `RAG recupera fragmentos relevantes antes de que responda el LLM. Los embeddings de text-embedding-3 o BGE se pueden buscar con FAISS, pgvector o Chroma. Fine-tuning y LoRA estabilizan formatos repetidos, mientras los esquemas JSON validados hacen más seguro el function calling para inventario o calendarios.`,
        `Prueba casos normales, límites y preguntas sin respuesta. Mide groundedness, exactitud de citas, latencia, tokens por solicitud y escalamiento a personas. Trata las alucinaciones como fallos reales, protege las instrucciones contra prompt injection, limita permisos de herramientas, elimina datos personales y no guardes secretos en los logs.`
    ],
    11: [
        `La IA sanitaria puede apoyar el triaje de imágenes, la predicción de riesgos, la documentación y la investigación de fármacos, pero no sustituye el juicio clínico. Computer vision puede señalar una zona sospechosa en una radiografía o CT, y NLP extraer medicamentos y alergias. Una salida útil especifica población, objetivo y siguiente acción.`,
        `Los datos clínicos tienen etiquetas tardías, códigos incompletos y diferencias entre hospitales y dispositivos. DICOM guarda imágenes y metadatos; conjuntos como MIMIC requieren un control de acceso estricto. Divide por paciente y tiempo, evita leakage, valida externamente y reporta sensibilidad, especificidad, valor predictivo positivo y calibración.`,
        `Un pipeline radiológico auditable puede desidentificar DICOM, normalizar imágenes, ejecutar DenseNet o U-Net y mostrar Grad-CAM como ayuda para la revisión. El mapa de calor no es una explicación causal. Registra versiones de datos, preprocessing, modelo, umbral y aprobación, y prueba subgrupos por edad, sexo, dispositivo y ubicación.`,
        `Un profesional autorizado debe ver el contexto, la confianza y una forma de rechazar la recomendación. Define quién atiende las alertas y cómo se reportan eventos adversos; aplica mínimo privilegio, cifrado, retención mínima y desidentificación. Antes del despliegue participan los equipos clínico, de seguridad, privacidad y cumplimiento.`
    ],
    12: [
        `Empieza por una decisión repetida con un resultado medible, no por un modelo favorito. La previsión de demanda, la revisión de fraude y la inspección visual necesitan una línea base, un responsable y KPI como nivel de servicio, falsos positivos, tiempo de proceso o coste por caso. Más accuracy no implica más valor.`,
        `Los datos de transacciones, CRM, ERP, sensores y logs suelen tener que unirse primero. XGBoost o Prophet pueden pronosticar demanda con promociones y festivos; las recomendaciones combinan filtrado colaborativo y reglas de stock. OCR puede extraer facturas y validar números PO y totales, siempre con las mismas features en entrenamiento y producción.`,
        `Un modelo en producción necesita versionado de datos y código, experimentos en MLflow, pruebas de pipeline y despliegue como batch o API. Monitoriza input drift, prediction drift, latencia, errores y métricas de negocio. PSI detecta cambios de distribución; las etiquetas tardías deben enlazarse con la predicción original y debe existir rollback.`,
        `Un piloto útil limita un proceso, un usuario principal y un periodo de evaluación. Muestra los factores importantes, recoge rechazos y define datos prohibidos, límites de automatización y responsabilidades. Compara el ROI con una línea base o grupo de control para no confundir estacionalidad con impacto de IA.`
    ],
    13: [
        `Los robots combinan cámaras RGB-D, LiDAR, IMU, encoders de ruedas y sensores de fuerza para estimar el entorno. La percepción detecta objetos, el planificador elige una trayectoria y el controlador envía órdenes al motor. ROS 2 conecta los componentes mediante nodes, topics, services y actions.`,
        `SLAM crea un mapa mientras estima la posición del robot. ORB-SLAM usa rasgos visuales, LiDAR SLAM empareja escaneos y un filtro de Kalman extendido puede fusionar IMU, odometría y GPS. Navigation2 suele usar A* o NavFn para el camino global y costmaps para obstáculos locales.`,
        `Un brazo robótico resuelve cinemática inversa para convertir una pose objetivo en ángulos articulares. MoveIt planifica movimientos y comprueba colisiones; un modelo visual estima el punto de agarre y la pinza usa feedback de fuerza. Imitation learning y simulación en MuJoCo o Isaac Sim reducen el riesgo.`,
        `El mundo físico no tiene botón de deshacer. Limita velocidad, fuerza, espacio y acciones de la política; añade parada de emergencia, sensores de seguridad e interlocks. Prueba sensores bloqueados, objetos caídos, pérdida de red y personas en el área. Los logs con timestamp, replay de incidentes y modo manual permiten recuperarse.`
    ],
    14: [
        `Edge AI ejecuta el modelo en el dispositivo que genera los datos o cerca de él. Una cámara puede rechazar un defecto en milisegundos y un sensor de vibración detectar anomalías sin conexión. ESP32, Raspberry Pi, Jetson y Coral tienen límites distintos de RAM, energía y aceleración; la selección empieza por la latencia.`,
        `La cuantización convierte pesos float32 en int8, pruning elimina conexiones y knowledge distillation entrena un modelo pequeño con uno maestro. TensorFlow Lite, TensorRT, ONNX Runtime y OpenVINO apuntan a dispositivos diferentes. Mide precisión, latencia p50/p95, memoria, temperatura y energía, no solo el tamaño del archivo.`,
        `En una fábrica, un acelerómetro puede enviar una ventana de vibración al gateway, calcular localmente el score de anomalía y publicar por MQTT solo el score o un clip importante. Incluye ID, hora sincronizada, versión de firmware y modelo. Usa buffer durante cortes, evita comandos duplicados y separa telemetría de control.`,
        `Verifica firmware y modelos firmados antes de ejecutarlos. Usa secure boot, credenciales únicas, TLS y rotación de claves cuando sea posible. Despliega primero a una cohorte pequeña, vigila crashes y drift y conserva rollback. El reentrenamiento y las pruebas de regresión forman parte del ciclo de vida.`
    ],
    15: [
        `AutoML automatiza limpieza básica, encoding, selección de modelos, feature engineering limitado y ajuste de hiperparámetros. Auto-sklearn, H2O AutoML y AutoGluon comparan pipelines; Vertex AI y Azure Machine Learning ofrecen flujos gestionados. Teachable Machine sirve para prototipos pequeños, pero la automatización no arregla un objetivo incorrecto.`,
        `Define qué representa una fila, cuándo se predice y qué columnas existen en ese momento. En churn a 30 días, el motivo de cancelación posterior es leakage. Separa datos temporales por fecha y revisa valores ausentes, clientes duplicados, desbalance y unidades antes de entrenar.`,
        `Con solo 2% de fraude, accuracy puede premiar un modelo que ignora los positivos. Elige precision-recall, ROC-AUC, F1, MAE o coste de negocio, revisa la matriz de confusión en el umbral operativo y compara con reglas o regresión logística.`,
        `Guarda dataset, configuración, métricas y ejemplos para reproducir resultados. Usa SHAP o feature importance para comprobar señales razonables; correlación no es causalidad. Prueba el modelo exportado con datos de producción, monitoriza drift y conserva revisión humana para decisiones de riesgo. No-code sigue necesitando un responsable.`
    ]
});

Object.assign(sectionContentTranslations.ar, {
    9: [
        `يتعامل التعلم المعزز مع القرارات باعتبارها عملية قرار ماركوف: يراقب الوكيل الحالة، يختار فعلاً، ثم يحصل على مكافأة وحالة جديدة. تحدد السياسة π(a|s) الأفعال، بينما يوازن معامل الخصم γ المكافآت المستقبلية. في CartPole ضمن Gymnasium يحصل الوكيل على +1 ما دام العمود قائماً.`,
        `يقدّر التعلم المعزز القائم على القيمة قيمة الحالة أو زوج الحالة والفعل على المدى الطويل. يحدّث Q-learning القيمة بالصيغة α[r + γ max Q(s′,a′) − Q(s,a)]. يجرّب ε-greedy أفعالاً عشوائية أحياناً؛ ويستبدل DQN الجدول بشبكة عصبية مع replay buffer وtarget network.`,
        `في الأفعال المستمرة مثل زاوية ذراع روبوت، تستطيع السياسة إخراج توزيع للأفعال. يتعلم REINFORCE من مكافأة الحلقة، ويضيف actor-critic مقدّر قيمة، بينما يحد PPO مقدار تغير السياسة في كل تحديث. يوفر Stable-Baselines3 تطبيقات PPO وDQN وSAC العملية.`,
        `قد تجعل المكافأة السيئة الوكيل يحسن الرقم ويفشل الهدف الحقيقي. أضف للروبوت في المستودع عقوبات الاصطدام والطاقة والانتظار، لا مكافأة السرعة وحدها. استخدم بذوراً عشوائية متعددة وبيئة تقييم منفصلة، ثم اختبر في MuJoCo أو Isaac Sim مع حدود للفعل وزر إيقاف طارئ.`
    ],
    10: [
        `تختار النماذج التمييزية تسميات مثل مزعج أو غير مزعج، بينما تتعلم النماذج التوليدية أنماط البيانات لإنشاء أمثلة جديدة. تتنبأ نماذج LLM ذاتية الانحدار بالرمز التالي، وتزيل نماذج الانتشار الضوضاء تدريجياً لتكوين الصور. GPT وLlama وMistral وStable Diffusion أمثلة واضحة.`,
        `يحوّل tokenizer مثل Byte Pair Encoding النص إلى رموز ثم إلى embeddings. يحسب self-attention أهمية الرموز لبعضها، ويحافظ positional encoding على الترتيب. يقلل التدريب المسبق خطأ الرمز التالي؛ وتغير temperature وtop-p التنوع، لا صحة الحقائق.`,
        `يسترجع RAG مقاطع الوثائق المناسبة قبل إجابة LLM. يمكن البحث في embeddings من text-embedding-3 أو BGE باستخدام FAISS أو pgvector أو Chroma. يثبت Fine-tuning وLoRA الصيغ المتكررة، وتزيد مخططات JSON المتحقق منها أمان function calling لواجهات المخزون والتقويم.`,
        `اختبر الحالات العادية والحدية والأسئلة التي لا جواب لها. قس groundedness ودقة الاستشهاد والتأخير والرموز ومعدل التحويل إلى إنسان. اعتبر الهلوسة فشلاً حقيقياً، واحم التعليمات من prompt injection، وقيّد صلاحيات الأدوات، واحذف البيانات الشخصية من السجلات.`
    ],
    11: [
        `تساعد AI الصحية في فرز الصور وتوقع المخاطر والتوثيق وأبحاث الأدوية، لكنها لا تستبدل الحكم السريري. قد تحدد computer vision منطقة مشبوهة في الأشعة أو CT، ويستخرج NLP الأدوية والحساسيات من السجلات. يجب أن يذكر الناتج السكان والهدف والخطوة التالية، مثل إعطاء الأولوية لمراجعة الطبيب.`,
        `تحتوي البيانات السريرية على تسميات متأخرة ورموز ناقصة وفروق بين المستشفيات والأجهزة. يحفظ DICOM الصور وبياناتها الوصفية، وتتطلب مجموعات مثل MIMIC حوكمة وصول صارمة. اقسم البيانات حسب المريض والزمن، امنع التسرب، ونفذ تحققاً خارجياً مع sensitivity وspecificity وPPV وcalibration.`,
        `يمكن لخط أشعة قابل للتدقيق إزالة هوية DICOM وتطبيع الصور وتشغيل DenseNet أو U-Net وإظهار Grad-CAM للمراجعة. الخريطة الحرارية ليست تفسيراً سببياً. سجل نسخ البيانات والمعالجة والنموذج والعتبة والموافقة، واختبر الفئات حسب العمر والجنس والجهاز والموقع.`,
        `يجب أن يرى المختص المعتمد سياق المريض والثقة وطريقة رفض التوصية. حدد مالك التنبيه وإبلاغ الأحداث السلبية، وطبق أقل صلاحية والتشفير والاحتفاظ الأدنى وإزالة الهوية. قبل النشر، شارك فرق الطب والأمن والخصوصية والامتثال في مراجعة المخاطر.`
    ],
    12: [
        `ابدأ بقرار متكرر له نتيجة قابلة للقياس، لا بنموذج مفضل. يحتاج توقع الطلب ومراجعة الاحتيال والفحص البصري إلى خط أساس ومالك قرار ومؤشرات مثل مستوى الخدمة ومعدل الإنذارات الكاذبة ووقت المعالجة وتكلفة الحالة. ارتفاع accuracy لا يعني قيمة تجارية تلقائياً.`,
        `غالباً يجب دمج بيانات المعاملات وCRM وERP والحساسات والسجلات أولاً. يستطيع XGBoost أو Prophet توقع الطلب مع خصائص العروض والعطلات، ويمكن للتوصيات جمع collaborative filtering مع قواعد المخزون. يستخرج OCR بيانات الفاتورة ثم يتحقق من PO والإجمالي، مع تطابق تعريف الخصائص بين التدريب والإنتاج.`,
        `يحتاج النموذج الإنتاجي إلى إصدارات للبيانات والكود وتجارب في MLflow واختبارات pipeline ونشر كـ batch أو API. راقب input drift وprediction drift والتأخير والأخطاء ومؤشرات العمل. يمكن لـ PSI كشف تغير التوزيع؛ اربط التسميات المتأخرة بالتنبؤ الأصلي وجهز rollback ومساراً يدوياً.`,
        `يقيد الاختبار الجيد عملية واحدة ومستخدماً أساسياً ومدة واضحة. اعرض العوامل المهمة واجمع أمثلة الرفض، وحدد البيانات المحظورة وحدود التشغيل والمسؤولية. قارن ROI بخط أساس أو مجموعة ضابطة حتى لا تخلط الموسمية بأثر AI.`
    ],
    13: [
        `تجمع الروبوتات كاميرات RGB-D وLiDAR وIMU ومشفرات العجلات وحساسات القوة لتقدير العالم. تكشف الرؤية الأشياء أو الوضعيات، ويختار المخطط المسار، ويرسل المتحكم أوامر المحركات. تصل ROS 2 هذه المكونات عبر nodes وtopics وservices وactions.`,
        `يبني SLAM خريطة أثناء تقدير موقع الروبوت. يستخدم ORB-SLAM الخصائص البصرية، ويطابق LiDAR SLAM المسوحات، ويمكن لمرشح كالمان الممتد دمج IMU وodometry وGPS. يستخدم Navigation2 غالباً A* أو NavFn للمسار العام وcostmap للعوائق المحلية.`,
        `تحل ذراع الروبوت inverse kinematics لتحويل الوضعية المطلوبة إلى زوايا المفاصل. يخطط MoveIt الحركة ويفحص التصادم؛ ويقدر نموذج الرؤية نقطة الإمساك وتغلق القبضة بتغذية القوة. يقلل imitation learning والمحاكاة في MuJoCo أو Isaac Sim المخاطر قبل الضبط على روبوت حقيقي.`,
        `العالم المادي لا يملك زر تراجع. حد السرعة والقوة والمساحة والأفعال، وأضف إيقافاً طارئاً وحساسات أمان وinterlocks. اختبر الحساس المغلق والأجسام الساقطة وانقطاع الشبكة ودخول الأشخاص. تساعد السجلات المؤرخة وإعادة الحادث والوضع اليدوي على التعافي.`
    ],
    14: [
        `تشغل Edge AI النموذج على الجهاز الذي ينتج البيانات أو بالقرب منه. يمكن للكاميرا رفض عيب خلال أجزاء من الثانية، ويمكن لحساس الاهتزاز كشف الشذوذ دون اتصال. تختلف ESP32 وRaspberry Pi وJetson وCoral في الذاكرة والطاقة والتسريع؛ يبدأ اختيار العتاد من التأخير وظروف الميدان.`,
        `تحول quantization الأوزان من float32 إلى int8، ويزيل pruning الاتصالات الأقل فائدة، ويدرب knowledge distillation نموذجاً صغيراً من معلم. تستهدف TensorFlow Lite وTensorRT وONNX Runtime وOpenVINO أجهزة مختلفة. قس الدقة وتأخير p50/p95 والذاكرة والحرارة والطاقة، لا حجم الملف فقط.`,
        `في مصنع، يرسل accelerometer نافذة اهتزاز إلى gateway، ويحسب النموذج درجة الشذوذ محلياً ثم ينشر عبر MQTT الدرجة أو مقطعاً مهماً فقط. يجب أن تتضمن الرسالة معرف الجهاز والوقت المتزامن وإصدار firmware وmodel. خزّن محلياً أثناء الانقطاع وافصل القياس عن التحكم وتجنب أوامر المشغل المكررة.`,
        `تحقق من firmware والنماذج الموقعة قبل تشغيلها. استخدم secure boot عند توفره، وبيانات اعتماد فريدة وTLS وتدوير المفاتيح. ابدأ بمجموعة صغيرة، راقب الأعطال والانحراف واحتفظ بخيار rollback؛ إعادة التدريب واختبارات الانحدار جزء من دورة حياة الجهاز.`
    ],
    15: [
        `يؤتمت AutoML التنظيف الأساسي وترميز الفئات واختيار النموذج وهندسة الخصائص المحدودة وضبط المعاملات. تقارن Auto-sklearn وH2O AutoML وAutoGluon مسارات متعددة، وتوفر Vertex AI وAzure Machine Learning تدفقات مُدارة. تناسب Teachable Machine النماذج الأولية الصغيرة، لكن الأتمتة لا تصلح هدفاً خاطئاً.`,
        `حدد ما تمثله الصفوف ومتى يحدث التنبؤ وما الأعمدة المتاحة حينها. في churn لمدة 30 يوماً، سبب الإلغاء اللاحق هو تسرب بيانات. اقسم البيانات الزمنية حسب الوقت وافحص القيم المفقودة والعملاء المكررين وعدم توازن الفئات والوحدات قبل التدريب.`,
        `إذا كان الاحتيال 2% فقط، فقد تفضل لوحة AutoML accuracy نموذجاً يتجاهل الحالات الإيجابية. اختر precision-recall أو ROC-AUC أو F1 أو MAE أو تكلفة العمل، وافحص confusion matrix عند العتبة التشغيلية وقارن بخط أساس بسيط.`,
        `احفظ مجموعة البيانات والإعدادات والمقاييس وأمثلة التنبؤ لإعادة الإنتاج. استخدم SHAP أو feature importance للتحقق من الإشارات المعقولة؛ الارتباط ليس سببية. اختبر النموذج المصدر على بيانات الإنتاج وراقب drift واحتفظ بمراجعة بشرية للقرارات عالية المخاطر. No-code لا يلغي المسؤولية.`
    ]
});

Object.assign(sectionContentTranslations.hi, {
    9: [
        `Reinforcement Learning निर्णयों को Markov Decision Process के रूप में देखता है: agent state देखता है, action चुनता है, फिर reward और अगला state पाता है। Policy π(a|s) action चुनती है और discount factor γ भविष्य के reward को महत्व देता है। Gymnasium के CartPole में pole सीधा रहने पर हर step +1 मिलता है।`,
        `Value-based RL state या state-action pair का दीर्घकालिक मूल्य अनुमानित करता है। Q-learning Q(s,a) को α[r + γ max Q(s′,a′) − Q(s,a)] से अपडेट करता है। ε-greedy कभी-कभी random action आजमाता है; DQN table की जगह neural network, replay buffer और target network इस्तेमाल करता है।`,
        `Robot arm angle जैसे continuous action के लिए policy action distribution निकाल सकती है। REINFORCE episode reward से सीखता है, actor-critic value estimator जोड़ता है और PPO हर update में policy change सीमित करता है। Stable-Baselines3 में PPO, DQN और SAC के उपयोगी implementations हैं।`,
        `गलत reward metric को बेहतर कर सकता है लेकिन असली लक्ष्य विफल हो सकता है। Warehouse robot को केवल speed का reward देने के बजाय collision, energy और waiting penalty दें। कई random seeds और अलग evaluation environment का उपयोग करें; hardware से पहले MuJoCo या Isaac Sim, domain randomization, action limits और emergency stop आजमाएँ।`
    ],
    10: [
        `Discriminative models spam या not spam जैसे labels चुनते हैं, जबकि generative models data patterns सीखकर नए examples बनाते हैं। Autoregressive LLM अगला token predict करते हैं; diffusion models noise धीरे-धीरे हटाकर image बनाते हैं। GPT, Llama, Mistral और Stable Diffusion इनके उदाहरण हैं।`,
        `Byte Pair Encoding जैसा tokenizer text को tokens और फिर embeddings में बदलता है। Self-attention tokens की प्रासंगिकता मापता है और positional encoding क्रम रखता है। Pre-training में next-token error घटाया जाता है; temperature और top-p variety बदलते हैं, factual truth की गारंटी नहीं देते।`,
        `RAG उत्तर से पहले relevant document chunks खोजता है। text-embedding-3 या BGE embeddings को FAISS, pgvector या Chroma से खोजा जा सकता है। Fine-tuning और LoRA repeated formats को स्थिर करते हैं; validated JSON schemas stock या calendar API के function calling को सुरक्षित बनाते हैं।`,
        `Normal cases, edge cases और बिना उत्तर वाले सवालों पर test करें। Groundedness, citation accuracy, latency, tokens per request और human escalation मापें। Hallucination को failure मानें, prompt injection से system instructions बचाएँ, tool permissions सीमित करें और personal data logs में न रखें।`
    ],
    11: [
        `Healthcare AI image triage, risk prediction, documentation और drug research में मदद कर सकती है, clinical judgment को replace नहीं करती। Computer vision X-ray या CT में suspicious area दिखा सकती है और NLP notes से medicines तथा allergies निकाल सकता है। Output में population, purpose और अगला कदम स्पष्ट होना चाहिए।`,
        `Clinical data में delayed labels, incomplete codes और hospitals तथा devices के बीच अंतर होता है। DICOM images और metadata रखता है; MIMIC जैसे datasets को strict access governance चाहिए। Patient और time के अनुसार split करें, leakage रोकें, external validation करें और sensitivity, specificity, PPV तथा calibration report करें।`,
        `Auditable radiology pipeline DICOM de-identify और normalize करके DenseNet या U-Net चला सकती है, फिर review aid के रूप में Grad-CAM दिखा सकती है। Heatmap causal explanation नहीं है। Data, preprocessing, model, threshold और approval versions दर्ज करें तथा age, sex, device और location subgroups test करें।`,
        `Authorized clinician को patient context, confidence और recommendation reject करने का रास्ता दिखना चाहिए। Alert owner और adverse-event reporting तय करें; least privilege, encryption, minimum retention और de-identification लागू करें। Deployment से पहले clinical, security, privacy और compliance teams risk review करें।`
    ],
    12: [
        `ऐसे repeated decision से शुरू करें जिसका परिणाम मापा जा सके, model से नहीं। Demand forecasting, fraud review और factory inspection के लिए baseline, decision owner और service level, false-positive rate, processing time या case cost जैसे KPI चाहिए। Accuracy बढ़ना अपने आप business value नहीं है।`,
        `Transactions, CRM, ERP, sensors और service logs को पहले जोड़ना पड़ सकता है। XGBoost या Prophet promotion और holiday features से demand forecast कर सकते हैं; recommendation system collaborative filtering और stock rules मिला सकता है। OCR invoice पढ़कर PO number और total validate कर सकता है, पर training और production में feature definitions समान हों।`,
        `Production model को data/code versioning, MLflow experiments, pipeline tests और batch या API deployment चाहिए। Input drift, prediction drift, latency, errors और business metrics monitor करें। PSI distribution change दिखा सकता है; delayed labels को original prediction से जोड़ें और rollback तथा manual path रखें।`,
        `Pilot को एक process, एक primary user और स्पष्ट evaluation period तक सीमित रखें। Review करने वाले को important factors दिखाएँ, rejected examples इकट्ठे करें और prohibited data, automation limits तथा accountability तय करें। ROI को baseline या control group से compare करें, seasonality को AI impact न समझें।`
    ],
    13: [
        `Robots RGB-D cameras, LiDAR, IMU, wheel encoders और force-torque sensors को मिलाकर दुनिया का अनुमान लगाते हैं। Perception objects या poses detect करता है, planner path चुनता है और controller motor commands भेजता है। ROS 2 nodes, topics, services और actions से components जोड़ता है।`,
        `SLAM robot की position का अनुमान लगाते हुए map बनाता है। ORB-SLAM visual features, LiDAR SLAM scan matching और Extended Kalman Filter IMU, odometry और GPS को मिला सकता है। ROS 2 Navigation2 global path के लिए A* या NavFn और local obstacles के लिए costmap इस्तेमाल करता है।`,
        `Robot arm inverse kinematics से target pose को joint angles में बदलता है। MoveIt motion planning और collision checking करता है; vision model grasp point बताता है और gripper force feedback से बंद होता है। Imitation learning और MuJoCo या Isaac Sim simulation real robot fine-tuning का जोखिम घटाते हैं।`,
        `Physical world में undo button नहीं होता। Speed, force, workspace और policy actions सीमित करें; emergency stop, safety sensors और interlocks जोड़ें। Blocked sensors, गिरती वस्तु, network loss और workspace में व्यक्ति आने के scenarios test करें। Timestamped logs, incident replay और manual mode recovery में मदद करते हैं।`
    ],
    14: [
        `Edge AI data बनाने वाले device पर या उसके पास model चलाता है। Camera milliseconds में defective product reject कर सकता है और vibration sensor offline भी anomaly पकड़ सकता है। ESP32, Raspberry Pi, Jetson और Coral की RAM, power और accelerator सीमाएँ अलग हैं; hardware latency और field conditions से चुनें।`,
        `Quantization float32 weights को int8 बनाता है, pruning कम उपयोगी connections हटाता है और knowledge distillation छोटे model को teacher से सीखाता है। TensorFlow Lite, TensorRT, ONNX Runtime और OpenVINO अलग targets के लिए हैं। Accuracy, p50/p95 latency, memory, temperature और power मापें, केवल file size नहीं।`,
        `Factory में accelerometer vibration window gateway को भेज सकता है, model local anomaly score निकाल सकता है और MQTT से केवल score या important clip भेज सकता है। Message में device ID, synchronized time, firmware और model version रखें। Outage में buffer करें, duplicate actuator commands रोकें और telemetry तथा control अलग रखें।`,
        `Execution से पहले signed firmware और models verify करें। Hardware support करे तो secure boot, unique credentials, TLS और key rotation लगाएँ। पहले छोटे cohort में release करें, crashes और drift देखें और rollback रखें। Retraining तथा regression tests device lifecycle का हिस्सा हैं।`
    ],
    15: [
        `AutoML basic cleaning, category encoding, model selection, limited feature engineering और hyperparameter tuning automate कर सकता है। Auto-sklearn, H2O AutoML और AutoGluon pipelines compare करते हैं; Vertex AI और Azure Machine Learning managed workflows देते हैं। Teachable Machine छोटे prototypes के लिए ठीक है, गलत target को automation ठीक नहीं कर सकती।`,
        `एक row क्या दिखाती है, prediction कब होती है और उस समय कौन से columns उपलब्ध हैं—पहले तय करें। 30-day churn में बाद में मिलने वाला cancellation reason leakage है। Temporal data को time के अनुसार split करें और missing values, duplicate customers, class imbalance तथा units जाँचें।`,
        `यदि fraud केवल 2% है तो accuracy misleading हो सकती है। Problem के अनुसार precision-recall, ROC-AUC, F1, MAE या business cost चुनें। Operational threshold पर confusion matrix देखें और rules या logistic regression जैसे baseline से तुलना करें।`,
        `Dataset, configuration, metrics और prediction examples save करें ताकि परिणाम reproduce हों। SHAP या feature importance से reasonable signals जाँचें; correlation causation नहीं है। Production data पर exported model retest करें, drift monitor करें और high-risk decisions में human review रखें। No-code में भी owner जरूरी है।`
    ]
});

Object.assign(sectionContentTranslations.pt, {
    9: [
        `Reinforcement Learning modela decisões como um Processo de Decisão de Markov: o agente observa um estado, escolhe uma ação e recebe uma recompensa e um novo estado. A política π(a|s) escolhe ações e γ pondera recompensas futuras. No CartPole do Gymnasium, o agente recebe +1 enquanto a haste permanece em pé.`,
        `RL baseado em valor estima o valor de longo prazo de um estado ou par estado-ação. Q-learning atualiza Q(s,a) com α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy explora ações aleatórias ocasionalmente; DQN troca a tabela por uma rede neural, replay buffer e target network.`,
        `Para ações contínuas, como o ângulo de um braço robótico, a política pode produzir uma distribuição. REINFORCE aprende com recompensas do episódio, actor-critic adiciona um estimador de valor e PPO limita a mudança da política por atualização. Stable-Baselines3 oferece PPO, DQN e SAC.`,
        `Uma recompensa mal definida pode otimizar a métrica e falhar o objetivo real. Em um robô de armazém, penalize colisões, energia e espera, não apenas velocidade. Compare várias seeds em ambiente separado e use MuJoCo ou Isaac Sim, randomização de domínio, limites de ação e parada de emergência antes do hardware.`
    ],
    10: [
        `Modelos discriminativos escolhem rótulos, como spam ou não spam; modelos generativos aprendem padrões para criar novos exemplos. LLMs autoregressivos preveem o próximo token e modelos de difusão removem ruído gradualmente para criar imagens. GPT, Llama, Mistral e Stable Diffusion são exemplos.`,
        `Um tokenizer como Byte Pair Encoding transforma texto em tokens e embeddings. Self-attention calcula a relevância entre tokens e positional encoding preserva a ordem. O pré-treinamento reduz o erro do próximo token; temperature e top-p alteram variedade, não garantem fatos.`,
        `RAG recupera trechos relevantes antes da resposta do LLM. Embeddings de text-embedding-3 ou BGE podem ser buscados com FAISS, pgvector ou Chroma. Fine-tuning e LoRA estabilizam formatos repetidos, enquanto schemas JSON validados tornam function calling mais seguro.`,
        `Teste casos normais, limites e perguntas sem resposta. Meça groundedness, precisão das citações, latência, tokens por pedido e escalamento humano. Trate hallucination como falha, proteja instruções contra prompt injection, limite ferramentas, redija dados pessoais e mantenha segredos fora dos logs.`
    ],
    11: [
        `A IA na saúde pode apoiar triagem de imagens, previsão de risco, documentação e pesquisa de medicamentos, mas não substitui o julgamento clínico. Computer vision pode marcar áreas suspeitas em X-ray ou CT, enquanto NLP extrai medicamentos e alergias. A saída deve indicar população, objetivo e próxima ação.`,
        `Dados clínicos têm rótulos atrasados, códigos incompletos e diferenças entre hospitais e dispositivos. DICOM armazena imagens e metadados; bases como MIMIC exigem governança rigorosa. Divida por paciente e tempo, evite leakage, valide externamente e reporte sensitivity, specificity, PPV e calibration.`,
        `Um pipeline radiológico auditável pode desidentificar DICOM, normalizar imagens, executar DenseNet ou U-Net e exibir Grad-CAM como apoio à revisão. Heatmap não é explicação causal. Registre versões de dados, preprocessing, modelo, threshold e aprovação; teste subgrupos por idade, sexo, dispositivo e local.`,
        `Um profissional autorizado deve ver contexto, confiança e uma forma de rejeitar a recomendação. Defina o responsável pelos alertas e eventos adversos; aplique menor privilégio, criptografia, retenção mínima e desidentificação. Antes do deploy, envolva equipes clínicas, de segurança, privacidade e compliance.`
    ],
    12: [
        `Comece por uma decisão repetida com resultado mensurável, não pelo modelo. Previsão de demanda, revisão de fraude e inspeção visual precisam de baseline, responsável e KPIs como service level, falsos positivos, tempo ou custo por caso. Mais accuracy não significa automaticamente mais valor.`,
        `Dados de transações, CRM, ERP, sensores e logs de serviço precisam ser integrados. XGBoost ou Prophet podem prever demanda com promoções e feriados; recomendações podem juntar collaborative filtering e regras de estoque. OCR extrai faturas e valida PO e total, com as mesmas features no treino e na produção.`,
        `Um modelo em produção precisa de versionamento, experimentos no MLflow, testes de pipeline e deploy batch ou API. Monitore input drift, prediction drift, latência, erros e métricas de negócio. PSI sinaliza mudanças de distribuição; relacione rótulos atrasados às previsões e prepare rollback e caminho manual.`,
        `Limite o piloto a um processo, um usuário principal e um período definido. Mostre fatores importantes, colete rejeições e defina dados proibidos, limites de automação e responsabilidade. Compare ROI com baseline ou controle para não confundir sazonalidade com impacto de IA.`
    ],
    13: [
        `Robôs combinam câmeras RGB-D, LiDAR, IMU, encoders de roda e sensores de força para estimar o ambiente. Perception detecta objetos, planner escolhe a trajetória e controller envia comandos ao motor. ROS 2 conecta componentes por nodes, topics, services e actions.`,
        `SLAM cria um mapa enquanto estima a posição do robô. ORB-SLAM usa recursos visuais, LiDAR SLAM combina scans e um Extended Kalman Filter pode fundir IMU, odometria e GPS. Navigation2 usa A* ou NavFn no caminho global e costmaps para obstáculos locais.`,
        `Um braço resolve inverse kinematics para converter uma pose em ângulos. MoveIt planeja e verifica colisões; um modelo visual estima o grasp point e a garra usa feedback de força. Imitation learning e simulação em MuJoCo ou Isaac Sim reduzem risco antes do ajuste no robô.`,
        `O mundo físico não tem desfazer. Limite velocidade, força, espaço e ações; inclua parada de emergência, sensores de segurança e interlocks. Teste sensores bloqueados, objetos caindo, perda de rede e pessoas na área. Logs com timestamp, replay e modo manual ajudam na recuperação.`
    ],
    14: [
        `Edge AI executa o modelo no dispositivo que produz os dados ou perto dele. Uma câmera pode rejeitar um defeito em milissegundos e um sensor de vibração detectar anomalias offline. ESP32, Raspberry Pi, Jetson e Coral têm limites diferentes; escolha pelo alvo de latência e pelas condições reais.`,
        `Quantization converte pesos float32 para int8, pruning remove conexões e knowledge distillation treina um modelo menor com um professor. TensorFlow Lite, TensorRT, ONNX Runtime e OpenVINO atendem dispositivos diferentes. Meça acurácia, latência p50/p95, memória, temperatura e energia.`,
        `Em uma fábrica, o acelerômetro envia uma janela de vibração ao gateway, o modelo calcula o score local e MQTT envia apenas o score ou um trecho importante. Inclua ID, timestamp sincronizado, versão do firmware e do modelo. Faça buffer durante quedas, evite comandos duplicados e separe telemetria de controle.`,
        `Verifique firmware e modelos assinados antes da execução. Use secure boot, credenciais únicas, TLS e rotação de chaves quando possível. Faça rollout para uma pequena coorte, monitore crashes e drift e mantenha rollback. Retreinamento e testes de regressão fazem parte do ciclo de vida.`
    ],
    15: [
        `AutoML automatiza limpeza básica, encoding, seleção de modelos, feature engineering limitado e tuning. Auto-sklearn, H2O AutoML e AutoGluon comparam pipelines; Vertex AI e Azure Machine Learning oferecem fluxos gerenciados. Teachable Machine serve para protótipos, mas automação não corrige um alvo ruim.`,
        `Defina o que uma linha representa, quando a previsão ocorre e quais colunas existem nesse momento. Em churn de 30 dias, o motivo de cancelamento posterior é leakage. Separe dados temporais por data e verifique missing values, duplicatas, desbalanceamento e unidades.`,
        `Com apenas 2% de fraude, accuracy pode premiar um modelo que ignora positivos. Escolha precision-recall, ROC-AUC, F1, MAE ou custo de negócio, veja a confusion matrix no threshold operacional e compare com regras ou regressão logística.`,
        `Guarde dataset, configuração, métricas e exemplos para reproduzir resultados. Use SHAP ou feature importance para conferir sinais razoáveis; correlação não é causalidade. Reteste o modelo exportado com dados reais, monitore drift e mantenha revisão humana em decisões de risco. No-code também precisa de responsável.`
    ]
});

Object.assign(sectionContentTranslations.fr, {
    9: [
        `L'apprentissage par renforcement modélise les décisions comme un processus de décision de Markov : l'agent observe un état, choisit une action, puis reçoit une récompense et un nouvel état. La politique π(a|s) choisit les actions et γ pondère les récompenses futures. Dans CartPole de Gymnasium, l'agent reçoit +1 tant que la barre reste droite.`,
        `Le RL fondé sur la valeur estime la valeur à long terme d'un état ou d'une paire état-action. Q-learning met à jour Q(s,a) avec α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy explore parfois une action aléatoire ; DQN remplace la table par un réseau neuronal avec replay buffer et target network.`,
        `Pour les actions continues, comme l'angle d'un bras robotique, la politique peut produire une distribution d'actions. REINFORCE apprend avec la récompense de l'épisode, actor-critic ajoute un estimateur de valeur et PPO limite le changement de politique à chaque mise à jour. Stable-Baselines3 fournit PPO, DQN et SAC.`,
        `Une mauvaise récompense peut optimiser le score tout en ratant l'objectif réel. Pour un robot d'entrepôt, ajoutez des pénalités de collision, d'énergie et d'attente, pas seulement une récompense de vitesse. Comparez plusieurs seeds dans un environnement séparé et utilisez MuJoCo ou Isaac Sim, la randomisation de domaine, des limites d'action et un arrêt d'urgence.`
    ],
    10: [
        `Les modèles discriminatifs choisissent des étiquettes comme spam ou non-spam ; les modèles génératifs apprennent les motifs des données pour créer de nouveaux exemples. Les LLM autorégressifs prédisent le token suivant et les modèles de diffusion retirent progressivement le bruit pour former une image. GPT, Llama, Mistral et Stable Diffusion sont des exemples.`,
        `Un tokenizer comme Byte Pair Encoding transforme le texte en tokens puis en embeddings. Self-attention mesure la pertinence entre tokens et positional encoding conserve l'ordre. Le pré-entraînement réduit l'erreur du token suivant ; temperature et top-p modifient la variété, sans garantir la véracité.`,
        `RAG récupère des extraits pertinents avant la réponse du LLM. Les embeddings de text-embedding-3 ou BGE peuvent être recherchés avec FAISS, pgvector ou Chroma. Fine-tuning et LoRA stabilisent les formats répétés, tandis que des schémas JSON validés sécurisent le function calling pour un stock ou un calendrier.`,
        `Testez les cas normaux, limites et les questions sans réponse. Mesurez groundedness, précision des citations, latence, tokens par requête et escalade humaine. Traitez l'hallucination comme un vrai échec, protégez les instructions contre prompt injection, limitez les outils, masquez les données personnelles et excluez les secrets des logs.`
    ],
    11: [
        `L'IA médicale peut aider au triage d'images, à la prédiction des risques, à la documentation et à la recherche de médicaments, mais elle ne remplace pas le jugement clinique. Computer vision peut signaler une zone suspecte sur une radiographie ou un CT, tandis que NLP extrait les médicaments et allergies. La sortie doit préciser la population, l'objectif et la prochaine action.`,
        `Les données cliniques contiennent des labels retardés, des codes incomplets et des différences entre hôpitaux et appareils. DICOM conserve les images et leurs métadonnées ; des jeux comme MIMIC exigent une gouvernance stricte. Séparez par patient et par temps, évitez le leakage, validez extérieurement et rapportez sensitivity, specificity, PPV et calibration.`,
        `Un pipeline radiologique auditable peut désidentifier DICOM, normaliser les images, exécuter DenseNet ou U-Net et afficher Grad-CAM pour aider la revue. Une heatmap n'est pas une explication causale. Versionnez les données, le preprocessing, le modèle, le seuil et l'approbation, puis testez les sous-groupes par âge, sexe, appareil et lieu.`,
        `Un professionnel autorisé doit voir le contexte, la confiance et un moyen de refuser la recommandation. Définissez le responsable des alertes et des événements indésirables ; appliquez le moindre privilège, le chiffrement, une rétention minimale et la désidentification. Avant le déploiement, réunissez les équipes clinique, sécurité, vie privée et conformité.`
    ],
    12: [
        `Commencez par une décision répétée dont le résultat est mesurable, pas par un modèle favori. Prévision de demande, revue de fraude et inspection visuelle nécessitent une baseline, un responsable et des KPI comme le niveau de service, le taux de faux positifs, le temps ou le coût par cas. Une meilleure accuracy ne suffit pas à créer de la valeur.`,
        `Les données de transactions, CRM, ERP, capteurs et logs doivent souvent être réunies. XGBoost ou Prophet peuvent prévoir la demande avec promotions et jours fériés ; les recommandations combinent collaborative filtering et règles de stock. OCR extrait les factures puis vérifie PO et total, avec les mêmes features en entraînement et en production.`,
        `Un modèle de production demande le versionnage, le suivi des expériences dans MLflow, des tests de pipeline et un déploiement batch ou API. Surveillez input drift, prediction drift, latence, erreurs et métriques métier. PSI signale un changement de distribution ; reliez les labels tardifs aux prédictions et prévoyez rollback et procédure manuelle.`,
        `Un bon pilote se limite à un processus, un utilisateur principal et une période définie. Montrez les facteurs importants, collectez les rejets et définissez données interdites, limites d'automatisation et responsabilités. Comparez le ROI à une baseline ou à un groupe témoin pour ne pas confondre saisonnalité et impact de l'IA.`
    ],
    13: [
        `Les robots combinent caméras RGB-D, LiDAR, IMU, encodeurs de roues et capteurs force-couple pour estimer le monde. La perception détecte les objets, le planificateur choisit la trajectoire et le contrôleur envoie les commandes moteur. ROS 2 relie les composants via nodes, topics, services et actions.`,
        `SLAM construit une carte tout en estimant la position du robot. ORB-SLAM utilise des points visuels, LiDAR SLAM associe des scans et un filtre de Kalman étendu peut fusionner IMU, odométrie et GPS. Navigation2 utilise souvent A* ou NavFn pour le chemin global et des costmaps pour les obstacles locaux.`,
        `Un bras robotique résout l'inverse kinematics pour transformer une pose cible en angles articulaires. MoveIt planifie le mouvement et vérifie les collisions ; un modèle visuel estime le point de prise et la pince utilise le retour de force. Imitation learning et simulation avec MuJoCo ou Isaac Sim réduisent le risque avant le réglage sur robot.`,
        `Le monde physique n'a pas de bouton annuler. Limitez vitesse, force, espace de travail et actions ; ajoutez arrêt d'urgence, capteurs de sécurité et interlocks. Testez capteurs masqués, objets tombés, perte réseau et présence humaine. Les logs horodatés, le replay d'incidents et le mode manuel facilitent la récupération.`
    ],
    14: [
        `Edge AI exécute le modèle sur l'appareil qui produit les données ou à proximité. Une caméra peut rejeter un défaut en quelques millisecondes et un capteur de vibration détecter une anomalie hors ligne. ESP32, Raspberry Pi, Jetson et Coral ont des limites différentes ; choisissez selon la latence et le terrain.`,
        `La quantification convertit les poids float32 en int8, le pruning retire des connexions et la knowledge distillation entraîne un petit modèle avec un modèle enseignant. TensorFlow Lite, TensorRT, ONNX Runtime et OpenVINO ciblent des appareils différents. Mesurez précision, latence p50/p95, mémoire, température et énergie, pas seulement la taille du fichier.`,
        `Dans une usine, un accéléromètre peut envoyer une fenêtre de vibration à une passerelle, calculer localement le score d'anomalie et publier via MQTT uniquement le score ou un extrait important. Incluez ID, heure synchronisée, versions firmware et modèle. Utilisez un buffer pendant les pannes, évitez les commandes dupliquées et séparez télémétrie et contrôle.`,
        `Vérifiez les firmwares et modèles signés avant exécution. Utilisez secure boot si possible, identifiants uniques, TLS et rotation des clés. Déployez d'abord sur une petite cohorte, surveillez crashes et drift et gardez rollback. Réentraînement et tests de régression font partie du cycle de vie.`
    ],
    15: [
        `AutoML automatise le nettoyage de base, l'encodage, la sélection de modèles, une feature engineering limitée et le tuning. Auto-sklearn, H2O AutoML et AutoGluon comparent des pipelines ; Vertex AI et Azure Machine Learning proposent des workflows gérés. Teachable Machine convient aux prototypes, mais l'automatisation ne corrige pas une mauvaise cible.`,
        `Définissez ce que représente une ligne, quand la prédiction est faite et quelles colonnes existent alors. Pour un churn à 30 jours, le motif d'annulation apparu après est une fuite de données. Séparez les données temporelles par date et vérifiez valeurs manquantes, doublons, déséquilibre et unités.`,
        `Avec seulement 2 % de fraude, accuracy peut favoriser un modèle qui ignore les positifs. Choisissez precision-recall, ROC-AUC, F1, MAE ou coût métier, examinez la matrice de confusion au seuil opérationnel et comparez à des règles ou une régression logistique.`,
        `Conservez dataset, configuration, métriques et exemples pour reproduire les résultats. Utilisez SHAP ou feature importance pour vérifier les signaux ; corrélation ne signifie pas causalité. Retestez le modèle exporté sur des données de production, surveillez le drift et gardez une revue humaine pour les décisions à risque. No-code exige aussi un responsable.`
    ]
});

Object.assign(sectionContentTranslations.de, {
    9: [
        `Reinforcement Learning modelliert Entscheidungen als Markov-Entscheidungsprozess: Der Agent beobachtet einen Zustand, wählt eine Aktion und erhält eine Belohnung sowie einen neuen Zustand. Die Policy π(a|s) wählt Aktionen, der Diskontfaktor γ gewichtet zukünftige Belohnungen. In Gymnasium CartPole gibt es +1, solange die Stange aufrecht bleibt.`,
        `Value-based RL schätzt den langfristigen Wert eines Zustands oder Zustand-Aktions-Paares. Q-learning aktualisiert Q(s,a) mit α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy probiert gelegentlich zufällige Aktionen; DQN ersetzt die Tabelle durch ein neuronales Netz mit replay buffer und target network.`,
        `Für kontinuierliche Aktionen wie den Winkel eines Roboterarms kann die Policy eine Aktionsverteilung ausgeben. REINFORCE lernt aus Episodenbelohnungen, actor-critic ergänzt einen Wertschätzer und PPO begrenzt die Policy-Änderung pro Update. Stable-Baselines3 bietet PPO-, DQN- und SAC-Implementierungen.`,
        `Eine falsch entworfene Belohnung kann die Metrik optimieren und das echte Ziel verfehlen. Ein Lagerroboter braucht neben Geschwindigkeit auch Strafen für Kollisionen, Energie und Wartezeit. Vergleichen Sie mehrere Seeds in einer getrennten Umgebung und nutzen Sie vor echter Hardware MuJoCo oder Isaac Sim, Domain Randomization, Aktionsgrenzen und einen Not-Aus.`
    ],
    10: [
        `Diskriminative Modelle wählen Labels wie Spam oder kein Spam; generative Modelle lernen Datenmuster und erzeugen neue Beispiele. Autoregressive LLMs sagen das nächste Token voraus, Diffusionsmodelle entfernen schrittweise Rauschen und bilden Bilder. GPT, Llama, Mistral und Stable Diffusion sind Beispiele.`,
        `Ein Tokenizer wie Byte Pair Encoding macht aus Text Tokens und daraus Embeddings. Self-Attention misst die Relevanz zwischen Tokens, positional encoding bewahrt die Reihenfolge. Beim Pretraining wird der Fehler des nächsten Tokens minimiert; temperature und top-p ändern die Vielfalt, nicht die Faktentreue.`,
        `RAG ruft relevante Dokumentabschnitte ab, bevor das LLM antwortet. Embeddings aus text-embedding-3 oder BGE lassen sich mit FAISS, pgvector oder Chroma suchen. Fine-tuning und LoRA stabilisieren wiederholte Formate, validierte JSON-Schemas machen Function Calling für Lager- oder Kalender-APIs sicherer.`,
        `Testen Sie normale Fälle, Grenzfälle und Fragen ohne Antwort. Messen Sie Groundedness, Zitiergenauigkeit, Latenz, Tokens pro Anfrage und Eskalationen. Behandeln Sie Halluzinationen als Fehler, schützen Sie Systemanweisungen vor Prompt Injection, begrenzen Sie Tool-Rechte, redigieren Sie personenbezogene Daten und speichern Sie keine Geheimnisse in Logs.`
    ],
    11: [
        `KI im Gesundheitswesen kann Bildtriage, Risikoprognosen, Dokumentation und Arzneimittelforschung unterstützen, ersetzt aber keine klinische Beurteilung. Computer Vision kann verdächtige Bereiche in Röntgen oder CT markieren, NLP Medikamente und Allergien aus Notizen extrahieren. Die Ausgabe sollte Population, Zweck und nächste Maßnahme nennen.`,
        `Klinische Daten haben verspätete Labels, unvollständige Codes und Unterschiede zwischen Kliniken und Geräten. DICOM speichert Bilder mit Metadaten; Datensätze wie MIMIC brauchen strenge Zugriffskontrollen. Teilen Sie nach Patient und Zeit, vermeiden Sie Leakage, validieren Sie extern und berichten Sie Sensitivität, Spezifität, PPV und Kalibrierung.`,
        `Eine auditierbare Radiologie-Pipeline kann DICOM de-identifizieren, Bilder normalisieren, DenseNet oder U-Net ausführen und Grad-CAM als Review-Hilfe anzeigen. Eine Heatmap ist keine kausale Erklärung. Versionieren Sie Daten, Preprocessing, Modell, Threshold und Freigabe und prüfen Sie Untergruppen nach Alter, Geschlecht, Gerät und Ort.`,
        `Berechtigte Fachkräfte müssen Kontext, Konfidenz und eine Möglichkeit zum Ablehnen sehen. Legen Sie Alert-Verantwortung und die Meldung unerwünschter Ereignisse fest; nutzen Sie Least Privilege, Verschlüsselung, kurze Aufbewahrung und De-Identifizierung. Vor dem Deployment prüfen klinische, Sicherheits-, Datenschutz- und Compliance-Teams gemeinsam die Risiken.`
    ],
    12: [
        `Beginnen Sie mit einer wiederkehrenden Entscheidung und messbarem Ergebnis, nicht mit einem Lieblingsmodell. Nachfrageprognose, Betrugsprüfung und visuelle Inspektion brauchen eine Baseline, einen Verantwortlichen und KPIs wie Service-Level, Fehlalarmrate, Bearbeitungszeit oder Kosten pro Fall. Mehr Accuracy ist nicht automatisch Geschäftswert.`,
        `Transaktions-, CRM-, ERP-, Sensor- und Servicelog-Daten müssen oft zuerst verbunden werden. XGBoost oder Prophet können Nachfrage mit Werbe- und Feiertagsmerkmalen prognostizieren; Empfehlungen kombinieren Collaborative Filtering mit Bestandsregeln. OCR liest Rechnungen und prüft PO-Nummer und Summe, mit identischen Features in Training und Produktion.`,
        `Ein Produktionsmodell braucht Versionierung, MLflow-Experimente, Pipeline-Tests und ein Batch- oder API-Deployment. Überwachen Sie Input Drift, Prediction Drift, Latenz, Fehler und Geschäftsmetriken. PSI zeigt Verteilungsänderungen; verspätete Labels müssen mit der ursprünglichen Prognose verbunden sein, Rollback und manueller Ablauf vorbereitet werden.`,
        `Ein guter Pilot beschränkt sich auf einen Prozess, einen Hauptnutzer und einen definierten Zeitraum. Zeigen Sie wichtige Faktoren, sammeln Sie Ablehnungen und definieren Sie verbotene Daten, Automatisierungsgrenzen und Verantwortung. Vergleichen Sie ROI mit Baseline oder Kontrollgruppe, damit Saisonalität nicht als KI-Effekt erscheint.`
    ],
    13: [
        `Roboter kombinieren RGB-D-Kameras, LiDAR, IMU, Radencoder und Kraft-Momenten-Sensoren, um die Umgebung zu schätzen. Wahrnehmung erkennt Objekte, der Planner wählt eine Bahn und der Controller sendet Motorbefehle. ROS 2 verbindet Komponenten über Nodes, Topics, Services und Actions.`,
        `SLAM erstellt eine Karte und schätzt gleichzeitig die Roboterposition. ORB-SLAM nutzt Bildmerkmale, LiDAR-SLAM vergleicht Scans und ein Extended Kalman Filter kann IMU, Odometrie und GPS verbinden. Navigation2 verwendet oft A* oder NavFn für globale Wege und Costmaps für lokale Hindernisse.`,
        `Ein Roboterarm löst inverse Kinematik, um eine Zielpose in Gelenkwinkel umzuwandeln. MoveIt plant Bewegungen und prüft Kollisionen; ein Bildmodell schätzt den Greifpunkt und der Greifer nutzt Kraftfeedback. Imitation Learning und Simulation mit MuJoCo oder Isaac Sim senken das Risiko vor dem Feintuning am Roboter.`,
        `Die physische Welt hat keine Undo-Taste. Begrenzen Sie Geschwindigkeit, Kraft, Arbeitsbereich und Policy-Aktionen; ergänzen Sie Not-Aus, Sicherheitssensoren und Interlocks. Testen Sie verdeckte Sensoren, fallende Objekte, Netzausfall und Personen im Arbeitsbereich. Zeitgestempelte Logs, Incident-Replay und manueller Modus helfen bei der Wiederherstellung.`
    ],
    14: [
        `Edge AI führt Modelle auf oder nahe dem Gerät aus, das die Daten erzeugt. Eine Kamera kann Fehler in Millisekunden aussortieren, ein Vibrationssensor Anomalien offline erkennen. ESP32, Raspberry Pi, Jetson und Coral unterscheiden sich bei RAM, Energie und Beschleunigern; wählen Sie nach Latenzziel und Umgebung.`,
        `Quantisierung macht aus Float32-Gewichten Int8, Pruning entfernt wenig wichtige Verbindungen und Knowledge Distillation trainiert ein kleines Modell mit einem Lehrer. TensorFlow Lite, TensorRT, ONNX Runtime und OpenVINO zielen auf unterschiedliche Geräte. Messen Sie Genauigkeit, p50/p95-Latenz, Speicher, Temperatur und Energie, nicht nur Dateigröße.`,
        `In einer Fabrik sendet ein Beschleunigungssensor ein Vibrationsfenster an ein Gateway, das Modell berechnet lokal den Anomaliescore und MQTT überträgt nur Score oder wichtigen Ausschnitt. Nachrichtdaten brauchen Geräte-ID, synchronisierte Zeit, Firmware- und Modellversion. Puffern Sie bei Ausfällen, verhindern Sie doppelte Aktorbefehle und trennen Sie Telemetrie und Steuerung.`,
        `Prüfen Sie signierte Firmware und Modelle vor der Ausführung. Nutzen Sie Secure Boot, eindeutige Gerätezugänge, TLS und Schlüsselrotation, wenn möglich. Starten Sie mit einer kleinen Gruppe, überwachen Sie Abstürze und Drift und halten Sie Rollback bereit. Retraining und Regressionstests gehören zum Lebenszyklus.`
    ],
    15: [
        `AutoML automatisiert grundlegende Bereinigung, Kategorienkodierung, Modellauswahl, begrenztes Feature Engineering und Hyperparameter-Tuning. Auto-sklearn, H2O AutoML und AutoGluon vergleichen Pipelines; Vertex AI und Azure Machine Learning bieten verwaltete Abläufe. Teachable Machine eignet sich für kleine Prototypen, korrigiert aber kein falsches Ziel.`,
        `Definieren Sie, was eine Zeile darstellt, wann vorhergesagt wird und welche Spalten dann verfügbar sind. Bei 30-Tage-Churn ist ein späterer Kündigungsgrund Leakage. Teilen Sie Zeitdaten nach Datum und prüfen Sie fehlende Werte, Duplikate, Klassenungleichgewicht und Einheiten vor dem Training.`,
        `Bei nur 2 % Betrug kann Accuracy ein Modell belohnen, das positive Fälle ignoriert. Wählen Sie Precision-Recall, ROC-AUC, F1, MAE oder Geschäftskosten, prüfen Sie die Confusion Matrix am operativen Threshold und vergleichen Sie mit Regeln oder logistischer Regression.`,
        `Speichern Sie Datensatz, Konfiguration, Metriken und Vorhersagebeispiele für Reproduzierbarkeit. Nutzen Sie SHAP oder Feature Importance und verwechseln Sie Korrelation nicht mit Ursache. Testen Sie exportierte Modelle mit Produktionsdaten, überwachen Sie Drift und behalten Sie menschliche Prüfung bei risikoreichen Entscheidungen. No-Code braucht weiterhin Verantwortung.`
    ]
});

Object.assign(sectionContentTranslations.ja, {
    9: [
        `強化学習（RL）は意思決定をマルコフ決定過程として扱います。エージェントは状態を観測して行動を選び、報酬と次の状態を受け取ります。方策 π(a|s) が行動を選び、割引率 γ が将来の報酬を重み付けします。Gymnasium の CartPole では棒が立っている間、毎ステップ +1 です。`,
        `価値ベースの RL は状態や状態・行動ペアの長期的な価値を推定します。Q-learning は α[r + γ max Q(s′,a′) − Q(s,a)] で Q を更新します。ε-greedy は時々ランダムな行動を試し、DQN は表をニューラルネットワークに置き換え、replay buffer と target network を使います。`,
        `ロボットアームの角度のような連続行動では、方策が行動分布を出力できます。REINFORCE はエピソード報酬から学習し、actor-critic は価値推定器を加え、PPO は更新ごとの方策変化を制限します。Stable-Baselines3 には PPO、DQN、SAC の実装があります。`,
        `報酬設計を誤ると、数値だけを最適化して本来の目的を失います。倉庫ロボットには速度だけでなく衝突、エネルギー、待ち時間のペナルティを加えます。複数の random seed と別の評価環境を使い、実機の前に MuJoCo や Isaac Sim、行動制限、非常停止を検証します。`
    ],
    10: [
        `識別モデルはスパムかどうかのようなラベルを選び、生成モデルはデータのパターンを学習して新しい例を作ります。自己回帰型 LLM は次の token を予測し、拡散モデルはノイズを段階的に除去して画像を作ります。GPT、Llama、Mistral、Stable Diffusion が例です。`,
        `Byte Pair Encoding などの tokenizer は文章を token に分け、embedding に変換します。Self-attention は token 間の関係を計算し、positional encoding は順序を保持します。事前学習は次 token の誤差を減らしますが、temperature と top-p は多様性を変えるだけで事実性を保証しません。`,
        `RAG は LLM が答える前に関連文書の断片を検索します。text-embedding-3 や BGE の embedding は FAISS、pgvector、Chroma で検索できます。Fine-tuning と LoRA は繰り返し形式を安定させ、検証済み JSON schema は在庫やカレンダー API の function calling を安全にします。`,
        `通常ケース、境界ケース、答えがない質問でテストします。Groundedness、引用精度、遅延、リクエスト当たり token、人的エスカレーションを測定します。Hallucination を障害として扱い、prompt injection から指示を守り、tool 権限を制限し、個人情報と秘密をログに残しません。`
    ],
    11: [
        `医療 AI は画像トリアージ、リスク予測、文書化、創薬研究を支援できますが、臨床判断の代わりにはなりません。Computer vision は X 線や CT の疑わしい領域を示し、NLP は記録から薬やアレルギーを抽出できます。出力には対象集団、目的、次の行動を明記します。`,
        `臨床データには遅れて付くラベル、不完全なコード、病院や機器の差があります。DICOM は画像とメタデータを保存し、MIMIC などは厳格なアクセス管理を必要とします。患者と時間で分割し、leakage を防ぎ、外部検証を行い、sensitivity、specificity、PPV、calibration を報告します。`,
        `監査可能な放射線 pipeline は DICOM の匿名化、画像正規化、DenseNet や U-Net の推論、レビュー補助の Grad-CAM を行えます。ヒートマップは因果説明ではありません。データ、前処理、モデル、threshold、承認の版を記録し、年齢、性別、機器、場所ごとに評価します。`,
        `権限を持つ医療者には患者の文脈、確信度、推薦を拒否する方法が必要です。アラートの担当者と有害事象の報告方法を定義し、最小権限、暗号化、最小保持、匿名化を適用します。導入前に臨床、安全、プライバシー、コンプライアンスを含めて審査します。`
    ],
    12: [
        `好きなモデルからではなく、繰り返し発生し結果を測れる意思決定から始めます。需要予測、詐欺審査、工場検査には baseline、担当者、service level、false-positive rate、処理時間、案件コストなどの KPI が必要です。accuracy の向上だけでは価値になりません。`,
        `取引、CRM、ERP、センサー、サービスログは先に統合する必要があります。XGBoost や Prophet は販促や休日の特徴量で需要を予測でき、推薦は collaborative filtering と在庫ルールを組み合わせられます。OCR は請求書を読み、学習時と本番で同じ特徴定義を使って PO と合計を検証します。`,
        `本番モデルにはデータとコードの版管理、MLflow の実験記録、pipeline テスト、batch または API のデプロイが必要です。input drift、prediction drift、遅延、エラー、業務指標を監視します。PSI で分布変化を検知し、遅延ラベルを元の予測に戻せるようにして rollback と手動運用を備えます。`,
        `よい pilot は一つの業務、一人の主利用者、明確な評価期間に絞ります。重要な要因を示し、拒否例を集め、禁止データ、自動化の境界、責任者を決めます。ROI は baseline や対照群と比較し、季節性を AI の効果と誤認しないようにします。`
    ],
    13: [
        `ロボットは RGB-D カメラ、LiDAR、IMU、車輪 encoder、力・トルクセンサーを組み合わせて環境を推定します。認識が物体や姿勢を検出し、planner が経路を選び、controller がモーター命令を送ります。ROS 2 は node、topic、service、action で構成要素を接続します。`,
        `SLAM はロボットの位置を推定しながら地図を作ります。ORB-SLAM は視覚特徴、LiDAR SLAM は scan matching を使い、拡張カルマンフィルターは IMU、オドメトリ、GPS を融合できます。Navigation2 は全体経路に A* や NavFn、局所障害物に costmap を使います。`,
        `ロボットアームは inverse kinematics で目標姿勢を関節角に変換します。MoveIt は動作計画と衝突判定を行い、視覚モデルは grasp point を推定し、グリッパーは力フィードバックで閉じます。MuJoCo や Isaac Sim の simulation と imitation learning で実機調整のリスクを下げます。`,
        `物理世界には undo ボタンがありません。速度、力、作業領域、方策の行動を制限し、非常停止、安全センサー、interlock を追加します。センサー遮蔽、物体落下、ネットワーク断、人の侵入をテストし、timestamp 付きログ、incident replay、手動モードを用意します。`
    ],
    14: [
        `Edge AI はデータを生成する機器上、またはその近くでモデルを実行します。カメラは数ミリ秒で不良品を拒否でき、振動センサーはオフラインでも異常を検出できます。ESP32、Raspberry Pi、Jetson、Coral は RAM、電力、アクセラレータが異なるため、遅延と現場条件から選びます。`,
        `Quantization は float32 を int8 に変え、pruning は不要な接続を取り除き、knowledge distillation は教師モデルから小型モデルを学習します。TensorFlow Lite、TensorRT、ONNX Runtime、OpenVINO は異なる機器を対象にします。精度、p50/p95 遅延、メモリ、温度、電力を測定します。`,
        `工場では加速度計が振動 window を gateway に送り、モデルがローカルで異常 score を計算し、MQTT で score や重要 clip だけを送れます。device ID、同期時刻、firmware 版、model 版を含めます。切断時は buffer を使い、重複する actuator 命令を防ぎ、telemetry と control を分けます。`,
        `実行前に署名済み firmware と model を検証します。対応機器では secure boot、固有 credential、TLS、鍵のローテーションを使います。小さな cohort から段階的に配布し、crash と drift を監視して rollback を残します。再学習と回帰テストも lifecycle の一部です。`
    ],
    15: [
        `AutoML は基本的なクリーニング、カテゴリ encoding、モデル選択、限定的な feature engineering、hyperparameter tuning を自動化します。Auto-sklearn、H2O AutoML、AutoGluon は pipeline を比較し、Vertex AI と Azure Machine Learning は管理された workflow を提供します。Teachable Machine は小さな prototype に向きますが、間違った target は直せません。`,
        `一行が何を表すか、いつ予測するか、その時点で使える列は何かを決めます。30 日以内の churn 予測で後から出るキャンセル理由を使うと leakage です。時系列データは時間で分割し、欠損、重複顧客、クラス不均衡、単位を確認します。`,
        `詐欺が取引の 2% しかないと、accuracy は陽性を無視するモデルを高く評価します。precision-recall、ROC-AUC、F1、MAE、業務コストを選び、実際の threshold で confusion matrix を確認し、ルールや logistic regression と比較します。`,
        `dataset、設定、指標、予測例を保存して再現できるようにします。SHAP や feature importance で合理的な信号を確認し、相関を因果と混同しません。production data で再テストし、drift を監視し、高リスク判断には人のレビューを残します。No-code でも責任者は必要です。`
    ]
});

Object.assign(sectionContentTranslations.ko, {
    9: [
        `강화학습은 의사결정을 마르코프 결정 과정으로 모델링합니다. 에이전트가 상태를 관찰하고 행동을 선택하면 보상과 다음 상태를 받습니다. 정책 π(a|s)가 행동을 고르고 할인율 γ가 미래 보상의 비중을 정합니다. Gymnasium CartPole에서는 막대가 서 있는 동안 매 단계 +1을 받습니다.`,
        `가치 기반 RL은 상태 또는 상태-행동 쌍의 장기 가치를 추정합니다. Q-learning은 α[r + γ max Q(s′,a′) − Q(s,a)]로 Q를 업데이트합니다. ε-greedy는 가끔 무작위 행동을 시도하고, DQN은 표 대신 신경망과 replay buffer, target network를 사용합니다.`,
        `로봇 팔의 각도처럼 연속적인 행동에서는 정책이 행동 분포를 출력할 수 있습니다. REINFORCE는 에피소드 보상으로 학습하고, actor-critic은 가치 추정기를 추가하며, PPO는 업데이트마다 정책 변화량을 제한합니다. Stable-Baselines3에는 PPO, DQN, SAC 구현이 있습니다.`,
        `보상을 잘못 설계하면 실제 목적을 놓친 채 지표만 최적화할 수 있습니다. 창고 로봇에는 속도뿐 아니라 충돌, 에너지, 대기 시간 패널티를 넣어야 합니다. 여러 random seed와 별도 평가 환경을 사용하고, 실제 장비 전에 MuJoCo나 Isaac Sim, action 제한, 비상 정지를 시험합니다.`
    ],
    10: [
        `판별 모델은 스팸 여부 같은 라벨을 고르고, 생성 모델은 데이터 패턴을 학습해 새 예시를 만듭니다. 자기회귀 LLM은 다음 token을 예측하고 diffusion 모델은 noise를 단계적으로 제거해 이미지를 만듭니다. GPT, Llama, Mistral, Stable Diffusion이 대표적인 예입니다.`,
        `Byte Pair Encoding 같은 tokenizer가 텍스트를 token과 embedding으로 바꿉니다. Self-attention은 token 간 관련성을 계산하고 positional encoding은 순서를 보존합니다. 사전 학습은 다음 token 오류를 줄이지만 temperature와 top-p는 다양성만 바꾸며 사실성을 보장하지 않습니다.`,
        `RAG는 LLM이 답하기 전에 관련 문서 조각을 검색합니다. text-embedding-3 또는 BGE embedding은 FAISS, pgvector, Chroma로 검색할 수 있습니다. Fine-tuning과 LoRA는 반복 형식을 안정화하고, 검증된 JSON schema는 재고나 캘린더 API의 function calling을 안전하게 합니다.`,
        `일반 사례, 경계 사례, 답이 없는 질문으로 테스트합니다. groundedness, 인용 정확도, 지연, 요청당 token, 사람에게 넘기는 비율을 측정합니다. hallucination을 실패로 보고 prompt injection을 막고, 도구 권한을 제한하며, 개인정보와 비밀을 로그에 남기지 않습니다.`
    ],
    11: [
        `의료 AI는 영상 분류, 위험 예측, 문서화, 신약 연구를 지원할 수 있지만 임상 판단을 대신하지 않습니다. Computer vision은 X-ray나 CT의 의심 영역을 표시하고 NLP는 기록에서 약물과 알레르기를 추출할 수 있습니다. 결과에는 대상 집단, 목적, 다음 행동이 있어야 합니다.`,
        `임상 데이터에는 늦게 붙는 라벨, 불완전한 코드, 병원과 장비 간 차이가 있습니다. DICOM은 이미지와 메타데이터를 저장하며 MIMIC 같은 데이터셋은 엄격한 접근 관리가 필요합니다. 환자와 시간으로 분리하고 leakage를 막으며 sensitivity, specificity, PPV, calibration을 보고합니다.`,
        `감사 가능한 영상 pipeline은 DICOM 비식별화, 이미지 정규화, DenseNet 또는 U-Net 실행, 검토용 Grad-CAM 표시를 수행할 수 있습니다. heatmap은 인과적 설명이 아닙니다. 데이터, 전처리, 모델, threshold, 승인 버전을 기록하고 연령, 성별, 장비, 지역별로 테스트합니다.`,
        `권한 있는 의료진은 환자 맥락, confidence, 추천을 거부할 방법을 봐야 합니다. 알림 담당자와 이상 사건 보고를 정하고 최소 권한, 암호화, 최소 보존, 비식별화를 적용합니다. 배포 전 임상, 보안, 개인정보, 규정 준수 팀이 함께 위험을 검토합니다.`
    ],
    12: [
        `좋아하는 모델이 아니라 반복되고 결과를 측정할 수 있는 의사결정에서 시작합니다. 수요 예측, 사기 검토, 공장 검사는 baseline, 담당자, service level, false-positive rate, 처리 시간, 건당 비용 같은 KPI가 필요합니다. accuracy 향상만으로 사업 가치가 생기지는 않습니다.`,
        `거래, CRM, ERP, 센서, 서비스 로그는 먼저 통합해야 하는 경우가 많습니다. XGBoost나 Prophet은 프로모션과 휴일 feature로 수요를 예측하고, 추천은 collaborative filtering과 재고 규칙을 결합할 수 있습니다. OCR은 invoice에서 PO와 합계를 검증하며 학습과 운영의 feature 정의가 같아야 합니다.`,
        `운영 모델에는 데이터와 코드 버전 관리, MLflow 실험 기록, pipeline 테스트, batch 또는 API 배포가 필요합니다. input drift, prediction drift, latency, error, 사업 지표를 모니터링합니다. PSI로 분포 변화를 감지하고 늦게 오는 라벨을 원래 예측에 연결하며 rollback과 수동 절차를 준비합니다.`,
        `좋은 pilot은 한 프로세스, 한 주요 사용자, 명확한 기간으로 제한합니다. 중요한 요인을 보여 주고 거부 사례를 모으며 금지 데이터, 자동화 경계, 책임자를 정합니다. ROI를 baseline이나 대조군과 비교해 계절성을 AI 효과로 착각하지 않습니다.`
    ],
    13: [
        `로봇은 RGB-D 카메라, LiDAR, IMU, 바퀴 encoder, 힘-토크 센서를 결합해 환경을 추정합니다. perception은 물체나 pose를 감지하고 planner는 경로를 선택하며 controller는 모터 명령을 보냅니다. ROS 2는 node, topic, service, action으로 구성 요소를 연결합니다.`,
        `SLAM은 로봇의 위치를 추정하면서 지도를 만듭니다. ORB-SLAM은 시각 feature를, LiDAR SLAM은 scan matching을 사용하며 Extended Kalman Filter는 IMU, odometry, GPS를 융합할 수 있습니다. Navigation2는 전체 경로에 A*나 NavFn, 지역 장애물에 costmap을 사용합니다.`,
        `로봇 팔은 inverse kinematics로 목표 pose를 joint angle로 바꿉니다. MoveIt은 동작 계획과 충돌 검사를 하고 vision model은 grasp point를 추정하며 gripper는 힘 feedback으로 닫힙니다. imitation learning과 MuJoCo 또는 Isaac Sim 시뮬레이션으로 실제 로봇 조정의 위험을 줄입니다.`,
        `물리 세계에는 undo 버튼이 없습니다. 속도, 힘, 작업 공간, 정책 행동을 제한하고 비상 정지, 안전 센서, interlock을 추가합니다. 센서 가림, 낙하 물체, 네트워크 단절, 사람의 진입을 테스트하고 timestamp 로그, incident replay, 수동 모드를 준비합니다.`
    ],
    14: [
        `Edge AI는 데이터를 만드는 장치 또는 가까운 곳에서 모델을 실행합니다. 카메라는 밀리초 안에 불량품을 거절하고 진동 센서는 오프라인에서도 이상을 감지할 수 있습니다. ESP32, Raspberry Pi, Jetson, Coral은 RAM, 전력, 가속기가 다르므로 latency와 현장 조건으로 선택합니다.`,
        `Quantization은 float32 weight를 int8로 바꾸고 pruning은 덜 중요한 연결을 제거하며 knowledge distillation은 teacher model로 작은 모델을 학습합니다. TensorFlow Lite, TensorRT, ONNX Runtime, OpenVINO는 서로 다른 장치를 대상으로 합니다. 정확도, p50/p95 latency, 메모리, 온도, 전력을 측정하세요.`,
        `공장에서는 accelerometer가 진동 window를 gateway로 보내고 모델이 현지에서 anomaly score를 계산한 뒤 MQTT로 score나 중요한 clip만 보낼 수 있습니다. device ID, 동기화 시간, firmware와 model version을 포함합니다. 장애 중 buffer를 사용하고 중복 actuator 명령을 막으며 telemetry와 control을 분리합니다.`,
        `실행 전에 서명된 firmware와 model을 검증합니다. 가능하면 secure boot, 장치별 credential, TLS, key rotation을 사용합니다. 작은 cohort부터 배포하고 crash와 drift를 모니터링하며 rollback을 유지합니다. 재학습과 regression test도 device lifecycle의 일부입니다.`
    ],
    15: [
        `AutoML은 기본 정제, category encoding, model selection, 제한적인 feature engineering, hyperparameter tuning을 자동화합니다. Auto-sklearn, H2O AutoML, AutoGluon은 pipeline을 비교하고 Vertex AI와 Azure Machine Learning은 관리형 workflow를 제공합니다. Teachable Machine은 작은 prototype에 좋지만 잘못된 target은 고치지 못합니다.`,
        `한 행이 무엇을 의미하는지, prediction 시점과 그때 사용할 수 있는 column을 정합니다. 30일 churn 예측에서 나중에 생긴 cancellation reason을 쓰면 leakage입니다. 시간 데이터는 시간으로 나누고 missing value, 중복 고객, class imbalance, 단위를 확인합니다.`,
        `사기가 2%뿐이면 accuracy는 양성 사례를 무시하는 모델을 높게 평가할 수 있습니다. precision-recall, ROC-AUC, F1, MAE 또는 business cost를 선택하고 운영 threshold의 confusion matrix를 본 뒤 규칙이나 logistic regression baseline과 비교합니다.`,
        `dataset, configuration, metric, prediction example을 저장해 결과를 재현합니다. SHAP이나 feature importance로 합리적인 신호를 확인하고 correlation을 causation으로 오해하지 않습니다. 운영 데이터에서 모델을 재시험하고 drift를 감시하며 위험한 결정에는 human review를 남깁니다. No-code에도 owner가 필요합니다.`
    ]
});

Object.assign(sectionContentTranslations.ru, {
    9: [
        `Обучение с подкреплением моделирует решения как марковский процесс: агент наблюдает состояние, выбирает действие, получает награду и новое состояние. Политика π(a|s) выбирает действия, а γ учитывает будущие награды. В CartPole из Gymnasium агент получает +1, пока шест остаётся вертикальным.`,
        `Value-based RL оценивает долгосрочную ценность состояния или пары состояние-действие. Q-learning обновляет Q(s,a) по формуле α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy иногда исследует случайное действие; DQN заменяет таблицу нейросетью и использует replay buffer и target network.`,
        `Для непрерывных действий, например угла роборуки, политика может выдавать распределение действий. REINFORCE учится по награде эпизода, actor-critic добавляет оценку ценности, а PPO ограничивает изменение политики за обновление. Stable-Baselines3 содержит реализации PPO, DQN и SAC.`,
        `Неверная награда может улучшить метрику и провалить настоящую цель. Для складского робота добавьте штрафы за столкновения, энергию и ожидание, а не только награду за скорость. Сравните несколько random seed в отдельной среде оценки, затем используйте MuJoCo или Isaac Sim, ограничения действий и аварийную остановку.`
    ],
    10: [
        `Дискриминативные модели выбирают метки вроде спама, а генеративные изучают закономерности данных и создают новые примеры. Авторегрессионные LLM предсказывают следующий token, а diffusion-модели постепенно убирают шум для создания изображения. GPT, Llama, Mistral и Stable Diffusion — практические примеры.`,
        `Tokenizer вроде Byte Pair Encoding превращает текст в tokens и embeddings. Self-attention вычисляет связь между токенами, positional encoding сохраняет порядок. При pre-training уменьшается ошибка следующего token; temperature и top-p меняют разнообразие, но не гарантируют фактическую точность.`,
        `RAG извлекает релевантные фрагменты документов до ответа LLM. Embeddings от text-embedding-3 или BGE можно искать через FAISS, pgvector или Chroma. Fine-tuning и LoRA стабилизируют повторяющиеся форматы, а проверенные JSON-схемы делают function calling безопаснее.`,
        `Тестируйте обычные случаи, границы и вопросы без ответа. Измеряйте groundedness, точность цитат, задержку, tokens на запрос и передачу человеку. Считайте hallucination настоящей ошибкой, защищайте инструкции от prompt injection, ограничивайте инструменты и не сохраняйте личные данные и секреты в логах.`
    ],
    11: [
        `Медицинский AI помогает с триажем изображений, прогнозом риска, документацией и исследованием лекарств, но не заменяет клиническое решение. Computer vision может отметить подозрительную область на рентгене или CT, а NLP извлечь лекарства и аллергии. Результат должен указывать популяцию, цель и следующий шаг.`,
        `Клинические данные содержат запаздывающие labels, неполные коды и различия между больницами и устройствами. DICOM хранит изображения и метаданные, а MIMIC требует строгого управления доступом. Делите данные по пациентам и времени, избегайте leakage, проводите внешнюю проверку и сообщайте sensitivity, specificity, PPV и calibration.`,
        `Аудируемый радиологический pipeline может обезличить DICOM, нормализовать изображения, запустить DenseNet или U-Net и показать Grad-CAM как помощь при проверке. Heatmap не является причинным объяснением. Записывайте версии данных, preprocessing, модели, threshold и согласования, тестируйте подгруппы.`,
        `Уполномоченный специалист должен видеть контекст, confidence и способ отклонить рекомендацию. Определите владельца alert и отчётность по adverse events; применяйте минимальные права, шифрование, короткое хранение и обезличивание. До deployment подключите клиническую, security, privacy и compliance команды.`
    ],
    12: [
        `Начинайте с повторяющегося решения с измеримым результатом, а не с любимой модели. Прогноз спроса, проверка мошенничества и визуальный контроль требуют baseline, владельца решения и KPI: service level, false-positive rate, время или стоимость случая. Рост accuracy сам по себе не создаёт бизнес-ценность.`,
        `Данные транзакций, CRM, ERP, сенсоров и сервисных логов часто нужно объединить. XGBoost или Prophet прогнозируют спрос с признаками промо и праздников; рекомендации объединяют collaborative filtering с правилами запасов. OCR извлекает счета и проверяет PO и сумму, при одинаковых features в обучении и production.`,
        `Production-модели нужны versioning данных и кода, эксперименты в MLflow, тесты pipeline и batch или API deployment. Следите за input drift, prediction drift, latency, ошибками и бизнес-метриками. PSI показывает изменение распределения; связывайте поздние labels с исходным prediction и готовьте rollback и ручной путь.`,
        `Хороший пилот ограничен одним процессом, главным пользователем и определённым периодом. Показывайте важные факторы, собирайте отклонённые примеры и определяйте запрещённые данные, границы автоматизации и ответственность. Сравнивайте ROI с baseline или контрольной группой, чтобы не принять сезонность за эффект AI.`
    ],
    13: [
        `Роботы объединяют RGB-D камеры, LiDAR, IMU, энкодеры колёс и force-torque сенсоры для оценки мира. Perception находит объекты и позы, planner выбирает траекторию, controller отправляет команды моторам. ROS 2 связывает компоненты через nodes, topics, services и actions.`,
        `SLAM строит карту и одновременно оценивает положение робота. ORB-SLAM использует визуальные признаки, LiDAR SLAM сопоставляет сканы, а Extended Kalman Filter объединяет IMU, одометрию и GPS. Navigation2 применяет A* или NavFn для глобального пути и costmap для локальных препятствий.`,
        `Роборука решает inverse kinematics и переводит целевую pose в углы суставов. MoveIt планирует движение и проверяет столкновения; vision model оценивает grasp point, а gripper закрывается по force feedback. Imitation learning и симуляция MuJoCo или Isaac Sim снижают риск перед настройкой на роботе.`,
        `В физическом мире нет кнопки отмены. Ограничьте скорость, силу, рабочую область и действия policy; добавьте emergency stop, safety sensors и interlocks. Проверяйте закрытые сенсоры, падение объектов, потерю сети и вход людей. Timestamped logs, replay инцидента и ручной режим помогают восстановлению.`
    ],
    14: [
        `Edge AI запускает модель на устройстве, создающем данные, или рядом с ним. Камера может отклонить дефект за миллисекунды, а vibration sensor — найти аномалию без сети. ESP32, Raspberry Pi, Jetson и Coral отличаются RAM, питанием и ускорителями, поэтому выбор начинается с latency и условий поля.`,
        `Quantization переводит float32 в int8, pruning удаляет менее полезные связи, а knowledge distillation обучает маленькую модель от teacher. TensorFlow Lite, TensorRT, ONNX Runtime и OpenVINO предназначены для разных устройств. Измеряйте accuracy, p50/p95 latency, память, температуру и питание, а не только размер файла.`,
        `На фабрике accelerometer отправляет окно вибрации на gateway, модель локально считает anomaly score, а MQTT передаёт только score или важный clip. В payload нужны device ID, синхронное время, версии firmware и model. Используйте buffer при сбоях, исключайте повторные команды actuator и разделяйте telemetry и control.`,
        `До запуска проверяйте подписанные firmware и модели. Используйте secure boot, уникальные credentials, TLS и ротацию ключей. Сначала выпускайте модель на небольшую cohort, следите за crash и drift и сохраняйте rollback. Retraining и regression tests входят в жизненный цикл устройства.`
    ],
    15: [
        `AutoML автоматизирует базовую очистку, encoding категорий, выбор модели, ограниченный feature engineering и настройку гиперпараметров. Auto-sklearn, H2O AutoML и AutoGluon сравнивают pipelines; Vertex AI и Azure Machine Learning дают управляемые workflows. Teachable Machine подходит для прототипов, но не исправляет неверный target.`,
        `Определите, что означает строка, когда делается prediction и какие столбцы доступны в этот момент. Для churn на 30 дней последующая причина отмены — leakage. Делите временные данные по дате и проверяйте missing values, дубликаты клиентов, дисбаланс классов и единицы.`,
        `Если fraud составляет 2%, accuracy может наградить модель, игнорирующую положительные случаи. Выбирайте precision-recall, ROC-AUC, F1, MAE или бизнес-стоимость, смотрите confusion matrix на operational threshold и сравнивайте с правилами или logistic regression.`,
        `Сохраняйте dataset, конфигурацию, метрики и примеры предсказаний. Используйте SHAP или feature importance, помня, что корреляция не равна причинности. Повторно тестируйте экспортированную модель на production data, следите за drift и оставляйте human review для рискованных решений. No-code всё равно требует владельца.`
    ]
});

Object.assign(sectionContentTranslations.tr, {
    9: [
        `Pekiştirmeli öğrenme kararları Markov Karar Süreci olarak modeller: ajan durumu gözlemler, eylem seçer, ardından ödül ve yeni durum alır. Politika π(a|s) eylemleri seçer, γ gelecekteki ödülleri ağırlıklandırır. Gymnasium CartPole'da çubuk dik kaldığı sürece her adım +1 verir.`,
        `Değer tabanlı RL, durumun veya durum-eylem çiftinin uzun vadeli değerini tahmin eder. Q-learning Q(s,a)'yı α[r + γ max Q(s′,a′) − Q(s,a)] ile günceller. ε-greedy bazen rastgele eylem dener; DQN tablo yerine sinir ağı, replay buffer ve target network kullanır.`,
        `Robot kolu açısı gibi sürekli eylemlerde politika bir eylem dağılımı üretebilir. REINFORCE bölüm ödülünden öğrenir, actor-critic değer tahmincisi ekler ve PPO her güncellemede politika değişimini sınırlar. Stable-Baselines3 PPO, DQN ve SAC uygulamaları sağlar.`,
        `Yanlış ödül tasarımı gerçek hedefi kaçırıp yalnızca metriği iyileştirebilir. Depo robotuna hızın yanında çarpışma, enerji ve bekleme cezaları ekleyin. Ayrı değerlendirme ortamında birden fazla seed karşılaştırın; gerçek donanımdan önce MuJoCo veya Isaac Sim, eylem sınırları ve acil durdurma kullanın.`
    ],
    10: [
        `Ayrımcı modeller spam gibi etiketleri seçer, üretici modeller ise veri örüntülerini öğrenip yeni örnekler oluşturur. Otoregresif LLM'ler sonraki token'ı tahmin eder; diffusion modelleri görüntü oluşturmak için gürültüyü kademeli azaltır. GPT, Llama, Mistral ve Stable Diffusion örnektir.`,
        `Byte Pair Encoding gibi tokenizer metni token'lara ve embedding'lere dönüştürür. Self-attention token ilişkilerini hesaplar, positional encoding sıralamayı korur. Ön eğitim sonraki token hatasını azaltır; temperature ve top-p çeşitliliği değiştirir, doğruluğu garanti etmez.`,
        `RAG, LLM yanıt vermeden önce ilgili belge parçalarını getirir. text-embedding-3 veya BGE embedding'leri FAISS, pgvector ya da Chroma ile aranabilir. Fine-tuning ve LoRA tekrarlanan formatları sabitler; doğrulanmış JSON şemaları stok veya takvim API'leri için function calling'i güvenli kılar.`,
        `Normal, sınır ve cevabı olmayan sorularla test edin. Groundedness, alıntı doğruluğu, gecikme, istek başına token ve insana aktarma oranını ölçün. Hallucination'ı gerçek hata sayın, prompt injection'a karşı talimatları koruyun, araç izinlerini sınırlayın ve kişisel veri ile sırları loglamayın.`
    ],
    11: [
        `Sağlık AI'sı görüntü triyajı, risk tahmini, dokümantasyon ve ilaç araştırmasına destek olabilir; klinik kararı değiştirmez. Computer vision X-ray veya CT'de şüpheli alanı işaretleyebilir, NLP notlardan ilaç ve alerji çıkarabilir. Çıktı popülasyonu, amacı ve sonraki adımı belirtmelidir.`,
        `Klinik veriler gecikmiş etiketler, eksik kodlar ve hastane/cihaz farklılıkları içerir. DICOM görüntü ve metadata saklar; MIMIC gibi veri setleri sıkı erişim yönetimi ister. Hasta ve zamana göre ayırın, leakage'i önleyin, dış doğrulama yapın ve sensitivity, specificity, PPV, calibration raporlayın.`,
        `Denetlenebilir radyoloji pipeline'ı DICOM'u anonimleştirip görüntüyü normalize edebilir, DenseNet veya U-Net çalıştırabilir ve inceleme yardımı olarak Grad-CAM gösterebilir. Heatmap nedensel açıklama değildir. Veri, preprocessing, model, threshold ve onay sürümlerini kaydedin; alt grupları yaş, cinsiyet, cihaz ve konuma göre test edin.`,
        `Yetkili uzman bağlamı, güveni ve öneriyi reddetme yolunu görmelidir. Uyarı sahibini ve olumsuz olay raporunu belirleyin; en az yetki, şifreleme, minimum saklama ve anonimleştirme uygulayın. Deployment öncesi klinik, güvenlik, gizlilik ve uyum ekiplerini sürece katın.`
    ],
    12: [
        `Favori modelden değil, tekrarlanan ve ölçülebilir sonuçlu karardan başlayın. Talep tahmini, dolandırıcılık incelemesi ve fabrika görsel denetimi baseline, karar sahibi ve service level, false-positive rate, işlem süresi veya vaka maliyeti gibi KPI'lar ister. Accuracy artışı tek başına iş değeri değildir.`,
        `İşlem, CRM, ERP, sensör ve servis logları önce birleştirilmelidir. XGBoost veya Prophet promosyon ve tatil özellikleriyle talep tahmini yapabilir; öneri sistemi collaborative filtering ile stok kurallarını birleştirebilir. OCR fatura ve PO toplamını kontrol eder; eğitim ve üretimde feature tanımları aynı olmalıdır.`,
        `Üretim modeli veri/kod sürümleme, MLflow deneyleri, pipeline testleri ve batch veya API deployment gerektirir. Input drift, prediction drift, latency, error ve iş metriklerini izleyin. PSI dağılım değişimini gösterebilir; gecikmiş etiketleri ilk prediction'a bağlayın ve rollback ile manuel yol hazırlayın.`,
        `İyi pilot bir süreç, bir ana kullanıcı ve belirli bir süreyle sınırlıdır. Önemli faktörleri gösterin, reddedilen örnekleri toplayın, yasak verileri, otomasyon sınırlarını ve sorumluluğu tanımlayın. ROI'yi baseline veya kontrol grubuyla karşılaştırarak mevsimselliği AI etkisi sanmayın.`
    ],
    13: [
        `Robotlar RGB-D kamera, LiDAR, IMU, teker encoder'ı ve kuvvet-tork sensörlerini birleştirerek ortamı tahmin eder. Perception nesne veya poz algılar, planner yol seçer, controller motor komutu gönderir. ROS 2 node, topic, service ve action üzerinden bileşenleri bağlar.`,
        `SLAM robotun konumunu tahmin ederken harita oluşturur. ORB-SLAM görsel özellikleri, LiDAR SLAM tarama eşleştirmeyi kullanır; Extended Kalman Filter IMU, odometri ve GPS'i birleştirebilir. Navigation2 küresel yol için A* veya NavFn, yerel engeller için costmap kullanır.`,
        `Robot kolu inverse kinematics ile hedef pozu eklem açılarına çevirir. MoveIt hareket planlar ve çarpışma kontrol eder; vision model kavrama noktasını tahmin eder, gripper kuvvet geri bildirimiyle kapanır. Imitation learning ve MuJoCo veya Isaac Sim simülasyonu gerçek robot ayarının riskini azaltır.`,
        `Fiziksel dünyada geri alma düğmesi yoktur. Hız, kuvvet, çalışma alanı ve politika eylemlerini sınırlayın; acil durdurma, güvenlik sensörü ve interlock ekleyin. Kapalı sensör, düşen nesne, ağ kaybı ve alana insan girişi senaryolarını test edin. Zaman damgalı log, olay tekrarı ve manuel mod kurtarmayı kolaylaştırır.`
    ],
    14: [
        `Edge AI modeli veriyi üreten cihazda veya yakınında çalıştırır. Kamera kusuru milisaniyelerde reddedebilir, titreşim sensörü bağlantı yokken anomali bulabilir. ESP32, Raspberry Pi, Jetson ve Coral RAM, güç ve hızlandırıcı açısından farklıdır; donanımı gecikme hedefi ve saha koşullarına göre seçin.`,
        `Quantization float32 ağırlıkları int8'e çevirir, pruning gereksiz bağlantıları kaldırır, knowledge distillation küçük modeli öğretmenden öğrenir. TensorFlow Lite, TensorRT, ONNX Runtime ve OpenVINO farklı cihazlara yöneliktir. Accuracy, p50/p95 latency, bellek, sıcaklık ve gücü ölçün; yalnızca dosya boyutuna bakmayın.`,
        `Fabrikada accelerometer titreşim penceresini gateway'e gönderir, model anomaly score'u yerelde hesaplar ve MQTT yalnızca skor veya önemli clip'i taşır. device ID, senkron zaman, firmware ve model sürümünü ekleyin. Kesintide buffer kullanın, actuator komutlarını çoğaltmayın ve telemetry ile control'ü ayırın.`,
        `Çalıştırmadan önce imzalı firmware ve modelleri doğrulayın. Destekleniyorsa secure boot, benzersiz kimlik bilgileri, TLS ve anahtar rotasyonu kullanın. Küçük bir cohort ile yayınlayın, crash ve drift'i izleyin, rollback saklayın. Retraining ve regression testleri yaşam döngüsüne dahil edin.`
    ],
    15: [
        `AutoML temel temizleme, kategori encoding, model seçimi, sınırlı feature engineering ve hyperparameter tuning'i otomatikleştirir. Auto-sklearn, H2O AutoML ve AutoGluon pipeline'ları karşılaştırır; Vertex AI ve Azure Machine Learning yönetilen workflow sunar. Teachable Machine prototip için uygundur ancak yanlış target'ı düzeltemez.`,
        `Bir satırın neyi temsil ettiğini, tahminin ne zaman yapıldığını ve o anda hangi sütunların mevcut olduğunu belirleyin. 30 günlük churn tahmininde sonradan gelen iptal nedeni leakage'tir. Zaman verisini tarihe göre ayırın; eksik değer, kopya müşteri, sınıf dengesizliği ve birimleri kontrol edin.`,
        `Dolandırıcılık yalnızca %2 ise accuracy pozitifleri görmezden gelen modeli ödüllendirebilir. Precision-recall, ROC-AUC, F1, MAE veya iş maliyetini seçin, operasyon threshold'unda confusion matrix'e bakın ve kural veya logistic regression baseline'ı ile karşılaştırın.`,
        `Dataset, yapılandırma, metrik ve prediction örneklerini saklayarak yeniden üretilebilirlik sağlayın. SHAP veya feature importance ile sinyallerin mantıklı olup olmadığını kontrol edin; korelasyon nedensellik değildir. Üretim verisinde tekrar test edin, drift'i izleyin ve riskli kararlarda insan incelemesini koruyun. No-code da sorumlu ister.`
    ]
});

Object.assign(sectionContentTranslations.it, {
    9: [
        `Il Reinforcement Learning modella le decisioni come un processo decisionale di Markov: l'agente osserva uno stato, sceglie un'azione e riceve una ricompensa e un nuovo stato. La policy π(a|s) sceglie le azioni e γ pesa le ricompense future. In CartPole di Gymnasium l'agente riceve +1 finché il palo resta dritto.`,
        `Il RL basato sul valore stima il valore a lungo termine di uno stato o di una coppia stato-azione. Q-learning aggiorna Q(s,a) con α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy prova talvolta azioni casuali; DQN sostituisce la tabella con una rete neurale, replay buffer e target network.`,
        `Per azioni continue, come l'angolo di un braccio robotico, la policy può produrre una distribuzione. REINFORCE impara dalla ricompensa dell'episodio, actor-critic aggiunge uno stimatore di valore e PPO limita il cambiamento della policy a ogni update. Stable-Baselines3 offre PPO, DQN e SAC.`,
        `Una ricompensa sbagliata può ottimizzare la metrica e fallire l'obiettivo reale. Per un robot di magazzino aggiungi penalità per collisioni, energia e attesa, non solo per la velocità. Confronta più seed in un ambiente separato e usa MuJoCo o Isaac Sim, limiti d'azione e arresto di emergenza prima dell'hardware.`
    ],
    10: [
        `I modelli discriminativi scelgono etichette come spam o non spam; quelli generativi imparano i pattern dei dati per creare nuovi esempi. Gli LLM autoregressivi predicono il token successivo, mentre i modelli diffusion rimuovono gradualmente il rumore per creare immagini. GPT, Llama, Mistral e Stable Diffusion sono esempi.`,
        `Un tokenizer come Byte Pair Encoding trasforma il testo in token e poi in embedding. Self-attention calcola la rilevanza tra token e positional encoding conserva l'ordine. Il pre-training riduce l'errore del token successivo; temperature e top-p cambiano la varietà, non garantiscono la correttezza.`,
        `RAG recupera frammenti rilevanti prima della risposta dell'LLM. Gli embedding di text-embedding-3 o BGE possono essere cercati con FAISS, pgvector o Chroma. Fine-tuning e LoRA stabilizzano i formati ripetuti, mentre schemi JSON validati rendono più sicuro il function calling.`,
        `Prova casi normali, limite e domande senza risposta. Misura groundedness, precisione delle citazioni, latenza, token per richiesta ed escalation umana. Tratta le hallucination come errori reali, proteggi le istruzioni dal prompt injection, limita gli strumenti e non salvare dati personali o segreti nei log.`
    ],
    11: [
        `L'AI sanitaria può supportare il triage delle immagini, la previsione del rischio, la documentazione e la ricerca sui farmaci, ma non sostituisce il giudizio clinico. Computer vision può segnalare aree sospette in X-ray o CT, mentre NLP estrae farmaci e allergie. L'output deve indicare popolazione, scopo e prossima azione.`,
        `I dati clinici hanno label ritardate, codici incompleti e differenze tra ospedali e dispositivi. DICOM conserva immagini e metadati; dataset come MIMIC richiedono governance rigorosa. Dividi per paziente e tempo, evita il leakage, valida esternamente e riporta sensitivity, specificity, PPV e calibration.`,
        `Una pipeline radiologica verificabile può de-identificare DICOM, normalizzare immagini, eseguire DenseNet o U-Net e mostrare Grad-CAM come supporto alla revisione. Una heatmap non è una spiegazione causale. Registra versioni di dati, preprocessing, modello, threshold e approvazione, testando sottogruppi.`,
        `Un professionista autorizzato deve vedere contesto, confidenza e come rifiutare la raccomandazione. Definisci il responsabile degli alert e degli eventi avversi; applica minimo privilegio, cifratura, conservazione minima e de-identificazione. Prima del deployment coinvolgi team clinico, sicurezza, privacy e compliance.`
    ],
    12: [
        `Parti da una decisione ripetuta con risultato misurabile, non dal modello preferito. Previsione della domanda, revisione frodi e ispezione visiva richiedono baseline, responsabile e KPI come service level, falsi positivi, tempo o costo per caso. Più accuracy non significa automaticamente più valore.`,
        `Dati di transazioni, CRM, ERP, sensori e log spesso devono essere uniti. XGBoost o Prophet possono prevedere la domanda con promozioni e festività; le raccomandazioni uniscono collaborative filtering e regole di stock. OCR estrae le fatture e verifica PO e totale, con feature coerenti tra training e produzione.`,
        `Un modello in produzione richiede versionamento, esperimenti in MLflow, test della pipeline e deployment batch o API. Monitora input drift, prediction drift, latenza, errori e metriche aziendali. PSI segnala cambi di distribuzione; collega le label tardive alla previsione originale e prepara rollback e percorso manuale.`,
        `Un buon pilota limita un processo, un utente principale e un periodo definito. Mostra i fattori importanti, raccogli i rifiuti e stabilisci dati vietati, limiti di automazione e responsabilità. Confronta ROI con baseline o controllo per non confondere stagionalità e impatto dell'AI.`
    ],
    13: [
        `I robot combinano camere RGB-D, LiDAR, IMU, encoder delle ruote e sensori forza-coppia per stimare l'ambiente. Perception rileva oggetti e pose, planner sceglie il percorso e controller invia i comandi al motore. ROS 2 collega i componenti tramite nodes, topics, services e actions.`,
        `SLAM costruisce una mappa mentre stima la posizione del robot. ORB-SLAM usa caratteristiche visive, LiDAR SLAM abbina scansioni e un Extended Kalman Filter può fondere IMU, odometria e GPS. Navigation2 usa A* o NavFn per il percorso globale e costmap per gli ostacoli locali.`,
        `Un braccio robotico risolve l'inverse kinematics per convertire una pose in angoli dei giunti. MoveIt pianifica il movimento e controlla le collisioni; un modello visivo stima il grasp point e la pinza usa il feedback di forza. Imitation learning e simulazione con MuJoCo o Isaac Sim riducono il rischio.`,
        `Il mondo fisico non ha un pulsante annulla. Limita velocità, forza, spazio di lavoro e azioni della policy; aggiungi arresto di emergenza, sensori di sicurezza e interlock. Prova sensori coperti, oggetti caduti, perdita di rete e persone nell'area. Log con timestamp, replay e modalità manuale aiutano il recupero.`
    ],
    14: [
        `Edge AI esegue il modello sul dispositivo che produce i dati o vicino ad esso. Una camera può rifiutare un difetto in millisecondi e un sensore di vibrazione rilevare anomalie offline. ESP32, Raspberry Pi, Jetson e Coral hanno limiti diversi; scegli in base alla latenza e alle condizioni reali.`,
        `Quantization converte i pesi float32 in int8, pruning rimuove connessioni poco utili e knowledge distillation addestra un modello piccolo da un teacher. TensorFlow Lite, TensorRT, ONNX Runtime e OpenVINO servono target diversi. Misura accuratezza, latenza p50/p95, memoria, temperatura ed energia.`,
        `In fabbrica un accelerometro invia una finestra di vibrazione al gateway, il modello calcola localmente l'anomaly score e MQTT invia solo score o clip importante. Includi ID, tempo sincronizzato e versioni firmware e modello. Usa buffer durante i guasti, evita comandi duplicati e separa telemetria e controllo.`,
        `Verifica firmware e modelli firmati prima dell'esecuzione. Usa secure boot, credenziali uniche, TLS e rotazione delle chiavi quando possibile. Distribuisci prima a una piccola coorte, monitora crash e drift e mantieni rollback. Retraining e test di regressione fanno parte del ciclo di vita.`
    ],
    15: [
        `AutoML automatizza pulizia di base, encoding, selezione del modello, feature engineering limitato e tuning. Auto-sklearn, H2O AutoML e AutoGluon confrontano pipeline; Vertex AI e Azure Machine Learning offrono workflow gestiti. Teachable Machine è utile per prototipi, ma non corregge un target sbagliato.`,
        `Definisci cosa rappresenta una riga, quando avviene la previsione e quali colonne sono disponibili allora. Nel churn a 30 giorni, il motivo di cancellazione successivo è leakage. Separa i dati temporali per data e controlla valori mancanti, duplicati, squilibrio e unità.`,
        `Con il 2% di frodi, accuracy può premiare un modello che ignora i positivi. Scegli precision-recall, ROC-AUC, F1, MAE o costo aziendale, guarda la confusion matrix alla soglia operativa e confronta con regole o regressione logistica.`,
        `Conserva dataset, configurazione, metriche ed esempi per riprodurre i risultati. Usa SHAP o feature importance per verificare segnali sensati; correlazione non è causalità. Ritesta il modello esportato su dati di produzione, monitora drift e mantieni revisione umana per decisioni rischiose. No-code richiede comunque un responsabile.`
    ]
});

Object.assign(sectionContentTranslations.vi, {
    9: [
        `Học tăng cường mô hình hóa quyết định như một Quy trình Quyết định Markov: tác tử quan sát trạng thái, chọn hành động rồi nhận phần thưởng và trạng thái mới. Policy π(a|s) chọn hành động, còn γ cân bằng phần thưởng tương lai. Trong CartPole của Gymnasium, tác tử nhận +1 khi cột vẫn đứng.`,
        `RL dựa trên giá trị ước tính giá trị dài hạn của trạng thái hoặc cặp trạng thái-hành động. Q-learning cập nhật Q(s,a) theo α[r + γ max Q(s′,a′) − Q(s,a)]. ε-greedy đôi khi thử hành động ngẫu nhiên; DQN dùng mạng nơ-ron, replay buffer và target network thay cho bảng.`,
        `Với hành động liên tục như góc cánh tay robot, policy có thể xuất ra phân phối hành động. REINFORCE học từ phần thưởng episode, actor-critic thêm bộ ước lượng giá trị, còn PPO giới hạn mức thay đổi của policy mỗi lần cập nhật. Stable-Baselines3 có các bản triển khai PPO, DQN và SAC.`,
        `Phần thưởng thiết kế sai có thể tối ưu chỉ số nhưng bỏ lỡ mục tiêu thật. Với robot kho, hãy phạt va chạm, năng lượng và thời gian chờ thay vì chỉ thưởng tốc độ. So sánh nhiều random seed trong môi trường đánh giá riêng, rồi dùng MuJoCo hoặc Isaac Sim, giới hạn hành động và nút dừng khẩn cấp trước khi chạy phần cứng.`
    ],
    10: [
        `Mô hình phân biệt chọn nhãn như spam hoặc không spam, còn mô hình tạo sinh học mẫu dữ liệu để tạo ví dụ mới. LLM tự hồi quy dự đoán token tiếp theo; mô hình diffusion loại bỏ nhiễu từng bước để tạo ảnh. GPT, Llama, Mistral và Stable Diffusion là các ví dụ thực tế.`,
        `Tokenizer như Byte Pair Encoding biến văn bản thành token rồi thành embedding. Self-attention tính mức liên quan giữa các token, còn positional encoding giữ thứ tự. Pre-training giảm lỗi dự đoán token tiếp theo; temperature và top-p thay đổi độ đa dạng chứ không bảo đảm tính đúng sự thật.`,
        `RAG truy xuất các đoạn tài liệu liên quan trước khi LLM trả lời. Embedding từ text-embedding-3 hoặc BGE có thể tìm bằng FAISS, pgvector hoặc Chroma. Fine-tuning và LoRA ổn định các định dạng lặp lại; JSON schema được kiểm tra giúp function calling an toàn hơn.`,
        `Hãy kiểm thử trường hợp bình thường, biên và câu hỏi không có đáp án. Đo groundedness, độ chính xác trích dẫn, độ trễ, token mỗi yêu cầu và tỷ lệ chuyển cho người. Xem hallucination là lỗi thật, bảo vệ system instruction khỏi prompt injection, giới hạn quyền tool và không lưu dữ liệu cá nhân hoặc bí mật trong log.`
    ],
    11: [
        `AI y tế có thể hỗ trợ phân loại hình ảnh, dự đoán rủi ro, tài liệu hóa và nghiên cứu thuốc, nhưng không thay thế phán đoán lâm sàng. Computer vision có thể đánh dấu vùng đáng ngờ trên X-ray hoặc CT, còn NLP trích xuất thuốc và dị ứng. Kết quả nên nêu rõ quần thể, mục tiêu và hành động tiếp theo.`,
        `Dữ liệu lâm sàng có nhãn đến muộn, mã không đầy đủ và khác biệt giữa bệnh viện và thiết bị. DICOM lưu hình ảnh cùng metadata; các bộ như MIMIC cần quản trị truy cập nghiêm ngặt. Chia theo bệnh nhân và thời gian, tránh leakage, validation bên ngoài và báo cáo sensitivity, specificity, PPV, calibration.`,
        `Pipeline X-quang có thể kiểm toán sẽ de-identify DICOM, chuẩn hóa ảnh, chạy DenseNet hoặc U-Net và hiển thị Grad-CAM để hỗ trợ xem xét. Heatmap không phải giải thích nhân quả. Ghi lại phiên bản dữ liệu, preprocessing, model, threshold và phê duyệt; kiểm thử theo tuổi, giới tính, thiết bị và địa điểm.`,
        `Nhân viên y tế được ủy quyền cần thấy ngữ cảnh bệnh nhân, độ tin cậy và cách từ chối đề xuất. Xác định người xử lý cảnh báo và báo cáo sự cố; áp dụng quyền tối thiểu, mã hóa, lưu trữ tối thiểu và de-identification. Trước deployment, nhóm lâm sàng, bảo mật, riêng tư và tuân thủ cùng đánh giá rủi ro.`
    ],
    12: [
        `Bắt đầu từ quyết định lặp lại có kết quả đo được, không phải từ mô hình yêu thích. Dự báo nhu cầu, rà soát gian lận và kiểm tra hình ảnh cần baseline, người phụ trách và KPI như service level, false-positive rate, thời gian hoặc chi phí mỗi trường hợp. Accuracy tăng chưa chắc tạo giá trị kinh doanh.`,
        `Dữ liệu giao dịch, CRM, ERP, cảm biến và log dịch vụ thường phải được hợp nhất trước. XGBoost hoặc Prophet dự báo nhu cầu với feature khuyến mãi và ngày lễ; hệ thống gợi ý kết hợp collaborative filtering với quy tắc tồn kho. OCR đọc hóa đơn và kiểm tra PO, tổng tiền, với feature definition giống nhau ở train và production.`,
        `Model production cần versioning dữ liệu và code, thí nghiệm MLflow, test pipeline và triển khai batch hoặc API. Theo dõi input drift, prediction drift, latency, lỗi và chỉ số kinh doanh. PSI báo hiệu phân phối đổi; liên kết nhãn đến muộn với prediction gốc và chuẩn bị rollback cùng quy trình thủ công.`,
        `Pilot tốt giới hạn một quy trình, một người dùng chính và một giai đoạn rõ ràng. Hiển thị yếu tố quan trọng, thu thập ví dụ bị từ chối và xác định dữ liệu cấm, ranh giới tự động hóa, trách nhiệm. So sánh ROI với baseline hoặc nhóm đối chứng để không nhầm mùa vụ là tác động của AI.`
    ],
    13: [
        `Robot kết hợp camera RGB-D, LiDAR, IMU, encoder bánh xe và cảm biến lực-mô men để ước tính môi trường. Perception phát hiện vật thể hoặc tư thế, planner chọn đường đi, controller gửi lệnh motor. ROS 2 kết nối các thành phần qua node, topic, service và action.`,
        `SLAM tạo bản đồ đồng thời ước tính vị trí robot. ORB-SLAM dùng đặc trưng hình ảnh, LiDAR SLAM ghép các lần quét, còn Extended Kalman Filter có thể hợp nhất IMU, odometry và GPS. Navigation2 thường dùng A* hoặc NavFn cho đường tổng thể và costmap cho vật cản cục bộ.`,
        `Cánh tay robot giải inverse kinematics để đổi pose mục tiêu thành góc khớp. MoveIt lập kế hoạch và kiểm tra va chạm; vision model ước tính grasp point, gripper đóng theo force feedback. Imitation learning và mô phỏng MuJoCo hoặc Isaac Sim giảm rủi ro trước khi tinh chỉnh trên robot thật.`,
        `Thế giới vật lý không có nút undo. Giới hạn tốc độ, lực, không gian và action policy; thêm dừng khẩn cấp, cảm biến an toàn và interlock. Kiểm thử cảm biến bị che, vật rơi, mất mạng và người bước vào vùng làm việc. Log có timestamp, replay sự cố và chế độ thủ công giúp khôi phục.`
    ],
    14: [
        `Edge AI chạy model trên hoặc gần thiết bị tạo dữ liệu. Camera có thể loại sản phẩm lỗi trong vài mili giây, cảm biến rung phát hiện bất thường khi mất mạng. ESP32, Raspberry Pi, Jetson và Coral khác nhau về RAM, điện năng và accelerator; chọn theo latency và điều kiện thực tế.`,
        `Quantization đổi trọng số float32 thành int8, pruning bỏ kết nối ít hữu ích, còn knowledge distillation huấn luyện model nhỏ từ model giáo viên. TensorFlow Lite, TensorRT, ONNX Runtime và OpenVINO hướng tới các thiết bị khác nhau. Đo accuracy, latency p50/p95, memory, nhiệt độ và điện năng, không chỉ kích thước file.`,
        `Trong nhà máy, accelerometer gửi cửa sổ rung đến gateway, model tính anomaly score tại chỗ rồi MQTT chỉ gửi score hoặc clip quan trọng. Payload cần device ID, thời gian đồng bộ, firmware version và model version. Buffer khi mất mạng, tránh lệnh actuator trùng và tách telemetry khỏi control.`,
        `Xác minh firmware và model đã ký trước khi chạy. Nếu phần cứng hỗ trợ, dùng secure boot, credential riêng, TLS và xoay vòng khóa. Triển khai trước cho cohort nhỏ, theo dõi crash và drift, giữ rollback. Retraining và regression test là một phần của vòng đời thiết bị.`
    ],
    15: [
        `AutoML có thể tự động làm sạch cơ bản, mã hóa category, chọn model, feature engineering giới hạn và tuning hyperparameter. Auto-sklearn, H2O AutoML và AutoGluon so sánh các pipeline; Vertex AI và Azure Machine Learning cung cấp workflow được quản lý. Teachable Machine hợp với prototype nhỏ nhưng không sửa được target sai.`,
        `Xác định một hàng dữ liệu đại diện cho gì, dự đoán được tạo khi nào và lúc đó có những cột nào. Với churn 30 ngày, lý do hủy xuất hiện sau đó là leakage. Chia dữ liệu theo thời gian, kiểm tra missing value, khách hàng trùng, mất cân bằng lớp và đơn vị trước khi train.`,
        `Nếu gian lận chỉ chiếm 2%, accuracy có thể ưu ái model bỏ qua lớp dương. Chọn precision-recall, ROC-AUC, F1, MAE hoặc chi phí kinh doanh; xem confusion matrix ở threshold vận hành và so sánh với rule hoặc logistic regression baseline.`,
        `Lưu dataset, cấu hình, metric và ví dụ prediction để tái tạo kết quả. Dùng SHAP hoặc feature importance để kiểm tra tín hiệu hợp lý; tương quan không phải quan hệ nhân quả. Test lại model đã export với dữ liệu production, theo dõi drift và giữ human review cho quyết định rủi ro. No-code vẫn cần người chịu trách nhiệm.`
    ]
});

// Helper to get translated section content  
function tSectionContent(lessonId, sectionIdx) {
    const lang = (data && data.lang) || 'id';
    if (lang === 'id') return null;
    const sc = sectionContentTranslations[lang];
    return (sc && sc[lessonId] && sc[lessonId][sectionIdx]) || null;
}
