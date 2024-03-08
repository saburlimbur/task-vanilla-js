// UNTUK BUSSINES LOGIC DAN MENGELOLA DATA SEPERTI CREATE, READ, UPDATE, etc..

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));

    // return window.location.href = '../signin.html';

    return {
      succes: true,
    };
  }

  signInUser(usernameByInput) {
    // Proses pemeriksaan data username pada localstorage
    const userExists = this.users.some((user) => user.username.toLowerCase() === usernameByInput.toLowerCase());

    if (userExists) {
      // Proses pengembalian data ke signIn.js controller

      return {
        succes: true,
        username,
      };
    } else {
      return {
        succes: false,
        message: 'DATA TIDAK DITEMUKAN',
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
}
