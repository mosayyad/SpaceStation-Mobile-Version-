function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Dynamically set the active page
document.querySelectorAll('.menu a').forEach(link => {
    if (link.href === window.location.href) {
        link.id = 'active-page';
    }
});