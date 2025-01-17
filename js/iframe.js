document.addEventListener('DOMContentLoaded', function() {
    const frame = document.getElementById('contentFrame');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const refreshBtn = document.getElementById('refreshBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const frameWrapper = document.querySelector('.frame-wrapper');

    // Handle iframe loading
    frame.addEventListener('load', function() {
        loadingOverlay.style.display = 'none';
    });

    // Refresh button
    refreshBtn.addEventListener('click', function() {
        loadingOverlay.style.display = 'flex';
        frame.src = frame.src;
    });

    // Fullscreen button
    fullscreenBtn.addEventListener('click', function() {
        if (frameWrapper.requestFullscreen) {
            frameWrapper.requestFullscreen();
        } else if (frameWrapper.webkitRequestFullscreen) {
            frameWrapper.webkitRequestFullscreen();
        } else if (frameWrapper.msRequestFullscreen) {
            frameWrapper.msRequestFullscreen();
        }
    });

    // Initialize particles.js
    particlesJS('particles', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false }
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
                attract: { enable: false }
            }
        },
        interactivity: {
            detectsOn: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 }
            }
        },
        retina_detect: true
    });
});