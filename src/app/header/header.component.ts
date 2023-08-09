import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  darkMode = false;

  constructor(private renderer: Renderer2) {
    // Recuperar el modo actual desde el Local Storage al cargar
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      this.darkMode = JSON.parse(storedDarkMode);
    }

    // Aplicar el modo guardado
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }

    // Guardar el modo actual en el Local Storage
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }
}