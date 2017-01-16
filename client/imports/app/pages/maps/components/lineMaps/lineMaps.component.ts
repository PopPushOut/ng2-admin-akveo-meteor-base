import {Component, ViewEncapsulation} from '@angular/core';

import {LineMapsService} from './lineMaps.service';
import template from './lineMaps.html';
import style from './lineMaps.scss';
@Component({
  selector: 'line-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class LineMaps {

  chartData:Object;

  constructor(private _lineMapsService:LineMapsService) {
    this.chartData = this._lineMapsService.getData();
  }
}
