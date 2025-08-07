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
                ${this.getAboutSection()}
                ${this.getPrivacySection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getHeroSection() {
        return `
            <section class="hero bg-primary-bg py-16 md:py-32 px-4">
                <div class="container">
                    <div class="text-center max-w-4xl mx-auto">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
                            Turn your cameras into AI agents for better retail <span class="text-blue-400">performance</span>
                        </h1>
                        <p class="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
                            glancio stitches together every customer journey across every camera — 
                            transforming footage into always-on, AI-powered retail intelligence.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
                            <a href="/enquiry" class="btn btn-primary btn-large">Get enquiry</a>
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
            <section class="py-16 md:py-20 bg-gray-50 px-4">
                <div class="container">
                    <div class="text-center max-w-4xl mx-auto mb-12 md:mb-16">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                            Your CCTV sees it all. glancio makes it actionable.
                        </h2>
                        <p class="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                            glancio turns your existing camera network into a powerful behavioural insight engine — tracking real customer journeys, segmenting foot traffic, and revealing how your space actually performs.
                        </p>
                        <p class="text-base text-gray-600 leading-relaxed">
                            From heatmaps to segmentation to live alerts, glancio helps you understand how people move, where they pause, and what drives engagement — without any extra hardware.
                        </p>
                    </div>

                    <div class="space-y-20 mb-16">
                        <!-- Multi-camera tracking section -->
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Multi-camera tracking. Real-world insight.
                                </h3>
                                <p class="text-lg text-gray-600 mb-6">
                                    See complete customer journeys across your store. With glancio's intelligent multi-camera stitching, shopper paths are automatically tracked and visualised — even as they move between camera zones.
                                </p>
                                <p class="text-gray-600">
                                    Whether you're spotting a dead zone or evaluating layout changes, get a full view of how your space influences customer movement and behaviour.
                                </p>
                            </div>
                            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div class="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                                    <div class="text-6xl">📹</div>
                                </div>
                            </div>
                        </div>

                        <!-- Customer segmentation section -->
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div class="order-2 lg:order-1">
                                <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                    <div class="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                                        <img src="/images/segment.png" alt="Customer segmentation analytics" class="w-full h-full object-contain rounded-xl">
                                    </div>
                                </div>
                            </div>
                            <div class="order-1 lg:order-2">
                                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Segment the crowd. Understand your customer.
                                </h3>
                                <p class="text-lg text-gray-600 mb-6">
                                    Go beyond traffic counts with real-time customer segmentation. Break down visitors by demographic attributes like age, gender, and ethnicity — then track how different segments interact with your space.
                                </p>
                                <p class="text-gray-600">
                                    Analyse performance over time, zoom into specific zones, or compare stores side by side — all with clear, actionable data.
                                </p>
                            </div>
                        </div>

                        <!-- Heatmaps section -->
                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    From foot traffic to floorplan fixes — fast.
                                </h3>
                                <p class="text-lg text-gray-600 mb-6">
                                    Heatmaps and alerting that help you act. Identify underused areas, spot high-traffic choke points, and respond quickly to unusual movement patterns.
                                </p>
                                <p class="text-gray-600">
                                    With built-in alerts and a simple interface, glancio turns complex behaviour data into store-friendly insights you can act on today.
                                </p>
                            </div>
                            <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div class="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                                    <div class="text-6xl">🔥</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div class="order-2 lg:order-1">
                            <div class="flex flex-col gap-6 md:gap-8">
                                <!-- PDF Report Tile -->
                                <div class="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <!-- PDF Header -->
                                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-4 md:px-6 py-3 md:py-4">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-2 md:space-x-3">
                                                <div class="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                                                    <span class="text-blue-600 font-bold text-xs md:text-sm">G</span>
                                                </div>
                                                <div class="text-white">
                                                    <h3 class="font-bold text-sm md:text-lg">Monthly Analysis Report</h3>
                                                    <p class="text-blue-100 text-xs md:text-sm">December 2024</p>
                                                </div>
                                            </div>
                                            <div class="text-white text-right">
                                                <div class="text-xs text-blue-100">Generated by</div>
                                                <div class="font-semibold text-xs md:text-sm">glancio</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- PDF Content -->
                                    <div class="p-4 md:p-6 bg-white">
                                        <!-- Key Metrics -->
                                        <div class="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                                            <div class="bg-blue-50 rounded-lg p-3 md:p-4">
                                                <div class="text-lg md:text-2xl font-bold text-blue-600">12,847</div>
                                                <div class="text-xs md:text-sm text-gray-600">Total Visitors</div>
                                                <div class="text-xs text-green-600">↑ 8.2% vs last month</div>
                                            </div>
                                            <div class="bg-purple-50 rounded-lg p-3 md:p-4">
                                                <div class="text-lg md:text-2xl font-bold text-purple-600">3.2min</div>
                                                <div class="text-xs md:text-sm text-gray-600">Avg. Dwell Time</div>
                                                <div class="text-xs text-green-600">↑ 12% vs last month</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Chart Placeholder -->
                                        <div class="bg-gray-50 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                                            <div class="flex items-center justify-between mb-2 md:mb-3">
                                                <h4 class="font-semibold text-gray-900 text-sm md:text-base">Customer Journey Heatmap</h4>
                                                <div class="text-xs text-gray-500">Zone A → Zone B → Zone C</div>
                                            </div>
                                            <div class="h-20 md:h-32 bg-gradient-to-r from-red-100 via-yellow-100 to-green-100 rounded flex items-center justify-center">
                                                <div class="text-gray-500 text-xs md:text-sm">📊 Interactive Heatmap</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Insights -->
                                        <div class="space-y-2 md:space-y-3">
                                            <div class="flex items-start space-x-2 md:space-x-3">
                                                <div class="w-2 h-2 bg-green-500 rounded-full mt-1 md:mt-2"></div>
                                                <div>
                                                    <div class="text-xs md:text-sm font-medium text-gray-900">Peak hours: 2-4 PM</div>
                                                    <div class="text-xs text-gray-500">Highest foot traffic observed</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start space-x-2 md:space-x-3">
                                                <div class="w-2 h-2 bg-yellow-500 rounded-full mt-1 md:mt-2"></div>
                                                <div>
                                                    <div class="text-xs md:text-sm font-medium text-gray-900">Zone B underperforming</div>
                                                    <div class="text-xs text-gray-500">Consider layout optimization</div>
                                                </div>
                                            </div>
                                            <div class="flex items-start space-x-2 md:space-x-3">
                                                <div class="w-2 h-2 bg-blue-500 rounded-full mt-1 md:mt-2"></div>
                                                <div>
                                                    <div class="text-xs md:text-sm font-medium text-gray-900">Young adult segment up 15%</div>
                                                    <div class="text-xs text-gray-500">Target demographic growth</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Footer -->
                                        <div class="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                                            <div class="flex items-center justify-between text-xs text-gray-500">
                                                <div>Page 1 of 3</div>
                                                <div>Generated: Dec 15, 2024</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Heatmap Tile -->
                                <div class="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 p-4 md:p-6">
                                    <div class="mb-3 md:mb-4">
                                        <h3 class="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Store Traffic Heatmap</h3>
                                        <p class="text-xs md:text-sm text-gray-600">December 2024 - Peak Hours</p>
                                    </div>
                                    
                                    <!-- Heatmap Grid -->
                                    <div class="grid grid-cols-6 gap-1 mb-3 md:mb-4">
                                        <!-- High traffic areas (red) -->
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-red-400 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-400 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-red-400 rounded-sm"></div>
                                        
                                        <!-- Medium traffic areas (orange/yellow) -->
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-400 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        
                                        <!-- Low traffic areas (light colors) -->
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-50 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        
                                        <!-- More variation -->
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-red-400 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-400 rounded-sm"></div>
                                        
                                        <!-- Bottom row -->
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-orange-300 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-200 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-50 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-gray-100 rounded-sm"></div>
                                        <div class="w-4 h-4 md:w-6 md:h-6 bg-yellow-300 rounded-sm"></div>
                                    </div>
                                    
                                    <!-- Legend -->
                                    <div class="flex items-center justify-between text-xs">
                                        <div class="flex items-center space-x-2 md:space-x-3">
                                            <div class="flex items-center space-x-1">
                                                <div class="w-2 h-2 bg-red-500 rounded-sm"></div>
                                                <span class="text-gray-600">High</span>
                                            </div>
                                            <div class="flex items-center space-x-1">
                                                <div class="w-2 h-2 bg-yellow-300 rounded-sm"></div>
                                                <span class="text-gray-600">Med</span>
                                            </div>
                                            <div class="flex items-center space-x-1">
                                                <div class="w-2 h-2 bg-gray-100 rounded-sm"></div>
                                                <span class="text-gray-600">Low</span>
                                            </div>
                                        </div>
                                        <div class="text-gray-500">Live</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="order-1 lg:order-2 text-center lg:text-left">
                            <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                                Real-time insights, actionable intelligence
                            </h3>
                            <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                                glancio provides a suite of powerful analytics tools to help you understand your customers and optimize your store.
                            </p>
                            <ul class="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
                                <li class="flex items-start lg:items-center">
                                    <span class="text-blue-500 text-xl md:text-2xl mr-3 flex-shrink-0">🚶‍♀️</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Shopper journey mapping</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Visualise how customers move through your space across multiple cameras.</p>
                                    </div>
                                </li>
                                <li class="flex items-start lg:items-center">
                                    <span class="text-purple-500 text-xl md:text-2xl mr-3 flex-shrink-0">🔍</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Customer segmentation</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Break down foot traffic by age, gender, and ethnicity to understand who's visiting — and how they behave.</p>
                                    </div>
                                </li>
                                <li class="flex items-start lg:items-center">
                                    <span class="text-red-500 text-xl md:text-2xl mr-3 flex-shrink-0">🔥</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Heatmaps and dead zones</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Pinpoint underperforming areas and layout friction with high-resolution visual overlays.</p>
                                    </div>
                                </li>
                                <li class="flex items-start lg:items-center">
                                    <span class="text-yellow-500 text-xl md:text-2xl mr-3 flex-shrink-0">⚡</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Live alerts, real action</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Respond faster with real-time notifications when customer behaviour changes or key zones are triggered.</p>
                                    </div>
                                </li>
                                <li class="flex items-start lg:items-center">
                                    <span class="text-green-500 text-xl md:text-2xl mr-3 flex-shrink-0">🧠</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Multi-camera intelligence</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Track individuals and groups across your network to get a complete picture of in-store behaviour.</p>
                                    </div>
                                </li>
                                <li class="flex items-start lg:items-center">
                                    <span class="text-blue-500 text-xl md:text-2xl mr-3 flex-shrink-0">💻</span>
                                    <div>
                                        <h4 class="font-semibold text-sm md:text-base">Simple, intuitive interface</h4>
                                        <p class="text-gray-600 text-sm md:text-base">Designed for retail teams — no technical background required.</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="mt-8 md:mt-10">
                                <a href="/enquiry" class="btn btn-primary btn-large">Get enquiry</a>
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
                            <a href="/enquiry" class="btn btn-primary">Get enquiry</a>
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

    static getAboutSection() {
        return `
            <section class="py-16 md:py-20 bg-gray-50 px-4">
                <div class="container">
                    <div class="max-w-4xl mx-auto text-center">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            About us
                        </h2>
                        <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            A multidisciplinary team building the future of physical retail
                        </p>
                        <p class="text-base text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                            At Glancio, we bring together expertise in artificial intelligence, data science, software engineering, and commercial strategy to help retailers and property owners unlock deeper insights from their existing CCTV systems. With experience spanning consulting, climate AI, deep learning, and real-time analytics, our team is united by a shared mission: to make physical spaces smarter, more efficient, and more human-centred.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div class="text-center">
                                <img src="/images/harry.png" alt="Harry Bligh" class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">Harry Bligh</h3>
                                <p class="text-gray-600 text-sm md:text-base">Go-To-Market</p>
                            </div>
                            <div class="text-center">
                                <img src="/images/shiv.png" alt="Shivam Savani" class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">Shivam Savani</h3>
                                <p class="text-gray-600 text-sm md:text-base">Product & Design</p>
                            </div>
                            <div class="text-center">
                                <img src="/images/vik.png" alt="Vikhyat Sharma" class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">Vikhyat Sharma</h3>
                                <p class="text-gray-600 text-sm md:text-base">Software Engineering</p>
                            </div>
                            <div class="text-center">
                                <img src="/images/declan.png" alt="Declan Curran" class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 object-cover">
                                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">Declan Curran</h3>
                                <p class="text-gray-600 text-sm md:text-base">AI & Machine Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getPrivacySection() {
        return `
            <section class="py-16 md:py-20 bg-white px-4">
                <div class="container">
                    <!-- Privacy section from Product page -->
                    <div class="text-center bg-gray-900 text-white rounded-2xl p-12 shadow-lg mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                            Built for retail. Backed by privacy.
                        </h2>
                        <div class="flex items-center justify-center mb-6">
                            <div class="bg-white rounded-lg p-4">
                                <div class="text-2xl font-bold text-blue-600">APP</div>
                            </div>
                        </div>
                        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
                            glancio is built with compliance and business practicality in mind. All footage is processed securely and locally, with no cloud uploads or third-party sharing. Our platform complies with Australia's Privacy Act and the Australian Privacy Principles (APPs).
                        </p>
                    </div>

                    <!-- Additional privacy details -->
                    <div class="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
                        <div>
                            <div class="bg-blue-50 rounded-lg p-4 mb-4 inline-block">
                                <div class="text-2xl font-bold text-blue-600">APP</div>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">APP-compliant</h3>
                            <p class="text-gray-600">glancio is built in line with Australia's Privacy Act and the Australian Privacy Principles (APPs).</p>
                        </div>
                        <div>
                            <div class="bg-blue-50 rounded-lg p-4 mb-4 inline-block">
                                <span class="text-4xl">🔒</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Secure & Local</h3>
                            <p class="text-gray-600">All footage is processed securely and locally, with no cloud uploads or third-party sharing.</p>
                        </div>
                        <div>
                            <div class="bg-blue-50 rounded-lg p-4 mb-4 inline-block">
                                <span class="text-4xl">👤</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-3">Anonymised Data</h3>
                            <p class="text-gray-600">Our AI operates on de-identified or pseudonymised data, delivering insights in aggregated form.</p>
                        </div>
                    </div>

                    <div class="text-center mt-16">
                        <a href="/enquiry" class="btn btn-primary btn-large">Get enquiry</a>
                    </div>
                </div>
            </section>
        `;
    }
} 