// Untuk penghubung antara UI HTML dan Model User

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskManager = new Task();

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskData = {
      taskName: document.getElementById('taskName').value,
      taskPriority: document.getElementById('taskPriority').value,
    };

    const result = taskManager.saveTask(taskData);

    if (result.succes) {
      //return (window.location.href = '../signin.html');
      alert('Berhasil Tersimpan');
    } else {
      console.log('Proses simpan Data gagal ');
    }
  });
});
