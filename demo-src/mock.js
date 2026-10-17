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

  // ---- SNAC controller test: the memory card core reading both front ports (a DualShock with a
  // card in port 1, a digital pad in port 2), and the PSX core's SNAC settings
  const SN = { test: null, psx: { pad1: 10, pad2: 0, memcard: 1, multitap: 0, exists: true } };
  const PSX_PADS = ["Dualshock (USB)", "Off", "Digital (USB)", "Analog (USB)", "GunCon", "NeGcon", "Wheel-NegCon", "Wheel-Analog", "Mouse", "Justifier", "SNAC", "Analog Joystick", "Pop'n"];
  function snacTestState() {
    if (!SN.test) return { on: false, running: false, error: "" };
    const t = Date.now() - SN.test, a = t / 700;
    if (t < 2500) return { on: true, running: false, starting: true, error: "" };
    const dsHas = ["a", "b", "x", "y", "back", "start", "l1", "r1", "l2", "r2", "l3", "r3", "up", "down", "left", "right", "ls", "rs"];
    const p1 = { id: "snac1", name: "PlayStation controller in port 1", db_name: "", kind: "snaccore", vidpid: ":", ctl: pad(dsHas, t), extra: [], held: [],
      axes: [{ name: "X", v: Math.cos(a) * 0.9 }, { name: "Y", v: Math.sin(a) * 0.9 }, { name: "RX", v: 0 }, { name: "RY", v: -0.8 }] };
    p1.ctl.ls = { has: true, on: true, x: Math.cos(a) * 0.9, y: Math.sin(a) * 0.9 };
    p1.ctl.rs = { has: true, on: true, x: 0, y: -0.8 };
    const digHas = ["a", "b", "x", "y", "back", "start", "l1", "r1", "l2", "r2", "up", "down", "left", "right"];
    const p2 = { id: "snac2", name: "PlayStation controller in port 2", db_name: "", kind: "snaccore", vidpid: ":", ctl: pad(digHas, t + 2000, true), extra: [], held: [], axes: [] };
    return { on: true, running: true, error: "", age_ms: 40,
      ports: [{ port: 1, present: true, card: 1, switched: true, type: "Analog (DualShock)", id: "73", analog: true, snac: [p1] },
              { port: 2, present: true, card: 0, switched: true, type: "Digital pad", id: "41", analog: false, snac: [p2] }],
      wiring: { port1: [3, 4], port2: [3, 4], pin6: [], pin6_answer: false, pin6_id: "00" } };
  }
  function snacHandle(method, path, body) {
    switch (path) {
      case "snactest/start":
        if (!S.connected) return [409, { error: "not connected to a SuperStation" }];
        SN.test = Date.now(); return [200, { ok: true }];
      case "snactest/state": return [200, snacTestState()];
      case "snactest/stop": SN.test = null; return [200, { ok: true }];
      case "psxcfg/state":
        if (!S.connected) return [409, { error: "not connected to a SuperStation" }];
        return [200, { settings: clone(SN.psx), running: false, pads: PSX_PADS, multitaps: ["Off", "Port 1: 4 x Digital", "Port 1: 4 x Analog"], file: "/media/fat/config/PSX.CFG",
          cores: ["_Console/PSX_20260807.rbf", "_Other/PSX2XCPU_20260413.rbf", "_RA_Cores/Cores/PSX.rbf"] }];
      case "psxcfg/save": {
        const b = body || {};
        SN.psx = { pad1: b.pad1 | 0, pad2: b.pad2 | 0, memcard: b.memcard ? 1 : 0, multitap: b.multitap | 0, exists: true };
        return [200, { ok: true, message: "Demo: the PSX settings would be saved (a copy of PSX.CFG is kept first). Nothing was changed.", settings: clone(SN.psx), running: false }];
      }
    }
    return null;
  }

  // ---- memory cards: a pretend library and a pretend card in front port 1
  const MC = { lib: null, job: null, jobId: 0, answer: null, askId: 0 };
  function mcLib() {
    if (!MC.lib) MC.lib = clone((D._mc && D._mc.cards) || []);
    return MC.lib;
  }
  const mcFree = (c) => 15 - c.saves.reduce((a, s) => a + s.blocks.length, 0);
  function mcCardsList() {
    return mcLib().map((c) => ({ name: c.name, created: now() - 86400 * 14, real: c.real, versions: c.versions.slice(),
      latest: c.versions[c.versions.length - 1], saves: c.saves.length, free: mcFree(c) }));
  }
  const mcFind = (n) => mcLib().find((c) => c.name === n);
  const mcVer = () => { const d = new Date(), z = (v) => String(v).padStart(2, "0");
    return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}_${z(d.getHours())}${z(d.getMinutes())}${z(d.getSeconds())}`; };
  function mcPlace(card, s) { // the save goes into the first free blocks
    const used = new Set(); card.saves.forEach((x) => x.blocks.forEach((b) => used.add(b)));
    const free = []; for (let b = 1; b <= 15 && free.length < s.blocks.length; b++) if (!used.has(b)) free.push(b);
    if (free.length < s.blocks.length) throw new Error(`the save needs ${s.blocks.length} blocks, the card has ${15 - used.size} free`);
    const n = clone(s); n.blocks = free; n.slot = free[0]; return n;
  }
  function mcEdit(b) {
    const L = mcLib(), src = mcFind(b.name);
    switch (b.op) {
      case "new": { if (mcFind(b.new_name)) throw new Error(`there's already a card called "${b.new_name}"`); L.push({ name: b.new_name, real: false, versions: [mcVer()], saves: [] }); return { ok: true, name: b.new_name }; }
      case "rename": src.name = b.new_name; return { ok: true, name: b.new_name };
      case "delete": L.splice(L.indexOf(src), 1); return { ok: true };
      case "delversion": if (src.versions.length < 2) throw new Error("a card keeps at least one version: delete the card instead"); src.versions = src.versions.filter((v) => v !== b.version); return { ok: true };
      case "copy": case "move": {
        const to = mcFind(b.to); if (!to) throw new Error("pick another card to copy to");
        const pick = src.saves.filter((s) => b.slots.includes(s.slot));
        pick.forEach((s) => { if (to.saves.some((x) => x.name === s.name)) throw new Error(`the card already has this save (${s.name})`); to.saves.push(mcPlace(to, s)); });
        to.versions.push(mcVer());
        if (b.op === "move") { src.saves = src.saves.filter((s) => !b.slots.includes(s.slot)); src.versions.push(mcVer()); }
        return { ok: true };
      }
      case "remove": src.saves = src.saves.filter((s) => !b.slots.includes(s.slot)); src.versions.push(mcVer()); return { ok: true };
    }
    throw new Error("unknown change");
  }
  // a job runs on a timeline: reading (green), maybe a question, writing (blue), then 5 s before going back
  function mcStart(b) {
    const port = mcFind("Living room card");
    const j = { id: ++MC.jobId, action: b.action, t0: Date.now(), menu: b.menu, log: [], ask: "", askId: 0, writeT: 0, blue: [], done: false };
    const titles = { backup: "Back up the memory card", verify: "Check the memory card against " + b.name, restore: "Put " + b.name + " on the memory card" };
    j.title = titles[b.action] || `Copy ${(b.slots || []).length} save(s) to the memory card`;
    if (b.action === "copy" || b.action === "restore") {
      const src = mcFind(b.name);
      j.saves = src.saves.filter((s) => b.action === "restore" || (b.slots || []).includes(s.slot));
      const dup = j.saves.find((s) => port && port.saves.some((x) => x.name === s.name));
      if (b.action === "copy" && dup) j.question = `The save "${dup.title}" (${dup.product}) on the card in front port 1 is identical to the one you're copying. Overwrite it anyway?`;
      j.saves.forEach((s) => s.blocks.forEach((bl) => { j.blue.push(bl); for (let f = 0; f < 64; f++) j.blue.push(bl * 64 + f); }));
    }
    MC.job = j; MC.answer = null;
    return j;
  }
  function mcSnap() {
    const j = MC.job;
    if (!j) return { id: 0, running: false, title: "", step: "", map: "0".repeat(1024), log: [] };
    const t = (Date.now() - j.t0) / 1000, writes = j.action === "copy" || j.action === "restore";
    const rd = 6, label1 = writes ? "Step 1 of 2: reading the card (safety backup). Nothing is written yet" : j.action === "verify" ? "Checking the card" : "Reading the card";
    const out = { id: j.id, running: true, title: j.title, job: writes ? 3 : j.action === "verify" ? 2 : 1, phase: 3, sector: 0, done: 0, ok: 0, retried: 0, failed: 0, differ: 0, written: 0,
      result: 0, message: "", error: "", card: "", version: "", ask: "", ask_id: 0, log: ["Preparing the files on the SuperStation", "Starting the memory card core"] };
    const fill = (n, c) => "1".repeat(n).replace(/1/g, c) + "0".repeat(1024 - n);
    if (t < 1) { out.step = "Starting the memory card core"; out.map = "0".repeat(1024); return out; }
    if (t < 1 + rd) { const n = Math.floor(((t - 1) / rd) * 1024); out.step = label1; out.sector = n; out.done = out.ok = n; out.map = fill(n, "1"); out.log.push(label1); return out; }
    out.log.push(label1, "Copying the backup to this PC", 'Recognised the card as "Living room card" (100% of its saves match)');
    let tEnd = 1 + rd;
    if (writes) {
      if (j.question && MC.answer === null) {
        out.phase = 5; out.step = "Waiting for your answer"; out.map = fill(1024, "1"); out.done = out.ok = 1024; out.ask = j.question; out.ask_id = 1; out.log.push("Asking: " + j.question);
        return out;
      }
      if (j.question && !j.writeT) { j.writeT = Date.now(); j.answered = MC.answer; }
      if (!j.writeT) j.writeT = j.t0 + tEnd * 1000;
      const tw = (Date.now() - j.writeT) / 1000, wd = 4;
      if (j.question && j.answered === false) { out.log.push("Answer: no", "The card already has all of that: nothing to write"); j.nothing = true; tEnd = (j.writeT - j.t0) / 1000; }
      else {
        if (j.question) out.log.push("Answer: yes");
        out.log.push("Step 2 of 2: writing to the card");
        if (tw < wd) { const n = Math.floor((tw / wd) * 1024); const m = fill(n, "1").split(""); j.blue.forEach((s) => { if (s < n) m[s] = "5"; });
          out.step = "Step 2 of 2: writing to the card"; out.sector = n; out.done = n; out.written = j.blue.filter((s) => s < n).length; out.ok = n - out.written; out.map = m.join(""); return out; }
        tEnd = (j.writeT - j.t0) / 1000 + wd;
      }
    }
    out.phase = 5; // the core's report is written
    const m = fill(1024, "1").split(""); if (writes && !j.nothing) j.blue.forEach((s) => (m[s] = "5"));
    out.map = m.join(""); out.done = 1024; out.written = writes && !j.nothing ? j.blue.length : 0; out.ok = 1024 - out.written;
    const left = j.menu ? 5 - Math.floor(t - tEnd) : 0;
    if (left > 0) { out.step = `Finished: going back in ${left} s`; return out; }
    if (!j.done) { // apply the result to the library once
      j.done = true;
      const port = mcFind("Living room card");
      if (writes && !j.nothing && port) {
        if (j.action === "restore") port.saves = clone(j.saves);
        else j.saves.forEach((s) => { const i = port.saves.findIndex((x) => x.name === s.name); if (i >= 0) port.saves.splice(i, 1); port.saves.push(mcPlace(port, s)); });
        port.versions.push(mcVer());
      }
    }
    out.running = false; out.step = "";
    out.message = j.nothing ? "Nothing to write: the card already has it" : writes ? "The card was updated and checked" : j.action === "verify" ? "The card matches" : "Done";
    out.result = writes ? 9 : 1; out.card = j.action === "verify" ? "" : "Living room card";
    out.log = out.log.concat(j.menu ? ["Going back to Console Mode", "Console Mode is back"] : []).concat(["Demo: nothing was read or written. This is sample progress"]);
    return out;
  }
  function mcHandle(method, path, q, body) {
    switch (path) {
      case "mc/state":
        return [200, { library: mcCardsList(), dir: "C:\\Users\\Player\\SS1Tool\\memcards", installed: S.connected ? "SS1_MemCard_20261017.rbf" : undefined,
          update: false, latest: { tag: "v1.0", name: "SS1_MemCard_20261017.rbf", unstable: false, built: "2026-10-17T00:23:38Z" }, core: S.connected ? "MENU" : undefined, console_mode: S.connected ? true : undefined, job: mcSnap() }];
      case "mc/progress": return [200, mcSnap()];
      case "mc/card": {
        const c = mcFind(q.get("name"));
        if (!c) return [404, { error: "no such card" }];
        return [200, { card: { formatted: true, saves: clone(c.saves), free: mcFree(c) }, versions: c.versions.slice(), meta: { real: c.real } }];
      }
      case "mc/run":
        if (!S.connected) return [409, { error: "not connected to a SuperStation" }];
        if (MC.job && mcSnap().running) return [409, { error: "a memory card job is already running" }];
        mcStart(body || {}); return [200, { ok: true }];
      case "mc/answer": MC.answer = !!(body && body.yes); return [200, { ok: true }];
      case "mc/stop": MC.job = null; return [200, { ok: true }];
      case "mc/edit": try { return [200, mcEdit(body || {})]; } catch (e) { return [400, { error: e.message }]; }
      case "mc/install": return [400, { error: "Demo: the core would be downloaded from GitHub and copied to /media/fat/_Utility. Nothing was changed." }];
      case "mc/open": return [200, { ok: true }];
    }
    return null;
  }

  function handle(method, path, q, body) {
    if (path.startsWith("mc/")) { const r = mcHandle(method, path, q, body); if (r) return r; }
    if (path.startsWith("snactest/") || path.startsWith("psxcfg/")) { const r = snacHandle(method, path, body); if (r) return r; }
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
