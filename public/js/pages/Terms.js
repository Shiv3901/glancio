// Terms Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class TermsPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getTermsSection()}
            ${Footer.render()}
        `;
    }

    static getTermsSection() {
        return `
            <section class="policy-container">
                <div class="container">
                    <div class="policy-content">
                        <h1 class="policy-title">Terms of Service</h1>
                        <p class="policy-description">
                            Last updated: January 2025
                        </p>
                        
                        <div class="policy-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing and using Glancio's retail analytics platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                        </div>

                        <div class="policy-section">
                            <h2>2. Description of Services</h2>
                            <p>Glancio provides AI-powered retail analytics services that include:</p>
                            <ul>
                                <li>Camera-based customer behavior analysis</li>
                                <li>Retail performance insights and reporting</li>
                                <li>Asset protection and loss prevention analytics</li>
                                <li>Real-time retail intelligence dashboards</li>
                                <li>Privacy-first data processing</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>3. User Accounts and Registration</h2>
                            <h3>Account Creation</h3>
                            <p>To access our services, you must create an account with accurate and complete information. You are responsible for maintaining the security of your account credentials.</p>
                            
                            <h3>Account Responsibilities</h3>
                            <p>You are responsible for:</p>
                            <ul>
                                <li>All activities under your account</li>
                                <li>Maintaining the confidentiality of your credentials</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                                <li>Ensuring your account information is current and accurate</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>4. Acceptable Use</h2>
                            <p>You agree to use our services only for lawful purposes and in accordance with these terms. You must not:</p>
                            <ul>
                                <li>Use the service for any illegal or unauthorized purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the service</li>
                                <li>Use the service to collect personal information without consent</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>5. Privacy and Data Protection</h2>
                            <h3>Privacy-First Approach</h3>
                            <p>We are committed to protecting your privacy. Our services are designed with privacy at the core:</p>
                            <ul>
                                <li>Faces are automatically blurred before processing</li>
                                <li>No personally identifiable information is collected</li>
                                <li>Data is processed in accordance with our Privacy Policy</li>
                                <li>ISO 27001 certified security practices</li>
                            </ul>
                            
                            <h3>Data Processing</h3>
                            <p>By using our services, you consent to our processing of data as described in our Privacy Policy, which is incorporated into these Terms by reference.</p>
                        </div>

                        <div class="policy-section">
                            <h2>6. Service Availability and Support</h2>
                            <h3>Service Uptime</h3>
                            <p>We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect service availability.</p>
                            
                            <h3>Support Services</h3>
                            <p>We provide technical support during business hours. Support can be accessed through our designated channels as communicated to you.</p>
                        </div>

                        <div class="policy-section">
                            <h2>7. Payment Terms</h2>
                            <h3>Pricing and Billing</h3>
                            <p>Service pricing is as published on our website or as agreed in your service agreement. All fees are billed in advance and are non-refundable except as required by law.</p>
                            
                            <h3>Payment Methods</h3>
                            <p>We accept payment through approved methods. You authorize us to charge your payment method for all fees associated with your account.</p>
                        </div>

                        <div class="policy-section">
                            <h2>8. Intellectual Property</h2>
                            <h3>Our Rights</h3>
                            <p>Glancio retains all rights, title, and interest in and to our services, including all intellectual property rights. Our services are protected by copyright, trademark, and other laws.</p>
                            
                            <h3>Your Rights</h3>
                            <p>You retain ownership of your data and content. You grant us a limited license to process your data to provide our services.</p>
                        </div>

                        <div class="policy-section">
                            <h2>9. Limitation of Liability</h2>
                            <p>To the maximum extent permitted by law, Glancio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
                        </div>

                        <div class="policy-section">
                            <h2>10. Termination</h2>
                            <p>Either party may terminate this agreement at any time with written notice. Upon termination, your access to the services will cease, and we will delete your data in accordance with our data retention policies.</p>
                        </div>

                        <div class="policy-section">
                            <h2>11. Governing Law</h2>
                            <p>These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.</p>
                        </div>

                        <div class="policy-section">
                            <h2>12. Contact Information</h2>
                            <p>If you have any questions about these Terms of Service, please contact us at:</p>
                            <p><strong>Email:</strong> legal@glancio.com</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 