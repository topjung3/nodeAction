const {execSync} = require('child_process')
const core = require('@actions/core');
const github = require('@actions/github');

var fs = require('fs');

console.log("cwd: " + process.cwd())

// GITHUB_WORKFLOW
console.log("github.context");
console.log(github.context)

console.log("variables");
console.log("VAR1: " + core.getInput("VAR1"));

console.log("env");
console.log(process.env);

core.exportVariable('RESULT', 'node result')
