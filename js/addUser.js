// Untuk penghubung antara UI HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
      username: document.getElementById('username').value,
    };

    const result = userManager.saveUser(userData);

    if (result.succes) {
      return (window.location.href = '../signin.html');
    } else {
      console.log('PROSES SIMPAN DATA GAGAL');
    }
  });
});
