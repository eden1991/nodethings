var map = require("through2-map")
const fs = require('fs');
const r = fs.createReadStream('input.txt', 'utf8');
const w = fs.createWriteStream('output.txt');
var mystring = new Array
mystring.push("rah")




// var truncate = map(function (chunk) {
//   return chunk.slice(0, 10)
// })


// vs. with through2:
// var truncate = map(function (chunk, encoding) {
//   return chunk;
// })


 
// Then use your map:
// source.pipe(truncate).pipe(sink)
// source.pipe(truncate).pipe(sink)
 
// Additionally accepts `wantStrings` argument to convert buffers into strings
// var stripTags = map({wantStrings: true}, function (str) {
//   // OMG don't actually use this
//   return str.replace(/<.*?>/g, "")
// })
 
// Works like `Array.prototype.map` meaning you can specify a function that
// takes up to two* arguments: fn(chunk, index)
var spaceout = map({wantStrings: true}, function (chunk) {
  return chunk.toUpperCase()
})

r.pipe(spaceout).pipe(w);
 
// // vs. with through2:
// var spaceout = through2(function (chunk, encoding, callback) {
//   if (this.index == undefined) this.index = 0
//   var buf = (this.index++ % 2 == 0) ? Buffer.concat(chunk, new Buffer("\n\n")) : chunk
//   this.push(buf)
//   return callback()
// })