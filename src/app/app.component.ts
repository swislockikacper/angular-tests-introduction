import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
