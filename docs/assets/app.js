const spreads = [...document.querySelectorAll('.spread')];
const book = document.getElementById('book');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navButtons = [...document.querySelectorAll('[data-goto]')];
const cover = document.querySelector('.full-cover');

let current = 0;

function setPage(index) {
  current = Math.max(0, Math.min(index, spreads.length - 1));
  spreads.forEach((spread, i) => spread.classList.toggle('active', i === current));
  book.dataset.page = String(current);
  prevBtn.style.display = current === 0 ? 'none' : 'grid';
  nextBtn.style.display = current === spreads.length - 1 ? 'none' : 'grid';
  prevBtn.style.placeItems = 'center';
  nextBtn.style.placeItems = 'center';
}

cover.addEventListener('click', () => setPage(1));
prevBtn.addEventListener('click', () => setPage(current - 1));
nextBtn.addEventListener('click', () => setPage(current + 1));

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = Number(btn.dataset.goto);
    if (!Number.isNaN(target)) setPage(target);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') setPage(current + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') setPage(current - 1);
  if (event.key.toLowerCase() === 'home') setPage(0);
});

setPage(0);
