const {execSync} = require('child_process')
const core = require('@actions/core');
const github = require('@actions/github');

var fs = require('fs');

console.log(process.cwd())

fs.readdir("./", function(error, filelist){
  console.log(filelist);
})


// GITHUB_WORKFLOW
console.log(github.context)

console.log(core.getInput("FIRST_NAME"));

core.exportVariable('FIRST_NAME', 'TestName')

//console.log(execSync("cp " + __dirname + "/hello.txt ./" ).toString())
