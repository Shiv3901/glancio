// Contact Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class ContactPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getContactSection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getContactSection() {
        return `
            <section class="py-12 bg-white">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            Contact Us
                        </h1>
                        <p class="text-xl text-gray-600 text-center mb-8">
                            Get in touch with our team to learn more about glancio
                        </p>
                        
                        <div class="max-w-2xl mx-auto">
                            <div class="bg-gray-50 rounded-2xl shadow-lg p-8">
                                <div class="space-y-8">
                                    <div class="flex items-start gap-4">
                                        <div class="text-3xl">📧</div>
                                        <div>
                                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                                            <p class="text-gray-600 text-lg">glancioau@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-4">
                                        <div class="text-3xl">📞</div>
                                        <div>
                                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Phone Number</h3>
                                            <p class="text-gray-600 text-lg">0420611335</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-4">
                                        <div class="text-3xl">🕒</div>
                                        <div>
                                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                                            <p class="text-gray-600 text-lg">Monday - Friday, 9:00 AM - 6:00 PM AEST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 