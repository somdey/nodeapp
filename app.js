const express = require("express");
const app = express();
const router = express.Router();

// Router middleware, mentioned it before defining routes.
router.use(function(req,res,next) {
  console.log("/" + req.method);
  next();
});

require('./server/middleware')(app);

// Backend #API routes.
require('./server/api/routes')(app, router);

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

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});