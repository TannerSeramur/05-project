'use strict';

module.exports = function punk(bmp){

  for (let i = 0; i < bmp.colorArray.length; i += 4){

    //blue eyebrows
    //yellow beard
    if(i % 3 === 0){
      bmp.colorArray[i+4] = 100;
    }
    
  }
};