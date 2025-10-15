# Deployment Guide

**Last Updated:** January 2025

---

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed on your computer
- Project files ready (index.html, css/, js/, images/)
- Gumroad integration complete

---

## Step-by-Step Deployment

### Step 1: Prepare Repository

```bash
# Navigate to project directory
cd "c:\Users\mcasi\App Dev\PNL Tracker\PLTracker-Landing-Page"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: BYT P&L Tracker landing page"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository"
3. Name: `byt-pl-tracker-landing` (or similar)
4. Description: "Landing page for BYT P&L Tracker"
5. Public repository (required for free GitHub Pages)
6. Do NOT initialize with README (you already have files)
7. Click "Create Repository"

### Step 3: Push to GitHub

```bash
# Add GitHub remote (replace with your actual URL)
git remote add origin https://github.com/[your-username]/byt-pl-tracker-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" in sidebar
3. Source: "Deploy from a branch"
4. Branch: Select `main` and `/ (root)`
5. Click "Save"
6. Wait 2-3 minutes for deployment

### Step 5: Verify Deployment

1. Visit: `https://[your-username].github.io/byt-pl-tracker-landing`
2. Test all functionality
3. Check on mobile device
4. Verify Gumroad buttons work

### Step 6: Update Meta Tags

Once deployed, update the following in index.html:

```html
<!-- Line 16, 23: Replace [your-github-pages-url] -->
<meta property="og:url" content="https://[username].github.io/byt-pl-tracker-landing/">

<!-- Update og:image and twitter:image to absolute URLs -->
<meta property="og:image" content="https://[username].github.io/byt-pl-tracker-landing/images/hero-screenshot.png">
```

---

## 🌐 Custom Domain Setup (Optional)

If you want a custom domain (e.g., `bytpltracker.com`):

### Step 1: Purchase Domain
Purchase domain from registrar (Namecheap, Google Domains, etc.)

### Step 2: Create CNAME File
Create `CNAME` file in repository root:
```
bytpltracker.com
```

### Step 3: Configure DNS
Configure DNS at your domain registrar:

**CNAME Record:**
- Type: CNAME
- Host: www
- Value: [username].github.io
- TTL: Automatic

**A Records (for apex domain):**
- Type: A
- Host: @
- Values (add all 4):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- TTL: Automatic

### Step 4: Configure GitHub Pages
1. Go to GitHub Settings → Pages
2. Add custom domain: `bytpltracker.com`
3. Enable "Enforce HTTPS"
4. Wait 24-48 hours for DNS propagation

### Step 5: Verify Custom Domain
1. Visit your custom domain
2. Verify HTTPS is working
3. Test that www.yourdomain.com redirects properly

---

## 🔄 Updating Your Site

### Making Changes

```bash
# Make changes to files
# (edit index.html, styles.css, etc.)

# Stage changes
git add .

# Commit changes
git commit -m "Update: [describe your changes]"

# Push to GitHub
git push origin main

# Wait 2-3 minutes for GitHub Pages to rebuild
```

### Force Refresh
If changes don't appear immediately:
1. Wait 2-3 minutes for GitHub to rebuild
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Check Settings → Pages for build status

---

## 🧪 Pre-Deployment Checklist

Before deploying, verify:

### Content
- [ ] All placeholder text replaced with real content
- [ ] All images added and optimized
- [ ] Gumroad URLs updated (3 CTA buttons)
- [ ] Gumroad script embedded
- [ ] Contact email is correct (boneyardtees@gmail.com)

### Testing
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] FAQ accordion expands/collapses
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] All images load correctly
- [ ] No console errors

### SEO
- [ ] Meta title and description updated
- [ ] Open Graph tags completed
- [ ] Twitter Card tags completed
- [ ] All images have alt text
- [ ] Semantic HTML structure

### Performance
- [ ] Images compressed (<200KB each)
- [ ] Total page size <2MB
- [ ] Lighthouse score 90+ on all metrics

---

## 🔧 Troubleshooting Deployment

### Issue: GitHub Pages not updating

**Solution:**
1. Verify push succeeded: `git status`, `git log`
2. Wait 2-3 minutes for GitHub Pages to rebuild
3. Clear browser cache (Ctrl+F5)
4. Check Settings → Pages for build status
5. Verify branch is `main` and folder is `/ (root)`

### Issue: 404 Error on deployed site

**Solution:**
1. Verify file names match exactly (case-sensitive)
2. Check that index.html is in root directory
3. Verify repository is public
4. Wait 5 minutes for DNS propagation

### Issue: Images not displaying

**Solution:**
1. Verify image paths are relative (`images/logo.png`, not `/images/logo.png`)
2. Check that images exist in `/images/` folder
3. Verify image file names match HTML references exactly
4. Use lowercase file names for consistency

### Issue: CSS/JS not loading

**Solution:**
1. Verify file paths in HTML are correct
2. Check that files are committed to git
3. Clear browser cache
4. Check browser console for 404 errors

---

## 📚 Additional Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Pages Quickstart:** https://docs.github.com/en/pages/quickstart
- **Custom Domain Setup:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**For next steps, see:**
- [05-GUMROAD-SETUP.md](05-GUMROAD-SETUP.md) - Set up payment integration
- [06-TESTING-CHECKLIST.md](06-TESTING-CHECKLIST.md) - Complete testing procedures
