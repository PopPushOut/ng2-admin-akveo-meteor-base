import {Component, ViewEncapsulation} from '@angular/core';
import template from './icons.html';
import {IconsService} from './icons.service';
import style from './icons.scss';
@Component({
  selector: 'icons',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class Icons {

  icons:any;

  constructor(private _iconsService: IconsService) {
  }

  ngOnInit() {
    this.icons = this._iconsService.getAll();
  }
}
