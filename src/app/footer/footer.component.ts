import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @ViewChild('toast', { static: true }) toast!: ElementRef; // Usamos '!' para marcar que está inicializada

  copyUrlToClipboard() {
    const currentUrl = window.location.href;

    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = currentUrl;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    this.showToast();
  }

  showToast() {
    this.toast.nativeElement.textContent = `URL copied to clipboard!`;
    this.toast.nativeElement.classList.add('show');
    setTimeout(() => {
      this.toast.nativeElement.classList.remove('show');
    }, 3000);
  }
}
