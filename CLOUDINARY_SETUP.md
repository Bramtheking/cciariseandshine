# Cloudinary Setup Guide for CCI Arise & Shine

## 1. Create Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Note your Cloud Name, API Key, and API Secret

## 2. Set Up Unsigned Upload Preset
1. In your Cloudinary dashboard, go to Settings > Upload
2. Scroll down to "Upload presets"
3. Click "Add upload preset"
4. Set the following:
   - Preset name: `cci_unsigned_uploads`
   - Signing Mode: `Unsigned`
   - Folder: `cci-arise-shine`
   - Resource type: `Auto`
   - Access mode: `Public`
5. Save the preset

## 3. Folder Structure
Create these folders in your Cloudinary media library:
- `/cci-arise-shine/leadership/` - Leadership headshots
- `/cci-arise-shine/ministries/` - Ministry photos
- `/cci-arise-shine/sermons/` - Sermon thumbnail images
- `/cci-arise-shine/gallery/` - Gallery uploads (photos/videos)
- `/cci-arise-shine/blog/` - Blog post images
- `/cci-arise-shine/events/` - Event photos

## 4. Environment Variables
Add these to your Netlify environment variables:
\`\`\`
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=cci_unsigned_uploads
\`\`\`

## 5. Image Guidelines
- **Leadership photos**: 400x400px, professional headshots
- **Ministry photos**: 600x400px, group or activity photos
- **Sermon images**: 800x450px, relevant graphics or photos
- **Gallery images**: Various sizes, max 2MB each
- **Blog images**: 800x400px, relevant to post content

## 6. Upload Process
The admin dashboard will handle uploads automatically using the unsigned preset. Images will be:
1. Uploaded to Cloudinary
2. URLs saved to JSON files in the repository
3. Automatically deployed via Netlify

## 7. Optimization
Cloudinary automatically optimizes images for web delivery with:
- Format conversion (WebP when supported)
- Quality optimization
- Responsive sizing
- CDN delivery
