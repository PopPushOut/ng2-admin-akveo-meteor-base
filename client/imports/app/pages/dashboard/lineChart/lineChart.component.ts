import {Component, ViewEncapsulation} from '@angular/core';

import {LineChartService} from './lineChart.service';
import style from './lineChart.scss';
import template from './lineChart.html';
@Component({
  selector: 'line-chart',
  encapsulation: ViewEncapsulation.None,
  styles: [style],
  template
})
export class LineChart {

  chartData:Object;

  constructor(private _lineChartService:LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart:any) {
    let zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
