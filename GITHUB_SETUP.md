# 🚀 GitHub Pages Setup Instructions

## Step 1: Create GitHub Repository

1. Go to **https://github.com/AliZaidi5110**
2. Click the **"New"** button (green button)
3. Repository name: `neptune-towing`
4. Description: `Professional 24/7 towing and roadside assistance website for Neptune Towing`
5. Make it **Public**
6. **DO NOT** check "Add a README file" (we already have one)
7. **DO NOT** check "Add .gitignore" (we already have one)
8. Click **"Create repository"**

## Step 2: Connect Your Local Repository

Open Command Prompt/PowerShell in the project folder and run:

```bash
git remote add origin https://github.com/AliZaidi5110/neptune-towing.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

Run the deployment script:
```bash
npm run deploy
```

Or use the batch file:
```bash
deploy.bat
```

## Step 4: Enable GitHub Pages

1. Go to your repository: **https://github.com/AliZaidi5110/neptune-towing**
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select branch: **`gh-pages`**
6. Select folder: **`/ (root)`**
7. Click **"Save"**

## 🌐 Your Live Website

After 2-5 minutes, your website will be live at:
**https://alizaidi5110.github.io/neptune-towing**

## 🔄 Future Updates

To update your website:
1. Make changes to your code
2. Commit changes: `git add . && git commit -m "Update website"`
3. Push to GitHub: `git push`
4. Deploy: `npm run deploy`

## ✅ What's Included

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Auto-rotating image carousel (5 images)
- ✅ Professional text overlays
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ 24/7 emergency service focus
- ✅ SEO optimized
- ✅ Fast loading performance
- ✅ Professional hero banners
- ✅ 16 towing services
- ✅ Service area coverage
- ✅ Mobile floating call button

## 📞 Contact Information on Website

- **Phone**: 631-856-4090 (24/7 Emergency)
- **Email**: angelberrocal671@yahoo.com
- **Address**: 16 Neptune Ave, Hampton Bays, NY 11946
- **Service Areas**: Hampton Bays, Southampton, East Hampton, Montauk, Westhampton, Bridgehampton

---

**Need help?** The website is ready to deploy and all files are configured correctly!