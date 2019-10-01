const http = require('http');

function getCompleteContent(url) {
    return new Promise(resolve => {
        http.get(url, function (response) {
            response.setEncoding('utf8')
            var summed_data = ''
        
            response.on('data', (data, err) => {
                if (err) return console.error(err)
                summed_data += data
            })
            response.on('end', () => {
                resolve(summed_data);
            })
            response.on('error', console.error)
            }).on('error', console.error)
    })
}

async function asyncCall() {
    var content = new Array
    content[0] = await getCompleteContent(process.argv[2], 0);
    content[1] = await getCompleteContent(process.argv[3], 1);
    content[2] = await getCompleteContent(process.argv[4], 2);

    for(var i = 0; i < content.length; i++) {
        console.log(content[i])
    }
  }
  
  asyncCall();


// Official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }