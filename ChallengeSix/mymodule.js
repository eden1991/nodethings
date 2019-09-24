const fs = require('fs')
const path = require('path')

module.exports = function (folder, ext, callback) {
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err)

    files.forEach(function (file) {
      if (path.extname(file) === '.' + ext) {
        return callback(file)
      }
    })
  })
}
