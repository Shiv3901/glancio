// Glancio App - Modular Architecture
import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { ContactPage } from './pages/Contact.js';
import { DemoPage } from './pages/Demo.js';
import { PrivacyPage } from './pages/Privacy.js';
import { TermsPage } from './pages/Terms.js';
import { ProductPage } from './pages/Product.js';

class GlancioApp {
    constructor() {
        this.app = document.getElementById('app');
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path === '/' || path === '/index.html') return 'home';
        if (path === '/about') return 'about';
        if (path === '/contact') return 'contact';
        if (path === '/demo') return 'demo';
        if (path === '/privacy') return 'privacy';
        if (path === '/terms') return 'terms';
        if (path === '/product') return 'product';
        return 'home';
    }

    async init() {
        await this.loadPage();
        this.setupEventListeners();
        this.initializeAnimations();
    }

    async loadPage() {
        const content = await this.getPageContent();
        this.app.innerHTML = content;
        
        // Load page-specific scripts
        this.loadPageScripts();
        
        // Initialize lazy loading
        this.initializeLazyLoading();
    }

    async getPageContent() {
        switch (this.currentPage) {
            case 'home':
                return HomePage.render();
            case 'about':
                return AboutPage.render();
            case 'contact':
                return ContactPage.render();
            case 'demo':
                return DemoPage.render();
            case 'privacy':
                return PrivacyPage.render();
            case 'terms':
                return TermsPage.render();
            case 'product':
                return ProductPage.render();
            default:
                return HomePage.render();
        }
    }

    setupEventListeners() {
        // Navigation event listeners for all buttons and links
        document.addEventListener('click', (e) => {
            // Handle primary buttons (excluding form submit buttons)
            if (e.target.matches('.btn-primary') && e.target.type !== 'submit') {
                const buttonText = e.target.textContent.toLowerCase();
                
                if (buttonText.includes('enquiry') || buttonText.includes('demo')) {
                    this.navigateTo('/demo');
                } else if (buttonText.includes('contact')) {
                    this.navigateTo('/contact');
                } else if (buttonText.includes('about')) {
                    this.navigateTo('/about');
                } else if (buttonText.includes('privacy')) {
                    this.navigateTo('/privacy');
                } else if (buttonText.includes('terms')) {
                    this.navigateTo('/terms');
                } else if (buttonText.includes('home')) {
                    this.navigateTo('/');
                }
            }
            
            // Handle secondary buttons
            if (e.target.matches('.btn-secondary')) {
                const buttonText = e.target.textContent.toLowerCase();
                
                if (buttonText.includes('home')) {
                    this.navigateTo('/');
                } else if (buttonText.includes('contact')) {
                    this.navigateTo('/contact');
                }
            }
            
            // Handle large buttons
            if (e.target.matches('.btn-large') && e.target.type !== 'submit') {
                const buttonText = e.target.textContent.toLowerCase();
                
                if (buttonText.includes('enquiry') || buttonText.includes('demo')) {
                    this.navigateTo('/demo');
                } else if (buttonText.includes('contact')) {
                    this.navigateTo('/contact');
                }
            }
        });

        // Handle navigation links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="/"]')) {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                this.navigateTo(href);
            }
        });

        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }

    navigateTo(path) {
        // Update browser history without page reload
        window.history.pushState({}, '', path);
        this.currentPage = this.getCurrentPage();
        this.loadPage();
    }

    initializeAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.feature-content, .feature-visual, .privacy-content');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    initializeLazyLoading() {
        // Lazy load images and iframes
        const lazyElements = document.querySelectorAll('img[data-src], iframe[data-src]');
        
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.tagName === 'IMG') {
                        element.src = element.dataset.src;
                    } else if (element.tagName === 'IFRAME') {
                        element.src = element.dataset.src;
                    }
                    element.classList.remove('lazy');
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(el => lazyObserver.observe(el));
    }

    loadPageScripts() {
        // Load page-specific scripts dynamically
        if (this.currentPage === 'demo') {
            this.loadGoogleFormsScript();
        }
    }

    loadGoogleFormsScript() {
        // Load Google Forms script if needed
        if (!document.querySelector('script[src*="google"]')) {
            const script = document.createElement('script');
            script.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdH0y-gM0BtVX2kxIeZxhOyDdas5V5oFVm23LPP7d_Jd99gHA/viewform';
            script.async = true;
            document.head.appendChild(script);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GlancioApp();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    window.location.reload();
}); 