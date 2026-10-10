// SS1 Tools website settings. Edit these, then push.
const SITE = {
  // SS1 Tool for Android is sold on Google Play.
  // playLive: set to true once the app is public on Google Play (after the closed test).
  playLive: false,
  playUrl: "https://play.google.com/store/apps/details?id=com.f3bandit.ss1tool",
  // Closed test sign-up: the Google Group testers join, and the Play testing link
  // (Play Console › Closed testing › Testers › Copy link). Empty = not shown yet.
  testerGroup: "https://groups.google.com/g/ss1tool-testers",
  testerPlayLink: "",
  androidPrice: "$4.99",
  // The agreement version people accept on this site (also shown on the EULA page).
  eulaVersion: "1.1 (2026-10-10)",
  windowsDownload: "https://github.com/f3bandit/ss1_tool/releases/latest/download/SS1Tool.exe",
};

// Agreement before download/purchase: the button stays disabled until every box is ticked.
document.querySelectorAll("form.agree").forEach(form => {
  const boxes = [...form.querySelectorAll("input[type=checkbox]")];
  const go = form.querySelector(".go");
  const kind = form.dataset.kind; // "windows" | "android"
  const target = kind === "windows" ? SITE.windowsDownload : "";
  const available = !!target;
  if (!available) { go.textContent = "Coming soon"; }
  const update = () => {
    const ok = available && boxes.every(b => b.checked);
    go.setAttribute("aria-disabled", ok ? "false" : "true");
    if (ok) go.href = target; else go.removeAttribute("href");
  };
  boxes.forEach(b => b.addEventListener("change", update));
  go.addEventListener("click", e => { if (go.getAttribute("aria-disabled") === "true") e.preventDefault(); });
  update();
});
document.querySelectorAll("[data-price]").forEach(e => e.textContent = SITE.androidPrice);
document.querySelectorAll("[data-eula-version]").forEach(e => e.textContent = SITE.eulaVersion);

// Google Play buttons and the closed test.
document.querySelectorAll("[data-play]").forEach(a => {
  if (SITE.playLive) { a.href = SITE.playUrl; a.removeAttribute("aria-disabled"); }
  else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.textContent = "Coming soon to Google Play"; }
});
document.querySelectorAll("[data-when-live]").forEach(e => e.hidden = !SITE.playLive);
document.querySelectorAll("[data-when-testing]").forEach(e => e.hidden = SITE.playLive);
const tg = document.querySelector("[data-tester-group]"), tp = document.querySelector("[data-tester-play]");
if (tg) { if (SITE.testerGroup) tg.href = SITE.testerGroup; else { tg.removeAttribute("href"); tg.setAttribute("aria-disabled", "true"); tg.textContent = "Sign-up opens soon"; } }
if (tp) { if (SITE.testerPlayLink) tp.href = SITE.testerPlayLink; else { tp.removeAttribute("href"); tp.setAttribute("aria-disabled", "true"); tp.textContent = "Test link coming soon"; } }
