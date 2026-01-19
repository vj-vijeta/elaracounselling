# Elara Counselling - Setup Guide

## 🚀 Option 1: Quick Setup with Vite (Recommended - 2 minutes)

### Step 1: Create a new Vite React project
```bash
npm create vite@latest elara-counselling -- --template react
cd elara-counselling
```

### Step 2: Install dependencies
```bash
npm install
npm install lucide-react
```

### Step 3: Replace the default component
- Replace the content of `src/App.jsx` with the `ElaraCounselling.jsx` code
- Update `src/App.css` to be empty or delete it

### Step 4: Update main files

**src/main.jsx** - Make sure it looks like this:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**src/index.css** - Add this Tailwind setup:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
}
```

### Step 5: Install and configure Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js** - Update to:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 6: Run the development server
```bash
npm run dev
```

Then open http://localhost:5173 in your browser! 🎉

---

## 🌐 Option 2: Simple HTML File (No Build Tools - 1 minute)

Create a single HTML file:

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Elara Counselling</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>

  <script type="module">
    import React, { useState, useEffect } from 'https://esm.sh/react@18';
    import ReactDOM from 'https://esm.sh/react-dom@18';
    import * as LucideIcons from 'https://esm.sh/lucide-react@0.263.1';

    // Paste the entire ElaraCounselling component code here
    // (everything inside the component function)

    ReactDOM.createRoot(document.getElementById('root')).render(
      React.createElement(ElaraCounselling)
    );
  </script>
</body>
</html>
```

Then just open the HTML file in your browser!

**Note:** This method works but styling might not be 100% perfect without a proper Tailwind setup.

---

## 📦 Option 3: Using Create React App (Traditional)

```bash
npx create-react-app elara-counselling
cd elara-counselling
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then follow similar steps as Option 1 for Tailwind configuration and replacing App.js.

---

## 🔧 Troubleshooting

**If animations don't work:**
- Make sure Tailwind CSS is properly installed and configured
- Check that `index.css` has the Tailwind directives

**If icons don't show:**
- Verify `lucide-react` is installed: `npm install lucide-react`

**If styles are missing:**
- Clear browser cache
- Restart the dev server
- Check browser console for errors

---

## 📝 Project Structure (Vite)

```
elara-counselling/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx          # Your Elara component goes here
│   ├── index.css        # Tailwind directives
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Customization

To change colors, find and replace:
- `#2C5481` - Main pastel blue
- `#234163` - Darker blue
- `#C9DAD3` - Sage accent color
- `#F7F9FC` - Background off-white

---

## 🚀 Deployment

Once ready to deploy:

**Build for production:**
```bash
npm run build
```

**Deploy to:**
- Vercel: `vercel deploy`
- Netlify: Drag the `dist` folder to netlify.com
- GitHub Pages: Use the `dist` folder

---

Need help? Check:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
