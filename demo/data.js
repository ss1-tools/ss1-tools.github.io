window.DEMO_DATA={
"dash": {
"core": "SNES",
"load": "0.31 0.27 0.22",
"cpu_pct": 18.0,
"cpu": {
"model": "ARMv7 Processor rev 0 (v7l)",
"hardware": "Altera SOCFPGA",
"bogomips": "1594.36",
"cores": 2,
"threads": 2,
"list": [
{
"core": "0",
"id": "0",
"online": true,
"pct": 22
},
{
"core": "1",
"id": "1",
"online": true,
"pct": 14
}
]
},
"mem_total_kb": 1015880,
"mem_used_kb": 214532,
"disks": [
{
"mount": "/media/fat",
"label": "SD card",
"total_kb": 249561088,
"used_kb": 38797312,
"avail_kb": 210763776
},
{
"mount": "/media/usb0",
"label": "USB/NVMe usb0",
"total_kb": 244193280,
"used_kb": 59768832,
"avail_kb": 184424448
}
],
"io": [
{
"dev": "mmcblk0",
"label": "SD card",
"read_bps": 0,
"write_bps": 0
},
{
"dev": "sda",
"label": "USB/NVMe drive (sda)",
"read_bps": 0,
"write_bps": 0
}
],
"i2c": [
"i2c-0: 0x1a (in use)",
"i2c-1: 0x39",
"i2c-2: no devices"
],
"ips": [
{
"iface": "eth0",
"addr": "192.168.1.50"
},
{
"iface": "wlan0",
"addr": "192.168.1.51"
}
],
"nets": [
{
"iface": "eth0",
"rx": 1843302912,
"tx": 92348211,
"rx_bps": 0,
"tx_bps": 0
},
{
"iface": "wlan0",
"rx": 2283411,
"tx": 812204,
"rx_bps": 0,
"tx_bps": 0
}
],
"temp": null,
"uptime_s": 8040,
"procs": "top - 19:42:07 up  2:14,  0 users,  load average: 0.31, 0.27, 0.22\nTasks:  71 total,   1 running,  70 sleeping,   0 stopped,   0 zombie\n%Cpu(s): 12.4 us,  5.6 sy,  0.0 ni, 81.5 id,  0.0 wa,  0.0 hi,  0.5 si,  0.0 st\nMiB Mem :    992.1 total,    670.3 free,    209.5 used,    112.3 buff/cache\nMiB Swap:      0.0 total,      0.0 free,      0.0 used.    756.1 avail Mem\n\n  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n  612 root      20   0   52184  18240   6012 S  14.6   1.8  18:22.41 MiSTer\n  640 root      20   0  118932  41216  12844 S   4.0   4.1   4:51.07 ConsoleMode_arm\n  431 root      20   0   12632   5524   4716 S   0.7   0.5   0:02.18 sshd\n  388 root      20   0   34512  11268   8932 S   0.3   1.1   0:04.92 smbd\n  402 root      20   0    7380   3128   2744 S   0.0   0.3   0:00.61 wpa_supplicant\n  415 root      20   0    6224   2380   2060 S   0.0   0.2   0:00.33 dhcpcd\n  377 root      20   0    9024   3740   3268 S   0.0   0.4   0:00.12 bluetoothd\n    1 root      20   0    2948   1784   1660 S   0.0   0.2   0:01.04 init\n"
},
"cifs/latest": {
"umount_version": "2.2.2",
"version": "2.2.5"
},
"saves/progress": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
},
"ra": {
"cfg_exists": false,
"cfg_path": "/media/fat/retroachievements.cfg",
"example_user": false,
"has_password": false,
"ini_block": false,
"installed": false,
"username": ""
},
"usb": {
"roots": [
{
"id": "usb1",
"parent": "",
"vid": "1d6b",
"pid": "0002",
"maker": "Linux",
"product": "DWC OTG Controller",
"speed": "480",
"usb_version": "2.00",
"classes": [],
"hub": true,
"ports": 1,
"root": true,
"kind": "hub",
"location": "",
"role": "",
"drivers": [],
"storage": [],
"inputs": [],
"children": [
{
"id": "1-1",
"parent": "usb1",
"vid": "05e3",
"pid": "0610",
"maker": "Genesys Logic",
"product": "USB2.0 Hub",
"speed": "480",
"usb_version": "2.00",
"classes": [],
"hub": true,
"ports": 4,
"root": false,
"kind": "hub",
"location": "superstation",
"role": "SuperStation hub",
"drivers": [],
"storage": [],
"inputs": [],
"children": [
{
"id": "1-1.1",
"parent": "1-1",
"vid": "05e3",
"pid": "0610",
"maker": "Genesys Logic",
"product": "USB2.0 Hub",
"speed": "480",
"usb_version": "2.00",
"classes": [],
"hub": true,
"ports": 4,
"root": false,
"kind": "hub",
"location": "dock",
"role": "Dock hub",
"drivers": [],
"storage": [],
"inputs": [],
"children": [
{
"id": "1-1.1.1",
"parent": "1-1.1",
"vid": "152d",
"pid": "0583",
"maker": "JMicron",
"product": "JMS583 NVMe bridge",
"speed": "480",
"usb_version": "2.00",
"classes": [],
"hub": false,
"ports": 0,
"root": false,
"kind": "storage",
"location": "dock",
"role": "Dock NVMe slot",
"drivers": [
"uas"
],
"storage": [
"sda (250 GB) at /media/usb0"
],
"inputs": []
},
{
"id": "1-1.1.2",
"parent": "1-1.1",
"vid": "1d57",
"pid": "ad03",
"maker": "SuperStation",
"product": "TV remote receiver",
"speed": "12",
"usb_version": "2.00",
"classes": [],
"hub": false,
"ports": 0,
"root": false,
"kind": "ir",
"location": "dock",
"role": "The dock's TV remote",
"drivers": [
"usbhid"
],
"storage": [],
"inputs": []
}
]
},
{
"id": "1-1.2",
"parent": "1-1",
"vid": "2dc8",
"pid": "3106",
"maker": "8BitDo",
"product": "8BitDo Pro 2",
"speed": "12",
"usb_version": "2.00",
"classes": [],
"hub": false,
"ports": 0,
"root": false,
"kind": "controller",
"location": "superstation",
"role": "",
"drivers": [
"xpad"
],
"storage": [],
"inputs": [
{
"name": "8BitDo Pro 2",
"bus": "usb",
"vid": "2dc8",
"pid": "3106",
"type": "controller",
"buttons": 15,
"keys": 0,
"axes": 8,
"mapping": {
"custom": true,
"menu": "input_2dc8_3106_v3.map",
"cores": [
"SNES",
"Genesis"
],
"files": [
"input_2dc8_3106_v3.map"
],
"fallback": "custom"
}
}
]
},
{
"id": "1-1.3",
"parent": "1-1",
"vid": "046d",
"pid": "c52b",
"maker": "Logitech",
"product": "USB Receiver",
"speed": "12",
"usb_version": "2.00",
"classes": [],
"hub": false,
"ports": 0,
"root": false,
"kind": "keyboard",
"location": "superstation",
"role": "",
"drivers": [
"usbhid"
],
"storage": [],
"inputs": [
{
"name": "Logitech USB Receiver",
"bus": "usb",
"vid": "046d",
"pid": "c52b",
"type": "keyboard",
"buttons": 0,
"keys": 104,
"axes": 0
}
]
},
{
"id": "1-1.4",
"parent": "1-1",
"vid": "0bda",
"pid": "c820",
"maker": "Realtek",
"product": "802.11ac WLAN Adapter",
"speed": "480",
"usb_version": "2.00",
"classes": [],
"hub": false,
"ports": 0,
"root": false,
"kind": "wifibt",
"location": "superstation",
"role": "Built into the SuperStation",
"drivers": [
"rtw88_8821cu",
"btusb"
],
"storage": [],
"inputs": []
}
]
}
]
}
],
"counts": {
"hub": 2,
"controller": 1,
"keyboard": 1,
"wifibt": 1,
"storage": 1,
"ir": 1
},
"devices": 5,
"warnings": [],
"dock": true,
"labels": {
"1-1.2": "Player 1"
},
"other_inputs": [
{
"name": "8BitDo Ultimate 2C",
"bus": "bluetooth",
"vid": "2dc8",
"pid": "301c",
"source": "bluetooth",
"type": "controller",
"buttons": 13,
"keys": 0,
"axes": 6
}
],
"map_files": [
"input_2dc8_3106_v3.map",
"input_045e_028e_v3.map"
]
},
"ss1backup/status": {
"drives": [
{
"path": "/media/usb0",
"free_kb": 184424448,
"last": "2026-10-12 21:15 (SS1 Tool 1.28.13)"
}
],
"sd_used_kb": 38797312,
"job": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
}
},
"ss1backup/progress": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
},
"ini/list": [
{
"id": "/media/fat/MiSTer.ini",
"label": "MiSTer.ini",
"folder": "MiSTer.ini"
},
{
"id": "/media/fat/downloader.ini",
"label": "downloader.ini",
"folder": "downloader.ini"
},
{
"id": "/media/fat/ConsoleMode/config.ini",
"label": "Console Mode settings (config.ini)",
"folder": "ConsoleMode.ini"
},
{
"id": "/media/fat/ConsoleMode/themeconfig/Arcade.ini",
"label": "Theme: Arcade.ini",
"folder": "ConsoleMode themeconfig/Arcade.ini"
}
],
"flash/disks": [
{
"Number": 2,
"FriendlyName": "Generic STORAGE DEVICE",
"Size": 255869321216,
"BusType": "USB"
}
],
"net/ethernet": {
"default": "eth0",
"dns": "192.168.1.1",
"ssh_ip": "192.168.1.50",
"ethernet": [
{
"Name": "eth0",
"Kind": "eth",
"State": "up",
"Carrier": true,
"Speed": 1000,
"Duplex": "full",
"MAC": "02:4d:69:53:54:01",
"Driver": "stmmaceth",
"USB": false,
"IPv4": "192.168.1.50",
"Mask": "255.255.255.0",
"Gateway": "192.168.1.1",
"DHCP": "dhcp",
"RxBytes": 1843302912,
"TxBytes": 92348211,
"RxErrors": 0,
"TxErrors": 0,
"RxDropped": 0,
"LinkDrops": 0,
"MTU": 1500,
"Default": true,
"SSH": true,
"MaxSpeed": 1000,
"PartnerMax": 1000,
"AutoNeg": true
}
],
"wifi": [
{
"Name": "wlan0",
"IPv4": "192.168.1.51"
}
]
},
"targets": [
{
"fs": "exfat",
"path": "/media/fat"
},
{
"fs": "exfat",
"path": "/media/usb0"
}
],
"video": {
"active": -1,
"cm_last_ini": "",
"console_mode": false,
"core": "MENU",
"file": "/media/fat/MiSTer.ini",
"files": [
{
"name": "MiSTer.ini",
"path": "/media/fat/MiSTer.ini",
"alt": 0,
"label": "Main",
"active": false
}
],
"hidden_profiles": 0,
"pending": null,
"settings": {
"composite_sync": {
"value": "1",
"set": true,
"commented": false,
"overrides": []
},
"direct_video": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"dvi_mode": {
"value": "",
"set": false,
"commented": true,
"overrides": []
},
"fb_terminal": {
"value": "1",
"set": true,
"commented": false,
"overrides": []
},
"forced_scandoubler": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_audio_96k": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec_clock": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec_input_mode": {
"value": "1",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec_power_on": {
"value": "1",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec_sleep": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_cec_wake": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_game_mode": {
"value": "",
"set": false,
"commented": true,
"overrides": []
},
"hdmi_limited": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdmi_off": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"hdr": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"menu_pal": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"ntsc_mode": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vga_mode": {
"value": "subcarrier",
"set": true,
"commented": false,
"overrides": []
},
"vga_scaler": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vga_sog": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"video_info": {
"value": "2",
"set": true,
"commented": false,
"overrides": []
},
"video_mode": {
"value": "",
"set": false,
"commented": true,
"overrides": [
"menu"
]
},
"video_mode_ntsc": {
"value": "",
"set": false,
"commented": true,
"overrides": []
},
"video_mode_pal": {
"value": "",
"set": false,
"commented": true,
"overrides": []
},
"video_off": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"video_off_logo": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vrr_mode": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vscale_border": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vscale_mode": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
},
"vsync_adjust": {
"value": "0",
"set": true,
"commented": false,
"overrides": []
}
},
"undo": [],
"yc": false
},
"status": {
"host": "192.168.1.50",
"kernel": "5.15.1-MiSTer",
"misterver": "260603",
"cm": "1",
"fat_space": "201G free of 238G",
"overlap_tools": "0",
"samba": "enabled",
"smbd": "running",
"scraper": "1",
"update_linux": "false",
"script_sd_integrity.sh": "1",
"script_shutdown.sh": "1",
"script_ss1_debug_report.sh": "1",
"script_update_all.sh": "1",
"drivespace_usb0": "176G free of 233G",
"drivegen_usb0": "gen3|WDC WDS250G2B0C",
"drivemodel_usb0": "WDC WDS250G2B0C",
"drivepower_usb0": "4.6",
"drivefw_usb0": "211070WD",
"drivesmart_usb0_critical_warning": "0",
"drivesmart_usb0_temperature_c": "41",
"drivesmart_usb0_available_spare": "100",
"drivesmart_usb0_spare_threshold": "10",
"drivesmart_usb0_percentage_used": "2",
"drivesmart_usb0_data_read_units": "18734211",
"drivesmart_usb0_data_written_units": "6120934",
"drivesmart_usb0_power_cycles": "412",
"drivesmart_usb0_power_on_hours": "1388",
"drivesmart_usb0_unsafe_shutdowns": "37",
"drivesmart_usb0_media_errors": "0",
"drivesmart_usb0_error_log_entries": "0"
},
"scraper": {
"cm_installed": true,
"has_devid": false,
"has_password": true,
"ss_file": true,
"ssid": "me",
"tg_file": false,
"tgdb_mask": "",
"tgdb_valid": false
},
"wizard/state": {},
"devices": [
{
"name": "SuperStation One",
"host": "192.168.1.50",
"user": "root"
}
],
"bt": {
"adapters": [
"5C:F3:70:9A:21:44"
],
"controller": "5C:F3:70:9A:21:44",
"daemon": "running",
"hci": true,
"persistent": true,
"powered": "yes",
"dir": "/media/fat/linux/bluetooth",
"devices": [
{
"mac": "E4:17:D8:3A:10:6C",
"adapter": "5C:F3:70:9A:21:44",
"name": "8BitDo Ultimate 2C",
"kind": "controller",
"connected": true,
"trusted": true,
"blocked": false,
"paired": true,
"vid": "2dc8",
"pid": "301c",
"mtime": 1791845557
},
{
"mac": "98:B6:E9:42:7D:21",
"adapter": "5C:F3:70:9A:21:44",
"name": "Wireless Controller",
"kind": "controller",
"connected": false,
"trusted": true,
"blocked": false,
"paired": true,
"vid": "054c",
"pid": "05c4",
"mtime": 1788648757
}
]
},
"sdbackup/progress": {
"running": false,
"finished": false,
"name": "",
"path": "",
"done_bytes": 0,
"total_bytes": 0,
"files": 0,
"current": "",
"error": "",
"started": 0,
"ended": 0,
"skipped": 0,
"canceled": false,
"phase": "",
"measured": 0,
"entries": 0
},
"prefs": {
"app_window": true,
"open_in": "app",
"seasonal": "snow",
"seasonal_when": "seasonal",
"tray": false
},
"flash/latest": {
"error": "SD card flashing isn't available in this version yet: use SS1 Tool for Windows"
},
"cifs/progress": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
},
"wifi/status": {
"configured": true,
"country": "US",
"eth_ip": "192.168.1.50",
"ssid": "HomeNetwork",
"wifi_ip": "192.168.1.51",
"wlan": "wlan0"
},
"saves/files": {
"files": []
},
"advisory": {
"state": "warning",
"raw": "warning",
"description": "< warning only > only minor exfat performance issues, and some bluetooth adapters are lacking support. it maybe better to just stay on current safe distro",
"checked": 1792103748,
"source": "https://github.com/f3bandit/ss1_tool/tree/main/update_flags",
"fresh": true
},
"restore/points": {
"dir": "C:\\Users\\Player\\SS1Tool\\backup\\sdcard",
"points": [
{
"name": "weekly_2026-10-15_18-40-55",
"mtime": 1792104055,
"cats": [
{
"id": "saves",
"name": "Game saves and save states",
"note": "saves and savestates",
"default": true,
"files": 10,
"size": "748 KB"
},
{
"id": "config",
"name": "Core settings and controller mappings",
"note": "config folder",
"default": true,
"files": 0,
"size": "0 B"
},
{
"id": "bluetooth",
"name": "Bluetooth pairings",
"note": "Bluetooth restarts afterwards",
"default": true,
"files": 0,
"size": "0 B"
},
{
"id": "wifi",
"name": "WiFi",
"note": "used after a restart",
"default": true,
"files": 1,
"size": "7 B"
},
{
"id": "misterini",
"name": "MiSTer settings",
"note": "MiSTer.ini, the video profiles and yc.txt",
"default": true,
"files": 1,
"size": "20 KB"
},
{
"id": "cifs",
"name": "Network share (Cifs)",
"note": "share settings; mounting at startup is set up again",
"default": true,
"files": 0,
"size": "0 B"
},
{
"id": "ra",
"name": "RetroAchievements login",
"note": "retroachievements.cfg",
"default": true,
"files": 0,
"size": "0 B"
},
{
"id": "consolemode",
"name": "Console Mode settings and scraper logins",
"note": "settings only, never the Console Mode program",
"default": true,
"files": 3,
"size": "33 B"
},
{
"id": "screenshots",
"name": "Screenshots",
"note": "screenshots folder",
"default": true,
"files": 4,
"size": "11 KB"
},
{
"id": "samba",
"name": "Samba file sharing",
"note": "turned on again if it was on",
"default": true,
"files": 1,
"size": "10 B"
},
{
"id": "downloader",
"name": "Update All settings",
"note": "downloader.ini; leave off unless you changed it, the new card may have newer settings",
"default": false,
"files": 1,
"size": "146 B"
},
{
"id": "startup",
"name": "Startup script",
"note": "linux/user-startup.sh; leave off unless you added your own lines",
"default": false,
"files": 0,
"size": "0 B"
}
]
}
]
},
"bios": {
"bios_db": "https://raw.githubusercontent.com/ajgowans/BiosDB_MiSTer/db/bios_db.json.zip",
"folders": [],
"systems": [
{
"system": "N64",
"status": "missing",
"used": "/media/fat/games/N64",
"used_from": "SD card",
"others": [],
"games": 0,
"bios": [
{
"file": "boot.rom",
"kind": "main",
"status": "missing",
"expected": "5c124e7948ada85da603a522782940d0"
},
{
"file": "boot1.rom",
"kind": "region",
"status": "missing",
"expected": "d4232dc935cad0650ac2664d52281f3a"
},
{
"file": "boot3.rom",
"kind": "region",
"status": "missing",
"expected": "8d3d9f294b6e174bc7b1d2fd1c727530"
},
{
"file": "boot4.rom",
"kind": "region",
"status": "missing",
"expected": "aad37b1492886b892f1821f37fd3ae34"
},
{
"file": "boot5.rom",
"kind": "region",
"status": "missing",
"expected": "37c36e4286d36892a9fc70eafe4104be"
}
]
},
{
"system": "NEOGEO",
"status": "missing",
"used": "/media/fat/games/NeoGeo",
"used_from": "SD card",
"others": [],
"games": 0,
"bios": [
{
"file": "000-lo.lo",
"kind": "extra",
"status": "missing",
"expected": "fc7599f3f871578fe9a0453662d1c966"
},
{
"file": "neo-epo.sp1",
"kind": "extra",
"status": "missing",
"expected": "b11751ad42879c461d64ad2b7b2b0129"
},
{
"file": "sfix.sfix",
"kind": "extra",
"status": "missing",
"expected": "aa2b5d0eae4158ffc0d7d63481c7830b"
},
{
"file": "sp-s2.sp1",
"kind": "extra",
"status": "missing",
"expected": "2968f59f44bf328639aa79391aeeeab4"
}
]
},
{
"system": "PSX",
"status": "ok",
"used": "/media/fat/games/PSX",
"used_from": "SD card",
"others": [],
"games": 3,
"bios": [
{
"file": "boot.rom",
"kind": "main",
"status": "ok",
"expected": "1e68c231d0896b7eadcad1d7d8e76129",
"found": "1e68c231d0896b7eadcad1d7d8e76129"
},
{
"file": "boot1.rom",
"kind": "region",
"status": "ok",
"expected": "8e4c14f567745eff2f0408c8129f72a6",
"found": "8e4c14f567745eff2f0408c8129f72a6"
},
{
"file": "boot2.rom",
"kind": "region",
"status": "ok",
"expected": "b9d9a0286c33dc6b7237bb13cd46fdee",
"found": "b9d9a0286c33dc6b7237bb13cd46fdee"
},
{
"file": "sbi.zip",
"kind": "extra",
"status": "ok",
"expected": "706d60ab2dfdbfdd53be2069cb85a1fe",
"found": "706d60ab2dfdbfdd53be2069cb85a1fe"
}
]
},
{
"system": "Saturn",
"status": "missing",
"used": "/media/fat/games/Saturn",
"used_from": "SD card",
"others": [],
"games": 0,
"bios": [
{
"file": "boot.rom",
"kind": "main",
"status": "missing",
"expected": "0306c0e408d6682dd2d86324bd4ac661"
}
]
},
{
"system": "GAMEBOY",
"status": "optional",
"used": "/media/fat/games/Gameboy",
"used_from": "SD card",
"others": [],
"games": 2,
"bios": [
{
"file": "boot1.rom",
"kind": "main",
"status": "missing",
"expected": "dbfce9db9deaa2567f6a84fde55f9680"
}
]
},
{
"system": "GBA",
"status": "optional",
"used": "/media/fat/games/GBA",
"used_from": "SD card",
"others": [],
"games": 2,
"bios": [
{
"file": "boot.rom",
"kind": "main",
"status": "missing",
"expected": "a860e8c0b6d573d191e4ec7db1b1e4f6"
}
]
},
{
"system": "NES",
"status": "optional",
"used": "/media/fat/games/NES",
"used_from": "SD card",
"others": [],
"games": 4,
"bios": [
{
"file": "boot0.rom",
"kind": "main",
"status": "missing",
"expected": "ca30b50f880eb660a320674ed365ef7a"
}
]
},
{
"system": "SNES",
"status": "optional",
"used": "/media/fat/games/SNES",
"used_from": "SD card",
"others": [],
"games": 2,
"bios": [
{
"file": "bsx_bios.rom",
"kind": "main",
"status": "missing",
"expected": "96cf17bf589fcbfa6f8de2dc84f19fa2"
}
]
},
{
"system": "Genesis",
"status": "nobios",
"used": "/media/fat/games/Genesis",
"used_from": "SD card",
"others": [],
"games": 4,
"bios": []
},
{
"system": "TGFX16",
"status": "nobios",
"used": "/media/fat/games/TGFX16",
"used_from": "SD card",
"others": [],
"games": 0,
"bios": []
}
]
},
"flash/images": [
{
"kind": "consolemode",
"label": "Console Mode",
"name": "SuperStation_ConsoleMode.zip",
"tag": "latest",
"release": "Latest release",
"url": "",
"size": 1288490188,
"published": "2026-10-01"
},
{
"kind": "regular",
"label": "Regular",
"name": "SuperStation_Regular.zip",
"tag": "latest",
"release": "Latest release",
"url": "",
"size": 1181116006,
"published": "2026-10-01"
}
],
"fs/transfer/progress": {
"running": false,
"op": "",
"done_kb": 0,
"total_kb": 0,
"current": "",
"log": null,
"error": "",
"finished": false
},
"bt/backups": {
"dir": "C:\\Users\\Player\\SS1Tool\\backups\\bluetooth",
"backups": []
},
"bt/progress": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"log": null,
"error": "",
"result": "",
"download": "",
"elapsed": 0
},
"controllers": {
"user_db_lines": 0,
"files": [
{
"name": "input_2dc8_3106_v3.map",
"path": "/media/fat/config/inputs/input_2dc8_3106_v3.map",
"size": 1024,
"mtime": 1791327157
}
],
"controllers": [
{
"name": "8BitDo Pro 2",
"vid": "2dc8",
"pid": "3106",
"source": "usb",
"where": "superstation",
"port": "1-1.2",
"buttons": 15,
"axes": 8,
"mapping": {
"custom": true,
"menu": "input_2dc8_3106_v3.map",
"cores": [
"SNES",
"Genesis"
],
"files": [
"input_2dc8_3106_v3.map"
],
"fallback": "custom"
}
},
{
"name": "8BitDo Ultimate 2C",
"vid": "2dc8",
"pid": "301c",
"source": "bluetooth",
"where": "",
"port": "",
"buttons": 13,
"axes": 6,
"mapping": {
"custom": false,
"fallback": "database",
"db_name": "8BitDo Ultimate 2C Wireless"
}
}
]
},
"wifi/link": {
"connected": true,
"iface": "wlan0",
"ssid": "HomeNetwork",
"freq": 5745,
"channel": 149,
"band": "5 GHz",
"signal": -51,
"rx_mbit": 433.3,
"tx_mbit": 390.0
},
"setup-status": {
"db_default": false,
"db_misterdevel": true,
"db_url": "https://raw.githubusercontent.com/MiSTer-devel/Distribution_MiSTer/main/db.json.zip",
"overlap": [],
"samba": "enabled",
"scripts": {
"Console Mode screen helper": "current",
"sd_integrity.sh": "current",
"shutdown.sh": "current",
"ss1_debug_report.sh": "current"
},
"smbd": true,
"update_all": "2026.10.02",
"update_linux": "false"
},
"ini/backups": {
"dir": "C:\\Users\\Player\\SS1Tool\\backups",
"sets": [
{
"name": "720p_setup",
"mtime": 1792104070,
"files": [
{
"rel": "ConsoleMode/config.ini",
"remote": "/media/fat/ConsoleMode/config.ini"
},
{
"rel": "ConsoleMode/themeconfig/Arcade.ini",
"remote": "/media/fat/ConsoleMode/themeconfig/Arcade.ini"
},
{
"rel": "Downloader/downloader.ini",
"remote": "/media/fat/downloader.ini"
},
{
"rel": "MiSTer/MiSTer.ini",
"remote": "/media/fat/MiSTer.ini"
}
]
}
]
},
"community/status": [
{
"author": "MiSTer Addons",
"file": "reflex_adapt_manager.sh",
"id": "reflex",
"installed": "",
"name": "Reflex Adapt Manager",
"source": "https://github.com/misteraddons/Reflex-Adapt"
},
{
"author": "IncognitoMan",
"file": "psx_bios_patcher.sh",
"id": "psxbios",
"installed": "",
"name": "PSX BIOS Patcher",
"source": "https://gist.github.com/IncognitoMan/fd1f9fbd5794af83370a5c6b02b7d6ee"
}
],
"wifi/scan": [
{
"ssid": "HomeNetwork",
"signal": 92,
"security": "WPA2-Personal",
"open": false,
"bands": "2.4 + 5 GHz",
"saved": true
},
{
"ssid": "Apartment 4B",
"signal": 61,
"security": "WPA3-Personal",
"open": false,
"bands": "2.4 GHz",
"saved": false
},
{
"ssid": "Guest WiFi",
"signal": 48,
"security": "Open",
"open": true,
"bands": "5 GHz",
"saved": false
},
{
"ssid": "Upstairs",
"signal": 33,
"security": "WPA2-Personal",
"open": false,
"bands": "2.4 GHz",
"saved": false
}
],
"debug-report": {
"ok": true,
"name": "SS1_debug_report_20261015_194210.txt",
"remote": "/media/fat/SS1_debug_report_20261015_194210.txt",
"findings": [
"PASS: MiSTer, Linux and the bootloader files are all present",
"PASS: SD card partition table and exFAT boot region are healthy",
"PASS: /media/usb0 WDC WDS250G2B0C is PCIe Gen 3 (safe in the SS1 dock)",
"PASS: NVMe health: 41 C, 2% worn, no media errors",
"INFO: WiFi HomeNetwork, signal -51 dBm (good), 5 GHz channel 149",
"INFO: Console Mode installed",
"PASS: no storage errors in kernel log since boot"
]
},
"cifs": {
"boot_enabled": true,
"boot_supported": true,
"boot_via": "user-startup.sh",
"config": {
"SERVER": "192.168.1.20",
"SHARE": "Games",
"USERNAME": "player",
"LOCAL_DIR": "cifs",
"MOUNT_AT_BOOT": "true",
"WAIT_FOR_SERVER": "false"
},
"cores": [],
"has_password": true,
"ini_path": "/media/fat/Scripts/cifs_mount.ini",
"installed": true,
"kernel_cifs": true,
"log": "",
"mounts": [
{
"source": "//192.168.1.20/Games",
"target": "/media/fat/cifs",
"temp": false
}
],
"settings_in": "ini",
"umount_installed": true,
"umount_version": "2024.04.03",
"version": "2024.04.03"
},
"restore/progress": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
},
"flash/admin": {
"admin": true
},
"padtest/state": {
"connected": true,
"error": "",
"starting": false
},
"update/progress": {
"job": {
"id": 0,
"running": false,
"title": "",
"step": 0,
"steps": 0,
"msg": "",
"done": 0,
"total": 0,
"bytes": 0,
"total_bytes": 0,
"log": null,
"error": "",
"result": "",
"elapsed": 0
},
"new_url": ""
},
"pcshare": {
"config": {
"path": "C:\\SS1_Games",
"name": "ROMS",
"user": "ss1user"
},
"created": false,
"ifindex": 4,
"pc_ip": "192.168.1.20",
"ss1": "192.168.1.50",
"supported": true
},
"shots/ss1": {
"dir": "/media/fat/screenshots",
"shots": [
{
"path": "GBA/20261015_073120-screen.png",
"name": "20261015_073120-screen.png",
"core": "GBA",
"size": 1834,
"mtime": 1792103798
},
{
"path": "NES/20261012_201455-screen.png",
"name": "20261012_201455-screen.png",
"core": "NES",
"size": 2625,
"mtime": 1792103798
},
{
"path": "Genesis/20261013_220511-screen.png",
"name": "20261013_220511-screen.png",
"core": "Genesis",
"size": 4026,
"mtime": 1792103798
},
{
"path": "SNES/20261014_214012-screen.png",
"name": "20261014_214012-screen.png",
"core": "SNES",
"size": 2681,
"mtime": 1792103798
}
]
},
"nightly/status": {
"at_boot": true,
"clock": "19:42",
"crond": true,
"drives": [
"/media/usb0"
],
"enabled": true,
"running": true,
"hour": 3,
"drive": "/media/usb0",
"last": "2026-10-15 03:07:41 saves backed up to /media/usb0/SS1_backup/saves/4-Thu (rsync code 0)"
},
"drives": [
{
"path": "/media/fat",
"fs": "exfat",
"label": "SD card",
"free": "201G",
"size": "238G"
},
{
"path": "/media/usb0",
"fs": "exfat",
"label": "USB/NVMe usb0",
"free": "176G",
"size": "233G"
}
],
"shots/pc": {
"dir": "C:\\Users\\Player\\SS1Tool\\backups/screenshots",
"shots": [
{
"path": "GBA/20261015_073120-screen.png",
"name": "20261015_073120-screen.png",
"core": "GBA",
"size": 1834,
"mtime": 1792103798
},
{
"path": "Genesis/20261013_220511-screen.png",
"name": "20261013_220511-screen.png",
"core": "Genesis",
"size": 4026,
"mtime": 1792103798
},
{
"path": "SNES/20261014_214012-screen.png",
"name": "20261014_214012-screen.png",
"core": "SNES",
"size": 2681,
"mtime": 1792103798
}
]
},
"controllers/backups": {
"backups": [],
"dir": "C:\\Users\\Player\\SS1Tool\\backups/controller-maps"
},
"sdbackup/list": {
"backups": [
{
"name": "weekly_2026-10-15_18-40-55",
"path": "C:\\Users\\Player\\SS1Tool\\backup\\sdcard/weekly_2026-10-15_18-40-55",
"mtime": 1792104055,
"size": "3.0 MB",
"files": 59
}
],
"dir": "C:\\Users\\Player\\SS1Tool\\backup\\sdcard"
},
"saves": {
"systems": [
{
"id": "genesis",
"name": "Genesis / Mega Drive",
"group": "Sega",
"folders": [
"Genesis",
"MegaDrive"
],
"saves": 2,
"save_bytes": 16384,
"states": 1,
"state_bytes": 300000,
"mtime": 1792103782,
"locations": [
"/media/fat/saves/Genesis",
"/media/fat/savestates/Genesis"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "Genesis",
"files": 2,
"bytes": 16384,
"mtime": 1791943500
},
{
"root": "/media/fat",
"kind": "savestates",
"folder": "Genesis",
"files": 1,
"bytes": 300000,
"mtime": 1792103782
}
]
},
{
"id": "sms",
"name": "Master System",
"group": "Sega",
"folders": [
"SMS",
"MasterSystem"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "gamegear",
"name": "Game Gear",
"group": "Sega",
"folders": [
"GameGear",
"GG"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "sg1000",
"name": "SG-1000",
"group": "Sega",
"folders": [
"SG1000",
"SG-1000"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "megacd",
"name": "Sega CD / Mega CD",
"group": "Sega",
"folders": [
"MegaCD",
"SegaCD"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "s32x",
"name": "32X",
"group": "Sega",
"folders": [
"S32X",
"32X"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "saturn",
"name": "Saturn",
"group": "Sega",
"folders": [
"Saturn"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "nes",
"name": "NES / Famicom Disk System",
"group": "Nintendo",
"folders": [
"NES",
"FDS"
],
"saves": 2,
"save_bytes": 16384,
"states": 0,
"state_bytes": 0,
"mtime": 1791850440,
"locations": [
"/media/fat/saves/NES"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "NES",
"files": 2,
"bytes": 16384,
"mtime": 1791850440
}
]
},
{
"id": "snes",
"name": "SNES / Super Famicom",
"group": "Nintendo",
"folders": [
"SNES"
],
"saves": 1,
"save_bytes": 8192,
"states": 1,
"state_bytes": 400000,
"mtime": 1792103782,
"locations": [
"/media/fat/saves/SNES",
"/media/fat/savestates/SNES"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "SNES",
"files": 1,
"bytes": 8192,
"mtime": 1792028400
},
{
"root": "/media/fat",
"kind": "savestates",
"folder": "SNES",
"files": 1,
"bytes": 400000,
"mtime": 1792103782
}
]
},
{
"id": "n64",
"name": "Nintendo 64",
"group": "Nintendo",
"folders": [
"N64"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "gameboy",
"name": "Game Boy",
"group": "Nintendo",
"folders": [
"GAMEBOY",
"GB",
"GAMEBOY2P"
],
"saves": 1,
"save_bytes": 8192,
"states": 0,
"state_bytes": 0,
"mtime": 1788122700,
"locations": [
"/media/fat/saves/Gameboy"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "Gameboy",
"files": 1,
"bytes": 8192,
"mtime": 1788122700
}
]
},
{
"id": "gbc",
"name": "Game Boy Color",
"group": "Nintendo",
"folders": [
"GBC"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "sgb",
"name": "Super Game Boy",
"group": "Nintendo",
"folders": [
"SGB"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "gba",
"name": "Game Boy Advance",
"group": "Nintendo",
"folders": [
"GBA",
"GBA2P"
],
"saves": 1,
"save_bytes": 8192,
"states": 0,
"state_bytes": 0,
"mtime": 1792063860,
"locations": [
"/media/fat/saves/GBA"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "GBA",
"files": 1,
"bytes": 8192,
"mtime": 1792063860
}
]
},
{
"id": "virtualboy",
"name": "Virtual Boy",
"group": "Nintendo",
"folders": [
"VirtualBoy",
"VB"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "pokemonmini",
"name": "Pokemon mini",
"group": "Nintendo",
"folders": [
"PokemonMini"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "tgfx16",
"name": "PC Engine / TurboGrafx-16",
"group": "NEC",
"folders": [
"TGFX16",
"PCE",
"PCEngine",
"TurboGrafx16"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "tgfx16cd",
"name": "PC Engine CD / TurboGrafx-CD",
"group": "NEC",
"folders": [
"TGFX16-CD",
"PCECD",
"TurboGrafxCD"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "jaguar",
"name": "Jaguar",
"group": "Atari",
"folders": [
"Jaguar"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "neogeo",
"name": "Neo Geo (MVS / AES)",
"group": "SNK",
"folders": [
"NEOGEO",
"NeoGeo-MVS",
"NeoGeo-AES"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "neogeocd",
"name": "Neo Geo CD",
"group": "SNK",
"folders": [
"NeoGeo-CD",
"NEOGEOCD"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "ngp",
"name": "Neo Geo Pocket / Color",
"group": "SNK",
"folders": [
"NeoGeoPocket",
"NGP",
"NGPC"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
},
{
"id": "psx",
"name": "PlayStation",
"group": "Sony",
"folders": [
"PSX"
],
"saves": 1,
"save_bytes": 8192,
"states": 0,
"state_bytes": 0,
"mtime": 1791766200,
"locations": [
"/media/fat/saves/PSX"
],
"folder_stats": [
{
"root": "/media/fat",
"kind": "saves",
"folder": "PSX",
"files": 1,
"bytes": 8192,
"mtime": 1791766200
}
]
},
{
"id": "wonderswan",
"name": "WonderSwan / Color",
"group": "Bandai",
"folders": [
"WonderSwan",
"WonderSwanColor",
"WSC"
],
"saves": 0,
"save_bytes": 0,
"states": 0,
"state_bytes": 0,
"mtime": 0,
"locations": [],
"folder_stats": []
}
]
},
"saves/backups": {
"backups": [
{
"name": "before_update_2026-10-15_18-41-17",
"mtime": 1792104077,
"systems": [
"genesis",
"nes",
"snes",
"gameboy",
"gba",
"psx"
],
"files": 10,
"size": "748 KB",
"states": true
}
],
"dir": "C:\\Users\\Player\\SS1Tool\\backups/saves",
"systems": [
{
"id": "genesis",
"name": "Genesis / Mega Drive",
"group": "Sega",
"folders": [
"Genesis",
"MegaDrive"
]
},
{
"id": "sms",
"name": "Master System",
"group": "Sega",
"folders": [
"SMS",
"MasterSystem"
]
},
{
"id": "gamegear",
"name": "Game Gear",
"group": "Sega",
"folders": [
"GameGear",
"GG"
]
},
{
"id": "sg1000",
"name": "SG-1000",
"group": "Sega",
"folders": [
"SG1000",
"SG-1000"
]
},
{
"id": "megacd",
"name": "Sega CD / Mega CD",
"group": "Sega",
"folders": [
"MegaCD",
"SegaCD"
]
},
{
"id": "s32x",
"name": "32X",
"group": "Sega",
"folders": [
"S32X",
"32X"
]
},
{
"id": "saturn",
"name": "Saturn",
"group": "Sega",
"folders": [
"Saturn"
]
},
{
"id": "nes",
"name": "NES / Famicom Disk System",
"group": "Nintendo",
"folders": [
"NES",
"FDS"
]
},
{
"id": "snes",
"name": "SNES / Super Famicom",
"group": "Nintendo",
"folders": [
"SNES"
]
},
{
"id": "n64",
"name": "Nintendo 64",
"group": "Nintendo",
"folders": [
"N64"
]
},
{
"id": "gameboy",
"name": "Game Boy",
"group": "Nintendo",
"folders": [
"GAMEBOY",
"GB",
"GAMEBOY2P"
]
},
{
"id": "gbc",
"name": "Game Boy Color",
"group": "Nintendo",
"folders": [
"GBC"
]
},
{
"id": "sgb",
"name": "Super Game Boy",
"group": "Nintendo",
"folders": [
"SGB"
]
},
{
"id": "gba",
"name": "Game Boy Advance",
"group": "Nintendo",
"folders": [
"GBA",
"GBA2P"
]
},
{
"id": "virtualboy",
"name": "Virtual Boy",
"group": "Nintendo",
"folders": [
"VirtualBoy",
"VB"
]
},
{
"id": "pokemonmini",
"name": "Pokemon mini",
"group": "Nintendo",
"folders": [
"PokemonMini"
]
},
{
"id": "tgfx16",
"name": "PC Engine / TurboGrafx-16",
"group": "NEC",
"folders": [
"TGFX16",
"PCE",
"PCEngine",
"TurboGrafx16"
]
},
{
"id": "tgfx16cd",
"name": "PC Engine CD / TurboGrafx-CD",
"group": "NEC",
"folders": [
"TGFX16-CD",
"PCECD",
"TurboGrafxCD"
]
},
{
"id": "jaguar",
"name": "Jaguar",
"group": "Atari",
"folders": [
"Jaguar"
]
},
{
"id": "neogeo",
"name": "Neo Geo (MVS / AES)",
"group": "SNK",
"folders": [
"NEOGEO",
"NeoGeo-MVS",
"NeoGeo-AES"
]
},
{
"id": "neogeocd",
"name": "Neo Geo CD",
"group": "SNK",
"folders": [
"NeoGeo-CD",
"NEOGEOCD"
]
},
{
"id": "ngp",
"name": "Neo Geo Pocket / Color",
"group": "SNK",
"folders": [
"NeoGeoPocket",
"NGP",
"NGPC"
]
},
{
"id": "psx",
"name": "PlayStation",
"group": "Sony",
"folders": [
"PSX"
]
},
{
"id": "wonderswan",
"name": "WonderSwan / Color",
"group": "Bandai",
"folders": [
"WonderSwan",
"WonderSwanColor",
"WSC"
]
}
]
},
"flash/progress": {
"running": false,
"phase": "",
"done": 0,
"total": 0,
"message": "",
"error": "",
"image": ""
},
"update": {
"current": "1.28.17",
"latest": "1.28.17",
"available": false,
"checked": 1792103732,
"notes": "\r\n<img width=\"256\" height=\"256\" alt=\"icon_256\" src=\"https://github.com/user-attachments/assets/2ad8cd92-2818-4a1e-90df-fe8777ca5987\" />\r\n\r\n\r\nSS1 Tool 1.28.14\r\n## New\r\n- NVMe health: reads the drive's own health log through the SS1 dock (temperature, percentage of rated life used, spare blocks, media errors, unsafe shutdowns, power-on hours, data written). Read-only. Temperature, wear and health also show in System status.\r\n- Back up the SD card to the NVMe drive: the SuperStation copies everything except the games folder to SS1_backup/sdcard on the drive. No PC needed while it runs, and later backups only copy what changed.\r\n- Nightly saves backup: saves and save states are copied to the NVMe/USB drive every night at the hour you pick, one copy per weekday (7 days kept). Runs on the SuperStation itself and keeps working after a restart. Turning it off removes everything it added.\r\n- SD backups now include the system areas: both the PC backup and the NVMe backup save the card's partition table, boot sector and MiSTer bootloader partition, with a README on restoring them.\r\n- WiFi connection quality: signal (Good / Fair / Weak), band, channel and link speed, as the SuperStation sees them.\r\n- Nearby WiFi networks the SuperStation can hear, strongest first, to help pick a less crowded channel.\r\n- Ethernet port and router speed: the fastest speed the SS1's port supports and the fastest the router offers, so a slow link can be traced to the cable, router or port.\r\n- Read speed test for the SD card and drives, with what the result means (the SS1's USB 2.0 tops out around 30-40 MB/s).\r\n- Dashboard: live read/write activity for the SD card and each drive, plus a list of the board's I2C buses.\r\n- Live updates: new screenshots and saves appear in their lists by themselves.\r\n\r\n## Fixed\r\n- The read speed test showed a cut-off drive name on some drives.",
"page": "https://github.com/f3bandit/ss1_tool/releases/tag/1.28.14",
"sha256": "24e67c3846eb3dab92a9704d2911af0a91118490eb605356ec81981d8035ff73",
"downloaded": false,
"mode": "notify",
"busy": "",
"can_write": true
},
"wifi/info": {
"country": "US",
"drives": [
{
"path": "E:\\",
"label": "MiSTer_Data",
"mister": true,
"size": "238"
}
]
},
"config": {
"connected": false,
"host": "192.168.1.50",
"user": "root",
"version": "1.28.17"
},
"discover": {
"devices": [
{
"ip": "192.168.1.50",
"name": "MiSTer",
"banner": "SSH-2.0-OpenSSH_9.7",
"likely": true,
"saved_as": "SuperStation One",
"network": "192.168.1.0/24"
}
],
"networks": [
"192.168.1.0/24"
],
"port": 22,
"count": "1"
},
"connect": {
"host": "192.168.1.50",
"kernel": "5.15.1-MiSTer",
"misterver": "260603",
"cm": "1",
"fat_space": "201G free of 238G",
"overlap_tools": "0",
"samba": "enabled",
"smbd": "running",
"scraper": "1",
"update_linux": "false",
"script_sd_integrity.sh": "1",
"script_shutdown.sh": "1",
"script_ss1_debug_report.sh": "1",
"script_update_all.sh": "1",
"drivespace_usb0": "176G free of 233G",
"drivegen_usb0": "gen3|WDC WDS250G2B0C",
"drivemodel_usb0": "WDC WDS250G2B0C",
"drivepower_usb0": "4.6",
"drivefw_usb0": "211070WD",
"drivesmart_usb0_critical_warning": "0",
"drivesmart_usb0_temperature_c": "41",
"drivesmart_usb0_available_spare": "100",
"drivesmart_usb0_spare_threshold": "10",
"drivesmart_usb0_percentage_used": "2",
"drivesmart_usb0_data_read_units": "18734211",
"drivesmart_usb0_data_written_units": "6120934",
"drivesmart_usb0_power_cycles": "412",
"drivesmart_usb0_power_on_hours": "1388",
"drivesmart_usb0_unsafe_shutdowns": "37",
"drivesmart_usb0_media_errors": "0",
"drivesmart_usb0_error_log_entries": "0"
},
"wifi/nearby": {
"networks": [
{
"ssid": "HomeNetwork",
"signal": -51,
"freq": 5745,
"channel": 149,
"band": "5 GHz",
"secure": true
},
{
"ssid": "HomeNetwork",
"signal": -44,
"freq": 2437,
"channel": 6,
"band": "2.4 GHz",
"secure": true
},
{
"ssid": "Apartment 4B",
"signal": -67,
"freq": 2412,
"channel": 1,
"band": "2.4 GHz",
"secure": true
},
{
"ssid": "Guest WiFi",
"signal": -71,
"freq": 5180,
"channel": 36,
"band": "5 GHz",
"secure": false
},
{
"ssid": "Upstairs",
"signal": -78,
"freq": 2462,
"channel": 11,
"band": "2.4 GHz",
"secure": true
},
{
"ssid": "DIRECT-Printer",
"signal": -83,
"freq": 2437,
"channel": 6,
"band": "2.4 GHz",
"secure": true
}
]
},
"_diag": {
"quick": "Disk: /dev/mmcblk0\nPASS: MBR partition table, 2 partitions, no overlap\nPartition: /dev/mmcblk0p1  (mounted fs: exfat)\nPASS: exFAT boot region checksums match (main and backup)\nPASS: no storage errors in kernel log since boot\nRESULT: PASS\n",
"windows": "exFAT volume dirty flag: clear\nPASS: Windows won't offer to scan and fix this card\n",
"partition": "Disk: /dev/mmcblk0\nPASS: MBR partition table\n  1: exFAT  238.4 GB  start 2048\n  2: type a2 (MiSTer bootloader)  1 MB\nPASS: partitions don't overlap\n",
"boot": "PASS: exFAT boot region checksums match (main and backup)\n",
"kernel": "PASS: no storage errors in kernel log since boot\nINFO: 2 USB resets during start-up (WiFi adapter), normal\n",
"drive": "Drive: /dev/sda (WDC WDS250G2B0C, rated max 4.6 W)\nPASS: PCIe Gen 3 - safe in the SS1 dock\n",
"health": "Drive: /dev/sda (WDC WDS250G2B0C)\nTemperature:          41 C\nLife used:            2%\nSpare blocks:         100% (warning below 10%)\nMedia errors:         0\nUnsafe shutdowns:     37\nPower-on hours:       1388\nData read:            9.6 TB\nData written:         3.1 TB\nPASS: the drive reports no health problems\n",
"speed": "Drive: /dev/sda - reading for about 3 seconds (nothing is written)\n Timing buffered disk reads: 112 MB in  3.02 seconds =  37.09 MB/sec\nPASS: 37.09 MB/s - the SuperStation's USB is USB 2.0, so about 30-40 MB/s is the most any drive reaches\n",
"fscheck": "Drive: /media/usb0 (/dev/sda1, exfat) - check only, no changes\nUnmounted /media/usb0\n----- fsck.exfat -----\nexfatprogs version : 1.0.4\n/dev/sda1: clean. directories 214, files 3871\nMounted /media/usb0 again\nPASS: no file system errors found\n",
"fsrepair": "Demo: a repair unmounts the drive, runs fsck.exfat -y and mounts it again.\nNothing was changed: this is the SS1 Tool demo.\n"
},
"_fs": {
"fs_snes": {
"entries": [
{
"name": "Super Boss Gaiden.srm",
"dir": false,
"size": 8192,
"mtime": 1792028400
}
],
"path": "/media/fat/saves/SNES"
},
"fs_fat": {
"entries": [
{
"name": "_Arcade",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "_Computer",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "_Console",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "_Utility",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "config",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "ConsoleMode",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "docs",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "games",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "linux",
"dir": true,
"size": 4096,
"mtime": 1792103781
},
{
"name": "saves",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "savestates",
"dir": true,
"size": 4096,
"mtime": 1792103782
},
{
"name": "screenshots",
"dir": true,
"size": 4096,
"mtime": 1792103798
},
{
"name": "Scripts",
"dir": true,
"size": 4096,
"mtime": 1792103936
},
{
"name": "downloader.ini",
"dir": false,
"size": 146,
"mtime": 1792103781
},
{
"name": "menu.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "MiSTer.ini",
"dir": false,
"size": 20463,
"mtime": 1792103781
},
{
"name": "sd_integrity.log",
"dir": false,
"size": 183,
"mtime": 1792103937
},
{
"name": "SS1_debug_report_20261015_183856.txt",
"dir": false,
"size": 44524,
"mtime": 1792103937
}
],
"path": "/media/fat"
}
},
"_ini": {
"/media/fat/MiSTer.ini": "[MiSTer]\n;debug=1               ; set to 1 to enable debugging messages, 2 - write to /tmp/debug.txt. Default is 0(disabled).\nkey_menu_as_rgui=0     ; set to 1 to make the MENU key map to RGUI in Minimig (e.g. for Right Amiga)\nforced_scandoubler=0   ; set to 1 to run scandoubler on VGA output always (depends on core).\n;ypbpr=0               ; set to 1 for YPbPr on VGA output. (obsolete. see vga_mode)\nvga_mode=subcarrier    ; supported modes: rgb, ypbpr, svideo, cvbs, and subcarrier (for external rgb converters). rgb is default.\nntsc_mode=0            ; Only for S-Video and CVBS vga_mode. 0 - normal NTSC, 1 - PAL-60, 2 - PAL-M.\ncomposite_sync=1       ; set to 1 for composite sync on HSync signal of VGA output.\nvga_scaler=0           ; set to 1 to connect VGA to scaler output.\nhdmi_audio_96k=0       ; set to 1 for 96khz/16bit HDMI audio (48khz/16bit otherwise)\nkeyrah_mode=0x18d80002 ; VIDPID of keyrah for special code translation (0x23418037 for Arduino Micro)\nvscale_mode=0          ; 0 - scale to fit the screen height.\n                       ; 1 - use integer scale only.\n                       ; 2 - use 0.5 steps of scale.\n                       ; 3 - use 0.25 steps of scale.\n                       ; 4 - integer resolution scaling, use core aspect ratio\n                       ; 5 - integer resolution scaling, maintain display aspect ratio\nvscale_border=0        ; set vertical border for TVs cutting the upper/bottom parts of screen (1-399)\n;bootscreen=0          ; uncomment to disable boot screen of some cores like Minimig. \n;mouse_throttle=10     ; 1-100 mouse speed divider. Useful for very sensitive mice\nrbf_hide_datecode=0    ; 1 - hides datecodes from rbf file names. Press F2 for quick temporary toggle\nmenu_pal=0             ; 1 - PAL mode for menu core\nhdmi_limited=0         ; 1 - use limited (16..235) color range over HDMI\n                       ; 2 - use limited (16..255) color range over HDMI, for VGA converters.\nhdmi_cec=0             ; 1 - enable HDMI-CEC via ADV7513, 0 - disable.\nhdmi_cec_input_mode=1  ; 0 - ignore CEC remote input, 1 - accept mapped CEC keys.\nhdmi_cec_power_on=1    ; 1 - on power-on, try once to make MiSTer the active HDMI input once EDID provides its CEC address.\nhdmi_cec_sleep=0       ; 1 - send CEC STANDBY after video_off minutes of no input activity. Requires video_off>0.\nhdmi_cec_wake=0        ; 1 - on input after that idle period, send wake (ImageViewOn/TextViewOn/ActiveSource).\nhdmi_cec_clock=0       ; 0 - auto-detect 12MHz/50MHz, otherwise floating point value from 3.0 to 100.0 (3-100MHz).\n                       ;\ndirect_video=0         ; 1 - enable core video timing over HDMI, use only with VGA converters.\n                       ; 2 - auto-mode for HDMI DACs that report 1024x768 resolution (AG6200, CS5213). \n                       ; Power cycle when switching between HDMI displays and DACs. No hot-plug detection.\n\nhdr=0                  ; 1 - enable HDR using HLG (recommended for most users)\n                       ; 2 - enable HDR using the DCI P3 color space (use color controls to tweak, suggestion: set saturation to 80).\nfb_size=0              ; 0 - automatic, 1 - full size, 2 - 1/2 of resolution, 4 - 1/4 of resolution.\nfb_terminal=1          ; 1 - enabled (default), 0 - disabled\nosd_timeout=30         ; 5-3600 timeout (in seconds) for OSD to disappear in Menu core. 0 - never timeout.\n                       ; Background picture will get darker after double timeout\nvideo_off=0            ; output black frame in Menu core after timeout (is seconds). Valid only if osd_timout is non zero.\nvideo_off_logo=0       ; 1 - show moving MiSTer logo when video_off is enabled (to distinguish from TV off mode)\nosd_rotate=0           ; Display OSD menu rotated,  0 - no rotation, 1 - rotate right (+90\u00b0), 2 - rotate left (-90\u00b0)                  \nvga_sog=0              ; 1 - enable sync on green (needs analog I/O board v6.0 or newer).\nlookahead=1            ; 1 - keep cursor centered while scrolling, 0 - only scroll at list edges\n\n\n; 1 - enables the recent file loaded/mounted.\n; WARNING: This option will enable write to SD card on every load/mount which may wear the SD card after many writes to the same place\n;          There is also higher chance to corrupt the File System if MiSTer will be reset or powered off while writing.\nrecents=0\n\n; lastcore - Autoboot the last loaded core (corename autosaved in CONFIG/lastcore.dat) first found on the SD/USB\n; lastexactcore - Autoboot the last loaded exact core (corename_yyyymmdd.rbf autosaved in CONFIG/lastcore.dat) first found on the SD/USB\n; corename - Autoboot first corename_*.rbf found on the SD/USB\n; corename_yyyymmdd.rbf - Autoboot first corename_yyyymmdd.rbf found on the SD/USB\n;bootcore=lastcore    ; uncomment to autoboot a core, as the last loaded core.\n\n; 10-30 timeout before autoboot, comment for autoboot without timeout.\nbootcore_timeout=10\n\n; Option to load the custom font. Format is plain bitmap 8x8.\n; Supported sizes of font:\n;   768 bytes - chars 32-127 (only alpha + numeric)\n;  1024 bytes - chars 0-127\n;  1136 bytes - chars 0-141\n;  up to 2048 - only chars 0-141 will be used.\n; if first 32 chars are empty (for sizes 1024 bytes and more) then they are skipped.\n;font=font/myfont.pf\n\n; USER button emulation using a keyboard. Usually it's the reset button.\n; 0 - lctrl+lalt+ralt (lctrl+lgui+rgui on keyrah)\n; 1 - lctrl+lgui+rgui\n; 2 - lctrl+lalt+del\n; 3 - same as 0 (lctrl+lalt+ralt on keyrah)\nreset_combo=0\n\n; !!!!\n; Attention: if video_mode is not set in INI, then MiSTer will try to detect\n; native mode of display and use it instead.\n; Additionally, if dvi_mode is not set (only if video_mode is not set), \n; then MiSTer will try to detect if display is DVI.\n; !!!!\n\n; set to 1 for DVI mode. Audio won't be transmitted through HDMI in DVI mode.\n;dvi_mode=0\n\n; 0 - 1280x720@60\n; 1 - 1024x768@60\n; 2 - 720x480@60\n; 3 - 720x576@50\n; 4 - 1280x1024@60\n; 5 - 800x600@60\n; 6 - 640x480@60\n; 7 - 1280x720@50\n; 8 - 1920x1080@60\n; 9 - 1920x1080@50\n;10 - 1366x768@60\n;11 - 1024x600@60\n;12 - 1920x1440@60\n;13 - 2048x1536@60\n;14 - 2560x1440@60\n;\n; custom mode: hact,hfp,hs,hbp,vact,vfp,vs,vbp,Fpix_in_KHz[,hsyncp,vsyncp]\n;  example: video_mode=1280,110,40,220,720,5,5,20,74250,+hsync,-vsync\n;\n; calculated mode: width,height,refresh[,flags]\n;  example: video_mode=1920,1200,60\n; flags - cvt=CVT timing, cvtrb=CVT-RB timing (default)\n;video_mode=0\n\n; set to 1-10 (seconds) to display video info on startup/change\nvideo_info=2\n\n; Set to 1 for automatic HDMI VSync rate adjust to match original VSync.\n; Set to 2 for low latency mode (single buffer).\n; This option makes video butter smooth like on original emulated system.\n; Adjusting is done by changing pixel clock. Not every display supports variable pixel clock.\n; For proper adjusting and to reduce possible out of range pixel clock, use 60Hz HDMI video\n; modes as a base even for 50Hz systems. \nvsync_adjust=0\n\n; Variable Refresh Rate control\n; 0 - Do not enable VRR (send no VRR control frames)\n; 1 - Auto Detect VRR from display EDID.\n; 2 - Force Enable Freesync\n; 3 - Force Enable VESA VRR\n; 4 - Force Enable MiSTer VRR (vsync_adjust must be 0)\nvrr_mode=0\n; VESA VRR base framerate. Normally set to the current video mode's output framerate\nvrr_vesa_framerate=0\n\n; If your monitor doesn't support either very low (NTSC monitors may not support PAL) or \n; very high (PAL monitors may not support NTSC) then you can set refresh_min and/or refresh_max\n; parameters, so neither vsync_adjust nor VRR will be applied for refreshes outside specified.\nrefresh_min=0\nrefresh_max=0\n\n; These parameters have the same format as video_mode.\n; You need to supply both PAL and NTSC modes if you want vsync_adjust to switch between\n; predefined modes as a base. This will reduce the range of pixel clock.\n;video_mode_ntsc=0\n;video_mode_pal=7\n\n; Provided below are options for modulating color on the HDMI output.\n; Brightness, contrast and saturation can be set to any value between 0 and 100.\n; Hue can be set to 0 - 360, observing the HSL color model.\n; Each component of video_gain_offset can be set to any value between -2 and 2.\n; The order is \"gain,offset\" repeated three times to cover RGB.\n; Example 1, Inverted colors:\n; video_gain_offset= -1, 1, -1, 1, -1, 1\n; Example 2, Slightly desaturated, warm display:\n; video_saturation= 80\n; video_gain_offset= 1.5, -0.1, 1.3, -0.15, 0.9, 0.05\nvideo_brightness=50\nvideo_contrast=50\nvideo_saturation=100\nvideo_hue=0\nvideo_gain_offset=1,0,1,0,1,0\n\n; These controls have been provided so you can tweak the HDR metadata values regarding\n; peak brightness and average brightness. The defaults are 1000/250 for peak and average\n; respectively.\n; Some displays will completely ignore the values in the HDR packet, some will make use of them.\n; The recommendation is to set hdr_max_nits to your display's peak luminance, while\n; setting hdr_avg_nits to at least hdr_max_nits/4.\n; Please note that setting a peak brightness far above your display's capability may result\n; in clipping in bright parts of the image.\nhdr_max_nits=1000\nhdr_avg_nits=250\n\n; 1-10 (seconds) to display controller's button map upon first time key press\n; 0 - disable\ncontroller_info=6\n\n; JammaSD/J-PAC/I-PAC keys to joysticks translation\n; You have to provide correct VID and PID of your input device\n; Examples: Legacy J-PAC with Mini-USB or USB capable I-PAC with PS/2 connectors VID=0xD209/PID=0x0301\n; USB Capable J-PAC with only PS/2 connectors VID=0x04B4/PID=0x0101\n; JammaSD: VID=0x04D8/PID=0xF3AD\n;   jamma_vid/pid  (i.e. JammaSD) would be mapped to Players 1 and 2 controllers.\n;   jamma2_vid/pid (i.e. J-PAC  ) would be mapped to Players 3 and 4 controllers\n;                                 for a possible 4-player JAMMA-VERSUS scenario\n;                                 using two JAMMA USB controller interfaces.\njamma_vid=0x04D8\njamma_pid=0xF3AD\njamma2_vid=0x1111\njamma2_pid=0x2222\n\n; Disable merging input devices. Use if only player 1 works.\n; Leave no_merge_pid empty to apply this to all devices with the same VID.\n;no_merge_vid=0x045E\n;no_merge_pid=0x028E\n\n; Same as above but can add multiple devices (one entry per VIDPID). Format is VIDPID in hex number\n;no_merge_vidpid=0x12345678\n;no_merge_vidpid=0x11112222\n\n; Dead zone radius definitions. \n; Joystick movements smaller than a defined radius will be neglected. \n; This is good for worn or poorly made joysticks and converters.\n; Devices that match the identifier part of the string will be affected.\n; You can add multiple devices (one entry per identifier). \n; The identifier part is case-insensitive, and the radius can be up to 64 units. \n; Identifier and radius are separated by a whitespace (' ') and/or a comma (','). \n; Accepted formats are:\n;\n; - VIDPID as an eight digit hex number (\"0x\" can be omitted), then the radius (not hex).\n;deadzone=0x1E8F1603, 25\n;\n; - vid:VID as a four digit hex, then the radius.\n;deadzone=vid:0x1e8f, 25\n;\n; - pid:PID as a four digit hex, then the radius.\n;deadzone=PID:1603 25\n;\n; - The following formats are explained a bit further down:\n;deadzone=usb-1.2/, 10\n;deadzone=7c:10:c9:15:22:33/df:47:3a:12:44:55, 8\n;deadzone=1e8f_1603_55c4dd0c, 5\n\n; Permanently assign specific controller to specific player.\n; Normally you don't need to use this option, but if you use arcade cabinet with integrated controllers then\n; you may want to use it for specific player regardless which controller is used first.\n; To assign it, you need to provide unique part of this controller ID.\n; In USB debug log you may see list of input devices right after core has been loaded. \n; For example:\n;\n; opened 0( 0): /dev/input/event8 (1915:0040) 0 \"7c:10:c9:15:22:33/df:47:3a:12:44:55\" \"Flydigi APEX2\"\n; ...\n; opened 7( 7): /dev/input/event3 (1997:2535) 0 \"usb-ffb40000.usb-1.6/input0\" \"  mini keyboard\"\n; opened 9( 9): /dev/input/event0 (046d:4024) 0 \"usb-ffb40000.usb-1.2/input2:1/4024-19-a2-39-0a\" \"Logitech K400\"\n;\n; following part is unique identifier in system ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n; So you need to provide part of this string identifying exactly this device. Don't include inputX part as it may change after reboot.\n; Wireless devices usually have format MAC/MAC, wired devices use usb-... format.\n; UPDATE: you may define up to 8 devices to the same player. Use player_1_controller in several lines to assign multiple devices to player 1.\n;\n; Example of such unique part of strings:\n;\n;player_1_controller=usb-1.2/  ;include / at the end so it won't match with something like usb-1.2.3\n;player_2_controller=7c:10:c9:15:22:33/df:47:3a:12:44:55\n;player_3_controller=1915_0040_55c4dd0c ; VID_PID_HASH - VID, PID and unique HASH\n;player_4_controller=1915_0040 ; VID_PID - warning, it will assign all input devices with these VID:PID to same player!\n\n\n; Speeds in sniper/non-sniper modes of mouse emulation by joystick \n; 0 - (default) - faster move in non-sniper mode, slower move in sniper mode.\n; 1 - movement speeds are swapped.\nsniper_mode=0\n\n; Uncomment following option if you don't want to see a second line for long file names in listing.\n;browse_expand=0\n\n; 0 - disable MiSTer logo in Menu core\nlogo=0\n\n; Custom shared folder for core supporting this feature (currently minimig and ao486 only)\n; Can be relative to core's home dir or absolute path.\n; Path must exist before core start to use it, or it will fail.\n; Make sure USB device is mounted before use shared folder on USB!\nshared_folder=\n\n; Custom aspect ratio\n;custom_aspect_ratio_1=16:10\n;custom_aspect_ratio_2=1:1\n\n; use specific (VID/PID) mouse X movement as a spinner and paddle. Use VID=0xFFFF/PID=0xFFFF to use all mice as spinners.\n;spinner_vid=0x1BCF\n;spinner_pid=0x0005\n\n; spinner_throttle with base value 100 gives one spinner step per one tick. Higher value makes spinner slower.\n; Lower than 100 makes spinner faster. Negative value gives opposite direction.\n;spinner_throttle=-50\n\n; 0 - X axis, 1 - Y axis, 2 - wheel.\n;spinner_axis=1\n\n; Default filters for video scaler. Paths must be relative to \"Filters\" folder without leading slash.\n;vfilter_default=LCD Effects/LCD_Effect_07.txt\n;vfilter_vertical_default=<some_file>\n;vfilter_scanlines_default=<some_file>\n\n; Default filters for audio. Paths must be relative to \"Filters_audio\" folder without leading slash.\n;afilter_default=LPF2000_3tap.txt\n\n; Defines internal joypad mapping from virtual SNES mapping in main to core mapping\n; Set to 0 for name mapping (jn) (e.g. A button in SNES core = A button on controller regardless of position on pad)\n; Set to 1 for positional mapping (jp) (e.g. A button in SNES core = East button on controller regardless of button name)\ngamepad_defaults=0\n\n; Write out file name under the cursor in browser for external integration\n; External application or script may parse the info and do some additional actions and/or send info to 3rd party server.\n; Warning: it may slowdown the system or add lag while browsing the files in OSD depending on external app/script.\nlog_file_entry=0\n\n; Automatically disconnect (and shutdown) Bluetooth input device if not use specified amount of time.\n; Some controllers have no automatic shutdown built in and will keep connection till battery dry out.\n; 0 - don't disconnect automatically, otherwise it's amount of minutes.\nbt_auto_disconnect=0\n\n; Reset Bluetooth dongle before pair dialog.\n; Some dongles may have problem to pair if not explicitly reset.\n; Some dongles (mostly CSR) have problem to pair with BLE if not reset in advance.\n; Consequence of reset: some input devices get shutdown after reset.\nbt_reset_before_pair=0\n\n;default Shadow Mask\n;shmask_default=VGA.txt\n\n;default shadow mask mode:\n; 0 - none, 1 - 1x, 2 - 2x, 3 - 1x Rotated, 4 - 2x Rotated\n;shmask_mode_default=1\n\n; Wait for specific mount before start the core. \n; Attention: waiting is performing BEFORE core start, so no message will be displayed on screen!\n; It's useful for debugging when core is loaded from USB blaster and games folder is on USB or Network drive.\n; This option cannot be used when defmra in CONFSTR is used (i.e. if arcade rbf is loaded directly not through MRA).\n; This option is ignored for Menu core.\n;waitmount=/media/usb0\n\n; Overrides for video mode\n; When the core's video mode matches the parameters in the section header, any options in the section override options from MiSTer and core sections.\n; Refresh rate in header is optional and, if present, must match exactly the output from video_info or the logs.  For example, if it says \"60.0Hz\", the header needs to be \"@60.0\" to match.\n; When the core changes video mode, MiSTer will first look for a matching WIDTHxHEIGHT@VREFRESH section.\n; If no match is found, it will fall back to a matching WIDTHxHEIGHT section with no refresh rate.\n; If there is still no match, MiSTer/core options will be used without overrides.\n; [video=640x400]\n; ...\n; [video=640x400@70.1]\n; ...\n\n; Wheel centering force 0-100. Default is 50.\n;wheel_force=50\n\n; Wheel steering angle range. Supported ranges depends on specific wheel model\n; If not set then default (depending on driver) range is used\n;wheel_range=200\n\n; Enable game mode on HDMI output. It may give you better optimization on some displays, but also \n; can give worse result on others. Default is 0 (non-game).\n;hdmi_game_mode=1\n\n; disable autofire if for some reason it's not required and accidentally triggered\ndisable_autofire=0\n\n; allow autofire on directional inputs. typically not recommended. default is 0 (disabled).\n;autofire_on_directions=1\n\n; custom autofire rates (in hertz). will round to nearest rate that divides evenly into 60hz.\n; can also use literal bit patterns for on/off cycles, i.e. 0b00111. each bit is one frame.\n;autofire_rates=10,0b00111,20,30\n\n; Specify a default video processing preset that will be applied to cores.\n; Path is relative to the presets/ directory and can optionally include the .ini extension\n;preset_default=General Hardware/Console - 3rdGen\n\n; Enable per controller and per USB port mapping, both gamepads and keyboards\n; Even same model of controller connected to different USB ports will have different button sets,\n; thus make sure to define buttons for all controllers if you set this option to 1.\n; Option also accepts VIDPID value to define per-port mapping only for specific VID:PID device.\n; It's useful for DIY controllers using off-the-shelf boards like arduino.\n; You may use several controller_unique_mapping instances to assign several VID:PID.\n;controller_unique_mapping=0x23418037 ; example for Arduino Micro\ncontroller_unique_mapping=0\n\n\n; Protect access to the OSD when a core is running\n; When attempting to access the OSD players will be prompted for an unlock code.\n; U = Up, D = Down, L = Left, R = Right, A = Select, B = Back\n; Setting osd_lock to DUUUD would require entering the sequence Down, Up, Up, Up, Down\n;osd_lock=DUUUD\n\n; If osd_lock is enabled, allow the OSD to be opened without entering the unlock\n; code if less than osd_lock_time seconds have passed since the OSD was closed.\n; set to 0 for manual lock from OSD\nosd_lock_time=5\n\n; use custom main for specific core. This option should be used only inside specific core.\n;main=some_binary_file\n\n; Code of button on XBox Elite 2 controller used as a special shift button to emulate keys absent\n; on chatpad (and remapped through XBox accessory app buttons as a keys).\n; XBE2 controller with chatpad accessory and this option can replace full(almost) keyboard and mouse.\n; Note: chatpad works only when XBE2 is connected through cable or USB dongle. Not through Bluetooth.\n;xbe2_shift=0x224 ;Paddle P3\n\n; Some board have i2c communication problem between FPGA and HDMI chip making OSD (and even core itself) laggy.\n; This option reduces amount of i2c communication by removing SPD packet change from specific events.\n; Note: SPD packets are most important if you use Direct Video mode together with external scaler which\n; supports MiSTer specifically. If you don't use such scaler or don't use Direct Video mode then it's safe to set \n; this option to 3\n; 0 - normal SPD work (default).\n; 1 - Don't send SPD in normal mode (non-Direct-Video).\n; 2 - Additionally don't send new SPD upon OSD open/close\n; 3 - Don't send SPD at all.\n;spd_quirk=0\n\n; 1...1440 - minutes till HDMI off if no user activity detected (no input from mouse/keyboard/joystick).\n; unlike video_off which works only in Menu core, this option works in all cores.\n; 0 (default) - don't turn HDMI off.\nhdmi_off=0\n\n[Menu]\nvideo_mode=0\n",
"/media/fat/downloader.ini": "[mister]\nupdate_linux = false\n\n[distribution_mister]\ndb_url = https://raw.githubusercontent.com/MiSTer-devel/Distribution_MiSTer/main/db.json.zip\n",
"/media/fat/ConsoleMode/config.ini": "theme=1\n",
"/media/fat/ConsoleMode/themeconfig/Arcade.ini": "a=1\n"
},
"_savefiles": {
"psx": {
"files": [
{
"path": "/media/fat/saves/PSX/Card 1.sav",
"name": "Card 1.sav",
"kind": "save",
"size": 8192,
"mtime": 1791766200
}
]
},
"gba": {
"files": [
{
"path": "/media/fat/saves/GBA/Goodboy Galaxy.sav",
"name": "Goodboy Galaxy.sav",
"kind": "save",
"size": 8192,
"mtime": 1792063860
}
]
},
"nes": {
"files": [
{
"path": "/media/fat/saves/NES/Micro Mages.sav",
"name": "Micro Mages.sav",
"kind": "save",
"size": 8192,
"mtime": 1791850440
},
{
"path": "/media/fat/saves/NES/Lizard.sav",
"name": "Lizard.sav",
"kind": "save",
"size": 8192,
"mtime": 1790632920
}
]
},
"gb": {
"files": []
},
"snes": {
"files": [
{
"path": "/media/fat/savestates/SNES/Super Boss Gaiden_1.ss",
"name": "Super Boss Gaiden_1.ss",
"kind": "state",
"size": 400000,
"mtime": 1792103782
},
{
"path": "/media/fat/saves/SNES/Super Boss Gaiden.srm",
"name": "Super Boss Gaiden.srm",
"kind": "save",
"size": 8192,
"mtime": 1792028400
}
]
},
"genesis": {
"files": [
{
"path": "/media/fat/savestates/Genesis/Tanglewood_1.ss",
"name": "Tanglewood_1.ss",
"kind": "state",
"size": 300000,
"mtime": 1792103782
},
{
"path": "/media/fat/saves/Genesis/Xeno Crisis.sav",
"name": "Xeno Crisis.sav",
"kind": "save",
"size": 8192,
"mtime": 1791943500
},
{
"path": "/media/fat/saves/Genesis/Tanglewood.sav",
"name": "Tanglewood.sav",
"kind": "save",
"size": 8192,
"mtime": 1791674520
}
]
}
},
"_dmesg": {
"text": "[    3.412010] usb 1-1.1.1: new high-speed USB device number 4 using dwc2\n[    3.581224] usb-storage 1-1.1.1:1.0: USB Mass Storage device detected\n[    3.602781] scsi host0: uas\n[    4.120337] sd 0:0:0:0: [sda] 488397168 512-byte logical blocks: (250 GB/233 GiB)\n[    4.188410]  sda: sda1\n[    4.226003] sd 0:0:0:0: [sda] Attached SCSI disk\n[    5.031876] rtw88_8821cu 1-1.4:1.0: Firmware version 24.11.0\n[    7.902118] wlan0: authenticated\n[    7.910552] wlan0: associated\n[    8.004211] stmmaceth ff702000.ethernet eth0: Link is Up - 1Gbps/Full - flow control rx/tx\n[   12.880433] input: 8BitDo Pro 2 as /devices/platform/soc/ffb40000.usb/usb1/1-1/1-1.2/input/input3\n[   15.402871] Bluetooth: hci0: RTL: fw version 0x829a7644\n[   18.114002] input: 8BitDo Ultimate 2C as /devices/virtual/misc/uhid/input5\n"
},
"_shots": [
"20261012_201455-screen.png",
"20261013_220511-screen.png",
"20261014_214012-screen.png",
"20261015_073120-screen.png"
],
"_tree": {
"/media/fat": [
{
"name": "ConsoleMode",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Scripts",
"dir": true,
"size": 0,
"mtime": 1792103936
},
{
"name": "_Arcade",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "_Computer",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "_Console",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "_Utility",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "config",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "docs",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "games",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "linux",
"dir": true,
"size": 0,
"mtime": 1792103781
},
{
"name": "saves",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "savestates",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "screenshots",
"dir": true,
"size": 0,
"mtime": 1792103798
},
{
"name": "MiSTer.ini",
"dir": false,
"size": 20463,
"mtime": 1792103781
},
{
"name": "downloader.ini",
"dir": false,
"size": 146,
"mtime": 1792103781
},
{
"name": "menu.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/_Utility": [],
"/media/fat/config": [
{
"name": "inputs",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "ss1tool",
"dir": true,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/config/ss1tool": [
{
"name": "video_undo",
"dir": true,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/config/ss1tool/video_undo": [],
"/media/fat/config/inputs": [],
"/media/fat/Scripts": [
{
"name": "sd_integrity.sh",
"dir": false,
"size": 38832,
"mtime": 1792103936
},
{
"name": "shutdown.sh",
"dir": false,
"size": 6490,
"mtime": 1792103936
},
{
"name": "ss1_debug_report.sh",
"dir": false,
"size": 25910,
"mtime": 1792103936
}
],
"/media/fat/ConsoleMode": [
{
"name": "themeconfig",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "config.ini",
"dir": false,
"size": 8,
"mtime": 1792103782
},
{
"name": "screenscraper.txt",
"dir": false,
"size": 21,
"mtime": 1792103782
}
],
"/media/fat/ConsoleMode/themeconfig": [
{
"name": "section_groups",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Arcade.ini",
"dir": false,
"size": 4,
"mtime": 1792103782
}
],
"/media/fat/ConsoleMode/themeconfig/section_groups": [],
"/media/fat/savestates": [
{
"name": "Genesis",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/savestates/Genesis": [
{
"name": "Tanglewood_1.ss",
"dir": false,
"size": 300000,
"mtime": 1792103782
}
],
"/media/fat/savestates/SNES": [
{
"name": "Super Boss Gaiden_1.ss",
"dir": false,
"size": 400000,
"mtime": 1792103782
}
],
"/media/fat/linux": [
{
"name": "bluetooth",
"dir": true,
"size": 0,
"mtime": 1792103781
},
{
"name": "gamecontrollerdb",
"dir": true,
"size": 0,
"mtime": 1792103781
},
{
"name": "samba.sh",
"dir": false,
"size": 10,
"mtime": 1792103781
},
{
"name": "wpa_supplicant.conf",
"dir": false,
"size": 7,
"mtime": 1792103781
}
],
"/media/fat/linux/bluetooth": [],
"/media/fat/linux/gamecontrollerdb": [
{
"name": "gamecontrollerdb.txt",
"dir": false,
"size": 241712,
"mtime": 1792103782
}
],
"/media/fat/_Console": [
{
"name": "Atari7800_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "GBA_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Gameboy_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Genesis_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "MegaCD_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "N64_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "NES_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "NeoGeo_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "PSX_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "S32X_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "SMS_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "SNES_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Saturn_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "TGFX16_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "WonderSwan_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/saves": [
{
"name": "GBA",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Gameboy",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Genesis",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "NES",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "PSX",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/saves/GBA": [
{
"name": "Goodboy Galaxy.sav",
"dir": false,
"size": 8192,
"mtime": 1792063860
}
],
"/media/fat/saves/NES": [
{
"name": "Lizard.sav",
"dir": false,
"size": 8192,
"mtime": 1790632920
},
{
"name": "Micro Mages.sav",
"dir": false,
"size": 8192,
"mtime": 1791850440
}
],
"/media/fat/saves/Genesis": [
{
"name": "Tanglewood.sav",
"dir": false,
"size": 8192,
"mtime": 1791674520
},
{
"name": "Xeno Crisis.sav",
"dir": false,
"size": 8192,
"mtime": 1791943500
}
],
"/media/fat/saves/PSX": [
{
"name": "Card 1.sav",
"dir": false,
"size": 8192,
"mtime": 1791766200
}
],
"/media/fat/saves/SNES": [
{
"name": "Super Boss Gaiden.srm",
"dir": false,
"size": 8192,
"mtime": 1792028400
}
],
"/media/fat/saves/Gameboy": [
{
"name": "Tobu Tobu Girl.sav",
"dir": false,
"size": 8192,
"mtime": 1788122700
}
],
"/media/fat/_Arcade": [
{
"name": "Arkanoid.mra",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "DonkeyKong.mra",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Frogger.mra",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Galaga.mra",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Pacman.mra",
"dir": false,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/screenshots": [
{
"name": "GBA",
"dir": true,
"size": 0,
"mtime": 1792103798
},
{
"name": "Genesis",
"dir": true,
"size": 0,
"mtime": 1792103798
},
{
"name": "NES",
"dir": true,
"size": 0,
"mtime": 1792103798
},
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792103798
}
],
"/media/fat/screenshots/GBA": [
{
"name": "20261015_073120-screen.png",
"dir": false,
"size": 1834,
"mtime": 1792103798
}
],
"/media/fat/screenshots/NES": [
{
"name": "20261012_201455-screen.png",
"dir": false,
"size": 2625,
"mtime": 1792103798
}
],
"/media/fat/screenshots/Genesis": [
{
"name": "20261013_220511-screen.png",
"dir": false,
"size": 4026,
"mtime": 1792103798
}
],
"/media/fat/screenshots/SNES": [
{
"name": "20261014_214012-screen.png",
"dir": false,
"size": 2681,
"mtime": 1792103798
}
],
"/media/fat/_Computer": [
{
"name": "Amiga_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "Atari800_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "C64_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "MSX_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "ZXSpectrum_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
},
{
"name": "ao486_20260601.rbf",
"dir": false,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/docs": [],
"/media/fat/games": [
{
"name": "GBA",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Gameboy",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Genesis",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "N64",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "NES",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "NeoGeo",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "PSX",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "Saturn",
"dir": true,
"size": 0,
"mtime": 1792103782
},
{
"name": "TGFX16",
"dir": true,
"size": 0,
"mtime": 1792103782
}
],
"/media/fat/games/GBA": [
{
"name": "Anguna.gba",
"dir": false,
"size": 2280,
"mtime": 1792103782
},
{
"name": "Goodboy Galaxy.gba",
"dir": false,
"size": 144800,
"mtime": 1792103782
}
],
"/media/fat/games/NES": [
{
"name": "Lizard.nes",
"dir": false,
"size": 633560,
"mtime": 1792103782
},
{
"name": "Micro Mages.nes",
"dir": false,
"size": 420900,
"mtime": 1792103782
},
{
"name": "Nebs n Debs.nes",
"dir": false,
"size": 47900,
"mtime": 1792103782
},
{
"name": "Super Tilt Bro.nes",
"dir": false,
"size": 169380,
"mtime": 1792103782
}
],
"/media/fat/games/Genesis": [
{
"name": "Demons of Asteborg.md",
"dir": false,
"size": 510780,
"mtime": 1792103782
},
{
"name": "Old Towers.md",
"dir": false,
"size": 579340,
"mtime": 1792103782
},
{
"name": "Tanglewood.md",
"dir": false,
"size": 443620,
"mtime": 1792103782
},
{
"name": "Xeno Crisis.md",
"dir": false,
"size": 490820,
"mtime": 1792103782
}
],
"/media/fat/games/PSX": [],
"/media/fat/games/SNES": [
{
"name": "Dottie Flowers.sfc",
"dir": false,
"size": 77700,
"mtime": 1792103782
},
{
"name": "Super Boss Gaiden.sfc",
"dir": false,
"size": 158440,
"mtime": 1792103782
}
],
"/media/fat/games/TGFX16": [],
"/media/fat/games/NeoGeo": [],
"/media/fat/games/N64": [],
"/media/fat/games/Gameboy": [
{
"name": "Deadeus.gb",
"dir": false,
"size": 653740,
"mtime": 1792103782
},
{
"name": "Tobu Tobu Girl.gb",
"dir": false,
"size": 151060,
"mtime": 1792103782
}
],
"/media/fat/games/Saturn": [],
"/media/usb0": [
{
"name": "SS1_backup",
"dir": true,
"size": 0,
"mtime": 1792061488
}
],
"/media/usb0/SS1_backup": [
{
"name": "saves",
"dir": true,
"size": 0,
"mtime": 1792061488
},
{
"name": "sdcard",
"dir": true,
"size": 0,
"mtime": 1791556616
},
{
"name": "last_backup.txt",
"dir": false,
"size": 36,
"mtime": 1792061456
}
],
"/media/usb0/SS1_backup/sdcard": [
{
"name": "ConsoleMode",
"dir": true,
"size": 0,
"mtime": 1791520369
},
{
"name": "Scripts",
"dir": true,
"size": 0,
"mtime": 1792061448
},
{
"name": "_Console",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "config",
"dir": true,
"size": 0,
"mtime": 1791556616
},
{
"name": "docs",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "linux",
"dir": true,
"size": 0,
"mtime": 1791520198
},
{
"name": "saves",
"dir": true,
"size": 0,
"mtime": 1791459645
},
{
"name": "savestates",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "screenshots",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "MiSTer.ini",
"dir": false,
"size": 20463,
"mtime": 1791556619
},
{
"name": "MiSTer_RGHV.ini",
"dir": false,
"size": 20442,
"mtime": 1791519405
},
{
"name": "MiSTer_RGsB.ini",
"dir": false,
"size": 20442,
"mtime": 1791519405
},
{
"name": "MiSTer_SVID.ini",
"dir": false,
"size": 20445,
"mtime": 1791519405
},
{
"name": "MiSTer_YPbP.ini",
"dir": false,
"size": 20444,
"mtime": 1791519405
},
{
"name": "downloader.ini",
"dir": false,
"size": 146,
"mtime": 1791520193
},
{
"name": "menu.rbf",
"dir": false,
"size": 0,
"mtime": 1791459388
},
{
"name": "retroachievements.cfg",
"dir": false,
"size": 21,
"mtime": 1791459874
}
],
"/media/usb0/SS1_backup/sdcard/docs": [],
"/media/usb0/SS1_backup/sdcard/savestates": [
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1791520198
}
],
"/media/usb0/SS1_backup/sdcard/config": [
{
"name": "inputs",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "ss1tool",
"dir": true,
"size": 0,
"mtime": 1791556616
}
],
"/media/usb0/SS1_backup/sdcard/screenshots": [
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792061259
}
],
"/media/usb0/SS1_backup/sdcard/saves": [
{
"name": "SNES",
"dir": true,
"size": 0,
"mtime": 1792061376
},
{
"name": "docs",
"dir": true,
"size": 0,
"mtime": 1791459645
}
],
"/media/usb0/SS1_backup/sdcard/_Console": [
{
"name": "NES_20240101.rbf",
"dir": false,
"size": 0,
"mtime": 1791459388
},
{
"name": "PSX_20240101.rbf",
"dir": false,
"size": 0,
"mtime": 1791459388
},
{
"name": "SNES_20240101.rbf",
"dir": false,
"size": 0,
"mtime": 1791459388
}
],
"/media/usb0/SS1_backup/sdcard/linux": [
{
"name": "bluetooth",
"dir": true,
"size": 0,
"mtime": 1791459388
},
{
"name": "gamecontrollerdb",
"dir": true,
"size": 0,
"mtime": 1791496561
},
{
"name": "samba.sh",
"dir": false,
"size": 10,
"mtime": 1791459388
},
{
"name": "wpa_supplicant.conf",
"dir": false,
"size": 7,
"mtime": 1791459388
}
],
"/media/usb0/SS1_backup/sdcard/Scripts": [
{
"name": "cifs_mount.sh",
"dir": false,
"size": 26349,
"mtime": 1791459904
},
{
"name": "cifs_umount.sh",
"dir": false,
"size": 7818,
"mtime": 1791459904
},
{
"name": "reflex_adapt_manager.sh",
"dir": false,
"size": 143416,
"mtime": 1791520190
},
{
"name": "sd_integrity.sh",
"dir": false,
"size": 38696,
"mtime": 1792061448
},
{
"name": "shutdown.sh",
"dir": false,
"size": 6490,
"mtime": 1792032898
},
{
"name": "ss1_debug_report.sh",
"dir": false,
"size": 25910,
"mtime": 1792061448
},
{
"name": "update_all.sh",
"dir": false,
"size": 8628,
"mtime": 1791520193
}
],
"/media/usb0/SS1_backup/sdcard/ConsoleMode": [
{
"name": "themeconfig",
"dir": true,
"size": 0,
"mtime": 1791520198
},
{
"name": "config.ini",
"dir": false,
"size": 8,
"mtime": 1791520369
},
{
"name": "screenscraper.txt",
"dir": false,
"size": 21,
"mtime": 1791459644
}
],
"/media/usb0/SS1_backup/saves": [
{
"name": "4-Thu",
"dir": true,
"size": 0,
"mtime": 1792061488
}
],
"/media/usb0/SS1_backup/saves/4-Thu": [
{
"name": "saves",
"dir": true,
"size": 0,
"mtime": 1791459645
},
{
"name": "savestates",
"dir": true,
"size": 0,
"mtime": 1791459388
}
]
},
"_mc": {
"cards": [
{
"name": "Living room card",
"real": true,
"versions": [
"2026-10-02_191540",
"2026-10-09_204112",
"2026-10-16_142403"
],
"saves": [
{
"slot": 1,
"blocks": [
1,
2
],
"name": "BASLUS-00067DRACULA",
"product": "SLUS-00067",
"region": "USA",
"title": "CASTLEVANIA SOTN - ALUCARD 200.6%",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAi0lEQVR4nLWTsQ2AMAwEnRRMwBCuqVJkGEZjGApX1BmCCdKYygiHyEmQ+PLlO31jgD9DiEyIbN14CwYAWLYZLElV8ISP9VRdU1CDJZniS6IEFixducSPwOXtLRiBpRPGtw5bnavN6oFDSk4tkGIEVgskmSL3wmqBZAq7OrBgM4TImSL3/IMp+Qz35gI//nI3KIJuBgAAAABJRU5ErkJggg=="
},
{
"slot": 3,
"blocks": [
3
],
"name": "BASCUS-94163FF7-S01",
"product": "SCUS-94163",
"region": "USA",
"title": "FF7 - CLOUD - MIDGAR 12:04",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nGNgGGjAiE3QpuLOfxh7QZ4yQ8KkuwwMDAwMRzpUMNSjCCBrRNeMLKYixQjXx4TLabg0o4vBDcDlbGxiyGoxXECszVgNIFbzgjxlTANI0YwsBjeAHM0YXiBVM4oBsERCjGbkBEVWICIDvEkZn82DBwAAEtZZFopIOCQAAAAASUVORK5CYII="
},
{
"slot": 4,
"blocks": [
4
],
"name": "BASCUS-94426CTR",
"product": "SCUS-94426",
"region": "USA",
"title": "CRASH TEAM RACING - ADVENTURE",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdUlEQVR4nO2Quw0AMQhDEQtkAwZjkgyROTJaam4CroqUD+Sja881tp8B+LWUJFJJpKsb/FriBrTNWqJLsSUIzPDkfEdQ21uz94spwDJXWVNMAsvsTekCJJHuzOMU9A53zVOAlqgn5sDcUeCteZyCAHCE7U15AZ/CWPuMzJUBAAAAAElFTkSuQmCC"
},
{
"slot": 5,
"blocks": [
5
],
"name": "BASCUS-94488GT2",
"product": "SCUS-94488",
"region": "USA",
"title": "GRAN TURISMO 2 - SIMULATION",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVR4nGNgGGjACGNERaX87zl3hKHEyAZFAS4xqRs3GBkYGBiYCCkkJAY3gBzNKAaQoxmrAaRoxjCAlHDAMGA0EEnTTNVAHHgAAN0YXRhpy6d2AAAAAElFTkSuQmCC"
}
]
},
{
"name": "RPG card",
"real": false,
"versions": [
"2026-10-12_101500"
],
"saves": [
{
"slot": 1,
"blocks": [
1
],
"name": "BASLUS-00670FFT01",
"product": "SLUS-00670",
"region": "USA",
"title": "FINAL FANTASY TACTICS - CH.2",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhklEQVR4nL2SwQ2AIBAEB2MVVmAJlmElvimBt5VcGZZgBbahP6NwwOFDnhtmCJt1KOfY/LkGeWWLnxmm4OK7nSbQ4DgrCqxwVVCDiwILDNDnCtMykDPOnJ/HJLQK1yDvL7TC8OjgC3wLvsIArqVELUumCZArNshum3LtZbPglyWqgvwS03MB1eJnPfAAN+IAAAAASUVORK5CYII="
},
{
"slot": 2,
"blocks": [
2
],
"name": "BASLUS-00958SUIKO2",
"product": "SLUS-00958",
"region": "USA",
"title": "SUIKODEN II - NORTH WINDOW",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR4nK2RMRZAQAxExxbOolI7i8oJVApHUKicQOUsapWzaFYVL9mEF4/fiZns7gzwkcwaFmMd+ffc9mimAXu3KH3wmq1/asGTmViPTWiuK3GzdVUy00LSBK8ZAKq8VAeqDLzMbQ+1gIYes8imGOu4Hlu0Uk4hnXiClfYdqS5YwzcEQCaf9syx2hKV8Z4J63n8QNEC79ljVgu4wGP+hRPVq2NykB0JgQAAAABJRU5ErkJggg=="
},
{
"slot": 3,
"blocks": [
3
],
"name": "BASCUS-94163FF7-S01",
"product": "SCUS-94163",
"region": "USA",
"title": "FF7 - CLOUD - MIDGAR 12:04",
"icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVR4nGNgGGjAiE3QpuLOfxh7QZ4yQ8KkuwwMDAwMRzpUMNSjCCBrRNeMLKYixQjXx4TLabg0o4vBDcDlbGxiyGoxXECszVgNIFbzgjxlTANI0YwsBjeAHM0YXiBVM4oBsERCjGbkBEVWICIDvEkZn82DBwAAEtZZFopIOCQAAAAASUVORK5CYII="
}
]
}
]
}
};
