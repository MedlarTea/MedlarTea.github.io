# Follow-Bench 2.0 project page

Static research project page styled after the repository's `referTrack/` page and [Follow-Bench 1.0](https://follow-bench.github.io/). No build step or JavaScript framework is required.

## Preview

Open `index.html` directly in a browser, or serve the repository root:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8765/follow-bench-v2/`.

## Content and assets

- Manuscript source (not linked on the page): `../follow_bench_v2_main.pdf`. Add the Paper/arXiv button when the arXiv version is available.
- Video: `videos/follow_bench_v2_video.mp4`
- Figures: rendered from manuscript pages 2, 5, 6, 7, and 25.
- Video poster: extracted from the supplied video at 35 seconds.
- Fonts: locally hosted Google Sans character subsets, with the upstream SIL Open Font License in `static/fonts/OFL.txt`.

Keep the `videos/` directory alongside `index.html` when publishing this directory to GitHub Pages. The original PDF is not required by the page. The page includes no invented publication venue, arXiv identifier, or publication date; its BibTeX entry describes the supplied research manuscript.

## Interactions

The video autoplays muted with inline playback and native controls. Click a paper figure to enlarge it; Escape closes the dialog. The citation button copies BibTeX, or selects it for manual copying if clipboard access is unavailable. Reduced-motion preferences are respected.
