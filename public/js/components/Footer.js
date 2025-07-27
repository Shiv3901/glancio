// Footer Component
export class Footer {
    static render() {
        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <div class="footer-logo">
                                <h3>glancio</h3>
                            </div>
                            <p class="footer-description">
                                Transforming retail intelligence through AI-powered camera analytics.
                            </p>
                        </div>
                        <div class="footer-section">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="/features">Features</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/demo">Get Enquiry</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p>&copy; 2025 Glancio. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
} 