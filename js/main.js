// ====================================
// BYT P&L Tracker Landing Page
// Main JavaScript File
// ====================================

document.addEventListener('DOMContentLoaded', function() {

  // ====================================
  // Smooth Scrolling for Navigation Links
  // ====================================
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');

      // Handle edge case for href="#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Close mobile menu if open
        closeMobileMenu();

        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ====================================
  // Sticky Navigation Bar
  // ====================================
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add 'scrolled' class when scrolling down past 50px
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // ====================================
  // Mobile Menu Toggle
  // ====================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const navLinks = document.querySelector('.nav-links');

  function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  }

  function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Toggle mobile menu on button click
  mobileMenuToggle.addEventListener('click', function() {
    const isActive = navLinks.classList.contains('active');

    if (isActive) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close mobile menu when clicking overlay
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile menu when clicking a link
  const mobileNavLinks = navLinks.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // ====================================
  // FAQ Accordion
  // ====================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked item if it wasn't already active
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Keyboard navigation for FAQ (Enter and Space)
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // ====================================
  // Scroll Animations (Intersection Observer)
  // ====================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
  });

  // Observe screenshot items
  const screenshotItems = document.querySelectorAll('.screenshot-item');
  screenshotItems.forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
  });

  // ====================================
  // Preload Hero Image
  // ====================================
  const heroScreenshot = document.querySelector('.hero-screenshot img');
  if (heroScreenshot && heroScreenshot.src) {
    const img = new Image();
    img.src = heroScreenshot.src;
  }

  // ====================================
  // Lazy Loading Images (for below-the-fold images)
  // ====================================
  const lazyImages = document.querySelectorAll('img[data-src]');

  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => lazyLoadObserver.observe(img));

  // ====================================
  // Scroll to Top on Logo Click
  // ====================================
  const logo = document.querySelector('.nav-logo');

  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Make logo keyboard accessible
    logo.setAttribute('tabindex', '0');
    logo.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  // ====================================
  // Track Gumroad Button Clicks (Optional)
  // ====================================
  const gumroadButtons = document.querySelectorAll('.gumroad-button');

  gumroadButtons.forEach(button => {
    button.addEventListener('click', function() {
      // You can add analytics tracking here
      console.log('Gumroad button clicked');

      // Example: Google Analytics event tracking (if GA is installed)
      // gtag('event', 'click', {
      //   'event_category': 'CTA',
      //   'event_label': 'Get Started Button'
      // });
    });
  });

  // ====================================
  // Handle External Links
  // ====================================
  const externalLinks = document.querySelectorAll('a[href^="http"]');

  externalLinks.forEach(link => {
    // Skip Gumroad overlay links
    if (!link.classList.contains('gumroad-button')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ====================================
  // Performance: Reduce Motion for Users with Preference
  // ====================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    // Disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';

    // Remove animations
    const style = document.createElement('style');
    style.textContent = `
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ====================================
  // Console Easter Egg (Optional)
  // ====================================
  console.log('%c🚀 BYT P&L Tracker', 'font-size: 24px; font-weight: bold; color: #5c9eff;');
  console.log('%cSimple, Secure, Yours', 'font-size: 16px; color: #a0aec0;');
  console.log('%cInterested in how this site was built? Check out the code on GitHub!', 'font-size: 14px; color: #9f7aea;');

  // ====================================
  // Form Validation (if you add a contact form later)
  // ====================================
  // const contactForm = document.querySelector('#contact-form');
  //
  // if (contactForm) {
  //   contactForm.addEventListener('submit', function(e) {
  //     e.preventDefault();
  //
  //     // Validate form fields
  //     // Send form data
  //     // Show success message
  //   });
  // }

  // ====================================
  // Initialize - Log Page Load
  // ====================================
  console.log('BYT P&L Tracker landing page loaded successfully!');

}); // End DOMContentLoaded
