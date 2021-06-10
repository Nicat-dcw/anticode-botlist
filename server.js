// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
require('./bot.js')
// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
const weky = require('weky');

let randomNumber = weky.randomizeNumber(100,1000);

//console.log(randomNumber);
/*
const weky = require('weky');

let randomNumber = weky.randomizeNumber(100,1000);

console.log(randomNumber);
*/
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  let ha = req.body.pw;
  // express helps us take JS objects and send them as JSON
  response.json(randomNumber);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
