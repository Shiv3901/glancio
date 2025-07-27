// Privacy Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class PrivacyPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getPrivacyPolicySection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getPrivacyPolicySection() {
        return `
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            Privacy Policy
                        </h1>
                        <p class="text-xl text-gray-600 text-center mb-12">
                            Last Updated: 28/04/2025
                        </p>
                        
                        <div class="prose prose-lg max-w-none space-y-8">
                            <div>
                                <p class="text-gray-700 leading-relaxed">
                                    GLANCIO PTY LTD ACN 688 383 477 is committed to protecting the privacy of individuals whose personal information we collect in the course of delivering our AI-powered camera analytics solutions. This policy outlines how we manage personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), as well as international standards such as the General Data Protection Regulation (GDPR) where applicable.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">1. What Information We Collect</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    We may collect personal information, including:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Video and audio footage (e.g. CCTV)</li>
                                    <li>Identifiable biometric patterns (e.g. movement behaviour)</li>
                                    <li>IP addresses and device information (for system access/use)</li>
                                    <li>Names and contact information (from clients, partners, or stakeholders)</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    We only collect personal information where it is reasonably necessary for our business activities.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">2. How We Collect Personal Information</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Personal data is primarily collected via:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>CCTV and other cameras deployed at client sites</li>
                                    <li>Integrations with client infrastructure or devices</li>
                                    <li>Direct communications (e.g. contact forms, contracts, surveys)</li>
                                    <li>Third-party service providers (e.g. cloud platforms, security tools)</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">3. How We Use Personal Information</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Our AI and analytics systems use collected data to:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Analyse customer movement and behavioural patterns</li>
                                    <li>Help clients optimise operations</li>
                                    <li>Generate anonymised, aggregated insights</li>
                                    <li>Detect unusual or security-relevant behaviour</li>
                                    <li>Improve the accuracy and efficiency of our services</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Retention</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    We do not store personal data long-term. Specifically:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>All footage is destroyed after analysis is complete</li>
                                    <li>Short-term retention (if applicable) is limited to the time required to perform system training, testing, or debugging</li>
                                    <li>Where storage is required for compliance or contractual reasons, we apply strict access controls and automated deletion mechanisms</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Use of AI and Analytics Tools</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Our systems use machine learning and pattern recognition models to interpret camera data. These models are designed to:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Operate on de-identified or pseudonymised data where possible</li>
                                    <li>Deliver outputs to clients in aggregated form</li>
                                    <li>Be transparent, explainable, and auditable as per AI ethical standards</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Consent and Legal Basis</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    We rely on:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Client contracts for lawful processing of surveillance data</li>
                                    <li>Legitimate interests (as defined under APPs and GDPR) where data supports business operations or service delivery</li>
                                    <li>Explicit consent, where legally required (e.g., EU jurisdictions)</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    Clients are responsible for displaying appropriate signage and notices where cameras are deployed.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Disclosure and Overseas Transfers</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    We may share personal data with:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Trusted third-party service providers (e.g. AWS for cloud hosting)</li>
                                    <li>Data processors under strict contractual agreements</li>
                                    <li>Law enforcement or government agencies when legally required</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    Where personal data is transferred overseas, we take reasonable steps to ensure it is protected under equivalent data protection regimes.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Access and Correction</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Individuals may request:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Access to their personal information</li>
                                    <li>Corrections if the information is inaccurate, out-of-date, or incomplete</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    To do so, contact us at glancioau@gmail.com. We may need to verify your identity before fulfilling such requests.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Security Measures</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    We implement a combination of:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Data encryption (in transit and at rest)</li>
                                    <li>Secure access controls and authentication</li>
                                    <li>Firewalls, intrusion detection, and regular system audits</li>
                                    <li>Physical security at camera installation sites</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    These safeguards help prevent misuse, loss, unauthorised access, or disclosure.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">10. International Data Compliance</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    If we collect personal data from individuals in the European Union, UK, or other international jurisdictions, we comply with:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>The GDPR</li>
                                    <li>The UK GDPR</li>
                                    <li>Other relevant local laws and guidance</li>
                                </ul>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    Where required, we will enable rights such as data portability, objection to processing, or erasure ("right to be forgotten").
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Complaints and Contact Information</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    If you have any questions or concerns regarding this Privacy Policy or your personal data, please contact:
                                </p>
                                <div class="bg-gray-100 p-4 rounded-lg">
                                    <p class="text-gray-700 font-semibold">Privacy Officer</p>
                                    <p class="text-gray-700">Glancio</p>
                                    <p class="text-gray-700">Email: glancioau@gmail.com</p>
                                </div>
                                <p class="text-gray-700 leading-relaxed mt-4">
                                    If you are unsatisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Updates to This Policy</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    This Privacy Policy may be updated periodically to reflect changes in our operations, technology, or legal requirements. The latest version will always be available on our website.
                                </p>
                            </div>

                            <div class="bg-gray-100 p-6 rounded-lg">
                                <p class="text-sm text-gray-600">
                                    <strong>Last Updated:</strong> 28/04/2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 