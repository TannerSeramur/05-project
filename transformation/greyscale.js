'use strict';

module.exports = function greyscale(bmp) {
  for (let i=0; i< bmp.colorArray.length; i+=4) {
    let avg = (bmp.colorArray[i]+bmp.colorArray[i+1]+bmp.colorArray[i+2])/3;

    bmp.colorArray[i] = avg;
    bmp.colorArray[i+1] = avg;
    bmp.colorArray[i+2] = avg;

  }
};