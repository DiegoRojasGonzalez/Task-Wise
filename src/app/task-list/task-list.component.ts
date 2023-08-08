import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
  @Output() taskRemoved = new EventEmitter<number>();

  removeTask(index: number) {
    this.taskRemoved.emit(index);
  }
}
