// Home Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class HomePage {
    static render() {
        return `
            ${Header.render()}
            ${this.getHeroSection()}
            ${this.getFeaturesSection()}
            ${this.getPrivacySection()}
            ${Footer.render()}
        `;
    }

    static getHeroSection() {
        return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">Turn your cameras into AI agents for better retail performance</h1>
                        <p class="hero-description">
                            Your cameras see more when they work together. Glancio stitches together every customer journey across every camera — transforming footage into always-on, AI-powered retail intelligence. Lift conversions, reduce loss, and stay ahead — with eyes wide open.
                        </p>
                        <button class="btn btn-primary btn-large">Get an enquiry</button>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="dashboard-mockup">
                        <div class="dashboard-content">
                            <div class="video-feed">
                                <div class="video-container">
                                    <iframe 
                                        src="https://www.youtube.com/embed/YMHt_FxReqw" 
                                        title="Glancio Demo Video" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                            <div class="analytics-panels">
                                <div class="chart-panel"></div>
                                <div class="data-panel"></div>
                                <div class="metrics-panel"></div>
                            </div>
                        </div>
                        <div class="decorative-elements">
                            <div class="star">⭐</div>
                            <div class="arrow">→</div>
                            <div class="sun">☀️</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    static getFeaturesSection() {
        return `
            <section class="features">
                <div class="container">
                    <h2 class="section-title">Glancio helps physical retailers see what truly drives performance</h2>
                    <p class="section-subtitle">Understand how people move, shop, and engage — then act on it.</p>
                    <div class="features-grid">
                        <div class="feature-visual">
                            <div class="video-blob">
                                <div class="video-placeholder-small">
                                    <div class="decorative-elements-small">
                                        <div class="star-small">⭐</div>
                                        <div class="lightning">⚡</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="feature-content">
                            <ul class="feature-list">
                                <li>
                                    <span class="feature-icon">🧍‍♂️</span>
                                    <span>Shopper journey mapping</span>
                                    <p class="feature-description">Visualise how customers move through your space across multiple cameras.</p>
                                </li>
                                <li>
                                    <span class="feature-icon">🔎</span>
                                    <span>Customer segmentation</span>
                                    <p class="feature-description">Break down foot traffic by age, gender, and ethnicity to understand who's visiting — and how they behave.</p>
                                </li>
                                <li>
                                    <span class="feature-icon">🔥</span>
                                    <span>Heatmaps and dead zones</span>
                                    <p class="feature-description">Pinpoint underperforming areas and layout friction with high-resolution visual overlays.</p>
                                </li>
                                <li>
                                    <span class="feature-icon">⚡</span>
                                    <span>Live alerts, real action</span>
                                    <p class="feature-description">Respond faster with real-time notifications when customer behaviour changes or key zones are triggered.</p>
                                </li>
                                <li>
                                    <span class="feature-icon">🧠</span>
                                    <span>Multi-camera intelligence</span>
                                    <p class="feature-description">Track individuals and groups across your network to get a complete picture of in-store behaviour.</p>
                                </li>
                                <li>
                                    <span class="feature-icon">🖥️</span>
                                    <span>Simple, intuitive interface</span>
                                    <p class="feature-description">Designed for retail teams — no technical background required.</p>
                                </li>
                            </ul>
                            <button class="btn btn-primary">View a demo</button>
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
            <section class="privacy">
                <div class="container">
                    <div class="privacy-content">
                        <div class="privacy-text">
                            <h2 class="privacy-title">Privacy-First. Blurred by Default. Certified Secure.</h2>
                            <div class="privacy-features">
                                <div class="privacy-item">
                                    <span>At Glancio, we track behaviour — not identities.</span>
                                </div>
                                <div class="privacy-item">
                                    <span class="privacy-icon">👤</span>
                                    <span>Faces blurred by default, before footage ever leaves the store</span>
                                </div>
                                <div class="privacy-item">
                                    <span class="privacy-icon">🚫</span>
                                    <span>No PII. Ever.</span>
                                </div>
                                <div class="privacy-item">
                                    <span class="privacy-icon">✅</span>
                                    <span>ISO 27001 certified</span>
                                </div>
                                <div class="privacy-item">
                                    <span class="privacy-icon">🔒</span>
                                    <span>No third-party data sharing</span>
                                </div>
                                <div class="privacy-item">
                                    <span>Smart, secure analytics — with your customers' privacy at the core.</span>
                                </div>
                            </div>
                        </div>
                        <div class="certification">
                            <div class="cert-blob">
                                <div class="cert-logo">GCC</div>
                                <div class="cert-text">GLOBAL COMPLIANCE CERTIFICATION</div>
                                <div class="iso-badge">ISO 27001 CERTIFIED</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 