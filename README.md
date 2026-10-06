# Bhargavi Rao Bondada · Portfolio

One React + Vite site with two audience-specific portfolios:

| URL | What it is |
|---|---|
| `/` | Router page: name, positioning, two paths |
| `/ux` | UX / HCI / research portfolio |
| `/software-engineering` | Engineering portfolio |
| `/ux/<project>` | UX case study (e.g. `/ux/ktb2`) |
| `/software-engineering/<project>` | Engineering case study of the same project |

## Where to edit things

| To change... | Edit |
|---|---|
| Name, email, links, headlines, project **order** per track, skills | `src/data/site.js` |
| Any project text, numbers, images | `src/data/projects.js` |
| Screenshots | `public/images/` |
| Resume PDFs | `public/resume/` (keep the same file names, or update `site.js`) |
| Architecture diagrams | `src/components/Diagrams.jsx` |
| Colors, fonts, spacing | `src/styles.css` (top of file) |

`[NEED FROM ME]` placeholder boxes appear only when running locally (`npm run dev`); they are hidden on the live site.
To hide a project without deleting it, add `draft: true` to it in `projects.js`.

## Run locally (macOS)

You need Node.js 18 or newer. Check with `node -v`; if missing, install the LTS version from nodejs.org.

```bash
cd ~/Downloads/portfolio      # go to the unzipped folder
npm install                   # installs the project's dependencies (once)
npm run dev                   # starts the local server; open the http://localhost:5173 link it prints
```

Press `Ctrl + C` in Terminal to stop the server.

## Publish on GitHub Pages

1. **Create the repository.** On github.com, click **New repository**, name it `portfolio`, keep it **Public**, and do **not** add a README, .gitignore, or license. Click **Create repository**.
   - Tip: if you name it `BBhargaviRao.github.io` instead, the site lives at the shorter `https://bbhargavirao.github.io/`. The deploy workflow handles either name automatically.
2. **Push the code** (run in the project folder):
   ```bash
   git init                                   # makes this folder a git repository
   git add .                                  # stages every file
   git commit -m "Initial portfolio"          # saves a first snapshot
   git branch -M main                         # names the branch main
   git remote add origin https://github.com/BBhargaviRao/portfolio.git   # links to GitHub
   git push -u origin main                    # uploads the code
   ```
   If GitHub asks for a password, use a personal access token (GitHub → Settings → Developer settings → Personal access tokens), or sign in with GitHub Desktop.
3. **Turn on Pages.** In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. **Wait for the deploy.** Open the **Actions** tab; the "Deploy to GitHub Pages" run takes about a minute. A green check means it is live.
5. **Verify.** Open `https://bbhargavirao.github.io/portfolio/`, then test a deep link directly, e.g. `https://bbhargavirao.github.io/portfolio/ux/ktb2`, and both resume buttons.

How routing works on Pages: the workflow builds with the right base path (`/portfolio/`) and copies `index.html` to `404.html`, so deep links load the app instead of a GitHub 404.

## Update the site later

```bash
git add .
git commit -m "Describe what changed"
git push
```

Every push to `main` redeploys automatically.
