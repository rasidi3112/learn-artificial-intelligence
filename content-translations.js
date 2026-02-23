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
    }
};

// Helper to get translated section content  
function tSectionContent(lessonId, sectionIdx) {
    const lang = (data && data.lang) || 'id';
    if (lang === 'id') return null;
    const sc = sectionContentTranslations[lang];
    return (sc && sc[lessonId] && sc[lessonId][sectionIdx]) || null;
}
