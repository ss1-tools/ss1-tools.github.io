#!/usr/bin/env python3
"""Builds demo/data.json for the SS1 Tool demo from responses recorded off the stand-in SuperStation,
dressed up as a real SS1 (ARM board, 256 GB card, NVMe in the dock, home network)."""
import json, glob, os, re, sys, base64, time

SRC = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(SRC, "data.json")

def fix(s):
    s = s.replace("127.0.0.1:2222", "192.168.1.50").replace("127.0.0.1", "192.168.1.50")
    s = s.replace("/tmp/claude-0/backup/sdcard", "C:\\\\Users\\\\Player\\\\SS1Tool\\\\backup\\\\sdcard")
    s = s.replace("/tmp/claude-0/backups", "C:\\\\Users\\\\Player\\\\SS1Tool\\\\backups")
    s = s.replace("192.0.2.1", "192.168.1.1").replace("192.0.2.2", "192.168.1.20")
    s = re.sub(r"/media/usb9\b", "/media/usb0", s).replace("usb9", "usb0")
    return s

D = {}
for f in glob.glob(os.path.join(SRC, "g_*.json")):
    k = os.path.basename(f)[2:-5].replace("_", "/")
    try:
        D[k] = json.loads(fix(open(f).read()))
    except Exception:
        pass
P = {}
for f in glob.glob(os.path.join(SRC, "p_*.json")):
    P[os.path.basename(f)[2:-5]] = json.loads(fix(open(f).read()))

# names with underscores that the replace above split
for a, b in [("debug-report", "debug-report"), ("setup-status", "setup-status")]:
    pass
D["ss1backup/status"] = D.get("ss1backup/status", {})
now = int(time.time())

# ---------------- connect / status
D["config"] = {"connected": False, "host": "192.168.1.50", "user": "root", "version": "{{VERSION}}"}
D["devices"] = [{"name": "SuperStation One", "host": "192.168.1.50", "user": "root"}]
D["discover"] = {"devices": [{"ip": "192.168.1.50", "name": "MiSTer", "banner": "SSH-2.0-OpenSSH_9.7", "likely": True,
                              "saved_as": "SuperStation One", "network": "192.168.1.0/24"}],
                 "networks": ["192.168.1.0/24"], "port": 22, "count": "1"}
st = {
    "host": "192.168.1.50", "kernel": "5.15.1-MiSTer", "misterver": "260603", "cm": "1",
    "fat_space": "201G free of 238G", "overlap_tools": "0", "samba": "enabled", "smbd": "running",
    "scraper": "1", "update_linux": "false",
    "script_sd_integrity.sh": "1", "script_shutdown.sh": "1", "script_ss1_debug_report.sh": "1", "script_update_all.sh": "1",
    "drivespace_usb0": "176G free of 233G", "drivegen_usb0": "gen3|WDC WDS250G2B0C", "drivemodel_usb0": "WDC WDS250G2B0C",
    "drivepower_usb0": "4.6", "drivefw_usb0": "211070WD",
}
for k, v in {"critical_warning": 0, "temperature_c": 41, "available_spare": 100, "spare_threshold": 10, "percentage_used": 2,
             "data_read_units": 18734211, "data_written_units": 6120934, "power_cycles": 412, "power_on_hours": 1388,
             "unsafe_shutdowns": 37, "media_errors": 0, "error_log_entries": 0}.items():
    st[f"drivesmart_usb0_{k}"] = str(v)
D["status"] = st
D["connect"] = st
D["drives"] = [{"path": "/media/fat", "fs": "exfat", "label": "SD card", "free": "201G", "size": "238G"}, {"path": "/media/usb0", "fs": "exfat", "label": "USB/NVMe usb0", "free": "176G", "size": "233G"}]
D["targets"] = [{"fs": "exfat", "path": "/media/fat"}, {"fs": "exfat", "path": "/media/usb0"}]

# ---------------- dashboard (the mock varies the numbers on every refresh)
D["dash"] = {
    "core": "SNES", "load": "0.31 0.27 0.22", "cpu_pct": 18.0,
    "cpu": {"model": "ARMv7 Processor rev 0 (v7l)", "hardware": "Altera SOCFPGA", "bogomips": "1594.36", "cores": 2, "threads": 2,
            "list": [{"core": "0", "id": "0", "online": True, "pct": 22}, {"core": "1", "id": "1", "online": True, "pct": 14}]},
    "mem_total_kb": 1015880, "mem_used_kb": 214532,
    "disks": [{"mount": "/media/fat", "label": "SD card", "total_kb": 249561088, "used_kb": 38797312, "avail_kb": 210763776},
              {"mount": "/media/usb0", "label": "USB/NVMe usb0", "total_kb": 244193280, "used_kb": 59768832, "avail_kb": 184424448}],
    "io": [{"dev": "mmcblk0", "label": "SD card", "read_bps": 0, "write_bps": 0},
           {"dev": "sda", "label": "USB/NVMe drive (sda)", "read_bps": 0, "write_bps": 0}],
    "i2c": ["i2c-0: 0x1a (in use)", "i2c-1: 0x39", "i2c-2: no devices"],
    "ips": [{"iface": "eth0", "addr": "192.168.1.50"}, {"iface": "wlan0", "addr": "192.168.1.51"}],
    "nets": [{"iface": "eth0", "rx": 1843302912, "tx": 92348211, "rx_bps": 0, "tx_bps": 0},
             {"iface": "wlan0", "rx": 2283411, "tx": 812204, "rx_bps": 0, "tx_bps": 0}],
    "temp": None, "uptime_s": 8040,
    "procs": """top - 19:42:07 up  2:14,  0 users,  load average: 0.31, 0.27, 0.22
Tasks:  71 total,   1 running,  70 sleeping,   0 stopped,   0 zombie
%Cpu(s): 12.4 us,  5.6 sy,  0.0 ni, 81.5 id,  0.0 wa,  0.0 hi,  0.5 si,  0.0 st
MiB Mem :    992.1 total,    670.3 free,    209.5 used,    112.3 buff/cache
MiB Swap:      0.0 total,      0.0 free,      0.0 used.    756.1 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
  612 root      20   0   52184  18240   6012 S  14.6   1.8  18:22.41 MiSTer
  640 root      20   0  118932  41216  12844 S   4.0   4.1   4:51.07 ConsoleMode_arm
  431 root      20   0   12632   5524   4716 S   0.7   0.5   0:02.18 sshd
  388 root      20   0   34512  11268   8932 S   0.3   1.1   0:04.92 smbd
  402 root      20   0    7380   3128   2744 S   0.0   0.3   0:00.61 wpa_supplicant
  415 root      20   0    6224   2380   2060 S   0.0   0.2   0:00.33 dhcpcd
  377 root      20   0    9024   3740   3268 S   0.0   0.4   0:00.12 bluetoothd
    1 root      20   0    2948   1784   1660 S   0.0   0.2   0:01.04 init
""",
}
# keep any extra keys the real dashboard sends
for k, v in D.get("dash", {}).items():
    pass

# ---------------- network
D["net/ethernet"] = {"default": "eth0", "dns": "192.168.1.1", "ssh_ip": "192.168.1.50",
    "ethernet": [{"Name": "eth0", "Kind": "eth", "State": "up", "Carrier": True, "Speed": 1000, "Duplex": "full",
                  "MAC": "02:4d:69:53:54:01", "Driver": "stmmaceth", "USB": False, "IPv4": "192.168.1.50", "Mask": "255.255.255.0",
                  "Gateway": "192.168.1.1", "DHCP": "dhcp", "RxBytes": 1843302912, "TxBytes": 92348211, "RxErrors": 0, "TxErrors": 0,
                  "RxDropped": 0, "LinkDrops": 0, "MTU": 1500, "Default": True, "SSH": True, "MaxSpeed": 1000, "PartnerMax": 1000, "AutoNeg": True}],
    "wifi": [{"Name": "wlan0", "IPv4": "192.168.1.51"}]}
D["wifi/status"] = {"configured": True, "country": "US", "eth_ip": "192.168.1.50", "ssid": "HomeNetwork", "wifi_ip": "192.168.1.51", "wlan": "wlan0"}
D["wifi/info"] = {"country": "US", "drives": [{"path": "E:\\", "label": "MiSTer_Data", "mister": True, "size": "238"}]}
D["wifi/link"] = {"connected": True, "iface": "wlan0", "ssid": "HomeNetwork", "freq": 5745, "channel": 149, "band": "5 GHz",
                  "signal": -51, "rx_mbit": 433.3, "tx_mbit": 390.0}
D["wifi/nearby"] = {"networks": [
    {"ssid": "HomeNetwork", "signal": -51, "freq": 5745, "channel": 149, "band": "5 GHz", "secure": True},
    {"ssid": "HomeNetwork", "signal": -44, "freq": 2437, "channel": 6, "band": "2.4 GHz", "secure": True},
    {"ssid": "Apartment 4B", "signal": -67, "freq": 2412, "channel": 1, "band": "2.4 GHz", "secure": True},
    {"ssid": "Guest WiFi", "signal": -71, "freq": 5180, "channel": 36, "band": "5 GHz", "secure": False},
    {"ssid": "Upstairs", "signal": -78, "freq": 2462, "channel": 11, "band": "2.4 GHz", "secure": True},
    {"ssid": "DIRECT-Printer", "signal": -83, "freq": 2437, "channel": 6, "band": "2.4 GHz", "secure": True}]}
D["wifi/scan"] = [{"ssid": "HomeNetwork", "signal": 92, "security": "WPA2-Personal", "open": False, "bands": "2.4 + 5 GHz", "saved": True},
                  {"ssid": "Apartment 4B", "signal": 61, "security": "WPA3-Personal", "open": False, "bands": "2.4 GHz", "saved": False},
                  {"ssid": "Guest WiFi", "signal": 48, "security": "Open", "open": True, "bands": "5 GHz", "saved": False},
                  {"ssid": "Upstairs", "signal": 33, "security": "WPA2-Personal", "open": False, "bands": "2.4 GHz", "saved": False}]

# ---------------- devices
def dev(id, parent, kind, maker, product, vid, pid, speed="12", usb="2.00", **kw):
    d = {"id": id, "parent": parent, "vid": vid, "pid": pid, "maker": maker, "product": product, "speed": speed, "usb_version": usb,
         "classes": [], "hub": kind == "hub", "ports": kw.pop("ports", 0), "root": False, "kind": kind, "location": kw.pop("location", ""),
         "role": kw.pop("role", ""), "drivers": kw.pop("drivers", []), "storage": kw.pop("storage", []), "inputs": kw.pop("inputs", [])}
    d.update(kw)
    return d
mapping = {"custom": True, "menu": "input_2dc8_3106_v3.map", "cores": ["SNES", "Genesis"], "files": ["input_2dc8_3106_v3.map"], "fallback": "custom"}
pad = dev("1-1.2", "1-1", "controller", "8BitDo", "8BitDo Pro 2", "2dc8", "3106", location="superstation", drivers=["xpad"],
          inputs=[{"name": "8BitDo Pro 2", "bus": "usb", "vid": "2dc8", "pid": "3106", "type": "controller", "buttons": 15, "keys": 0, "axes": 8, "mapping": mapping}])
kbd = dev("1-1.3", "1-1", "keyboard", "Logitech", "USB Receiver", "046d", "c52b", location="superstation", drivers=["usbhid"],
          inputs=[{"name": "Logitech USB Receiver", "bus": "usb", "vid": "046d", "pid": "c52b", "type": "keyboard", "buttons": 0, "keys": 104, "axes": 0}])
wifibt = dev("1-1.4", "1-1", "wifibt", "Realtek", "802.11ac WLAN Adapter", "0bda", "c820", speed="480", location="superstation",
             role="Built into the SuperStation", drivers=["rtw88_8821cu", "btusb"])
nvme = dev("1-1.1.1", "1-1.1", "storage", "JMicron", "JMS583 NVMe bridge", "152d", "0583", speed="480", location="dock", role="Dock NVMe slot",
           drivers=["uas"], storage=["sda (250 GB) at /media/usb0"])
ir = dev("1-1.1.2", "1-1.1", "ir", "SuperStation", "TV remote receiver", "1d57", "ad03", location="dock", role="The dock's TV remote", drivers=["usbhid"])
dock = dev("1-1.1", "1-1", "hub", "Genesys Logic", "USB2.0 Hub", "05e3", "0610", speed="480", ports=4, location="dock", role="Dock hub", children=[nvme, ir])
ss1hub = dev("1-1", "usb1", "hub", "Genesys Logic", "USB2.0 Hub", "05e3", "0610", speed="480", ports=4, location="superstation", role="SuperStation hub",
             children=[dock, pad, kbd, wifibt])
root = dev("usb1", "", "hub", "Linux", "DWC OTG Controller", "1d6b", "0002", speed="480", ports=1, root=True, children=[ss1hub])
root["root"] = True
D["usb"] = {"roots": [root], "counts": {"hub": 2, "controller": 1, "keyboard": 1, "wifibt": 1, "storage": 1, "ir": 1}, "devices": 5,
            "warnings": [], "dock": True, "labels": {"1-1.2": "Player 1"}, "other_inputs": [{"name": "8BitDo Ultimate 2C", "bus": "bluetooth",
            "vid": "2dc8", "pid": "301c", "source": "bluetooth", "type": "controller", "buttons": 13, "keys": 0, "axes": 6}],
            "map_files": ["input_2dc8_3106_v3.map", "input_045e_028e_v3.map"]}
D["bt"] = {"adapters": ["5C:F3:70:9A:21:44"], "controller": "5C:F3:70:9A:21:44", "daemon": "running", "hci": True, "persistent": True, "powered": "yes",
           "dir": "/media/fat/linux/bluetooth",
           "devices": [{"mac": "E4:17:D8:3A:10:6C", "adapter": "5C:F3:70:9A:21:44", "name": "8BitDo Ultimate 2C", "kind": "controller", "connected": True,
                        "trusted": True, "blocked": False, "paired": True, "vid": "2dc8", "pid": "301c", "mtime": now - 86400 * 3},
                       {"mac": "98:B6:E9:42:7D:21", "adapter": "5C:F3:70:9A:21:44", "name": "Wireless Controller", "kind": "controller", "connected": False,
                        "trusted": True, "blocked": False, "paired": True, "vid": "054c", "pid": "05c4", "mtime": now - 86400 * 40}]}
D["bt/backups"] = {"dir": "C:\\Users\\Player\\SS1Tool\\backups\\bluetooth", "backups": []}
D["controllers"] = {"user_db_lines": 0, "files": [{"name": "input_2dc8_3106_v3.map", "path": "/media/fat/config/inputs/input_2dc8_3106_v3.map", "size": 1024, "mtime": now - 86400 * 9}],
    "controllers": [{"name": "8BitDo Pro 2", "vid": "2dc8", "pid": "3106", "source": "usb", "where": "superstation", "port": "1-1.2", "buttons": 15, "axes": 8, "mapping": mapping},
                    {"name": "8BitDo Ultimate 2C", "vid": "2dc8", "pid": "301c", "source": "bluetooth", "where": "", "port": "", "buttons": 13, "axes": 6,
                     "mapping": {"custom": False, "fallback": "database", "db_name": "8BitDo Ultimate 2C Wireless"}}]}

# ---------------- BIOS: PSX present and good, the rest as the stand-in found them
b = D.get("bios", {"systems": []})
for s in b.get("systems", []):
    if s["system"] == "PSX":
        s["status"] = "ok"; s["games"] = 3
        for x in s["bios"]:
            x["status"] = "ok"; x["found"] = x.get("expected", "")
    if s["system"] in ("NES", "SNES", "Genesis", "GBA", "GAMEBOY"):
        s["games"] = {"NES": 4, "SNES": 2, "Genesis": 4, "GBA": 2, "GAMEBOY": 2}[s["system"]]
D["bios"] = b

# ---------------- files
D["nightly/status"] = {"at_boot": True, "clock": "19:42", "crond": True, "drives": ["/media/usb0"], "enabled": True, "running": True,
                       "hour": 3, "drive": "/media/usb0", "last": "2026-10-15 03:07:41 saves backed up to /media/usb0/SS1_backup/saves/4-Thu (rsync code 0)"}
D["ss1backup/status"] = {"drives": [{"path": "/media/usb0", "free_kb": 184424448, "last": "2026-10-12 21:15 (SS1 Tool 1.28.13)"}],
                         "sd_used_kb": 38797312, "job": D.get("ss1backup/progress", {})}
D["cifs"]["config"] = {"SERVER": "192.168.1.20", "SHARE": "Games", "USERNAME": "player", "LOCAL_DIR": "cifs", "MOUNT_AT_BOOT": "true", "WAIT_FOR_SERVER": "false"}
D["cifs"].update({"installed": True, "kernel_cifs": True, "version": "2024.04.03", "umount_installed": True, "umount_version": "2024.04.03",
                  "has_password": True, "settings_in": "ini", "boot_enabled": True, "boot_supported": True, "boot_via": "user-startup.sh",
                  "mounts": [{"source": "//192.168.1.20/Games", "target": "/media/fat/cifs", "temp": False}]})
D["debug-report"] = {"ok": True, "name": "SS1_debug_report_20261015_194210.txt", "remote": "/media/fat/SS1_debug_report_20261015_194210.txt",
    "findings": ["PASS: MiSTer, Linux and the bootloader files are all present",
                 "PASS: SD card partition table and exFAT boot region are healthy",
                 "PASS: /media/usb0 WDC WDS250G2B0C is PCIe Gen 3 (safe in the SS1 dock)",
                 "PASS: NVMe health: 41 C, 2% worn, no media errors",
                 "INFO: WiFi HomeNetwork, signal -51 dBm (good), 5 GHz channel 149",
                 "INFO: Console Mode installed",
                 "PASS: no storage errors in kernel log since boot"]}
D["advisory"] = D.get("advisory") or {"state": "safe"}
D["pcshare"] = {"config": {"path": "C:\\SS1_Games", "name": "ROMS", "user": "ss1user"}, "created": False, "ifindex": 4, "pc_ip": "192.168.1.20",
                "ss1": "192.168.1.50", "supported": True}

# diag outputs on a real SS1
DIAG = {
 "quick": """Disk: /dev/mmcblk0
PASS: MBR partition table, 2 partitions, no overlap
Partition: /dev/mmcblk0p1  (mounted fs: exfat)
PASS: exFAT boot region checksums match (main and backup)
PASS: no storage errors in kernel log since boot
RESULT: PASS
""",
 "windows": """exFAT volume dirty flag: clear
PASS: Windows won't offer to scan and fix this card
""",
 "partition": "Disk: /dev/mmcblk0\nPASS: MBR partition table\n  1: exFAT  238.4 GB  start 2048\n  2: type a2 (MiSTer bootloader)  1 MB\nPASS: partitions don't overlap\n",
 "boot": "PASS: exFAT boot region checksums match (main and backup)\n",
 "kernel": "PASS: no storage errors in kernel log since boot\nINFO: 2 USB resets during start-up (WiFi adapter), normal\n",
 "drive": """Drive: /dev/sda (WDC WDS250G2B0C, rated max 4.6 W)
PASS: PCIe Gen 3 - safe in the SS1 dock
""",
 "health": """Drive: /dev/sda (WDC WDS250G2B0C)
Temperature:          41 C
Life used:            2%
Spare blocks:         100% (warning below 10%)
Media errors:         0
Unsafe shutdowns:     37
Power-on hours:       1388
Data read:            9.6 TB
Data written:         3.1 TB
PASS: the drive reports no health problems
""",
 "speed": """Drive: /dev/sda - reading for about 3 seconds (nothing is written)
 Timing buffered disk reads: 112 MB in  3.02 seconds =  37.09 MB/sec
PASS: 37.09 MB/s - the SuperStation's USB is USB 2.0, so about 30-40 MB/s is the most any drive reaches
""",
 "fscheck": """Drive: /media/usb0 (/dev/sda1, exfat) - check only, no changes
Unmounted /media/usb0
----- fsck.exfat -----
exfatprogs version : 1.0.4
/dev/sda1: clean. directories 214, files 3871
Mounted /media/usb0 again
PASS: no file system errors found
""",
 "fsrepair": """Demo: a repair unmounts the drive, runs fsck.exfat -y and mounts it again.
Nothing was changed: this is the SS1 Tool demo.
""",
}
D["_diag"] = DIAG
D["_fs"] = {k: v for k, v in P.items() if k.startswith("fs_")}
D["_ini"] = P.get("ini")
D["_savefiles"] = {k[10:]: v for k, v in P.items() if k.startswith("savefiles_")}
D["_dmesg"] = {"text": """[    3.412010] usb 1-1.1.1: new high-speed USB device number 4 using dwc2
[    3.581224] usb-storage 1-1.1.1:1.0: USB Mass Storage device detected
[    3.602781] scsi host0: uas
[    4.120337] sd 0:0:0:0: [sda] 488397168 512-byte logical blocks: (250 GB/233 GiB)
[    4.188410]  sda: sda1
[    4.226003] sd 0:0:0:0: [sda] Attached SCSI disk
[    5.031876] rtw88_8821cu 1-1.4:1.0: Firmware version 24.11.0
[    7.902118] wlan0: authenticated
[    7.910552] wlan0: associated
[    8.004211] stmmaceth ff702000.ethernet eth0: Link is Up - 1Gbps/Full - flow control rx/tx
[   12.880433] input: 8BitDo Pro 2 as /devices/platform/soc/ffb40000.usb/usb1/1-1/1-1.2/input/input3
[   15.402871] Bluetooth: hci0: RTL: fw version 0x829a7644
[   18.114002] input: 8BitDo Ultimate 2C as /devices/virtual/misc/uhid/input5
"""}
D["_shots"] = sorted(os.path.basename(p) for p in glob.glob("/media/fat/screenshots/*/*.png"))
for k in ["dash/dmesg", "fs/list", "ini", "kbd", "diag", "samba", "wizard/card/overlap", "wizard/card/samba", "wizard/card/scraper",
          "wizard/card/scripts", "wizard/card/status", "wizard/card/updateall"]:
    D.pop(k, None)
D["flash/admin"] = {"admin": True}
D["flash/disks"] = [{"Number": 2, "FriendlyName": "Generic STORAGE DEVICE", "Size": 255869321216, "BusType": "USB"}]
D["flash/images"] = [
    {"kind": "consolemode", "label": "Console Mode", "name": "SuperStation_ConsoleMode.zip", "tag": "latest", "release": "Latest release", "url": "", "size": 1288490188, "published": "2026-10-01"},
    {"kind": "regular", "label": "Regular", "name": "SuperStation_Regular.zip", "tag": "latest", "release": "Latest release", "url": "", "size": 1181116006, "published": "2026-10-01"}]
D["flash/progress"] = {"running": False, "phase": "", "done": 0, "total": 0, "message": "", "error": "", "image": ""}
D["padtest/state"] = {"connected": True, "error": "", "starting": False}
D["update"].update({"current": "{{VERSION}}", "latest": "{{VERSION}}", "page": "https://github.com/f3bandit/ss1_tool/releases/tag/{{VERSION}}", "available": False, "mode": "notify", "can_write": True, "busy": "", "downloaded": False})
D["setup-status"].update({"samba": "enabled", "smbd": True, "update_all": "2026.10.02",
    "scripts": {k: "current" for k in D["setup-status"]["scripts"]}})
# MiSTer settings files: the real text from the stand-in card
D["_ini"] = {i["id"]: open(i["id"]).read() for i in D.get("ini/list", []) if os.path.exists(i["id"])}
# file manager tree (names and sizes only)
T = {}
skip = {"SS1_debug_report", "sd_integrity.log", "yc.txt", "test1", "lost+found"}
for real, shown in [("/media/fat", "/media/fat"), ("/media/usb9", "/media/usb0")]:
    for dp, dns, fns in os.walk(real):
        rel = dp[len(real):]
        if rel.count("/") >= 4:
            dns[:] = []; continue
        dns[:] = [d for d in dns if d not in skip and not d.startswith(".")]
        ents = [{"name": d, "dir": True, "size": 0, "mtime": int(os.path.getmtime(os.path.join(dp, d)))} for d in sorted(dns)]
        ents += [{"name": f, "dir": False, "size": os.path.getsize(os.path.join(dp, f)), "mtime": int(os.path.getmtime(os.path.join(dp, f)))}
                 for f in sorted(fns) if not any(f.startswith(x) for x in skip) and not f.startswith(".")]
        T[shown + rel] = ents
D["_tree"] = T
json.dump(D, open(OUT, "w"), indent=0)
print("wrote", OUT, len(D), "entries")
