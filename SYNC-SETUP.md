# Automatic sync between phone and laptop (Google Drive)

One-time setup, about 10 minutes, free. The app only gets access to a hidden file of its own in your Drive (scope `drive.appdata`). It cannot see your other files.

1. Go to https://console.cloud.google.com and sign in with your Google account.
2. Top bar > project drop-down > **New project** > name it `study-guide` > Create.
3. Menu > **APIs & Services** > **Library** > search **Google Drive API** > Enable.
4. **APIs & Services** > **OAuth consent screen**: User type **External** > fill app name `Study Guide` and your email > Save. Under **Test users** (or Audience) add your own Gmail address.
5. **APIs & Services** > **Credentials** > **Create credentials** > **OAuth client ID** > type **Web application**.
   - **Authorised JavaScript origins**: add `https://leodacow.github.io`
   - Create. Copy the **Client ID** (ends in `.apps.googleusercontent.com`).
6. Open the app on the website (not the local file) > **Backup** tab > paste the Client ID > **Connect and sync** > choose your Google account and allow.
7. Repeat step 6 once on your phone. After that it syncs by itself (a few seconds after each change, and when you open the app).

Notes
- Google may show "app isn't verified". That is normal for your own test app: Advanced > Continue.
- If sync ever fails, the manual copy/paste backup still works.
- Sync merges: practice results, flashcard progress and mock attempts from both devices are combined. For hours and notes-sheet choices, the most recently changed device wins.
