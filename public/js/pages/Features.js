// Features Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class FeaturesPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getFeaturesSection()}
            ${Footer.render()}
        `;
    }

    static getFeaturesSection() {
        return `
            <section class="policy-container">
                <div class="container">
                    <div class="policy-content">
                        <h1 class="policy-title">Features</h1>
                        <p class="policy-description">
                            Coming Soon
                        </p>
                        
                        <div class="policy-section">
                            <div style="text-align: center; padding: 60px 20px;">
                                <div style="font-size: 64px; margin-bottom: 20px;">🚧</div>
                                <h2 style="color: #000000; margin-bottom: 20px;">Features Page Coming Soon</h2>
                                <p style="color: #000000; font-size: 18px; line-height: 1.6;">
                                    We're working hard to bring you detailed information about all our features.<br>
                                    Stay tuned for updates!
                                </p>
                                <div style="margin-top: 40px;">
                                    <a href="/" class="btn btn-primary">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 