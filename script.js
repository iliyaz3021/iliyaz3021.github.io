// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});

// Cursor Glow Follow
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hide Navbar on Scroll Down
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.opacity = "0";
  } else {
    navbar.style.opacity = "1";
  }
  lastScroll = currentScroll;
});
