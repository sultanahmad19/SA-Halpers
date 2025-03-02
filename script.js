
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
const scrollElements = document.querySelectorAll("[data-scroll]");

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) * 0.8;
};

const displayScrollElement = (element) => {
  element.classList.add("scroll-visible");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    }
  });
};

// Event listeners for scroll animations
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
