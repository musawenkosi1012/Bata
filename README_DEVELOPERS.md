# Bata Zimbabwe Website - Developer Guide

## 🚀 Quick Start for Beginner Developers

This website has been restructured to be beginner-friendly while maintaining professional standards. Here's everything you need to know to get started!

## 📁 Project Structure

```
/Bata
├── index.html              # Homepage (start here!)
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling (1041 lines, well-commented)
│   └── js/
│       └── main.js         # JavaScript functionality (266 lines, simplified)
├── pages/
│   ├── about.html          # About us page
│   ├── contact.html        # Contact form page
│   ├── men-shoes.html      # Men's products
│   ├── women-shoes.html    # Women's products
│   ├── children-shoes.html # Children's products
│   ├── store-locator.html  # Store locations
│   └── promotions.html     # Current offers
├── TESTING_REPORT.md       # Comprehensive testing documentation
└── README_DEVELOPERS.md    # This file
```

## ✨ Key Features (Beginner-Friendly)

### 🎯 **No Inline Styles**
- All styling is in CSS classes
- Easy to find and modify
- Consistent across the website

### 📱 **Responsive Design**
- Works on desktop, tablet, and mobile
- Uses CSS Grid and Flexbox
- Mobile-first approach

### 🔧 **Simple JavaScript**
- Well-commented functions
- Traditional syntax (no arrow functions)
- Clear variable names
- Console logging for debugging

## 🎨 CSS Classes You Can Use

### Layout Classes
```css
.container          /* Centers content, max-width 1200px */
.text-center        /* Center align text */
.hidden             /* Hide elements */
```

### Spacing Classes
```css
.mt-1, .mt-2, .mt-3  /* Margin top (1rem, 2rem, 3rem) */
.mb-1, .mb-2, .mb-3  /* Margin bottom (1rem, 2rem, 3rem) */
```

### Color Classes (New!)
```css
.gradient-blue       /* Blue gradient background */
.gradient-green      /* Green gradient background */
.gradient-purple     /* Purple gradient background */
.gradient-red-orange /* Red-orange gradient background */
.gradient-blue-darker /* Darker blue gradient */
```

### Component Classes
```css
.member-photo        /* Team member photo styling */
.placeholder-img     /* Image placeholder styling */
.about-heritage      /* About page heritage image */
.community-impact    /* Community impact image */
.promo-image         /* Promotion image styling */
```

## 🔧 How to Modify Common Elements

### Change Colors
1. Open `assets/css/styles.css`
2. Find the color variables at the top
3. Modify hex color codes (e.g., `#e74c3c` to `#3498db`)

### Add New Gradient
```css
.gradient-custom {
    background: linear-gradient(135deg, #yourcolor1, #yourcolor2);
}
```

### Modify Slideshow Timing
1. Open `assets/js/main.js`
2. Find line: `setInterval(goToNextSlide, 5000);`
3. Change `5000` to your desired milliseconds (3000 = 3 seconds)

### Add New Page
1. Copy an existing HTML file from `/pages/`
2. Update the title and content
3. Add link to navigation in all HTML files
4. Test on mobile and desktop

## 🐛 Debugging Tips

### Check Browser Console
1. Press F12 (or Cmd+Option+I on Mac)
2. Click "Console" tab
3. Look for error messages or console.log outputs

### Common Issues & Solutions

**Menu not working on mobile?**
- Check if `menuToggle` and `nav-menu` IDs exist in HTML
- Verify JavaScript is loading (check console)

**Slideshow not advancing?**
- Ensure slides have class `slide`
- Check if buttons have correct IDs (`prevSlide`, `nextSlide`)

**Styles not applying?**
- Check CSS class names match HTML classes exactly
- Verify CSS file is linked in HTML `<head>`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

## 📱 Testing Your Changes

### Desktop Testing
1. Open website in Chrome, Firefox, Safari, Edge
2. Resize browser window to test responsiveness
3. Test all navigation links and forms

### Mobile Testing
1. Use browser dev tools mobile simulator
2. Test on actual mobile devices if possible
3. Check touch interactions work properly

### Performance Testing
1. Check page load times
2. Optimize images if needed
3. Minimize CSS/JS if site becomes slow

## 🚀 Deployment Checklist

Before publishing changes:
- [ ] Test on multiple browsers
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Test forms submit correctly
- [ ] Validate HTML (W3C validator)
- [ ] Run accessibility checks
- [ ] Optimize images for web

## 📚 Learning Resources

### HTML & CSS
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [W3C Validator](https://validator.w3.org/) - HTML validation
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing

## 🆘 Getting Help

1. **Check console for errors** (F12 → Console)
2. **Read the comments** in CSS and JavaScript files
3. **Test in different browsers** to isolate issues
4. **Use browser dev tools** to inspect elements
5. **Ask specific questions** with error messages included

## 🎯 Recommended Team Structure

- **1 Team Lead**: Oversees project, reviews code
- **2 Frontend Developers**: HTML/CSS modifications
- **1 JavaScript Developer**: Interactive features
- **1 Tester**: Cross-browser testing, mobile testing

Good luck with development! The codebase is designed to be your learning playground. 🚀