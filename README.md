# Samrat Mitra — Azure Data Engineer Portfolio

A responsive single-page portfolio built with HTML, CSS, and vanilla JavaScript. This updated version adds a dedicated 10-card technical skills grid, refined typography and spacing, hover states, animated headings and scroll reveals, and expanded ATS-friendly work experience. Power BI is highlighted in the skill grid, pipeline illustration, and analytics case study. No framework or build step is required.

## Files

- `index.html` — page content, projects, technical skills, experience, education, credentials, and contact information
- `styles.css` — responsive layout, typography, color system, hover effects, and animations
- `script.js` — mobile navigation, scroll-reveal effects, project case-study dialogs, and copy-email interactions
- `assets/Samrat_Mitra_Resume.pdf` — downloadable résumé
- `assets/favicon.svg` — site favicon

## Preview locally

Open `index.html` in a modern browser. For best results, run a local static server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish or update with GitHub Pages

1. Download and extract the ZIP archive.
2. Open your GitHub Pages repository.
3. Upload the **contents of the `samrat-portfolio` folder** to the repository root. Keep `index.html`, `styles.css`, `script.js`, and `assets/` together. On an existing repository, replace the old versions of the same files and upload the updated files inside `assets/` if changed.
4. Commit the changes.
5. In the repository, open **Settings → Pages**. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save if Pages is not already configured.
6. Wait for GitHub Pages to redeploy, then refresh your portfolio URL.

## Content notes

- Experience, dates, metrics, education, certifications, and awards are grounded in the résumé supplied for this task.
- The experience section uses keyword-rich descriptions for Azure Data Factory, Azure Databricks, PySpark, Apache Spark, ADLS Gen2, Azure Blob Storage, Delta Lake, SQL, data modelling, data quality, monitoring, CI/CD, and supply-chain analytics.
- Work cards are anonymized summaries; proprietary client implementation details are intentionally excluded.
- The technical-skills visual includes the tools shown in the provided reference screenshot, including Power BI. Keep or remove any technologies that do not reflect your current hands-on experience before sharing the site with recruiters.

## Easy edits

- Update contact details and page content in `index.html`.
- Change colors near the top of `styles.css` under `:root` and in the final design overrides.
- Change interactions and project case-study copy in `script.js`.
