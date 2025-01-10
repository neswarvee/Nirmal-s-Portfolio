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
// Navigation handling
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navigation background change on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-fixed');
        } else {
            nav.classList.remove('nav-fixed');
        }
    });

    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Project filtering
const filterProjects = (category) => {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        const projectCategory = project.dataset.category;
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            project.classList.add('animate-fade-in');
        } else {
            project.style.display = 'none';
        }
    });
};

// Image slider functionality
class Slider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.isAnimating = false;

        this.init();
    }

    init() {
        // Add navigation buttons
        const prevButton = document.createElement('button');
        const nextButton = document.createElement('button');
        prevButton.innerHTML = '←';
        nextButton.innerHTML = '→';
        prevButton.classList.add('slider-button', 'prev');
        nextButton.classList.add('slider-button', 'next');

        prevButton.addEventListener('click', () => this.changeSlide(-1));
        nextButton.addEventListener('click', () => this.changeSlide(1));

        this.slider.appendChild(prevButton);
        this.slider.appendChild(nextButton);

        // Initialize first slide
        this.showSlide(0);

        // Add touch support
        this.addTouchSupport();
    }

    showSlide(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Handle loop
        if (index >= this.totalSlides) {
            index = 0;
        } else if (index < 0) {
            index = this.totalSlides - 1;
        }

        // Update slides
        const offset = -index * 100;
        this.slider.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        this.currentSlide = index;

        // Reset animation lock
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    changeSlide(direction) {
        this.showSlide(this.currentSlide + direction);
    }

    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                this.changeSlide(1);
            } else if (touchEndX - touchStartX > 50) {
                this.changeSlide(-1);
            }
        });
    }
}

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => new Slider(slider));
});