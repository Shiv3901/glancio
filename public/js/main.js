// Main JavaScript for Glancio website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(45, 55, 72, 0.95)';
        } else {
            header.style.backgroundColor = '#2d3748';
        }
        
        lastScrollTop = scrollTop;
    });

    // Button click handlers
    const demoButtons = document.querySelectorAll('.btn-primary');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to demo page
            window.location.href = '/demo';
        });
    });

    const contactButtons = document.querySelectorAll('.btn-secondary');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your contact logic here
            console.log('Contact requested');
            
            // Example: Show a simple alert for now
            alert('Please email us at contact@glancio.com or call us at +1 (555) 123-4567');
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-content, .feature-visual, .privacy-content, .client-logos');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add hover effects to client logos
    const clientLogos = document.querySelectorAll('.logo-item');
    clientLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Mobile menu toggle (if needed in the future)
    function setupMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const nav = document.querySelector('.nav');
        
        if (mobileMenuButton && nav) {
            mobileMenuButton.addEventListener('click', function() {
                nav.classList.toggle('mobile-open');
                this.classList.toggle('active');
            });
        }
    }

    // Initialize mobile menu
    setupMobileMenu();

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Console welcome message
    console.log(`
    🚀 Welcome to Glancio!
    
    Transform your retail intelligence with AI-powered camera analytics.
    
    For support: contact@glancio.com
    Website: https://glancio.com
    
    Built with ❤️ for better retail performance.
    `);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based calculations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler); 