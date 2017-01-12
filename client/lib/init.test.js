"use strict";
// angular2-meteor polyfills
require("angular2-meteor-polyfills");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
require("zone.js/dist/sync-test");
require("zone.js/dist/proxy");
// angular2-meteor polyfills required for testing
require("angular2-meteor-tests-polyfills");
// Angular 2 tests imports
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
// Init the test framework
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
var hook = new Mocha.Hook("Modified Angular beforeEach Hook", function () {
    testing_1.getTestBed().resetTestingModule();
});
hook.ctx = mocha.suite.ctx;
hook.parent = mocha.suite;
mocha.suite._beforeEach = [hook];
//# sourceMappingURL=init.test.js.map