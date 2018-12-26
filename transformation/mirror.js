'use strict';

module.exports = function flip(bmp) {
  for(let i =0; i<=bmp.mirrorArray.length/2; i++){
    bmp.mirrorArray[i] = bmp.mirrorArray[bmp.mirrorArray.length-i];
  }
};