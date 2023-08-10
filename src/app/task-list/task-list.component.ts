import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
  @Input() completedTasks: boolean[] = Array(this.tasks.length).fill(false);
  @Output() taskRemoved = new EventEmitter<number>();

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.completedTasks.splice(index, 1);
    this.updateTasks();
  }

  updateTasks() {
    this.taskRemoved.emit();
  }
}
