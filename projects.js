// Project list for the showcase grid on index.html.
// To add a project, add one object to this array (newest first).
//   title       card + modal heading
//   short       optional short name used in skill tooltips (default: title before ":")
//   img         image path; any aspect ratio works, it is cropped to 16:10 on the card
//   thumb       optional, separate card image (use when img would crop badly); the modal still shows img
//   category    must match a filter button's data-filter: Work | Research | Personal | Coursework
//   description full text; the card shows the first 3 lines, the modal shows all of it
//   tags        optional, shown in the modal
//   links       optional, { label: url } shown as buttons on the card and in the modal
//   hidden      optional, true keeps the entry here but leaves it off the page
//   credit      optional, small attribution line under the modal text (e.g. for third-party data)
//   results     optional, table in the modal: { caption, columns: [...], rows: [[...], ...] }
//   video       optional, muted looping video shown in the modal instead of img (img is still the card image);
//               one path or a list like [".webm", ".mp4"]: the browser plays the first format it supports
//   earlier     optional, true lists it under "Earlier work" as a compact row instead of a grid card

var PROJECTS = [
  {
    title: "AutoBrachy: Automated Treatment Planning for Cervical Cancer Brachytherapy",
    short: "AutoBrachy",
    img: "./proj_img/AutoBrachy-flow.svg",
    category: "Work",
    description:
      "AutoBrachy is the automated treatment planning software I work on at Carina Medical. It is built for " +
      "high-dose-rate brachytherapy of cervical cancer, where each plan normally takes a care team a long session " +
      "of manual contouring and planning while the patient waits with the applicator in place. From the planning CT, " +
      "AutoBrachy contours the target and organs at risk, locates the applicator, and generates a draft dose plan. " +
      "The clinician reviews and corrects the draft, then exports it as standard DICOM to their treatment planning " +
      "system for final approval. It supports cylinder, tandem-and-ovoid, tandem-and-ring and tandem-and-needle " +
      "applicators, can run on site or as a hosted service, and can be launched from inside Varian Eclipse. " +
      "My work spans the data and training pipeline, segmentation robustness, geometry-aware post-processing, " +
      "dose calculation and optimization, and the multi-site evaluation behind its FDA 510(k) submission; see the " +
      "Experience section or my resume for details. The software is proprietary, so no code is shared here.",
    tags: ["Medical imaging", "Brachytherapy", "Treatment planning", "3D segmentation", "CT", "DICOM", "FDA 510(k)"],
    links: { "Resume": "./resume/Yuxin_Ding_Resume.pdf" }
  },
  {
    title: "BeamOpt: Talk to a Radiotherapy Plan",
    img: "./proj_img/BeamOpt.png",
    thumb: "./proj_img/BeamOpt-card.jpg",
    category: "Research",
    description:
      "A research prototype that lets a medical physicist adjust an IMRT plan in plain language. A request such as " +
      "\"reduce the esophagus mean by 2 Gy, keep PTV coverage\" is turned by a local LLM (LangGraph + Ollama) into " +
      "bounded changes to the fluence optimization on PortPy lung cases. The plan is then re-solved, checked against " +
      "deterministic dose metrics and organ-at-risk guards, and reported with a before/after trade-off table. " +
      "A custom re-solvable optimizer reproduces PortPy's problem to a 2e-9 relative objective difference while " +
      "cutting solve time from about 180 s to 20-50 s. The web workspace includes a goals board, revision history " +
      "(keep / discard / branch), a linked CT/dose viewer with DVH, voice dictation and DICOM export. Not for clinical use.",
    tags: ["LLM agent", "LangGraph", "Convex optimization", "CVXPY", "FastAPI", "Medical physics", "DVH", "DICOM", "Ollama"],
    links: { "Code": "https://github.com/Dingyx0100/BeamOpt" },
    credit: "Screenshot: Lung_Patient_3 from the PortPy dataset (CC BY-NC 4.0), derived from the NSCLC-Radiomics " +
      "collection (Aerts et al.) on The Cancer Imaging Archive."
  },
  {
    title: "Manuora: Self-hosted Manual Q&A Chatbot",
    img: "./proj_img/Manuora.svg",
    category: "Personal",
    description:
      "A self-hosted support chatbot that answers questions from versioned product manuals, keeping answers specific " +
      "to the product version being asked about. The whole RAG pipeline runs locally:Docling PDF parsing with selective OCR, " +
      "hybrid retrieval (Qwen3 embeddings in Qdrant plus BM25, fused with RRF), a Qwen3 reranker with evidence " +
      "selection, and Qwen3-8B generation with LangGraph short-term memory. Answers go through citation and name " +
      "checks, and when the manuals don't support an answer, Manuora says so instead of guessing.",
    tags: ["RAG", "LangGraph", "Qdrant", "BM25", "Qwen3", "FastAPI"],
    links: { "Code": "https://github.com/Dingyx0100/ManuoraTheChatbot" }
  },
  {
    hidden: true,
    title: "Improve AI-based Model Robustness of Ventricle Segmentation from Multi-Contrast MRI via Active Learning",
    img: "./proj_img/Yijing.jpg",
    category: "Research",
    description:
      "Accurate and automatic ventricle segmentation is critical for diagnosing hydrocephalus and monitoring its " +
      "progression in patients. However, during model training, we observed challenges in achieving robust performance " +
      "across varying MRI contrasts and diverse patient populations. Active learning, known for its ability to minimize " +
      "labeling costs and expedite model adaptation to different data populations, offers a promising solution to these " +
      "issues. In the paper, we present a novel uncertainty-based metric designed to assess the informativeness of " +
      "individual data samples. By integrating this metric into the active learning process, we aim to improve model " +
      "robustness and generalization across multiple MRI contrasts, enabling more reliable ventricle segmentation even " +
      "in complex clinical scenarios."
  },
  {
    hidden: true,
    title: "Automatic video edition and highlighting on surgery videos",
    img: "./proj_img/Yijing.jpg",
    category: "Research",
    description: "Description coming soon."
  },
  {
    title: "Spine Separation: From Spine Regions to Individual Vertebrae",
    short: "Spine Separation",
    img: "./proj_img/Spine-card.png",
    video: ["./proj_img/Spine.webm", "./proj_img/Spine.mp4"],
    category: "Work",
    description:
      "Segmenting all 24 vertebrae directly is hard: neighboring vertebrae look almost identical, so models often " +
      "shift labels by one level. Splitting the spine into cervical, thoracic and lumbar regions is far more reliable. " +
      "This project starts from those region masks and separates them into individual, correctly numbered vertebrae, " +
      "including the posterior elements (the bony arch at the back of each vertebra), which are easily handed to the " +
      "wrong level. On a 40-scan test split from the public TotalSegmentator CT dataset, it reaches a Dice of 0.911 " +
      "and identifies 94.7% of vertebra levels, and over 90% of thoracic and lumbar posterior bone goes to the " +
      "right vertebra.",
    results: {
      caption: "TotalSegmentator CT, 40-scan test split unless noted",
      columns: ["Metric", "Result"],
      rows: [
        ["Dice", "0.911"],
        ["Vertebra levels identified", "94.7%"],
        ["Scans with every level right", "45.0%"],
        ["Thoracic / lumbar posterior bone assigned correctly", "92.8 / 90.1%"],
        ["Cut-off vertebrae at the scan edge identified (all 95 scans)", "69.7%"]
      ]
    },
    tags: ["3D segmentation", "CT", "Medical imaging", "Geometry processing"],
    credit: "Evaluation data: TotalSegmentator CT dataset (CC BY 4.0), Wasserthal et al., Radiology: Artificial " +
      "Intelligence, 2023."
  },
  {
    title: "Video based Speed Measurement",
    short: "Speed Measurement",
    img: "./proj_img/RoadSafety.png",
    category: "Research",
    description:
      "The project focused on vehicle speed estimation based on videos and was therefore built based on object " +
      "recognition and tracking algorithm. A calibration method is also implemented here to fix the tortion of distance " +
      "caused by Perspective. Detailed code will be released with paper later.",
    tags: ["YOLOv5", "StrongSORT", "Computer vision"]
  },
  {
    earlier: true,
    short: "Epidemic Simulation",
    title: "Analysis of Vaccination on Markovian Random Walk Model of epidemic proliferation",
    img: "./proj_img/Covid19.jpg",
    category: "Research",
    description:
      "The project simulated the spread of the epidemic under SIR model by using Markovian random walk and the paper " +
      "then discussed the impact of epidemic prevention policies and vaccines on the spread of the epidemic.",
    tags: ["Markov chains", "Simulation", "SIR model"],
    links: { "Paper": "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12163/1216322/Analysis-of-vaccination-on-Markovian-random-walk-model-of-epidemic/10.1117/12.2628029.full" }
  },
  {
    earlier: true,
    title: "Depression Detection based on Audio and Text Data",
    short: "Depression Detection",
    img: "./proj_img/Depression.jpg",
    category: "Coursework",
    description:
      "Team course project on detecting depression from clinical interview recordings in the DAIC-WOZ dataset, using " +
      "both what participants say and how they say it. Building on an ICASSP 2022 GRU/BiLSTM architecture, we trained " +
      "separate audio (NetVLAD features, GRU) and text (ELMo embeddings, BiLSTM) models with attention, then a fusion " +
      "network that combines them. With only 30 depressed vs. 77 non-depressed participants in training, the project " +
      "focused on handling the imbalance: grouping answers into five-response windows, resampling, and noise-based " +
      "augmentation, and how each changed the results. The fused model reached 71% accuracy (F1 0.65) on the " +
      "development split, ahead of either single-modality model.",
    tags: ["LSTM", "GRU", "Audio + text"],
    links: { "Code": "https://github.com/Dingyx0100/DepressionDetection" }
  },
  {
    earlier: true,
    title: "Safe Logistics: Django based web database inquiry system",
    img: "./proj_img/SafeLogistics.png",
    category: "Coursework",
    description:
      "The project was built based on Python and Django and aimed to provide information for sellers, buyers and " +
      "logistics companies. And it also provides info on domestic pandemic (covid-19) situation so that buyers can be " +
      "notified on potential epidemic risk.",
    tags: ["Django", "SQL", "Python"],
    links: { "Code": "https://github.com/ShupeiLi/database-project" }
  }
];
