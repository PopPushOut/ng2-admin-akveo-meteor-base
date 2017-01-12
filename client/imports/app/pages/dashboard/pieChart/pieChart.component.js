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
var pieChart_service_1 = require("./pieChart.service");
require("./pieChart.loader.ts");
var PieChart = (function () {
    function PieChart(_pieChartService) {
        this._pieChartService = _pieChartService;
        this._init = false;
        this.charts = this._pieChartService.getData();
    }
    PieChart.prototype.ngAfterViewInit = function () {
        if (!this._init) {
            this._loadPieCharts();
            this._updatePieCharts();
            this._init = true;
        }
    };
    PieChart.prototype._loadPieCharts = function () {
        custom_typings_1.jQuery('.chart').each(function () {
            var chart = custom_typings_1.jQuery(this);
            chart.easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    custom_typings_1.jQuery(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: custom_typings_1.jQuery(this).attr('data-rel'),
                trackColor: 'rgba(0,0,0,0)',
                size: 84,
                scaleLength: 0,
                animation: 2000,
                lineWidth: 9,
                lineCap: 'round',
            });
        });
    };
    PieChart.prototype._updatePieCharts = function () {
        var getRandomArbitrary = function (min, max) { return Math.random() * (max - min) + min; };
        custom_typings_1.jQuery('.pie-charts .chart').each(function (index, chart) {
            custom_typings_1.jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
    };
    return PieChart;
}());
PieChart = __decorate([
    core_1.Component({
        selector: 'pie-chart',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./pieChart.scss')],
        template: require('./pieChart.html')
    }),
    __metadata("design:paramtypes", [pieChart_service_1.PieChartService])
], PieChart);
exports.PieChart = PieChart;
//# sourceMappingURL=pieChart.component.js.map