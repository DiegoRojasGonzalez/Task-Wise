// task-input.component.ts
import { Component, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  @ViewChild('taskInput') taskInput!: ElementRef;

  @Output() taskAdded = new EventEmitter<string>();
  inputText: string = '';

  ngAfterViewInit() {
    this.taskInput.nativeElement.focus();
  }

  onAddTask() {
    if (this.inputText.trim() !== '') {
      this.taskAdded.emit(this.inputText);
    }
    this.inputText = '';
    this.taskInput.nativeElement.focus();
  }

  @HostListener('window:keydown.enter', ['$event'])
  handleEnterKeyPress(event: KeyboardEvent) {
    if (event.target !== this.taskInput.nativeElement) {
      event.preventDefault();
      this.taskInput.nativeElement.focus();
    }
  }
}
