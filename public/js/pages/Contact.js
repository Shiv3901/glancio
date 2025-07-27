// Contact Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class ContactPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getContactSection()}
            ${Footer.render()}
        `;
    }

    static getContactSection() {
        return `
            <section class="contact-container">
                <div class="container">
                    <div class="contact-content">
                        <h1 class="contact-title">Contact Us</h1>
                        <p class="contact-description">
                            Get in touch with our team for support, sales inquiries, or partnership opportunities
                        </p>
                        
                        <div class="contact-section">
                            <h2>Get in Touch</h2>
                            <p>We're here to help you transform your retail intelligence. Whether you have questions about our platform, need technical support, or want to explore partnership opportunities, our team is ready to assist you.</p>
                            
                            <div class="contact-info">
                                <div class="contact-item">
                                    <h3>📧 General Inquiries</h3>
                                    <p><a href="mailto:hello@glancio.com">hello@glancio.com</a></p>
                                    <p>For general questions and information</p>
                                </div>
                                
                                <div class="contact-item">
                                    <h3>💼 Sales & Demos</h3>
                                    <p><a href="mailto:sales@glancio.com">sales@glancio.com</a></p>
                                    <p>Schedule a demo or discuss pricing</p>
                                </div>
                                
                                <div class="contact-item">
                                    <h3>🛠️ Technical Support</h3>
                                    <p><a href="mailto:support@glancio.com">support@glancio.com</a></p>
                                    <p>Get help with your account or platform</p>
                                </div>
                                
                                <div class="contact-item">
                                    <h3>🤝 Partnerships</h3>
                                    <p><a href="mailto:partnerships@glancio.com">partnerships@glancio.com</a></p>
                                    <p>Explore collaboration opportunities</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact-section">
                            <h2>Office Hours</h2>
                            <p>Our team is available to assist you during the following hours:</p>
                            <ul>
                                <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (Local Time)</li>
                                <li><strong>Saturday:</strong> 10:00 AM - 2:00 PM (Local Time)</li>
                                <li><strong>Sunday:</strong> Closed</li>
                            </ul>
                            <p>For urgent technical issues outside of business hours, please email support@glancio.com and we'll respond within 24 hours.</p>
                        </div>

                        <div class="contact-section">
                            <h2>Send Us a Message</h2>
                            <form class="contact-form" action="#" method="POST">
                                <div class="form-group">
                                    <label for="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" id="company" name="company">
                                </div>
                                
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone">
                                </div>
                                
                                <div class="form-group">
                                    <label for="inquiry">Inquiry Type *</label>
                                    <select id="inquiry" name="inquiry" required>
                                        <option value="">Select an option</option>
                                        <option value="sales">Sales & Demo Request</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Inquiry</option>
                                        <option value="general">General Question</option>
                                        <option value="feedback">Feedback</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message">Message *</label>
                                    <textarea id="message" name="message" placeholder="Tell us how we can help you..." required></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 