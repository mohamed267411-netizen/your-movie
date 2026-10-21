let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);

    // Keyboard navigation (Left / Right arrow keys)
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
            plusSlides(-1);
        } else if (e.key === "ArrowRight") {
            plusSlides(1);
        }
    });
});

// Also initialize if script runs after DOM
if (document.readyState === "complete" || document.readyState === "interactive") {
    showSlides(slideIndex);
}
