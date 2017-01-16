import {Component, ViewEncapsulation} from '@angular/core';
import style from './basicTables.scss';
import template from './basicTables.html';
@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class BasicTables {

  constructor() {
  }
}
