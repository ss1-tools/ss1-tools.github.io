# ss1-tools.github.io

Website for SS1 Tool for Windows and SS1 Tool for Android: https://ss1-tools.github.io

- Page content is in `pages/`; the shared header and footer are added by `python3 tools/build.py`, which writes the pages at the top level. Commit both.
- Settings (Lemon Squeezy checkout link, price, agreement version) are at the top of `assets/site.js`.
- Legal pages: `pages/legal/` (EULA, privacy, refunds). When the EULA changes, raise `eulaVersion` in `assets/site.js` and the version in the apps.

This repo holds only the website. The apps' source is not here.
