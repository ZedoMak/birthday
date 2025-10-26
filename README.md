# 🎂 Happy Birthday Website

A beautiful, animated birthday website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Beautiful animations and transitions
- 🎊 Confetti effects
- 💖 Floating hearts on click
- 🎵 Music player (add your own music!)
- 📸 Image gallery (use your own photos!)
- 🎴 Interactive memory cards

## Setup Instructions

### 1. Add Your Images

Place your images in the `public/assets/images/` folder with these names:
- `image1.jpg`
- `image2.jpg`
- `image3.jpg`
- ... and so on (up to `image14.jpg`)

**Supported formats:** JPG, JPEG, PNG, WebP  
**Recommended size:** Square images work best (e.g., 800x800px or 1000x1000px)

### 2. Add Your Music

Place your MP3 file in the `public/assets/music/` folder as:
- `birthday-music.mp3`

The music player will automatically use this file if it exists.

### 3. Run the Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Folder Structure

```
lily/
├── public/
│   └── assets/
│       ├── images/          ← Put your images here
│       │   ├── image1.jpg
│       │   ├── image2.jpg
│       │   └── ...
│       └── music/           ← Put your music here
│           └── birthday-music.mp3
├── src/
│   ├── components/
│   └── styles/
└── ...
```

## Customization

You can customize the birthday messages, names, and content by editing `src/App.tsx`.

Enjoy! 🎉

