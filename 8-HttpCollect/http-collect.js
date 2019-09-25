'use strict'

const http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  var summed_data = ''
  response.on('data', (data) => {
    summed_data += data
  })
  response.on('end', () => {
    console.log(summed_data.length)
    console.log(summed_data)
  })
  response.on('error', console.error)
}).on('error', console.error)


// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })