document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('شكراً لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.');
      form.reset();
  });

  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.parentElement.style.transform = 'translateX(-5px)';
      });
      
      input.addEventListener('blur', function() {
          this.parentElement.style.transform = 'translateX(0)';
      });
  });
});