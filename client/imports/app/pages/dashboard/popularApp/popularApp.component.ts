import {Component, ViewEncapsulation} from '@angular/core';
import style from './popularApp.scss';
import template from './popularApp.html';
@Component({
  selector: 'popular-app',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class PopularApp {

  ngOnInit() {
  }
}
