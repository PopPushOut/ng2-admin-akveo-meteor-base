import {Component, ViewEncapsulation} from '@angular/core';
import template from './grid.html';
import style from './grid.scss';
@Component({
  selector: 'grid',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class Grid {

  constructor() {
  }
}
