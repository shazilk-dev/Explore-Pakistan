Final Project Report — Explore Pakistan

Course: Web Technologies
Project: Explore Pakistan — Tourist Spots
Author: Shazil Khan
Deadline: 2 Jan 2026
Date: 27 Dec 2025

1. Project Summary

Explore Pakistan is a beginner-level student website that showcases tourist destinations, cultural insights, travel tips, a user-upload gallery, and an interactive map of popular places in Pakistan. The site is intended as a course assignment demonstrating core front-end skills using HTML5, CSS3 and vanilla JavaScript.

2. Objectives

- Present destination highlights with images and short descriptions.
- Provide cultural information (festivals, traditions, foods).
- Offer practical travel tips for visitors.
- Provide a client-side user gallery where visitors can upload photos and short captions.
- Show popular places on an interactive map and allow users to focus the map from destination cards or a clickable legend.
- Keep design mobile-friendly and use a color palette reflecting Pakistan (green, white, gold).

3. Technologies and Libraries

- HTML5 — semantic structure and forms.
- CSS3 — layout, responsive styles; intentionally kept simple for beginner level.
- JavaScript (vanilla) — gallery handling, map integration, UI interactions.
- Leaflet (via CDN) — interactive map with markers (uses OpenStreetMap tiles).
- OpenStreetMap — tile and embedded map previews.
- No backend: gallery images are stored in browser `localStorage` as base64 (suitable for demo only).

4. Project Structure (files of interest)

- `index.html` — main site content and sections.
- `css/styles.css` — all styles and responsive rules.
- `js/script.js` — gallery handling, Leaflet map setup, marker/legend interactions.
- `assets/images/` — folder for any local images (optional).
- `FINAL_REPORT.md` — this report.
- `README.md` — quick usage instructions.

5. Features Implemented

- Home/hero section with a brief introduction and link to destinations.
- Destination Highlights: multiple destination cards (Hunza, Lahore, Karachi, Skardu, Multan, Mohenjo-daro) with images and "View on Map" links.
- Cultural Insights: festival descriptions and must-try foods.
- Travel Tips: transport, accommodation, safety, money & connectivity advice.
- User Gallery: upload form for image + caption; images stored in `localStorage` (max 20 entries, ~2MB per image limit). Gallery shows thumbnails with captions and a delete button.
- Interactive Map: Leaflet map with markers for popular places. Clicking legend buttons or destination links centers the map and opens popups.
- Simple embedded OSM preview (iframe) as a large preview under the Interactive Map heading.
- Responsive layout and a fixed top navigation bar for easier navigation.

6. Design Decisions & Notes

- Visual style uses green/white/gold to reflect the requested palette. CSS is simple and readable for a beginner-level project.
- Gallery storage in `localStorage` was chosen to avoid backend complexity; the README explains this limitation.
- Leaflet + OpenStreetMap selected because they are free, beginner-friendly and simple to integrate via CDN.
- Destination images use free images (Unsplash links) to avoid licensing issues; users may replace with local images placed in `assets/images/`.

7. How to Run / Preview

1. Ensure you have an internet connection (Leaflet and OSM tiles are loaded via CDN/remote).
1. Open `index.html` in any modern browser (Chrome, Edge, Firefox). No server is required for basic preview.
1. Use the User Gallery form to upload images (images are stored locally in the browser).
1. Scroll to the Interactive Map and click a place in the "Popular Places" legend or a destination card's "View on Map" to focus the map.

1. Testing Performed

- Manual checks in desktop and mobile viewport sizes (responsive breakpoints at ~800px and ~480px).
- Verified gallery save/delete behavior across reloads (browser stores items in `localStorage`).
- Verified that markers appear on the Leaflet map and legend buttons center the map and open popups.

9. Known Limitations

- No server-side upload: images stored in `localStorage` are not reliable for large or many files and are not a substitute for a server or CDN.
- Base64 images can use a lot of local storage quickly; project limits shown in code (max 20 items and 2 MB per image) to reduce risk.
- Map preview requires an internet connection for tile loading.
- Accessibility (a11y) was considered at a basic level (semantic HTML), but further improvements (ARIA attributes, keyboard navigation testing) are recommended.

10. Future Improvements (optional / for extra credit)

- Add a simple backend (e.g., Node/Express) and store gallery uploads on the server with file-size checks.
- Add a lightbox for gallery images to view full-size photos.
- Add filtering or categories for destinations and search functionality.
- Improve accessibility with ARIA labels, keyboard interactions and better color contrast checks.
- Add unit or integration tests and simple deployment instructions to GitHub Pages or similar.

11. References

- Leaflet: https://leafletjs.com/
- OpenStreetMap: https://www.openstreetmap.org/
- Unsplash: https://unsplash.com/ (images used via their shared CDN links)

12. Submission Checklist

- [x] `index.html` (main site)
- [x] `css/styles.css` (styling + responsive)
- [x] `js/script.js` (gallery + map interactions)
- [x] `README.md` (usage instructions)
- [x] `FINAL_REPORT.md` (this document)

---

Notes: This project is implemented at a beginner-to-intermediate level intentionally; all code is kept simple and documented in the source files. Replace placeholder images with local files in `assets/images/` if offline use is required.
