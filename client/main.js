"use strict";
require("angular2-meteor-polyfills");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_1 = require("./imports/app");
//import { decorateModuleRef } from './imports/app/environment';
core_1.enableProdMode();
Meteor.startup(function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
});
//# sourceMappingURL=main.js.map