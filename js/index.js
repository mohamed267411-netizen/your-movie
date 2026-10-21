// Image on Landing Page
let landingPage = document.querySelector(".landing .image img");
let imgArray = ['109843.jpg', '118984.jpg', '126929.jpg', '138851.jpg', '140536.jpg', '141385.jpg', '141893.jpg', '234219.jpg'];

if (landingPage) {
    landingPage.src = "../img/anima/126929.jpg";
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        landingPage.src = "../img/anima/" + imgArray[randomNumber];
    }, 10000);
}

// Image On Mega-menu
let megamenuPage = document.querySelector(".header .mega-menu .image img");
let imgArraytwo = ['109843.jpg', '118984.jpg', '126929.jpg', '138851.jpg', '140536.jpg', '141385.jpg', '141893.jpg', '234219.jpg'];

if (megamenuPage) {
    megamenuPage.src = "../img/anima/227594.jpg";
    setInterval(() => {
        let randomNum = Math.floor(Math.random() * imgArraytwo.length);
        megamenuPage.src = "../img/anima/" + imgArraytwo[randomNum];
    }, 2000);
}

// OnClick Other Links / Mega Menu
let onClik = document.querySelector(".header .active");
let megaMenu = document.querySelector('.header .mega-menu');

if (onClik && megaMenu) {
    onClik.onclick = function (e) {
        if (e) e.preventDefault();
        if (megaMenu.style.opacity === "1") {
            megaMenu.style.opacity = "0";
            megaMenu.style.zIndex = "-1";
        } else {
            megaMenu.style.opacity = "1";
            megaMenu.style.zIndex = "100";
            megaMenu.style.top = "calc(100% + 1px)";
        }
    };

    document.addEventListener("click", function(e) {
        if (!megaMenu.contains(e.target) && !onClik.contains(e.target)) {
            megaMenu.style.opacity = "0";
            megaMenu.style.zIndex = "-1";
        }
    });
}

// Continuous Anime Modals
function openContinuousModal(targetId) {
    let show = document.querySelector(`.continuous .container ${targetId}`);
    if (!show) return;
    if (show.style.display === 'flex' || show.style.display === 'grid') {
        show.style.display = 'none';
    } else {
        closed();
        show.style.display = 'flex';
    }
}

function show1() { openContinuousModal('#show-one'); }
function show2() { openContinuousModal('#show-two'); }
function show3() { openContinuousModal('#show-3'); }
function show4() { openContinuousModal('#show-4'); }
function show5() { openContinuousModal('#show-5'); }
function show6() { openContinuousModal('#show-6'); }
function show7() { openContinuousModal('#show-7'); }
function show8() { openContinuousModal('#show-8'); }
function show9() { openContinuousModal('#show-9'); }
function show10() { openContinuousModal('#show-10'); }

function closed() {
    let imgs = document.querySelectorAll('.continuous .container .img2, .continuous .container .img1');
    imgs.forEach(img => {
        img.style.display = 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            closed();
        }
    });
});
