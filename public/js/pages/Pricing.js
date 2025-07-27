// Pricing Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class PricingPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getPricingSection()}
            ${Footer.render()}
        `;
    }

    static getPricingSection() {
        return `
            <section class="policy-container">
                <div class="container">
                    <div class="policy-content">
                        <h1 class="policy-title">Pricing</h1>
                        <p class="policy-description">
                            Coming Soon
                        </p>
                        
                        <div class="policy-section">
                            <div style="text-align: center; padding: 60px 20px;">
                                <div style="font-size: 64px; margin-bottom: 20px;">💰</div>
                                <h2 style="color: #000000; margin-bottom: 20px;">Pricing Page Coming Soon</h2>
                                <p style="color: #000000; font-size: 18px; line-height: 1.6;">
                                    We're finalizing our pricing plans to offer you the best value.<br>
                                    Contact us for custom quotes in the meantime!
                                </p>
                                <div style="margin-top: 40px;">
                                    <a href="/contact" class="btn btn-primary">Contact Us</a>
                                    <a href="/" class="btn btn-secondary" style="margin-left: 10px;">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 