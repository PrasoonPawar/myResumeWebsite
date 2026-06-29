# Deployment Guide

This guide covers deploying your portfolio website to production.

## Recommended: Vercel Deployment

Vercel is the official hosting platform for Next.js and provides the best integration.

### Step 1: Prepare Your Project

1. Ensure all changes are committed to git:
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   ```

2. Push to GitHub/GitLab/Bitbucket:
   ```bash
   git push origin main
   ```

### Step 2: Connect to Vercel

1. Visit [vercel.com](https://vercel.com) and sign up/log in
2. Click "New Project"
3. Select "Import Git Repository"
4. Choose your repository
5. Click "Import"

### Step 3: Configure Project Settings

1. **Project Name**: Leave as default or customize
2. **Framework Preset**: Select "Next.js"
3. **Root Directory**: Leave as `.`
4. **Build Command**: Leave as default (auto-detected)
5. **Output Directory**: Leave as default
6. **Install Command**: Leave as default

### Step 4: Environment Variables (If Using Contact Form)

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add your variables:
   - For Nodemailer: `EMAIL_USER`, `EMAIL_PASSWORD`
   - For other services: Add their respective keys
3. Select "Preview" and "Production" for each

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site is live at `your-project.vercel.app`

### Step 6: Custom Domain (Optional)

1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration steps
4. Vercel provides HTTPS automatically

## Alternative: Netlify Deployment

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Deploy to Netlify

Option A: Using Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.next
```

Option B: Using Netlify Dashboard

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Deploy

## Alternative: Self-Hosted Deployment

### On Linux/Ubuntu Server

1. **SSH into your server**:
   ```bash
   ssh user@your-server.com
   ```

2. **Install Node.js** (if not already installed):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone your repository**:
   ```bash
   git clone <your-repo-url>
   cd myResumeWebsite
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

6. **Start the server**:
   ```bash
   npm start
   ```

7. **Use a process manager** (PM2):
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

8. **Set up Nginx as reverse proxy**:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

9. **Set up SSL** with Let's Encrypt:
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Alternative: Docker Deployment

### Dockerfile

Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -p 3000:3000 portfolio:latest
```

### Deploy to Docker Hub or Registry

```bash
# Tag image
docker tag portfolio:latest your-username/portfolio:latest

# Push to Docker Hub
docker push your-username/portfolio:latest
```

## Monitoring & Maintenance

### Vercel

- Automatic deployments on push
- Built-in analytics and performance monitoring
- Automatic SSL certificates
- Serverless functions ready

### Netlify

- Automatic deployments on push
- Netlify Analytics (paid)
- Automatic SSL certificates
- Edge computing capabilities

### Self-Hosted

- Monitor with tools like Datadog, New Relic
- Set up automated backups
- Keep Node.js and dependencies updated
- Monitor disk space and system resources

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Performance Optimization

Before deploying:

1. **Run Next.js build analysis**:
   ```bash
   npm run build
   ```

2. **Test locally**:
   ```bash
   npm run build
   npm start
   ```

3. **Lighthouse audit**:
   - Use Chrome DevTools
   - Aim for 90+ scores

4. **Test on multiple devices**:
   - Desktop, tablet, mobile
   - Different browsers

## Troubleshooting Deployment

### Build Fails

- Check logs in platform dashboard
- Ensure all environment variables are set
- Verify Node version compatibility
- Clear cache and rebuild

### Site Not Responsive

- Check CSS is loading (no 404 errors)
- Verify Tailwind CSS build
- Check browser console for errors
- Clear browser cache

### Contact Form Not Working

- Verify API route is deployed
- Check environment variables in production
- Review platform logs for errors
- Test API endpoint with curl

### DNS Issues

- Verify DNS records are propagated (24-48 hours)
- Check nameserver configuration
- Use tools like https://mxtoolbox.com
- Wait for DNS cache to clear

## Scaling & Performance

For high traffic:

1. **Use CDN** for static assets
2. **Enable image optimization** (Next.js automatic)
3. **Implement caching** headers
4. **Monitor performance** with analytics
5. **Consider serverless functions** for contact form

---

For detailed Vercel documentation: https://vercel.com/docs
For detailed Next.js deployment guide: https://nextjs.org/docs/deployment
