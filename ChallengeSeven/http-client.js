const http = require('http');
const url = require('url');
const srvUrl = url.parse(process.argv[2]);

// http.get({
//   hostname: srvUrl.hostname,
//   port: srvUrl.port,
//   path: srvUrl.path,
//   agent: false  // Create a new agent just for this one request
// }, (res) => {
//   res.setEncoding('utf-8')
//   res.on('data', function (data) { console.log(data) })
// });

'use strict'

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)