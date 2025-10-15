# Troubleshooting Guide

**Last Updated:** January 2025

---

## 🔧 Common Issues & Solutions

This guide covers the most common issues you might encounter with the BYT P&L Tracker landing page and how to fix them.

---

## Images Not Displaying

### Symptoms
- Broken image icons
- Alt text showing instead of images
- Empty boxes where images should be

### Causes
- Images folder doesn't exist
- Image file names don't match HTML references
- Incorrect file paths

### Solutions

**1. Create images directory**
```bash
# Navigate to project root
cd "c:\Users\mcasi\App Dev\PNL Tracker\PLTracker-Landing-Page"

# Create images folder if it doesn't exist
mkdir images
```

**2. Check file names match exactly**
- Windows file names are case-insensitive, but use lowercase for consistency
- Verify: `logo.png` not `Logo.png` or `LOGO.png`
- Check spaces: `hero-screenshot.png` not `hero screenshot.png`

**3. Verify file paths are relative**
```html
<!-- Correct -->
<img src="images/logo.png" alt="BYT Logo">

<!-- Wrong -->
<img src="/images/logo.png" alt="BYT Logo">
<img src="./images/logo.png" alt="BYT Logo">
```

**4. Check browser console**
1. Press F12 to open DevTools
2. Go to Console tab
3. Look for 404 errors showing missing images
4. Fix paths accordingly

---

## Mobile Menu Not Working

### Symptoms
- Hamburger icon doesn't open menu
- No slide animation
- Menu appears but doesn't close

### Causes
- JavaScript not loading
- JavaScript errors in console
- CSS classes not applied

### Solutions

**1. Check if JavaScript is loading**
```html
<!-- Verify this line is at bottom of index.html -->
<script src="js/main.js" defer></script>
```

**2. Check browser console for errors**
1. Open DevTools (F12)
2. Go to Console tab
3. Look for red error messages
4. Fix any syntax errors in `main.js`

**3. Verify CSS classes**
Check that `styles.css` includes:
```css
.mobile-menu-active {
  transform: translateX(0);
}
```

**4. Test event listeners**
Open console and run:
```javascript
document.querySelector('.hamburger-menu').addEventListener('click', () => {
  console.log('Hamburger clicked!');
});
```

---

## Smooth Scrolling Not Working

### Symptoms
- Page jumps instead of scrolling smoothly
- Navigation links work but without animation

### Causes
- JavaScript not loading
- Browser doesn't support smooth scrolling
- User has reduced motion enabled

### Solutions

**1. Add CSS fallback**
Add to top of `styles.css`:
```css
html {
  scroll-behavior: smooth;
}
```

**2. Check if `main.js` is loading**
1. Open DevTools Network tab
2. Reload page
3. Look for `main.js` in file list
4. Verify status is 200 (OK)

**3. Respect user preferences**
If user has "Reduce Motion" enabled in their OS, smooth scrolling is intentionally disabled. This is correct behavior for accessibility.

**4. Test in different browser**
- Try Chrome, Firefox, Safari, Edge
- If works in one but not another, may be browser-specific issue

---

## Gumroad Overlay Not Appearing

### Symptoms
- Clicking "Get Started" opens new tab instead of overlay
- Button does nothing
- Page reloads instead of showing overlay

### Causes
- Gumroad script not loaded
- Incorrect button class
- Ad blocker blocking Gumroad
- Incorrect product URL

### Solutions

**1. Verify Gumroad script is loaded**
Check bottom of `index.html`:
```html
<script src="https://gumroad.com/js/gumroad.js"></script>
```

**2. Ensure buttons have correct class**
All purchase buttons must have `.gumroad-button`:
```html
<a href="https://yourname.gumroad.com/l/byt-pl-tracker"
   class="cta-primary gumroad-button">
  Get Started - $29
</a>
```

**3. Test in incognito mode**
1. Open incognito/private window (Ctrl+Shift+N)
2. Visit your landing page
3. Click "Get Started"
4. If overlay appears, ad blocker was the issue

**4. Check browser console**
Look for errors like:
- "Gumroad is not defined"
- "Failed to load resource"
- Network errors

**5. Verify product URL**
1. Go to Gumroad dashboard
2. Click on your product
3. Copy "Share" → "Product URL"
4. Replace in HTML (all 3 buttons)

---

## FAQ Accordion Animation Choppy

### Symptoms
- FAQ items expand/collapse with lag or jank
- Animation stutters or jumps

### Causes
- Max-height animation on large content
- Browser performance issues
- Too many animations at once

### Solutions

**1. Use fixed max-height value**
In `styles.css`:
```css
.faq-answer {
  max-height: 0;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 500px; /* Fixed value prevents jank */
}
```

**2. Reduce transition duration if needed**
```css
.faq-answer {
  transition: max-height 0.2s ease; /* Faster = less noticeable jank */
}
```

**3. Test on lower-end devices**
- Performance may vary by device
- Acceptable on desktop may be choppy on mobile

**4. Alternative: Use JavaScript for height**
If choppiness persists, use JavaScript to set exact height:
```javascript
const answer = document.querySelector('.faq-answer');
answer.style.maxHeight = answer.scrollHeight + 'px';
```

---

## Page Load Slow

### Symptoms
- Long wait for initial render
- Low Lighthouse score
- Images load slowly

### Causes
- Large uncompressed images
- Too many HTTP requests
- Render-blocking resources

### Solutions

**1. Compress all images**
- Use TinyPNG: https://tinypng.com/
- Target: < 200KB per image
- Optimize before adding to project

**2. Use WebP format**
```html
<picture>
  <source srcset="images/hero.webp" type="image/webp">
  <img src="images/hero.png" alt="Hero">
</picture>
```

**3. Lazy load below-fold images**
Add `loading="lazy"` to images:
```html
<img src="images/feature-1.png" alt="Feature" loading="lazy">
```

**4. Defer JavaScript**
Ensure scripts have `defer` attribute:
```html
<script src="js/main.js" defer></script>
```

**5. Run Lighthouse audit**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Click "Generate report"
4. Follow recommendations

---

## GitHub Pages Not Updating

### Symptoms
- Changes don't appear on live site
- Site shows old version
- New files not loading

### Causes
- Git push failed
- GitHub Pages cache
- Branch/folder configuration wrong

### Solutions

**1. Verify push succeeded**
```bash
# Check git status
git status

# Check commit history
git log --oneline -5

# Check remote
git remote -v
```

**2. Wait 2-3 minutes**
- GitHub Pages needs time to rebuild
- Don't keep refreshing immediately
- Wait at least 2 minutes

**3. Clear browser cache**
- Windows: Ctrl+F5
- Mac: Cmd+Shift+R
- Or use incognito mode

**4. Check build status**
1. Go to repository on GitHub
2. Click Settings → Pages
3. Look for build status/errors
4. Fix any errors shown

**5. Verify branch configuration**
1. Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main`
4. Folder: `/ (root)`
5. Click "Save"

---

## CSS Not Loading

### Symptoms
- Page appears unstyled
- Plain text with no formatting
- Blue underlined links

### Causes
- CSS file path incorrect
- CSS file not committed to git
- CSS file has syntax errors

### Solutions

**1. Check CSS link in HTML**
```html
<!-- Should be at top of index.html in <head> -->
<link rel="stylesheet" href="css/styles.css">
```

**2. Verify CSS file exists**
```bash
# Check file exists
ls css/styles.css

# If missing, create it
mkdir css
# Copy styles from backup
```

**3. Check for CSS syntax errors**
1. Open DevTools (F12)
2. Go to Console tab
3. Look for CSS parsing errors
4. Fix syntax issues

**4. Verify file is committed**
```bash
# Check if file is tracked
git ls-files css/styles.css

# If not tracked, add it
git add css/styles.css
git commit -m "Add CSS file"
git push
```

---

## JavaScript Not Working

### Symptoms
- No interactive features
- Console shows errors
- Buttons don't respond

### Causes
- JavaScript file not loading
- Syntax errors in code
- Missing dependencies

### Solutions

**1. Check script tag**
```html
<!-- Should be at bottom of index.html before </body> -->
<script src="js/main.js" defer></script>
```

**2. Check browser console**
1. Open DevTools (F12)
2. Go to Console tab
3. Look for red error messages
4. Note line numbers and error descriptions

**3. Verify file is loading**
1. Open DevTools Network tab
2. Reload page
3. Find `main.js` in file list
4. Verify status is 200 (OK)

**4. Test JavaScript works**
Open console and run:
```javascript
console.log('Test');
```
If nothing appears, JavaScript is completely disabled.

---

## Responsive Layout Broken

### Symptoms
- Content overflows on mobile
- Elements overlap
- Horizontal scrolling on mobile

### Causes
- Fixed widths instead of responsive
- Missing viewport meta tag
- CSS media queries not working

### Solutions

**1. Verify viewport meta tag**
```html
<!-- Should be in <head> section -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**2. Check for fixed widths**
Replace fixed widths with responsive units:
```css
/* Bad */
.container {
  width: 1200px;
}

/* Good */
.container {
  max-width: 1200px;
  width: 100%;
}
```

**3. Test responsive design**
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different screen sizes
4. Look for overflowing elements

**4. Add overflow protection**
```css
* {
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
}
```

---

## Accessibility Issues

### Symptoms
- WAVE checker shows errors
- Can't navigate with keyboard
- Screen reader issues

### Solutions

**1. Add missing alt text**
```html
<!-- Every image needs descriptive alt text -->
<img src="images/logo.png" alt="BYT P&L Tracker Logo">
```

**2. Fix heading hierarchy**
```html
<!-- Correct order: H1 → H2 → H3 -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

**3. Add ARIA labels**
```html
<button class="hamburger-menu" aria-label="Open navigation menu">
  ☰
</button>
```

**4. Ensure keyboard navigation**
All interactive elements should be focusable:
```css
a:focus, button:focus {
  outline: 2px solid #5c9eff;
  outline-offset: 2px;
}
```

---

## Performance Issues

### Symptoms
- Lighthouse score < 90
- Slow page load
- Animations lag

### Quick Wins

**1. Compress images**
- Use TinyPNG or Squoosh
- Target: < 200KB per image

**2. Add lazy loading**
```html
<img src="images/feature.png" loading="lazy" alt="Feature">
```

**3. Defer non-critical JavaScript**
```html
<script src="js/main.js" defer></script>
```

**4. Minify CSS (optional)**
Use online minifier for production:
- Before: 30KB
- After: 20KB (savings)

---

## Contact & Support

If you're still experiencing issues:

1. Check browser console for error messages (F12 → Console)
2. Take screenshots of the issue
3. Note which browser and OS you're using
4. Email: boneyardtees@gmail.com

**Include in your email:**
- Description of the issue
- Steps to reproduce
- Screenshots or error messages
- Browser and OS version
- Link to your deployed site (if applicable)

---

**For more help, see:**
- [06-TESTING-CHECKLIST.md](06-TESTING-CHECKLIST.md) - Complete testing procedures
- [09-REFERENCE-LINKS.md](09-REFERENCE-LINKS.md) - Useful resources and tools
