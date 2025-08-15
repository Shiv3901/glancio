// glancio App - Modular Architecture
import { HomePage } from './pages/Home.js';
import { AboutPage } from './pages/About.js';
import { ContactPage } from './pages/Contact.js';
import { EnquiryPage } from './pages/Enquiry.js';
import { PrivacyPage } from './pages/Privacy.js';
import { TermsPage } from './pages/Terms.js';
import { DashboardPage } from './pages/Dashboard.js';

class glancioApp {
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
        if (path === '/enquiry') return 'enquiry';
        if (path === '/privacy') return 'privacy';
        if (path === '/terms') return 'terms';
        if (path === '/dashboard') return 'dashboard';
        if (path === '/product') return 'home'; // Redirect product page to home
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
            case 'enquiry':
                return EnquiryPage.render();
            case 'privacy':
                return PrivacyPage.render();
            case 'terms':
                return TermsPage.render();
            case 'dashboard':
                return DashboardPage.render();
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
                    this.navigateTo('/enquiry');
                } else if (buttonText.includes('contact')) {
                    this.navigateTo('/contact');
                } else if (buttonText.includes('about')) {
                    this.navigateTo('/about');
                } else if (buttonText.includes('privacy')) {
                    this.navigateTo('/privacy');
                } else if (buttonText.includes('terms')) {
                    this.navigateTo('/terms');
                } else if (buttonText.includes('dashboard')) {
                    this.navigateTo('/dashboard');
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
                    this.navigateTo('/enquiry');
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
        if (this.currentPage === 'enquiry') {
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
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new glancioApp();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    if (app) {
        app.currentPage = app.getCurrentPage();
        app.loadPage();
    }
});

// Global functions for dashboard interactions
window.updateHeatmap = function(hour) {
    const timeDisplay = document.getElementById('current-time');
    const heatmapOverlay = document.getElementById('heatmap-overlay');
    const visitorDots = document.getElementById('visitor-dots');
    const insightText = document.getElementById('time-insight');
    const visitorCount = document.getElementById('total-visitors');
    
    // Convert hour to display format
    const timeStr = hour <= 12 ? hour + ':00 AM' : (hour - 12) + ':00 PM';
    if (timeDisplay) timeDisplay.textContent = timeStr;
    
    // Define hourly patterns
    const patterns = {
        9: { entrance: 0.3, zoneA: 0.2, zoneB: 0.1, checkout: 0.2, center: 0.1, fitting: 0.1, seating: 0.05, insight: "Early morning - Light foot traffic as store opens", visitors: 12 },
        10: { entrance: 0.5, zoneA: 0.4, zoneB: 0.2, checkout: 0.3, center: 0.3, fitting: 0.2, seating: 0.1, insight: "Morning shoppers arriving - Zone A gaining traction", visitors: 23 },
        11: { entrance: 0.7, zoneA: 0.6, zoneB: 0.4, checkout: 0.5, center: 0.4, fitting: 0.3, seating: 0.2, insight: "Late morning peak - Good activity across all zones", visitors: 34 },
        12: { entrance: 0.8, zoneA: 0.7, zoneB: 0.5, checkout: 0.6, center: 0.5, fitting: 0.4, seating: 0.4, insight: "Lunch hour rush - High traffic, customers browsing", visitors: 42 },
        13: { entrance: 0.6, zoneA: 0.5, zoneB: 0.6, checkout: 0.7, center: 0.6, fitting: 0.5, seating: 0.3, insight: "Post-lunch shopping - Strong checkout activity", visitors: 38 },
        14: { entrance: 0.9, zoneA: 0.8, zoneB: 0.7, checkout: 0.8, center: 0.7, fitting: 0.6, seating: 0.5, insight: "Peak afternoon traffic - Zone A showing highest activity", visitors: 47 },
        15: { entrance: 0.85, zoneA: 0.9, zoneB: 0.8, checkout: 0.9, center: 0.8, fitting: 0.7, seating: 0.4, insight: "Busy afternoon - Excellent conversion at checkout", visitors: 52 },
        16: { entrance: 1.0, zoneA: 0.95, zoneB: 0.85, checkout: 0.95, center: 0.9, fitting: 0.8, seating: 0.6, insight: "Peak shopping time - Maximum store capacity utilized", visitors: 58 },
        17: { entrance: 0.9, zoneA: 0.8, zoneB: 0.9, checkout: 1.0, center: 0.8, fitting: 0.7, seating: 0.7, insight: "Evening rush - Heavy checkout traffic as people finish work", visitors: 55 },
        18: { entrance: 0.7, zoneA: 0.6, zoneB: 0.7, checkout: 0.8, center: 0.6, fitting: 0.5, seating: 0.8, insight: "Evening wind-down - Customers taking time in seating area", visitors: 41 },
        19: { entrance: 0.4, zoneA: 0.3, zoneB: 0.4, checkout: 0.5, center: 0.3, fitting: 0.2, seating: 0.6, insight: "Pre-closing - Light traffic, customers finishing purchases", visitors: 28 }
    };
    
    const pattern = patterns[hour] || patterns[14];
    
    // Update insights
    if (insightText) insightText.textContent = pattern.insight;
    if (visitorCount) visitorCount.textContent = pattern.visitors;
    
    // Generate heat zones
    const heatZones = [
        { x: 45, y: 70, width: 10, height: 8, intensity: pattern.entrance, blur: 15 },
        { x: 7.5, y: 12.5, width: 20, height: 15, intensity: pattern.zoneA, blur: 12 },
        { x: 72.5, y: 12.5, width: 20, height: 15, intensity: pattern.zoneB, blur: 12 },
        { x: 40, y: 5, width: 20, height: 8, intensity: pattern.checkout, blur: 10 },
        { x: 45, y: 40, width: 10, height: 10, intensity: pattern.center, blur: 8 },
        { x: 7.5, y: 60, width: 15, height: 12, intensity: pattern.fitting, blur: 8 },
        { x: 77.5, y: 60, width: 15, height: 12, intensity: pattern.seating, blur: 8 }
    ];
    
    // Generate heatmap overlay
    if (heatmapOverlay) {
        let heatmapHTML = '';
        heatZones.forEach(zone => {
            const opacity = zone.intensity * 0.7;
            const color = getHeatmapColor(zone.intensity);
            heatmapHTML += `
                <div style="
                    position: absolute;
                    left: ${zone.x}%;
                    top: ${zone.y}%;
                    width: ${zone.width}%;
                    height: ${zone.height}%;
                    background: ${color};
                    opacity: ${opacity};
                    border-radius: 50%;
                    filter: blur(${zone.blur}px);
                    pointer-events: none;
                "></div>
            `;
        });
        heatmapOverlay.innerHTML = heatmapHTML;
    }
    
    // Generate visitor dots
    if (visitorDots) {
        let dotsHTML = '';
        const numDots = Math.floor(pattern.visitors * 0.3);
        
        for (let i = 0; i < numDots; i++) {
            const x = Math.random() * 90 + 5;
            const y = Math.random() * 80 + 10;
            const delay = Math.random() * 2;
            
            dotsHTML += `
                <div style="
                    position: absolute;
                    left: ${x}%;
                    top: ${y}%;
                    width: 4px;
                    height: 4px;
                    background: #EF4444;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                    animation-delay: ${delay}s;
                    box-shadow: 0 0 6px rgba(239, 68, 68, 0.6);
                "></div>
            `;
        }
        visitorDots.innerHTML = dotsHTML;
    }
};

function getHeatmapColor(intensity) {
    if (intensity < 0.2) return 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.3) 70%, transparent 100%)';
    else if (intensity < 0.4) return 'radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.3) 70%, transparent 100%)';
    else if (intensity < 0.6) return 'radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.3) 70%, transparent 100%)';
    else if (intensity < 0.8) return 'radial-gradient(circle, rgba(249, 115, 22, 0.8) 0%, rgba(249, 115, 22, 0.3) 70%, transparent 100%)';
    else return 'radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, rgba(239, 68, 68, 0.3) 70%, transparent 100%)';
} 