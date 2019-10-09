'use strict'
const http = require('http')
const map = require('through2-map')

// const server = http.createServer(function (req, res) {
  
//   req.setEncoding('utf8');
//   let data = ''

//   req.on('data', (chunk) => 
//   {
//     console.log(chunk)
//     data += chunk.toUpperCase()
//   });

//   req.on('end', () => {
//     res
//     .writeHead(200, {
//       'Content-Length': Buffer.byteLength(data.toString()),
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'encoding': 'utf8'
//     })
//     .end(data.toString());
//   })
// })

// var capitalise = map({wantStrings: true}, function (chunk) {
//   return chunk.toUpperCase()
// })

// server.listen(Number(process.argv[2]))


// Offical solution
const server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))