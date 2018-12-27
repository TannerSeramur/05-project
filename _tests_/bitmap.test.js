'use strict';

const Bitmap = require(__dirname+'/../Bitmap.js');
const fs = require('fs');

let transforms = ['greyscale', 'invert', 'darken', 'punk', 'flip', 'mirror'];


describe('transforming a bit map', () => {

  it('applies the color transformation', (done) => {
    let count = 0;

    transforms.forEach(transformation => {
      //gets the buffer for the original file
      fs.readFile(__dirname+`/../assets/baldy.bmp`, function(error, originalBuffer) {
        if(error) {throw error;}
        let baldy = new Bitmap(originalBuffer);

        //generates the buffers for the transformation files
        fs.readFile(__dirname+`/../assets/baldy${transformation}.bmp`, function(err, transformedBuffer){
          if (err) {throw err;}
          
          let modifiedImage = new Bitmap(transformedBuffer);
          baldy.transform(transformation);
          
          //expecting the modified original color array to equal the modified image color array
          expect(baldy.colorArray).toEqual(modifiedImage.colorArray);
          count++;
          
          //waits until all the tranformatins have run to run done
          if(count === transforms.length){done();}

        });
      });
    });
  });
});


describe('running a transformation on a bitmap', () => {


  it('requires a valid transformation name', () => {
    fs.readFile(__dirname+`/../assets/baldy.bmp`, (err, buffer) => {
      //console.log({buffer});
      if(err){throw err;}
      let bitmapInstance = new Bitmap(buffer);
      
      //runs the specified transformtion from the Bitmap class
      bitmapInstance.transform('badTransform.js');
    
      let newFileName = `/../assets/baldy.bmp`.replace(/\.bmp$/, `badTransform`+`.bmp`);
    
      fs.writeFile(newFileName, bitmapInstance.buffer, (err, out) => {
        if (err) {
          throw err;
        }
        console.log(`Bitmap Transformed: ${newFileName}`);
      });
    });
    
    expect(()=> {
    }).toThrow('sorry, that is not a valid operation');

  });

  it('requires a valid filepath to a bmp image', () => {
    let filePath = ['bad.bmp'];
    expect(()=> {
      fs.readFile(filePath,(err.data) = {});
    }).toThrow();

  });

  it('requires a bmp image', () => {
    let image = null;
    expect(()=> {
      fs.readFile(image,(err.data) = {});
    }).toThrow();

  });
});

