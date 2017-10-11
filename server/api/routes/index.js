module.exports = function (app) {
  require('./contacts')(app);
  require('./users')(app);
}
