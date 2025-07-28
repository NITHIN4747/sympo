# 🚀 Deployment Guide - EEE Symposium 2025

This guide provides step-by-step instructions for deploying the EEE Symposium 2025 website to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [x] ✅ All dependencies installed (`pnpm install`)
- [x] ✅ Build successful (`pnpm build`)
- [x] ✅ Linting passed (`pnpm lint`)
- [x] ✅ Production build tested locally (`pnpm preview`)

## 🎯 Quick Start

### 1. Local Development
```bash
cd eee-symposium-app
pnpm install
pnpm dev
```

### 2. Production Build
```bash
pnpm build
pnpm preview
```

## 🌐 Deployment Options

### Option 1: Static Hosting (Recommended)

**Platforms**: Netlify, Vercel, GitHub Pages, AWS S3, Cloudflare Pages

#### Steps:
1. Build the project: `pnpm build`
2. Upload the `dist` folder to your hosting provider
3. Configure your domain (if applicable)

#### Netlify Example:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Docker Deployment

#### Using Docker Compose (Recommended):
```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

#### Using Docker directly:
```bash
# Build image
docker build -t eee-symposium-app .

# Run container
docker run -p 80:80 eee-symposium-app
```

### Option 3: Node.js Server

#### Using serve:
```bash
# Install serve globally
npm install -g serve

# Serve the built app
serve -s dist -l 3000
```

#### Using Express:
```bash
# Install dependencies
npm install express

# Create server.js
echo "const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});" > server.js

# Start server
node server.js
```

## 🔧 Environment Configuration

### Required Environment Variables:
```env
VITE_APP_TITLE=EEE Symposium 2025
VITE_APP_DESCRIPTION=Official website for EEE Symposium 2025
```

### Optional Environment Variables:
```env
VITE_API_URL=https://your-api-url.com
VITE_GA_TRACKING_ID=GA_TRACKING_ID
VITE_ENABLE_REGISTRATION=true
VITE_ENABLE_ADMIN_PANEL=true
```

## 📊 Performance Optimization

The build is optimized with:
- ✅ Code splitting and lazy loading
- ✅ Minification (Terser)
- ✅ Tree shaking
- ✅ Gzip compression (nginx)
- ✅ Static asset caching
- ✅ Security headers

## 🔒 Security Considerations

- ✅ HTTPS enforcement (configure on hosting platform)
- ✅ Security headers (configured in nginx.conf)
- ✅ Content Security Policy
- ✅ XSS protection
- ✅ Frame options

## 📈 Monitoring & Analytics

### Health Check Endpoint:
- URL: `/health`
- Response: `200 OK` with "healthy" message

### Recommended Monitoring:
- Uptime monitoring
- Error tracking (Sentry)
- Performance monitoring
- Analytics (Google Analytics)

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails with terser error**
   ```bash
   pnpm add -D terser
   ```

2. **Routing issues in production**
   - Ensure hosting provider supports SPA routing
   - Configure fallback to index.html

3. **Assets not loading**
   - Check base path configuration
   - Verify asset paths are correct

4. **Docker build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   # Rebuild
   docker-compose build --no-cache
   ```

## 📞 Support

For deployment issues:
1. Check the build logs
2. Verify environment variables
3. Test locally with `pnpm preview`
4. Check hosting provider documentation

## 🎉 Success Indicators

Your deployment is successful when:
- ✅ Build completes without errors
- ✅ Site loads without console errors
- ✅ All routes work correctly
- ✅ Images and assets load properly
- ✅ Forms function as expected
- ✅ Mobile responsiveness works

---

**Last Updated**: $(date)
**Version**: 1.0.0 