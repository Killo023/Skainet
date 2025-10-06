# Skainet Cleaning Services - Component Visual Guide

## 🎨 Visual Component Structure

This document provides a visual representation of each component and how they work together.

---

## 📄 Page Layouts

### 1. HOME PAGE (/)
```
┌─────────────────────────────────────────────────┐
│              HEADER (Fixed/Sticky)               │
│  Logo  Home Services About Contact [Get Quote]  │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                   HERO SECTION                   │
│  🏆 Trusted by 500+ Clients in Gauteng          │
│                                                  │
│  Exceptional Cleaning Services in GAUTENG       │
│                                                  │
│  Professional residential and commercial...      │
│                                                  │
│  ✓ 100% Vetted Staff    ✓ Same-Day Service     │
│                                                  │
│  [Get Your Free Quote]  [▶ See How We Work]    │
│                                                  │
│  ⭐ 4.9/5 | 500+ Clients | 10+ Years           │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                 SERVICES SECTION                 │
│                                                  │
│  Comprehensive Cleaning Solutions for Every Need│
│                                                  │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ 🏠 Residential│  │ 🏢 Commercial│            │
│  │   Cleaning   │  │   Cleaning   │            │
│  │              │  │              │            │
│  │ • Weekly     │  │ • Office     │            │
│  │ • Kitchen    │  │ • After-hours│            │
│  │ [Get Quote]  │  │ [Get Quote]  │            │
│  └──────────────┘  └──────────────┘            │
│                                                  │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ ✨ Deep Clean│  │ 📦 Move In/Out│           │
│  │              │  │              │            │
│  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                  WHY US SECTION                  │
│              (Light grey background)             │
│                                                  │
│              The Skainet Difference              │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ 🛡️ Fully │ │ 👥 Local │ │ 🏆 Quality│       │
│  │  Vetted  │ │  Experts │ │ Guarantee│       │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ 💚 Eco   │ │ ⏰ Flexible│ │ 💰 Trans- │      │
│  │ Friendly │ │ Schedule │ │  parent   │      │
│  └──────────┘ └──────────┘ └──────────┘       │
│                                                  │
│     500+      10+       15K+       4.9          │
│   Clients   Years    Cleans    Rating           │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                  ABOUT SECTION                   │
│                                                  │
│  [Image/Visual]    Gauteng's Most Trusted       │
│                    Cleaning Service              │
│                                                  │
│                    For over a decade...          │
│                                                  │
│                    ✓ 10+ years experience       │
│                    ✓ Residential & commercial   │
│                    ✓ Eco-friendly products      │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                 FINAL CTA SECTION                │
│               (Blue gradient background)         │
│                                                  │
│    Ready to Experience the Skainet Difference?  │
│                                                  │
│    [Get Your Free Quote] [Call: 012 345 6789]  │
│                                                  │
│    ⭐ Rated 4.9/5 | ✓ Same-day service          │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│                    FOOTER                        │
│                                                  │
│  Skainet     Quick Links  Services  Contact Us  │
│  [Logo]      • Home       • Resi.   📍 Gauteng  │
│              • Services   • Comm.   ☎ Phone     │
│  [Social]    • About      • Deep    ✉ Email     │
│                                                  │
│  © 2025 Skainet     Privacy | Terms             │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Component Breakdown

### Header Component (STICKY)
```
┌─────────────────────────────────────────────────────────────┐
│ [🧹 Logo]  Home  Services  About  Contact  ☎  [Get Quote]  │
└─────────────────────────────────────────────────────────────┘

Features:
✓ Sticky on scroll with shadow
✓ Active route highlighting
✓ Mobile hamburger menu
✓ Phone number display
✓ Prominent CTA button
```

### Hero Component
```
┌─────────────────────────────────────────────────┐
│                                                  │
│  🏆 Badge                                        │
│                                                  │
│  LARGE HEADLINE WITH                             │
│  BLUE ACCENT COLOR                               │
│                                                  │
│  Subheadline with description...                 │
│                                                  │
│  [Icon] Benefit 1    [Icon] Benefit 2           │
│                                                  │
│  [Primary Button]  [Secondary Button]           │
│                                                  │
│  Trust indicators: ⭐ Rating | Clients | Years  │
│                                                  │
└─────────────────────────────────────────────────┘

Key Elements:
✓ Gradient background
✓ Trust badge at top
✓ Large responsive headline
✓ Key benefits with icons
✓ Dual CTAs (primary + secondary)
✓ Trust indicators
✓ Decorative circles (desktop)
✓ Floating feature cards (desktop)
```

### ServiceCard Component (Reusable)
```
┌────────────────────────────┐
│                            │
│    [Image or Icon Area]    │
│    (Gradient background)   │
│                            │
├────────────────────────────┤
│                            │
│  [Icon] Service Title      │
│                            │
│  Description text that     │
│  explains the service...   │
│                            │
│  ✓ Feature 1               │
│  ✓ Feature 2               │
│  ✓ Feature 3               │
│  ✓ Feature 4               │
│                            │
│  Get a Quote →             │
│                            │
└────────────────────────────┘

Hover Effects:
✓ Moves up (-translate-y-2)
✓ Enhanced shadow
✓ Icon changes color
✓ Image scales up
```

### ContactForm Component
```
┌──────────────────────────────────┐
│                                  │
│  Full Name *                     │
│  [👤 John Doe____________]       │
│                                  │
│  Email Address *                 │
│  [✉ john@example.com_____]       │
│                                  │
│  Phone Number *                  │
│  [☎ +27 12 345 6789______]       │
│                                  │
│  Service Type *                  │
│  [▼ Select a service...]         │
│                                  │
│  Message                         │
│  [💬 Tell us more..._____]       │
│  [________________________]       │
│  [________________________]       │
│                                  │
│  [  Get Your Free Quote  ]       │
│                                  │
│  We'll respond within 24 hours   │
│                                  │
└──────────────────────────────────┘

Features:
✓ Icons in each field
✓ Validation on submit
✓ Success state display
✓ Auto-reset after success
✓ Focus states (blue ring)
✓ Required field indicators
```

### WhyUs Feature Cards
```
┌─────────────────────────────────────────────────┐
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  [Icon]  │  │  [Icon]  │  │  [Icon]  │     │
│  │          │  │          │  │          │     │
│  │  Title   │  │  Title   │  │  Title   │     │
│  │          │  │          │  │          │     │
│  │  Desc... │  │  Desc... │  │  Desc... │     │
│  │          │  │          │  │          │     │
│  └──────────┘  └──────────┘  └──────────┘     │
│                                                  │
└─────────────────────────────────────────────────┘

Hover Effects:
✓ Card lifts up
✓ Icon background changes to blue
✓ Icon scales larger
✓ Enhanced shadow
```

---

## 🎨 Color Usage Guide

### Primary Blue (#0066CC)
Used for:
- ✓ CTA buttons
- ✓ Active navigation links
- ✓ Icons and icon backgrounds
- ✓ Accent text (headline words)
- ✓ Links on hover
- ✓ Focus rings
- ✓ Final CTA section background

### Secondary Grey (#F7F9FC)
Used for:
- ✓ Alternate section backgrounds
- ✓ Input field backgrounds
- ✓ Card backgrounds
- ✓ Subtle dividers

### White
Used for:
- ✓ Main content backgrounds
- ✓ Header background
- ✓ Card backgrounds
- ✓ Text on dark backgrounds

### Gradients
```
Hero:      from-secondary-grey-50 via-white to-primary-blue-50
Final CTA: from-primary-blue to-primary-blue-700
```

---

## 📐 Spacing System

### Section Padding
```
Mobile:   py-16 (64px top & bottom)
Desktop:  py-24 (96px top & bottom)
```

### Component Spacing
```
Between sections: mb-16 (64px) or mb-20 (80px)
Card padding:     p-8 (32px)
Button padding:   px-8 py-3 (32px x 12px)
```

### Container Width
```
Max width: max-w-7xl (1280px)
Centered:  mx-auto
Padding:   px-6 (24px horizontal)
```

---

## 🔤 Typography Scale

### Headlines
```
Hero (XL):     text-4xl md:text-5xl lg:text-6xl
Section (LG):  text-3xl md:text-4xl lg:text-5xl
Subsection:    text-2xl md:text-3xl lg:text-4xl
Card Title:    text-xl md:text-2xl
```

### Body Text
```
Large:   text-lg md:text-xl
Regular: text-base
Small:   text-sm
Tiny:    text-xs
```

### Font Weights
```
Bold:      font-bold (700)
Semibold:  font-semibold (600)
Medium:    font-medium (500)
Regular:   font-normal (400)
```

---

## 📱 Responsive Behavior

### Header
```
Desktop: Full horizontal menu + phone + CTA
Mobile:  Hamburger menu (slides down when open)
```

### Hero
```
Desktop: 2-column layout (text + visual)
Mobile:  Single column, visual hidden
```

### Service Cards
```
Desktop: 2 columns (2x2 grid)
Tablet:  2 columns
Mobile:  1 column (stacked)
```

### WhyUs Cards
```
Desktop: 3 columns
Tablet:  2 columns
Mobile:  1 column
```

### Footer
```
Desktop: 4 columns
Tablet:  2 columns
Mobile:  1 column (stacked)
```

---

## 🎬 Animation & Transitions

### Hover Animations
```
Buttons:      scale-95 on active
Cards:        -translate-y-2 (move up)
Links:        color change
Icons:        scale-110
Images:       scale-110
```

### Transition Duration
```
All:     duration-300 (most common)
Slower:  duration-500 (image zooms)
```

### Focus States
```
All interactive: focus:ring-4 focus:ring-primary-blue-200
All buttons:     focus:outline-none
```

---

## 🔗 Navigation Flow

```
Header Navigation:
┌─────────┐
│  HOME   │ ──→ Hero + Services + WhyUs + About + Final CTA
└─────────┘

┌──────────┐
│ SERVICES │ ──→ Services Detail Page
└──────────┘

┌────────┐
│ ABOUT  │ ──→ About Page with Values & Team
└────────┘

┌─────────┐
│ CONTACT │ ──→ Contact Page with Form
└─────────┘

CTA Buttons throughout:
[Get Quote] ──→ Contact Page
[Phone]     ──→ tel: link
```

---

## 📦 Props for ServiceCard

```javascript
<ServiceCard
  icon={IconComponent}       // React Icon component
  title="Service Name"       // String
  description="..."          // String
  features={[...]}          // Array of strings
  image="path/to/image"     // Optional image URL
/>
```

### Example Usage:
```jsx
<ServiceCard
  icon={MdHome}
  title="Residential Cleaning"
  description="Keep your home sparkling clean..."
  features={[
    'Weekly, bi-weekly, or monthly cleaning',
    'Kitchen and bathroom deep cleaning',
    'Dusting, vacuuming, and mopping',
  ]}
/>
```

---

## 🎯 Call-to-Action Hierarchy

### Primary CTAs (Blue buttons)
1. Hero: "Get Your Free Quote"
2. Services: "Request Custom Quote"
3. Final CTA: "Get Your Free Quote"
4. Contact Page: "Get Your Free Quote" (form submit)

### Secondary CTAs
1. Hero: "See How We Work" (video/demo button)
2. About: "Learn More About Us"
3. Final CTA: "Call: 012 345 6789"

### Tertiary CTAs (Text links)
1. Service Cards: "Get a Quote →"
2. Footer links
3. Navigation links

---

## 🖼️ Image Placeholder Strategy

Currently using **emoji placeholders**:
- 🧹 Cleaning icon
- 👥 Team icon
- 📍 Location icon
- ⭐ Rating stars

### To Replace with Real Images:
```jsx
// In ServiceCard.jsx
<img
  src="/images/residential-cleaning.jpg"
  alt="Residential Cleaning"
  className="w-full h-full object-cover"
/>

// In Hero.jsx
<img
  src="/images/cleaning-team.jpg"
  alt="Professional Cleaning Team"
  className="w-full h-full object-cover rounded-2xl"
/>
```

Recommended image dimensions:
- Service cards: 800x600px
- Hero image: 800x1000px (portrait)
- About image: 1200x900px (landscape)

---

## ✨ Special UI Effects

### 1. Scroll Shadow on Header
```javascript
When scrollY > 20:
  - Adds shadow-md
  - Reduces padding
```

### 2. Active Route Indicator
```javascript
Blue underline on current page
Text color: primary-blue
```

### 3. Mobile Menu Animation
```javascript
max-h-0 → max-h-96
Smooth transition-all duration-300
```

### 4. Form Success State
```javascript
Green border + checkmark
Auto-reset after 3 seconds
```

### 5. Card Hover Effects
```javascript
translateY: -8px
shadow: soft → hover
Icon bg: blue-50 → blue-500
```

---

## 🎨 Design Principles Applied

1. **White Space**: Liberal padding and margins (p-8, p-12, m-10)
2. **Hierarchy**: Clear visual hierarchy with size and color
3. **Consistency**: Reusable components and spacing
4. **Accessibility**: Focus states, ARIA labels, semantic HTML
5. **Performance**: Lightweight, optimized CSS
6. **Responsiveness**: Mobile-first approach
7. **Trust**: Multiple trust indicators throughout
8. **Clarity**: Clear CTAs and value propositions

---

## 📊 Component Size Stats

```
Header:       ~105 lines
Footer:       ~150 lines
Hero:         ~130 lines
ServiceCard:  ~75 lines
Services:     ~85 lines
WhyUs:        ~120 lines
About:        ~90 lines
ContactForm:  ~140 lines
```

---

## 🚀 Performance Features

✓ No external image dependencies (emoji placeholders)
✓ Minimal JavaScript (React only)
✓ Tailwind PurgeCSS (removes unused CSS)
✓ Code splitting ready (React.lazy)
✓ Fast First Contentful Paint
✓ Responsive images ready
✓ Optimized bundle size

---

## 📝 Customization Quick Reference

### Change Logo
```jsx
// src/components/Header.jsx (line ~31)
<MdCleaningServices /> // Replace with your logo
```

### Change Hero Headline
```jsx
// src/sections/Hero.jsx (line ~23)
<h1>Your New Headline</h1>
```

### Add New Service
```jsx
// src/sections/Services.jsx (line ~7)
const services = [
  // Add your new service object
]
```

### Update Colors
```javascript
// tailwind.config.js (line ~9)
'primary-blue': {
  DEFAULT: '#YOUR_COLOR',
}
```

### Change Phone Number
```jsx
// Update in 3 files:
// - Header.jsx
// - Footer.jsx
// - ContactPage.jsx
```

---

## ✅ Quality Checklist

✓ All components are functional  
✓ Mobile responsive design  
✓ Cross-browser compatible  
✓ Accessibility features included  
✓ Clean, semantic HTML  
✓ Consistent naming conventions  
✓ No console errors  
✓ Performance optimized  
✓ SEO-friendly structure  
✓ Documentation included  

---

**Your Skainet Cleaning Services website is production-ready!** 🎉

Simply run `npm install` and `npm start` to see your beautiful new website in action.

---

*Component Guide - Skainet Cleaning Services*
*Created: October 6, 2025*

