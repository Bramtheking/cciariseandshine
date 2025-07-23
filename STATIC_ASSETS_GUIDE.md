# Static Assets Placement Guide

## Directory Structure

Place your static images in the following locations:

### Leadership Photos
\`\`\`
public/images/leadership/
├── pastor-john-doe.jpg
├── pastor-jane-smith.jpg
└── elder-michael-brown.jpg
\`\`\`

### Ministry Photos (Permanent Ministries)
\`\`\`
public/images/ministry/
├── youth-ministry.jpg
├── womens-ministry.jpg
├── mens-ministry.jpg
├── childrens-ministry.jpg
└── worship-ministry.jpg
\`\`\`

### Default/Placeholder Images
\`\`\`
public/images/defaults/
├── default-sermon-thumbnail.jpg
├── default-blog-header.jpg
└── default-ministry-photo.jpg
\`\`\`

## Image Specifications

### Leadership Photos
- **Size**: 400x400px (square)
- **Format**: JPG or PNG
- **Quality**: High resolution for retina displays

### Ministry Photos
- **Size**: 600x400px (3:2 aspect ratio)
- **Format**: JPG
- **Quality**: Web optimized

### Default Images
- **Size**: Various (match the content they're replacing)
- **Format**: JPG
- **Quality**: Web optimized

## Dynamic Content (Cloudinary)
The following will be uploaded via the admin dashboard to Cloudinary:
- Sermon thumbnails
- Blog post images
- Gallery photos/videos
- Event photos
- Any user-generated content
