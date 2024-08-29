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

// Adding a little interactive hover effect to the navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#668B9F'; // Change to secondary color on hover
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#FFFFFF'; // Revert to white
    });
});

// Adding a hover effect to project links
document.querySelectorAll('.project-item a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#34616A'; // Change to primary color on hover
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#668B9F'; // Revert to secondary color
    });
});
