// Mega Menu Toggle
const menuTrigger = document.querySelector(".header .menu .active");
const megaMenu = document.querySelector(".header .mega-menu");

if (menuTrigger && megaMenu) {
  menuTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    megaMenu.classList.toggle("open");
  });

  // Close mega menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!megaMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
      megaMenu.classList.remove("open");
    }
  });
}

// Mega-menu Rotating Image from ALL categories (Movies, Series, Anime)
const megaMenuImg = document.querySelector(".header .mega-menu .image img");

const allCategoryImages = [
  // Movies
  "img/movies/the wolf.jpg",
  "img/movies/dune.jpg",
  "img/movies/oppen.jpg",
  "img/movies/interstellar.jpg",
  "img/movies/batman.jpg",
  "img/movies/spider.jpg",
  // Series
  "img/series/الحشاشين.jpg",
  "img/series/got.jpg",
  "img/series/house.jpg",
  "img/series/succession.jpg",
  "img/series/101.jpg",
  "img/series/102.jpg",
  // Anime
  "img/series/death-not.jpg",
  "img/series/attack.jpg",
  "img/series/one.jpg",
  "img/anima/109843.jpg",
  "img/anima/126929.jpg",
  "img/anima/141893.jpg",
  "img/anima/227594.jpg",
  "img/anima/234219.jpg"
];

if (megaMenuImg) {
  // Rotate image every 2.5 seconds with smooth fade transition
  setInterval(() => {
    megaMenuImg.style.opacity = "0.2";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * allCategoryImages.length);
      megaMenuImg.src = allCategoryImages[randomIndex];
      megaMenuImg.style.opacity = "1";
    }, 250);
  }, 2500);
}

// Horizontal Scroll for Movies, Series, and Anime sliders
const sliders = document.querySelectorAll(".movies, .series, .anime");

sliders.forEach(section => {
  const track = section.querySelector(".cards-track");
  const prevBtn = section.querySelector(".rl");
  const nextBtn = section.querySelector(".rr");

  if (track && prevBtn) {
    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const card = track.querySelector(".m");
      const scrollStep = card ? card.offsetWidth + 22 : 280;
      track.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  }

  if (track && nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const card = track.querySelector(".m");
      const scrollStep = card ? card.offsetWidth + 22 : 280;
      track.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  }
});
