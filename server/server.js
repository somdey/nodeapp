var express = require("express");
var app = express();
var router = express.Router();

require('./middleware')(app);

// API VERSION ROUTES
require('./api/routes')(app, router);


var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log("Listening on port "+ port);