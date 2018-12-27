'use strict';

const fs = require('fs');
const Bitmap = require('./Bitmap');


//process.argv[0] is process exec path
//process.argv[1] is the file path entered in the terminal
//proccess.argv[2] is the transformion operation specificed in the terminal
const [file, operation] = process.argv.slice(2);

console.log(process.argv);
if (!file) {
  throw 'file name required';
}

if (!operation) {
  throw 'operation required';
}

fs.readFile(file, (err, buffer) => {
  //console.log({buffer});
  if(err){throw err;}
  let bitmapInstance = new Bitmap(buffer);
  
  //runs the specified transformtion from the Bitmap class
  bitmapInstance.transform(operation);

  let newFileName = file.replace(/\.bmp$/, operation+`.bmp`);

  fs.writeFile(newFileName, bitmapInstance.buffer, (err, out) => {
    if (err) {
      throw err;
    }
    console.log(`Bitmap Transformed: ${newFileName}`);
  });
});

