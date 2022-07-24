const path = require('path');
var version = process.argv[2];
var namespace = 'QuickStart.' + version.charAt(0).toUpperCase() + version.substr(1);
if(version === 'core') version = 'coreapp';

const baseNetAppPath = path.join(__dirname, '/src/'+ namespace +'/bin/Debug/net'+ version +'2.0');

//to solve error: CoreClrEmbedding::Initialize - Could not resolve CoreCLR path. edge.initializeClrFunc is not a function
//should match directory name in C:\Program Files\dotnet\shared\Microsoft.NETCore.App\
//it works for sure with major versions from 2 to 5, but not for 6
process.env.CORECLR_VERSION = '5.0.17';

process.env.EDGE_USE_CORECLR = 1;
if(version !== 'standard')
    process.env.EDGE_APP_ROOT = baseNetAppPath;

var edge = require('edge-js');

var baseDll = path.join(baseNetAppPath, namespace + '.dll');

var localTypeName = namespace + '.LocalMethods';
var externalTypeName = namespace + '.ExternalMethods';

var getAppDomainDirectory = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'GetAppDomainDirectory'
});

var getCurrentTime = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'GetCurrentTime'
});

var useDynamicInput = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'UseDynamicInput'
});

var getPerson = edge.func({
    assemblyFile: baseDll,
    typeName: externalTypeName,
    methodName: 'GetPersonInfo'
});

console.log('### Calling local methods from ' + namespace +'.dll')
console.log();
getAppDomainDirectory('', function(error, result) {
    if (error) throw error;
    console.log(localTypeName + '.GetAppDomainDirectory');
    console.log(result);
    console.log();
});

getCurrentTime('', function(error, result) {
    if (error) throw error;
    console.log(localTypeName + '.GetCurrentTime');
    console.log(result);
    console.log();
});

useDynamicInput('Node.Js', function(error, result) {
    if (error) throw error;
    console.log(localTypeName + '.UseDynamicInput');
    console.log(result);
    console.log();
});

console.log();
console.log('### Calling external library methods using '+ namespace +'.dll wrapper');
console.log();
getPerson('', function(error, result) {
    if (error) throw error;
    console.log(externalTypeName + '.GetPersonInfo');
    console.log(result);
});
