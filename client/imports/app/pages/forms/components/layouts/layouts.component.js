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
var Layouts = (function () {
    function Layouts() {
        this.defaultPicture = 'assets/img/theme/no-photo.png';
        this.profile = {
            picture: 'assets/img/app/profile/Nasta.png'
        };
        this.uploaderOptions = {};
    }
    Layouts.prototype.ngOnInit = function () {
    };
    return Layouts;
}());
Layouts = __decorate([
    core_1.Component({
        selector: 'layouts',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [],
        template: require('./layouts.html'),
    }),
    __metadata("design:paramtypes", [])
], Layouts);
exports.Layouts = Layouts;
//# sourceMappingURL=layouts.component.js.map