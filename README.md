Quick start for `edge-js`  
https://github.com/agracio/edge-js
================
# edge-js-quick-start

1. Install dependencies `npm install`
2. Build `src\QuickStart.sln` using Visual Studio 2017, JetBrains Rider or run `dotnet build src/QuickStart.sln`
3. To run the app using .NET Core use `npm start` or `npm run start:core`
4. ~~To run the app using .NET Standard use `npm run start:standard`~~
<br/>
<br/>
This fork reproduces error running edge-js inside Jest test.<br/>
Error is "Could not resolve CoreCLR path. For more details, enable tracing by setting COREHOST_TRACE environment" <br/>
edge.initializeClrFunc is not a function<br/>
<br/>
<br/>
To run Jest test need to run:<br/>
npm i -g jest-cli<br/>
jest tests/main-fn.test.js<br/>
<br/>
or <br/>
1. Install VSCode<br/>
https://code.visualstudio.com/download<br/>
2. Install VSCode extention Jest Runner<br/>
https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner<br/>
3. Open main-fn.test.js file in VSCode and hit 'debug' button above 'runNetLibrary completes' test.
