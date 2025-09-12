# Work Environment Images

This directory contains images showcasing your company's work environment and culture.

## Image Requirements

- **Format**: JPG or PNG
- **Size**: Recommended 1200x900px or similar aspect ratio (4:3)
- **Quality**: High resolution for web display
- **File Size**: Optimized for web (under 500KB per image recommended)

## Required Images

Replace the placeholder paths in the WorkEnvironment component with your actual images:

1. `office-space-1.jpg` - Modern office workspace
2. `team-collaboration.jpg` - Team collaboration session  
3. `workspace-setup.jpg` - Professional workspace setup
4. `break-area.jpg` - Employee break area
5. `meeting-room.jpg` - Conference room
6. `team-lunch.jpg` - Team lunch gathering
7. `tech-setup.jpg` - Technology infrastructure
8. `office-view.jpg` - Office view and atmosphere

## Image Categories

The component automatically categorizes images into:
- **Office Space**: Physical workspace, meeting rooms, office views
- **Team Culture**: Team meetings, lunches, collaboration moments
- **Technology**: Workstations, tech setup, modern equipment
- **Amenities**: Break areas, common spaces, employee facilities

## How to Add Images

1. Save your images in this directory with the exact filenames listed above
2. The component will automatically display them in the gallery
3. Images will be filtered by category using the buttons at the top
4. Click any image to view it in a modal overlay

## Alternative Placement

If you prefer to organize images differently, you can:
1. Update the image paths in `/src/components/WorkEnvironment.tsx`
2. Modify the `workEnvironmentImages` array with your preferred structure
3. Adjust categories as needed for your specific images

## Styling Notes

- Images are displayed in a responsive grid (1-4 columns based on screen size)
- Hover effects include subtle animations and overlays
- Modal view provides full-screen image viewing
- All images maintain aspect ratio and are optimized for performance
