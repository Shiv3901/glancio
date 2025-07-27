export class Header {
    static render() {
        return `
            <header class="bg-primary-bg py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
                <div class="container flex justify-between items-center">
                    <div class="logo">
                        <h1 class="text-2xl font-bold text-white">glancio</h1>
                    </div>
                    <nav class="flex gap-8">
                        <a href="/product" class="text-white font-medium transition-colors duration-300 hover:text-blue-400">The Product</a>
                        <a href="/about" class="text-white font-medium transition-colors duration-300 hover:text-blue-400">About us</a>
                    </nav>
                    <div class="flex gap-4">
                        <a href="/" class="btn btn-secondary">Home</a>
                    </div>
                </div>
            </header>
        `;
    }
} 