'use strict';

module.exports = function invert(bmp){
  for (let i = 0; i < bmp.colorArray.length; i += 4) {
    bmp.colorArray[i] = 255 - bmp.colorArray[i];// red
    bmp.colorArray[i + 1] = 255 - bmp.colorArray[i + 1]; // green
    bmp.colorArray[i + 2] = 255 - bmp.colorArray[i + 2]; // blue
  }
};
