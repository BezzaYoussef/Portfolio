# Deployment Guide - Vercel

## Prerequisites

1. **GitHub/GitLab/Bitbucket Account** - Your code should be in a Git repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free account works)

## Step-by-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository:
   - If your repo is on GitHub, click **"Import"** next to your repository
   - If not connected, click **"Connect Git Provider"** and authorize Vercel
4. Select your `Portfolio_Youssef` repository

#### Step 3: Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

#### Step 4: Environment Variables (Optional)

If you're using EmailJS for the contact form, add these environment variables:

1. Click **"Environment Variables"** in the project settings
2. Add these variables (if you have EmailJS configured):
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Click **"Save"**

**Note:** If you don't have EmailJS set up, the contact form will still work by opening the default email client.

#### Step 5: Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll get a URL like: `https://portfolio-youssef.vercel.app`

#### Step 6: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain (e.g., `youssefbezza.com`)
3. Follow Vercel's instructions to configure DNS records

---

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# From your project root directory
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No (for first deployment)
- **Project name?** → `portfolio-youssef` (or your preferred name)
- **Directory?** → `./` (default)
- **Override settings?** → No

#### Step 4: Production Deployment

```bash
vercel --prod
```

---

## Post-Deployment Checklist

- [ ] Test the deployed site at your Vercel URL
- [ ] Verify theme toggle (night/light mode) works
- [ ] Verify language toggle (EN/FR) works
- [ ] Test navigation buttons
- [ ] Check 3D scene renders correctly
- [ ] Test contact form (if EmailJS is configured)
- [ ] Verify profile picture displays correctly
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)

---

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Node.js version:**
   - Vercel uses Node.js 18.x by default
   - You can specify a version in `package.json`:
     ```json
     "engines": {
       "node": ">=18.0.0"
     }
     ```

2. **Check build logs:**
   - Go to your project on Vercel
   - Click on the failed deployment
   - Review the build logs for errors

3. **Common issues:**
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Fix before deploying
   - Environment variables → Add in Vercel dashboard

### Image Not Loading

- Make sure `public/profile.jpg` is committed to your repository
- Check file path in code matches the actual file location

### 3D Scene Not Rendering

- Check browser console for errors
- Ensure all Three.js dependencies are in `package.json`
- Verify WebGL is supported in the browser

---

## Continuous Deployment

Vercel automatically deploys when you push to your main branch:

1. Push changes to your repository
2. Vercel detects the push
3. Automatically builds and deploys
4. You get a preview URL for each deployment

---

## Useful Vercel Features

- **Preview Deployments:** Every push creates a preview URL
- **Analytics:** Enable in project settings (paid feature)
- **Speed Insights:** Monitor performance (free)
- **Edge Functions:** For serverless functions (if needed)

---

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

