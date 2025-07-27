// About Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class AboutPage {
    static render() {
        // Load the about page specific CSS
        this.loadAboutCSS();
        
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getAboutSection()}
            </main>
            ${Footer.render()}
        `;
    }

    static loadAboutCSS() {
        // Check if CSS is already loaded
        if (!document.querySelector('link[href="/styles/about.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '/styles/about.css';
            document.head.appendChild(link);
        }
    }

    static getAboutSection() {
        return `
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                            About Us
                        </h1>
                        <p class="text-xl text-gray-600 text-center mb-12">
                            A multidisciplinary team building the future of physical retail
                        </p>
                        
                        <div class="prose prose-lg max-w-none mb-12">
                            <p class="text-gray-700 leading-relaxed">
                                At Glancio, we bring together expertise in artificial intelligence, data science, software engineering, and commercial strategy to help retailers and property owners unlock deeper insights from their existing CCTV systems. With experience spanning consulting, climate AI, deep learning, and real-time analytics, our team is united by a shared mission: to make physical spaces smarter, more efficient, and more human-centred.
                            </p>
                        </div>

                        <div class="mb-12">
                            <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
                            <div class="grid md:grid-cols-2 gap-8">
                                <div class="text-center">
                                    <img src="/images/harry.png" alt="Harry Bligh" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Harry Bligh <a href="https://www.linkedin.com/in/harrybligh/" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-2xl ml-2">💼</a></h3>
                                    <p class="text-gray-600 mb-3">Go-To-Market</p>
                                </div>
                                <div class="text-center">
                                    <img src="/images/shiv.png" alt="Shivam Savani" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Shivam Savani <a href="https://www.linkedin.com/in/shivam-savani/" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-2xl ml-2">💼</a></h3>
                                    <p class="text-gray-600 mb-3">Product & Design</p>
                                </div>
                                <div class="text-center">
                                    <img src="/images/vik.png" alt="Vikhyat Sharma" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Vikhyat Sharma <a href="https://www.linkedin.com/in/vikhyatsharma43/" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-2xl ml-2">💼</a></h3>
                                    <p class="text-gray-600 mb-3">Software Engineering</p>
                                </div>
                                <div class="text-center">
                                    <img src="/images/declan.png" alt="Declan Curran" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Declan Curran <a href="https://www.linkedin.com/in/declan-curran/" target="_blank" class="text-blue-500 hover:text-blue-600 transition-colors duration-300 text-2xl ml-2">💼</a></h3>
                                    <p class="text-gray-600 mb-3">AI & Machine Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 