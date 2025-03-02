
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.ms-auto');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('show');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
          menuToggle.classList.remove('active');
          mobileMenu.classList.remove('show');
        }
      });
    });
  }
});

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Service Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modalContainers = {
    solar: document.getElementById('solarModal'),
    car: document.getElementById('carModal'),
    tank: document.getElementById('tankModal')
  };
  
  // Get all service detail buttons and close buttons
  const serviceButtons = document.querySelectorAll('.service-details-btn');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  
  // Function to close all modals
  function closeAllModals() {
    Object.values(modalContainers).forEach(modal => {
      if (modal) modal.style.display = 'none';
    });
    
    // Restore body scrolling
    document.body.style.overflow = '';
  }
  
  // Add click event to service buttons
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const service = this.getAttribute('data-service');
      const targetModal = modalContainers[service];
      
      if (targetModal) {
        targetModal.style.display = 'flex';
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Add click event to close buttons

// Logo error handling
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.navbar-logo');
  if (logo) {
    logo.onerror = function() {
      console.error('Logo failed to load:', this.src);
      // Try alternative logo as fallback
      this.src = './attached_assets/SAH.png';
    };
  }
});

  closeButtons.forEach(button => {
    button.addEventListener('click', closeAllModals);
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('.service-modal-container').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeAllModals();
      }
    });
  });
  
  // Close modal with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
  // Select all sections and other elements to animate
  const revealElements = document.querySelectorAll('section, .service-card, .step-card, .contact-card, .special-service-card, .pricing-card');
  
  // Add the scroll-reveal class to all elements
  revealElements.forEach(el => {
    el.classList.add('scroll-reveal');
  });
  
  // Function to check if element is in viewport
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Element is considered in viewport when its top reaches 80% of the viewport height
    return rect.top <= windowHeight * 0.8;
  };
  
  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    revealElements.forEach(el => {
      if (isInViewport(el) && !el.classList.contains('revealed')) {
        el.classList.add('revealed');
      }
    });
  };
  
  // Check elements visibility on load and scroll
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);
  // Also trigger once after a short delay to catch any elements already in view
  setTimeout(handleScrollAnimation, 100);
});
