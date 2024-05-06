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

    if (this.value.trim().length >= this.getAttribute('minlength')) {
      validIndicator.classList.add('show');
    } else {
      validIndicator.classList.remove('show');
    }

    if (this.value.trim() && isValidInput) {
      validIndicator.classList.remove('invalid');
      validIndicator.classList.add('valid');
      validIndicator.innerHTML =
        '<svg width="7" height="7"><use href="/img/icons.svg#icon-checkbox"></use></svg>';
    } else {
      validIndicator.classList.remove('valid');
      validIndicator.classList.add('invalid');
      validIndicator.innerHTML =
        '<svg width="7" height="7"><use href="/img/icons.svg#icon-close"></use></svg>';
    }
  });
});
