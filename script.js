AOS.init({
  duration: 1000,
  once: true,
});

// Navegação fixa e mudança de estilo ao rolar
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Animação das barras de habilidades
const skillBars = document.querySelectorAll(".skill-progress");
const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = `${progress}%`;
  });
};

// Efeito parallax no cabeçalho
const parallaxBg = document.querySelector(".parallax-bg");
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Toggle do modo escuro
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Botão "Voltar ao topo"
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animar barras de habilidades quando a seção estiver visível
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(skillsSection);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
