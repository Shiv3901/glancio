// Main JavaScript for Glancio website with lazy loading

document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading implementation
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazySections = document.querySelectorAll('[data-lazy]');
    
    // Intersection Observer for lazy loading
    const lazyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load lazy images
                if (entry.target.tagName === 'IMG') {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.remove('lazy');
                }
                
                // Load lazy sections
                if (entry.target.hasAttribute('data-lazy')) {
                    entry.target.classList.add('loaded');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });
    
    // Observe lazy elements
    lazyImages.forEach(img => lazyObserver.observe(img));
    lazySections.forEach(section => lazyObserver.observe(section));
    
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
            header.style.backgroundColor = 'rgba(89, 89, 89, 0.95)';
        } else {
            header.style.backgroundColor = '#595959';
        }
        
        lastScrollTop = scrollTop;
    });

    // Button click handlers
    const demoButtons = document.querySelectorAll('.btn-primary');
    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to enquiry page
            window.location.href = '/demo';
        });
    });

    const contactButtons = document.querySelectorAll('.btn-secondary');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to contact page
            window.location.href = '/contact';
        });
    });

    // Animate elements on scroll with lazy loading
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add lazy loading class for performance
                if (entry.target.classList.contains('lazy-load')) {
                    entry.target.classList.add('loaded');
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation with lazy loading
    const animateElements = document.querySelectorAll('.feature-content, .feature-visual, .privacy-content, .client-logos');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.classList.add('lazy-load');
        observer.observe(el);
    });

    // Parallax effect for hero section with lazy loading
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const rate = scrolled * -0.5;
                
                if (hero) {
                    hero.style.transform = `translateY(${rate}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Add hover effects to client logos with lazy loading
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

    // Add loading animation with lazy loading
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger lazy loading for above-the-fold content
        const aboveFoldElements = document.querySelectorAll('.hero, .header');
        aboveFoldElements.forEach(el => {
            el.classList.add('loaded');
        });
    });

    // Console welcome message
    console.log(`
    🚀 Welcome to Glancio!
    
    Transform your retail intelligence with AI-powered camera analytics.
    
    For support: contact@glancio.com
    Website: https://glancio.com
    
    Built with ❤️ for better retail performance.
    Lazy loading enabled for optimal performance.
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

// Performance optimization: Debounced scroll handler with lazy loading
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based calculations can go here
    // This is now optimized with requestAnimationFrame
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for external resources
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        if (type === 'script') {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        } else if (type === 'style') {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        }
    });
}

// Load non-critical resources lazily
if ('IntersectionObserver' in window) {
    const resourceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const url = entry.target.dataset.resource;
                const type = entry.target.dataset.type;
                
                if (url && type) {
                    loadExternalResource(url, type).then(() => {
                        entry.target.classList.add('loaded');
                    });
                }
                
                resourceObserver.unobserve(entry.target);
            }
        });
    });
    
    // Observe resource loading elements
    document.querySelectorAll('[data-resource]').forEach(el => {
        resourceObserver.observe(el);
    });
} 