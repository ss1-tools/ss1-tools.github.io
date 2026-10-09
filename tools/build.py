#!/usr/bin/env python3
"""Builds the SS1 Tools website from pages/*.html (content only) plus the shared header
and footer. Run:  python3 tools/build.py   The generated pages are committed."""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
NAV = [("index.html", "Home"), ("windows.html", "Windows"), ("android.html", "Android"),
       ("support.html", "Support"), ("legal/eula.html", "License"), ("legal/privacy.html", "Privacy")]

def page(src: pathlib.Path):
    text = src.read_text(encoding="utf-8")
    m = re.match(r"<!--\s*(.*?)\s*\|\s*(.*?)\s*-->\n", text)
    title, desc = m.group(1), m.group(2)
    body = text[m.end():]
    out = src.relative_to(ROOT / "pages")
    depth = len(out.parts) - 1
    up = "../" * depth
    if out.name == "404.html":  # shown at any address, so it needs absolute links
        up = "/"
    nav = "".join(
        f'<a href="{up}{href}"{" aria-current=\"page\"" if href == out.as_posix() else ""}>{name}</a>'
        for href, name in NAV)
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#171a21">
<link rel="icon" href="{up}assets/img/favicon.png">
<link rel="stylesheet" href="{up}assets/style.css">
</head>
<body>
<header class="top"><div class="wrap">
 <a class="brand" href="{up}index.html"><img src="{up}assets/img/icon.png" alt="">SS1 <span>Tools</span></a>
 <nav aria-label="Site">{nav}</nav>
</div></header>
<main class="wrap">
{body.replace("{{UP}}", up)}
</main>
<footer><div class="wrap">
 <nav aria-label="Legal"><a href="{up}legal/eula.html">License agreement (EULA)</a><a href="{up}legal/privacy.html">Privacy policy</a><a href="{up}legal/refunds.html">Refund policy</a><a href="{up}support.html">Support</a><a href="https://github.com/f3bandit/ss1_tool">GitHub</a></nav>
 <p>SS1 Tool and SS1 Tool for Android are independent, unofficial community tools made by f3bandit (F3 Digital Systems). They are not made, endorsed or supported by Taki Udon, Retro Remake or the MiSTer project. SuperStation One and all other product names are trademarks of their respective owners and are used only to describe compatibility.</p>
 <p>&copy; 2026 f3bandit, trading as F3 Digital Systems. All rights reserved.</p>
</div></footer>
<script src="{up}assets/site.js"></script>
</body>
</html>
"""
    dst = ROOT / out
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(html, encoding="utf-8")
    print("built", out)

for src in sorted((ROOT / "pages").rglob("*.html")):
    page(src)
