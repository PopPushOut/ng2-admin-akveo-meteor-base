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
var router_1 = require("@angular/router");
var custom_typings_1 = require("../../../../../custom-typings");
var baMenu_service_1 = require("./baMenu.service");
var global_state_1 = require("../../../global.state");
var BaMenu = (function () {
    function BaMenu(_router, _service, _state) {
        var _this = this;
        this._router = _router;
        this._service = _service;
        this._state = _state;
        this.menuRoutes = [];
        this.sidebarCollapsed = false;
        this.expandMenu = new core_1.EventEmitter();
        this.outOfArea = -200;
        this._onRouteChange = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                if (_this.menuItems) {
                    _this.selectMenuAndNotify();
                }
                else {
                    // on page load we have to wait as event is fired before menu elements are prepared
                    setTimeout(function () { return _this.selectMenuAndNotify(); });
                }
            }
        });
    }
    BaMenu.prototype.selectMenuAndNotify = function () {
        if (this.menuItems) {
            this.menuItems = this._service.selectMenuItem(this.menuItems);
            this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
        }
    };
    BaMenu.prototype.ngOnInit = function () {
        this.menuItems = this._service.convertRoutesToMenus(this.menuRoutes);
    };
    BaMenu.prototype.ngOnDestroy = function () {
        this._onRouteChange.unsubscribe();
    };
    BaMenu.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        // TODO: get rid of magic 66 constant
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
    };
    BaMenu.prototype.toggleSubMenu = function ($event) {
        var submenu = custom_typings_1.jQuery($event.currentTarget).next();
        if (this.sidebarCollapsed) {
            this.expandMenu.emit(null);
            if (!$event.item.expanded) {
                $event.item.expanded = true;
            }
        }
        else {
            $event.item.expanded = !$event.item.expanded;
            submenu.slideToggle();
        }
        return false;
    };
    return BaMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BaMenu.prototype, "menuRoutes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaMenu.prototype, "sidebarCollapsed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BaMenu.prototype, "menuHeight", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaMenu.prototype, "expandMenu", void 0);
BaMenu = __decorate([
    core_1.Component({
        selector: 'ba-menu',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./baMenu.scss')],
        template: require('./baMenu.html'),
        providers: [baMenu_service_1.BaMenuService]
    }),
    __metadata("design:paramtypes", [router_1.Router, baMenu_service_1.BaMenuService, global_state_1.GlobalState])
], BaMenu);
exports.BaMenu = BaMenu;
//# sourceMappingURL=baMenu.component.js.map