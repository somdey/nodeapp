
const express = require("express");
const app = express();
const router = express.Router();

require('./server/middleware')(app);

// API VERSION ROUTES
require('./server/api/routes')(app, router);

app.get('/', (req, res) => {
  res.sendFile('client/index.html', {root: __dirname });
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log("Listening on port "+ port);