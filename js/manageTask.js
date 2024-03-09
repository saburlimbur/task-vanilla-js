document.addEventListener('DOMContentLoaded', () => {
  // untuk membuat instance dari object task
  const myTasks = new Task();

  // untuk membuat variable untuk mengambil seluruh task
  const existingTasks = myTasks.getTasks();

  const taskWrapper = document.getElementById('taskWrapper');
  const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');

  function displayAllTask() {
    if (existingTasks.length === 0) {
      console.log('Upss! Tidak ada Task yang tersedia');
    } else {
      console.log('Beberapa Task sudah tersedia dan siap ditampilkan!');
    }
  }

  displayAllTask();
});
