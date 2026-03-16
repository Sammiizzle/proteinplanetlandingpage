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

    // --- THE EMBER ENGINE ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 40; // Keep it subtle for that "Top-Tier" feel

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.5 + 0.2; // Slow drift upward
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(255, ${78 + Math.random() * 50}, 0, ${this.opacity})`;
    }
    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < -10) this.reset();
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// Initialize on load
initParticles();
animateParticles();

};
// --- THE MISSION LAUNCH SEQUENCE ---
const authBtn = document.getElementById('auth-btn');
const bootScreen = document.getElementById('boot-screen');
const mainHUD = document.querySelector('.hero-content'); // This is your main site

authBtn.addEventListener('click', () => {
    // 1. Trigger the "System Online" Audio
    if (typeof triggerAtmosphere === "function") {
        triggerAtmosphere(); 
    }
    
    // 2. Play a "Success" sound or visual glitch
    authBtn.innerText = "IDENTITY VERIFIED";
    authBtn.style.borderColor = "#00ff00"; // Brief green flash for success
    authBtn.style.color = "#00ff00";

    // 3. Slide the curtain (The Fade Out)
    setTimeout(() => {
        bootScreen.style.transition = "all 1.5s cubic-bezier(0.19, 1, 0.22, 1)";
        bootScreen.style.opacity = '0';
        bootScreen.style.filter = "blur(20px)"; // Adds that high-end lens effect
        
        // 4. Reveal the HUD
        setTimeout(() => {
            bootScreen.style.display = 'none';
            // Start the main HUD animations
            glitchText(document.querySelector('.analysis'), "SYSTEMS NOMINAL... WELCOME COMMANDER.");
        }, 1500);
    }, 800);
});
