const dropdown = document.querySelector(".dropdown");
      const submenu = document.querySelector(".submenu");

      dropdown.addEventListener("click", (e) => {
        e.preventDefault();
        submenu.classList.toggle("show");
      });

      document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target)) {
          submenu.classList.remove("show");
        }
      });
      const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

/* tilt */

const rotateX = (y - centerY) / 8;
const rotateY = (centerX - x) / 8;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

/* glow */

card.style.setProperty("--x", x + "px");
card.style.setProperty("--y", y + "px");

});


card.addEventListener("mouseleave", () => {

card.style.transform =
"rotateX(0) rotateY(0) scale(1)";

});

});