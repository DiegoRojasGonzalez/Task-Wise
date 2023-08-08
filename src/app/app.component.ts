import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task-Wise';
  tasks: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const encodedTasks = params['tasks'];
      if (encodedTasks) {
        this.tasks = JSON.parse(atob(encodedTasks));
      }
    });

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  addTaskToList(taskName: string) {
    this.tasks.push(taskName);
    this.updateTasks();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.updateTasks();
  }

  updateTasks() {
    this.updateLocalStorage();
    const encodedTasks = btoa(JSON.stringify(this.tasks));
    this.router.navigate([], { queryParams: { tasks: encodedTasks }, queryParamsHandling: 'merge' });
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
