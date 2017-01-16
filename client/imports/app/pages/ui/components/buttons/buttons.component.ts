import {Component, ViewEncapsulation} from '@angular/core';
import template from './buttons.html';
import style from './buttons.scss';
@Component({
  selector: 'buttons',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class Buttons {

  constructor() {
  }
}
