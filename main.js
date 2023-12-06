function getElementById(id) {
    return document.getElementById(id);
}
  
function validateAndRegister() {
    const username = getElementById('username').value.trim();
    const email = getElementById('email').value.trim();
    const password = getElementById('password').value;
  
    if (username === '' || email === '' || password === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
  
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    alert('Регистрация успешна!');
}
  
function validateAndLogin() {
    const loginUsername = getElementById('loginUsername').value.trim();
    const loginPassword = getElementById('loginPassword').value;
  
    if (loginUsername === '' || loginPassword === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
  
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      alert('Пользователь не найден. Зарегистрируйтесь сначала.');
      return;
    }
  
    const user = JSON.parse(savedUser);
  
    if (loginUsername === user.username && loginPassword === user.password) {
      alert('Вход успешен!');
    } else {
      alert('Неверные данные входа.');
    }
}