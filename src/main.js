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

// Scroll down script
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  } else {
    console.error('Section with ID ' + sectionId + ' not found.');
  }
}

// Коли кнопка буде готова
// buttonLink.addEventListener('click', () => scrollToSection('Айді секції'));
