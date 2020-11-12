// Variables
var mainPassword = 'programming';
var attempt = 5;

// Choosing elements
var elPasswordForm = document.querySelector('.js-password-form');
var elPasswordInput = elPasswordForm.querySelector('.js-password-input');
var elPasswordAttempts = elPasswordForm.querySelector('.js-password-attempts');

var elResultsDiv = document.querySelector('.js-results-div');
var elResultText = elResultsDiv.querySelector('.js-result-text');
var elReloadButton = elResultsDiv.querySelector('.js-reload-button');

// Focus input and equal its value to nothing
var focusAndClearInput = function (inputName) {
  inputName.value = '';
  inputName.focus();
}

elPasswordInput.focus();

elPasswordForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Taking value of password input
  var elPasswordInputValue = elPasswordInput.value.trim();

  // If input has no anything, return
  if (elPasswordInputValue === '') {
    alert('Parolni kiriting!');
    focusAndClearInput(elPasswordInput);
    return;
  }

  if (elPasswordInputValue === mainPassword) {
    elPasswordForm.classList.add('d-none');
    elPasswordForm.classList.remove('d-flex');
    elResultsDiv.classList.remove('d-none');
    elResultText.textContent = 'Tabriklaymiz, parolni tekshirish muvaffaqiyatli amalga oshirildi! 🥳';
  } else {
    attempt--;
    elPasswordAttempts.textContent = attempt;
    focusAndClearInput(elPasswordInput);
    if (attempt === 0) {
      elPasswordForm.classList.add('d-none');
      elPasswordForm.classList.remove('d-flex');
      elResultsDiv.classList.add('d-flex');
      elResultsDiv.classList.remove('d-none');
      elReloadButton.classList.remove('d-none');
      elResultText.classList.add('text-danger');
      elResultText.textContent = 'Profil egasiga xabar ketdi. Tamomsiz 😜';
    }
  }
});

elReloadButton.addEventListener('click', function () {
  window.location.reload();
});
