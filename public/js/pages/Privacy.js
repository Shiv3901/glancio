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
                            How we protect your data and respect your privacy
                        </p>
                        
                        <div class="prose prose-lg max-w-none space-y-8">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    Glancio processes video footage from your existing CCTV cameras to provide retail analytics insights. We do not collect personally identifiable information (PII) such as names, addresses, or contact details. Our system focuses on behavioral patterns and demographic analytics while maintaining individual privacy.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    The data we process is used exclusively for:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Generating retail analytics and insights</li>
                                    <li>Providing customer journey mapping</li>
                                    <li>Creating heatmaps and traffic analysis</li>
                                    <li>Delivering real-time alerts and notifications</li>
                                    <li>Improving our platform functionality</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Data Processing and Storage</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    All video processing occurs locally on your premises. No footage is uploaded to external servers or cloud storage. Our system anonymizes all data before processing, ensuring that individual identities cannot be determined from the analytics we provide.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    We implement industry-standard security measures to protect your data. This includes encryption of data in transit and at rest, secure access controls, and regular security audits. Our platform is designed with privacy-by-design principles, ensuring data protection from the ground up.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Australian Privacy Principles Compliance</h2>
                                <div class="flex items-center justify-center mb-6">
                                    <div class="bg-white rounded-lg p-4 shadow-lg">
                                        <img src="/images/app-logo.png" alt="Australian Privacy Principles Compliant" class="h-16 w-auto">
                                    </div>
                                </div>
                                <p class="text-gray-700 leading-relaxed">
                                    Glancio is built in line with Australia's Privacy Act and the Australian Privacy Principles (APPs). Our data handling practices comply with all 13 APPs, ensuring your customers' privacy is protected according to Australian law.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Access any personal data we may hold about you</li>
                                    <li>Request correction of inaccurate data</li>
                                    <li>Request deletion of your data</li>
                                    <li>Object to our processing of your data</li>
                                    <li>Request data portability</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@glancio.com. We are committed to being transparent about our data practices and will respond to your inquiries promptly.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                                </p>
                            </div>

                            <div class="bg-gray-100 p-6 rounded-lg">
                                <p class="text-sm text-gray-600">
                                    <strong>Last Updated:</strong> July 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 