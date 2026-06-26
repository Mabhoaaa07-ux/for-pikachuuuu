// =============================
// Romantic Website Script
// Part 1
// =============================

const giftBox = document.getElementById("giftBox");
const welcome = document.getElementById("welcome");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const heartContainer = document.getElementById("heart-container");
const noBtn = document.getElementById("noBtn");

// -----------------------------
// Open Gift
// -----------------------------

giftBox.addEventListener("click", () => {

    giftBox.classList.add("gift-open");

    setTimeout(() => {

        welcome.classList.add("show");

    }, 700);

});

// -----------------------------
// Music Button
// -----------------------------

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        playing = true;

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        music.pause();

        playing = false;

        musicBtn.innerHTML = "🎵 Play Music";

    }

});

// -----------------------------
// Floating Hearts
// -----------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 300);

// -----------------------------
// Funny NO Button
// -----------------------------

function moveButton() {

    const x = Math.random() * 250 - 125;

    const y = Math.random() * 150 - 75;

    noBtn.style.transform =
        `translate(${x}px,${y}px)`;

}

// -----------------------------
// YES Button
// -----------------------------

function sayYes() {

    alert("Yayyyyy!! ❤️\nI Love You Pikachuuuuuu ❤️");

    startFireworks();

    setTimeout(() => {

        document.querySelector(".page5").scrollIntoView({

            behavior: "smooth"

        });

    }, 1000);

}

// =============================
// Part 2
// Fireworks + Confetti
// =============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        this.dx = (Math.random() - 0.5) * 8;
        this.dy = (Math.random() - 0.5) * 8;

        this.life = 100;

        this.color = color;

        this.size = Math.random() * 4 + 2;
    }

    update() {

        this.x += this.dx;

        this.y += this.dy;

        this.dy += 0.03;

        this.life--;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

function createFirework() {

    let x = Math.random() * canvas.width;

    let y = Math.random() * canvas.height * 0.5;

    const colors = [

        "#ff0055",

        "#ffea00",

        "#00e5ff",

        "#ffffff",

        "#ff66cc",

        "#00ff88"

    ];

    for (let i = 0; i < 80; i++) {

        particles.push(

            new Particle(

                x,

                y,

                colors[Math.floor(Math.random() * colors.length)]

            )

        );

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {

        particle.update();

        particle.draw();

        if (particle.life <= 0) {

            particles.splice(index, 1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function startFireworks() {

    createFirework();

    let interval = setInterval(createFirework, 700);

    setTimeout(() => {

        clearInterval(interval);

    }, 10000);

}

// =============================
// Extra Heart Burst
// =============================

function burstHearts() {

    for (let i = 0; i < 40; i++) {

        createHeart();

    }

}

const yesButton = document.querySelector(".yes-btn");

yesButton.addEventListener("click", () => {

    burstHearts();

});

// =============================
// Auto Scroll Support
// =============================

document.querySelectorAll(".page").forEach(page => {

    page.addEventListener("wheel", function(e) {

        e.preventDefault();

        if (e.deltaY > 0) {

            this.nextElementSibling?.scrollIntoView({

                behavior: "smooth"

            });

        } else {

            this.previousElementSibling?.scrollIntoView({

                behavior: "smooth"

            });

        }

    }, {

        passive: false

    });

});

// =============================
// End
// =============================