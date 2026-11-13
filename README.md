# EverGlow SMP Website

Static HTML/CSS/vanilla JS. No build step and no Node.js required to host the frontend.

## Setup
1. Upload `everglow-website/` contents to a GitHub repository.
2. Edit `js/config.js`: set `apiBase` to your deployed backend HTTPS URL.
3. Put original brand images in `assets/` using the optional filenames in `assets/README.md`.
4. GitHub: Settings → Pages → deploy from branch / root.
5. If publishing in a repository subpath, the generated relative links work from `index.html` and `pages/`.

The frontend never stores or sends the plugin API token. If the backend is unavailable, live panels show “Menunggu API aktif”.
