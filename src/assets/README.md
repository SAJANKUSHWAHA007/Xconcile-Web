# Assets Folder

You can place your project assets here!

## Directory Structure:
```
src/assets/
├── images/       <-- Put your image files here (e.g., logo.png, hero-bg.png, etc.)
│   ├── Logo.png
│   └── hero_section_image.png
└── icons/        <-- Custom icons/SVGs
```

## How to use in components:
- **Referencing from `public/assets`**:
  Images in `public/assets/images/` can be accessed directly via root URLs:
  ```javascript
  <Image src="/assets/images/hero_section_image.png" alt="Hero Graphic" width={520} height={440} priority />
  <Image src="/assets/images/Logo.png" alt="Xconcile Logo" width={132} height={32} priority />
  ```
