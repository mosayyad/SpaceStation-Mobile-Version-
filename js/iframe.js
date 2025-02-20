document.addEventListener('DOMContentLoaded', function() {
    const refreshButton = document.getElementById('refreshBtn');
    const fullscreenButton = document.getElementById('fullscreenBtn');
    const contentFrame = document.getElementById('contentFrame');

    refreshButton.addEventListener('click', function() {
      contentFrame.src = contentFrame.src;
    });

    fullscreenButton.addEventListener('click', function() {
      const frameContainer = document.querySelector('.frame-container');
      if (!document.fullscreenElement) {
        if (frameContainer.requestFullscreen) {
          frameContainer.requestFullscreen();
        } else if (frameContainer.webkitRequestFullscreen) {
          frameContainer.webkitRequestFullscreen();
        } else if (frameContainer.msRequestFullscreen) {
          frameContainer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    });
  });