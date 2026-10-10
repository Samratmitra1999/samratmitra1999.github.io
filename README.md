# Samrat Mitra — Data Engineering Portfolio

A responsive single-page portfolio website built with plain HTML, CSS, and JavaScript. It includes a résumé download, mobile navigation, scroll reveals, project-detail dialogs with copyable overviews, and a copy-email interaction. Power BI is included in the toolkit and analytics case study. No framework or build step is required.

## Preview locally

Open `index.html` in a modern browser. For best results, run a local static server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new public repository on GitHub (for example, `samratmitra-portfolio`).
2. Upload the contents of this folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, and the `assets/` folder together.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment source, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub Pages finishes publishing, open the URL shown in the Pages settings.

## Content notes

- Portfolio metrics, experience, education, certifications, and awards are based on the résumé supplied for this task.
- Work cards are concise, anonymized case-study summaries with interactive details; proprietary implementation details are intentionally excluded.
- Power BI is retained as requested and shown in the skills and analytics-ready reporting sections.
- The original résumé PDF is included at `assets/Samrat_Mitra_Resume.pdf` for the download link.

## Easy edits

- Update contact details and page content in `index.html`.
- Change colors near the top of `styles.css` under `:root`.
- Change interactions in `script.js`.
