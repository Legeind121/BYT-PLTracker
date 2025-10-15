# Design System & Technical Specifications

**Last Updated:** January 2025

---

## ⚙️ Technical Specifications

### Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 300ms
- Cumulative Layout Shift: < 0.1
- Page load time: < 3 seconds on 3G

### File Sizes (Before Images)
- index.html: ~25 KB
- styles.css: ~30 KB
- main.js: ~10 KB
- **Total:** ~65 KB (extremely lightweight)

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

### Color Contrast Ratios (WCAG AA Compliant)
- Primary text on dark: 16.9:1 (AAA)
- Secondary text on dark: 7.3:1 (AA)
- Blue accent on dark: 6.8:1 (AA)

---

## 🎨 Design System

### Color Palette

**Primary Colors:**
```css
--color-primary-dark: #1a1a1a;     /* Main background */
--color-secondary-dark: #2a2a2a;   /* Cards, sections */
```

**Accent Colors:**
```css
--color-accent-blue: #5c9eff;      /* Primary CTA, links */
--color-accent-purple: #9f7aea;    /* Secondary elements */
--color-accent-orange: #f6ad55;    /* Highlights */
```

**Semantic Colors:**
```css
--color-success-green: #68d391;    /* Positive metrics */
--color-error-red: #fc8181;        /* Negative metrics */
```

**Text Colors:**
```css
--color-text-primary: #ffffff;     /* Main text */
--color-text-secondary: #a0aec0;   /* Secondary text */
```

### Typography

**Font Family:**
```css
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

**Font Sizes (Desktop):**
- H1: 48px (hero title)
- H2: 36px (section titles)
- H3: 24px (subsections)
- Body: 18px
- Small: 14px

**Font Sizes (Mobile):**
- H1: 32px
- H2: 28px
- H3: 20px
- Body: 16px
- Small: 14px

### Spacing System

**Layout:**
```css
--max-width: 1200px;           /* Content container */
--section-padding: 80px;       /* Vertical section spacing (40px mobile) */
--element-gap: 24px;           /* Gap between elements */
```

**Border Radius:**
```css
--border-radius-card: 12px;    /* Cards and sections */
--border-radius-button: 8px;   /* Buttons and inputs */
```

### Transitions
```css
--transition-speed: 0.3s;      /* All animations */
```

---

## 🎨 Design Guidelines

### Button Styles
- Primary CTA: Blue background, white text, 8px border radius
- Secondary CTA: Transparent background, blue border, white text
- Hover state: Lift effect with shadow increase
- Active state: Slight scale down (0.98)

### Card Styles
- Background: Secondary dark (#2a2a2a)
- Border radius: 12px
- Padding: 32px
- Box shadow: Subtle elevation
- Hover: Lift effect (translateY(-4px))

### Input Styles
- Border: 2px solid border color
- Border radius: 8px
- Padding: 12px 16px
- Font size: 16px (prevents zoom on mobile)
- Focus: Blue border + glow effect

### Icon Usage
- Use emoji for simple icons (✓, ✗, 📊, etc.)
- Consistent size: 24px-32px
- Color matches semantic meaning (green for success, red for error)

### Image Guidelines
- Hero screenshot: 1400px max width, 16:9 ratio
- Feature images: 800px width, 4:3 or 16:9 ratio
- Logo: 120x120px, transparent background
- Favicon: 32x32px or 64x64px
- Optimize all images to <200KB
- Use WebP format where supported

### Spacing Guidelines
- Section vertical padding: 80px (40px mobile)
- Element gaps: 24px
- Text line height: 1.6 for body, 1.2 for headings
- Max content width: 1200px

### Animation Guidelines
- Duration: 0.3s for most interactions
- Easing: ease-in-out for smooth transitions
- Respect prefers-reduced-motion setting
- Limit to transform and opacity for performance

---

**For implementation details, see:**
- [01-FILES-AND-FEATURES.md](01-FILES-AND-FEATURES.md) - Complete file structure
- `css/styles.css` - Full CSS implementation
