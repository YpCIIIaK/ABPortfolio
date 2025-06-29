export const siteContent = {
  // Основная информация
  personal: {
    name: "Abdi Akchurin",
    shortName: "Abdra",
    title: "Physics Student | Aspiring Researcher in Quantum Computing",
    subtitle:
      "Research Assistant at NCSU specializing in quantum computing and machine learning for superconducting quantum systems. Innovating quantum hardware with AI.",
    email: "aakchur@ncsu.edu",
    linkedin:
      "https://www.linkedin.com/in/abdrakhman-akchurin-a0274724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Abdrakhman-Akchurin",
    profileImage: "/profile.jpg",
  },

  // Навигация
  navigation: [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#experience", label: "Experience" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" },
  ],

  // Секция "О себе"
  about: {
    title: "About",
    paragraphs: [
      "My name is Abdrakhman Akchurin, going by the nickname Abdi. I am a physics student at North Carolina State University (NCSU).",
      "Originally from Kazakhstan, I am deeply fascinated by the transformative potential of quantum computing and am committed to contributing to its advancement.",
      "My current efforts are focused on developing machine learning models to automate and optimize different parts of superconducting quantum computers. My broader career aspiration is to leverage my physics background to contribute to the future of quantum computing, specifically by aiding in the development of practical and impactful quantum computers that can benefit the world.",
    ],
    education: {
      title: "Education",
      degree: "Bachelor's of Science, Physics",
      university: "North Carolina State University",
      period: "August 2022 - May 2026",
      location: "Raleigh, NC",
      gpa: "3.9",
      date: "August 2022 - May 2026",
    },
    skills: {
      title: "Skills",
      list:
        "Machine Learning, Quantum Computing, Data Analysis; Programming Languages: Python, LabView, MatLab, Mathematica; Tools/Libraries: Matplotlib, Scipy, Scikit-learn, Numpy, Qiskit, Qiskit Metal, PyTorch",
    },
    certifications: {
      title: "Certifications",
      list: [
        "CS50P: Introduction to Programming with Python – Mastered foundational programming concepts, including functions, loops, and object-oriented programming.",
        "CS50AI: Introduction to Artificial Intelligence with Python – Gained hands-on experience building AI models using search algorithms, neural networks, and natural language processing.",
      ],
    },
  },

  // Исследования и проекты
  research: {
    title: "Research & Projects",
    projects: [
      {
        title:
          "Machine Learning for Superconducting Qubit Hardware Design Automation",
        institution: "NCSU - Dr. Chen's Lab",
        period: "Jan 2025 - Present",
        description:
          "This research focuses on advancing superconducting quantum computers by exploring machine learning techniques for both forward and inverse design predictions in multi-element systems.\n\nSpecific Goal: To refine ML models that efficiently predict output parameters of multi-qubit superconducting systems and facilitate inverse design by determining optimal physical configurations based on desired performance metrics.\n\nKey Technologies/Methodologies: Extending ML methods beyond single-qubit design using models like MLP and INN; expanding datasets with multi-element qubit configurations via Latin Hypercube Sampling; analyzing correlations between design parameters and capacitance matrices; and training models for inverse design.",
        impact:
          "This project aims to enable efficient superconducting qubit development by delivering ML models capable of accurately predicting qubit frequencies and coupling strengths, and by providing a validated inverse design approach that contributes to scalable quantum hardware solutions.",
        current: true,
      },
      {
        title: "Machine Learning–Enabled Optimization of Liouvillian Exceptional-Point Encircling Paths",
        institution: "NCSU - Dr. Chen's Lab",
        period: "Jan 2025 - Present",
        description:
          "Harnessing advanced optimization and ML-driven techniques to design high-fidelity control pulses that dynamically encircle non-Hermitian exceptional points in driven, dissipative qubit systems.\n\nSpecific Goal: Develop and validate algorithms that generate closed-loop (J(t),Δ(t)) trajectories around the Liouvillian EP of a superconducting qubit, maximizing the |+x⟩→|−x⟩ state-flip fidelity under realistic decoherence constraints (γₑ, γ_φ).\n\nKey Technologies & Methodologies:\n- Periodic Fourier bases to guarantee loop closure by construction.\n- Black-box & Bayesian search (Differential Evolution, Gaussian-Process Bayesian Optimization) with winding-number and loop-radius constraints.\n- Open-system Lindblad simulations via adaptive ODE integration to evaluate fidelity and purity.\n- Gradient-based refinement (GRAPE/Krotov) using exact Lindbladian gradients for rapid convergence.",
        impact:
          "This project delivers a fully automated pipeline for non-Hermitian control design—turning the topological robustness of EP encirclement into a practical, high-fidelity operation on superconducting qubit hardware, paving the way for robust, scalable quantum control protocols.",
        current: true,
      },
      {
        title: "Quantum Perlin Noise Game",
        institution: "Personal Project",
        period: "2024",
        description:
          "Developed a 2D game incorporating quantum-generated Perlin noise for procedural terrain generation.",
        technologies: "Python, Quantum Computing, Game Development",
        videoUrl: "/zelda.mp4",
        current: false,
      },
    ],
  },

  // Опыт работы
  experience: {
    title: "Experience",
    positions: [
      {
        title: "Research Assistant",
        organization: "NCSU - Dr. Chen's Lab",
        period: "Jan 2025 - Present",
        description:
          "Developing machine learning models for both forward and inverse prediction in multi-element superconducting quantum computer designs; training models to predict design parameters required to achieve target performance metrics, enabling inverse design capabilities; and optimizing various parts of the superconducting quantum hardware and software using ML.",
      },
      {
        title: "Research Assistant",
        organization: "NCSU - Roederer Group",
        period: "Jan 2023 - Present",
        description:
          "Conducting spectrum synthesis and utilizing MOOG and Python to derive elemental abundances for 311 metal-poor stars; applying NLTE corrections and refining stellar parameters to improve accuracy; and performing data analysis, statistical comparisons, and cross-validations with other metal-poor star surveys to enhance research precision.",
      },
    ],
  },

  // Публикации
  publications: {
    title: "Publications",
    papers: [
      {
        title:
          "Quantum Error Mitigation Techniques for Near-Term Quantum Devices",
        journal: "Journal of Quantum Information Science",
        year: "2023",
        authors: "A. Akchurin, I. Petrov, S. Sidorov",
      },
      {
        title:
          "Implementing Shor's Algorithm on a Superconducting Quantum Processor",
        journal: "Physical Review Letters",
        year: "2022",
        authors: "A. Akchurin, M. Ivanova",
      },
      {
        title: "Quantum Machine Learning: Challenges and Opportunities",
        journal: "Quantum Computing Review",
        year: "2021",
        authors: "A. Akchurin",
      },
    ],
  },

  // Контакты
  contact: {
    title: "Get In Touch",
    description:
      "Open to research collaborations, consultations, and new opportunities in quantum computing.",
    socialLinks: [
      { name: "Email", url: "mailto:aakchur@ncsu.edu" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdrakhman-akchurin-a0274724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      { name: "GitHub", url: "https://github.com/Abdrakhman-Akchurin" },
    ],
  },

  // Кнопки и ссылки
  buttons: {
    viewResearch: "View research work",
    viewAllProjects: "View all projects",
    getInTouch: "Get in touch",
  },

  // Мета-информация для SEO
  meta: {
    title: "Abdrakhman Akchurin - Physics Student & Quantum Researcher",
    description:
      "Physics student at NCSU specializing in quantum computing and machine learning for superconducting quantum systems",
  },
};
