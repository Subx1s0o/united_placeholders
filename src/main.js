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

document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', function () {
    const isValidInput = this.validity.valid;
    const validIndicator = this.parentElement.querySelector('.valid-indicator');
    const validIconCheckbox = validIndicator.querySelector(
      '.valid-icon-checkbox'
    );
    const validIconClose = validIndicator.querySelector('.valid-icon-close');

    if (isValidInput) {
      validIndicator.style.opacity = 1;
      validIconCheckbox.style.opacity = 1;
      validIconClose.style.opacity = 0;
    } else {
      validIndicator.style.opacity = 1;
      validIconCheckbox.style.opacity = 0;
      validIconClose.style.opacity = 1;
    }

    if (this.value.trim().length >= parseInt(this.getAttribute('minlength'))) {
      validIndicator.style.opacity = 1;
    } else {
      validIndicator.style.opacity = 0;
    }
  });
});
// Функція для скролінгу до секції
function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Зняти фокус з активного елемента
  document.activeElement.blur();
}

// Додати обробник події для кожного посилання
document.querySelectorAll('a').forEach(link => {
  // Додати обробник події для кліку
  link.addEventListener('click', scrollToSection);
});
