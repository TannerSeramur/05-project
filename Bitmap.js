'use strict';

let transformations = require('./transformation/index');

//Bitmap -- receives a file name, used in the transformer to note the new buffer
class Bitmap {

  // Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
  constructor(buffer){
    this.buffer = buffer;
    this.type = buffer.toString('utf-8', 0, 2);
    this.size = buffer.readInt32LE(2);
    this.offset = buffer.readInt16LE(10);
    this.headerSize = buffer.readInt16LE(14);
    this.width = buffer.readInt16LE(18);
    this.height = buffer.readInt16LE(22);
    this.bitPerPixel = buffer.readInt16LE(28);
    
    this.colorArray = buffer.slice(54, this.offset);
    this.pixelArray = buffer.slice(1480);
    this.mirrorArray = buffer.slice(1479);
     
    // console.log(this.pixelArray.length, this.height*this.width);
    if(!this.pixelArray.length){
      throw 'Invalid .bmp format';
    }

  }

  // * Sample Transformer (greyscale)
  // * Would be called by Bitmap.transform('greyscale')
  transform(transformationName){
    if (!transformations[transformationName]){
      throw 'sorry, that is not a valid operation';
    }
    transformations[transformationName](this);
  }
  
}

module.exports = Bitmap;