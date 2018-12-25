import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isExplode: boolean = false;

  explodeMenu(event) {
    this.isExplode = event;
  }
}