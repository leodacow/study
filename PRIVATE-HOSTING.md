# Keep the site private (only you can open it)

GitHub Pages cannot do this on a normal account: a Pages site is public on the internet even when the repository is private (private Pages needs GitHub Enterprise Cloud).

What works, free: a **private GitHub repo** + **Cloudflare Pages** (hosts the files) + **Cloudflare Access** (asks for a login code sent to your email).

## A. Put the files in a private GitHub repo
1. github.com > **New repository** > name `study-private` > **Private** > Create.
2. **Add file > Upload files** > drag the CONTENTS of the App folder in (index.html, sw.js, manifest.webmanifest, the css, js, img, icons folders) > Commit.
   - Do NOT upload `SYNC-SETUP.md` or `PRIVATE-HOSTING.md` if you do not want to (they hold no secrets any more, so it is harmless either way).

## B. Host it on Cloudflare Pages
1. Make a free account at dash.cloudflare.com.
2. **Workers & Pages** > **Create** > **Pages** > **Connect to Git** > allow GitHub > choose `study-private`.
3. Build settings: Framework preset **None**, Build command **(leave empty)**, Build output directory **/** (or leave blank). **Save and Deploy**.
4. You get an address like `https://study-private.pages.dev`. Every time you upload new files to the GitHub repo it redeploys by itself (about a minute).

## C. Lock it so only you can open it
1. In Cloudflare open **Zero Trust** (left menu). First time it asks for a team name: pick anything, choose the **Free** plan (it may ask for a card for verification only; the plan costs $0).
2. **Access > Applications > Add an application > Self-hosted**.
3. Application name `study`. Application domain: `study-private.pages.dev` (use your real project name). Click **Add public hostname / domain** again and add `*.study-private.pages.dev` so preview links are locked too.
4. **Policy**: Action **Allow**, Include **Emails** = your own email. Login method: **One-time PIN**. Save.
5. Open the address: it asks for your email, sends a code, and then shows the app. Anyone else gets a blocked page.

## D. Finish the move
1. Google sign-in for sync: Google Cloud > APIs & Services > Credentials > your OAuth client > **Authorised JavaScript origins** > add `https://study-private.pages.dev`.
2. Open the new address on your phone and laptop, **Backup** tab > **Connect and sync** (this brings your progress across).
3. Add to home screen from the new address.
4. Delete the old public copy: github.com > the old `study` repo > Settings > Pages > **Unpublish**, then Settings > Danger Zone > **Delete this repository**.
