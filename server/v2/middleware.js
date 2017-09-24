var bodyParser = require("body-parser");

module.exports.bodyParser = bodyParser;
module.exports.isEmptyObject = function (obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}