const particlesContainer = document.getElementById('particles');
const avatar = document.getElementById('avatar');

function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const colors = ['#00d4ff', '#8b5cf6', '#10b981', '#f472b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.background = randomColor;
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        
        particlesContainer.appendChild(particle);
    }
}

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

function initAvatar() {
    const name = 'Ivo Giovarruscio';
    avatar.textContent = getInitials(name);
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initAvatar();
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    particlesContainer.style.transform = `translateY(${scrolled * 0.3}px)`;
});
