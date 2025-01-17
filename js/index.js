document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
      } else {
          header.style.background = 'rgba(0, 0, 0, 0.9)';
      }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});