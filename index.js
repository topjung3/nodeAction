const {execSync} = require('child_process')
const core = require('@actions/core');
const github = require('@actions/github');

var fs = require('fs');

console.log(process.cwd())

fs.readdir("./", function(error, filelist){
  console.log(filelist);
})


console.log(github.GITHUB_WORKFLOW)


console.log(execSync("cp " + __dirname + "/hello.txt ./" ).toString())
