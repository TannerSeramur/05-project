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
    
    this.pixelArray = buffer.slice(54, this.offset);
    //console.log({buffer}, buffer.length, 'offset', this.offset, 'pixelArray', this.pixelArray);
    //this.pixelArray = buffer.slice(1078);
    if(!this.pixelArray.length){
      throw 'Invalid .bmp format';
    }

  }

  // * Sample Transformer (greyscale)
  // * Would be called by Bitmap.transform('greyscale')
  // * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
  greyscale() {

    for (let i=0; i< this.pixelArray.length; i+=4) {
      let avg = (this.pixelArray[i]+this.pixelArray[i+1]+this.pixelArray[i+2])/3;

      this.pixelArray[i] = avg;
      this.pixelArray[i+1] = avg;
      this.pixelArray[i+2] = avg;
  
    }
  }

  invert(){
    for (let i = 0; i < this.pixelArray.length; i += 4) {
      this.pixelArray[i] = 255 - this.pixelArray[i];// red
      this.pixelArray[i + 1] = 255 - this.pixelArray[i + 1]; // green
      this.pixelArray[i + 2] = 255 - this.pixelArray[i + 2]; // blue
    }
  }
}

module.exports = Bitmap;