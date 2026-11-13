// Project list for the showcase grid on index.html.
// To add a project, add one object to this array (newest first).
//   title       card + modal heading
//   short       optional short name used in skill tooltips (default: title before ":")
//   img         image path; any aspect ratio works, it is cropped to 16:10 on the card
//   thumb       optional, separate card image (use when img would crop badly); the modal still shows img
//   category    must match a filter button's data-filter: Research | Coursework | Personal
//   description full text; the card shows the first 3 lines, the modal shows all of it
//   tags        optional, shown in the modal
//   links       optional, { label: url } shown as buttons on the card and in the modal
//   hidden      optional, true keeps the entry here but leaves it off the page
//   credit      optional, small attribution line under the modal text (e.g. for third-party data)

var PROJECTS = [
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
    hidden: true,
    title: "Automated Spine Vertebrae Segmentation",
    img: "./proj_img/Yijing.jpg",
    category: "Research",
    description:
      "Automated Vertebrae Segmentation provides multiple benefits including improving time efficiency, facilitating 3D " +
      "modeling and supporting diagnosis (Spinal Fractures, Tumors and Metastasis, Osteoporosis, etc.). Nevertheless, " +
      "training a model on the 24 vertebrae is challenging, due to inaccuracy, it is very likely disorderly labeled. " +
      "Training a model on separating the spine into Cervical, Thoracic and Lumbar is much easier and more accurate on " +
      "the other hand. Therefore, can we think of a method that automatically separate the vertebrae within the three parts?"
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
    title: "Depression Detection based on Audio and Text Data",
    short: "Depression Detection",
    img: "./proj_img/Depression.jpg",
    category: "Coursework",
    description:
      "This project is a coursework on Audio and text based Depression Classification using fused model (LSTM+GRU). " +
      "The experiment also explored on how data enlarging and resampling affect the result.",
    tags: ["LSTM", "GRU", "Audio + text"]
  },
  {
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
