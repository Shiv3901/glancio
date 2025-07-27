// About Page Component
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export class AboutPage {
    static render() {
        // Load the about page specific CSS
        this.loadAboutCSS();
        
        return `
            ${Header.render()}
            ${this.getAboutSection()}
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
            <section class="policy-container">
                <div class="container">
                    <div class="policy-content">
                        <h1 class="policy-title">About Us</h1>
                        <p class="policy-description">
                            A multidisciplinary team building the future of physical retail
                        </p>
                        
                        <div class="policy-section">
                            <p>At Glancio, we bring together expertise in artificial intelligence, data science, software engineering, and commercial strategy to help retailers and property owners unlock deeper insights from their existing CCTV systems. With experience spanning consulting, climate AI, deep learning, and real-time analytics, our team is united by a shared mission: to make physical spaces smarter, more efficient, and more human-centred.</p>
                        </div>

                        <div class="policy-section">
                            <h2>Our Team</h2>
                            <div class="team-links">
                                <div class="team-member-link">
                                    <div class="member-photo">
                                        <img src="/images/harry.png" alt="Harry Bligh" class="team-photo">
                                    </div>
                                    <h3>Harry Bligh</h3>
                                    <p class="team-role">Go-To-Market</p>
                                    <a href="https://www.linkedin.com/in/harrybligh/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </div>
                                <div class="team-member-link">
                                    <div class="member-photo">
                                        <img src="/images/declan.png" alt="Declan Curran" class="team-photo">
                                    </div>
                                    <h3>Declan Curran</h3>
                                    <p class="team-role">AI & Machine Learning</p>
                                    <a href="https://www.linkedin.com/in/declan-curran/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </div>
                                <div class="team-member-link">
                                    <div class="member-photo">
                                        <img src="/images/shiv.png" alt="Shivam Savani" class="team-photo">
                                    </div>
                                    <h3>Shivam Savani</h3>
                                    <p class="team-role">Product & Design</p>
                                    <a href="https://www.linkedin.com/in/shivam-savani/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </div>
                                <div class="team-member-link">
                                    <div class="member-photo">
                                        <img src="/images/vik.png" alt="Vikhyat Sharma" class="team-photo">
                                    </div>
                                    <h3>Vikhyat Sharma</h3>
                                    <p class="team-role">Software Engineering</p>
                                    <a href="https://www.linkedin.com/in/vikhyatsharma43/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 