             // Toggle Menu Function
             function toggleMenu() {
                const menu = document.getElementById('menu');
                const menuToggle = document.querySelector('.menu-toggle');
                menu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            }
    
            // Game Button Click Handler
            const gameButtons = document.querySelectorAll('.game-button');
            const gameFrame = document.getElementById('game-frame');
    
            gameButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const gameId = button.id;
                    let gameUrl = '';
                    if (gameId === 'game1') {
                        gameUrl = 'Space_Advnture.html';
                    } else if (gameId === 'game2') {
                        gameUrl = 'Solar_System_Exoplorer.html';
                    }
                    else if (gameId === 'game3') {
                    gameUrl = 'Orbit Annihilation.html';
                    }
                    if (gameUrl) {
                        gameFrame.src = gameUrl;
                        gameFrame.style.display = 'block';
                        // Scroll to the iframe smoothly
                        gameFrame.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
    
            // Fullscreen Toggle Function
            function toggleFullscreen() {
                if (!document.fullscreenElement) {
                    gameFrame.requestFullscreen().catch(err => {
                        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
                    });
                } else {
                    document.exitFullscreen();
                }
            }