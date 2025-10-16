# Gumroad Setup & Manual License Key Workflow

**Last Updated:** January 2025

---

## 📋 Overview

**IMPORTANT:** BYT P&L Tracker uses a **pre-generated offline license key system**, NOT Gumroad's automatic license keys. This guide covers the complete setup process including the manual license key delivery workflow.

### License System Architecture
- **Key Generation:** Offline via `scripts/generate-keys.js` (in main app repo)
- **Key Storage:** CSV file (`license-keys.csv`) with columns: Key, Status, Email, Date
- **Key Validation:** Offline checksum verification (no internet required)
- **Key Delivery:** Manual email after purchase (3-5 minutes per sale)

### Why Manual License Keys?
- **Offline validation:** App works without internet connection
- **Security:** Keys are cryptographically validated by checksum
- **Control:** Full control over key distribution and revocation
- **Simple:** No API integration, no server-side logic
- **Automation later:** After 50+ sales, consider automation (out of scope for v1.0)

---

## Step 1: License System Overview

### How It Works

1. **Customer purchases** on Gumroad → Receives download link
2. **You receive notification** via email from Gumroad
3. **You open** `license-keys.csv` and find an unused key
4. **You mark key as sold** (Status: sold, Email: customer email, Date: today)
5. **You email customer** the license key (separate email)
6. **Customer installs** app and enters license key
7. **App validates** key offline using checksum algorithm

### Files You Need
- `license-keys.csv` - Generated in main app repository
- License key email template (provided in Step 7)
- Purchase confirmation email template (provided in Step 7)

### Time Investment
- **Per sale:** 3-5 minutes (check dashboard → open CSV → mark key → email customer)
- **Daily:** 5-10 minutes if checking Gumroad dashboard once per day
- **Automation threshold:** Consider automation after 50+ sales

---

## Step 2: Create Gumroad Account

### Account Setup

1. Go to [gumroad.com](https://gumroad.com)
2. Click "Start Selling"
3. Sign up with email or Google
4. Verify email address
5. Complete profile setup:
   - Profile name: "BYT" or "Boneyard Tees"
   - Profile URL: Choose your URL slug (e.g., `gumroad.com/boneyardtees`)
   - Description: Brief description of your software
   - Avatar: Upload logo

### Payment Setup

1. Go to Settings → Payments
2. Add payout method:
   - Bank account (recommended for lower fees)
   - PayPal (faster but higher fees)
3. Set up tax information (required by law)
4. Choose payout frequency (weekly, biweekly, monthly)

### Refund Policy Setup

1. Go to Settings → General
2. Scroll to "Refund Policy"
3. Enable refunds and set to **7 days**
4. This allows customers to request refunds within 7 days
5. You'll process refunds manually via Gumroad dashboard

---

## Step 3: Create Product

### Product Information

1. Click "Products" → "New Product"
2. **Product Type:** Digital Product
3. **Product Details:**
   - **Name:** BYT P&L Tracker
   - **Price:** $29 USD
   - **Summary:** "Offline desktop P&L tracking software for small businesses"
   - **Description:** (Use this template)

```markdown
# BYT P&L Tracker - Offline Profit & Loss Tracking

Take control of your business finances with BYT P&L Tracker - a powerful desktop application that works completely offline.

## What You Get

- Windows desktop application (Windows 10 or later)
- One-time purchase, no subscriptions
- Lifetime updates for v1.x
- Email support: boneyardtees@gmail.com
- 7-day money-back guarantee

## Key Features

✓ Completely offline - no internet required
✓ Unlimited transactions, categories, and sources
✓ Smart auto-categorization with keyword rules
✓ Beautiful charts and reports
✓ AI-powered financial insights
✓ CSV import/export
✓ Dark mode interface

## System Requirements

- Windows 10 or later (64-bit)
- 200 MB disk space
- No internet connection required

## Installation Process

1. Download the installer (PNL Tracker-1.0.0 Setup.exe)
2. Run the installer
3. Wait for your license key email (sent within 24 hours)
4. Enter license key when prompted
5. Start tracking!

## Refund Policy

We stand behind our product! If BYT P&L Tracker doesn't meet your needs, we offer a full refund within 7 days of purchase, no questions asked. Just email boneyardtees@gmail.com with your order details.

## Support

Email: boneyardtees@gmail.com
Response time: Within 24 hours

---

**Note:** macOS and Linux versions coming in future releases. This purchase is for Windows only.
```

4. **Category:** Software & Tools
5. **Tags:** accounting, profit and loss, small business, offline software, desktop app

---

## Step 4: File Delivery Setup

### Prepare Release Package

Create a ZIP file named: `PNL-Tracker-v1.0.0-Release.zip`

**Contents:**
```
PNL-Tracker-v1.0.0-Release.zip
├── PNL Tracker-1.0.0 Setup.exe  (Windows installer)
├── README.txt                    (installation instructions)
├── USER_GUIDE.pdf                (comprehensive user manual)
├── USER_GUIDE.md                 (user manual in Markdown format)
├── CHANGELOG.md                  (version history and features)
└── LICENSE.txt                   (software license agreement)
```

### README.txt Template

```text
BYT P&L Tracker v1.0.0
Installation Instructions

STEP 1: INSTALL THE SOFTWARE
Double-click "PNL Tracker-1.0.0 Setup.exe" to start installation.
Windows may show an "Unknown Publisher" warning - click "More info" then "Run anyway".
Follow the setup wizard prompts.

STEP 2: WAIT FOR YOUR LICENSE KEY
You will receive a separate email with your license key within 24 hours.
Subject: "Your BYT P&L Tracker License Key"

STEP 3: ACTIVATE THE SOFTWARE
Launch the application.
Enter your license key when prompted.
Key format: PNLT-XXXX-XXXX-XXXX-XXXX
Click "Activate" to begin.

SYSTEM REQUIREMENTS
- Windows 10 or later (64-bit)
- 200 MB disk space
- No internet connection required

SUPPORT
If you have any issues, email: boneyardtees@gmail.com
Response time: Within 24 hours

Thank you for your purchase!
```

### Upload to Gumroad

1. In product settings, click "Content"
2. Upload `PNL-Tracker-v1.0.0-Release.zip`
3. Verify file uploads successfully
4. **IMPORTANT:** Enable "Send download link immediately after purchase"

---

## Step 5: Purchase Email Template

Configure the automatic purchase confirmation email (without license key):

### Email Settings

1. Go to Product → Settings → Emails
2. Enable "Send custom email after purchase"
3. **Subject:** Thank you for purchasing BYT P&L Tracker!
4. **Body:**

```text
Hi {buyer_name},

Thank you for purchasing BYT P&L Tracker!

DOWNLOAD YOUR SOFTWARE
{download_button}

Your download includes:
- Windows installer (PNL Tracker-1.0.0 Setup.exe)
- Installation instructions (README.txt)
- User Guide (PDF and Markdown formats)

YOUR LICENSE KEY
You will receive your license key in a SEPARATE EMAIL within 24 hours.
Subject: "Your BYT P&L Tracker License Key"

Please check your spam folder if you don't see it.

INSTALLATION STEPS
1. Download the files using the button above
2. Run "PNL Tracker-1.0.0 Setup.exe"
3. Wait for your license key email
4. Enter the key when prompted (format: PNLT-XXXX-XXXX-XXXX-XXXX)

7-DAY MONEY-BACK GUARANTEE
Not satisfied? No problem! Email us within 7 days for a full refund, no questions asked.

NEED HELP?
Email: boneyardtees@gmail.com
Response time: Within 24 hours

Thanks for your purchase!

BYT / Boneyard Tees
boneyardtees@gmail.com
```

---

## Step 6: Manual License Key Workflow

### Daily Routine (5-10 minutes)

#### Check for New Sales
1. Open Gumroad dashboard
2. Go to "Sales" section
3. Look for new purchases

#### For Each New Purchase

**STEP A: Get Customer Info**
- Customer email address
- Purchase date and time
- Order ID (for reference)

**STEP B: Open License Keys CSV**
```bash
# Open in Excel, Google Sheets, or text editor
license-keys.csv
```

**STEP C: Find Unused Key**
- Look for first row where Status = "available"
- Copy the license key (column: Key)

**STEP D: Mark Key as Sold**
Update the CSV row:
```csv
Key,Status,Email,Date
PNLT-XXXX-XXXX-XXXX-XXXX,sold,customer@email.com,2025-01-15
```

**STEP E: Save CSV**
- Save file immediately
- Back up CSV file weekly

**STEP F: Email Customer** (see Step 7 for template)
- Compose email with license key
- Include installation instructions
- Send within 24 hours (ideally same day)

**STEP G: Test Key** (optional but recommended)
- Open BYT P&L Tracker
- Test that the key validates successfully
- Verify checksum passes

### CSV Structure

```csv
Key,Status,Email,Date
PNLT-1A2B-3C4D-5E6F-7G8H,available,,
PNLT-9I0J-1K2L-3M4N-5O6P,sold,john@example.com,2025-01-15
PNLT-7Q8R-9S0T-1U2V-3W4X,sold,jane@example.com,2025-01-16
PNLT-5Y6Z-7A8B-9C0D-1E2F,available,,
```

**Columns:**
- **Key:** The license key (format: PNLT-XXXX-XXXX-XXXX-XXXX)
- **Status:** "available" or "sold"
- **Email:** Customer email (empty if available)
- **Date:** Sale date in YYYY-MM-DD format (empty if available)

### Key Management Tips

**Organization:**
- Keep CSV file in secure location (encrypted folder)
- Create weekly backups
- Never commit CSV to public git repository
- Use Excel/Google Sheets for easier management

**Tracking:**
- Add order ID column if needed
- Track support requests per key
- Flag keys with issues

**Security:**
- Never share the full CSV file
- Store securely (encrypted drive)
- Limit access to yourself only
- Revoke keys if needed (manual process)

---

## Step 7: Email Templates

### License Key Delivery Email

**When to send:** Within 24 hours of purchase (ideally same day)

**Subject:** Your BYT P&L Tracker License Key

**Body:**
```text
Hi {customer_name},

Thank you for purchasing BYT P&L Tracker!

YOUR LICENSE KEY
{LICENSE_KEY_HERE}

INSTALLATION INSTRUCTIONS

1. Download the installer
   (If you didn't receive the download link, check your original purchase email)

2. Run "PNL Tracker-1.0.0 Setup.exe"
   Windows may show an "Unknown Publisher" warning - click "More info" then "Run anyway".
   Follow the setup wizard prompts.

3. Launch the application
   The software will open automatically after installation.

4. Enter your license key
   Copy and paste the key above when prompted.
   Key format: PNLT-XXXX-XXXX-XXXX-XXXX

5. Click "Activate"
   Your software is now ready to use!

TROUBLESHOOTING

If the key doesn't work:
- Make sure you copied the entire key (including dashes)
- Try typing it manually instead of copy/paste
- Restart the application
- Email me if issues persist

GETTING STARTED

- Watch the tutorial (Help → Replay Tutorial)
- Import your transactions via CSV (Import Data button)
- Set up auto-categorization rules (Auto-Categorize Rules button)

7-DAY MONEY-BACK GUARANTEE

Not satisfied? We offer a full refund within 7 days of purchase, no questions asked. Just reply to this email with your refund request.

NEED HELP?

Email: boneyardtees@gmail.com
Response time: Within 24 hours

Thanks for your purchase!

BYT / Boneyard Tees
boneyardtees@gmail.com
```

### Support Response Templates

**If key doesn't work:**
```text
Hi {customer_name},

I'm sorry you're having trouble with your license key. Let's fix this!

TROUBLESHOOTING STEPS:
1. Copy this key exactly (including dashes): {LICENSE_KEY}
2. Close and restart BYT P&L Tracker
3. When prompted, paste the key
4. Click "Activate"

If that doesn't work:
- Try typing the key manually (no copy/paste)
- Make sure you're running the latest version (1.0.0)
- Check that you have an internet connection during activation (only needed once)

Still having issues? Reply to this email with:
- Any error messages you see
- Screenshot of the activation screen (if possible)
- Your Windows version

I'll get you up and running ASAP!

BYT / Boneyard Tees
```

**If customer requests refund:**
```text
Hi {customer_name},

I'm sorry BYT P&L Tracker didn't meet your needs.

I've processed your full refund through Gumroad. You should see the funds back in your account within 5-7 business days (depending on your payment method).

Your purchase was within our 7-day money-back guarantee period, so you're all set!

If you'd like to share what didn't work for you, I'd love to hear your feedback to improve the product. But no pressure - I appreciate you giving it a try!

Thanks for your time!

BYT / Boneyard Tees
boneyardtees@gmail.com
```

---

## Step 8: Update Landing Page URLs

### Locations to Update in index.html

**1. Hero CTA Button (Line ~169)**
```html
<a href="https://YOURNAME.gumroad.com/l/byt-pl-tracker" class="cta-primary gumroad-button">
  Get Started - $29
</a>
```

**2. Pricing Section CTA Button (Line ~427)**
```html
<a href="https://YOURNAME.gumroad.com/l/byt-pl-tracker" class="cta-primary gumroad-button">
  Get BYT P&L Tracker Now
</a>
```

**3. Final CTA Button (Line ~579)**
```html
<a href="https://YOURNAME.gumroad.com/l/byt-pl-tracker" class="cta-primary gumroad-button large">
  Get Started for $29
</a>
```

**4. Gumroad Overlay Script (Line ~625)**
```html
<!-- Replace placeholder with actual Gumroad script -->
<script src="https://gumroad.com/js/gumroad.js"></script>
```

### Getting Your Gumroad URL

1. Go to Gumroad Product → Share
2. Copy "Product URL"
3. Format: `https://yourname.gumroad.com/l/product-slug`
4. Example: `https://boneyardtees.gumroad.com/l/byt-pl-tracker`

### Verify Button Class

All CTA buttons must have the `.gumroad-button` class for overlay to work:
```html
<a href="..." class="cta-primary gumroad-button">...</a>
```

---

## Step 9: Test Purchase Flow

### Pre-Launch Testing

**1. Enable Test Mode**
- Go to Gumroad Settings → Payments
- Enable "Test mode"

**2. Test Purchase**
- Click "Get Started" button on your landing page
- Verify Gumroad overlay appears
- Complete test purchase with test card: `4242 4242 4242 4242`
- Verify download link is sent immediately

**3. Practice License Key Workflow**
- Open `license-keys.csv`
- Mark a key as sold (use your own email)
- Email yourself the license key
- Time how long the process takes (should be 3-5 minutes)

**4. Test Installation**
- Download the installer from Gumroad
- Run installer
- Enter test license key
- Verify key validates successfully
- Test basic app functionality

**5. Disable Test Mode**
- Go back to Gumroad Settings → Payments
- Disable "Test mode"
- **NOW YOU'RE LIVE!**

### Post-Launch Monitoring

**Daily (First Week):**
- Check Gumroad dashboard for sales
- Process license keys within 24 hours
- Respond to support emails

**Weekly:**
- Review sales performance
- Collect customer feedback
- Back up `license-keys.csv`

**Monthly:**
- Review conversion rates
- Update product description if needed
- Consider testimonials section

---

## Step 10: Future Automation (After 50+ Sales)

Once you have consistent sales (50+), consider automating the license key delivery:

### Automation Options

**Option 1: Zapier Integration**
- Trigger: New Gumroad sale
- Action: Send email with license key from CSV
- Cost: ~$20/month

**Option 2: Custom API**
- Build Node.js server with Express
- Webhook endpoint for Gumroad
- Auto-email license keys
- Cost: Server hosting (~$5-10/month)

**Option 3: Gumroad License Key API**
- Migrate to Gumroad's built-in license keys
- Use Gumroad's API for validation
- Requires app code changes (online validation)

### When to Automate

- **50+ sales:** Consider Zapier or simple script
- **100+ sales:** Invest in custom API
- **500+ sales:** Consider full license management system

### Cost-Benefit Analysis

**Manual (0-50 sales):**
- Cost: $0
- Time: 3-5 minutes per sale
- Total time: 2.5-4 hours for 50 sales

**Automated (50+ sales):**
- Cost: $20-50/month (Zapier or server)
- Time: 0 minutes per sale
- ROI: Positive after 50-100 sales

---

## 📚 Additional Resources

- **Gumroad Help Center:** https://help.gumroad.com/
- **Gumroad API Docs:** https://app.gumroad.com/api
- **License Key Generation:** See main app repo `scripts/generate-keys.js`

---

## 🔒 Security Checklist

Before going live:

- [ ] `license-keys.csv` is NOT committed to public repository
- [ ] CSV file is stored in encrypted folder
- [ ] Weekly backups scheduled
- [ ] Test key validates in app successfully
- [ ] Email templates saved and ready
- [ ] Gumroad purchase flow tested end-to-end
- [ ] All 3 CTA buttons point to correct Gumroad URL
- [ ] Gumroad script embedded in index.html

---

**For next steps, see:**
- [02-PROJECT-STATUS.md](02-PROJECT-STATUS.md) - Track your progress
- [06-TESTING-CHECKLIST.md](06-TESTING-CHECKLIST.md) - Complete testing before launch
