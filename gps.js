const canvas = document.getElementById('speedCanvas');
const ctx = canvas.getContext('2d');
const digiOnly = document.getElementById('digital-only');
const radius = 200;

let currentSpeedMS = 0; 
let targetSpeedMS = 0;
let isDigitalMode = false;
let gpsStarted = false;
let unitIndex = 0;

const units = [
    { label: "KM/H", factor: 3.6 },
    { label: "MPH", factor: 2.23694 },
    { label: "M/S", factor: 1 }
];

const translations = {
    en: { title: "SPEEDOMETER", start: "START SYSTEM", active: "ACTIVE", analog: "ANALOG", digital: "DIGITAL" },
    es: { title: "VELOCÍMETRO", start: "INICIAR", active: "ACTIVO", analog: "ANALÓGICO", digital: "DIGITAL" },
    fr: { title: "TACHYMÈTRE", start: "DÉMARRER", active: "ACTIF", analog: "ANALOGIQUE", digital: "NUMÉRIQUE" },
    de: { title: "TACHOMETER", start: "STARTEN", active: "AKTIV", analog: "ANALOG", digital: "DIGITAL" },
    hi: { title: "गतिमापी", start: "शुरू करें", active: "सक्रिय", analog: "एनालॉग", digital: "डिजिटल" },
    zh: { title: "速度计", start: "启动", active: "运行中", analog: "模拟", digital: "数字" },
    ar: { title: "مقياس السرعة", start: "بدء", active: "نشط", analog: "تناظري", digital: "رقمي" },
    ru: { title: "СПИДОМЕТР", start: "ЗАПУСК", active: "АКТИВНО", analog: "АНАЛОГ", digital: "ЦИФРОВОЙ" },
    pt: { title: "VELOCÍMETRO", start: "INICIAR", active: "ATIVO", analog: "ANALÓGICO", digital: "DIGITAL" },
    ja: { title: "速度計", start: "開始", active: "中", analog: "アナログ", digital: "デジタル" }
};

ctx.translate(radius, radius);

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.getElementById('theme-icon').innerText = document.body.classList.contains('light-mode') ? "☀️" : "🌙";
}

function changeLang(lang) {
    document.getElementById('txt-speedometer').innerText = translations[lang].title;
    document.getElementById('btn-analog').innerText = translations[lang].analog;
    document.getElementById('btn-digital').innerText = translations[lang].digital;
    document.getElementById('btn-start').innerText = gpsStarted ? translations[lang].active : translations[lang].start;
}

function setUnit(index) {
    unitIndex = index;
    document.querySelectorAll('.btn-group:first-child .btn').forEach((b, i) => b.classList.toggle('active', i === index));
    document.getElementById('digi-unit').innerText = units[index].label;
}

function setView(isDigital) {
    isDigitalMode = isDigital;
    canvas.style.display = isDigital ? 'none' : 'block';
    digiOnly.style.display = isDigital ? 'block' : 'none';
    document.getElementById('btn-analog').classList.toggle('active', !isDigital);
    document.getElementById('btn-digital').classList.toggle('active', isDigital);
}

function startTracking() {
    if (!gpsStarted) {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition((pos) => {
                targetSpeedMS = pos.coords.speed || 0;
                document.getElementById('status').innerText = "GPS ACTIVE";
            }, null, { enableHighAccuracy: true });
            gpsStarted = true;
            const btn = document.getElementById('btn-start');
            btn.innerText = "ACTIVE";
            btn.style.background = "#444";
            btn.style.color = "#fff";
        }
    }
}

function updateDisplay() {
    currentSpeedMS += (targetSpeedMS - currentSpeedMS) * 0.1;
    let displaySpeed = currentSpeedMS * units[unitIndex].factor;
    document.getElementById('digi-val').innerText = Math.round(displaySpeed);
    if (!isDigitalMode) drawAnalog(displaySpeed);
    updateTime();
    requestAnimationFrame(updateDisplay);
}

function drawAnalog(speed) {
    ctx.clearRect(-radius, -radius, radius*2, radius*2);
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color');
    const tickColor = getComputedStyle(document.body).getPropertyValue('--tick-color');
    
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.9, 0.75 * Math.PI, 2.25 * Math.PI);
    ctx.strokeStyle = tickColor; ctx.lineWidth = 15; ctx.stroke();

    for (let i = 0; i <= 220; i += 20) {
        let angle = (i * 1.5 * Math.PI / 220) + (0.75 * Math.PI);
        ctx.beginPath();
        ctx.strokeStyle = i > 180 ? "#ff4444" : tickColor;
        ctx.lineWidth = 3;
        ctx.moveTo(Math.cos(angle)*(radius-25), Math.sin(angle)*(radius-25));
        ctx.lineTo(Math.cos(angle)*(radius-10), Math.sin(angle)*(radius-10));
        ctx.stroke();
        ctx.fillStyle = i > 180 ? "#ff4444" : tickColor;
        ctx.font = "14px Arial"; ctx.textAlign = "center";
        ctx.fillText(i, Math.cos(angle)*(radius-50), Math.sin(angle)*(radius-50));
    }

    ctx.fillStyle = textColor; ctx.font = "bold 45px Arial";
    ctx.fillText(Math.round(speed), 0, 50);
    ctx.font = "12px Arial"; ctx.fillStyle = tickColor;
    ctx.fillText(units[unitIndex].label, 0, 75);

    let needleAngle = (speed * 1.5 * Math.PI / 220) + (0.75 * Math.PI);
    ctx.beginPath(); ctx.lineWidth = 4; ctx.strokeStyle = textColor; ctx.lineCap = "round";
    ctx.moveTo(0, 0); ctx.lineTo(Math.cos(needleAngle)*(radius-35), Math.sin(needleAngle)*(radius-35));
    ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI*2); ctx.fillStyle = textColor; ctx.fill();
}

function updateTime() {
    const now = new Date();
    document.getElementById('digital-time').innerText = now.toLocaleTimeString([], { hour12: true });
    document.getElementById('digital-date').innerText = now.toLocaleDateString([], { month: 'short', day: 'numeric' }).toUpperCase();
}

updateDisplay();