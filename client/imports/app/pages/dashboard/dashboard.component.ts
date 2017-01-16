import {Component, ViewEncapsulation} from '@angular/core';
import style from './dashboard.scss';
import template from './dashboard.html';
@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class Dashboard {

  constructor() {
  }

}
