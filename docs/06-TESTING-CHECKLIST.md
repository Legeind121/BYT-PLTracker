# Testing Checklist

**Last Updated:** January 2025

---

## ✅ Comprehensive Testing Guide

Use this checklist before deploying your landing page to ensure everything works perfectly.

---

## Functionality Tests

### Navigation

- [ ] All nav links scroll to correct sections
- [ ] Smooth scrolling works
- [ ] Logo click scrolls to top
- [ ] "Get Started" button scrolls to pricing

### Mobile Menu

- [ ] Hamburger icon toggles menu
- [ ] Menu slides in from right
- [ ] Overlay appears when menu open
- [ ] Click outside closes menu
- [ ] ESC key closes menu
- [ ] Clicking a link closes menu

### FAQ Accordion

- [ ] Clicking question expands answer
- [ ] Clicking again collapses answer
- [ ] Only one item open at a time
- [ ] Icon rotates on expand
- [ ] Enter/Space keys work

### Gumroad Integration

- [ ] All 3 CTA buttons trigger Gumroad overlay
- [ ] Overlay displays product correctly
- [ ] Purchase flow completes successfully
- [ ] License key email received
- [ ] Download link works

---

## Responsive Tests

### Mobile (375px - iPhone SE)

- [ ] Layout stacks correctly
- [ ] Text is readable
- [ ] Buttons are touch-friendly
- [ ] Menu works properly
- [ ] No horizontal scrolling

### Tablet (768px - iPad)

- [ ] Grid layouts adjust appropriately
- [ ] Images scale correctly
- [ ] Navigation works
- [ ] Table is scrollable if needed

### Desktop (1920px)

- [ ] Content is centered with max-width
- [ ] No elements stretch too wide
- [ ] All hover effects work
- [ ] Spacing looks balanced

---

## Cross-Browser Tests

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Smooth animations

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Smooth animations

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Smooth animations

### Edge
- [ ] All features work
- [ ] No console errors
- [ ] Smooth animations

---

## Performance Tests

### Lighthouse Audit

Run Lighthouse in Chrome DevTools (F12 → Lighthouse tab):

- [ ] **Performance:** 90+ score
- [ ] **Accessibility:** 90+ score
- [ ] **Best Practices:** 90+ score
- [ ] **SEO:** 90+ score

**How to run:**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select "Desktop" mode
4. Click "Generate report"
5. Review and fix any issues

### Page Speed

- [ ] Load time under 3 seconds
- [ ] Images optimized
- [ ] No layout shift on load

**Test at:** https://pagespeed.web.dev/

---

## Accessibility Tests

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Enter/Space activate buttons
- [ ] ESC closes modals/menus
- [ ] Focus indicators visible

**How to test:**
1. Click in browser address bar
2. Press Tab repeatedly
3. Verify blue outline on each element
4. Press Enter on buttons/links

### WAVE Accessibility Checker

- [ ] No errors
- [ ] Proper heading hierarchy
- [ ] All images have alt text
- [ ] Color contrast passes AA

**Test at:** https://wave.webaim.org/

### Screen Reader Test (Optional)

- [ ] All images have descriptive alt text
- [ ] Links have meaningful text (not "click here")
- [ ] Forms have labels
- [ ] Headings are in logical order

**Windows Screen Reader:** Narrator (Win + Ctrl + Enter)
**Mac Screen Reader:** VoiceOver (Cmd + F5)

---

## HTML/CSS Validation

### HTML Validation

- [ ] No errors at validator.w3.org
- [ ] Semantic HTML used correctly

**Test at:** https://validator.w3.org/

**How to test:**
1. Copy your HTML code
2. Paste into validator
3. Click "Check"
4. Fix any errors

### CSS Validation

- [ ] No errors at jigsaw.w3.org/css-validator
- [ ] CSS properties are supported

**Test at:** https://jigsaw.w3.org/css-validator/

---

## Visual Tests

### Images

- [ ] All images load correctly
- [ ] No broken image links
- [ ] Images are optimized (file size)
- [ ] Alt text is descriptive

**Image Optimization:**
- Use TinyPNG: https://tinypng.com/
- Target: < 200KB per image
- Format: JPG for photos, PNG for logos

### Typography

- [ ] All fonts load correctly
- [ ] Text is readable at all sizes
- [ ] Line heights are comfortable
- [ ] No orphaned words

### Layout

- [ ] No overlapping elements
- [ ] Consistent spacing
- [ ] Aligned properly
- [ ] No horizontal scrolling

---

## Content Tests

### Text Content

- [ ] No spelling errors
- [ ] No grammatical errors
- [ ] No placeholder text (Lorem Ipsum, TODO, etc.)
- [ ] All links work
- [ ] Email address is correct (boneyardtees@gmail.com)

### Links

- [ ] All internal links work (navigation)
- [ ] All external links work
- [ ] External links open in new tab
- [ ] No 404 errors

### Images

- [ ] Logo appears correctly
- [ ] Hero screenshot displays
- [ ] Feature images load
- [ ] Favicon appears in browser tab

---

## SEO Tests

### Meta Tags

- [ ] Title tag is descriptive (< 60 characters)
- [ ] Meta description is compelling (< 160 characters)
- [ ] Open Graph tags are complete
- [ ] Twitter Card tags are complete
- [ ] Canonical URL is set

### Content Structure

- [ ] Only one H1 per page
- [ ] Headings in logical order (H1 → H2 → H3)
- [ ] Keywords in title and headings
- [ ] Alt text on all images

---

## Gumroad Integration Tests

### Pre-Launch

- [ ] Gumroad account created
- [ ] Product listing created
- [ ] ZIP file uploaded
- [ ] Price set to $29
- [ ] 7-day refund policy enabled in Gumroad settings
- [ ] Purchase confirmation email configured (includes refund policy)
- [ ] License key email template ready (includes refund policy)

### Landing Page Integration

- [ ] All 3 CTA buttons have correct Gumroad URL
- [ ] Gumroad script embedded
- [ ] `.gumroad-button` class on all CTAs
- [ ] Test mode purchase successful

### Post-Purchase Flow

- [ ] Download link sent immediately
- [ ] Files download successfully
- [ ] Installer runs correctly
- [ ] License key workflow tested (manual)
- [ ] License key validates in app

---

## Security Tests

### HTTPS

- [ ] Site loads with HTTPS (after deployment)
- [ ] No mixed content warnings
- [ ] SSL certificate valid

### External Links

- [ ] All external links use HTTPS
- [ ] Links to Gumroad are secure
- [ ] No insecure resources loaded

---

## Mobile-Specific Tests

### Touch Interactions

- [ ] All buttons are at least 44x44px
- [ ] Sufficient spacing between clickable elements
- [ ] No hover-dependent functionality
- [ ] Tap targets don't overlap

### Mobile Performance

- [ ] Fast loading on 3G connection
- [ ] Images are appropriately sized
- [ ] No large files blocking rendering

---

## User Experience Tests

### First Impression (5-Second Test)

- [ ] Purpose of site is immediately clear
- [ ] Value proposition is visible above fold
- [ ] Call-to-action stands out
- [ ] Professional appearance

### Conversion Funnel

- [ ] Clear path from landing → pricing → purchase
- [ ] "Get Started" button visible on every section
- [ ] Pricing is transparent and clear
- [ ] No friction in purchase process

### Trust Signals

- [ ] Contact email is visible
- [ ] Professional design
- [ ] 7-day money-back guarantee is visible in pricing section
- [ ] Refund policy FAQ item is present and clear
- [ ] Testimonials/social proof (if available)

---

## Pre-Deployment Final Check

Before pushing to GitHub Pages:

### Content Complete

- [ ] All images added
- [ ] All placeholder text replaced
- [ ] Gumroad URLs updated
- [ ] Contact information verified

### Performance Optimized

- [ ] All images compressed
- [ ] Total page size < 2MB
- [ ] Lighthouse score 90+

### Functionality Verified

- [ ] All links work
- [ ] All buttons work
- [ ] Mobile menu works
- [ ] FAQ accordion works
- [ ] Gumroad overlay works

### Testing Complete

- [ ] Tested in 4 browsers
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] No console errors
- [ ] HTML/CSS validated

---

## Post-Deployment Tests

After deploying to GitHub Pages:

### Deployment Verification

- [ ] Site is accessible at GitHub Pages URL
- [ ] All pages load correctly
- [ ] HTTPS is working
- [ ] No 404 errors

### Full Site Test

- [ ] Run through all tests again on live site
- [ ] Test purchase flow in production
- [ ] Verify analytics tracking (if enabled)
- [ ] Test on real mobile device

### Social Sharing Test

- [ ] Share on Facebook → preview looks correct
- [ ] Share on Twitter → card looks correct
- [ ] Share on LinkedIn → preview looks correct

---

## Testing Tools Summary

### Essential Tools

- **Lighthouse:** Built into Chrome DevTools (F12)
- **WAVE:** https://wave.webaim.org/
- **HTML Validator:** https://validator.w3.org/
- **CSS Validator:** https://jigsaw.w3.org/css-validator/
- **PageSpeed Insights:** https://pagespeed.web.dev/

### Image Optimization

- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/

### Browser Testing

- **Chrome DevTools:** F12 → Device toolbar for responsive testing
- **BrowserStack:** https://www.browserstack.com/ (paid, for extensive testing)

---

## Common Issues & Quick Fixes

### Images not loading
**Fix:** Check file paths, ensure images are in `/images/` folder

### Mobile menu not working
**Fix:** Check JavaScript console for errors, verify `main.js` is loading

### Gumroad overlay not appearing
**Fix:** Verify Gumroad script is loaded, check button has `.gumroad-button` class

### Slow page load
**Fix:** Compress images, check file sizes, run Lighthouse for recommendations

---

**After completing all tests, proceed to:**
- [04-DEPLOYMENT-GUIDE.md](04-DEPLOYMENT-GUIDE.md) - Deploy to GitHub Pages
- [05-GUMROAD-SETUP.md](05-GUMROAD-SETUP.md) - Set up payment processing
