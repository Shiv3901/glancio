// Terms Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class TermsPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getTermsSection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getTermsSection() {
        return `
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            Terms of Service
                        </h1>
                        <p class="text-xl text-gray-600 text-center mb-12">
                            Our terms and conditions for using Glancio services
                        </p>
                        
                        <div class="prose prose-lg max-w-none space-y-8">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    By accessing and using Glancio's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    Glancio provides AI-powered retail analytics services that process video footage from your existing CCTV cameras to generate insights about customer behavior, traffic patterns, and store performance.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    As a user of our services, you agree to:
                                </p>
                                <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                                    <li>Comply with all applicable laws and regulations</li>
                                    <li>Ensure you have proper authorization to use CCTV footage</li>
                                    <li>Display appropriate signage where cameras are deployed</li>
                                    <li>Maintain the security of your account credentials</li>
                                    <li>Use our services only for lawful purposes</li>
                                </ul>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    We are committed to protecting your privacy and the privacy of individuals captured in your CCTV footage. Our processing is designed to anonymize data and focus on behavioral patterns rather than individual identification. Please review our Privacy Policy for detailed information about how we handle data.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    Glancio retains all rights to our software, algorithms, and platform. You retain ownership of your data and insights generated through our services. We may use anonymized, aggregated data to improve our services.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    Glancio provides its services "as is" and makes no warranties about the accuracy, reliability, or completeness of the insights provided. We are not liable for any decisions made based on our analytics or any indirect damages arising from the use of our services.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    We strive to maintain high service availability but cannot guarantee uninterrupted access. We may perform maintenance or updates that temporarily affect service availability. We will provide reasonable notice for scheduled maintenance.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    Either party may terminate this agreement with written notice. Upon termination, we will cease processing your data and delete any stored information in accordance with our data retention policies.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    These terms are governed by the laws of Australia. Any disputes will be resolved in the courts of Victoria, Australia, unless otherwise required by law.
                                </p>
                            </div>

                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p class="text-gray-700 leading-relaxed">
                                    If you have questions about these Terms of Service, please contact us at legal@glancio.com. We are committed to addressing your concerns promptly and transparently.
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