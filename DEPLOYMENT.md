# Neptune Towing - GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Neptune Towing website"
```

### 2. Create GitHub Repository
1. Go to https://github.com/AliZaidi5110
2. Click "New repository"
3. Name it: `neptune-towing`
4. Make it public
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 3. Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/AliZaidi5110/neptune-towing.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

## 🌐 Your Live Website
After deployment, your website will be available at:
**https://alizaidi5110.github.io/neptune-towing**

## 🔄 Future Updates
To update your live website:
1. Make changes to your code
2. Commit changes: `git add . && git commit -m "Update website"`
3. Push to GitHub: `git push`
4. Deploy: `npm run deploy`

## 📱 Features Included
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Auto-rotating image carousel
- ✅ Professional text overlays
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ 24/7 emergency service focus
- ✅ SEO optimized
- ✅ Fast loading performance

## 🛠️ Technical Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- React Hook Form for forms
- GitHub Pages for hosting

## 📞 Contact Information
- **Phone**: 631-856-4090
- **Email**: angelberrocal671@yahoo.com
- **Address**: 16 Neptune Ave, Hampton Bays, NY 11946
- **Service Areas**: Hampton Bays, Southampton, East Hampton, Montauk, Westhampton, Bridgehampton

---
*Professional towing website built for Neptune Towing - 24/7 Emergency Service*