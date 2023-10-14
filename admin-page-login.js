// Utiliza el método querySelector para seleccionar elementos por su ID
const user = document.querySelector('#user-input');
const pass = document.querySelector('#password-input');
const login_btn = document.querySelector('#login-btn');

// Utiliza una función de manejo de clic separada para mantener el código limpio
function loginClickHandler() {
  if (user.value === 'admin' && pass.value === 'admin') {
    console.log(user.value, pass.value);
    window.location.href = 'admin-page.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

if (user && pass && login_btn) {
  console.log('login');
  login_btn.addEventListener('click', loginClickHandler);
}
