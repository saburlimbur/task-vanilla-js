class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  saveTask(taskData) {
    const newTaskData = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTaskData);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    return {
      succes: true,
    };
  }

  // saat complete tasks pada status isComplete menjadi true dan juga completed pada Data nya
  completeTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index != -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  // update completed data nya dilempar ke manageTask.js
  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
