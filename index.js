var testFolder = './data';
var fs = require('fs');

console.log(process.cwd())

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
