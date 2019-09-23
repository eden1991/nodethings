const fs = require('fs');
file_path = process.argv[2]

file_contents = fs.readFileSync(file_path, 'utf8');

console.log(file_contents.split("\n").length-1);

//Solution
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1