# Space Pirates - BabylonJS Game

A 3D space combat game built with BabylonJS and Next.js, optimized for deployment on Vercel.

## Features

- 🚀 3D space combat gameplay
- 🎮 BabylonJS-powered graphics engine
- 🎵 Spatial audio effects
- 🖼️ High-quality 3D models and textures
- 📱 Responsive design
- ⚡ Static generation for optimal performance

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the app_package directory
cd app_package
vercel

# Follow the prompts to deploy
```

### Option 2: Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Set the build command: `npm run build`
6. Set the output directory: `out`
7. Click "Deploy"

### Environment Variables

No environment variables are required for this project.

## Build Configuration

The project is configured for static export with the following features:

- **Output Directory**: `out` (configured in `next.config.js`)
- **Static Generation**: All pages are pre-rendered at build time
- **Asset Optimization**: All game assets are copied to the public directory
- **Image Optimization**: Disabled for compatibility with BabylonJS

## Game Assets

All game assets are located in the `public/assets/` directory:

- **Models**: `.glb` files in `assets/gltf/`
- **Audio**: `.mp3` and `.ogg` files in `assets/sounds/`
- **Textures**: `.png` and `.jpg` files in `assets/textures/`
- **Shaders**: `.json` files in `assets/shaders/`
- **UI Elements**: `.svg` and `.png` files in `assets/UI/`

## Browser Compatibility

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Performance Notes

- The game is optimized for WebGL 2.0
- Total bundle size: ~1.15 MB
- Assets are lazy-loaded for optimal performance
- Static generation ensures fast page loads

## Troubleshooting

### Build Issues

If you encounter build issues:

1. Clear the build cache: `rm -rf .next out node_modules`
2. Reinstall dependencies: `npm install`
3. Rebuild: `npm run build`

### Runtime Issues

- Ensure WebGL is enabled in your browser
- Check browser console for any error messages
- Verify all assets are loading correctly

## Project Structure

```
app_package/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main game page
│   └── globals.css      # Global styles
├── src/                 # Source code
│   ├── playgroundRunner.ts  # BabylonJS initialization
│   └── Playground/      # Game logic
├── public/              # Static assets
│   └── assets/          # Game assets
├── out/                 # Build output (generated)
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## License

This project is licensed under the ISC License.