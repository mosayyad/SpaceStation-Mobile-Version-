// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all timeline entries
    const entries = document.querySelectorAll('.timeline-entry');
    
    // Create an Intersection Observer to detect when entries are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in and slide up the entry when it's in view
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the entry is visible

    // Observe each timeline entry
    entries.forEach(entry => observer.observe(entry));
});