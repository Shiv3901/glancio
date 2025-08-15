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
                visitorsToday: 2847,
                visitorsYesterday: 2634,
                dwellTime: '2.8m',
                dwellTimeYesterday: '2.9m',
                conversionRate: '18.7%',
                conversionRateYesterday: '19.2%',
                peakTraffic: 428,
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
                conversionRate: '31.8%',
                conversionRateYesterday: '30.4%',
                peakTraffic: 89,
                peakStatus: 'Moderate Activity',
                peakStatusColor: 'text-green-600'
            },
            demographics: {
                ages: { '18-25': 22, '26-35': 35, '36-45': 28, '46-plus': 15 },
                gender: { female: 64, male: 36 }
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
                { icon: '🚪', name: 'ENTRANCE', status: 'Very High Traffic', count: 2847, unit: 'visitors', color: 'red' },
                { icon: '💳', name: 'CHECKOUT', status: 'Heavy Volume', count: 532, unit: 'purchases', color: 'green' },
                { icon: '📱', name: 'ELECTRONICS', status: 'Tourist Hotspot', count: 1834, unit: 'visitors', color: 'blue' },
                { icon: '👕', name: 'FASHION', status: 'High Conversion', count: 1623, unit: 'visitors', color: 'purple' },
                { icon: '🏢', name: 'CENTER AISLE', status: 'Busy Transit', count: 2234, unit: 'passages', color: 'orange' },
                { icon: '🛎️', name: 'CUSTOMER SERVICE', status: 'Peak Demand', count: 167, unit: 'requests', color: 'indigo' }
            ],
            'dublin-street': [
                { icon: '🚪', name: 'ENTRANCE', status: 'Welcoming Flow', count: 453, unit: 'visitors', color: 'green' },
                { icon: '💳', name: 'CHECKOUT', status: 'Premium Sales', count: 144, unit: 'purchases', color: 'emerald' },
                { icon: '⭐', name: 'FEATURED COLLECTION', status: 'High Interest', count: 298, unit: 'viewers', color: 'yellow' },
                { icon: '🖼️', name: 'GALLERY SHOWCASE', status: 'Engaging Displays', count: 267, unit: 'visitors', color: 'purple' },
                { icon: '💎', name: 'CENTER DISPLAY', status: 'Quality Focus', count: 189, unit: 'interactions', color: 'blue' },
                { icon: '🗣️', name: 'CONSULTATION', status: 'Personal Service', count: 67, unit: 'sessions', color: 'pink' }
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
}; 