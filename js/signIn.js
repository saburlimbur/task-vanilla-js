// Untuk penghubung antara UI HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // const userData = {
    //   username: document.getElementById('username').value,
    // };

    const usernameByInput = document.getElementById('username').value;

    const result = userManager.signInUser(usernameByInput);

    if (result.succes) {
      localStorage.setItem('usernameLoggedIn', usernameByInput);

      return (window.location.href = '../tasks.html');

    } 
    else {
      alert('Upss! Username Tidak Ditemukan!');
      console.log(result.message);
    }
  });
});
