// --- 1. MOUSE PARALLAX ---
document.addEventListener('mousemove', (e) => {
    const planet = document.querySelector('.planet-layer');
    if (planet) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        planet.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// --- 2. TERMINAL GLITCH ENGINE ---
function glitchText(element, message) {
    if (!element) return;
    const chars = "!@#$%^&*()_PX0123456789";
    let iter = 0;
    const interval = setInterval(() => {
        element.innerText = message.split("").map((char, index) => {
            if (index < iter) return message[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if (iter >= message.length) clearInterval(interval);
        iter += 1/3;
    }, 30);
}

// --- 3. SYSTEM INITIALIZATION ---
window.onload = () => {
    const analysis = document.querySelector('.analysis');
    glitchText(analysis, "ANALYZING BIOMETRIC SAMPLES...");

    // Countdown Logic
    const countdown = document.getElementById('countdown');
    const target = new Date("July 1, 2026 00:00:00").getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        countdown.innerText = `${d}D:${h}H:${m}M:${s}S`;
    }, 1000);

    // Bio-Synthesis Progress
    let progress = 0;
    const sand = document.querySelector('.sand-bottom');
    setInterval(() => {
        if (progress < 70) {
            progress += 0.1;
            if (sand) sand.style.height = progress + "%";
        }
    }, 50);

    // Lore Logs
    const logData = ["HULL INTEGRITY: 14%", "O2 RESERVES: LOW", "BIO-SAMPLE DETECTED", "RE-ENTRY IN 108 DAYS"];
    const logEl = document.getElementById('system-log');
    let logIdx = 0;
    setInterval(() => {
        glitchText(logEl, logData[logIdx]);
        logIdx = (logIdx + 1) % logData.length;
    }, 4000);
};
