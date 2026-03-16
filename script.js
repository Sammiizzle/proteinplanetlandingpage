/**
 * PROTEIN PLANET - OPERATING SYSTEM v1.0.4
 * MISSION: LONE STAR-1
 */

// --- 1. THE TERMINAL GLITCH ENGINE ---
const analysisText = document.querySelector('.analysis');
const originalMessage = "ANALYZING SAMPLE: PT-99 [EXTRATERRESTRIAL]";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function glitchEffect(element, message) {
    if (!element) return;
    let iteration = 0;
    
    const interval = setInterval(() => {
        element.innerText = message.split("").map((char, index) => {
            if (index < iteration) return message[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        
        if (iteration >= message.length) clearInterval(interval);
        iteration += 1/2; // Speed of decoding
    }, 30);
}

// --- 2. THE PRECISION MISSION TIMER ---
const countdownElement = document.getElementById("countdown");
const launchDate = new Date("July 1, 2026 00:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // BO3 Style Formatting: DD:HH:MM:SS
    if (countdownElement) {
        countdownElement.innerHTML = 
            `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
};

// --- 3. THE MECHANICAL HOURGLASS (FLUID DYNAMICS) ---
let progress = 0;
const sand = document.querySelector('.sand-bottom');

const fillHourglass = () => {
    if (progress >= 72) { // "Stabilizing" at 72%
        // Occasional flicker/fluctuation to make it look alive
        let fluctuation = 72 + (Math.random() * 0.5);
        if (sand) sand.style.height = fluctuation + "%";
    } else {
        progress += 0.3;
        if (sand) sand.style.height = progress + "%";
    }
};

// --- INITIALIZE SYSTEM ---
window.onload = () => {
    glitchEffect(analysisText, originalMessage);
    setInterval(updateTimer, 1000);
    setInterval(fillHourglass, 50);
    updateTimer(); // Run once immediately
};
