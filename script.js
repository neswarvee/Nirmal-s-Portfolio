// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding hover effect to navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#E0F7FA'; // Change to lighter color on hover
    });

    link.addEventListener('mouseleave', function() {
        this.style.color = ''; // Reset color on mouse leave
    });
});
