// Footer Component
export class Footer {
    static render() {
        return `
            <footer class="bg-primary-bg py-16 border-t border-white/10 mt-auto flex-shrink-0">
                <div class="container">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                        <div class="footer-section">
                            <div class="footer-logo">
                                <h3 class="text-2xl font-bold mb-4">glancio</h3>
                            </div>
                            <p class="text-gray-400 leading-relaxed">
                                Turn your cameras into AI agents for better retail performance. 
                                Transform footage into always-on, AI-powered retail intelligence.
                            </p>
                        </div>
                        <div class="footer-section">
                            <h4 class="text-lg font-semibold mb-5">Product</h4>
                            <ul>
                                <li class="mb-3"><a href="/product" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Features</a></li>
                                <li class="mb-3"><a href="/demo" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Demo</a></li>
                                <li class="mb-3"><a href="/pricing" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4 class="text-lg font-semibold mb-5">Company</h4>
                            <ul>
                                <li class="mb-3"><a href="/about" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
                                <li class="mb-3"><a href="/contact" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4 class="text-lg font-semibold mb-5">Legal</h4>
                            <ul>
                                <li class="mb-3"><a href="/privacy" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
                                <li class="mb-3"><a href="/terms" class="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between items-center pt-5 border-t border-white/10">
                        <div class="footer-copyright text-gray-400 text-sm">
                            © 2024 Glancio. All rights reserved.
                        </div>
                        <div class="footer-social flex gap-5 mt-4 md:mt-0">
                            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">LinkedIn</a>
                            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
} 