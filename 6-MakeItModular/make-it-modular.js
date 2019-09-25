const mymodule = require('./mymodule.js')
const folder = process.argv[2]
const ext = process.argv[3]

mymodule(folder, ext, function (err, file_list) {
  if (err) return console.error('ERROR: ', err)

  file_list.forEach(function(file) {
    console.log(file)
  });
})
