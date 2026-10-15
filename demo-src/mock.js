// SS1 Tool demo: a pretend SuperStation inside the page. Every /api request the real app would
// send to its built-in server is answered here with sample data; nothing leaves the browser and
// nothing is changed anywhere. Built by tools/demo.py from the SS1 Tool source.
(function () {
  "use strict";
  const D = window.DEMO_DATA;
  const MSG = "Demo: nothing was changed. On a real SuperStation this is done for you.";
  const S = { connected: false, jobId: 0, jobs: {}, sb: null, nightly: null, prefs: Object.assign({}, D.prefs || {}) };
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const now = () => Math.floor(Date.now() / 1000);
  const T0 = Date.now();
  const wobble = (v, r) => Math.max(0, v + (Math.random() * 2 - 1) * r);

  // ---- jobs: a few seconds of progress, then a demo result
  const JOB_FOR = {
    "saves/backup": ["saves", "Back up saves"], "saves/restore": ["saves", "Restore saves"],
    "bt/backup": ["bt", "Back up Bluetooth pairings"], "bt/restore": ["bt", "Restore Bluetooth pairings"], "bt/export": ["bt", "Export Bluetooth pairings"],
    "ss1backup/start": ["ss1backup", "SD card backup to /media/usb0"],
    "cifs/install": ["cifs", "Install the Cifs scripts"], "cifs/mount": ["cifs", "Mount the network share"], "cifs/unmount": ["cifs", "Unmount the network share"],
    "update/install": ["update", "Update SS1 Tool"],
  };
  function startJob(kind, title) {
    const id = ++S.jobId, steps = 3, t0 = Date.now();
    S.jobs[kind] = { id, t0, title, steps };
    return id;
  }
  function jobSnap(kind) {
    const j = S.jobs[kind];
    if (!j) return { id: 0, running: false, title: "", step: 0, steps: 0, msg: "", done: 0, total: 0, bytes: 0, total_bytes: 0, log: null, error: "", result: "", elapsed: 0 };
    const t = (Date.now() - j.t0) / 1000, dur = 4.5, f = Math.min(1, t / dur), running = f < 1;
    const step = Math.min(j.steps, 1 + Math.floor(f * j.steps));
    const total = 120, total_bytes = 734003200;
    return { id: j.id, running, title: j.title, step, steps: j.steps, msg: running ? ["Getting ready", "Copying", "Checking"][step - 1] : "",
      done: Math.round(f * total), total, bytes: Math.round(f * total_bytes), total_bytes,
      log: ["Demo: this is sample progress", running ? "Working..." : "Finished"], error: "", result: running ? "" : MSG, elapsed: t };
  }
  function sdbSnap() {
    const j = S.sb;
    if (!j) return clone(D["sdbackup/progress"] || { running: false });
    const t = (Date.now() - j.t0) / 1000, f = Math.min(1, t / 5), total = 3313664 * 1000;
    return { running: f < 1, finished: f >= 1, name: j.name, path: "C:\\Users\\Player\\SS1Tool\\backup\\sdcard\\" + j.name, done_bytes: Math.round(f * total),
      total_bytes: total, files: Math.round(f * 2310), current: f < 1 ? "/media/fat/saves/SNES/Super Boss Gaiden.srm" : "", error: "", started: Math.floor(j.t0 / 1000),
      ended: f >= 1 ? now() : 0, skipped: 0, canceled: false, phase: "copy", measured: 2310, entries: 2310 };
  }

  // ---- a small pretend file system for the file manager
  function fsList(p) {
    const T = D._tree || {};
    p = (p || "/media/fat").replace(/\/+$/, "") || "/media";
    if (p === "/media") return { path: "/media", entries: [{ name: "fat", dir: true, size: 0, mtime: now() }, { name: "usb0", dir: true, size: 0, mtime: now() }] };
    const e = T[p];
    if (!e) return { path: p, entries: [] };
    return { path: p, entries: e };
  }

  function dash() {
    const d = clone(D.dash);
    d.cpu.list.forEach((c) => (c.pct = Math.round(wobble(c.pct, 10))));
    d.cpu_pct = Math.round(d.cpu.list.reduce((a, c) => a + c.pct, 0) / d.cpu.list.length);
    d.mem_used_kb = Math.round(wobble(d.mem_used_kb, 4000));
    d.nets.forEach((n, i) => { n.rx_bps = i ? wobble(1200, 800) : wobble(380000, 300000); n.tx_bps = i ? wobble(400, 300) : wobble(42000, 30000); });
    d.io.forEach((x, i) => { x.read_bps = i ? wobble(2400000, 2300000) : wobble(90000, 80000); x.write_bps = i ? wobble(20000, 20000) : wobble(4000, 4000); });
    d.uptime_s = D.dash.uptime_s + Math.floor((Date.now() - T0) / 1000);
    d.load = [0.31, 0.27, 0.22].map((v) => wobble(v, 0.08).toFixed(2)).join(" ");
    return d;
  }

  // controller tester: a pretend 8BitDo pad and the PlayStation pad in the front port, pressing buttons
  const PAD_ALL = ["a", "b", "c", "x", "y", "z", "back", "start", "guide", "l1", "r1", "l2", "r2", "l3", "r3", "up", "down", "left", "right", "ls", "rs"];
  const PAD_SEQ = ["a", "b", "x", "y", "up", "right", "down", "left", "l1", "r1", "l2", "r2", "start", "back"];
  function pad(has, t, slow) {
    const ctl = {}, on = PAD_SEQ[Math.floor(t / (slow ? 700 : 450)) % PAD_SEQ.length];
    PAD_ALL.forEach((n) => (ctl[n] = { has: has.includes(n), on: false }));
    if (ctl[on] && ctl[on].has) ctl[on].on = true;
    return ctl;
  }
  function padState() {
    const t = Date.now() - T0, a = t / 900;
    const usbHas = ["a", "b", "x", "y", "back", "start", "guide", "l1", "r1", "l2", "r2", "l3", "r3", "up", "down", "left", "right", "ls", "rs"];
    const u = { id: "event3", name: "8BitDo Pro 2", db_name: "8BitDo Pro 2", db_user: false, kind: "usb", vidpid: "2dc8:3106",
      ctl: pad(usbHas, t), extra: [], held: [], axes: [{ name: "LX", v: Math.cos(a) * 0.9 }, { name: "LY", v: Math.sin(a) * 0.9 }, { name: "RX", v: 0 }, { name: "RY", v: 0 }] };
    u.ctl.ls = { has: true, on: false, x: Math.cos(a) * 0.9, y: Math.sin(a) * 0.9 };
    u.ctl.rs = { has: true, on: false, x: 0, y: 0 };
    const snacHas = ["a", "b", "x", "y", "back", "start", "l1", "r1", "l2", "r2", "up", "down", "left", "right"];
    const sn = { id: "snac", name: "PlayStation controller in port 1", db_name: "", kind: "virtual", vidpid: "", ctl: pad(snacHas, t + 3000, true), extra: [], held: [], axes: [] };
    return { connected: true, starting: false, error: "", age_ms: 40, data: { core: "MENU", cm: true, usb: [u], snac: [sn], software: 0, snac_err: "" } };
  }

  function handle(method, path, q, body) {
    const need = () => (S.connected ? null : [409, { error: "not connected to a SuperStation" }]);
    const get = (k) => (k in D ? clone(D[k]) : null);
    switch (path) {
      case "config": { const c = get("config"); c.connected = S.connected; return [200, c]; }
      case "ping": return [200, { connected: S.connected }];
      case "connect": S.connected = true; return [200, get("status")];
      case "disconnect": S.connected = false; return [200, { ok: true }];
      case "status": return need() || [200, get("status")];
      case "discover": return [200, get("discover")];
      case "dash": return need() || [200, dash()];
      case "dash/dmesg": return [200, clone(D._dmesg)];
      case "fs/list": return need() || [200, fsList(q.get("path"))];
      case "ini": { const f = q.get("file") || "/media/fat/MiSTer.ini"; return [200, { path: f, text: (D._ini || {})[f] || "[MiSTer]\n" }]; }
      case "saves/files": return [200, (D._savefiles || {})[q.get("system")] || { files: [] }];
      case "diag": {
        const t = (body && body.test) || "quick";
        return [200, { ok: true, output: (D._diag || {})[t] || "PASS: everything looks fine (demo)\n" }, 1200];
      }
      case "debug-report": return [200, get("debug-report"), 1500];
      case "prefs":
        if (method === "POST" && body) Object.assign(S.prefs, body);
        return [200, clone(S.prefs)];
      case "nightly/status": { const n = get("nightly/status"); if (S.nightly) Object.assign(n, S.nightly); return [200, n]; }
      case "nightly/set":
        S.nightly = body && body.Enabled === false ? { enabled: false, running: false, at_boot: false }
          : { enabled: true, running: true, at_boot: true, hour: body ? body.Hour : 3, drive: body ? body.Drive : "/media/usb0" };
        return [200, { ok: true, message: S.nightly.enabled ? "Demo: the nightly saves backup would now run every night at " + String(S.nightly.hour).padStart(2, "0") + ":07. Nothing was changed." : "Nightly saves backup is off (demo)." }];
      case "sdbackup/start": S.sb = { t0: Date.now(), name: ((body && body.name) || "backup").replace(/\W+/g, "_") + "_demo" }; return [200, { ok: true, name: S.sb.name }];
      case "sdbackup/progress": return [200, sdbSnap()];
      case "sdbackup/cancel": S.sb = null; return [200, { ok: true }];
      case "wifi/nearby": return [200, get("wifi/nearby"), 1500];
      case "wifi/scan": return [200, get("wifi/scan"), 1200];
      case "watch": return [200, { supported: true, changed: false }, 20000];
      case "update/check": { const u = get("update"); u.checked = now(); return [200, u, 800]; }
      case "update": { const u = get("update"); u.checked = now(); return [200, u]; }
      case "window/hello": return [200, { other: false }];
      case "window/ping": return [200, { ok: true, open: "" }];
      case "flash/latest": return [200, { image: "C:\\Users\\Player\\Downloads\\SuperStation_ConsoleMode.zip" }, 1200];
      case "flash/start": return [400, { error: "Demo: flashing is switched off in the demo. SS1 Tool for Windows writes the image and checks it." }];
      case "flash/elevate": return [200, { ok: true }];
      case "kbd": return [200, { ok: true }];
      case "padtest/state": return S.connected ? [200, padState(), 40] : [200, { connected: false }];
      case "remote": {
        const a = body && body.action;
        if (a === "menu") return [200, { ok: true, message: "Demo: the SuperStation would go back to the main menu." }];
        return [400, { error: "Demo: the SuperStation would " + (a === "shutdown" ? "shut down safely" : "restart") + " now. Nothing was changed." }];
      }
      case "quit": return [400, { error: "This is the demo: close the tab to leave." }];
    }
    if (path.endsWith("/progress")) {
      const kind = path.slice(0, -9);
      if (S.jobs[kind]) return [200, kind === "update" || kind === "ss1backup" ? (kind === "update" ? { job: jobSnap(kind), new_url: "" } : jobSnap(kind)) : jobSnap(kind)];
    }
    if (JOB_FOR[path]) {
      const [kind, title] = JOB_FOR[path];
      startJob(kind, title);
      return [200, { ok: true, started: true }];
    }
    if (path.startsWith("wizard/card/")) return [200, { ok: true, message: MSG, status: {}, overlap: false, scripts: {}, samba: true }];
    const v = get(path);
    if (v !== null && (method === "GET" || !/(save|set|delete|remove|apply|install|start|restore|create|rename|mkdir|reset|import|label|cleanup|mode|select|keep|revert|undo|reload|test|open|copy|take|upload|transfer)/.test(path))) {
      return S.connected || /^(config|devices|prefs|update|advisory)/.test(path) ? [200, v] : [409, { error: "not connected to a SuperStation" }];
    }
    if (method === "GET") return [200, {}];
    return [200, { ok: true, message: MSG }];
  }

  const realFetch = window.fetch.bind(window);
  window.fetch = function (input, opt) {
    const url = typeof input === "string" ? input : input.url;
    const u = new URL(url, location.href);
    const i = u.pathname.indexOf("/api/");
    if (i < 0) return realFetch(input, opt);
    const path = u.pathname.slice(i + 5);
    const method = ((opt && opt.method) || "GET").toUpperCase();
    let body = null;
    try { body = opt && opt.body ? JSON.parse(opt.body) : null; } catch (e) { body = null; }
    let res;
    try { res = handle(method, path, u.searchParams, body); } catch (e) { res = [500, { error: "demo: " + e.message }]; }
    const [status, obj, delay] = res;
    const wait = delay !== undefined ? delay : 120 + Math.random() * 180;
    return new Promise((ok) => setTimeout(() => ok(new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } })), wait));
  };
  window.demoNav = function () {
    if (window.toast) window.toast("Demo: downloads and links to the phone's apps are switched off in the demo.");
  };
  window.DEMO_MSG = MSG;
  // the pretend SuperStation's password is filled in, so Connect works straight away
  addEventListener("DOMContentLoaded", () => setTimeout(() => {
    const pw = document.getElementById("pass"), h = document.getElementById("host");
    if (h && !h.value) h.value = "192.168.1.50";
    if (pw && !pw.value) pw.value = "1";
  }, 300));
})();
