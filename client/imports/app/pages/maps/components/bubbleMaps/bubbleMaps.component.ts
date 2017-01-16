import {Component, ViewEncapsulation} from '@angular/core';

import {BubbleMapsService} from './bubbleMaps.service';
import template from './bubbleMaps.html';
import style from './bubbleMaps.scss';
@Component({
  selector: 'bubble-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class BubbleMaps {

  chartData:Object;

  constructor(private _bubbleMapsService:BubbleMapsService) {
  }

  ngOnInit() {
    this.chartData = this._bubbleMapsService.getData();
  }
}
