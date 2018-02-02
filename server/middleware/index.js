let bodyParser = require("body-parser")
const multer  = require('multer')
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'files')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
let upload = multer({ storage: storage })

const middleware = {
  bodyParser: bodyParser.json(),
  upload: upload
}

module.exports = middleware;