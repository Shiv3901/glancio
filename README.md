# Glancio - Retail Intelligence Platform

A modern, responsive website for Glancio, an AI-powered retail analytics platform that transforms camera footage into actionable intelligence.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by black.ai
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with compression and optimization
- **SEO Ready**: Proper meta tags and semantic HTML
- **Security**: Helmet.js for security headers
- **Accessibility**: WCAG compliant design

## 🎨 Design Theme

Based on the black.ai design with:
- **Primary Background**: Dark brown/charcoal (`#261C1C`)
- **Secondary Background**: Warm dark brown (`#402626`)
- **Accent Colors**: Green (`#76E093`), Pink (`#FF6B9D`), Yellow (`#FFB347`)
- **Typography**: Inter font family
- **Layout**: Clean, modern, and professional

## 📁 Project Structure

```
glancio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles/
│   │   └── main.scss       # SCSS styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Image assets
├── server.js               # Express server
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd glancio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS**
   ```bash
   npm run build
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Build CSS from SCSS
- `npm run watch-css` - Watch SCSS files for changes

## 🌐 Deployment on Render.com

### Automatic Deployment

1. **Connect your repository** to Render.com
2. **Create a new Web Service**
3. **Configure the service**:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js

### Environment Variables

No environment variables are required for basic deployment.

### Health Check

The application includes a health check endpoint at `/health` for Render.com monitoring.

## 📱 Sections

### Header
- Fixed navigation with logo
- Navigation links
- Call-to-action buttons

### Hero Section
- Compelling headline
- Descriptive text
- Dashboard mockup with video feed
- Decorative elements

### Client Logos
- Partner company logos
- Hover effects

### Features
- Customer Experience section
- Asset Protection section
- Interactive visual elements

### Privacy Section
- Privacy-first messaging
- Security certifications
- Compliance information

### Footer
- Company information
- Navigation links
- Copyright and social links

## 🎯 Key Features

### Customer Experience
- Conversion clarity
- Layout intelligence
- Promo performance
- Real-time signals

### Asset Protection
- Quick theft investigation
- Behavior pattern tracking
- Validated shrink data
- Fast alerts

### Privacy & Security
- Faces blurred by default
- No PII collection
- ISO 27001 certified
- No third-party sharing

## 🔧 Customization

### Colors
Edit the SCSS variables in `public/styles/main.scss`:
```scss
$primary-bg: #261C1C;
$secondary-bg: #402626;
$accent-green: #76E093;
$accent-pink: #FF6B9D;
$accent-yellow: #FFB347;
```

### Content
Update the HTML content in `public/index.html` to match your business needs.

### Styling
Modify the SCSS files in `public/styles/` to customize the design.

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

- Helmet.js for security headers
- Content Security Policy
- XSS protection
- HTTPS enforcement (in production)

## 📈 Analytics Ready

The site is prepared for analytics integration:
- Google Analytics
- Google Tag Manager
- Custom event tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

For support or questions:
- Email: contact@glancio.com
- Website: https://glancio.com

---

**Built with ❤️ for better retail performance** 