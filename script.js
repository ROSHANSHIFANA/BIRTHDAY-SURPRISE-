document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.background-hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        heartsContainer.appendChild(heart);
    }
});

const riddles = [
    { question: "What is your favorite thing?", answer: "briyani" },
    { question: "Who is most important to you?", answer: "appa" },
    { question: "What do you want for this birthday?", answer: "a gift" }
];
let currentRiddle = 0;

function checkRiddle() {
    const answer = document.getElementById('riddle-answer').value.toLowerCase();
    // Only check riddles in range, to avoid 'undefined'
    if (currentRiddle < riddles.length && answer.includes(riddles[currentRiddle].answer)) {
        currentRiddle++;
        if (currentRiddle < riddles.length) {
            document.getElementById('riddle-question').innerText = riddles[currentRiddle].question;
            document.getElementById('riddle-answer').value = '';
        } else {
            document.getElementById('riddle-container').classList.add('hidden');
            document.getElementById('message-container').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('heart-button').classList.remove('hidden');
            }, 20000); // Show button after 20 seconds
        }
    } else if (currentRiddle < riddles.length) {
        alert("Not quite! Try again.");
    }
}

document.getElementById('heart-button').addEventListener('click', () => {
    document.getElementById('message-container').classList.add('hidden');
    document.getElementById('slideshow-container').classList.remove('hidden');
    startSlideshow();
});

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

function startSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.backgroundImage = `url('${images[currentImage]}')`;

    const interval = setInterval(() => {
        currentImage++;
        if (currentImage >= images.length) {
            clearInterval(interval);
            document.getElementById('birthday-blast-button').classList.remove('hidden');
        } else {
            slideshow.style.backgroundImage = `url('${images[currentImage]}')`;
        }
    }, 3000); // Change image every 3 seconds
}

document.getElementById('birthday-blast-button').addEventListener('click', () => {
    document.getElementById('slideshow-container').classList.add('hidden');
    document.getElementById('birthday-blast-container').classList.remove('hidden');
    // Add fireworks or animations here if desired
});
