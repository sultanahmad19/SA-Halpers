
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
      let targetModal;
      
      if (service === 'solar') {
        targetModal = solarModal;
      } else if (service === 'car') {
        targetModal = carModal;
      } else if (service === 'tank') {
        targetModal = tankModal;
      }
      
      if (targetModal) {
        // Prepare the modal for animation
        targetModal.style.opacity = '0';
        targetModal.style.display = 'flex';
        
        // Add staggered animation to packages
        const packages = targetModal.querySelectorAll('.package');
        packages.forEach((pkg, index) => {
          pkg.style.opacity = '0';
          pkg.style.transform = 'translateY(20px)';
          
          // Staggered animation
          setTimeout(() => {
            pkg.style.transition = 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
            pkg.style.opacity = '1';
            pkg.style.transform = 'translateY(0)';
          }, 300 + (index * 100));
        });
        
        // Animate modal appearance
        setTimeout(() => {
          targetModal.style.transition = 'opacity 0.4s ease';
          targetModal.style.opacity = '1';
        }, 50);
        
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        // Add special hover effect for current service button
        button.classList.add('active-service');
      }
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
    const modals = [solarModal, carModal, tankModal];
    
    modals.forEach(modal => {
      if (modal.style.display === 'flex') {
        // Fade out animation
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '0';
        
        setTimeout(() => {
          modal.style.display = 'none';
        }, 300);
      }
    });
    
    // Restore body scrolling
    document.body.style.overflow = '';
    
    // Remove active class from service buttons
    document.querySelectorAll('.service-details-btn').forEach(btn => {
      btn.classList.remove('active-service');
    });
  }
  
  // Add a subtle parallax effect to the modal content
  document.querySelectorAll('.service-modal').forEach(modal => {
    modal.addEventListener('mousemove', function(e) {
      const packages = this.querySelectorAll('.package');
      const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
      
      packages.forEach((pkg, index) => {
        const modifier = (index + 1) * 0.8;
        pkg.style.transform = `translateX(${xAxis * modifier}px) translateY(${yAxis * modifier}px)`;
      });
    });
    
    // Reset transform when mouse leaves modal
    modal.addEventListener('mouseleave', function() {
      const packages = this.querySelectorAll('.package');
      packages.forEach(pkg => {
        pkg.style.transform = 'translateX(0) translateY(0)';
        pkg.style.transition = 'transform 0.5s ease';
      });
    });
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

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
