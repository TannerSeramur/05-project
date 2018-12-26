'use strict';

module.exports = function darken(bmp) {

  for (let i = 0; i < bmp.colorArray.length; i+=4){

    bmp.colorArray[i] = bmp.colorArray[i] *.5;
    bmp.colorArray[i+1] = bmp.colorArray[i+1] *.5;
    bmp.colorArray[i+2] = bmp.colorArray[i+2] *.5;

  }
};