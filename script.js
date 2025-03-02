
// Smooth scroll
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
  // Get all service detail buttons
  const serviceButtons = document.querySelectorAll('.service-details-btn');
  
  // Get all modals
  const solarModal = document.getElementById('solarModal');
  const carModal = document.getElementById('carModal');
  const tankModal = document.getElementById('tankModal');
  
  // Get all close buttons
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  
  // Add click event to service buttons
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const service = this.getAttribute('data-service');
      
      if (service === 'solar') {
        solarModal.style.display = 'flex';
      } else if (service === 'car') {
        carModal.style.display = 'flex';
      } else if (service === 'tank') {
        tankModal.style.display = 'flex';
      }
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Add click event to close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });
  
  // Close modal when clicking outside
  document.querySelectorAll('.service-modal-container').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });
  });
  
  // Close modal with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Function to close all modals
  function closeModal() {
    solarModal.style.display = 'none';
    carModal.style.display = 'none';
    tankModal.style.display = 'none';
    
    // Restore body scrolling
    document.body.style.overflow = '';
  }
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

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
