const typingText = [
  "Please maan jao na... 🥺❤️",
  "Meri taraf se dil se sorry... 🙏🏻",
  "Aapki smile wapas chahiye... 🌸",
  "Sorry meri Pyaari Madam Ji... 💗"
];

let line = 0;
let char = 0;
let deleting = false;

function typeLoop() {
  const el = document.getElementById("typing");
  const current = typingText[line];

  if (!deleting) {
    el.textContent = current.substring(0, char + 1);
    char++;

    if (char === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    el.textContent = current.substring(0, char - 1);
    char--;

    if (char === 0) {
      deleting = false;
      line = (line + 1) % typingText.length;
    }
  }

  setTimeout(typeLoop, deleting ? 45 : 75);
}

function openMessage() {
  document.getElementById("modal").style.display = "flex";
}

function closeMessage() {
  document.getElementById("modal").style.display = "none";
}

function scrollToLetter() {
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
}

function forgive() {
  const box = document.getElementById("forgiveMessage");
  box.style.display = "block";
  createBurst();
}

function moveNoButton() {
  const btn = document.getElementById("noBtn");

  btn.style.position = "relative";
  btn.style.left = (Math.random() * 100 - 50) + "px";
  btn.style.top = (Math.random() * 50 - 25) + "px";
}

function createHeart() {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = Math.random() > .2 ? "❤️" : "💗";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (15 + Math.random() * 25) + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 11000);
}

function createSpark() {
  const s = document.createElement("div");
  s.className = "spark";
  s.textContent = Math.random() > .5 ? "✨" : "🌸";
  s.style.left = Math.random() * 100 + "vw";
  s.style.fontSize = (10 + Math.random() * 15) + "px";
  s.style.animationDuration = (4 + Math.random() * 5) + "s";
  document.body.appendChild(s);

  setTimeout(() => s.remove(), 10000);
}

function createBurst() {
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 45);
  }
}

setInterval(createHeart, 600);
setInterval(createSpark, 900);
typeLoop();

document.getElementById("modal").addEventListener("click", function(e) {
  if (e.target === this) closeMessage();
});
