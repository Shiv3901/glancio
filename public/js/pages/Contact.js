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
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            Contact Us
                        </h1>
                        <p class="text-xl text-gray-600 text-center mb-12">
                            Get in touch with our team to learn more about Glancio
                        </p>
                        
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <p class="text-gray-700 mb-8">
                                    Ready to transform your retail analytics? Our team is here to help you understand how Glancio can work for your business.
                                </p>
                                
                                <div class="space-y-6">
                                    <div class="flex items-start gap-4">
                                        <div class="text-2xl">📧</div>
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                            <p class="text-gray-600">hello@glancio.com</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="text-2xl">📍</div>
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                                            <p class="text-gray-600">Melbourne, Australia</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start gap-4">
                                        <div class="text-2xl">💼</div>
                                        <div>
                                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                                            <p class="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM AEST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                <form class="space-y-6">
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                        <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option>General Inquiry</option>
                                            <option>Product Demo</option>
                                            <option>Partnership</option>
                                            <option>Support</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your retail analytics needs..."></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-full">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 