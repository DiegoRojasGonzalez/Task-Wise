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
  completedTasks: boolean[] = [];
  isLoading: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const encodedTasks = params['tasks'];
      const encodedCompletedTasks = params['completedTasks'];
      if (encodedTasks) {
        this.tasks = JSON.parse(atob(encodedTasks));
      }
      if (encodedCompletedTasks) {
        this.completedTasks = JSON.parse(atob(encodedCompletedTasks));
      } else {
        this.completedTasks = Array(this.tasks.length).fill(false);
      }
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 1200);
    
    const storedTasks = localStorage.getItem('tasks');
    const storedCompletedTasks = localStorage.getItem('completedTasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    if (storedCompletedTasks) {
      this.completedTasks = JSON.parse(storedCompletedTasks);
    }
  }
  

  addTaskToList(taskName: string) {
    this.tasks.push(taskName);
    this.completedTasks.push(false);
    this.updateTasks();
  }

  removeTask(index: number) {
    this.completedTasks[index] = true;
    this.updateTasks();
  }

  updateTasks() {
    this.updateLocalStorage();
    const encodedTasks = btoa(JSON.stringify(this.tasks));
    const encodedCompletedTasks = btoa(JSON.stringify(this.completedTasks));
    this.router.navigate([], { queryParams: { tasks: encodedTasks, completedTasks: encodedCompletedTasks }, queryParamsHandling: 'merge' });
  }

  updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
  }
}
