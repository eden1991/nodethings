var fs = require('fs')
var numOfLines = undefined

function addOne(callback) {
  fs.readFile(process.argv[2], 'utf-8', function doneReading(err, fileContents) {
    numOfLines = parseInt(fileContents.split("\n").length-1)
    callback()
  })
}

function logMyNumberOfLines() {
  console.log(numOfLines)
}

addOne(logMyNumberOfLines)