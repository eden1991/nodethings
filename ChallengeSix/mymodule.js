const fs = require('fs');
const path = require('path');


var main_func = function(folder, ext) {
    fs.readdir(folder, function (err, files) {
    if (err) return console.log(err)
    
    files.forEach(function(file) {
        if (path.extname(file) == '.' + ext) {
            console.log(file)
        }
    })
  })
}

module.exports = main_func