# Work Environment Images - Image Carousel

This directory contains images for the Work Environment carousel section showcasing your company's work environment and culture.

## Image Requirements

- **Format**: JPG or PNG
- **Size**: Recommended 1920x1200px or similar aspect ratio (16:10) for main carousel
- **Thumbnail Size**: 320x200px (will be auto-generated from main images)
- **Quality**: High resolution for web display
- **File Size**: Optimized for web (under 1MB per image recommended)

## Required Images

Upload your work environment images to this directory with these exact filenames:

1. `office-space-1.jpg` - Modern office workspace
2. `team-collaboration.jpg` - Team collaboration session  
3. `workspace-setup.jpg` - Professional workspace setup
4. `break-area.jpg` - Employee break area
5. `meeting-room.jpg` - Conference room
6. `team-lunch.jpg` - Team lunch gathering
7. `tech-setup.jpg` - Technology infrastructure
8. `office-view.jpg` - Office view and atmosphere

## How the Carousel Works

The Work Environment section now features an interactive image carousel with:

- **Auto-play**: Images automatically advance every 4 seconds
- **Navigation Controls**: Left/right arrow buttons to manually navigate
- **Play/Pause**: Toggle auto-play on/off
- **Thumbnail Strip**: Click any thumbnail to jump to that image
- **Dot Indicators**: Click dots below the carousel to navigate
- **Modal View**: Click the main image to view it in full-screen modal

## How to Add Images

1. **Upload Images**: Save your images in this directory (`/public/work-environment/`) with the exact filenames listed above
2. **Replace Placeholders**: The component will automatically use your uploaded images instead of the placeholder icons
3. **Image Optimization**: Ensure images are optimized for web performance
4. **Aspect Ratio**: Maintain 16:10 aspect ratio for best display results

## Image Content Suggestions

For the best carousel experience, include images that showcase:

- **Office Spaces**: Modern workstations, meeting rooms, common areas
- **Team Culture**: Collaboration sessions, team meetings, social moments
- **Technology**: Workstations, equipment, modern office technology
- **Amenities**: Break rooms, kitchen areas, recreational spaces
- **Atmosphere**: Overall office vibe, natural lighting, professional environment

## Technical Notes

- Images are displayed in a 16:10 aspect ratio carousel
- Thumbnails are automatically generated from the main images
- The carousel is fully responsive and works on all device sizes
- All images maintain their aspect ratio and are optimized for performance
- The component includes smooth transitions and hover effects

## File Structure

```
/public/work-environment/
├── office-space-1.jpg
├── team-collaboration.jpg
├── workspace-setup.jpg
├── break-area.jpg
├── meeting-room.jpg
├── team-lunch.jpg
├── tech-setup.jpg
├── office-view.jpg
└── README.md (this file)
```

## Troubleshooting

If images don't appear:
1. Check that filenames match exactly (case-sensitive)
2. Ensure images are in the correct directory (`/public/work-environment/`)
3. Verify image formats are JPG or PNG
4. Check browser console for any loading errors
