# RT Excavation LLC — Website Setup & Deployment Guide

Everything you need to get this site live, connected to a domain, and handed off cleanly.
No prior experience required.

---

## What You Have

```
rt-excavation/
├── index.html          ← Main website (all pages in one file)
├── style.css           ← All visual styling
├── main.js             ← Interactivity (mobile nav, animations, form)
├── sitemap.xml         ← Tells Google how to crawl the site
├── robots.txt          ← Search engine permissions
├── netlify.toml        ← Netlify configuration (headers, redirects)
├── assets/
│   └── README.txt      ← Instructions for photos/images to add
└── blog/
    └── underground-water-leak-signs.html   ← First blog post (ready to publish)
```

---

## STEP 1 — Create a GitHub Account (Free)

GitHub is where the website files live. Netlify reads from GitHub and publishes the site automatically every time you save a change.

1. Go to **github.com** and click "Sign up"
2. Choose a free account
3. Verify your email

> **Tip:** Use an email you control. If you're handing this off to Tyler and Rashelle later, you'll transfer the account or add them as a collaborator.

---

## STEP 2 — Create a New GitHub Repository

A "repository" (or "repo") is just a folder for the project.

1. Once logged in, click the **+** icon (top right) → "New repository"
2. Name it: `rt-excavation`
3. Set it to **Private** (safer for now; Netlify can still read it)
4. Leave everything else as default
5. Click **"Create repository"**

---

## STEP 3 — Upload the Website Files

1. On the new repo page, click **"uploading an existing file"** (the link in the middle of the page)
2. Drag and drop **all the files and folders** from the `rt-excavation/` folder onto the page:
   - `index.html`
   - `style.css`
   - `main.js`
   - `sitemap.xml`
   - `robots.txt`
   - `netlify.toml`
   - The `assets/` folder
   - The `blog/` folder
3. Scroll down and click **"Commit changes"** (green button)

All your files are now on GitHub.

---

## STEP 4 — Create a Netlify Account (Free)

Netlify is the hosting platform. It's free forever for sites like this one.

1. Go to **netlify.com** and click "Sign up"
2. Choose **"Sign up with GitHub"** — this connects the two accounts automatically

---

## STEP 5 — Deploy the Site on Netlify

1. Once logged in to Netlify, click **"Add new site"** → **"Import an existing project"**
2. Click **"GitHub"**
3. Authorize Netlify to access your GitHub account when prompted
4. Find and click **rt-excavation** in the repository list
5. Leave all settings as-is (Netlify will auto-detect the setup)
6. Click **"Deploy site"**

Netlify will give the site a random URL like `amazing-goldstine-3f92a.netlify.app` — that's your live site. It works immediately.

> Every time you update a file on GitHub (upload a new version, add a blog post), Netlify automatically republishes the site within 30 seconds. No action needed.

---

## STEP 6 — Connect Your Custom Domain

### 6a. Buy the domain (if you haven't already)

Go to **namecheap.com** (cheaper and cleaner than GoDaddy) and search for `rtdigs.com`.
As of early 2025, it typically costs $10–14/year.

Purchase it and complete checkout. You'll need to create a Namecheap account.

---

### 6b. Add the domain to Netlify

1. In Netlify, go to your site → **"Domain management"** → **"Add a domain"**
2. Type `rtdigs.com` and click **"Verify"**
3. Click **"Add domain"**
4. Netlify will show you two nameserver addresses. They look like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
   Copy all four of them.

---

### 6c. Point the domain to Netlify (in Namecheap)

1. Log in to **namecheap.com** → click your username (top right) → **"Domain List"**
2. Click **"Manage"** next to `rtdigs.com`
3. Click the **"Nameservers"** tab
4. Change the dropdown from "Namecheap BasicDNS" to **"Custom DNS"**
5. Paste in the four nameserver addresses Netlify gave you (one per field)
6. Click the green checkmark to save

DNS changes take 15 minutes to a few hours to fully propagate. Once they do, `rtdigs.com` will load your RT Excavation site.

---

### 6d. Enable HTTPS (free SSL certificate)

1. Back in Netlify → **"Domain management"**
2. Scroll to **"HTTPS"**
3. Click **"Verify DNS configuration"** — if DNS has propagated, this will be green
4. Click **"Provision certificate"**

Your site now loads securely at `https://rtdigs.com`. Google gives a small ranking boost to HTTPS sites, and browsers show it as "secure" to visitors.

---

## STEP 7 — Set Up the Contact Form (Free via Netlify)

The contact form is already configured. When someone submits it, Netlify captures the submission and emails it to you.

1. In Netlify → go to your site → **"Forms"** (in the top menu)
2. After the first form submission comes in, the form will appear here automatically
3. To get email notifications: **"Forms"** → **"Form notifications"** → **"Add notification"** → **"Email notification"**
4. Enter the email address you want form submissions sent to (e.g., Tyler's email)

> **Note:** Netlify's free plan allows 100 form submissions/month. That's more than enough for a new business. If they ever exceed it, the paid plan is $19/month — not necessary for a long time.

---

## STEP 8 — Update the sitemap.xml Date

Before going live, open `sitemap.xml` and update the `<lastmod>` date to today's date in `YYYY-MM-DD` format.

---

## STEP 9 — Test Before Launching

Open the live site and check:

- [ ] All navigation links scroll to the right sections
- [ ] Phone number link works on mobile (tap it — it should prompt to call)
- [ ] Contact form submits without errors
- [ ] Site looks correct on your phone (mobile view)
- [ ] Blog post link works: `rtdigs.com/blog/underground-water-leak-signs.html`

---

## UPDATING THE SITE LATER

### To add a blog post:
1. Copy `blog/underground-water-leak-signs.html` and rename it (e.g., `blog/grading-contractor-explainer.html`)
2. Open it in a text editor (Notepad on Windows, TextEdit on Mac)
3. Update the title, meta description, content, and canonical URL
4. Upload the new file to the `blog/` folder in GitHub
5. Netlify auto-publishes within 30 seconds
6. Add the new URL to `sitemap.xml`

### To add a photo to the About section:
1. Compress the photo at **squoosh.app** (saves loading time)
2. Upload it to the `assets/` folder in GitHub
3. In `index.html`, find the comment that says `<!-- REPLACE: swap this div... -->` and follow the instructions

### To update phone number, hours, or copy:
Open `index.html` in a text editor, use Find & Replace (Ctrl+H or Cmd+H) to locate and update the text, then re-upload to GitHub.

---

## HANDING OFF TO TYLER & RASHELLE

When you're ready to transfer ownership:

1. **GitHub:** Go to the repo → Settings → Collaborators → Add their GitHub username as an owner. They can then remove you if they want.
2. **Netlify:** Go to Team settings → Members → Invite their email as an owner. Transfer ownership, then leave the team.
3. **Namecheap:** Log in → go to the domain → Transfer to their Namecheap account (they'll need one), or simply give them the login credentials.
4. **Form notifications:** Update the form notification email to Tyler or Rashelle's address.

---

## COST SUMMARY

| Item | Cost |
|---|---|
| GitHub | Free |
| Netlify hosting | Free |
| Netlify forms (up to 100/mo) | Free |
| SSL certificate | Free (via Netlify) |
| Domain (rtdigs.com) | ~$12–14/year |
| **Total ongoing cost** | **~$12–14/year** |

---

## QUESTIONS?

If anything breaks or doesn't work as expected, the most common fixes are:

- **Site not loading on custom domain:** Wait up to 24 hours for DNS to fully propagate. Check status at **whatsmydns.net**.
- **Form not showing in Netlify:** Submit a test form submission first — Netlify only registers the form after the first real submission.
- **CSS/JS not loading:** Make sure `style.css` and `main.js` were uploaded to the root folder (same level as `index.html`), not inside a subfolder.
