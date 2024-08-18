/**
 * Create and expose and HTTP server
 * 1. npm init -y (can see package.json file)
 * 2. create index.js
 * 3. require express
 * 4. npm i express
 * 5. const app = express()
 * 6. Assignment create a todo app that lets users todo on the server
 */

/**
 * Create and expose and HTTP server
 * 1. call the express function it will give us the app object
 * 2. when I want to create route I can call app.get() for example first parameter is the route and second parameter is the callback function, the cb function will have 2 parameters, request and response.
 * 3. request contains all the details related to the request like: request header, request body, request method, query parameters
 * 4. we can do some ml logic here and server will give a response back
 * 5. I can also use res.json() to send and json as a response.
 * 6. why do we need port? if we have multiple application on the one server, we can use different port for each application.
 */

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    name: 'wali',
    age: 32
  })
});

app.post("/conversations", (req, res) => {
  console.log(req.query.message);
  console.log(req.query.b);
  console.log(req.query.c);
  res.status(202).json({
    msg: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
