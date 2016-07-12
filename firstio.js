var fs = require('fs');
var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);
var str = buffer.toString();
var strArray = str.split("\n");

var numNew = strArray.length - 1;

console.log(numNew);