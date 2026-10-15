#!/usr/bin/env python3
"""Builds the SS1 Tool demo (demo/windows.html and demo/android.html) from the real app's page.

The page is SS1 Tool's own web/index.html, taken from the public f3bandit/ss1_tool repo, so the
demo always matches the latest release. demo-src/mock.js answers the page's requests with the
sample SuperStation in demo-src/data.json; nothing is sent anywhere.

Run:  python3 tools/demo.py                     (downloads the latest page from GitHub)
      python3 tools/demo.py index.html main.go  (uses local copies)
"""
import json, pathlib, re, shutil, sys, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "demo-src"
OUT = ROOT / "demo"
RAW = "https://raw.githubusercontent.com/f3bandit/ss1_tool/main/SS1Tool-source/"


def read(arg, name):
    if arg:
        return pathlib.Path(arg).read_text(encoding="utf-8")
    with urllib.request.urlopen(RAW + name, timeout=60) as r:
        return r.read().decode("utf-8")


page = read(sys.argv[1] if len(sys.argv) > 1 else None, "web/index.html")
main_go = read(sys.argv[2] if len(sys.argv) > 2 else None, "main.go")
version = re.search(r'appVersion\s*=\s*"([^"]+)"', main_go).group(1)

DEMO_CSS = """<style id="demo-css">
.giftwrap,.gift,.abouthr,p:has(> .gift){display:none!important}
#demoBar{position:relative;z-index:9999;background:#e8473b;color:#fff;font:600 13px/1.3 system-ui,sans-serif;text-align:center;padding:5px 10px}
</style>"""
DEMO_BAR = '<div id="demoBar">Demo: nothing you press changes anything</div>'


def build(platform):
    h = page
    h = h.replace("{{TOKEN}}", "demo").replace("{{VERSION}}", version)
    h = h.replace("{{PLATFORM}}", platform).replace("{{STORE}}", "")
    # the easter egg stays out of the demo
    h = re.sub(r'<div class="giftwrap"[^>]*>.*?</div>', "", h, flags=re.S)
    h = re.sub(r'<hr class="abouthr">\s*<p[^>]*>[^<]*<a[^>]*class="gift".*?</p>', "", h, flags=re.S)
    # screenshots come from demo/shots, downloads and app links are switched off
    h = re.sub(r"const shImg=\(src,p\)=>`[^`]*`;", "const shImg=(src,p)=>`shots/${encodeURI(p)}`;", h)
    h = re.sub(r'location\.href=("/api/[^;}]*)', r"demoNav(\1)", h)
    h = re.sub(r'location\.href=(\'ss1app://[^\']*\'|"ss1app://[^;}]*)', r"demoNav(\1)", h)
    head = '<meta charset="utf-8">'
    inject = f'{head}\n<script src="data.js"></script>\n<script src="mock.js"></script>\n{DEMO_CSS}'
    if head not in h:
        raise SystemExit("index.html has no <meta charset>: the demo needs updating")
    h = h.replace(head, inject, 1)
    h = re.sub(r"(<body[^>]*>)", r"\1" + DEMO_BAR, h, count=1)
    (OUT / f"{platform}.html").write_text(h, encoding="utf-8")


OUT.mkdir(exist_ok=True)
data = (SRC / "data.json").read_text(encoding="utf-8").replace("{{VERSION}}", version)
json.loads(data)  # must stay valid JSON
(OUT / "data.js").write_text("window.DEMO_DATA=" + data + ";\n", encoding="utf-8")
shutil.copy(SRC / "mock.js", OUT / "mock.js")
if (OUT / "shots").exists():
    shutil.rmtree(OUT / "shots")
shutil.copytree(SRC / "shots", OUT / "shots")
build("windows")
build("android")
(OUT / "VERSION").write_text(version + "\n")
print("demo built for SS1 Tool", version)
