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
      if(err){throw err;}
      
      let bitmapInstance = new Bitmap(buffer);
      
      expect(()=>{
        bitmapInstance.transform('badTransformation');
      }).toThrow('sorry, that is not a valid operation');

    });
  });

});