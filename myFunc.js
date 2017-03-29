const fs = require('fs');
const path = require('path');


module.exports = (dirname, extension, callback) => {

  extension = `.${extension}`;
  fs.readdir(dirname, (err, files) => {
    if(err){
      return callback(err);
    }
    const filtered = files.filter(file => path.extname(file) === extension);
    return callback(null, filtered);
  });   
} 

  


