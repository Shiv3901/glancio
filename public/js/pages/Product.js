// Product Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class ProductPage {
    static render() {
        return `
            ${Header.render()}
            ${this.getProductSection()}
            ${Footer.render()}
        `;
    }

    static getProductSection() {
        return `
            <section class="product-container">
                <div class="container">
                    <div class="product-content">
                        <div class="product-hero">
                            <h1 class="product-title">Your CCTV sees it all. Glancio makes it actionable.</h1>
                            <p class="product-description">
                                Glancio turns your existing camera network into a powerful behavioural insight engine — tracking real customer journeys, segmenting foot traffic, and revealing how your space actually performs.
                            </p>
                            <p class="product-subtitle">
                                From heatmaps to segmentation to live alerts, Glancio helps you understand how people move, where they pause, and what drives engagement — without any extra hardware.
                            </p>
                        </div>

                        <div class="product-features">
                            <div class="product-feature">
                                <div class="feature-header">
                                    <h2>Multi-camera tracking. Real-world insight.</h2>
                                    <h3>See complete customer journeys across your store.</h3>
                                </div>
                                <div class="feature-content">
                                    <p>
                                        With Glancio's intelligent multi-camera stitching, shopper paths are automatically tracked and visualised — even as they move between camera zones.
                                    </p>
                                    <p>
                                        Whether you're spotting a dead zone or evaluating layout changes, get a full view of how your space influences customer movement and behaviour.
                                    </p>
                                </div>
                            </div>

                            <div class="product-feature">
                                <div class="feature-header">
                                    <h2>Segment the crowd. Understand your customer.</h2>
                                    <h3>Go beyond traffic counts with real-time customer segmentation.</h3>
                                </div>
                                <div class="feature-content">
                                    <p>
                                        Break down visitors by demographic attributes like age, gender, and ethnicity — then track how different segments interact with your space.
                                    </p>
                                    <p>
                                        Analyse performance over time, zoom into specific zones, or compare stores side by side — all with clear, actionable data.
                                    </p>
                                </div>
                            </div>

                            <div class="product-feature">
                                <div class="feature-header">
                                    <h2>From foot traffic to floorplan fixes — fast.</h2>
                                    <h3>Heatmaps and alerting that help you act.</h3>
                                </div>
                                <div class="feature-content">
                                    <p>
                                        Identify underused areas, spot high-traffic choke points, and respond quickly to unusual movement patterns.
                                    </p>
                                    <p>
                                        With built-in alerts and a simple interface, Glancio turns complex behaviour data into store-friendly insights you can act on today.
                                    </p>
                                </div>
                            </div>

                            <div class="product-feature">
                                <div class="feature-header">
                                    <h2>Built for retail. Backed by privacy.</h2>
                                </div>
                                <div class="feature-content">
                                    <p>
                                        Glancio is built with compliance and business practicality in mind. All footage is processed securely and locally, with no cloud uploads or third-party sharing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="product-cta">
                            <button class="btn btn-primary btn-large">Get an enquiry</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 