const authBtn = document.getElementById('auth-btn');
const bootScreen = document.getElementById('boot-screen');
const heroContent = document.querySelector('.hero-content');

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
