 // Initialize AOS
 AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Active Navigation Link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Countdown Timer
  function updateCountdown() {
    const targetDate = new Date('2024-04-12T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }, 1000);
  }

  // Initialize countdown
  updateCountdown();

  // Form Submission
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const teamName = document.getElementById('teamName').value;
    const leaderName = document.getElementById('leaderName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const memberCount = document.getElementById('memberCount').value;
    
    if (!teamName || !leaderName || !email || !phone || memberCount === 'Chọn số lượng thành viên') {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    
    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show a success message
    alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    this.reset();
  });

  // Hover Effects for Cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // Parallax Effect for Hero Section
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
  });

  // Image Lazy Loading
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.src; // This triggers the image load
            imageObserver.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  });

  // Animated Counter for Statistics (can be added to the page)
  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        clearInterval(timer);
        element.textContent = target;
      }
    }, 16);
  }

  // Preloader (can be added to the page)
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  });