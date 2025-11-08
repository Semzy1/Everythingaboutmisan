// 🌐 Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ✅ Contact Form Submission (Formspree)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        contactForm.reset();
      } else {
        formMessage.textContent = 'Oops! Something went wrong.';
        formMessage.style.color = 'red';
      }
    })
    .catch(() => {
      formMessage.textContent = 'Network error. Please try again.';
      formMessage.style.color = 'red';
    });
  });
}

// 📩 Newsletter Feedback - FIXED
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thanks for subscribing! Check your inbox for confirmation.');
    this.reset(); // Clear the form
  });
}

// ✨ Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Update active nav link
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// 👀 Scroll Reveal Animation
function checkScroll() {
  document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Initial check and scroll event
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
