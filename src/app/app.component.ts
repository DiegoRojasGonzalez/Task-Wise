import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task-Wise';
  tasks: string[] = [];

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  addTaskToList(taskName: string) {
    this.tasks.push(taskName);
    this.updateLocalStorage();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
