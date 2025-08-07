/**
 * @file Main JavaScript file for Alexander Stone's portfolio
 * @description Handles all interactive functionality including animations, navigation, and page-specific features
 * @author Alexander Stone
 */

/* ====================== */
/* TYPE DEFINITIONS (JSDoc) */
/* ====================== */

/**
 * @typedef {Object} ProjectData
 * @property {string} title - Project title
 * @property {string} category - Project category
 * @property {string} year - Project year
 * @property {string} client - Client name
 * @property {string} services - Services provided
 * @property {string} image - Image path
 * @property {string} overview - Project overview
 * @property {string} challenge - Project challenge description
 * @property {string[]} challengePoints - Array of challenge points
 * @property {string} solution - Project solution description
 * @property {string[]} solutionPoints - Array of solution points
 * @property {Array<{value: string, text: string}>} highlights - Project highlights
 * @property {Array<{role: string, name: string}>} credits - Project credits
 * @property {Array<{label: string, value: string}>} technicalSpecs - Technical specifications
 */

/* ====================== */
/* GLOBAL VARIABLES */
/* ====================== */

/** @type {Object.<number, ProjectData>} */
const projectsData = {
  1: {
    title: "Kotlin Developer",
    category: "Brand Identity",
    year: "2023",
    client: "Nexus Technologies",
    services: "Creative Direction, Brand Strategy, Visual Design",
    image: "images/1_ratio.jpg",
    overview: "Comprehensive rebrand for tech startup including logo, visual system, and brand guidelines.",
    challenge: "Sought to translate their innovative technology into a visual identity that would:",
    challengePoints: [
      "Communicate complex technology simply",
      "Stand out in a crowded market",
      "Scale across digital and physical touchpoints",
      "Resonate with both technical and non-technical audiences"
    ],
    solution: "We developed a dynamic identity system featuring:",
    solutionPoints: [
      "Modular logo system that adapts to context",
      "Vibrant color palette that conveys energy",
      "Custom typography for technical precision",
      "Motion system for digital applications",
      "Comprehensive brand guidelines"
    ],
    highlights: [
      { value: "48%", text: "Increase in brand recognition" },
      { value: "3.2x", text: "More media coverage" },
      { value: "94%", text: "Positive customer feedback" },
      { value: "1", text: "Design award won" }
    ],
    credits: [
      { role: "Creative Direction", name: "Alexander Stone" },
      { role: "Design Lead", name: "Jamie Chen" },
      { role: "Motion Design", name: "Elena Rodriguez" },
      { role: "Client Management", name: "Marcus Wong" }
    ],
    technicalSpecs: [
      { label: "Logo Formats", value: "Vector, Responsive, Animated" },
      { label: "Color System", value: "Primary, Secondary, Accents" },
      { label: "Typography", value: "Custom Typeface, Google Fonts" },
      { label: "Deliverables", value: "Brand Guidelines, Assets" }
    ]
  },
   2: {
    title: "Web Developer",
    category: "Brand Identity",
    year: "2023",
    client: "Nexus Technologies",
    services: "Creative Direction, Brand Strategy, Visual Design",
    image: "images/1_ratio.jpg",
    overview: "Comprehensive rebrand for tech startup including logo, visual system, and brand guidelines.",
    challenge: "Sought to translate their innovative technology into a visual identity that would:",
    challengePoints: [
      "Communicate complex technology simply",
      "Stand out in a crowded market",
      "Scale across digital and physical touchpoints",
      "Resonate with both technical and non-technical audiences"
    ],
    solution: "We developed a dynamic identity system featuring:",
    solutionPoints: [
      "Modular logo system that adapts to context",
      "Vibrant color palette that conveys energy",
      "Custom typography for technical precision",
      "Motion system for digital applications",
      "Comprehensive brand guidelines"
    ],
    highlights: [
      { value: "48%", text: "Increase in brand recognition" },
      { value: "3.2x", text: "More media coverage" },
      { value: "94%", text: "Positive customer feedback" },
      { value: "1", text: "Design award won" }
    ],
    credits: [
      { role: "Creative Direction", name: "Alexander Stone" },
      { role: "Design Lead", name: "Jamie Chen" },
      { role: "Motion Design", name: "Elena Rodriguez" },
      { role: "Client Management", name: "Marcus Wong" }
    ],
    technicalSpecs: [
      { label: "Logo Formats", value: "Vector, Responsive, Animated" },
      { label: "Color System", value: "Primary, Secondary, Accents" },
      { label: "Typography", value: "Custom Typeface, Google Fonts" },
      { label: "Deliverables", value: "Brand Guidelines, Assets" }
    ]
  },
   3: {
    title: "Software Developer",
    category: "Brand Identity",
    year: "2023",
    client: "Nexus Technologies",
    services: "Creative Direction, Brand Strategy, Visual Design",
    image: "images/1_ratio.jpg",
    overview: "Comprehensive rebrand for tech startup including logo, visual system, and brand guidelines.",
    challenge: "Sought to translate their innovative technology into a visual identity that would:",
    challengePoints: [
      "Communicate complex technology simply",
      "Stand out in a crowded market",
      "Scale across digital and physical touchpoints",
      "Resonate with both technical and non-technical audiences"
    ],
    solution: "We developed a dynamic identity system featuring:",
    solutionPoints: [
      "Modular logo system that adapts to context",
      "Vibrant color palette that conveys energy",
      "Custom typography for technical precision",
      "Motion system for digital applications",
      "Comprehensive brand guidelines"
    ],
    highlights: [
      { value: "48%", text: "Increase in brand recognition" },
      { value: "3.2x", text: "More media coverage" },
      { value: "94%", text: "Positive customer feedback" },
      { value: "1", text: "Design award won" }
    ],
    credits: [
      { role: "Creative Direction", name: "Alexander Stone" },
      { role: "Design Lead", name: "Jamie Chen" },
      { role: "Motion Design", name: "Elena Rodriguez" },
      { role: "Client Management", name: "Marcus Wong" }
    ],
    technicalSpecs: [
      { label: "Logo Formats", value: "Vector, Responsive, Animated" },
      { label: "Color System", value: "Primary, Secondary, Accents" },
      { label: "Typography", value: "Custom Typeface, Google Fonts" },
      { label: "Deliverables", value: "Brand Guidelines, Assets" }
    ]
  },
   4: {
    title: "Java Developer",
    category: "Brand Identity",
    year: "2023",
    client: "Nexus Technologies",
    services: "Creative Direction, Brand Strategy, Visual Design",
    image: "images/1_ratio.jpg",
    overview: "Comprehensive rebrand for tech startup including logo, visual system, and brand guidelines.",
    challenge: "Sought to translate their innovative technology into a visual identity that would:",
    challengePoints: [
      "Communicate complex technology simply",
      "Stand out in a crowded market",
      "Scale across digital and physical touchpoints",
      "Resonate with both technical and non-technical audiences"
    ],
    solution: "We developed a dynamic identity system featuring:",
    solutionPoints: [
      "Modular logo system that adapts to context",
      "Vibrant color palette that conveys energy",
      "Custom typography for technical precision",
      "Motion system for digital applications",
      "Comprehensive brand guidelines"
    ],
    highlights: [
      { value: "48%", text: "Increase in brand recognition" },
      { value: "3.2x", text: "More media coverage" },
      { value: "94%", text: "Positive customer feedback" },
      { value: "1", text: "Design award won" }
    ],
    credits: [
      { role: "Creative Direction", name: "Alexander Stone" },
      { role: "Design Lead", name: "Jamie Chen" },
      { role: "Motion Design", name: "Elena Rodriguez" },
      { role: "Client Management", name: "Marcus Wong" }
    ],
    technicalSpecs: [
      { label: "Logo Formats", value: "Vector, Responsive, Animated" },
      { label: "Color System", value: "Primary, Secondary, Accents" },
      { label: "Typography", value: "Custom Typeface, Google Fonts" },
      { label: "Deliverables", value: "Brand Guidelines, Assets" }
    ]
  },
  // ... other projects
};

/* ====================== */
/* CORE INITIALIZATION */
/* ====================== */

/**
 * Main initialization function - Sets up all page functionality
 * @listens DOMContentLoaded
 */
function initializeApp() {
  // Initialize core functionality
  const locoScroll = initSmoothScroll();
  initLoader();
  initBubbleLoader();
   initThemeSystem();

  
  // Setup navigation and UI components
  setupNavigation();
  setupMagneticButtons();
  setupDownloadButton();
  setupContactForm();
  
  // Initialize page-specific functionality
  initAboutPage();
  initResumePage();
  initTestimonials();
  initProjectsSection();
  
  // Setup animations
  animateNumbers();
  setupScrollAnimations();


 
  
  // Initialize project detail page if needed
  if (window.location.pathname.includes('project-detail.html')) {
    initProjectDetailPage();
  }
}

document.addEventListener('DOMContentLoaded', initializeApp);

/* ====================== */
/* CORE FUNCTIONALITY */
/* ====================== */

/**
 * Initialize Locomotive Scroll with smooth scrolling
 * @returns {LocomotiveScroll} The Locomotive Scroll instance
 */
function initSmoothScroll() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: false,
    inertia: 0.8,
    getDirection: true,
    smartphone: { smooth: false, breakpoint: 768 },
    tablet: { smooth: false, breakpoint: 1024 }
  });

  const header = document.querySelector(".header");
  const scrollThreshold = 100;
  let isScrollingDown = false;

  locoScroll.on("scroll", (obj) => {
    const currentScroll = obj.scroll.y;
    const scrollDirection = obj.direction;

    if (currentScroll > scrollThreshold) {
      if (scrollDirection === 'down' && !isScrollingDown) {
        header.classList.add("hide");
        isScrollingDown = true;
      } else if (scrollDirection === 'up' && isScrollingDown) {
        header.classList.remove("hide");
        isScrollingDown = false;
      }
    } else {
      header.classList.remove("hide");
      isScrollingDown = false;
    }
  });

  // Update scroll on window events
  window.addEventListener("load", () => locoScroll.update());
  window.addEventListener("resize", () => locoScroll.update());

  return locoScroll;
}

/**
 * Initialize page loader
 */
function initLoader() {
  const loader = document.querySelector('.loader');
  
  const hideLoader = () => {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  };
  
  window.addEventListener('load', hideLoader);
  
  // Fallback in case load event doesn't fire
  setTimeout(() => {
    if (loader && loader.style.opacity !== '0') {
      hideLoader();
    }
  }, 2000);
}

/**
 * Initialize 3D Orbital Loader
 */
function initBubbleLoader() {
  const loaderContainer = document.querySelector('.bubble-loader');
  if (!loaderContainer) return;
  
  // Create the 3D loader structure
  loaderContainer.innerHTML = `
    <div class="particles" id="particles"></div>
    <div class="loader-container">
      <div class="loader-3d-ultra">
        <div class="orbital-ring ring-x"></div>
        <div class="orbital-ring ring-y"></div>
        <div class="orbital-ring ring-z"></div>
        <div class="core"></div>
      </div>
    </div>
  `;
  
  // Create particles
  const particles = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particles.appendChild(particle);
  }
  
  const hideLoader = () => {
    setTimeout(() => {
      loaderContainer.classList.add('hidden');
      setTimeout(() => loaderContainer.remove(), 600);
    }, 300);
  };
  
  window.addEventListener('load', hideLoader);
  
  // Fallback in case load event doesn't fire
  setTimeout(() => {
    if (!loaderContainer.classList.contains('hidden')) {
      hideLoader();
    }
  }, 3000);
}

/* ====================== */
/* NAVIGATION COMPONENTS */
/* ====================== */

/**
 * Setup main navigation functionality
 */
function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on links
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
          navToggle.classList.remove('active');
          navList.classList.remove('active');
        }
      });
    });
  }

  // Set active link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if ((currentPage === 'index.html' && linkPage === 'index.html') || 
        (currentPage === linkPage)) {
      link.classList.add('active');
    }
  });
}

/* ====================== */
/* PAGE-SPECIFIC FUNCTIONS */
/* ====================== */

/**
 * Initialize About Page Animations
 */
function initAboutPage() {
  // Animate progress bars
  document.querySelectorAll('.progress-fill').forEach(bar => {
    const value = bar.getAttribute('data-value');
    setTimeout(() => {
      bar.style.width = `${value}%`;
    }, 500);
  });

  // Interactive timeline
  const milestones = document.querySelectorAll('.timeline-milestone');
  milestones.forEach(milestone => {
    milestone.addEventListener('click', function() {
      milestones.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Interactive badges hover effect
  const badges = document.querySelectorAll('.interactive-badge');
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      const value = this.getAttribute('data-value');
      const numberEl = this.querySelector('.badge-number');
      numberEl.textContent = value.includes('+') ? value : `+${value}`;
    });
    
    badge.addEventListener('mouseleave', function() {
      const value = this.getAttribute('data-value');
      const numberEl = this.querySelector('.badge-number');
      numberEl.textContent = value;
    });
  });
}

/**
 * Initialize Resume Page Timeline Animations
 */
function initResumePage() {
  if (!document.querySelector('.timeline')) return;
  
  const timelineItems = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(item);
  });
}

/**
 * Initialize Testimonials with Infinite Scroll Effect
 */
function initTestimonials() {
  const cloneTestimonials = () => {
    const rows = document.querySelectorAll('.testimonial-row');
    rows.forEach(row => {
      const track = row.querySelector('.testimonial-track');
      const cards = track.querySelectorAll('.testimonial-card');
      
      if (cards.length <= 4) {
        cards.forEach(card => {
          const clone = card.cloneNode(true);
          track.appendChild(clone);
        });
      }
    });
  };
  
  window.addEventListener('load', cloneTestimonials);
}

/**
 * Initialize Projects Section
 */
function initProjectsSection() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;

  // Clear existing content
  projectsGrid.innerHTML = '';

  // Create project cards from projectsData
  Object.entries(projectsData).forEach(([id, project]) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card will-animate scale-in';
    projectCard.dataset.projectId = id;
    
    projectCard.innerHTML = `
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
      </div>
      <div class="project-info">
        <span class="project-category">${project.category}</span>
        <h3 class="heading-4 project-name">${project.title}</h3>
        <a href="project-detail.html?project=${id}" class="project-details-btn">
          <span>View Details</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });

  // Set up scroll animations for project cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${(index % 4) * 0.1}s`;
    observer.observe(card);
  });
}

/**
 * Initialize project detail page
 */
function initProjectDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  let projectId = parseInt(urlParams.get('project')) || 1;
  
  if (!projectsData[projectId]) {
    projectId = 1;
    window.history.replaceState({}, '', `?project=${projectId}`);
  }
  
  const project = projectsData[projectId];
  
  // Update page metadata
  document.title = `Alexander Stone | ${project.title}`;
  
  // Update hero section
  document.getElementById('project-category').textContent = project.category;
  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-client').textContent = project.client;
  document.getElementById('project-year').textContent = project.year;
  document.getElementById('project-services').textContent = project.services;
  
  // Update image
  updateProjectImage('project-image-container', project.image);
  
  // Update content sections
  updateContentSection('project-overview', project.overview);
  updateContentSection('project-challenge', project.challenge);
  updateContentSection('project-solution', project.solution);
  
  updateListSection('project-challenge-points', project.challengePoints);
  updateListSection('project-solution-points', project.solutionPoints);
  updateTechnicalSpecs('project-specs', project.technicalSpecs);
  updateHighlights('project-highlights', project.highlights);
  updateCredits('project-credits', project.credits);
  
  // Set up navigation
  setupProjectNavigation(projectId);
}

/* ====================== */
/* UI COMPONENTS */
/* ====================== */

/**
 * Setup magnetic button effects
 */
function setupMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) * 0.02;
      const angleY = (centerX - x) * 0.02;
      
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
      const scale = 1 + (0.1 * (1 - distance / maxDistance));
      
      button.style.transform = `perspective(500px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(${scale})`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
}

/**
 * Setup download button functionality
 */
function setupDownloadButton() {
  const downloadBtn = document.getElementById('download-resume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Downloading full CV...');
    });
  }
}

/**
 * Setup contact form functionality with Formspree
 */
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    const successMessage = document.getElementById('formSuccess');
    
    // Show loading state
    submitButton.innerHTML = '<span>Sending...</span>';
    submitButton.disabled = true;
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        successMessage.style.display = 'flex';
        contactForm.reset();
        
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('There was a problem sending your message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
    }
  });
}

/* ====================== */
/* ANIMATION FUNCTIONS */
/* ====================== */

/**
 * Animate numbers on scroll
 */
function animateNumbers() {
  const numberElements = document.querySelectorAll('.animate-number');
  if (!numberElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-value'));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(timer);
            current = target;
          }
          el.textContent = Math.floor(current);
        }, 16);
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  numberElements.forEach(el => observer.observe(el));
}

/**
 * Setup scroll animations for elements
 */
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Animate all elements with animation classes
  document.querySelectorAll('.text-reveal, .fade-in, .scale-in, .slide-in-left, .slide-in-right, .rotate-in').forEach(el => {
    observer.observe(el);
  });

  // Animate section headers with staggered children
  document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
    
    const children = header.querySelectorAll('*');
    children.forEach((child, index) => {
      child.classList.add('text-reveal', `delay-${index + 1}`);
      observer.observe(child);
    });
  });

  // Animate service cards with delays
  document.querySelectorAll('.service-card, .project-card').forEach((card, index) => {
    card.classList.add('scale-in', `delay-${index % 3}`);
    observer.observe(card);
  });
}

/* ====================== */
/* PROJECT DETAIL HELPERS */
/* ====================== */

/**
 * Update project image container with new image
 * @param {string} containerId - ID of the container element
 * @param {string} imagePath - Path to the image
 */
function updateProjectImage(containerId, imagePath) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  container.className = 'project-image-square-container will-animate fade-in';
  
  const img = new Image();
  img.src = imagePath;
  img.alt = document.getElementById('project-title').textContent;
  img.loading = 'eager';
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.8s ease';
  
  img.onerror = function() {
    container.style.backgroundColor = 'var(--slate)';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.innerHTML = '<p>Image not available</p>';
  };
  
  img.onload = function() {
    img.style.opacity = '1';
    container.appendChild(img);
  };
  
  container.appendChild(img);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(container);
}

/**
 * Update content section with new text
 * @param {string} elementId - ID of the element to update
 * @param {string} content - New content to set
 */
function updateContentSection(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) element.textContent = content;
}

/**
 * Update list section with new items
 * @param {string} elementId - ID of the list container
 * @param {string[]} items - Array of items to add
 */
function updateListSection(elementId, items) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  container.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

/**
 * Update technical specs section
 * @param {string} elementId - ID of the specs container
 * @param {Array<{label: string, value: string}>} specs - Array of spec items
 */
function updateTechnicalSpecs(elementId, specs) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  container.innerHTML = '';
  specs.forEach(spec => {
    const div = document.createElement('div');
    div.className = 'spec-item';
    div.innerHTML = `
      <span class="spec-label">${spec.label}</span>
      <span class="spec-value">${spec.value}</span>
    `;
    container.appendChild(div);
  });
}

/**
 * Update highlights section
 * @param {string} elementId - ID of the highlights container
 * @param {Array<{value: string, text: string}>} highlights - Array of highlight items
 */
function updateHighlights(elementId, highlights) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  container.innerHTML = '';
  highlights.forEach(highlight => {
    const li = document.createElement('li');
    li.className = 'highlight-item';
    li.innerHTML = `
      <div class="highlight-number">${highlight.value}</div>
      <div class="highlight-text">${highlight.text}</div>
    `;
    container.appendChild(li);
  });
}

/**
 * Update credits section
 * @param {string} elementId - ID of the credits container
 * @param {Array<{role: string, name: string}>} credits - Array of credit items
 */
function updateCredits(elementId, credits) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  container.innerHTML = '';
  credits.forEach(credit => {
    const li = document.createElement('li');
    li.className = 'credit-item';
    li.innerHTML = `
      <span class="credit-role">${credit.role}</span>
      <span class="credit-name">${credit.name}</span>
    `;
    container.appendChild(li);
  });
}

/**
 * Setup project navigation (previous/next buttons)
 * @param {number} currentProjectId - Current project ID
 */
function setupProjectNavigation(currentProjectId) {
  const projectIds = Object.keys(projectsData).map(Number);
  const currentIndex = projectIds.indexOf(currentProjectId);
  
  const prevBtn = document.getElementById('prev-project');
  const nextBtn = document.getElementById('next-project');
  
  if (prevBtn) {
    const prevId = currentIndex > 0 ? projectIds[currentIndex - 1] : projectIds[projectIds.length - 1];
    prevBtn.href = `project-detail.html?project=${prevId}`;
  }
  
  if (nextBtn) {
    const nextId = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : projectIds[0];
    nextBtn.href = `project-detail.html?project=${nextId}`;
  }
}

/* ====================== */
/* UTILITY FUNCTIONS */
/* ====================== */

// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();









// In your script.js file, add these functions:

/**
 * Initialize theme functionality
 */
function initThemeSystem() {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or use OS preference
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the saved theme
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }
  
  // Update URL to reflect current theme
  updateThemeUrl(savedTheme);
  
  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Set the new theme
      if (newTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.removeAttribute('data-theme');
      }
      
      // Save preference
      localStorage.setItem('theme', newTheme);
      
      // Update URL
      updateThemeUrl(newTheme);
    });
  }
  
  // Check URL for theme parameter on load
  checkUrlTheme();
}

/**
 * Update URL to include theme parameter
 * @param {string} theme - The current theme ('light' or 'dark')
 */
function updateThemeUrl(theme) {
  const url = new URL(window.location.href);
  
  if (theme === 'light') {
    url.searchParams.delete('theme');
  } else {
    url.searchParams.set('theme', theme);
  }
  
  // Update URL without reloading
  window.history.replaceState({}, '', url.toString());
}

/**
 * Check URL for theme parameter and apply if present
 */
function checkUrlTheme() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlTheme = urlParams.get('theme');
  const html = document.documentElement;
  
  if (urlTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else if (urlTheme === 'light') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  }
}

