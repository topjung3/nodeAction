const {execSync} = require('child_process')
var fs = require('fs');

console.log(process.cwd())

fs.readdir("./", function(error, filelist){
  console.log(filelist);
})


console.log(execSync("cp " + __dirname + "/hello.txt ./" ).toString())
