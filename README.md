# Meteor-angular-ng2-akveo
ng2-admin template moved on meteor base

This is repository to make ng2-akveo bootstrap template work on meteor base.

Currently it is not working, there are compiler errors, which I am trying to solve.
You can contribute by giving me some ideas how to fix it, or trying to do it yourself.
All kind of help is appreciated.

Current project error log:
Uncaught Error: Expected 'styles' to be an array of strings.
    at assertArrayOfStrings (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:26308:21) [<root>]
    at CompileMetadataResolver.getNonNormalizedDirectiveMetadata (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:41742:15) [<root>]
    at CompileMetadataResolver._loadDirectiveMetadata (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:41674:25) [<root>]
    at http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:41875:56 [<root>]
    at Array.forEach (native) [<root>]
    at CompileMetadataResolver.loadNgModuleDirectiveAndPipeMetadata (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:41874:43) [<root>]
    at http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:51100:60 [<root>]
    at Array.forEach (native) [<root>]
    at JitCompiler._loadModules (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:51099:45) [<root>]
    at JitCompiler._compileModuleAndComponents (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:51054:54) [<root>]
    at JitCompiler.compileModuleAsync (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:51020:23) [<root>]
    at PlatformRef_._bootstrapModuleWithZone (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:60424:29) [<root>]
    at PlatformRef_.bootstrapModule (http://localhost:3000/packages/modules.js?hash=cb4ccc18ab28afb631558ef4c8eac7b1e2f6e322:60399:25) [<root>]
    at meteorInstall.client.main.js (http://localhost:3000/app/app.js?hash=9baf1bc10f2cb56288d412025e03e0c61d8fa3ec:1495:10) [<root>]
