import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  @Output() taskAdded = new EventEmitter<string>();
  inputText: string = '';

  onAddTask() {
    if (this.inputText.trim() !== '') {
      this.taskAdded.emit(this.inputText);
    }
    this.inputText = '';
  }
}
