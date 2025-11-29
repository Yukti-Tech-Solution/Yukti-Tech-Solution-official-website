# Project Images Directory

This directory contains images for the portfolio projects showcased on the Yukti Tech Solutions website.

## Folder Structure

```
public/projects/
├── bytefest/
│   ├── homepage.png          # Main homepage screenshot (used as thumbnail)
│   ├── events.png            # Events page screenshot
│   └── registration.png      # Registration page screenshot
├── mcs-chatbot/
│   ├── homepage.png          # Main chat interface (used as thumbnail)
│   ├── chat-interface.png    # Chat interface screenshot
│   └── response-example.png  # Example response screenshot
├── global-science-academy/
│   ├── homepage.png          # Main homepage screenshot (used as thumbnail)
│   ├── courses.png           # Courses page screenshot
│   └── about.png             # About page screenshot
├── navakruti/
│   ├── homepage.png          # Main homepage screenshot (used as thumbnail)
│   ├── services.png          # Services page screenshot
│   └── projects.png          # Projects portfolio screenshot
└── billing-software/
    ├── dashboard.png         # Dashboard screenshot (used as thumbnail)
    ├── invoice.png           # Invoice generation screenshot
    └── reports.png           # Reports/analytics screenshot
```

## Image Requirements

### Thumbnails (Homepage Screenshots)
- **Dimensions:** 1920x1080px (desktop) or 1200x630px (optimal for cards)
- **Format:** PNG or JPG (WebP also supported)
- **Max Size:** 500KB (optimize for web)
- **Aspect Ratio:** 16:9 recommended for project cards
- **Note:** The `homepage.png` or first screenshot in each project folder serves as the thumbnail

### Screenshots
- **Dimensions:** 
  - Desktop: 1920x1080px (recommended)
  - Tablet: 768x1024px
  - Mobile: 375x667px
- **Format:** PNG (preferred for screenshots) or JPG
- **Max Size:** 500KB per image (optimize for web)
- **Quality:** High quality but optimized for web performance

### Capturing Screenshots

1. Visit the live project URL
2. Use browser DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
3. Capture at different screen sizes:
   - Desktop: 1920x1080
   - Tablet: 768x1024
   - Mobile: 375x667
4. Save screenshots using browser extensions or built-in tools
5. Optimize using tools like:
   - [Squoosh.app](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)

## Image Optimization

1. Convert to WebP format for better compression
2. Compress images to reduce file size
3. Use appropriate dimensions (don't use unnecessarily large images)
4. Test loading performance

## Placeholder Images

Until real screenshots are ready, the application will use placeholder images from `/placeholder.svg` or you can use:
- [Placehold.co](https://placehold.co/)
- Gradient placeholder cards
- Project-themed placeholder colors

## Naming Convention

- Use lowercase with hyphens: `homepage.png`, `events.png`, `dashboard.png`
- Be descriptive but concise
- Keep filenames consistent across projects
- **Required files per project:**
  - `homepage.png` (or equivalent main page) - Used as thumbnail in project cards
  - Additional screenshots as specified in `src/data/projects.ts`

## Project-Specific Image Requirements

### 1. ByteFest 2K25 (`bytefest/`)
- `homepage.png` - Main festival homepage
- `events.png` - Events listing page
- `registration.png` - Event registration form

### 2. MCS Act Legal Chatbot (`mcs-chatbot/`)
- `homepage.png` - Chat interface homepage
- `chat-interface.png` - Active chat conversation
- `response-example.png` - Example AI response with citations

### 3. Global Science Academy (`global-science-academy/`)
- `homepage.png` - Academy homepage
- `courses.png` - Course catalog page
- `about.png` - About/information page

### 4. Navakruti Consulting Engineers (`navakruti/`)
- `homepage.png` - Company homepage
- `services.png` - Services page
- `projects.png` - Project portfolio gallery

### 5. Custom Billing Software (`billing-software/`)
- `dashboard.png` - Main dashboard (used as thumbnail)
- `invoice.png` - Invoice generation interface
- `reports.png` - Financial reports/analytics page

