const mymodule = require('./mymodule.js')
const folder = process.argv[2]
const ext = process.argv[3]

mymodule(folder, ext, function (err, file) {
  if (err) return console.log(err)

  console.log(file)
})
