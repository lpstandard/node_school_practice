let fs = require("fs");
let fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
  if(err) {
    console.log('err', err);
  }
    console.log(data.toString().split('\n').length - 1);
});




