"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var custom_typings_1 = require("../../../../../custom-typings");
var trafficChart_loader_1 = require("./trafficChart.loader");
var trafficChart_service_1 = require("./trafficChart.service");
var TrafficChart = (function () {
    function TrafficChart(trafficChartService) {
        this.trafficChartService = trafficChartService;
        this.doughnutData = trafficChartService.getData();
    }
    TrafficChart.prototype.ngAfterViewInit = function () {
        this._loadDoughnutCharts();
    };
    TrafficChart.prototype._loadDoughnutCharts = function () {
        var el = custom_typings_1.jQuery('.chart-area').get(0);
        new trafficChart_loader_1.Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
            segmentShowStroke: false,
            percentageInnerCutout: 64,
            responsive: true
        });
    };
    return TrafficChart;
}());
TrafficChart = __decorate([
    core_1.Component({
        selector: 'traffic-chart',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./trafficChart.scss')],
        template: require('./trafficChart.html')
    }),
    __metadata("design:paramtypes", [trafficChart_service_1.TrafficChartService])
], TrafficChart);
exports.TrafficChart = TrafficChart;
//# sourceMappingURL=trafficChart.component.js.map