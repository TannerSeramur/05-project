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
    this.pixelArray = buffer.slice(1078);
    
    console.log(this.pixelArray.length, this.height*this.width);
    if(!this.pixelArray.length){
      throw 'Invalid .bmp format';
    }

  }

  // * Sample Transformer (greyscale)
  // * Would be called by Bitmap.transform('greyscale')
  // * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
  greyscale() {

    for (let i=0; i< this.colorArray.length; i+=4) {
      let avg = (this.colorArray[i]+this.colorArray[i+1]+this.colorArray[i+2])/3;

      this.colorArray[i] = avg;
      this.colorArray[i+1] = avg;
      this.colorArray[i+2] = avg;
  
    }
  }

  invert(){
    for (let i = 0; i < this.colorArray.length; i += 4) {
      this.colorArray[i] = 255 - this.colorArray[i];// red
      this.colorArray[i + 1] = 255 - this.colorArray[i + 1]; // green
      this.colorArray[i + 2] = 255 - this.colorArray[i + 2]; // blue
    }
  }

  punk(){

    for (let i = 0; i < this.colorArray.length; i += 4){

      //blue eyebrows
      //yellow beard
      if(i % 3 === 0){
        this.colorArray[i+4] = 100;
      }
      
    }
  }

  darken() {

    for (let i = 0; i < this.colorArray.length; i+=4){

      this.colorArray[i] = this.colorArray[i] *.5;
      this.colorArray[i+1] = this.colorArray[i+1] *.5;
      this.colorArray[i+2] = this.colorArray[i+2] *.5;

    }
  }

}

module.exports = Bitmap;
