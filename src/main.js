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

window.addEventListener('resize', function () {
  if (window.innerWidth > 1280) {
    const elementsWithIsOpen = document.querySelectorAll('.is-open');
    elementsWithIsOpen.forEach(function (element) {
      element.classList.remove('is-open');
    });
  }
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

function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  document.activeElement.blur();
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', scrollToSection);
});
