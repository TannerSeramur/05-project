'use strict';

module.exports = (bmp) => {
  if ( ! bmp.colorArry.length ){
    throw 'must pass a valid bmp object';
  }
  for(let i = 0; i < bmp.colorArry.length; i += 4){
    bmp.colorArry[i] = 225;
    bmp.colorArry[i+1] = bmp.colorArry[i+1];
    bmp.colorArry[i+2] = bmp.colorArry[i+2];
    bmp.colorArry[i+3] = 0;
  }
};