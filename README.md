Quick start for `edge-js`  
https://github.com/agracio/edge-js
================
# edge-js-quick-start

1. Install dependencies `npm install`
2. Build `src\QuickStart.sln` using Visual Studio 2017, JetBrains Rider or run `dotnet build src/QuickStart.sln`
3. To run the app using .NET Core use `npm start` or `npm run start:core`
4. ~~To run the app using .NET Standard use `npm run start:standard`~~


This fork reproduces error running edge-js inside Jest test.
Error is "Could not resolve CoreCLR path. For more details, enable tracing by setting COREHOST_TRACE environment" ...
edge.initializeClrFunc is not a function


To run Jest test need to run:
npm i -g jest-cli
jest tests/main-fn.test.js

or 
1. Install VSCode
https://code.visualstudio.com/download
2. Install VSCode extention Jest Runner
https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner
3. Open main-fn.test.js file in VSCode and hit 'debug' button above 'runNetLibrary completes' test.
