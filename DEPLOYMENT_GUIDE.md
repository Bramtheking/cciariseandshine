# Deployment Guide for CCI Arise & Shine

## Netlify Setup

### 1. Connect Repository
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### 2. Environment Variables
Add these environment variables in Netlify:
\`\`\`
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=cci_unsigned_uploads
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
\`\`\`

### 3. Build Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18.x

### 4. Auto-Deploy
- Enable auto-deploy from main branch
- Content changes in JSON files will trigger rebuilds
- Admin uploads will commit to repository and redeploy

## Content Management Workflow

### 1. Admin Access
- Visit `/admin/login` (linked from logo)
- Use credentials from environment variables
- Access dashboard for content management

### 2. Content Updates
- Gallery: Upload images/videos → Cloudinary → JSON update → Auto-deploy
- Sermons: Add sermon details → JSON update → Auto-deploy  
- Blog: Create posts → JSON update → Auto-deploy
- Leadership: Add/edit profiles → JSON update → Auto-deploy
- Ministries: Manage ministry info → JSON update → Auto-deploy

### 3. Static Generation
- All content is statically generated at build time
- Fast loading and SEO-friendly
- No database required - all data in JSON files

## File Structure
\`\`\`
/data/
  ├── sermons.json      # Sermon data with YouTube IDs
  ├── blog.json         # Blog posts with markdown content
  ├── leadership.json   # Leadership profiles
  ├── ministries.json   # Ministry information
  └── gallery.json      # Gallery items with Cloudinary URLs
