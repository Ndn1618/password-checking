// fa-eye fa-eye-slash
const togglePassword = document.querySelector('.js-toggle-password');
const password = document.querySelector('.js-password-input');

togglePassword.addEventListener('click', function () {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the icon
  this.classList.toggle('fa-eye-slash');

});