const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const plannerForm = document.getElementById("plannerForm");
const resultBox = document.getElementById("resultBox");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      const category = card.dataset.category;
      const show = filter === "all" || filter === category;
      card.style.display = show ? "block" : "none";
    });
  });
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const style = document.getElementById("style").value;
  const season = document.getElementById("season").value;
  const tips = {
    heritage: {
      winter: "Try Jaipur + Agra in winter for pleasant weather and heritage walks.",
      summer: "Visit Mysuru and Hampi early mornings; keep afternoons light.",
      monsoon: "Explore Udaipur and nearby forts with dramatic rainy season views."
    },
    mountains: {
      winter: "Plan Manali or Gulmarg for snow, scenic stays, and cozy mountain cafes.",
      summer: "Choose Himachal or Sikkim for cool weather and nature treks.",
      monsoon: "Head to Ladakh in monsoon months for clearer roads and dry landscapes."
    },
    beach: {
      winter: "Goa and Gokarna are ideal in winter with clear skies and calm seas.",
      summer: "South Goa or Andaman offers quieter beaches and water activities.",
      monsoon: "Visit Kerala backwaters in monsoon for lush landscapes and houseboat vibes."
    }
  };

  resultBox.textContent = tips[style][season];
});

const revealNodes = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealNodes.forEach((node) => observer.observe(node));
