'use strict'
const http = require('http')

const server = http.createServer(function (req, res) {
    const hostname = req.rawHeaders[1]
    var pathname = req.url.toString()
    var fullUrl = new URL(hostname + pathname)
    pathname = fullUrl.pathname.replace(/^\d*/gi, '')
    var suffix = pathname.split('/')

    req.on('data', (data) => {
        console.log(data.toString());
      });

    req.on('end', () => {
        var response = null

        if (suffix[suffix.length-1] === 'parsetime') {
            var myDate = new Date(fullUrl.search.split('=')[1])
            var response = {
                hour: myDate.getHours(),
                minute: myDate.getMinutes(),
                second: myDate.getSeconds()
            }
        }

        if (suffix[suffix.length-1] === 'unixtime') {
            var myDate = new Date(fullUrl.search.split('=')[1])
            var response = {
                unixtime: myDate.getTime()
            }
        }

        res.writeHead(200, { 
            'Content-Type': 'application/json' 
        })
        .end(JSON.stringify(response))
    })
  })
  
  server.listen(Number(process.argv[2]))


  // Offical solution
//   function parsetime (time) {
//     return {
//       hour: time.getHours(),
//       minute: time.getMinutes(),
//       second: time.getSeconds()
//     }
//   }

//   function unixtime (time) {
//     return { unixtime: time.getTime() }
//   }

//   const server = http.createServer(function (req, res) {
//     const parsedUrl = new URL(req.url, 'http://example.com')
//     const time = new Date(parsedUrl.searchParams.get('iso'))
//     let result

//     if (/^\/api\/parsetime/.test(req.url)) {
//       result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//       result = unixtime(time)
//     }

//     if (result) {
//       res.writeHead(200, { 'Content-Type': 'application/json' })
//       res.end(JSON.stringify(result))
//     } else {
//       res.writeHead(404)
//       res.end()
//     }
//   })
//   server.listen(Number(process.argv[2]))