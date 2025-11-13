document.addEventListener('DOMContentLoaded', () => {
    // Create moving hearts in the background
    const heartsContainer = document.querySelector('.background-hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heartsContainer.appendChild(heart);
    }

    // Bind event listeners after DOM is ready
    const heartButton = document.getElementById('heart-button');
    if (heartButton) {
        heartButton.addEventListener('click', () => {
            document.getElementById('message-container').classList.add('hidden');
            document.getElementById('slideshow-container').classList.remove('hidden');
            startSlideshow();
        });
    }

    const blastButton = document.getElementById('birthday-blast-button');
    if (blastButton) {
        blastButton.addEventListener('click', () => {
            document.getElementById('slideshow-container').classList.add('hidden');
            document.getElementById('birthday-blast-container').classList.remove('hidden');
        });
    }
});

const riddles = [
    { question: "What is your favorite thing?", answer: "briyani" },
    { question: "Who is most important to you?", answer: "appa" },
    { question: "What do you want for this birthday?", answer: "a gift" }
];
let currentRiddle = 0;

function checkRiddle() {
    const answer = document.getElementById('riddle-answer').value.trim().toLowerCase();
    if (currentRiddle < riddles.length && answer.includes(riddles[currentRiddle].answer)) {
        currentRiddle++;
        if (currentRiddle < riddles.length) {
            document.getElementById('riddle-question').innerText = riddles[currentRiddle].question;
            document.getElementById('riddle-answer').value = '';
        } else {
            document.getElementById('riddle-container').classList.add('hidden');
            document.getElementById('message-container').classList.remove('hidden');
            setTimeout(() => {
                const heartButton = document.getElementById('heart-button');
                if (heartButton) heartButton.classList.remove('hidden');
            }, 20000); // Show button after 20 seconds
        }
    } else if (currentRiddle < riddles.length) {
        alert("Not quite! Try again.");
    }
}

const images = [
    'IMG-20251106-WA0020.jpg',
    'IMG-20251106-WA0021.jpg',
    'IMG-20251106-WA0022.jpg',
    'IMG-20251106-WA0023.jpg',
    'IMG-20251106-WA0024.jpg',
    'IMG-20251106-WA0025.jpg',
    'IMG-20251106-WA0026.jpg',
    'IMG-20251106-WA0027.jpg',
    'IMG-20251106-WA0028.jpg',
    'IMG-20251106-WA0029.jpg'
];
let currentImage = 0;
let interval = null;

function startSlideshow() {
    currentImage = 0;
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;
    slideshow.style.backgroundImage = `url('${images[currentImage]}')`;

    interval = setInterval(() => {
        currentImage++;
        if (currentImage >= images.length) {
            clearInterval(interval);
            const blastButton = document.getElementById('birthday-blast-button');
            if (blastButton) blastButton.classList.remove('hidden');
        } else {
            slideshow.style.backgroundImage = `url('${images[currentImage]}')`;
        }
    }, 3000);
}


