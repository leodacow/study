# Exam Study Guide

Open `index.html` to use it locally (double-click). Progress is saved in your browser.

## Put it online (GitHub Pages, no git needed)
1. github.com > New repository > name `study` > Public > Create.
2. "uploading an existing file" > drag in everything inside this App folder (index.html, sw.js, manifest.webmanifest, css, js, icons) > Commit.
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)` > Save.
4. After ~1 min your site is at `https://leodacow.github.io/study/`.
5. On your phone open that link > browser menu > "Add to Home screen".

To update after new content is added: repeat step 2 (upload the changed files, same names replace the old ones).

## Adding a course
Each course is one file in `js/` (see `data-stat2201.js`) and a `<script>` line in `index.html` plus an entry in `sw.js`.

## Updating the site (do this whenever I tell you there is new content)
1. Open your repo on github.com > **Add file > Upload files**.
2. Drag the CONTENTS of the App folder in (index.html, sw.js, manifest.webmanifest, README, and the css, js, img, icons folders). Same names replace the old files.
3. Commit changes. Wait about a minute, then reload the site on your phone (pull down or close and reopen the app).

Automatic sync between devices: see SYNC-SETUP.md.

