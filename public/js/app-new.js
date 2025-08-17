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
        
        // Setup dashboard-specific event listeners
        if (this.currentPage === 'dashboard') {
            this.setupDashboardEventListeners();
        }
    }
    
    setupDashboardEventListeners() {
        // Setup demographics dropdown
        const demographicsSelect = document.getElementById('demographics-period');
        if (demographicsSelect) {
            demographicsSelect.addEventListener('change', (e) => {
                if (window.updateDemographics) {
                    window.updateDemographics(e.target.value);
                }
            });
        }
        
        // Setup activity toggle event listeners
        const toggleButtons = document.querySelectorAll('[data-toggle]');
        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const activityId = e.currentTarget.getAttribute('data-toggle');
                if (window.toggleActivityDetails) {
                    window.toggleActivityDetails(activityId);
                }
            });
        });
        
        // Setup store selector
        const storeSelector = document.getElementById('store-selector');
        if (storeSelector) {
            storeSelector.addEventListener('change', (e) => {
                if (window.updateStoreData) {
                    window.updateStoreData(e.target.value);
                }
            });
            
            // Initialize with default store data
            if (window.updateStoreData) {
                window.updateStoreData('demo');
            }
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
    
    // Get current store type
    const storeSelector = document.getElementById('store-selector');
    const currentStore = storeSelector ? storeSelector.value : 'demo';
    
    // Define hourly patterns for different store types
    const storePatterns = {
        demo: {
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
        },
        'times-square': {
            9: { entrance: 0.6, electronics: 0.4, fashion: 0.3, checkout: 0.4, center: 0.2, service: 0.1, insight: "Morning commuters - Quick electronics purchases", visitors: 89 },
            10: { entrance: 0.8, electronics: 0.7, fashion: 0.5, checkout: 0.6, center: 0.4, service: 0.2, insight: "Tourist rush begins - High electronics zone activity", visitors: 156 },
            11: { entrance: 1.0, electronics: 0.9, fashion: 0.7, checkout: 0.8, center: 0.6, service: 0.3, insight: "Peak tourist traffic - All zones highly active", visitors: 234 },
            12: { entrance: 0.9, electronics: 0.8, fashion: 0.9, checkout: 1.0, center: 0.8, service: 0.4, insight: "Lunch hour peak - Fashion zone surging", visitors: 298 },
            13: { entrance: 0.7, electronics: 0.6, fashion: 0.8, checkout: 0.9, center: 0.7, service: 0.5, insight: "Post-lunch shopping - Heavy checkout activity", visitors: 267 },
            14: { entrance: 1.0, electronics: 1.0, fashion: 0.9, checkout: 0.9, center: 0.9, service: 0.3, insight: "Peak afternoon - Maximum capacity across zones", visitors: 342 },
            15: { entrance: 0.9, electronics: 0.9, fashion: 1.0, checkout: 1.0, center: 0.8, service: 0.4, insight: "Fashion zone peak - Heavy conversion", visitors: 378 },
            16: { entrance: 0.8, electronics: 0.7, fashion: 0.8, checkout: 0.9, center: 0.7, service: 0.5, insight: "Sustained high traffic - Consistent performance", visitors: 298 },
            17: { entrance: 0.6, electronics: 0.5, fashion: 0.6, checkout: 0.7, center: 0.5, service: 0.6, insight: "Evening slowdown - Service desk busy", visitors: 234 },
            18: { entrance: 0.4, electronics: 0.3, fashion: 0.4, checkout: 0.5, center: 0.3, service: 0.4, insight: "Tourist areas quieting - Locals shopping", visitors: 167 },
            19: { entrance: 0.3, electronics: 0.2, fashion: 0.3, checkout: 0.4, center: 0.2, service: 0.2, insight: "Pre-closing - Final purchases and returns", visitors: 89 }
        },
        'dublin-street': {
            9: { entrance: 0.2, featured: 0.1, gallery: 0.1, checkout: 0.1, center: 0.05, consultation: 0.05, insight: "Quiet morning - Boutique opening", visitors: 4 },
            10: { entrance: 0.4, featured: 0.3, gallery: 0.2, checkout: 0.2, center: 0.1, consultation: 0.1, insight: "First customers - Featured collection interest", visitors: 8 },
            11: { entrance: 0.6, featured: 0.5, gallery: 0.4, checkout: 0.3, center: 0.2, consultation: 0.2, insight: "Mid-morning browsers - Gallery engagement", visitors: 15 },
            12: { entrance: 0.7, featured: 0.6, gallery: 0.5, checkout: 0.4, center: 0.3, consultation: 0.4, insight: "Lunch break shoppers - Personal consultations", visitors: 23 },
            13: { entrance: 0.5, featured: 0.4, gallery: 0.6, checkout: 0.5, center: 0.4, consultation: 0.3, insight: "Afternoon browsing - Gallery showcases popular", visitors: 19 },
            14: { entrance: 0.8, featured: 0.7, gallery: 0.8, checkout: 0.6, center: 0.5, consultation: 0.5, insight: "Peak boutique hours - High-quality interactions", visitors: 31 },
            15: { entrance: 0.9, featured: 0.8, gallery: 0.9, checkout: 0.7, center: 0.6, consultation: 0.6, insight: "Afternoon peak - Premium shopping experience", visitors: 38 },
            16: { entrance: 0.7, featured: 0.6, gallery: 0.7, checkout: 0.8, center: 0.5, consultation: 0.7, insight: "Conversion time - Consultations leading to sales", visitors: 29 },
            17: { entrance: 0.5, featured: 0.4, gallery: 0.5, checkout: 0.6, center: 0.4, consultation: 0.5, insight: "Evening browsers - Quality over quantity", visitors: 21 },
            18: { entrance: 0.3, featured: 0.2, gallery: 0.3, checkout: 0.4, center: 0.2, consultation: 0.3, insight: "Intimate evening shopping - Personal service", visitors: 12 },
            19: { entrance: 0.2, featured: 0.1, gallery: 0.2, checkout: 0.2, center: 0.1, consultation: 0.1, insight: "Closing soon - Final consultations", visitors: 6 }
        },
        'demo-retail': {
            9: { entrance: 0.2, clothing: 0.15, footwear: 0.1, accessories: 0.1, checkout: 0.15, fitting: 0.05, insight: "Store opening - Early morning shoppers", visitors: 18 },
            10: { entrance: 0.4, clothing: 0.3, footwear: 0.2, accessories: 0.15, checkout: 0.25, fitting: 0.1, insight: "Morning rush - Clothing section popular", visitors: 31 },
            11: { entrance: 0.6, clothing: 0.5, footwear: 0.4, accessories: 0.3, checkout: 0.4, fitting: 0.2, insight: "Pre-lunch browsing - Good footwear interest", visitors: 45 },
            12: { entrance: 0.7, clothing: 0.6, footwear: 0.5, accessories: 0.4, checkout: 0.5, fitting: 0.3, insight: "Lunch hour shopping - Active fitting rooms", visitors: 52 },
            13: { entrance: 0.5, clothing: 0.4, footwear: 0.5, accessories: 0.4, checkout: 0.6, fitting: 0.4, insight: "Post-lunch conversions - Checkout busy", visitors: 48 },
            14: { entrance: 0.8, clothing: 0.7, footwear: 0.6, accessories: 0.5, checkout: 0.7, fitting: 0.5, insight: "Afternoon peak - All sections active", visitors: 58 },
            15: { entrance: 0.85, clothing: 0.8, footwear: 0.7, accessories: 0.6, checkout: 0.8, fitting: 0.6, insight: "Peak shopping time - Strong conversions", visitors: 62 },
            16: { entrance: 0.9, clothing: 0.85, footwear: 0.8, accessories: 0.7, checkout: 0.9, fitting: 0.7, insight: "Maximum capacity - Excellent performance", visitors: 67 },
            17: { entrance: 0.7, clothing: 0.6, footwear: 0.7, accessories: 0.6, checkout: 0.8, fitting: 0.5, insight: "Evening shoppers - Footwear zone busy", visitors: 55 },
            18: { entrance: 0.5, clothing: 0.4, footwear: 0.5, accessories: 0.4, checkout: 0.6, fitting: 0.3, insight: "Evening wind-down - Final purchases", visitors: 38 },
            19: { entrance: 0.3, clothing: 0.2, footwear: 0.3, accessories: 0.2, checkout: 0.4, fitting: 0.1, insight: "Pre-closing - Last minute decisions", visitors: 22 }
        },
        'demo-hospitality': {
            11: { entrance: 0.2, dining: 0.1, bar: 0.05, entertainment: 0.0, restroom: 0.1, reception: 0.2, insight: "Late morning setup - Early arrivals", visitors: 8 },
            12: { entrance: 0.6, dining: 0.7, bar: 0.2, entertainment: 0.1, restroom: 0.3, reception: 0.4, insight: "Lunch service peak - Dining area busy", visitors: 28 },
            13: { entrance: 0.4, dining: 0.8, bar: 0.3, entertainment: 0.2, restroom: 0.4, reception: 0.3, insight: "Extended lunch - High dining occupancy", visitors: 35 },
            14: { entrance: 0.3, dining: 0.6, bar: 0.4, entertainment: 0.3, restroom: 0.3, reception: 0.2, insight: "Afternoon socializing - Bar activity increases", visitors: 32 },
            15: { entrance: 0.5, dining: 0.4, bar: 0.6, entertainment: 0.4, restroom: 0.3, reception: 0.3, insight: "Happy hour approach - Bar lounge popular", visitors: 38 },
            16: { entrance: 0.6, dining: 0.5, bar: 0.7, entertainment: 0.5, restroom: 0.4, reception: 0.4, insight: "Early evening - Entertainment zone active", visitors: 45 },
            17: { entrance: 0.8, dining: 0.7, bar: 0.8, entertainment: 0.6, restroom: 0.5, reception: 0.5, insight: "Happy hour peak - All areas busy", visitors: 52 },
            18: { entrance: 0.9, dining: 0.9, bar: 0.9, entertainment: 0.7, restroom: 0.6, reception: 0.6, insight: "Dinner service - Maximum occupancy", visitors: 58 },
            19: { entrance: 0.7, dining: 0.8, bar: 0.85, entertainment: 0.8, restroom: 0.5, reception: 0.4, insight: "Evening entertainment - Live events peak", visitors: 55 },
            20: { entrance: 0.5, dining: 0.6, bar: 0.7, entertainment: 0.9, restroom: 0.4, reception: 0.3, insight: "Late evening - Entertainment focus", visitors: 48 },
            21: { entrance: 0.3, dining: 0.4, bar: 0.5, entertainment: 0.6, restroom: 0.3, reception: 0.2, insight: "Wind down - Late night socializing", visitors: 35 }
        },
        'demo-airport': {
            6: { entrance: 0.4, gates: 0.3, shops: 0.1, food: 0.2, waiting: 0.4, baggage: 0.1, insight: "Early morning departures - First flights", visitors: 156 },
            7: { entrance: 0.7, gates: 0.6, shops: 0.2, food: 0.4, waiting: 0.7, baggage: 0.2, insight: "Morning rush begins - Business travelers", visitors: 234 },
            8: { entrance: 0.9, gates: 0.8, shops: 0.3, food: 0.6, waiting: 0.9, baggage: 0.3, insight: "Peak morning departures - All areas busy", visitors: 312 },
            9: { entrance: 0.8, gates: 0.7, shops: 0.4, food: 0.7, waiting: 0.8, baggage: 0.4, insight: "Mid-morning activity - Food court busy", visitors: 298 },
            10: { entrance: 0.6, gates: 0.5, shops: 0.5, food: 0.5, waiting: 0.6, baggage: 0.5, insight: "Steady flow - Shopping picks up", visitors: 267 },
            11: { entrance: 0.7, gates: 0.6, shops: 0.6, food: 0.6, waiting: 0.7, baggage: 0.6, insight: "Pre-lunch increase - Duty free active", visitors: 289 },
            12: { entrance: 0.8, gates: 0.7, shops: 0.7, food: 0.8, waiting: 0.8, baggage: 0.7, insight: "Lunch hour peak - Food court maximum", visitors: 334 },
            13: { entrance: 0.9, gates: 0.8, shops: 0.8, food: 0.7, waiting: 0.9, baggage: 0.8, insight: "Afternoon departures - High traffic", visitors: 356 },
            14: { entrance: 1.0, gates: 0.9, shops: 0.9, food: 0.6, waiting: 1.0, baggage: 0.9, insight: "Peak afternoon - Maximum capacity", visitors: 389 },
            15: { entrance: 0.9, gates: 0.8, shops: 0.85, food: 0.5, waiting: 0.9, baggage: 0.8, insight: "Sustained activity - Shopping priority", visitors: 367 },
            16: { entrance: 0.8, gates: 0.7, shops: 0.7, food: 0.6, waiting: 0.8, baggage: 0.7, insight: "Late afternoon - Steady departures", visitors: 323 },
            17: { entrance: 0.7, gates: 0.6, shops: 0.6, food: 0.7, waiting: 0.7, baggage: 0.6, insight: "Evening flights - Food service up", visitors: 289 },
            18: { entrance: 0.6, gates: 0.5, shops: 0.5, food: 0.6, waiting: 0.6, baggage: 0.8, insight: "Evening arrivals - Baggage claim busy", visitors: 256 },
            19: { entrance: 0.5, gates: 0.4, shops: 0.4, food: 0.5, waiting: 0.5, baggage: 0.9, insight: "Late arrivals - Peak baggage collection", visitors: 234 }
        },
        'demo-shopping-centre': {
            10: { entrance: 0.3, retail: 0.2, food: 0.1, cinema: 0.1, entertainment: 0.1, parking: 0.3, insight: "Centre opening - Early shoppers arrive", visitors: 89 },
            11: { entrance: 0.5, retail: 0.4, food: 0.3, cinema: 0.2, entertainment: 0.2, parking: 0.5, insight: "Morning shopping - Retail stores active", visitors: 145 },
            12: { entrance: 0.7, retail: 0.6, food: 0.7, cinema: 0.3, entertainment: 0.3, parking: 0.7, insight: "Lunch hour rush - Food court peak", visitors: 198 },
            13: { entrance: 0.6, retail: 0.7, food: 0.8, cinema: 0.4, entertainment: 0.4, parking: 0.6, insight: "Post-lunch shopping - Retail priority", visitors: 234 },
            14: { entrance: 0.8, retail: 0.8, food: 0.6, cinema: 0.6, entertainment: 0.5, parking: 0.8, insight: "Afternoon peak - Cinema shows start", visitors: 278 },
            15: { entrance: 0.9, retail: 0.9, food: 0.5, cinema: 0.7, entertainment: 0.6, parking: 0.9, insight: "Weekend peak - All areas busy", visitors: 312 },
            16: { entrance: 1.0, retail: 1.0, food: 0.6, cinema: 0.8, entertainment: 0.8, parking: 1.0, insight: "Maximum capacity - Entertainment zone hot", visitors: 345 },
            17: { entrance: 0.9, retail: 0.8, food: 0.7, cinema: 0.9, entertainment: 0.9, parking: 0.9, insight: "Evening entertainment - Cinema prime time", visitors: 334 },
            18: { entrance: 0.8, retail: 0.7, food: 0.8, cinema: 0.8, entertainment: 0.7, parking: 0.8, insight: "Dinner and movies - Food court busy", visitors: 298 },
            19: { entrance: 0.6, retail: 0.5, food: 0.6, cinema: 0.7, entertainment: 0.6, parking: 0.6, insight: "Evening shows - Cinema focus", visitors: 245 },
            20: { entrance: 0.4, retail: 0.3, food: 0.4, cinema: 0.6, entertainment: 0.5, parking: 0.4, insight: "Late evening - Movie night continues", visitors: 189 }
        }
    };
    
    const patterns = storePatterns[currentStore] || storePatterns.demo;
    
    const pattern = patterns[hour] || patterns[14];
    
    // Update insights
    if (insightText) insightText.textContent = pattern.insight;
    if (visitorCount) visitorCount.textContent = pattern.visitors;
    
    // Generate heat zones based on store type
    let heatZones = [];
    
    if (currentStore === 'demo') {
        heatZones = [
            { x: 45, y: 70, width: 10, height: 8, intensity: pattern.entrance, blur: 15 },
            { x: 7.5, y: 12.5, width: 20, height: 15, intensity: pattern.zoneA, blur: 12 },
            { x: 72.5, y: 12.5, width: 20, height: 15, intensity: pattern.zoneB, blur: 12 },
            { x: 40, y: 5, width: 20, height: 8, intensity: pattern.checkout, blur: 10 },
            { x: 45, y: 40, width: 10, height: 10, intensity: pattern.center, blur: 8 },
            { x: 7.5, y: 60, width: 15, height: 12, intensity: pattern.fitting, blur: 8 },
            { x: 77.5, y: 60, width: 15, height: 12, intensity: pattern.seating, blur: 8 }
        ];
    } else if (currentStore === 'times-square') {
        heatZones = [
            { x: 45, y: 70, width: 10, height: 8, intensity: pattern.entrance, blur: 15 },
            { x: 10, y: 15, width: 25, height: 20, intensity: pattern.electronics, blur: 12 },
            { x: 65, y: 15, width: 25, height: 20, intensity: pattern.fashion, blur: 12 },
            { x: 35, y: 5, width: 30, height: 8, intensity: pattern.checkout, blur: 10 },
            { x: 45, y: 40, width: 10, height: 15, intensity: pattern.center, blur: 8 },
            { x: 80, y: 60, width: 15, height: 10, intensity: pattern.service, blur: 8 }
        ];
    } else if (currentStore === 'dublin-street') {
        heatZones = [
            { x: 45, y: 70, width: 8, height: 6, intensity: pattern.entrance, blur: 12 },
            { x: 15, y: 20, width: 25, height: 15, intensity: pattern.featured, blur: 10 },
            { x: 60, y: 20, width: 25, height: 15, intensity: pattern.gallery, blur: 10 },
            { x: 40, y: 8, width: 20, height: 6, intensity: pattern.checkout, blur: 8 },
            { x: 45, y: 45, width: 10, height: 8, intensity: pattern.center, blur: 6 },
            { x: 75, y: 55, width: 18, height: 12, intensity: pattern.consultation, blur: 8 }
        ];
    }
    
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

// Global function for demographics updates
window.updateDemographics = function(period) {
    // Define demographic data for different time periods
    const demographicsData = {
        today: {
            ages: {
                '18-25': 32,
                '26-35': 28,
                '36-45': 24,
                '46-plus': 16
            },
            gender: {
                female: 58,
                male: 42
            }
        },
        week: {
            ages: {
                '18-25': 28,
                '26-35': 31,
                '36-45': 26,
                '46-plus': 15
            },
            gender: {
                female: 54,
                male: 46
            }
        },
        month: {
            ages: {
                '18-25': 25,
                '26-35': 33,
                '36-45': 28,
                '46-plus': 14
            },
            gender: {
                female: 52,
                male: 48
            }
        }
    };
    
    const data = demographicsData[period];
    if (!data) return;
    
    // Update age distribution
    Object.keys(data.ages).forEach(ageGroup => {
        const percentage = data.ages[ageGroup];
        const percentageEl = document.getElementById(`age-${ageGroup}`);
        const barEl = document.getElementById(`age-${ageGroup}-bar`);
        
        if (percentageEl) {
            percentageEl.textContent = percentage + '%';
        }
        if (barEl) {
            barEl.style.width = percentage + '%';
        }
    });
    
    // Update gender distribution
    const femaleEl = document.getElementById('gender-female');
    const maleEl = document.getElementById('gender-male');
    
    if (femaleEl) {
        femaleEl.textContent = data.gender.female + '%';
    }
    if (maleEl) {
        maleEl.textContent = data.gender.male + '%';
    }
};

// Global function for activity toggle
window.toggleActivityDetails = function(activityId) {
    const detailsElement = document.getElementById(activityId + '-details');
    const chevronElement = document.getElementById(activityId + '-chevron');
    
    if (!detailsElement) return;
    
    // Toggle visibility
    const isHidden = detailsElement.classList.contains('hidden');
    
    if (isHidden) {
        // Show details
        detailsElement.classList.remove('hidden');
        if (chevronElement) {
            chevronElement.style.transform = 'rotate(180deg)';
        }
        
        // Populate content if empty
        if (!detailsElement.innerHTML.trim() || detailsElement.innerHTML.includes('Details will be populated here')) {
            detailsElement.innerHTML = getActivityContent(activityId);
        }
    } else {
        // Hide details
        detailsElement.classList.add('hidden');
        if (chevronElement) {
            chevronElement.style.transform = 'rotate(0deg)';
        }
    }
};

function getActivityContent(activityId) {
    // Define detailed content for each activity
    const activityData = {
        alert1: `
                <div class="space-y-6">
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-red-900 mb-4">Alert Details</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-red-600 font-medium">Detected:</span>
                                <div class="text-red-900 font-bold">2 min ago</div>
                            </div>
                            <div>
                                <span class="text-sm text-red-600 font-medium">Zone:</span>
                                <div class="text-red-900 font-bold">Product Zone A</div>
                            </div>
                            <div>
                                <span class="text-sm text-red-600 font-medium">Current Density:</span>
                                <div class="text-red-900 font-bold">45 people</div>
                            </div>
                            <div>
                                <span class="text-sm text-red-600 font-medium">Normal Range:</span>
                                <div class="text-red-900 font-bold">15-25 people</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">📊 Traffic Analysis</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Peak density reached:</span>
                                <span class="font-bold text-gray-900">180% of normal</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Customer wait time:</span>
                                <span class="font-bold text-orange-600">3.2 minutes</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Conversion impact:</span>
                                <span class="font-bold text-red-600">-12% estimated</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-blue-900 mb-4">💡 Recommendations</h4>
                        <ul class="space-y-2 text-blue-800">
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Deploy additional staff to Product Zone A immediately</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Consider opening express checkout lanes</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Review product placement to improve traffic flow</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `,
        activity1: `
                <div class="space-y-6">
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-blue-900 mb-4">Customer Profile</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-blue-600 font-medium">Gender:</span>
                                <div class="text-blue-900 font-bold">Female</div>
                            </div>
                            <div>
                                <span class="text-sm text-blue-600 font-medium">Age Group:</span>
                                <div class="text-blue-900 font-bold">25-35 years</div>
                            </div>
                            <div>
                                <span class="text-sm text-blue-600 font-medium">Visit Duration:</span>
                                <div class="text-blue-900 font-bold">4m 23s</div>
                            </div>
                            <div>
                                <span class="text-sm text-blue-600 font-medium">Zones Visited:</span>
                                <div class="text-blue-900 font-bold">All (5/5)</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">🗺️ Journey Path</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                                <div class="flex-1">
                                    <div class="font-medium">Entrance</div>
                                    <div class="text-sm text-gray-600">0:00 - 0:15 (15s)</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                                <div class="flex-1">
                                    <div class="font-medium">Product Zone A</div>
                                    <div class="text-sm text-gray-600">0:15 - 2:30 (2m 15s)</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                                <div class="flex-1">
                                    <div class="font-medium">Product Zone B</div>
                                    <div class="text-sm text-gray-600">2:30 - 3:45 (1m 15s)</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                                <div class="flex-1">
                                    <div class="font-medium">Fitting Room</div>
                                    <div class="text-sm text-gray-600">3:45 - 4:15 (30s)</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                                <div class="flex-1">
                                    <div class="font-medium">Checkout</div>
                                    <div class="text-sm text-gray-600">4:15 - 4:23 (8s)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-green-900 mb-4">🎯 Outcome</h4>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-green-700 font-medium">Purchase Made:</span>
                            <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">✓ YES</span>
                        </div>
                        <div class="text-sm text-green-700">
                            Successful conversion - Customer completed full journey and made purchase.
                        </div>
                    </div>
                </div>
            `,
        activity2: `
                <div class="space-y-6">
                    <div class="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-green-900 mb-4">Threshold Details</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-green-600 font-medium">Threshold:</span>
                                <div class="text-green-900 font-bold">150 visitors/hour</div>
                            </div>
                            <div>
                                <span class="text-sm text-green-600 font-medium">Current Rate:</span>
                                <div class="text-green-900 font-bold">183 visitors/hour</div>
                            </div>
                            <div>
                                <span class="text-sm text-green-600 font-medium">Exceeded by:</span>
                                <div class="text-green-900 font-bold">22% (+33 visitors)</div>
                            </div>
                            <div>
                                <span class="text-sm text-green-600 font-medium">Time Period:</span>
                                <div class="text-green-900 font-bold">2:00 - 3:00 PM</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">📊 Staffing Impact</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Current staff on floor:</span>
                                <span class="font-bold text-gray-900">6 associates</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Recommended for this volume:</span>
                                <span class="font-bold text-orange-600">8-9 associates</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Customer-to-staff ratio:</span>
                                <span class="font-bold text-red-600">30:1 (target: 20:1)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-blue-900 mb-4">💡 Actions Taken</h4>
                        <ul class="space-y-2 text-blue-800">
                            <li class="flex items-start space-x-2">
                                <span class="text-green-500">✓</span>
                                <span>Automatic notification sent to store manager</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-green-500">✓</span>
                                <span>Backup staff alerted for immediate deployment</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-orange-500">⏳</span>
                                <span>Waiting for additional staff confirmation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `,
        activity3: `
                <div class="space-y-6">
                    <div class="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-purple-900 mb-4">Report Summary</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-purple-600 font-medium">Period:</span>
                                <div class="text-purple-900 font-bold">Dec 9-15, 2024</div>
                            </div>
                            <div>
                                <span class="text-sm text-purple-600 font-medium">Total Visitors:</span>
                                <div class="text-purple-900 font-bold">5,847</div>
                            </div>
                            <div>
                                <span class="text-sm text-purple-600 font-medium">Growth vs Previous:</span>
                                <div class="text-green-600 font-bold">+8.2% (+442)</div>
                            </div>
                            <div>
                                <span class="text-sm text-purple-600 font-medium">Daily Average:</span>
                                <div class="text-purple-900 font-bold">835 visitors</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">📈 Key Metrics</h4>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Conversion Rate:</span>
                                <div class="text-right">
                                    <span class="font-bold text-gray-900">24.8%</span>
                                    <span class="text-green-600 text-sm ml-2">+1.2%</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Average Dwell Time:</span>
                                <div class="text-right">
                                    <span class="font-bold text-gray-900">3m 18s</span>
                                    <span class="text-green-600 text-sm ml-2">+15s</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Peak Day:</span>
                                <div class="text-right">
                                    <span class="font-bold text-gray-900">Saturday</span>
                                    <span class="text-gray-600 text-sm ml-2">(1,247 visitors)</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-600">Most Popular Zone:</span>
                                <div class="text-right">
                                    <span class="font-bold text-gray-900">Product Zone A</span>
                                    <span class="text-gray-600 text-sm ml-2">(89% visited)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-blue-900 mb-4">🎯 Insights & Recommendations</h4>
                        <ul class="space-y-2 text-blue-800">
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Weekend traffic shows 35% increase - consider weekend-specific staffing</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Product Zone B underperforming - review product placement and signage</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-blue-500">•</span>
                                <span>Fitting room usage up 12% - successful promotion impact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `,
        activity4: `
                <div class="space-y-6">
                    <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-yellow-900 mb-4">Camera Details</h4>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <span class="text-sm text-yellow-600 font-medium">Camera ID:</span>
                                <div class="text-yellow-900 font-bold">Camera 4</div>
                            </div>
                            <div>
                                <span class="text-sm text-yellow-600 font-medium">Location:</span>
                                <div class="text-yellow-900 font-bold">Product Zone B</div>
                            </div>
                            <div>
                                <span class="text-sm text-yellow-600 font-medium">Issue Detected:</span>
                                <div class="text-yellow-900 font-bold">3 hours ago</div>
                            </div>
                            <div>
                                <span class="text-sm text-yellow-600 font-medium">Severity:</span>
                                <div class="text-orange-600 font-bold">Medium</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-gray-900 mb-4">🔧 Technical Details</h4>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Tracking Accuracy:</span>
                                <span class="font-bold text-orange-600">72% (target: >90%)</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Person Detection Rate:</span>
                                <span class="font-bold text-orange-600">84% (target: >95%)</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">False Positives:</span>
                                <span class="font-bold text-red-600">18/hour (target: <5)</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Last Calibration:</span>
                                <span class="font-bold text-gray-900">12 days ago</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-red-900 mb-4">⚠️ Impact Assessment</h4>
                        <ul class="space-y-2 text-red-800">
                            <li class="flex items-start space-x-2">
                                <span class="text-red-500">•</span>
                                <span>Zone B traffic data may be underreported by ~15%</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-red-500">•</span>
                                <span>Customer journey tracking incomplete for this zone</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-red-500">•</span>
                                <span>Heat map accuracy compromised in Product Zone B</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 class="text-lg font-bold text-blue-900 mb-4">🔧 Recommended Actions</h4>
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-blue-600">
                                <span class="text-blue-800">Schedule immediate recalibration (15-30 minutes)</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-blue-600">
                                <span class="text-blue-800">Clean camera lens and check mounting stability</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-blue-600">
                                <span class="text-blue-800">Review lighting conditions in Zone B</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <input type="checkbox" class="w-4 h-4 text-blue-600">
                                <span class="text-blue-800">Update calibration schedule to weekly intervals</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
    };
    
    return activityData[activityId] || '<div class="p-4 text-gray-500">No details available</div>';
}

// Global function for store data updates
window.updateStoreData = function(storeId) {
    // Define different data sets for each store
    const storeData = {
        demo: {
            stats: {
                visitorsToday: 847,
                visitorsYesterday: 756,
                dwellTime: '3.4m',
                dwellTimeYesterday: '3.1m',
                conversionRate: '24.3%',
                conversionRateYesterday: '24.8%',
                peakTraffic: 183,
                peakStatus: 'High Activity',
                peakStatusColor: 'text-orange-600'
            },
            demographics: {
                ages: { '18-25': 32, '26-35': 28, '36-45': 24, '46-plus': 16 },
                gender: { female: 58, male: 42 }
            }
        },
        'times-square': {
            stats: {
                visitorsToday: 1247,
                visitorsYesterday: 1184,
                dwellTime: '2.8m',
                dwellTimeYesterday: '2.9m',
                conversionRate: 'N/A',
                conversionRateYesterday: 'N/A',
                peakTraffic: 187,
                peakStatus: 'Very High Activity',
                peakStatusColor: 'text-red-600'
            },
            demographics: {
                ages: { '18-25': 45, '26-35': 32, '36-45': 18, '46-plus': 5 },
                gender: { female: 52, male: 48 }
            }
        },
        'dublin-street': {
            stats: {
                visitorsToday: 453,
                visitorsYesterday: 398,
                dwellTime: '4.2m',
                dwellTimeYesterday: '4.1m',
                conversionRate: 'N/A',
                conversionRateYesterday: 'N/A',
                peakTraffic: 89,
                peakStatus: 'Moderate Activity',
                peakStatusColor: 'text-green-600'
            },
            demographics: {
                ages: { '18-25': 22, '26-35': 35, '36-45': 28, '46-plus': 15 },
                gender: { female: 64, male: 36 }
            }
        },
        'demo-retail': {
            stats: {
                visitorsToday: 623,
                visitorsYesterday: 587,
                dwellTime: '2.9m',
                dwellTimeYesterday: '2.7m',
                conversionRate: '28.4%',
                conversionRateYesterday: '26.8%',
                peakTraffic: 142,
                peakStatus: 'Good Activity',
                peakStatusColor: 'text-blue-600'
            },
            demographics: {
                ages: { '18-25': 38, '26-35': 31, '36-45': 21, '46-plus': 10 },
                gender: { female: 61, male: 39 }
            }
        },
        'demo-hospitality': {
            stats: {
                visitorsToday: 234,
                visitorsYesterday: 198,
                dwellTime: '52m',
                dwellTimeYesterday: '48m',
                conversionRate: '87.2%',
                conversionRateYesterday: '84.6%',
                peakTraffic: 67,
                peakStatus: 'Optimal Capacity',
                peakStatusColor: 'text-green-600'
            },
            demographics: {
                ages: { '18-25': 28, '26-35': 42, '36-45': 22, '46-plus': 8 },
                gender: { female: 54, male: 46 }
            }
        },
        'demo-airport': {
            stats: {
                visitorsToday: 3247,
                visitorsYesterday: 2987,
                dwellTime: '18m',
                dwellTimeYesterday: '16m',
                conversionRate: '12.3%',
                conversionRateYesterday: '11.8%',
                peakTraffic: 567,
                peakStatus: 'Peak Travel Hours',
                peakStatusColor: 'text-orange-600'
            },
            demographics: {
                ages: { '18-25': 35, '26-35': 28, '36-45': 24, '46-plus': 13 },
                gender: { female: 49, male: 51 }
            }
        },
        'demo-shopping-centre': {
            stats: {
                visitorsToday: 1842,
                visitorsYesterday: 1623,
                dwellTime: '42m',
                dwellTimeYesterday: '38m',
                conversionRate: '34.7%',
                conversionRateYesterday: '32.1%',
                peakTraffic: 278,
                peakStatus: 'Busy Shopping Day',
                peakStatusColor: 'text-purple-600'
            },
            demographics: {
                ages: { '18-25': 33, '26-35': 29, '36-45': 26, '46-plus': 12 },
                gender: { female: 58, male: 42 }
            }
        }
    };
    
    const data = storeData[storeId];
    if (!data) return;
    
    // Update stats
    const visitorsToday = document.getElementById('visitors-today');
    const visitorsYesterday = document.getElementById('visitors-yesterday');
    const dwellTime = document.getElementById('dwell-time');
    const dwellTimeYesterday = document.getElementById('dwell-time-yesterday');
    const conversionRate = document.getElementById('conversion-rate');
    const conversionRateYesterday = document.getElementById('conversion-rate-yesterday');
    const peakTraffic = document.getElementById('peak-traffic');
    const peakStatus = document.getElementById('peak-status');
    
    // Get benchmark elements
    const conversionBenchmark = document.getElementById('conversion-benchmark');
    const dwellTimeBenchmark = document.getElementById('dwell-time-benchmark');
    
    if (visitorsToday) visitorsToday.textContent = data.stats.visitorsToday;
    if (visitorsYesterday) visitorsYesterday.textContent = data.stats.visitorsYesterday;
    if (dwellTime) dwellTime.textContent = data.stats.dwellTime;
    if (dwellTimeYesterday) dwellTimeYesterday.textContent = data.stats.dwellTimeYesterday;
    if (conversionRate) conversionRate.textContent = data.stats.conversionRate;
    if (conversionRateYesterday) conversionRateYesterday.textContent = data.stats.conversionRateYesterday;
    if (peakTraffic) peakTraffic.textContent = data.stats.peakTraffic;
    if (peakStatus) {
        peakStatus.textContent = data.stats.peakStatus;
        peakStatus.className = `font-medium ${data.stats.peakStatusColor}`;
    }
    
    // Update benchmarks based on venue type
    const benchmarkData = {
        demo: {
            conversionBenchmark: '↗ 8% above industry avg (22.5%)',
            dwellTimeBenchmark: '↗ 13% above industry avg (3.0m)',
            conversionClass: 'text-green-600',
            dwellTimeClass: 'text-green-600'
        },
        'demo-retail': {
            conversionBenchmark: '↗ 12% above retail avg (25.4%)',
            dwellTimeBenchmark: '↗ 12% above retail avg (2.6m)',
            conversionClass: 'text-green-600',
            dwellTimeClass: 'text-green-600'
        },
        'demo-hospitality': {
            conversionBenchmark: '↗ 6% above hospitality avg (82.1%)',
            dwellTimeBenchmark: '↗ 8% above hospitality avg (48m)',
            conversionClass: 'text-green-600',
            dwellTimeClass: 'text-green-600'
        },
        'demo-airport': {
            conversionBenchmark: '↗ 4% above airport avg (11.8%)',
            dwellTimeBenchmark: '↗ 18% above airport avg (15m)',
            conversionClass: 'text-green-600',
            dwellTimeClass: 'text-green-600'
        },
        'demo-shopping-centre': {
            conversionBenchmark: '↗ 8% above mall avg (32.1%)',
            dwellTimeBenchmark: '↗ 11% above mall avg (38m)',
            conversionClass: 'text-green-600',
            dwellTimeClass: 'text-green-600'
        },
        'times-square': {
            conversionBenchmark: 'Data anonymized for privacy',
            dwellTimeBenchmark: '↘ 7% below tourist area avg (3.0m)',
            conversionClass: 'text-gray-500',
            dwellTimeClass: 'text-orange-600'
        },
        'dublin-street': {
            conversionBenchmark: 'Data anonymized for privacy',
            dwellTimeBenchmark: '↗ 40% above boutique avg (3.0m)',
            conversionClass: 'text-gray-500',
            dwellTimeClass: 'text-green-600'
        }
    };
    
    const benchmarks = benchmarkData[storeId] || benchmarkData.demo;
    
    if (conversionBenchmark) {
        conversionBenchmark.textContent = benchmarks.conversionBenchmark;
        conversionBenchmark.className = `text-xs ${benchmarks.conversionClass} mt-1`;
    }
    if (dwellTimeBenchmark) {
        dwellTimeBenchmark.textContent = benchmarks.dwellTimeBenchmark;
        dwellTimeBenchmark.className = `text-xs ${benchmarks.dwellTimeClass} mt-1`;
    }
    
    // Update demographics for current demographics period
    const demographicsSelect = document.getElementById('demographics-period');
    const currentPeriod = demographicsSelect ? demographicsSelect.value : 'today';
    
    // Update age distribution
    Object.keys(data.demographics.ages).forEach(ageGroup => {
        const percentage = data.demographics.ages[ageGroup];
        const percentageEl = document.getElementById(`age-${ageGroup}`);
        const barEl = document.getElementById(`age-${ageGroup}-bar`);
        
        if (percentageEl) {
            percentageEl.textContent = percentage + '%';
        }
        if (barEl) {
            barEl.style.width = percentage + '%';
        }
    });
    
    // Update gender distribution
    const femaleEl = document.getElementById('gender-female');
    const maleEl = document.getElementById('gender-male');
    
    if (femaleEl) {
        femaleEl.textContent = data.demographics.gender.female + '%';
    }
    if (maleEl) {
        maleEl.textContent = data.demographics.gender.male + '%';
    }
    
    // Update camera feed
    const cameraFeed = document.getElementById('camera-feed');
    const cameraFeeds = {
        demo: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&loop=1&playlist=jfKfPfyJRdk&controls=0&showinfo=0&rel=0&modestbranding=1',
        'times-square': 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1',
        'dublin-street': 'https://www.youtube.com/embed/L_jWHffIx5E?autoplay=1&mute=1&loop=1&playlist=L_jWHffIx5E&controls=0&showinfo=0&rel=0&modestbranding=1'
    };
    
    if (cameraFeed && cameraFeeds[storeId]) {
        cameraFeed.src = cameraFeeds[storeId];
    }
    
    // Update zone performance
    const zonePerformance = document.getElementById('zone-performance');
    if (zonePerformance) {
        const zoneData = {
            demo: [
                { icon: '🚪', name: 'ENTRANCE', status: 'High Activity', count: 847, unit: 'visitors', color: 'red' },
                { icon: '💳', name: 'CHECKOUT', status: 'Converting Well', count: 206, unit: 'purchases', color: 'green' },
                { icon: '🛍️', name: 'ZONE A', status: 'Popular Products', count: 623, unit: 'visitors', color: 'orange' },
                { icon: '🏷️', name: 'ZONE B', status: 'Needs Attention', count: 412, unit: 'visitors', color: 'yellow' },
                { icon: '👔', name: 'FITTING', status: 'Light Usage', count: 89, unit: 'uses', color: 'blue' },
                { icon: '🪑', name: 'SEATING', status: 'Rest Area', count: 34, unit: 'visitors', color: 'gray' }
            ],
            'times-square': [
                { icon: '🚪', name: 'ENTRANCE', status: 'Very High Traffic', count: 1247, unit: 'visitors', color: 'red' },
                { icon: '💳', name: 'CHECKOUT', status: 'Heavy Volume', count: 234, unit: 'purchases', color: 'green' },
                { icon: '📱', name: 'ELECTRONICS', status: 'Tourist Hotspot', count: 834, unit: 'visitors', color: 'blue' },
                { icon: '👕', name: 'FASHION', status: 'High Conversion', count: 723, unit: 'visitors', color: 'purple' },
                { icon: '🏢', name: 'CENTER AISLE', status: 'Busy Transit', count: 934, unit: 'passages', color: 'orange' },
                { icon: '🛎️', name: 'CUSTOMER SERVICE', status: 'Peak Demand', count: 67, unit: 'requests', color: 'indigo' }
            ],
            'dublin-street': [
                { icon: '🚪', name: 'ENTRANCE', status: 'Welcoming Flow', count: 453, unit: 'visitors', color: 'green' },
                { icon: '💳', name: 'CHECKOUT', status: 'Premium Sales', count: 144, unit: 'purchases', color: 'emerald' },
                { icon: '⭐', name: 'FEATURED COLLECTION', status: 'High Interest', count: 298, unit: 'viewers', color: 'yellow' },
                { icon: '🖼️', name: 'GALLERY SHOWCASE', status: 'Engaging Displays', count: 267, unit: 'visitors', color: 'purple' },
                { icon: '💎', name: 'CENTER DISPLAY', status: 'Quality Focus', count: 189, unit: 'interactions', color: 'blue' },
                { icon: '🗣️', name: 'CONSULTATION', status: 'Personal Service', count: 67, unit: 'sessions', color: 'pink' }
            ],
            'demo-retail': [
                { icon: '🚪', name: 'ENTRANCE', status: 'Steady Traffic', count: 623, unit: 'visitors', color: 'blue' },
                { icon: '💳', name: 'CHECKOUT', status: 'Converting Well', count: 177, unit: 'purchases', color: 'green' },
                { icon: '👕', name: 'CLOTHING SECTION', status: 'Popular Items', count: 423, unit: 'visitors', color: 'purple' },
                { icon: '👟', name: 'FOOTWEAR ZONE', status: 'Moderate Interest', count: 287, unit: 'visitors', color: 'orange' },
                { icon: '🎒', name: 'ACCESSORIES', status: 'Browsing Zone', count: 198, unit: 'visitors', color: 'yellow' },
                { icon: '👔', name: 'FITTING ROOMS', status: 'Active Usage', count: 89, unit: 'uses', color: 'indigo' }
            ],
            'demo-hospitality': [
                { icon: '🚪', name: 'ENTRANCE LOBBY', status: 'Welcoming Flow', count: 234, unit: 'guests', color: 'green' },
                { icon: '🍽️', name: 'DINING AREA', status: 'Peak Seating', count: 156, unit: 'diners', color: 'orange' },
                { icon: '🍷', name: 'BAR LOUNGE', status: 'Social Hub', count: 89, unit: 'patrons', color: 'purple' },
                { icon: '🎵', name: 'ENTERTAINMENT ZONE', status: 'Engaging Events', count: 67, unit: 'participants', color: 'blue' },
                { icon: '🚻', name: 'RESTROOM AREA', status: 'Steady Usage', count: 178, unit: 'visits', color: 'gray' },
                { icon: '🏨', name: 'RECEPTION DESK', status: 'Service Ready', count: 234, unit: 'interactions', color: 'emerald' }
            ],
            'demo-airport': [
                { icon: '🚪', name: 'MAIN ENTRANCE', status: 'Heavy Flow', count: 3247, unit: 'passengers', color: 'red' },
                { icon: '✈️', name: 'DEPARTURE GATES', status: 'Active Boarding', count: 1834, unit: 'passengers', color: 'blue' },
                { icon: '🛍️', name: 'DUTY FREE SHOPS', status: 'Tourist Shopping', count: 567, unit: 'shoppers', color: 'purple' },
                { icon: '🍔', name: 'FOOD COURT', status: 'Meal Rush', count: 423, unit: 'diners', color: 'orange' },
                { icon: '💺', name: 'WAITING AREAS', status: 'High Occupancy', count: 2134, unit: 'seated', color: 'yellow' },
                { icon: '🛄', name: 'BAGGAGE CLAIM', status: 'Peak Collection', count: 1456, unit: 'collections', color: 'green' }
            ],
            'demo-shopping-centre': [
                { icon: '🚪', name: 'MAIN ENTRANCE', status: 'Busy Weekend', count: 1842, unit: 'visitors', color: 'red' },
                { icon: '🛍️', name: 'RETAIL STORES', status: 'Shopping Peak', count: 1234, unit: 'shoppers', color: 'purple' },
                { icon: '🍔', name: 'FOOD COURT', status: 'Lunch Rush', count: 567, unit: 'diners', color: 'orange' },
                { icon: '🎬', name: 'CINEMA COMPLEX', status: 'Show Times', count: 234, unit: 'moviegoers', color: 'blue' },
                { icon: '🎮', name: 'ENTERTAINMENT ZONE', status: 'Family Fun', count: 189, unit: 'players', color: 'green' },
                { icon: '🚗', name: 'PARKING GARAGE', status: '78% Capacity', count: 1567, unit: 'vehicles', color: 'gray' }
            ]
        };
        
        const zones = zoneData[storeId] || zoneData.demo;
        let zoneHTML = '';
        
        zones.forEach(zone => {
            const colorClasses = {
                red: 'from-red-50 to-red-100 border-red-500 text-red-800 text-red-600 text-red-500',
                green: 'from-green-50 to-green-100 border-green-500 text-green-800 text-green-600 text-green-500',
                blue: 'from-blue-50 to-blue-100 border-blue-500 text-blue-800 text-blue-600 text-blue-500',
                orange: 'from-orange-50 to-orange-100 border-orange-500 text-orange-800 text-orange-600 text-orange-500',
                yellow: 'from-yellow-50 to-yellow-100 border-yellow-500 text-yellow-800 text-yellow-600 text-yellow-500',
                purple: 'from-purple-50 to-purple-100 border-purple-500 text-purple-800 text-purple-600 text-purple-500',
                gray: 'from-gray-50 to-gray-100 border-gray-400 text-gray-700 text-gray-600 text-gray-500',
                emerald: 'from-emerald-50 to-emerald-100 border-emerald-500 text-emerald-800 text-emerald-600 text-emerald-500',
                indigo: 'from-indigo-50 to-indigo-100 border-indigo-500 text-indigo-800 text-indigo-600 text-indigo-500',
                pink: 'from-pink-50 to-pink-100 border-pink-500 text-pink-800 text-pink-600 text-pink-500'
            };
            
            const colors = colorClasses[zone.color].split(' ');
            
            zoneHTML += `
                <div class="bg-gradient-to-r ${colors[0]} ${colors[1]} p-4 rounded-xl border-l-4 ${colors[2]}">
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="${colors[3]} font-bold text-sm">${zone.icon} ${zone.name}</span>
                            <div class="${colors[4]} text-xs mt-1">${zone.status}</div>
                        </div>
                        <div class="text-right">
                            <div class="font-bold ${colors[4]} text-lg">${zone.count}</div>
                            <div class="${colors[5]} text-xs">${zone.unit}</div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        zonePerformance.innerHTML = zoneHTML;
    }
    
    // Update heatmap for new store
    const currentHour = 14; // Default hour for immediate update
    window.updateHeatmap(currentHour);
    
    // Update business insights
    window.updateBusinessInsights(storeId);
    
    // Update venue layout labels
    window.updateVenueLayout(storeId);
    
    // Show/hide customer journey section based on venue type
    const customerJourneySection = document.getElementById('customer-journey-section');
    if (customerJourneySection) {
        // Only show customer journey for venues where shopping/browsing journey applies
        const showJourneyForVenues = ['demo', 'demo-retail', 'demo-shopping-centre', 'dublin-street'];
        if (showJourneyForVenues.includes(storeId)) {
            customerJourneySection.style.display = 'block';
        } else {
            customerJourneySection.style.display = 'none';
        }
    }
};

// Global function for business insights updates
window.updateBusinessInsights = function(storeId) {
    const businessInsights = document.getElementById('business-insights');
    if (!businessInsights) return;
    
    const insightsData = {
        demo: [
            {
                type: 'optimization',
                icon: '🛍️',
                title: 'Milk Aisle Underperforming',
                description: 'Dairy section shows 23% lower engagement than expected',
                recommendation: 'Consider relocating promotional displays to increase visibility',
                severity: 'medium'
            },
            {
                type: 'opportunity',
                icon: '🔄',
                title: 'Product Swap Opportunity',
                description: 'Replace slow-moving Premium Tea selection with Popular Coffee brands',
                recommendation: 'Expected 15% revenue increase in beverage category',
                severity: 'high'
            },
            {
                type: 'benchmark',
                icon: '📊',
                title: 'Conversion Rate vs Competitors',
                description: 'Your 24.3% conversion rate is 8% above industry average (22.5%)',
                recommendation: 'Maintain current customer experience strategies',
                severity: 'positive'
            },
            {
                type: 'traffic',
                icon: '⚠️',
                title: 'Checkout Queue Optimization',
                description: 'Peak hour wait times exceed optimal threshold by 45 seconds',
                recommendation: 'Deploy additional staff during 2-4 PM rush',
                severity: 'medium'
            }
        ],
        'demo-retail': [
            {
                type: 'optimization',
                icon: '👟',
                title: 'Footwear Section Layout Issue',
                description: 'Customer flow analysis shows navigation confusion near shoe displays',
                recommendation: 'Reorganize pathways and add clearer signage',
                severity: 'medium'
            },
            {
                type: 'opportunity',
                icon: '🎒',
                title: 'Cross-sell Accessories',
                description: 'Only 23% of clothing buyers visit accessories section',
                recommendation: 'Place complementary accessories near fitting rooms',
                severity: 'high'
            },
            {
                type: 'benchmark',
                icon: '📊',
                title: 'Dwell Time Performance',
                description: 'Your 2.9m average is 12% above retail industry standard (2.6m)',
                recommendation: 'Excellent product engagement - maintain current displays',
                severity: 'positive'
            }
        ],
        'demo-hospitality': [
            {
                type: 'optimization',
                icon: '🍽️',
                title: 'Dining Area Table Turnover',
                description: 'Table 12-16 section has 20% longer occupancy than optimal',
                recommendation: 'Adjust service flow and consider table size reconfiguration',
                severity: 'medium'
            },
            {
                type: 'opportunity',
                icon: '🍷',
                title: 'Bar Lounge Expansion Potential',
                description: 'Peak demand exceeds capacity by 15% on weekend evenings',
                recommendation: 'Consider expanding bar seating or adding cocktail tables',
                severity: 'high'
            },
            {
                type: 'benchmark',
                icon: '📊',
                title: 'Guest Satisfaction vs Industry',
                description: 'Your 87.2% satisfaction rate exceeds hospitality benchmark (82.1%)',
                recommendation: 'Outstanding performance - consider premium service positioning',
                severity: 'positive'
            }
        ],
        'demo-airport': [
            {
                type: 'optimization',
                icon: '🛄',
                title: 'Baggage Claim Bottleneck',
                description: 'Carousel 3 area experiences 30% higher congestion than others',
                recommendation: 'Improve crowd flow with directional barriers and real-time updates',
                severity: 'high'
            },
            {
                type: 'opportunity',
                icon: '🛍️',
                title: 'Duty Free Revenue Optimization',
                description: 'Passengers spend 40% less time shopping compared to similar airports',
                recommendation: 'Relocate high-margin items near gate seating areas',
                severity: 'medium'
            },
            {
                type: 'benchmark',
                icon: '📊',
                title: 'Passenger Processing vs Peers',
                description: 'Your 18m average transit time beats industry standard (22m) by 18%',
                recommendation: 'Excellent efficiency - market as competitive advantage',
                severity: 'positive'
            }
        ],
        'demo-shopping-centre': [
            {
                type: 'optimization',
                icon: '🚗',
                title: 'Parking Garage Level 3 Underutilized',
                description: 'Upper levels show 45% lower occupancy despite availability',
                recommendation: 'Improve wayfinding and consider incentives for upper level parking',
                severity: 'medium'
            },
            {
                type: 'opportunity',
                icon: '🎬',
                title: 'Cinema Cross-promotion Gap',
                description: 'Only 15% of moviegoers visit retail stores before/after shows',
                recommendation: 'Create pre-show shopping promotions and post-movie dining deals',
                severity: 'high'
            },
            {
                type: 'benchmark',
                icon: '📊',
                title: 'Visitor Spend vs Mall Average',
                description: 'Your $47 average spend exceeds regional mall benchmark ($41) by 15%',
                recommendation: 'Strong performance - expand successful retail categories',
                severity: 'positive'
            }
        ]
    };
    
    // Get insights for current store, fallback to demo if not found
    const insights = insightsData[storeId] || insightsData.demo;
    
    let insightsHTML = '';
    insights.forEach(insight => {
        const colorClasses = {
            high: 'from-red-50 to-red-100 border-red-500 text-red-800 text-red-600',
            medium: 'from-orange-50 to-orange-100 border-orange-500 text-orange-800 text-orange-600',
            positive: 'from-green-50 to-green-100 border-green-500 text-green-800 text-green-600',
            low: 'from-blue-50 to-blue-100 border-blue-500 text-blue-800 text-blue-600'
        };
        
        const colors = colorClasses[insight.severity] || colorClasses.medium;
        const colorParts = colors.split(' ');
        
        insightsHTML += `
            <div class="bg-gradient-to-r ${colorParts[0]} ${colorParts[1]} p-6 rounded-xl border-l-4 ${colorParts[2]}">
                <div class="flex items-start space-x-4">
                    <div class="text-2xl">${insight.icon}</div>
                    <div class="flex-1">
                        <h4 class="font-bold ${colorParts[3]} mb-2">${insight.title}</h4>
                        <p class="${colorParts[4]} text-sm mb-3">${insight.description}</p>
                        <div class="bg-white/50 p-3 rounded-lg">
                            <span class="font-medium ${colorParts[3]} text-xs">💡 RECOMMENDATION:</span>
                            <p class="${colorParts[4]} text-sm mt-1">${insight.recommendation}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    businessInsights.innerHTML = insightsHTML;
};

// Global function for venue layout updates
window.updateVenueLayout = function(storeId) {
    const venueLayoutLabels = document.getElementById('venue-layout-labels');
    if (!venueLayoutLabels) return;
    
    const layoutData = {
        demo: [
            { x: 50, y: 85, label: 'ENTRANCE', icon: '🚪' },
            { x: 15, y: 20, label: 'PRODUCT ZONE A', icon: '🛍️' },
            { x: 85, y: 20, label: 'PRODUCT ZONE B', icon: '🏷️' },
            { x: 50, y: 10, label: 'CHECKOUT', icon: '💳' },
            { x: 15, y: 70, label: 'FITTING ROOMS', icon: '👔' },
            { x: 85, y: 70, label: 'SEATING AREA', icon: '🪑' }
        ],
        'demo-retail': [
            { x: 50, y: 85, label: 'ENTRANCE', icon: '🚪' },
            { x: 20, y: 30, label: 'CLOTHING SECTION', icon: '👕' },
            { x: 50, y: 30, label: 'FOOTWEAR ZONE', icon: '👟' },
            { x: 80, y: 30, label: 'ACCESSORIES', icon: '🎒' },
            { x: 50, y: 10, label: 'CHECKOUT', icon: '💳' },
            { x: 20, y: 70, label: 'FITTING ROOMS', icon: '👔' }
        ],
        'demo-hospitality': [
            { x: 50, y: 85, label: 'ENTRANCE LOBBY', icon: '🚪' },
            { x: 30, y: 40, label: 'DINING AREA', icon: '🍽️' },
            { x: 70, y: 40, label: 'BAR LOUNGE', icon: '🍷' },
            { x: 50, y: 15, label: 'ENTERTAINMENT ZONE', icon: '🎵' },
            { x: 15, y: 15, label: 'RECEPTION', icon: '🏨' },
            { x: 85, y: 75, label: 'RESTROOMS', icon: '🚻' }
        ],
        'demo-airport': [
            { x: 50, y: 85, label: 'MAIN ENTRANCE', icon: '🚪' },
            { x: 30, y: 15, label: 'DEPARTURE GATES', icon: '✈️' },
            { x: 70, y: 15, label: 'DUTY FREE SHOPS', icon: '🛍️' },
            { x: 50, y: 50, label: 'FOOD COURT', icon: '🍔' },
            { x: 15, y: 60, label: 'WAITING AREAS', icon: '💺' },
            { x: 85, y: 60, label: 'BAGGAGE CLAIM', icon: '🛄' }
        ],
        'demo-shopping-centre': [
            { x: 50, y: 85, label: 'MAIN ENTRANCE', icon: '🚪' },
            { x: 25, y: 30, label: 'RETAIL STORES', icon: '🛍️' },
            { x: 75, y: 30, label: 'FOOD COURT', icon: '🍔' },
            { x: 25, y: 60, label: 'CINEMA COMPLEX', icon: '🎬' },
            { x: 75, y: 60, label: 'ENTERTAINMENT', icon: '🎮' },
            { x: 50, y: 10, label: 'PARKING GARAGE', icon: '🚗' }
        ],
        'times-square': [
            { x: 50, y: 85, label: 'ENTRANCE', icon: '🚪' },
            { x: 25, y: 30, label: 'ELECTRONICS', icon: '📱' },
            { x: 75, y: 30, label: 'FASHION', icon: '👕' },
            { x: 50, y: 10, label: 'CHECKOUT', icon: '💳' },
            { x: 85, y: 70, label: 'CUSTOMER SERVICE', icon: '🛎️' }
        ],
        'dublin-street': [
            { x: 50, y: 85, label: 'ENTRANCE', icon: '🚪' },
            { x: 25, y: 35, label: 'FEATURED COLLECTION', icon: '⭐' },
            { x: 75, y: 35, label: 'GALLERY SHOWCASE', icon: '🖼️' },
            { x: 50, y: 10, label: 'CHECKOUT', icon: '💳' },
            { x: 85, y: 65, label: 'CONSULTATION', icon: '🗣️' }
        ]
    };
    
    const layout = layoutData[storeId] || layoutData.demo;
    
    let layoutHTML = '';
    layout.forEach(zone => {
        layoutHTML += `
            <div class="absolute bg-black/80 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-sm flex items-center space-x-1 border border-white/20" 
                 style="left: ${zone.x}%; top: ${zone.y}%; transform: translate(-50%, -50%); z-index: 10;">
                <span>${zone.icon}</span>
                <span>${zone.label}</span>
            </div>
        `;
    });
    
    venueLayoutLabels.innerHTML = layoutHTML;
}; 