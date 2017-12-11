const express = require("express");
const app = express();
const router = express.Router();

require('./server/middleware')(app);

// API routes.
require('./server/api/routes')(app, router);

// SPA.
app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: __dirname });
});

// Serve angular 2 dist folder as public.
app.use(express.static('public'));

app.all('/*', function(req, res, next) {
  
});

app.all('/*', (req, res, next) => {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect('http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
})

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log("Listening on port "+ port);