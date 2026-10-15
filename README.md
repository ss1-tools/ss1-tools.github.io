# ss1-tools.github.io

Website for SS1 Tool for Windows and SS1 Tool for Android: https://ss1-tools.github.io

- Page content is in `pages/`; the shared header and footer are added by `python3 tools/build.py`, which writes the pages at the top level. Commit both.
- Settings (Google Play links, price, agreement version) are at the top of `assets/site.js`.
- Legal pages: `pages/legal/` (EULA, privacy, refunds). When the EULA changes, raise `eulaVersion` in `assets/site.js` and the version in the apps.

This repo holds only the website. The apps' source is not here.

## Try it (demo)

`demo.html` shows SS1 Tool for Windows and for Android running against a pretend SuperStation.
`demo/` is generated: `tools/demo.py` takes the app's own page (`SS1Tool-source/web/index.html`)
from the public f3bandit/ss1_tool repo and adds `demo-src/mock.js`, which answers the page's
requests with the sample data in `demo-src/data.json`. The **Update the demo** workflow rebuilds
it every 4 hours, so the demo follows each SS1 Tool release by itself. When a release adds a
feature that needs sample data, add it to `demo-src/data.json` (or `demo-src/mock.js`).
