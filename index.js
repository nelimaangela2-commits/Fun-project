// ---------- DOM refs ----------
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = Array.from(track.querySelectorAll('.carousel-card'));

// ---------- State ----------
let activeIndex = 0; // starts on the first card (cappuccino)

// ---------- Render ----------
function render() {
  const total = cards.length;

  cards.forEach((card, i) => {
    // How far this card sits from the active one, wrapping around the ends
    const diff = (i - activeIndex + total) % total;

    let pos = 'hidden';
    if (diff === 0) pos = 'center';
    else if (diff === 1) pos = 'right';
    else if (diff === total - 1) pos = 'left';

    card.dataset.pos = pos;
  });
}

// ---------- Events ----------
prevBtn.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + cards.length) % cards.length;
  render();
});

nextBtn.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % cards.length;
  render();
});

// ---------- Init ----------
render();