// Enquiry Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class EnquiryPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getEnquirySection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getEnquirySection() {
        return `
            <section class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <!-- Header Section -->
                        <div class="text-center mb-12">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
                                <span class="text-2xl">📧</span>
                            </div>
                            <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                                Enquire Now
                            </h1>
                            <p class="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Leverage cutting-edge AI to monitor in-store activity, analyze customer behavior, and optimise product performance. 
                                <span class="font-semibold text-blue-600">glancio</span> empowers retailers with real-time analytics that drive revenue, reduce costs, and elevate the customer experience.
                            </p>
                        </div>

                        <!-- Form Container -->
                        <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                                <h2 class="text-2xl font-bold text-gray-900 mb-2">Start Your Enquiry</h2>
                                <p class="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                            </div>
                            <div class="p-8">
                                <div class="flex justify-center">
                                    <iframe 
                                        src="https://docs.google.com/forms/d/e/1FAIpQLSdH0y-gM0BtVX2kxIeZxhOyDdas5V5oFVm23LPP7d_Jd99gHA/viewform?embedded=true" 
                                        width="100%" 
                                        height="800" 
                                        frameborder="0" 
                                        marginheight="0" 
                                        marginwidth="0"
                                        class="rounded-lg shadow-inner">
                                        Loading…
                                    </iframe>
                                </div>
                            </div>
                        </div>

                     
                    </div>
                </div>
            </section>
        `;
    }
} 