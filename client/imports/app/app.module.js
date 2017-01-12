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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
//import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
var app_service_1 = require("./app.service");
var global_state_1 = require("./global.state");
var nga_module_1 = require("./theme/nga.module");
var pages_module_1 = require("./pages/pages.module");
var APP_PROVIDERS = [
    app_service_1.AppState,
    global_state_1.GlobalState
];
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    /*hmrOnDestroy(store: StoreType) {
      const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
      // save state
      const state = this.appState._state;
      store.state = state;
      // recreate root elements
      store.disposeOldHosts = createNewHosts(cmpLocation);
      // save input values
      store.restoreInputValues = createInputTransfer();
      // remove styles
      removeNgStyles();
    }*/
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        // Components, Pipes, Directive
        declarations: [
            app_component_1.AppComponent
        ],
        // Entry Components
        entryComponents: [
            app_component_1.AppComponent
        ],
        // Providers
        providers: [
            //ENV_PROVIDERS,
            APP_PROVIDERS
        ],
        // Modules
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule,
            router_1.RouterModule,
            //FormsModule,
            // ReactiveFormsModule,
            nga_module_1.NgaModule.forRoot(),
            pages_module_1.PagesModule,
            app_routing_1.routing
        ]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef, app_service_1.AppState])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map