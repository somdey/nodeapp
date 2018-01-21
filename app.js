const express = require("express");
const app = express();
const router = express.Router();

// Set base docroot.
var path = require('path');
global.appRoot = path.resolve(__dirname);

// Frontend #SPA.
app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: __dirname });
});

// Serve angular 2 dist folder as public.
app.use(express.static('public'));

// Prefix www.
app.all('/*', (req, res, next) => {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
})

require('./server/middleware')(app);
// Backend #API routes.
app.use(require('./server/api/routes'));

var port = process.env.PORT || 80;

app.listen(port, function() {
    console.log("App is running on port " + port);
});