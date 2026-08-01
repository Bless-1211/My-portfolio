const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//typing

const words = [
    "Front-End Developer",
    "UI Designer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {
        document.getElementById("typed").textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        document.getElementById("typed").textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


// menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

//scrolling
// Scroll Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach((element) => {
    revealOnScroll.observe(element);
});