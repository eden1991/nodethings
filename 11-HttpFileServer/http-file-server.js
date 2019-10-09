const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(process.argv[3], { encoding: 'utf8', flags: 'r' });
    var read_data = ''

    stream.on('data', (data) => {
        read_data += data;
        console.log("Read in data to read_data variable.")
    })
    stream.on('end', () => {
        console.log('There will be no more data.');
        res.end(read_data);
      });
    // stream.push()
    // res.end(read_data);
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(process.argv[2]);


// Official solution
// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))