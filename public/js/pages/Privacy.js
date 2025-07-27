// Privacy Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class PrivacyPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getPrivacyPolicySection()}
            ${Footer.render()}
        `;
    }

    static getPrivacyPolicySection() {
        return `
            <section class="policy-container">
                <div class="container">
                    <div class="policy-content">
                        <h1 class="policy-title">Privacy Policy</h1>
                        <p class="policy-description">
                            Last Updated: 28/04/2025
                        </p>
                        
                        <div class="policy-section">
                            <p>GLANCIO PTY LTD ACN 688 383 477 is committed to protecting the privacy of individuals whose personal information we collect in the course of delivering our AI-powered camera analytics solutions. This policy outlines how we manage personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), as well as international standards such as the General Data Protection Regulation (GDPR) where applicable.</p>
                        </div>

                        <div class="policy-section">
                            <h2>1. What Information We Collect</h2>
                            <p>We may collect personal information, including:</p>
                            <ul>
                                <li>Video and audio footage (e.g. CCTV)</li>
                                <li>Identifiable biometric patterns (e.g. movement behaviour)</li>
                                <li>IP addresses and device information (for system access/use)</li>
                                <li>Names and contact information (from clients, partners, or stakeholders)</li>
                            </ul>
                            <p>We only collect personal information where it is reasonably necessary for our business activities.</p>
                        </div>

                        <div class="policy-section">
                            <h2>2. How We Collect Personal Information</h2>
                            <p>Personal data is primarily collected via:</p>
                            <ul>
                                <li>CCTV and other cameras deployed at client sites</li>
                                <li>Integrations with client infrastructure or devices</li>
                                <li>Direct communications (e.g. contact forms, contracts, surveys)</li>
                                <li>Third-party service providers (e.g. cloud platforms, security tools)</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>3. How We Use Personal Information</h2>
                            <p>Our AI and analytics systems use collected data to:</p>
                            <ul>
                                <li>Analyse customer movement and behavioural patterns</li>
                                <li>Help clients optimise operations</li>
                                <li>Generate anonymised, aggregated insights</li>
                                <li>Detect unusual or security-relevant behaviour</li>
                                <li>Improve the accuracy and efficiency of our services</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>4. Data Storage and Retention</h2>
                            <p>We do not store personal data long-term. Specifically:</p>
                            <ul>
                                <li>All footage is destroyed after analysis is complete</li>
                                <li>Short-term retention (if applicable) is limited to the time required to perform system training, testing, or debugging</li>
                                <li>Where storage is required for compliance or contractual reasons, we apply strict access controls and automated deletion mechanisms</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>5. Use of AI and Analytics Tools</h2>
                            <p>Our systems use machine learning and pattern recognition models to interpret camera data. These models are designed to:</p>
                            <ul>
                                <li>Operate on de-identified or pseudonymised data where possible</li>
                                <li>Deliver outputs to clients in aggregated form</li>
                                <li>Be transparent, explainable, and auditable as per AI ethical standards</li>
                            </ul>
                        </div>

                        <div class="policy-section">
                            <h2>6. Consent and Legal Basis</h2>
                            <p>We rely on:</p>
                            <ul>
                                <li>Client contracts for lawful processing of surveillance data</li>
                                <li>Legitimate interests (as defined under APPs and GDPR) where data supports business operations or service delivery</li>
                                <li>Explicit consent, where legally required (e.g., EU jurisdictions)</li>
                            </ul>
                            <p>Clients are responsible for displaying appropriate signage and notices where cameras are deployed.</p>
                        </div>

                        <div class="policy-section">
                            <h2>7. Disclosure and Overseas Transfers</h2>
                            <p>We may share personal data with:</p>
                            <ul>
                                <li>Trusted third-party service providers (e.g. AWS for cloud hosting)</li>
                                <li>Data processors under strict contractual agreements</li>
                                <li>Law enforcement or government agencies when legally required</li>
                            </ul>
                            <p>Where personal data is transferred overseas, we take reasonable steps to ensure it is protected under equivalent data protection regimes.</p>
                        </div>

                        <div class="policy-section">
                            <h2>8. Access and Correction</h2>
                            <p>Individuals may request:</p>
                            <ul>
                                <li>Access to their personal information</li>
                                <li>Corrections if the information is inaccurate, out-of-date, or incomplete</li>
                            </ul>
                            <p>To do so, contact us at glancioau@gmail.com. We may need to verify your identity before fulfilling such requests.</p>
                        </div>

                        <div class="policy-section">
                            <h2>9. Security Measures</h2>
                            <p>We implement a combination of:</p>
                            <ul>
                                <li>Data encryption (in transit and at rest)</li>
                                <li>Secure access controls and authentication</li>
                                <li>Firewalls, intrusion detection, and regular system audits</li>
                                <li>Physical security at camera installation sites</li>
                            </ul>
                            <p>These safeguards help prevent misuse, loss, unauthorised access, or disclosure.</p>
                        </div>

                        <div class="policy-section">
                            <h2>10. International Data Compliance</h2>
                            <p>If we collect personal data from individuals in the European Union, UK, or other international jurisdictions, we comply with:</p>
                            <ul>
                                <li>The GDPR</li>
                                <li>The UK GDPR</li>
                                <li>Other relevant local laws and guidance</li>
                            </ul>
                            <p>Where required, we will enable rights such as data portability, objection to processing, or erasure ("right to be forgotten").</p>
                        </div>

                        <div class="policy-section">
                            <h2>11. Complaints and Contact Information</h2>
                            <p>If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact:</p>
                            <p><strong>Privacy Officer</strong><br>
                            <strong>Glancio</strong><br>
                            <strong>Email:</strong> glancioau@gmail.com</p>
                            <p>If you are unsatisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.</p>
                        </div>

                        <div class="policy-section">
                            <h2>12. Updates to This Policy</h2>
                            <p>This Privacy Policy may be updated periodically to reflect changes in our operations, technology, or legal requirements. The latest version will always be available on our website.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 