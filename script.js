// ===== PROFESSIONAL DYNAMIC GREETING SCRIPT =====

/**
 * Enhanced greeting system with time-based messages
 * and dynamic icon/subtext updates
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get current hour
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  
  // Format current time for display
  const formattedTime = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  
  // Display current time in the time indicator
  const timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = formattedTime;
    
    // Update time every minute
    setInterval(() => {
      const newTime = new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      timeElement.textContent = newTime;
    }, 60000);
  }
  
  // Determine greeting message, icon, and subtext based on time
  let greetingMessage = '';
  let greetingIcon = '';
  let greetingSubtext = '';
  let greetingEmoji = '';
  
  if (hour < 12) {
    greetingMessage = 'Good Morning';
    greetingIcon = 'fa-sun';
    greetingEmoji = '☀️';
    greetingSubtext = 'Rise and shine! Ready to make today productive?';
  } else if (hour < 17) {
    greetingMessage = 'Good Afternoon';
    greetingIcon = 'fa-cloud-sun';
    greetingEmoji = '🌤️';
    greetingSubtext = 'Keep up the great work this afternoon!';
  } else if (hour < 20) {
    greetingMessage = 'Good Evening';
    greetingIcon = 'fa-moon';
    greetingEmoji = '🌙';
    greetingSubtext = 'Wind down and reflect on today\'s achievements.';
  } else {
    greetingMessage = 'Good Night';
    greetingIcon = 'fa-star';
    greetingEmoji = '✨';
    greetingSubtext = 'Rest well and prepare for tomorrow\'s opportunities.';
  }
  
  // Update greeting text with emoji
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    greetingElement.innerHTML = `${greetingMessage} ${greetingEmoji}`;
    
    // Add animation class
    greetingElement.classList.add('greeting-appear');
  }
  
  // Update greeting icon
  const iconElement = document.getElementById('greetingIcon');
  if (iconElement) {
    // Remove existing icon classes
    iconElement.className = 'fas';
    iconElement.classList.add(greetingIcon);
  }
  
  // Update greeting subtext if element exists
  const subtextElement = document.getElementById('greetingSubtext');
  if (subtextElement) {
    subtextElement.textContent = greetingSubtext;
  }
  
  // ===== CAROUSEL ENHANCEMENTS =====
  
  /**
   * Initialize Bootstrap carousel with custom settings
   */
  const carouselElement = document.getElementById('professionalCarousel');
  
  if (carouselElement) {
    // Create new Bootstrap carousel instance
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000, // Auto-slide every 5 seconds
      wrap: true,     // Continuous loop
      touch: true,    // Enable touch/swipe on mobile
      pause: 'hover'  // Pause on mouse hover
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
        carousel.prev();
      } else if (e.key === 'ArrowRight') {
        carousel.next();
      }
    });
    
    // Add custom event listeners for debugging (optional)
    carouselElement.addEventListener('slide.bs.carousel', function(e) {
      console.log(`Sliding to: ${e.to}`);
    });
    
    carouselElement.addEventListener('slid.bs.carousel', function(e) {
      console.log(`Now at slide: ${e.to}`);
    });
  }
  
  // ===== ADDITIONAL PROFESSIONAL TOUCHES =====
  
  /**
   * Smooth scroll for any anchor links (if added later)
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  /**
   * Add intersection observer for fade-in animations
   */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with fade-in class
  document.querySelectorAll('.profile-card, .carousel, .footer').forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
  });
  
  // Add fade-in CSS class
  const style = document.createElement('style');
  style.textContent = `
    .fade-in-element {
      opacity: 0;
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in-visible {
      opacity: 1 !important;
    }
    
    .greeting-appear {
      animation: greetingPop 0.5s ease-out;
    }
    
    @keyframes greetingPop {
      0% {
        transform: scale(0.8);
        opacity: 0;
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  // ===== PERFORMANCE OPTIMIZATION =====
  
  /**
   * Lazy load images with Intersection Observer
   */
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ===== WELCOME CONSOLE MESSAGE (for developers) =====
  console.log('%c✨ Welcome to Sushant\'s Professional Profile ✨', 
              'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 14px; padding: 10px; border-radius: 5px;');
  console.log(`%c📊 PRN: 1012412060 | Current Time: ${formattedTime}`, 
              'color: #2c3e50; font-size: 12px; font-weight: bold;');
  
  // Log greeting to console as well
  console.log(`%c👋 ${greetingMessage} ${greetingEmoji}`, 
              'color: #27ae60; font-size: 14px; font-weight: bold;');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
  console.error('An error occurred:', e.message);
  // You could also send this to an error tracking service
});

// ===== CLEANUP ON PAGE UNLOAD =====
window.addEventListener('beforeunload', function() {
  // Clean up any observers or intervals if needed
  console.log('Page is being unloaded, cleaning up...');
});
