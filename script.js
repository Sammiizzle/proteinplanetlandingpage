const countdownElement = document.getElementById("countdown")

const launchDate = new Date("July 1, 2026 00:00:00").getTime()

const timer = setInterval(function(){

const now = new Date().getTime()

const distance = launchDate - now

const days = Math.floor(distance / (1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

countdownElement.innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s"

},1000)

const analysisText = document.querySelector('.analysis');
const sandBottom = document.querySelector('.sand-bottom');
const originalMessage = "ANALYZING SAMPLE: PT-99...";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%@#$";

// 1. Terminal Glitch Effect
function glitchText(element, finalMessage) {
    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = finalMessage.split("")
            .map((char, index) => {
                if (index < iteration) return finalMessage[index];
                return chars[Math.floor(Math.random() * 40)];
            })
            .join("");
        
        if (iteration >= finalMessage.length) clearInterval(interval);
        iteration += 1 / 3;
    }, 30);
}

// 2. Hourglass Progression (Simulating a mission loading)
let progress = 40; // Starting %
function updateHourglass() {
    if (progress < 100) {
        progress += Math.random() * 2;
        sandBottom.style.height = `${progress}%`;
    }
}

// Initialize
glitchText(analysisText, originalMessage);
setInterval(updateHourglass, 2000);
