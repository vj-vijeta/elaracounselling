# 🌿 Elara Counselling Website

A beautiful, responsive website for adult counselling services built with React and Tailwind CSS.

## ✨ Features

- 🎨 Beautiful pastel blue color scheme (#2C5481)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🌊 Animated background with floating particles
- 📧 Contact form with notification system
- 🎯 Modern, calming design perfect for counselling services

## 🚀 Quick Start

### Option 1: Automated Setup (Easiest)

**For Mac/Linux:**
```bash
chmod +x quick-start.sh
./quick-start.sh
```

**For Windows:**
```
double-click quick-start.bat
```

Then run:
```bash
npm run dev
```

### Option 2: Manual Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Open in browser:**
   - Visit `http://localhost:5173`

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

**Don't have Node.js?** [Download it here](https://nodejs.org/)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
elara-counselling/
├── src/
│   ├── App.jsx          # Main Elara Counselling component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Color Scheme

The website uses a calming, professional color palette:

- **Primary Blue:** `#2C5481` - Subtle pastel blue
- **Dark Blue:** `#234163` - For depth and contrast
- **Light Blue:** `#3D6A9F` - For highlights
- **Sage Accent:** `#C9DAD3` - Calming green accent
- **Background:** `#F7F9FC` - Soft off-white

## 🔧 Customization

### Change Colors

Find and replace in `src/App.jsx`:
- `#2C5481` - Main color
- `#234163` - Darker shade
- `#C9DAD3` - Accent color

### Update Content

Edit `src/App.jsx` to change:
- Services offered
- Contact information
- Address and phone number
- Section text and descriptions

### Modify Sections

The component is organized into clear sections:
1. Hero Section
2. About Section
3. Services Section
4. Why Choose Section
5. Contact Section
6. Book Appointment Section
7. Footer

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy Options

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder

**GitHub Pages:**
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Styles not loading:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

**Icons not showing:**
```bash
# Reinstall lucide-react
npm uninstall lucide-react
npm install lucide-react
```

## 📞 Contact Information

The website includes:
- **Address:** No.2, 1st & 2nd Floor, 16th Main, BTM Layout 2nd Stage, Bangalore – 560076
- **Phone:** +91 80156 29013
- **Email:** elarachildcarecentre@gmail.com

Update these in `src/App.jsx` as needed.

## 🤝 Support

Need help?
- Check the [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed instructions
- Review [Vite documentation](https://vitejs.dev/)
- Check [React documentation](https://react.dev/)

## 📄 License

This project is open source and available for use.

---

Built with ❤️ using React, Vite, and Tailwind CSS
