const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= track.children.length) {
        currentSlide = 0;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = track.children.length - 1;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});