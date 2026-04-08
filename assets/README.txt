ASSETS FOLDER
=============

Place the following files here before launch:

1. og-image.jpg
   - Used for social sharing previews (Facebook, iMessage, etc.)
   - Ideal size: 1200 x 630px
   - Content: RT Excavation logo + tagline, or a job site photo

2. logo.png
   - Transparent background
   - Used in the Schema markup
   - Ideal size: 400 x 200px or similar

3. tyler-rashelle.jpg (or similar)
   - Photo of Tyler and/or Rashelle, or equipment on a job site
   - Used in the About section
   - Replace the placeholder div in index.html with:
     <img src="assets/tyler-rashelle.jpg"
          alt="Tyler Reid, owner and operator of RT Excavation LLC in Smithfield, Utah"
          width="800" height="600"
          loading="lazy">

4. favicon.ico / favicon.png
   - Small icon that appears in browser tabs
   - Add to <head> in index.html:
     <link rel="icon" type="image/png" href="assets/favicon.png">

NOTE: All images should be compressed before uploading.
      Free tool: https://squoosh.app
