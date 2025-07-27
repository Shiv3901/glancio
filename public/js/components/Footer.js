// Footer Component
export class Footer {
    static render() {
        return `
            <footer class="bg-primary-bg py-16 border-t border-white/10 mt-auto flex-shrink-0">
                <div class="container">
                    <div class="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
                        <div class="footer-section md:w-1/2">
                            <div class="footer-logo">
                                <h3 class="text-2xl font-bold mb-4">glancio</h3>
                            </div>
                            <p class="text-gray-400 leading-relaxed">
                                Turn your cameras into AI agents for better retail performance. 
                                Transform footage into always-on, AI-powered retail intelligence.
                            </p>
                        </div>
                        <div class="flex gap-16 md:w-1/2 justify-end">
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
                    </div>
                    <div class="flex flex-col md:flex-row justify-between items-center pt-5 border-t border-white/10">
                        <div class="footer-copyright text-gray-400 text-sm">
                            © 2025 glancio. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
} 