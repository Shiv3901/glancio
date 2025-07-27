// Demo Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class DemoPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getDemoSection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getDemoSection() {
        return `
            <section class="demo-container" style="padding-top: 120px;">
                <div class="container">
                    <div class="demo-content">
                        <h1 class="demo-title">Get Your Enquiry</h1>
                        <p class="demo-description">
                            Leverage cutting-edge AI to monitor in-store activity, analyze customer behavior, and optimise product performance. Glancio empowers retailers with real-time analytics that drive revenue, reduce costs, and elevate the customer experience.
                        </p>
                        
                        <div class="form-notice">
                            📧 Enquiry requests will be sent to glancioau@gmail.com
                        </div>
                        
                        <div class="form-container" style="max-width: 800px; margin: 0 auto;">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdH0y-gM0BtVX2kxIeZxhOyDdas5V5oFVm23LPP7d_Jd99gHA/viewform?embedded=true" width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 