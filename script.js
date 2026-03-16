const authBtn = document.getElementById('auth-btn');
const bootScreen = document.getElementById('boot-screen');
const heroContent = document.querySelector('.hero-content');
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initialize size immediately

authBtn.addEventListener('click', () => {
    // Visual feedback
    authBtn.innerText = "ACCESS GRANTED";
    authBtn.style.color = "#00ff00";
    authBtn.style.borderColor = "#00ff00";

    setTimeout(() => {
        bootScreen.style.opacity = '0';
        // This is the key: reveal the HUD
        heroContent.style.display = 'grid'; 
        
        setTimeout(() => {
            bootScreen.style.display = 'none';
        }, 1000);
    }, 1000);
});

// (Keep your particle and terminal code below this)
// Inside your Particle class draw function
ctx.fillStyle = `rgba(255, 160, 50, ${this.opacity})`; // Brighter amber
ctx.shadowBlur = 5;
ctx.shadowColor = "orange";
