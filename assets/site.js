// SS1 Tools website settings. Edit these, then push.
const SITE = {
  // Lemon Squeezy checkout link for SS1 Tool for Android (Store › Products › Share).
  // Leave empty until the store is approved: the Buy button then shows "Coming soon".
  androidCheckout: "",
  androidPrice: "$4.99",
  // The agreement version people accept on this site (also shown on the EULA page).
  eulaVersion: "1.0 (2026-10-09)",
  windowsDownload: "https://github.com/f3bandit/ss1_tool/releases/latest/download/SS1Tool.exe",
};

// Agreement before download/purchase: the button stays disabled until every box is ticked.
document.querySelectorAll("form.agree").forEach(form => {
  const boxes = [...form.querySelectorAll("input[type=checkbox]")];
  const go = form.querySelector(".go");
  const kind = form.dataset.kind; // "windows" | "android"
  let target = kind === "windows" ? SITE.windowsDownload : SITE.androidCheckout;
  if (kind === "android" && target) {
    // Lemon Squeezy keeps custom checkout data with the order: a record of the agreement version.
    const u = new URL(target);
    u.searchParams.set("checkout[custom][eula_version]", SITE.eulaVersion);
    u.searchParams.set("checkout[custom][agreed_on_site]", "yes");
    target = u.toString();
  }
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
