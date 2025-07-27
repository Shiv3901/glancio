// Product Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class ProductPage {
    static render() {
        return `
            ${Header.render()}
            <main class="main-content">
                ${this.getProductSection()}
            </main>
            ${Footer.render()}
        `;
    }

    static getProductSection() {
        return `
            <section class="py-20 bg-gray-50">
                <div class="container">
                    <div class="max-w-6xl mx-auto">
                        <div class="text-center mb-16">
                            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                                Your CCTV sees it all. glancio makes it actionable.
                            </h1>
                            <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                                glancio turns your existing camera network into a powerful behavioural insight engine — tracking real customer journeys, segmenting foot traffic, and revealing how your space actually performs.
                            </p>
                            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                                From heatmaps to segmentation to live alerts, glancio helps you understand how people move, where they pause, and what drives engagement — without any extra hardware.
                            </p>
                        </div>

                        <div class="space-y-20">
                            <!-- Multi-camera tracking section -->
                            <div class="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Multi-camera tracking. Real-world insight.
                                    </h2>
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
                                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        Segment the crowd. Understand your customer.
                                    </h2>
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
                                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        From foot traffic to floorplan fixes — fast.
                                    </h2>
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

                            <!-- Privacy section -->
                            <div class="text-center bg-white rounded-2xl p-12 shadow-lg">
                                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Built for retail. Backed by privacy.
                                </h2>
                                <div class="flex items-center justify-center mb-6">
                                    <div class="bg-gray-50 rounded-lg p-4">
                                        <div class="text-2xl font-bold text-blue-600">APP</div>
                                    </div>
                                </div>
                                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                                    glancio is built with compliance and business practicality in mind. All footage is processed securely and locally, with no cloud uploads or third-party sharing. Our platform complies with Australia's Privacy Act and the Australian Privacy Principles (APPs).
                                </p>
                            </div>
                        </div>

                        <div class="text-center mt-16">
                            <button class="btn btn-primary btn-large">Get an enquiry</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 