// Header Component
export class Header {
    static render() {
        return `
            <header class="header">
                <div class="container">
                    <div class="header-content">
                        <div class="logo">
                            <h1>glancio</h1>
                        </div>
                        <nav class="nav">
                            <a href="/product">The Product</a>
                            <a href="/about">About us</a>
                        </nav>
                        <div class="header-cta">
                            <button class="btn btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
} 