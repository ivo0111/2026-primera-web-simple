const particlesContainer = document.getElementById('particles');
const avatar = document.getElementById('avatar');

function createStars() {
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = -20 + 'px';
        star.style.width = (1 + Math.random() * 3) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 12 + 's';
        star.style.animationDuration = (8 + Math.random() * 8) + 's';
        
        particlesContainer.appendChild(star);
    }
}

function createCodeElements() {
    const codeChars = ['{ }', '< >', '( )', '[ ]', '//', '**', '=>', '++', '&&', '||'];
    const container = document.createElement('div');
    container.className = 'code-elements';
    
    for (let i = 0; i < 15; i++) {
        const char = document.createElement('span');
        char.className = 'code-char';
        char.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
        
        const colors = ['rgba(0, 212, 255, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(16, 185, 129, 0.15)'];
        char.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        char.style.left = Math.random() * 100 + '%';
        char.style.top = Math.random() * 100 + '%';
        char.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(char);
    }
    
    particlesContainer.appendChild(container);
}

function createBinaryRain() {
    const container = document.createElement('div');
    container.className = 'binary-rain';
    
    for (let i = 0; i < 8; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        
        let binary = '';
        for (let j = 0; j < 15; j++) {
            binary += Math.random() > 0.5 ? '1' : '0';
            if (j < 14) binary += '\n';
        }
        
        column.textContent = binary;
        column.style.left = (5 + i * 12) + '%';
        column.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(column);
    }
    
    particlesContainer.appendChild(container);
}

function createGraphNodes() {
    const container = document.createElement('div');
    container.className = 'graph-nodes';
    
    const nodePositions = [
        { x: 10, y: 15 }, { x: 25, y: 35 }, { x: 40, y: 20 },
        { x: 60, y: 40 }, { x: 75, y: 25 }, { x: 85, y: 50 },
        { x: 15, y: 60 }, { x: 50, y: 70 }, { x: 70, y: 75 }
    ];
    
    nodePositions.forEach((pos, i) => {
        const node = document.createElement('div');
        node.className = 'graph-node';
        node.style.left = pos.x + '%';
        node.style.top = pos.y + '%';
        node.style.animationDelay = (i * 0.3) + 's';
        container.appendChild(node);
    });
    
    const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
        [0, 6], [6, 7], [7, 8], [8, 5], [1, 7], [2, 4]
    ];
    
    connections.forEach((conn, i) => {
        const line = document.createElement('div');
        line.className = 'graph-line';
        
        const start = nodePositions[conn[0]];
        const end = nodePositions[conn[1]];
        
        const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
        const angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
        
        line.style.left = start.x + '%';
        line.style.top = start.y + '%';
        line.style.width = length + '%';
        line.style.transform = `rotate(${angle}deg)`;
        line.style.animationDelay = (i * 0.2) + 's';
        
        container.appendChild(line);
    });
    
    particlesContainer.appendChild(container);
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

function initRating() {
    const stars = document.querySelectorAll('.star');
    const message = document.getElementById('rating-message');
    const messages = [
        '¡Gracias! Tu opinión me ayuda a mejorar.',
        '¡Gracias! Me alegra que te haya gustado.',
        '¡Excelente! Tus 3 estrellas son apreciadas.',
        '¡Genial! 4 estrellas, ¡excelente!',
        '¡Perfecto! 5 estrellas, ¡te lo agradezco mucho!'
    ];

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.dataset.value);
            
            stars.forEach(s => {
                const sValue = parseInt(s.dataset.value);
                s.classList.toggle('active', sValue <= value);
            });

            message.textContent = messages[value - 1];
        });

        star.addEventListener('mouseenter', () => {
            const value = parseInt(star.dataset.value);
            stars.forEach(s => {
                const sValue = parseInt(s.dataset.value);
                s.style.color = sValue <= value ? '#fbbf24' : '';
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => {
                if (!s.classList.contains('active')) {
                    s.style.color = '';
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initAvatar();
    initRating();
});
