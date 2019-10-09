const net = require('net');
var strftime = require('strftime');

const server = net.createServer((socket) => {
    // console.log('client connected')
    // socket.write('hello')
    var myDate = strftime('%Y-%m-%d %H:%M')
    socket.pipe(socket)
    socket.end(myDate + '\n');
  }).on('error', (err) => {
    // Handle errors here.
    throw err;
  });
  
  server.on('data', (data) => {
    console.log(data.toString());
    server.end();
  });

  server.on('end', () => {
    console.log('disconnected from server');
  });

  // Use the port passed in via the command line
  server.listen(process.argv[2], () => {
    // console.log('opened server on', server.address());
    
    // console.log(myDate)
    // console.log(server)
    // console.log(server)
    setTimeout(() => {
      server.close();
    }, 500);
  });


// Official solution
// 'use strict'
// const net = require('net')

// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))