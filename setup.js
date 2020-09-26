var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');
var os = require('os');

// get library path

var root = resolve(__dirname, '.');

// npm binary based on OS

var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

fs.readdirSync(root).forEach(function (subDir) {
  var subDirPath = join(root, subDir);

  // ensure path has package.json --> skip backend folder

  if (!fs.existsSync(join(subDirPath, 'package.json'))) return;

  console.log('===================================================================');
  console.log(`Performing "npm ci" inside ${subDir} folder`);
  console.log('===================================================================');

  // install dependencies

  cp.spawnSync(npmCmd, ['ci'], { env: process.env, cwd: subDirPath, stdio: 'inherit' });
});

// Running the apps

console.log('===================================================================');
console.log(`Starting the json-server and the apps`);
console.log('===================================================================');


// backend

var backendPath = resolve(__dirname, './backend');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: backendPath, stdio: 'inherit' });

// host-app

var hostAppPath = resolve(__dirname, './host-app');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: hostAppPath, stdio: 'inherit' });

// mf-products

var mfProductsPath = resolve(__dirname, './mf-products');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: mfProductsPath, stdio: 'inherit' });

// mf-cart

var mfCartPath = resolve(__dirname, './mf-cart');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: mfCartPath, stdio: 'inherit' });
