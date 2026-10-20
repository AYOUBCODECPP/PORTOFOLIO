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
    tagline: "Turning Ideas into Digital Experiences",
    location: "Oulad Berhil, Taroudante, Maroc",
    phone: "+212 651359159",
    email: "ayoub1999boulahdoub@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayoub-boulahdoub-302062293",
    github: "https://github.com/AYOUBCODECPP",
    cvPath: "assets/CV_Ayoub_Boulahdoub.pdf",
    portrait: "assets/PERSONALIMG.jpg",
    coverBg: "assets/BACKGROUND.jpg",
    bio: [
      "Technicien Spécialisé en Développement Informatique, diplômé de l'ITIAM (Institut des Technologies de l'Informatique Appliquées au Management). Je m'intéresse au développement informatique, à la création d'applications web et à la conception de solutions numériques adaptées aux besoins des utilisateurs.",
      "Mon parcours m'a permis d'acquérir des connaissances en programmation, en développement web et en gestion de bases de données. Je développe mes compétences à travers des projets pratiques et une démarche d'apprentissage continu.",
      "Mon objectif est de progresser vers le développement Full Stack et de concevoir des applications utiles, performantes et faciles à utiliser."
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
      degree: "Diplôme de Technicien Spécialisé en Développement Informatique",
      institution: "ITIAM — Institut des Technologies de l'Informatique Appliquées au Management",
      location: "Taroudante, Maroc",
      period: "2024 – 2026",
      status: "Diplôme accrédité",
      icon: "fa-graduation-cap",
      highlights: [
        "Développement Web (HTML, CSS, JavaScript, PHP, MySQL)",
        "Programmation Orientée Objet (C++, C#, Java)",
        "Conception & administration de bases de données relationnelles",
        "Algorithmique avancée, structures de données & résolution de problèmes"
      ]
    },
    {
      degree: "Baccalauréat en Sciences Physiques",
      institution: "Lycée — Oulad Berhil",
      location: "Oulad Berhil, Maroc",
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
      role: "Agent de Sécurité Privée",
      company: "Centre du Juge Résident",
      location: "Tafingoult, Maroc",
      period: "Depuis le 15/03/2024",
      type: "Poste à responsabilités",
      icon: "fa-shield-halved",
      responsibilities: [
        "Surveillance des locaux et des personnes",
        "Contrôle des accès et application des consignes de sécurité",
        "Rondes d'inspection régulières",
        "Signalement des situations inhabituelles et des incidents",
        "Application des procédures de sécurité",
        "Prévention des risques par la vigilance et la réactivité"
      ],
      transferableSkills: [
        "Discipline & rigueur",
        "Sens des responsabilités",
        "Attention aux détails",
        "Fiabilité & ponctualité",
        "Gestion du stress"
      ]
    }
  ],

  // ─── Stages Professionnels ─────────────────────────────────
  internships: [
    {
      role: "Stagiaire en Développement Informatique & Support",
      company: "Auto-École Ibn Tachfine",
      location: "Oulad Berhil, Maroc",
      period: "Dates à confirmer",
      icon: "fa-laptop-code",
      responsibilities: [
        "Installation, configuration et maintenance informatique de base",
        "Mises à jour logicielles et dépannage",
        "Inscription des candidats et gestion des dossiers",
        "Assistance aux opérations d'examen de conduite",
        "Activités liées aux procédures NARSA",
        "Participation au développement d'une application C# de simulation d'examen de conduite",
        "Travail sur une application web de préparation au permis de conduire"
      ]
    }
  ],

  // ─── Compétences Techniques ────────────────────────────────
  skills: {
    // Compétences personnelles confirmées
    mastered: [
      { name: "HTML",       level: "Confirmé", icon: "fa-html5",    brand: true },
      { name: "CSS",        level: "Confirmé", icon: "fa-css3-alt", brand: true },
      { name: "JavaScript", level: "Confirmé", icon: "fa-js",       brand: true },
      { name: "PHP",        level: "Confirmé", icon: "fa-php",      brand: true },
      { name: "MySQL",      level: "Confirmé", icon: "fa-database", brand: false }
    ],
    // Technologies étudiées ou utilisées en contexte de projets
    studied: [
      { name: "Java",         category: "Langage étudié" },
      { name: "Python",       category: "Langage étudié" },
      { name: "C#",           category: "Langage étudié" },
      { name: "C++ / OOP",    category: "Langage étudié" },
      { name: "React",        category: "Framework / Bibliothèque" },
      { name: "Vite",         category: "Outil de build" },
      { name: "Tailwind CSS", category: "Framework CSS" },
      { name: "Laravel",      category: "Framework PHP" }
    ],
    // Outils & environnements
    tools: [
      { name: "VS Code",             detail: "IDE principal" },
      { name: "Visual Studio",       detail: "Développement C# / .NET" },
      { name: "Git & GitHub",        detail: "Versionnement" },
      { name: "Figma & Canva",       detail: "Prototypage UI/UX & Design" },
      { name: "Outils IA",           detail: "Claude, Gemini, GPT, DeepSeek" }
    ],
    // Services techniques complémentaires
    technicalServices: [
      { title: "Maintenance & assemblage PC",              desc: "Installation, diagnostic matériel, optimisation système" },
      { title: "Vidéosurveillance (CCTV)",                 desc: "Installation et configuration de caméras IP / DVR" },
      { title: "Réseaux & Wi-Fi longue distance",          desc: "Configuration CPE et points d'accès" },
      { title: "Installation & configuration radar",       desc: "Configuration de systèmes radar" },
      { title: "Conception de logos & identités visuelles", desc: "Création sous Figma & Canva" }
    ]
  },

  // ─── Projets ───────────────────────────────────────────────
  projects: [
    {
      id: "drive-master",
      title: "Drive Master — Plateforme de préparation au permis de conduire",
      category: "Application Web",
      status: "En Ligne",
      isLive: true,
      liveUrl: "https://front-end-drive-master.vercel.app/",
      githubUrl: null,
      description: "Projet web destiné à faciliter l'apprentissage et la préparation aux examens du permis de conduire à travers une interface dédiée aux candidats.",
      features: [
        "Interface interactive dédiée aux candidats",
        "Séries de questions conformes aux standards",
        "Interface responsive pour mobiles et ordinateurs"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "PHP", "MySQL"]
    },
    {
      id: "ecommerce-store",
      title: "Boutique E-Commerce",
      category: "Plateforme Web",
      status: "Projet Réalisé",
      isLive: false,
      liveUrl: null,
      githubUrl: null,
      description: "Conception d'une boutique en ligne complète destinée à présenter des produits, organiser un catalogue et proposer une expérience d'achat structurée et intuitive.",
      features: [
        "Catalogue produits dynamique",
        "Système de panier d'achat",
        "Architecture modulaire"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],

  // ─── Langues ───────────────────────────────────────────────
  languages: [
    {
      name: "Arabe",
      level: "Communication formelle",
      icon: "fa-earth-africa"
    },
    {
      name: "Français",
      level: "Lecture, écriture, compréhension et expression orale",
      icon: "fa-book-open-reader"
    },
    {
      name: "Anglais",
      level: "Connaissances de base",
      icon: "fa-globe"
    }
  ],

  // ─── Qualités & Atouts ─────────────────────────────────────
  strengths: [
    "Rigueur & discipline professionnelle",
    "Autonomie & initiative",
    "Esprit d'équipe & collaboration",
    "Apprentissage continu & curiosité technique",
    "Sens des responsabilités",
    "Ponctualité & fiabilité"
  ],

  // ─── Objectifs Professionnels ──────────────────────────────
  goals: [
    "Développer progressivement mes compétences en développement web et logiciel",
    "Renforcer mes connaissances en bases de données et en conception d'applications",
    "Évoluer vers le métier de développeur Full Stack",
    "Concevoir des applications utiles, performantes et faciles à utiliser"
  ],

  // ─── Citation de l'objectif principal ─────────────────────
  goalStatement: "Développer progressivement mes compétences en développement web et logiciel, renforcer mes connaissances en bases de données et en conception d'applications, et évoluer vers le métier de développeur Full Stack."
};
