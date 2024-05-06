// Mobile menu script
const modal = document.querySelector('.menu-sidebar');
const modalBtn = document.querySelector('.header-menu-btn');
const closeBtn = document.querySelector('.menu-close-btn');

modalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
