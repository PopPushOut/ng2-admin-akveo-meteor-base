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
var custom_typings_1 = require("../../../../../../custom-typings");
require("./leafletMaps.loader");
var LeafletMaps = (function () {
    function LeafletMaps(_elementRef) {
        this._elementRef = _elementRef;
    }
    LeafletMaps.prototype.ngAfterViewInit = function () {
        var el = this._elementRef.nativeElement.querySelector('.leaflet-maps');
        custom_typings_1.L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
        var map = custom_typings_1.L.map(el).setView([51.505, -0.09], 13);
        custom_typings_1.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        custom_typings_1.L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    };
    return LeafletMaps;
}());
LeafletMaps = __decorate([
    core_1.Component({
        selector: 'leaflet-maps',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./leafletMaps.scss')],
        template: require('./leafletMaps.html')
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], LeafletMaps);
exports.LeafletMaps = LeafletMaps;
//# sourceMappingURL=leafletMaps.component.js.map