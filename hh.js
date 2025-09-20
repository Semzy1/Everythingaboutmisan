// 🌐 Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.getElementById('menu');

mobileMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// ✅ Contact Form Submission (Formspree)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

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

// 📩 Newsletter Feedback
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', function () {
  alert('Thanks for subscribing! Check your inbox for confirmation.');
});

// ✨ Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 👀 Scroll Reveal Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});