// Home Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class HomePage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getHeroSection()}
                ${this.getFeaturesSection()}
                ${this.getPrivacySection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getHeroSection() {
        return `
            <section class="hero bg-primary-bg py-32">
                <div class="container">
                    <div class="text-center max-w-4xl mx-auto">
                        <h1 class="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            Turn your cameras into 
                            <span class="text-blue-400">AI agents</span> 
                            for better retail performance
                        </h1>
                        <p class="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                            Glancio stitches together every customer journey across every camera — 
                            transforming footage into always-on, AI-powered retail intelligence.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button class="btn btn-primary btn-large">Get enquiry</button>
                            <button class="btn btn-secondary btn-large">View demo</button>
                        </div>
                    </div>
                    <div class="mt-20">
                        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div class="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                                <iframe 
                                    class="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/YMHt_FxReqw" 
                                    title="Glancio Demo Video"
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getFeaturesSection() {
        return `
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Glancio helps physical retailers see what truly drives performance
                        </h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Understand how people move, shop, and engage — then act on it.
                        </p>
                    </div>
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="order-2 lg:order-1">
                            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div class="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                                    <div class="text-6xl">📊</div>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2">
                            <ul class="space-y-8">
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">🧍‍♂️</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Shopper journey mapping</h3>
                                        <p class="text-gray-600">Visualise how customers move through your space across multiple cameras.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">🔎</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Customer segmentation</h3>
                                        <p class="text-gray-600">Break down foot traffic by age, gender, and ethnicity to understand who's visiting — and how they behave.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">🔥</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Heatmaps and dead zones</h3>
                                        <p class="text-gray-600">Pinpoint underperforming areas and layout friction with high-resolution visual overlays.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">⚡</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Live alerts, real action</h3>
                                        <p class="text-gray-600">Respond faster with real-time notifications when customer behaviour changes or key zones are triggered.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">🧠</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Multi-camera intelligence</h3>
                                        <p class="text-gray-600">Track individuals and groups across your network to get a complete picture of in-store behaviour.</p>
                                    </div>
                                </li>
                                <li class="flex items-start gap-4">
                                    <span class="text-2xl">🖥️</span>
                                    <div>
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Simple, intuitive interface</h3>
                                        <p class="text-gray-600">Designed for retail teams — no technical background required.</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-8">
                                <button class="btn btn-primary">View a demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getAssetProtectionSection() {
        return `
            <section class="asset-protection">
                <div class="container">
                    <div class="features-grid reverse">
                        <div class="feature-content">
                            <div class="feature-category">
                                <div class="category-icon">🛡️</div>
                                <span>ASSET PROTECTION</span>
                            </div>
                            <h3 class="feature-title">Asset protection that actually protects your time.</h3>
                            <ul class="feature-list">
                                <li>
                                    <span class="feature-icon">🔒</span>
                                    <span>Investigate theft cases in minutes, not hours</span>
                                </li>
                                <li>
                                    <span class="feature-icon">🧠</span>
                                    <span>Learn and track behaviour patterns over time</span>
                                </li>
                                <li>
                                    <span class="feature-icon">✅</span>
                                    <span>Quantify shrink with validated behavioural data</span>
                                </li>
                                <li>
                                    <span class="feature-icon">⚡</span>
                                    <span>Get alerts when something's off — fast</span>
                                </li>
                            </ul>
                            <button class="btn btn-primary">View a demo</button>
                        </div>
                        <div class="feature-visual">
                            <div class="protection-blob">
                                <div class="smiley">😊</div>
                                <div class="alert-popup">
                                    <div class="blurred-face">👤</div>
                                    <div class="alert-text">
                                        <div>Person 98286</div>
                                        <div>2:43:45PM Thur, 8th August</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getPrivacySection() {
        return `
            <section class="py-20 bg-primary-bg">
                <div class="container">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                            Built for business. Compliant by design.
                        </h2>
                        <p class="text-xl text-gray-300 mb-16">
                            Glancio is designed to meet the real-world needs of retailers, while respecting privacy at every step.
                        </p>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="text-center">
                                <div class="text-4xl mb-4">🛠️</div>
                                <h3 class="text-xl font-semibold text-white mb-3">Processed locally</h3>
                                <p class="text-gray-300">All camera footage is analysed securely on-site — no cloud uploads, no external servers.</p>
                            </div>
                            <div class="text-center">
                                <div class="text-4xl mb-4">🙈</div>
                                <h3 class="text-xl font-semibold text-white mb-3">Privacy-first architecture</h3>
                                <p class="text-gray-300">Face data is anonymised automatically before it's ever accessed.</p>
                            </div>
                            <div class="text-center">
                                <div class="text-4xl mb-4">📜</div>
                                <h3 class="text-xl font-semibold text-white mb-3">APP-compliant</h3>
                                <p class="text-gray-300">Glancio is built in line with Australia's Privacy Act and the Australian Privacy Principles (APPs).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 