import { Component } from '@angular/core';

@Component({
  template: `
    <h2>PageB</h2>
    <button routerLink="/page-a">Go to page A</button>
  `
})
export class PageBComponent { }