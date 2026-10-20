/**
 * Portfolio Ayoub Boulahdoub
 * Scripts d'Interactivité : Navigation, Filtres Projets, Témoignages & Formulaire
 */

(function () {
  'use strict';

  /* ── 1. Données des Témoignages (Slider) ─────────────────────────────────── */
  const testimonials = [
    {
      quote: "« Ayoub a fait preuve d'une excellente écoute et d'une grande rigueur dans le développement de la boutique Serenda. Le design est très soigné, la navigation fluide et le panier d'achat fonctionne sans accroc. Nos clientes adorent la rapidité du site ! »",
      author: "Client Propriétaire — Serenda",
      role: "Boutique de Mode Féminine • 2025",
      rating: 5
    },
    {
      quote: "« La plateforme Drive Master a complètement transformé notre approche d'entraînement au code de la route. Interface réactive, corrections instantanées et zéro bug. Ayoub est un développeur full stack très compétent et impliqué. »",
      author: "Formateur Auto-École — Drive Master",
      role: "Application Web Éducative • 2026",
      rating: 5
    },
    {
      quote: "« Très impressionné par la clarté du code et l'architecture modulaire mise en place. Ayoub maîtrise parfaitement la chaîne de développement, de la base de données relationnelle jusqu'aux interfaces modernes avec React et Tailwind CSS. »",
      author: "Collaborateur Technique",
      role: "Projet E-Commerce & Full Stack • 2025",
      rating: 5
    }
  ];

  let currentTestimonial = 0;
  let testimonialInterval = null;

  const quoteEl = document.getElementById('testimonialQuote');
  const authorEl = document.getElementById('testimonialAuthor');
  const roleEl = document.getElementById('testimonialRole');
  const sdots = document.querySelectorAll('.sdot');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const cardEl = document.getElementById('testimonialCard');

  function renderTestimonial(index) {
    if (!quoteEl || !authorEl || !roleEl) return;

    if (cardEl) {
      cardEl.style.opacity = '0';
      cardEl.style.transform = 'translateY(6px)';
    }

    setTimeout(() => {
      const t = testimonials[index];
      quoteEl.textContent = t.quote;
      authorEl.textContent = t.author;
      roleEl.textContent = t.role;

      sdots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });

      if (cardEl) {
        cardEl.style.opacity = '1';
        cardEl.style.transform = 'translateY(0)';
      }
    }, 180);
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextTestimonial(); resetTestimonialTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevTestimonial(); resetTestimonialTimer(); });

  sdots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      if (!isNaN(idx)) {
        currentTestimonial = idx;
        renderTestimonial(currentTestimonial);
        resetTestimonialTimer();
      }
    });
  });

  function startTestimonialTimer() {
    testimonialInterval = setInterval(nextTestimonial, 7000);
  }

  function resetTestimonialTimer() {
    clearInterval(testimonialInterval);
    startTestimonialTimer();
  }

  startTestimonialTimer();

  /* ── 2. Filtrage des Projets (Catégories) ────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── 3. Modal Détails Projets ───────────────────────────────────────────── */
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  const projectDetails = {
    serenda: {
      title: "Serenda — Boutique de Vêtements Féminins",
      category: "E-Commerce • Client Réel",
      image: "assets/serenda_preview.jpg",
      description: "Conception et mise en production d'une boutique en ligne complète pour la marque Serenda, spécialisée dans la mode féminine. Le projet a été pensé pour maximiser les ventes et offrir une navigation mobile irréprochable.",
      highlights: [
        "Catalogue dynamique de produits avec variantes (tailles, couleurs)",
        "Panier d'achat en temps réel et calcul instantané des totaux",
        "Parcours de commande fluide en 1 page (One-Page Checkout)",
        "Design responsive adapté aux smartphones et tablettes",
        "Optimisation de la vitesse de chargement et référencement naturel (SEO)"
      ],
      tags: ["E-Commerce", "JavaScript", "HTML5", "CSS3", "Responsive", "UI/UX"],
      liveUrl: "https://serenda.youcan.store/"
    },
    "ecommerce-php": {
      title: "Plateforme E-Commerce Modulaire PHP/MySQL",
      category: "Architecture Web • MVC",
      image: "assets/serenda_preview.jpg",
      description: "Solution complète d'e-commerce développée en PHP natif et MySQL avec une architecture modulaire basée sur le patron MVC. Comprend un espace boutique et un back-office d'administration.",
      highlights: [
        "Architecture MVC séparant strictement modèles, contrôleurs et vues",
        "Panier d'achat persistant basé sur les sessions sécurisées",
        "Tableau de bord d'administration pour la gestion des stocks et commandes",
        "Sécurisation des requêtes SQL contre les injections (PDO Prepared Statements)",
        "Base de données relationnelle normalisée (MCD / MLD)"
      ],
      tags: ["PHP", "MySQL", "MVC", "Sécurité Web", "JavaScript"],
      liveUrl: "https://github.com/AYOUBCODECPP"
    }
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-project-modal');
    if (btn) {
      e.preventDefault();
      const projKey = btn.dataset.project;
      const data = projectDetails[projKey];
      if (data && modal && modalBody) {
        modalBody.innerHTML = `
          <div style="margin-bottom:16px;">
            <span style="display:inline-block; font-size:0.75rem; font-weight:700; color:var(--accent-coral); text-transform:uppercase; margin-bottom:4px;">${data.category}</span>
            <h3 style="font-family:'Space Grotesk',sans-serif; font-size:1.4rem; font-weight:800; color:#fff; margin-bottom:10px;">${data.title}</h3>
            <p style="font-size:0.88rem; color:var(--text-muted); line-height:1.6; margin-bottom:18px;">${data.description}</p>
          </div>

          <div style="margin-bottom:18px;">
            <h4 style="font-size:0.88rem; font-weight:700; color:#fff; margin-bottom:8px;">Fonctionnalités Clés :</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.82rem; color:var(--text-muted);">
              ${data.highlights.map(h => `<li style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-check text-green" style="color:#10b981;"></i> ${h}</li>`).join('')}
            </ul>
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:24px;">
            ${data.tags.map(t => `<span class="ptag">${t}</span>`).join('')}
          </div>

          <div style="display:flex; gap:12px;">
            <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-pill btn-primary-gradient" style="flex:1;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Accéder au projet
            </a>
          </div>
        `;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      }
    }
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── 4. Formulaire de Contact avec Web3Forms (Envoi d'e-mail Réel & Gratuit) ─ */
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const messageInput = document.getElementById('formMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Veuillez remplir tous les champs obligatoires (Nom, Email, Message).';
          formFeedback.style.display = 'block';
        }
        return;
      }

      // Masquer les messages d'état précédents
      if (formFeedback) {
        formFeedback.style.display = 'none';
      }

      // État de chargement du bouton
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Envoi en cours...</span>';
      }

      try {
        const formData = new FormData(contactForm);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
          if (formFeedback) {
            formFeedback.className = 'form-feedback success';
            formFeedback.innerHTML = `
              <i class="fa-solid fa-circle-check"></i> Merci <strong>${name}</strong> ! Votre message a bien été envoyé avec succès.<br>
              <span style="font-size:0.8rem; opacity:0.9;">Un e-mail de notification a été transmis directement à Ayoub.</span>
            `;
            formFeedback.style.display = 'block';
          }

          contactForm.reset();

          if (submitBtn) {
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Message Envoyé !</span>';
          }
        } else {
          throw new Error(result.message || "Erreur lors de l'envoi");
        }
      } catch (error) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation"></i> Une erreur s'est produite lors de l'envoi.<br>
            Vous pouvez également m'écrire directement par e-mail à : 
            <a href="mailto:ayoub1999boulahdoub@gmail.com" style="color:#ffffff; text-decoration:underline; font-weight:700;">ayoub1999boulahdoub@gmail.com</a>
          `;
          formFeedback.style.display = 'block';
        }
      } finally {
        if (submitBtn) {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML || '<i class="fa-solid fa-paper-plane"></i> <span>Envoyer le message</span>';
          }, 4500);
        }
      }
    });
  }

  /* ── 5. Navigation Active lors du Défilement (Scrollspy) ─────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  /* ── 6. Menu Mobile Hamburger ───────────────────────────────────────────── */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

})();
