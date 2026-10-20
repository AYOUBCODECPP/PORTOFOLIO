/**
 * ═══════════════════════════════════════════════════════════════
 *  Données Officielles du Portfolio — Ayoub Boulahdoub
 *  Source : CV officiel vérifié & informations confirmées
 *  ⚠ Ne pas inventer de données non vérifiées.
 * ═══════════════════════════════════════════════════════════════
 */

const portfolioData = {

  // ─── Profil Personnel ───────────────────────────────────────
  profile: {
    fullName: "Ayoub Boulahdoub",
    title: "Technicien Spécialisé en Développement Informatique",
    tagline: "Développeur Informatique | Web & Logiciel",
    location: "Ouled Berhil, Taroudant, Maroc",
    phone: "+212 651 359 159",
    email: "ayoub1999boulahdoub@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayoub-boulahdoub-302062293",
    github: "https://github.com/AYOUBCODECPP",
    cvPath: "assets/CV_Ayoub_Boulahdoub.pdf",
    portrait: "assets/PERSONALIMG.jpg",
    bio: [
      "Technicien spécialisé en développement informatique (ITIAM, promotion 2026), formé au développement (PHP, MySQL, C++, C#).",
      "À l'aise avec les outils d'IA appliqués au développement (Claude Code, ChatGPT, Gemini, DeepSeek) pour accélérer la conception, le débogage et la livraison.",
      "Rigoureux, autonome et habitué au travail en équipe, je recherche un poste ou un stage de développeur informatique."
    ]
  },

  // ─── Chapitres & Navigation ─────────────────────────────────
  chapters: [
    { id: 1,  title: "Couverture",              spread: 0,  icon: "fa-book" },
    { id: 2,  title: "Sommaire & Index",         spread: 1,  icon: "fa-list-ol" },
    { id: 3,  title: "À Propos de Moi",          spread: 1,  icon: "fa-user" },
    { id: 4,  title: "Formation & Diplômes",     spread: 2,  icon: "fa-graduation-cap" },
    { id: 5,  title: "Expérience & Stages",      spread: 2,  icon: "fa-briefcase" },
    { id: 6,  title: "Compétences Techniques",   spread: 3,  icon: "fa-code" },
    { id: 7,  title: "Projets Sélectionnés",     spread: 3,  icon: "fa-rocket" },
    { id: 8,  title: "Langues",                  spread: 4,  icon: "fa-language" },
    { id: 9,  title: "Objectifs Professionnels",  spread: 4,  icon: "fa-compass" },
    { id: 10, title: "Contact & Correspondance", spread: 5,  icon: "fa-envelope" }
  ],

  // ─── Formation Académique ──────────────────────────────────
  education: [
    {
      degree: "Technicien Spécialisé en Développement Informatique",
      institution: "ITIAM — Institut des Technologies de l'Informatique Appliquées au Management",
      location: "Taroudant, Maroc",
      period: "2024 – 2026",
      status: "Diplôme accrédité",
      icon: "fa-graduation-cap",
      highlights: [
        "Développement Web (HTML5, CSS3, JavaScript, PHP, MySQL, Tailwind CSS)",
        "Programmation Orientée Objet (C++, C#)",
        "Conception & administration de bases de données relationnelles (MySQL)",
        "Algorithmique & résolution de problèmes, applications desktop (Electron.js)"
      ]
    },
    {
      degree: "Baccalauréat Sciences Physiques",
      institution: "Lycée Dakhla",
      location: "Ouled Berhil, Maroc",
      period: "2019",
      status: "Obtenu",
      icon: "fa-certificate",
      highlights: [
        "Formation scientifique rigoureuse axée sur la logique, les mathématiques et la démarche analytique"
      ]
    }
  ],

  // ─── Expérience Professionnelle ────────────────────────────
  experiences: [
    {
      role: "Agent de sécurité privée",
      company: "STE MOMAB SERVICE SARL",
      location: "Tafingoult, Maroc",
      period: "03/2024 – 07/2026",
      type: "Poste à responsabilités",
      icon: "fa-shield-halved",
      responsibilities: [
        "Surveillance et sécurisation d'un site résidentiel",
        "Contrôle des accès et application des consignes de sécurité",
        "Rondes d'inspection régulières et gestion des accès"
      ],
      transferableSkills: [
        "Ponctualité & discipline",
        "Sens des responsabilités & sang-froid",
        "Rigueur et attention aux détails",
        "Fiabilité & gestion du stress"
      ]
    }
  ],

  // ─── Stages Professionnels ─────────────────────────────────
  internships: [
    {
      role: "Stagiaire en développement informatique",
      company: "Auto-école Ibn Tachfine",
      location: "Ouled Berhil, Maroc",
      period: "04/2024 et 04/2026",
      icon: "fa-laptop-code",
      responsibilities: [
        "Mise en pratique des compétences en développement web et bases de données (HTML/CSS/JS, PHP, MySQL) en contexte professionnel",
        "Travail en autonomie et en lien direct avec l'équipe sur des besoins informatiques concrets",
        "Participation au développement et à l'optimisation d'outils numériques pour les candidats"
      ]
    }
  ],

  // ─── Certifications & Diplômes ────────────────────────────
  certifications: [
    { name: "Diplôme de Technicien Spécialisé en Développement Informatique", issuer: "ITIAM", year: "2026" },
    { name: "Certificat d'achèvement du cours C++", issuer: "Certifié", year: "2025" },
    { name: "Certificat d'achèvement du cours C#", issuer: "Certifié", year: "2025" },
    { name: "Certificat d'achèvement du cours Bases de données (Databases)", issuer: "Certifié", year: "2025" },
    { name: "Certificat d'achèvement du cours Programmation orientée objet (POO)", issuer: "Certifié", year: "2025" },
    { name: "Algorithms & Problem-Solving", issuer: "Certifié", year: "2025" }
  ],

  // ─── Compétences Techniques ────────────────────────────────
  skills: {
    // Compétences Front-end, Back-end & Bases de données
    mastered: [
      { name: "HTML5 & CSS3", level: "Confirmé", icon: "fa-html5",    brand: true },
      { name: "JavaScript",   level: "Confirmé", icon: "fa-js",       brand: true },
      { name: "Tailwind CSS", level: "Confirmé", icon: "fa-wind",     brand: false },
      { name: "PHP",          level: "Confirmé", icon: "fa-php",      brand: true },
      { name: "MySQL",        level: "Confirmé", icon: "fa-database", brand: false }
    ],
    // Langages & Concepts
    studied: [
      { name: "C++",                          category: "Langage & POO" },
      { name: "C#",                           category: "Langage & POO" },
      { name: "Programmation Orientée Objet", category: "Concept clé" },
      { name: "Algorithmique & Problèmes",    category: "Logique & Résolution" },
      { name: "Electron.js",                  category: "Applications Desktop" },
      { name: "React & Vite",                 category: "Framework Front-end" }
    ],
    // Outils & Développement Assisté par IA
    tools: [
      { name: "Développement IA",    detail: "Claude & Skills, ChatGPT, Gemini, DeepSeek" },
      { name: "VS Code & Antigravity", detail: "Environnements de développement" },
      { name: "Visual Studio",        detail: "Développement C# / .NET" },
      { name: "Git & GitHub",         detail: "Gestion de versions & Collaboration" },
      { name: "Figma & Canva",        detail: "Design UI/UX & Prototypage" }
    ],
    // Qualités & Compétences Transversales
    transversal: [
      "Gestion d'équipe",
      "Rigueur & sens des responsabilités",
      "Autonomie & résolution de problèmes",
      "Veille technologique continue",
      "Curiosité & capacité d'apprentissage"
    ]
  },

  // ─── Projets ───────────────────────────────────────────────
  projects: [
    {
      id: "serenda",
      title: "Serenda — Boutique Vêtements Femmes",
      category: "E-Commerce",
      status: "Client Réel",
      isLive: true,
      liveUrl: "https://serenda.youcan.store/",
      githubUrl: null,
      description: "Boutique en ligne moderne pour la vente de vêtements féminins, développée pour un client réel. Catalogue élégant, panier fluide et expérience mobile optimisée.",
      features: [
        "Catalogue produits dynamique",
        "Panier d'achat fluide & commande rapide",
        "Interface responsive et moderne"
      ],
      technologies: ["E-Commerce", "JavaScript", "HTML5", "CSS3", "UI/UX"]
    },
    {
      id: "drive-master",
      title: "Drive Master — Préparation au Permis de Conduire",
      category: "Application Web",
      status: "En Ligne",
      isLive: true,
      liveUrl: "https://front-end-drive-master.vercel.app/",
      githubUrl: "https://github.com/AYOUBCODECPP",
      description: "Plateforme interactive complète de préparation aux épreuves du code de la route et gestion d'auto-école avec séries officielles chronométrées et correction instantanée.",
      features: [
        "Interface interactive dédiée aux candidats",
        "Séries officielles chronométrées",
        "Correction détaillée instantanée"
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "PHP", "MySQL"]
    }
  ],

  // ─── Langues ───────────────────────────────────────────────
  languages: [
    {
      name: "Arabe",
      level: "Langue maternelle",
      icon: "fa-earth-africa"
    },
    {
      name: "Français",
      level: "Courant",
      icon: "fa-book-open-reader"
    },
    {
      name: "Anglais",
      level: "Courant",
      icon: "fa-globe"
    }
  ],

  // ─── Qualités & Atouts ─────────────────────────────────────
  strengths: [
    "Rigueur et sens des responsabilités",
    "Gestion d'équipe",
    "Autonomie et résolution de problèmes",
    "Veille technologique continue",
    "Curiosité et capacité d'apprentissage"
  ],

  // ─── Objectifs Professionnels ──────────────────────────────
  goals: [
    "Concevoir et développer des applications web et logicielles performantes",
    "Mettre à profit les compétences en PHP, MySQL, C++, C# et outils d'IA",
    "Intégrer une équipe ambitieuse en tant que développeur informatique"
  ],

  // ─── Citation de l'objectif principal ─────────────────────
  goalStatement: "Technicien spécialisé en développement informatique, rigoureux et autonome, à l'aise avec les technologies modernes et les outils d'IA pour concevoir des solutions performantes et innovantes."
};
