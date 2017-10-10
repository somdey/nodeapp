var express = require("express");
var app = express();
var router = express.Router();

require('./middleware')(app);

// API VERSION ROUTES
require('./api/routes')(app, router);


app.listen(3000);
console.log("Listening on port 3000");