document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-button');
  const contentSections = document.querySelectorAll('.content-section');
  const contentLinks = document.querySelectorAll('.content-link');
  const modal = document.getElementById('modal');
  const modalIframe = document.getElementById('modal-iframe');
  const closeModal = document.querySelector('.close');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and sections
      tabButtons.forEach(btn => btn.classList.remove('active'));
      contentSections.forEach(section => section.classList.remove('active'));

      // Add active class to the clicked button and corresponding section
      button.classList.add('active');
      document.getElementById(button.getAttribute('data-tab')).classList.add('active');
    });
  });

  contentLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      modal.style.display = 'block';
      modalIframe.src = link.href;
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalIframe.src = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
      modalIframe.src = '';
    }
  });

  document.querySelectorAll('.content-card a, .content-card[data-url]').forEach(card => {
    card.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href') || this.getAttribute('data-url');
      if (this.classList.contains('refused_links')) {
        window.open(url, '_blank');
      } else {
        modalIframe.src = url;
        modal.style.display = 'block';
      }
    });
  });

  document.querySelector('.modal .close').addEventListener('click', function() {
    modal.style.display = 'none';
    modalIframe.src = '';
  });
});