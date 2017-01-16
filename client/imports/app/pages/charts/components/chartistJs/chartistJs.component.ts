import {Component, ViewEncapsulation} from '@angular/core';

import {ChartistJsService} from './chartistJs.service';
import style from './chartistJs.scss';
//import styleCss from 'chartist/dist/chartist.css';
import template from './chartistJs.html';
@Component({
  selector: 'chartist-js',
  encapsulation: ViewEncapsulation.None,
  styles: [style], //removed StyleCss
  template
})

export class ChartistJs {

  data:any;

  constructor(private _chartistJsService:ChartistJsService) {
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
