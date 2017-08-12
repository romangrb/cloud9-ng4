import { Component } from '@angular/core';

@Component({
  template: `
    <h2>PageA</h2>
    <button routerLink="/page-b">Go to page B</button>
  `
})
export class PageAComponent { }