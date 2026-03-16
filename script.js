const countdownElement = document.getElementById("countdown");
const launchDate = new Date("July 1, 2026 00:00:00").getTime();

// 1. Precise Countdown
const updateTimer = () => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}D:${hours}H:${minutes}M:${seconds}S`;
};
setInterval(updateTimer, 1000);

// 2. Terminal Glitch (Optimized)
const analysisText = document.querySelector('.analysis');
const originalMessage = "ANALYZING SAMPLE: PT-99 [EXTRATERRESTRIAL]";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function glitchEffect(element, message) {
    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = message.split("").map((char, index) => {
            if (index < iteration) return message[index];
            return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if (iteration >= message.length) clearInterval(interval);
        iteration += 1/2;
    }, 40);
}
glitchEffect(analysisText, originalMessage);

// 3. Realistic Hourglass Growth
let progress = 0;
const sand = document.querySelector('.sand-bottom');
const fillHourglass = setInterval(() => {
    if (progress >= 65) { // Stop at a certain percentage for "stabilizing" feel
        clearInterval(fillHourglass);
    } else {
        progress += 0.5;
        sand.style.height = progress + "%";
    }
}, 50);
