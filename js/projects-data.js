/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  PORTEFEUILLE DE PROJETS — Ayoub Boulahdoub
 *  Ce fichier permet d'ajouter très facilement de nouveaux projets !
 *  Pour ajouter un projet, il suffit d'ajouter un nouvel objet dans le tableau ci-dessous.
 * ═══════════════════════════════════════════════════════════════════════════
 */

const projectsData = [
  {
    id: "serenda",
    title: "Serenda — Boutique Vêtements Femmes",
    category: "ecommerce", // 'ecommerce', 'fullstack', 'react'
    categoryLabel: "E-Commerce • Client Réel",
    description: "Boutique en ligne moderne pour la vente de vêtements et prêt-à-porter féminin, développée pour un client. Catalogue de produits élégant, panier d'achat fluide, design responsive et expérience utilisateur optimisée pour la conversion.",
    image: "assets/serenda_preview.jpg",
    tags: ["E-Commerce", "JavaScript", "HTML5", "CSS3", "UI/UX", "Responsive"],
    liveUrl: "https://serenda.youcan.store/",
    githubUrl: null, // Mettre le lien GitHub si disponible, ou null
    featured: true
  },
  {
    id: "drive-master",
    title: "Drive Master — Gestion & Permis de Conduire",
    category: "fullstack",
    categoryLabel: "Application Web • Éducation & Auto-École",
    description: "Plateforme interactive complète de préparation aux examens officiels du permis de conduire. Séries de questions thématiques, chronomètre en temps réel, correction détaillée et tableau de bord de progression.",
    image: "assets/drive_master_preview.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "PHP", "MySQL", "REST API"],
    liveUrl: "https://front-end-drive-master.vercel.app/",
    githubUrl: "https://github.com/AYOUBCODECPP",
    featured: true
  },
  {
    id: "ecommerce-php",
    title: "Boutique E-Commerce Modulaire",
    category: "ecommerce",
    categoryLabel: "Plateforme Web • PHP & MySQL",
    description: "Architecture e-commerce complète avec gestion des catégories, panier persistant, espace d'administration sécurisé pour la gestion des stocks, des commandes et des clients.",
    image: "assets/serenda_preview.jpg",
    tags: ["PHP", "MySQL", "Architecture MVC", "JavaScript", "HTML/CSS"],
    liveUrl: "https://github.com/AYOUBCODECPP",
    githubUrl: "https://github.com/AYOUBCODECPP",
    featured: false
  }

  /* ── GUIDE POUR AJOUTER UN NOUVEAU PROJET ────────────────────────────────
  , {
    id: "mon-nouveau-projet",
    title: "Nom de Votre Projet",
    category: "fullstack", // ou 'ecommerce', 'react', 'mobile'
    categoryLabel: "Type de projet (ex: Application Web SaaS)",
    description: "Courte description de ce que fait l'application, les problèmes résolus et ses fonctionnalités.",
    image: "assets/votre_image.jpg", // ou lien externe https://...
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    liveUrl: "https://votre-demo.com",
    githubUrl: "https://github.com/AYOUBCODECPP/mon-repo",
    featured: true
  }
  ───────────────────────────────────────────────────────────────────────── */
];
