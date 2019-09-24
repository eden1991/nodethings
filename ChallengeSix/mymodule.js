const fs = require('fs')
const path = require('path')

module.exports = function (folder, ext, callback) {
  fs.readdir(folder, function (err, files) {
    if (err) return callback(err)

    filtered_files = []
    for (var i = 0; i < files.length; i++) {
      if (path.extname(files[i]) === '.' + ext) {
        filtered_files.push(files[i])
      }
    }
    callback(null, filtered_files)
  })
}
