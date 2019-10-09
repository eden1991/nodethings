'use strict'
const http = require('http')
const stream = require('stream');
// const fs = require('fs');
// const r = fs.createReadStream(input, 'utf8');
// const w = fs.createWriteStream('output.txt');
var map = require("through2-map")

const server = http.createServer(function (req, res) {
  
  req.setEncoding('utf8');
  
  var body = '';
  let data = []

  req.on('data', (chunk) => 
  {
    data.push(chunk)
    // stream.pipe(capitalise)
    // r.pipe(spaceout).pipe(w);
    // data.push(chunk.toUpperCase())
    // data.push(r.pipe(capitalise))
  });

  req.on('end', () => {
    // body = JSON.parse(data)
  
  //   res
  //   .writeHead(200, {
  //     'Content-Length': Buffer.byteLength(JSON.stringify(body)),
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'encoding': 'utf8'
  //   })
  //   .end(JSON.stringify(body));
  //   console.log()
  // })
  res
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(data.toString()),
    'Content-Type': 'application/x-www-form-urlencoded',
    'encoding': 'utf8'
  })
  .end(data.toString());
})
})

var capitalise = map({wantStrings: true}, function (chunk) {
  return chunk.toUpperCase()
})

server.listen(Number(process.argv[2]))