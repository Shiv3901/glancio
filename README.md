# Glancio Frontend

Modern retail analytics platform website built with Node.js, Express, and Tailwind CSS.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Start development server with CSS watching
npm run build-css & npm start

# Or run the build script
./build.sh
```

### Production Build
```bash
# Build for production
npm run build-css-prod

# Start production server
npm start
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- **Source**: `public/styles/tailwind.css`
- **Output**: `public/styles/main.css`
- **Config**: `tailwind.config.js`

### CSS Build Commands
- `npm run build-css` - Development build with watch mode
- `npm run build-css-prod` - Production build (minified)

## 📁 Project Structure

```
glancio/
├── public/
│   ├── js/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── app-new.js     # Main SPA router
│   │   └── main.js        # Utilities
│   ├── styles/
│   │   ├── tailwind.css   # Tailwind source
│   │   └── main.css       # Compiled CSS
│   └── images/            # Static assets
├── server.js              # Express server
├── render.yaml            # Render deployment config
└── build.sh              # Build script
```

## 🌐 Deployment

The project is configured for deployment on Render:

- **Build Command**: `./build.sh`
- **Start Command**: `npm start`
- **Health Check**: `/health`

The build script ensures Tailwind CSS is compiled before deployment.

## 🎯 Features

- **Single Page Application (SPA)** - Smooth navigation without page reloads
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI** - Clean, professional design with animations
- **SEO Optimized** - Proper meta tags and structure
- **Performance** - Optimized assets and compression

## 🔧 Development

### Adding New Pages
1. Create a new component in `public/js/pages/`
2. Add the route to `app-new.js`
3. Style with Tailwind classes

### Styling Guidelines
- Use Tailwind utility classes
- Custom styles go in `tailwind.css` under `@layer`
- Responsive design with mobile-first approach
- Maintain consistent spacing and typography

## 📝 License

MIT License - see LICENSE file for details. 