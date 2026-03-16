// --- PARALLAX EFFECT ---
document.addEventListener('mousemove', (e) => {
    const planet = document.querySelector('.planet-layer');
    const x = (window.innerWidth / 2 - e.pageX) / 60;
    const y = (window.innerHeight / 2 - e.pageY) / 60;
    planet.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

// --- TERMINAL GLITCH ---
const analysisText = document.querySelector('.analysis');
const msg = "ANALYZING BIOMETRIC SAMPLES: [STABLE]";
const chars = "!@#$%^&*()_PX0123456789";

function glitch(element, text) {
    let iter = 0;
    const interval = setInterval(() => {
        element.innerText = text.split("").map((char, index) => {
            if (index < iter) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if (iter >= text.length) clearInterval(interval);
        iter += 1/3;
    }, 40);
}

// --- COUNTDOWN & HOURGLASS ---
let progress = 0;
const sand = document.querySelector('.sand-bottom');

window.onload = () => {
    glitch(analysisText, msg);
    
    // Smooth Bio-Fill
    setInterval(() => {
        if (progress < 68) {
            progress += 0.2;
            if (sand) sand.style.height = progress + "%";
        }
    }, 50);

    // Standard Countdown Logic
    const timer = document.getElementById('countdown');
    const target = new Date("July 1, 2026 00:00:00").getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        timer.innerText = `${d}D:${h}H:${m}M:${s}S`;
    }, 1000);
};
