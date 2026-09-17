# Metin Ünlü — Personal Portfolio

Personal portfolio website: [metinunlu.github.io](https://metinunlu.github.io/)

CTO and hands-on AI / full-stack engineer. The site covers professional case studies
(enterprise AI platform work, probabilistic forecasting, retrieval-augmented assistants,
document intelligence, finance-operations automation), personal and academic data science
projects, and a full CV.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Landing page: hero, professional work, personal projects, about, contact |
| `project_all.html` | Full project index — professional case studies + personal/academic work |
| `cvpage.html` | Curriculum vitae |
| `ai-platform-kernel.html` | Case study — enterprise AI application kernel |
| `ml-doe-platform.html` | Case study — ML-driven design of experiments & digital twin |
| `demand-forecasting.html` | Case study — demand forecasting & inventory decision engine |
| `quality-assistant.html` | Case study — on-premise manufacturing quality assistant |
| `document-intelligence.html` | Case study — document intelligence & structured extraction |
| `invoice-automation.html` | Case study — AI invoice payment approval |
| `markovchain_finance.html`, `music_recommendation.html`, `mango.html`, `customerchurn.html`, `customgpt.html`, `british_reviews.html`, `kpmg.html`, `DSauto.html` | Personal & academic project write-ups |

Professional case studies are written without client names, product names or customer data.
Figures are either taken from the repositories they describe or explicitly labelled as
engineering estimates.

## Design system

Light technical palette, built from scratch in `assets/css/site.css` — no framework, no build step.

- **Type:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (labels, eyebrows, chips)
- **Colour:** `#1A73E8` blue, `#34A853` green, `#F9AB00` amber, `#EA4335` red on `#202124` ink
- **Surface:** white cards on a dotted grid, Material-style elevation shadows
- **Components:** eyebrow rules, chips, metric tiles, stat strips, timeline, cards with coloured top rules
- **Motion:** `assets/js/site.js` — IntersectionObserver reveal with sibling stagger, typewriter, mobile nav

Legacy Hyperspace template assets (`assets/css/main.css`, `assets/sass/`, `assets/js/*.min.js`,
`assets/js/main.js`, `assets/css/noscript.css`) are no longer referenced by any page.

## Local preview

Static HTML — no build step. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

## Credits

- **Fonts:** Space Grotesk, IBM Plex Sans and IBM Plex Mono via Google Fonts
- **Icons:** [Font Awesome](https://fontawesome.com)
- **Original template (now replaced):** Hyperspace by [HTML5 UP](https://html5up.net) / @ajlkn — CCA 3.0 license
- **Demo imagery:** Unsplash — photos by Anne Nygård and [Travis Yewell](https://unsplash.com/@shutters_guild); Microsoft Designer
