# 🧭 Pro Speed Tracker — GPS Speedometer & Digital HUD

A high-precision, real-time GPS Speedometer and Heads-Up Display (HUD) web application built using modern **HTML5 Canvas**, **CSS3 Custom Properties**, and the **Web Geolocation API**.

![HTML5](https://img.shields.io/badge/HTML5-Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Dark%20%2F%20Light-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Geolocation_API-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Mobile-HUD%20Ready-brightgreen?style=for-the-badge)

---

## ⚡ Highlights & Capabilities

- **🛰️ Live GPS Geolocation Tracking**:
  - Leverages `navigator.geolocation.watchPosition` with `{ enableHighAccuracy: true }` for real-time sensor updates.
  - Smooth animation interpolation (linear lerping) for fluid needle transitions without jerky jumps.

- **🎛️ Dual Visualization Modes**:
  - **Analog Dial Gauge**: High-performance HTML5 Canvas rendering featuring calibrated radial arcs, tick marks, dynamic danger-zone redlines (>180 KM/H), and a glowing illuminated needle.
  - **Digital HUD Mode**: Minimalist, high-contrast digital readout designed for cycling, running, or dashboard mounting in a vehicle.

- **🔄 Multi-Unit Conversions**:
  - Seamlessly toggle between **KM/H** (Kilometers per hour), **MPH** (Miles per hour), and **M/S** (Meters per second) on the fly.

- **🌍 10-Language Internationalization (i18n)**:
  - Instant UI translation across 10 global languages:
    - 🇺🇸 English
    - 🇪🇸 Español (Spanish)
    - 🇫🇷 Français (French)
    - 🇩🇪 Deutsch (German)
    - 🇮🇳 हिन्दी (Hindi)
    - 🇨🇳 中文 (Mandarin)
    - 🇸🇦 العربية (Arabic)
    - 🇷🇺 Русский (Russian)
    - 🇧🇷 Português (Portuguese)
    - 🇯🇵 日本語 (Japanese)

- **🌗 Dark / Light Mode**:
  - Instant theme toggle with dynamic CSS custom properties for daytime clarity and glare-free night driving.

- **⏰ Digital Clock & Calendar**:
  - Synchronized real-time clock (`HH:MM:SS`) and date display.

---

## 📂 Project Structure

```text
web2/
├── index.html          # Application layout and control containers
├── style2.css          # Theme variables, responsive styles, and animations
├── gps.js              # Geolocation watcher, Canvas rendering, and translations
└── README.md           # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
A modern mobile or desktop web browser with GPS / location support (Chrome, Safari, Firefox, Edge).

> **Note**: For live GPS speed tracking, access the site over `HTTPS` or `localhost` (browsers enforce secure contexts for the Geolocation API) and ensure device location permissions are granted.

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Mohammed-Ashraf-Shaik/web2.git
   ```
2. Open `index.html` in your browser:
   ```bash
   cd web2
   # On Windows
   start index.html
   ```
   Or serve it with any static server:
   ```bash
   npx serve .
   ```
3. Click **START SYSTEM** and allow location permissions when prompted.

---

## 🛠️ Built With

- **HTML5 Canvas** — 60 FPS hardware-accelerated gauge rendering.
- **Vanilla JavaScript** — Zero external frameworks or heavy libraries.
- **CSS3 Variables** — Seamless dark/light theme transitions.
- **Web Geolocation API** — Satellite/cell tower velocity calculation.

---

## 👤 Author

**Mohammad Ashraf Shaik**
- GitHub: [@Mohammed-Ashraf-Shaik](https://github.com/Mohammed-Ashraf-Shaik)
- LeetCode: [Shaik_mohameed_Ashraf](https://leetcode.com/u/Shaik_mohameed_Ashraf)
- Chess.com: [ashumm](https://www.chess.com/member/ashumm)
