export const siteContent = {
  // Основная информация
  personal: {
    name: "Abdrakhman Akchurin",
    shortName: "Abdra",
    title: "Physics Student & Quantum Researcher",
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
      "My name is Abdrakhman Akchurin, and I am a physics student at North Carolina State University (NCSU). Originally from Kazakhstan, I am deeply fascinated by the transformative potential of quantum computing and am committed to contributing to its advancement.",

      "My current efforts are focused on developing machine learning models to automate and optimize the hardware design processes for superconducting quantum computers. I work as a Research Assistant in Dr. Chen's Lab, where I'm developing ML models for both forward and inverse prediction in multi-element superconducting quantum computer designs.",

      "My broader career aspiration is to leverage my physics background to contribute to the future of quantum computing, specifically by aiding in the development of practical and impactful quantum computers that can benefit the world.",
    ],
    education: {
      title: "Education",
      degree: "Bachelor's of Science, Physics",
      university: "North Carolina State University",
      period: "Aug 2022 - May 2026",
      location: "Raleigh, NC",
      gpa: "3.9",
      date: "Aug 2022 - May 2026",
    },
    skills: {
      title: "Skills",
      list: "Machine Learning, Quantum Computing, Data Analysis, Python, LabView, MatLab, Mathematica, PyTorch, Qiskit, Qiskit Metal",
    },
    certifications: {
      title: "Certifications",
      list: [
        "CS50P: Introduction to Programming with Python",
        "CS50AI: Introduction to Artificial Intelligence with Python",
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
          "Refining ML models for multi-qubit superconducting systems and inverse design. Utilizing MLP and INN, expanding datasets, analyzing correlations, training for inverse design.",
        impact: "Potential impact: scalable quantum hardware solutions",
        current: true,
      },
      {
        title: "Quantum Perlin Noise Game",
        institution: "Personal Project",
        period: "2024",
        description:
          "2D game with quantum-generated Perlin noise for procedural terrain generation.",
        technologies: "Python, Quantum Computing, Game Development",
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
          "ML models for quantum computer designs, multi-element systems, model optimization, cross-validation",
      },
      {
        title: "Research Assistant",
        organization: "NCSU - Roederer Group",
        period: "Jan 2023 - Present",
        description:
          "Spectrum synthesis, MOOG & Python, NLTE corrections, data analysis for metal-poor stars",
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
    title: "Contact",
    description:
      "Open to research collaborations, consultations, and new opportunities in quantum computing and machine learning.",
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
      { name: "GitHub", url: "https://github.com/yourusername" },
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
