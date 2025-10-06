# 🚀 Quick Start Guide - Skainet Cleaning Services

## Get Your Website Running in 3 Minutes!

---

## Step 1: Install Dependencies ⚙️

Open your terminal in the project folder and run:

```bash
npm install
```

**What's being installed:**
- React & React DOM
- React Router DOM (for navigation)
- Tailwind CSS (for styling)
- React Icons (for beautiful icons)
- Development tools

**Time:** ~2 minutes

---

## Step 2: Start Development Server 🚀

Once installation is complete, run:

```bash
npm start
```

**What happens:**
- Development server starts
- Browser opens automatically at `http://localhost:3000`
- Hot reload enabled (changes appear instantly)

**Time:** ~10 seconds

---

## Step 3: View Your Website 🎉

Your browser should open automatically showing:

✅ Professional header with navigation  
✅ Hero section with "Exceptional Cleaning Services in Gauteng"  
✅ Service cards for 4 cleaning types  
✅ Why Us section with 6 features  
✅ About section  
✅ Contact form  
✅ Professional footer  

---

## 🎨 What You'll See

### Home Page
- **Hero**: Large headline, CTAs, trust indicators
- **Services**: 4 service cards (Residential, Commercial, Deep Clean, Move In/Out)
- **Why Us**: 6 feature cards + stats
- **About**: Company information
- **Final CTA**: Blue section with quote button

### Other Pages
- **/services** - Detailed services page
- **/about** - About page with values
- **/contact** - Contact form with info cards

---

## 🛠️ Common Commands

### Start Development Server
```bash
npm start
```
Opens `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Creates optimized build in `build/` folder

### Test the App
```bash
npm test
```
Runs test suite

---

## 📱 Test Responsiveness

Open the site and resize your browser, or:

1. **Chrome DevTools**: Press `F12` → Click device toolbar icon
2. **Test on**:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1280px+)

Everything is fully responsive! ✅

---

## ✏️ Quick Customizations

### 1. Change Phone Number (3 files)

**src/components/Header.jsx** (Line ~77):
```jsx
href="tel:+27123456789"  // Update here
```

**src/components/Footer.jsx** (Line ~87):
```jsx
+27 12 345 6789  // Update here
```

**src/pages/ContactPage.jsx** (Line ~17):
```jsx
info: '+27 12 345 6789',  // Update here
```

### 2. Change Email Address

**src/components/Footer.jsx** (Line ~93):
```jsx
info@skainet.co.za  // Update here
```

**src/pages/ContactPage.jsx** (Line ~24):
```jsx
info: 'info@skainet.co.za',  // Update here
```

### 3. Update Hero Headline

**src/sections/Hero.jsx** (Line ~23):
```jsx
<h1 className="heading-xl text-gray-900">
  Exceptional Cleaning Services in{' '}
  <span className="text-primary-blue">Gauteng</span>
</h1>
```

### 4. Change Brand Colors

**tailwind.config.js** (Line ~9):
```javascript
'primary-blue': {
  DEFAULT: '#0066CC',  // Change this
  // Update all shades with your color
}
```

---

## 🎯 Using Your Logo

I noticed you have `public/Media/Logo.jpg`. To use it:

**Option 1: Replace the Icon in Header**

Edit `src/components/Header.jsx` (around line ~31):

```jsx
// Current:
<MdCleaningServices className="text-white text-2xl" />

// Replace with:
<img 
  src="/Media/Logo.jpg" 
  alt="Skainet Logo" 
  className="w-8 h-8 object-contain"
/>
```

**Option 2: Use Next to Text**

```jsx
<img 
  src="/Media/Logo.jpg" 
  alt="Skainet" 
  className="w-10 h-10 object-contain rounded-lg"
/>
```

---

## 🔗 Make Contact Form Functional

Currently, the form logs to console. To make it send emails:

### Option A: EmailJS (Free, Easy)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `src/forms/ContactForm.jsx`:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    setSubmitted(true);
  });
};
```

### Option B: Backend API

Create your own backend with:
- Node.js + Express
- Python + Flask/Django
- PHP

Then update the form to POST to your API endpoint.

---

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates a `build/` folder with optimized files.

### Deploy To:
- **Netlify**: Drag & drop the `build` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **Any web host**: Upload `build/` folder contents

---

## 🎓 Project Structure Quick Reference

```
Skainet/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx     # Navigation
│   │   ├── Footer.jsx     # Footer
│   │   ├── Layout.jsx     # Page wrapper
│   │   └── ServiceCard.jsx# Service card
│   │
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Services.jsx   # Services section
│   │   ├── WhyUs.jsx      # Features section
│   │   └── About.jsx      # About section
│   │
│   ├── pages/             # Full pages
│   │   ├── Home.jsx       # Home page
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   │
│   ├── forms/
│   │   └── ContactForm.jsx# Contact form
│   │
│   └── App.js             # Main router
│
├── public/
│   └── index.html         # HTML template
│
└── tailwind.config.js     # Styling config
```

---

## 🐛 Troubleshooting

### Issue: "npm install" fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
set PORT=3001 && npm start
```

### Issue: Tailwind styles not loading

**Solution:**
1. Stop the server (`Ctrl+C`)
2. Delete `node_modules`
3. Run `npm install` again
4. Run `npm start`

### Issue: Hot reload not working

**Solution:**
- Save files with `Ctrl+S`
- Check terminal for errors
- Refresh browser manually

---

## 📚 Learn More

### Tailwind CSS Classes
- **Spacing**: `p-4` (padding), `m-4` (margin), `space-x-4` (gap)
- **Colors**: `text-primary-blue`, `bg-secondary-grey`
- **Responsive**: `md:text-xl` (medium screens), `lg:flex` (large screens)
- **Hover**: `hover:bg-blue-500`, `hover:scale-105`

### React Patterns
- All components use **functional components** with **hooks**
- State management with `useState`
- Side effects with `useEffect`
- Navigation with React Router's `Link` and `useLocation`

---

## ✅ Pre-Deployment Checklist

Before going live, update these:

- [ ] Phone numbers (Header, Footer, Contact page)
- [ ] Email addresses (Footer, Contact page)
- [ ] Company address (Footer)
- [ ] Social media links (Footer)
- [ ] Replace emoji placeholders with real images
- [ ] Connect contact form to email service
- [ ] Add Google Analytics (optional)
- [ ] Test on real mobile devices
- [ ] Run `npm run build` and test production build

---

## 🎉 You're All Set!

Your professional cleaning services website is ready to go!

### Next Steps:
1. ✅ Customize contact information
2. ✅ Add real images (replace emoji placeholders)
3. ✅ Connect contact form to email service
4. ✅ Deploy to hosting platform
5. ✅ Share with the world!

---

## 💬 Need Help?

All documentation files included:
- **README.md** - Main documentation
- **PROJECT_SUMMARY.md** - Complete project overview
- **COMPONENT_GUIDE.md** - Visual component guide
- **QUICKSTART.md** - This file!

---

**Happy Coding! 🚀**

*Your Skainet Cleaning Services website is professional, performant, and ready to generate leads!*

---

*Last Updated: October 6, 2025*

