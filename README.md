# Skainet Cleaning Services

A professional, clean, and highly performant React single-page application for Skainet Cleaning Services - a residential and commercial cleaning company serving Gauteng, South Africa.

## ✨ Features

- **Modern React SPA** - Built with React 18 and functional components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Fast & Performant** - Optimized for speed and user experience
- **Clean UI/UX** - Professional design with ample white space
- **Routing** - Multi-page navigation with React Router DOM
- **Contact Forms** - Lead generation with service-specific forms
- **Icon Integration** - React Icons for beautiful UI elements

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Skainet
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Skainet/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Layout.jsx      # Page wrapper
│   │   └── ServiceCard.jsx # Service card component
│   ├── sections/           # Page sections
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Services.jsx    # Services overview
│   │   ├── WhyUs.jsx       # Trust & differentiators
│   │   └── About.jsx       # About section
│   ├── forms/
│   │   └── ContactForm.jsx # Contact/quote form
│   ├── pages/              # Full page components
│   │   ├── Home.jsx        # Home page
│   │   ├── ServicesPage.jsx# Services page
│   │   ├── AboutPage.jsx   # About page
│   │   └── ContactPage.jsx # Contact page
│   ├── App.js              # Main app with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global styles & Tailwind
├── package.json
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Design System

### Colors

- **Primary Blue**: `#0066CC` - Used for CTAs, headers, and accents
- **Secondary Grey**: `#F7F9FC` - Used for alternate section backgrounds

### Typography

- Font Family: Inter (Google Fonts)
- Responsive heading sizes using Tailwind utilities
- Clean, legible body text

### Components

- **Buttons**: Primary and Secondary variants with hover effects
- **Cards**: Soft shadows with hover animations
- **Forms**: Clean inputs with focus states
- **Icons**: React Icons library integration

## 📄 Pages

1. **Home** (`/`) - Landing page with hero, services, why us, and about sections
2. **Services** (`/services`) - Detailed service offerings
3. **About** (`/about`) - Company information and values
4. **Contact** (`/contact`) - Contact form and information

## 🛠️ Technologies

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Routing
- **Tailwind CSS** 3.3.5 - Styling
- **React Icons** 4.12.0 - Icon library
- **PostCSS** - CSS processing

## 📱 Mobile Responsiveness

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'primary-blue': {
    DEFAULT: '#YOUR_COLOR',
    // ... other shades
  },
}
```

### Update Contact Information

Update phone numbers and email addresses in:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/pages/ContactPage.jsx`

### Update Services

Modify the services array in `src/sections/Services.jsx`

## 📝 TODO: Backend Integration

To make the contact form functional:

1. Set up a backend API endpoint (Node.js, Python, etc.)
2. Update `src/forms/ContactForm.jsx` to send data to your API
3. Consider using services like:
   - EmailJS
   - SendGrid
   - AWS SES
   - Custom backend with Express/Django

## 📄 License

© 2025 Skainet Cleaning Services. All rights reserved.

## 🤝 Support

For questions or support, contact: info@skainet.co.za
Phone: +27 12 345 6789

---

Built with ❤️ for Skainet Cleaning Services

