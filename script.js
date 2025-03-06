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

// Smooth scroll functionality - only for desktop
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    // Check if device is desktop (not mobile)
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: isDesktop ? 'smooth' : 'auto'
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
    tank: document.getElementById('tankModal'),
    ac: document.getElementById('acModal')
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

// Logo and images error handling
document.addEventListener('DOMContentLoaded', function() {
  // Logo error handling
  const logo = document.querySelector('.navbar-logo');
  if (logo) {
    logo.onerror = function() {
      console.error('Logo failed to load:', this.src);
      // Try alternative logo as fallback
      this.src = './attached_assets/SAH.png';
    };
  }
  
  // Fix all special service card images
  const serviceCards = document.querySelectorAll('.special-service-card .service-image');
  serviceCards.forEach((cardImage, index) => {
    // Extract the current background image URL
    const style = window.getComputedStyle(cardImage);
    const bgImage = style.backgroundImage;
    
    // If the background image contains a URL, test if it loads
    if (bgImage && bgImage !== 'none') {
      const urlMatch = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
      if (urlMatch && urlMatch[1]) {
        const imageUrl = urlMatch[1];
        
        const img = new Image();
        img.onload = function() {
          console.log('Image loaded successfully:', imageUrl);
        };
        img.onerror = function() {
          console.error('Image failed to load:', imageUrl);
          
          // Apply fallback images based on card index
          let fallbackUrl;
          if (index === 0) {
            fallbackUrl = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
          } else if (index === 1) {
            fallbackUrl = "https://images.unsplash.com/photo-1600322305530-45afb889e46e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
          } else if (index === 2) {
            fallbackUrl = "https://images.unsplash.com/photo-1605856449242-d3ded1336390?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
          } else if (index === 3) {
            fallbackUrl = "https://images.unsplash.com/photo-1614023054127-15d4a3e966e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
          }
          
          if (fallbackUrl) {
            cardImage.style.backgroundImage = `url("${fallbackUrl}")`;
          }
        };
        img.src = imageUrl;
      }
    }
  });
  
  // Special handling for AC cleaning image - using direct HTML rather than background
  const acCleaningCard = document.querySelector('.special-service-card:nth-child(4)');
  if (acCleaningCard) {
    console.log('Fixing AC cleaning image with direct img element');
    
    // Get the service image div
    const acCleaningImage = acCleaningCard.querySelector('.service-image');
    
    if (acCleaningImage) {
      // Remove background image styling and add an actual img element
      acCleaningImage.style.backgroundImage = 'none';
      acCleaningImage.style.display = 'flex';
      acCleaningImage.style.justifyContent = 'center';
      acCleaningImage.style.alignItems = 'center';
      acCleaningImage.style.overflow = 'hidden';
      
      // Create and add img element
      const imgElement = document.createElement('img');
      imgElement.src = './attached_assets/ac-cleaning.jpg';
      imgElement.alt = 'AC Cleaning Service';
      imgElement.style.width = '100%';
      imgElement.style.height = '100%';
      imgElement.style.objectFit = 'cover';
      
      // Error handling for the image
      imgElement.onerror = function() {
        console.error('AC cleaning image failed to load even with direct img element');
        this.src = 'https://images.unsplash.com/photo-1614023054127-15d4a3e966e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
      };
      
      // Clear and append
      acCleaningImage.innerHTML = '';
      acCleaningImage.appendChild(imgElement);
      
      console.log('AC cleaning image element created and added to DOM');
    }
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

// Enhanced scroll reveal animation with multiple effects
document.addEventListener('DOMContentLoaded', function() {
  // Apply different animation classes to different elements

  // Section titles get zoom-in effect
  document.querySelectorAll('section > .container > h2').forEach((el, index) => {
    el.classList.add('zoom-in');
    el.classList.add(`reveal-delay-${index % 4 + 1}`);
  });

  // Service cards get alternating left/right animations
  document.querySelectorAll('.service-card').forEach((el, index) => {
    if (index % 2 === 0) {
      el.classList.add('fade-in-left');
    } else {
      el.classList.add('fade-in-right');
    }
    el.classList.add(`reveal-delay-${index % 4 + 1}`);
  });

  // Step cards get staggered bottom fade-in
  document.querySelectorAll('.step-card').forEach((el, index) => {
    el.classList.add('fade-in-bottom');
    el.classList.add(`reveal-delay-${index % 4 + 1}`);
  });

  // Special service cards get rotate-in effect
  document.querySelectorAll('.special-service-card').forEach((el, index) => {
    el.classList.add('rotate-in');
    el.classList.add(`reveal-delay-${index % 3 + 1}`);
  });

  // Contact cards get zoom-in effect
  document.querySelectorAll('.contact-card').forEach((el, index) => {
    el.classList.add('zoom-in');
    el.classList.add(`reveal-delay-${index % 2 + 1}`);
  });

  // Pricing items get staggered fade in
  document.querySelectorAll('.pricing-item').forEach((el, index) => {
    el.classList.add('fade-in-bottom');
    el.classList.add(`reveal-delay-${index + 1}`);
  });

  // Main service content gets a special left entrance
  document.querySelectorAll('.main-service-content').forEach(el => {
    el.classList.add('fade-in-left');
  });

  // Hero content gets zoom in
  document.querySelectorAll('#hero .container > *').forEach((el, index) => {
    el.classList.add('zoom-in');
    el.classList.add(`reveal-delay-${index % 4 + 1}`);
  });

  // Get all elements with animation classes
  const animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-bottom, .zoom-in, .rotate-in, .scroll-reveal');

  // Function to check if element is in viewport with threshold
  const isInViewport = (el, threshold = 0.15) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Element is considered in viewport when its top edge reaches the threshold percentage down the viewport
    return rect.top <= windowHeight * (1 - threshold);
  };

  // Function to handle scroll animation with additional checks
  const handleScrollAnimation = () => {
    // Check if device is mobile
    const isMobile = window.matchMedia('(max-width: 991px)').matches;

    if (isMobile) {
      // On mobile, reveal all elements immediately without animation
      animatedElements.forEach(el => {
        if (!el.classList.contains('revealed')) {
          el.classList.add('revealed');
        }
      });
    } else {
      // On desktop, use normal scroll reveal animations
      animatedElements.forEach(el => {
        if (isInViewport(el) && !el.classList.contains('revealed')) {
          // Add small random delay for more natural feel (0-100ms)
          setTimeout(() => {
            el.classList.add('revealed');
          }, Math.random() * 100);
        }
      });
    }
  };

  // Check elements visibility on scroll with throttling for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        handleScrollAnimation();
        scrollTimeout = null;
      }, 10); // Small throttle for smooth performance
    }
  });

  // Check on load and resize
  window.addEventListener('load', handleScrollAnimation);
  window.addEventListener('resize', handleScrollAnimation);

  // Initial check after a short delay to catch elements already in view
  setTimeout(handleScrollAnimation, 100);

  // Additional check after images and other resources load
  window.addEventListener('load', () => {
    setTimeout(handleScrollAnimation, 500);
  });

  // Parallax effect on scroll
  const parallaxElements = document.querySelectorAll('.parallax-element');
  const parallaxFactor = 0.1;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el, index) => {
      // Create different movement patterns for each element
      const factor = parallaxFactor * (index + 1) * (index % 2 === 0 ? 1 : -1);
      const yOffset = scrollY * factor;
      const rotation = scrollY * 0.02 * (index % 2 === 0 ? 1 : -1);

      el.style.transform = `translate3d(0, ${yOffset}px, 0) rotate(${rotation}deg)`;

      // Also adjust opacity slightly based on scroll position
      const opacityBase = 0.15;
      const opacityFactor = 0.0001;
      let opacity = opacityBase + Math.sin(scrollY * opacityFactor) * 0.1;

      // Keep opacity within bounds
      opacity = Math.max(0.05, Math.min(0.25, opacity));
      el.style.opacity = opacity;
    });
  });

  // Stats Counter Animation
  const animateCounters = () => {
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach(item => {
      const targetNumber = parseInt(item.getAttribute('data-count'));
      const numberElement = item.querySelector('.stat-number');
      let currentNumber = 0;

      // Get duration based on target number (bigger numbers animate longer)
      const duration = Math.min(2000, Math.max(1000, targetNumber * 0.5));
      const increment = targetNumber / (duration / 16); // 60fps

      const updateCounter = () => {
        if (currentNumber < targetNumber) {
          // For percentage, we need decimal precision
          if (targetNumber <= 100 && targetNumber > 0) {
            currentNumber += increment;
            numberElement.textContent = Math.min(Math.round(currentNumber * 10) / 10, targetNumber);

            if (targetNumber <= 100 && item.querySelector('.stat-label').textContent.includes('Rate')) {
              numberElement.textContent += '%';
            }
          } else {
            currentNumber += increment;
            numberElement.textContent = Math.min(Math.round(currentNumber), targetNumber).toLocaleString();
          }

          if (currentNumber < targetNumber) {
            requestAnimationFrame(updateCounter);
          }
        }
      };

      // Start counter animation when element is in viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(item);
    });
  };

  // Call the animate counters function when DOM is loaded
  document.addEventListener('DOMContentLoaded', animateCounters);

  // Testimonial slider functionality removed

  // Interactive card 3D effect for mobile
  const handleInteractiveCards = () => {
    const cards = document.querySelectorAll('.interactive-card');

    // Check if device supports hover
    const supportsHover = window.matchMedia('(hover: hover)').matches;

    if (!supportsHover) {
      // For touch devices, we'll use click to flip
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');

          // Reset other cards
          cards.forEach(otherCard => {
            if (otherCard !== card) {
              otherCard.classList.remove('flipped');
            }
          });
        });
      });
    }
  };

  document.addEventListener('DOMContentLoaded', handleInteractiveCards);

  // Advanced floating animations for elements
  const initAdvancedAnimations = () => {
    // Get elements with fancy animations
    document.querySelectorAll('.stat-icon, .interactive-card-icon').forEach((el, index) => {
      // Add different animation delays
      el.style.animationDelay = `${index * 0.2}s`;
    });

    // Animated typing effect reset for infinite animation
    const restartTypewriterAnimation = () => {
      // Check if device is mobile
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if (isMobile) {
        // For mobile devices, just show the text without animation
        document.querySelectorAll('.typing-text').forEach(element => {
          element.style.width = '100%';
          element.style.animation = 'blinkCursor 0.7s step-end infinite';
        });
      } else {
        // For desktop, use the typing animation
        const typingElements = document.querySelectorAll('.typing-text');

        typingElements.forEach(element => {
          // Clone and replace to restart animation
          const newElement = element.cloneNode(true);
          element.parentNode.replaceChild(newElement, element);
        });
      }
    };

    // Restart typing animation when scrolled into view
    const observeTypewriter = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          restartTypewriterAnimation();
        }
      });
    }, { threshold: 0.5 });

    const typewriterSection = document.querySelector('.animated-text-section');
    if (typewriterSection) {
      observeTypewriter.observe(typewriterSection);
    }
  };

  document.addEventListener('DOMContentLoaded', initAdvancedAnimations);
});
