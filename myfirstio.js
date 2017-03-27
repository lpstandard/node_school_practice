let fs = require('fs');
let fileName = process.argv[2];
let fileBuffer = fs.readFileSync(fileName);
let bufString = fileBuffer.toString();
let splitted = bufString.split('\n');
let lineNumber = splitted.length - 1;

console.log(lineNumber);