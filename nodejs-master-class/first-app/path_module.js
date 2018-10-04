const path = require('path');

pathObj_filename = path.parse(__filename);
console.log(pathObj_filename);

// the pathObj_filename contains the following details
// {
//     root: 'F:\\', --> root drive
//     dir: 'F:\\udemy\\practise\\nodejs-master-class\\first-app', --> path upto the parent directory
//     base: 'path_module.js', --> filename with extension
//     ext: '.js', --> file extension
//     name: 'path_module' --> filename without extension
// }

pathObj_dirname = path.parse(__dirname);
console.log(pathObj_dirname);

// the pathObj_dirname contains the following details
// {
//     root: 'F:\\', --> root drive
//     dir: 'F:\\udemy\\practise\\nodejs-master-class', --> path upto the 'first-app' folder
//     base: 'first-app', --> folder name
//     ext: '', --> no extension for folder
//     name: 'first-app' --> folder name
// }

