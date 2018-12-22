'use strict';

const fs = require('fs');
const Bitmap = require('./Bitmap');


// ------------------ GET TO WORK ------------------- //

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

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
  if (! bitmapInstance[operation]){
    throw 'sorry, that is not a valid operation';
  }
  //runs the specified transformtion from the Bitmap class
  bitmapInstance[operation]();

  let newFileName = file.replace(/\.bmp$/, operation+`.bmp`);

  fs.writeFile(newFileName, bitmapInstance.buffer, (err, out) => {
    if (err) {
      throw err;
    }
    console.log(`Bitmap Transformed: ${newFileName}`);
  });
});

// Note that this has to be nested!
// Also, it uses the bitmap's instance properties for the name and thew new buffer
