# 🔗 Image URLs Quick Reference

## All Unsplash Images Used on Skainet Website

---

## 📸 Image Directory

### 1. Hero Section - Main Image
**File:** `src/sections/Hero.jsx`  
**URL:** 
```
https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=1000&fit=crop&q=80
```
**Description:** Professional cleaning team in uniform with equipment  
**Aspect Ratio:** 4:5 (Portrait)  
**Usage:** Main hero image on homepage

---

### 2. About Section - Team Photo
**File:** `src/sections/About.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop&q=80
```
**Description:** Cleaning professionals at work  
**Aspect Ratio:** 4:3 (Landscape)  
**Usage:** About section on homepage

---

### 3. Services - Residential Cleaning
**File:** `src/sections/Services.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop&q=80
```
**Description:** Clean, modern home interior  
**Aspect Ratio:** 3:2  
**Usage:** Residential Cleaning service card

---

### 4. Services - Commercial Cleaning
**File:** `src/sections/Services.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&q=80
```
**Description:** Modern office workspace  
**Aspect Ratio:** 3:2  
**Usage:** Commercial Cleaning service card

---

### 5. Services - Deep Cleaning
**File:** `src/sections/Services.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop&q=80
```
**Description:** Detailed cleaning in progress  
**Aspect Ratio:** 3:2  
**Usage:** Deep Cleaning service card

---

### 6. Services - Move In/Out Cleaning
**File:** `src/sections/Services.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80
```
**Description:** Empty, clean property interior  
**Aspect Ratio:** 3:2  
**Usage:** Move In/Out Cleaning service card

---

### 7. WhyUs Section - Happy Customer
**File:** `src/sections/WhyUs.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=700&h=500&fit=crop&q=80
```
**Description:** Satisfied customer in clean, bright home  
**Aspect Ratio:** 7:5  
**Usage:** Stats section visual on homepage

---

### 8. About Page - Team Portrait
**File:** `src/pages/AboutPage.jsx`  
**URL:**
```
https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop&q=80
```
**Description:** Professional cleaning team portrait  
**Aspect Ratio:** 1:1 (Square)  
**Usage:** Team section on About page

---

## 🎨 Unsplash URL Parameters Explained

All URLs use these optimization parameters:

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `w=` | 600-800 | Sets image width in pixels |
| `h=` | 400-1000 | Sets image height in pixels |
| `fit=crop` | - | Ensures exact dimensions by cropping |
| `q=80` | - | Quality setting (80% = optimal balance) |

---

## 🔄 How to Replace Images

If you want to use different images:

### Option 1: Use Different Unsplash Images
1. Visit [Unsplash.com](https://unsplash.com)
2. Search for your desired image
3. Get the photo ID from the URL (e.g., `photo-1581578731548-c64695cc6952`)
4. Replace the photo ID in the URL
5. Keep the size parameters (`w=`, `h=`, etc.)

### Option 2: Use Local Images
1. Place images in `public/Media/` folder
2. Update the `src` attribute:
   ```jsx
   src="/Media/your-image-name.jpg"
   ```

### Option 3: Use Different Stock Photo Service
- **Pexels:** `https://images.pexels.com/...`
- **Pixabay:** `https://pixabay.com/...`
- Update URLs in respective component files

---

## 📝 File Locations

Quick reference to where each image is used:

```
src/
├── sections/
│   ├── Hero.jsx          → 1 image (hero)
│   ├── About.jsx         → 1 image (team)
│   ├── Services.jsx      → 4 images (service cards)
│   └── WhyUs.jsx         → 1 image (stats)
└── pages/
    └── AboutPage.jsx     → 1 image (team)
```

**Total Images:** 8 high-quality professional photos

---

## 🖼️ Image Credits

All images from [Unsplash](https://unsplash.com) - Free to use

### Photographers (Optional Attribution)

While Unsplash doesn't require attribution, you can credit:

1. **Hero Image:** [Photographer Name on Unsplash]
2. **About Team:** [Photographer Name on Unsplash]
3. **Service Images:** Various Unsplash contributors

To find photographer:
- Click the Unsplash URL
- View the image page
- See photographer credit

---

## ⚡ Performance Notes

- **CDN:** All images served via Unsplash CDN (fast global delivery)
- **Caching:** Browser caching enabled automatically
- **Compression:** Images optimized automatically
- **WebP:** Modern browsers receive WebP format (smaller file size)
- **Lazy Loading:** React handles lazy loading by default

---

## 🔧 Customization Examples

### Change Image Size
```jsx
// Before
src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop&q=80"

// After (larger)
src="https://images.unsplash.com/photo-ID?w=1200&h=900&fit=crop&q=80"
```

### Change Image Quality
```jsx
// Before (80% quality)
src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop&q=80"

// After (higher quality, larger file)
src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop&q=95"
```

### Add Image Effects
```jsx
// Grayscale effect
src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop&q=80&sat=-100"

// Blur effect (for backgrounds)
src="https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop&q=80&blur=20"
```

---

## 📊 Current Image Sizes & Total Bandwidth

| Image | Dimensions | Est. Size | Location |
|-------|-----------|-----------|----------|
| Hero | 800x1000 | ~150 KB | Homepage |
| About Team | 800x600 | ~120 KB | Homepage |
| Service 1 | 600x400 | ~80 KB | Homepage |
| Service 2 | 600x400 | ~80 KB | Homepage |
| Service 3 | 600x400 | ~80 KB | Homepage |
| Service 4 | 600x400 | ~80 KB | Homepage |
| WhyUs | 700x500 | ~100 KB | Homepage |
| Team Portrait | 600x600 | ~100 KB | About Page |

**Total:** ~790 KB for all images (optimized and cached)

---

## ✅ Quality Checklist

- ✅ All images are high resolution
- ✅ All images are properly sized
- ✅ All images have alt text
- ✅ All images are optimized (80% quality)
- ✅ All images are CDN-delivered
- ✅ All images are mobile-responsive
- ✅ All images are royalty-free
- ✅ No attribution required

---

## 🎯 SEO Alt Text Reference

| Location | Alt Text |
|----------|----------|
| Hero | "Professional cleaning team in action" |
| About | "Professional cleaning team at work" |
| Service 1 | "Residential Cleaning" (auto from title) |
| Service 2 | "Commercial Cleaning" (auto from title) |
| Service 3 | "Deep Cleaning" (auto from title) |
| Service 4 | "Move In/Out Cleaning" (auto from title) |
| WhyUs | "Satisfied customer in clean home" |
| Team | "Professional cleaning team" |

---

## 🚀 Next Steps

1. **View the website** - See all images in action
2. **Test on mobile** - Verify responsive behavior
3. **Check load times** - Should be fast with CDN
4. **Gather feedback** - Get user opinions on images
5. **Consider customization** - Replace with branded photos if desired

---

*All image integrations complete! Your website now has professional, high-quality visuals throughout.*

**Created:** October 6, 2025  
**Project:** Skainet Cleaning Services  
**Total Images:** 8 professional photos

