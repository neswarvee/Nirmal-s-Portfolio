/*
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
*/
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    // Loop back to the first slide if we go past the last one
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Adjust the slide position
    const slideWidth = 100; // Each slide should take up 100% of the container
    const offset = -currentSlide * slideWidth; // Calculate offset
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Change slide based on direction
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initial display of the first slide
showSlide(currentSlide);

// Add event listeners for controls (you need buttons in your HTML for this to work)
document.querySelector('.slider-controls .prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.slider-controls .next').addEventListener('click', () => changeSlide(1));

