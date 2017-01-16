import {Component, ViewEncapsulation, ElementRef} from '@angular/core';
//import { jQuery } from 'jquery';
import {Chart} from './trafficChart.loader';
import {TrafficChartService} from './trafficChart.service';

import style from './trafficChart.scss';
import template from './trafficChart.html';
@Component({
  selector: 'traffic-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})

// TODO: move chart.js to it's own component
export class TrafficChart {

  public doughnutData: Array<Object>;

  constructor(private trafficChartService:TrafficChartService) {
    this.doughnutData = trafficChartService.getData();
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0);
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
