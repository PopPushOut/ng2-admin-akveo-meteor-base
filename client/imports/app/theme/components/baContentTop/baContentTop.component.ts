import {Component} from '@angular/core';
import {GlobalState} from '../../../global.state';

import style from './baContentTop.scss';
import template from './baContentTop.html';

@Component({
  selector: 'ba-content-top',
  styles: [style],
  template
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
