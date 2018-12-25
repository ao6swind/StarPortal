import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() explodeMenuEvent = new EventEmitter<boolean>();

  isExplode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  explodeMenu() {
    this.isExplode = !this.isExplode;
    this.explodeMenuEvent.emit(this.isExplode);
  }
}
