'use strict';

const { exec } = require('child_process');

describe('transforming a bitmap', () => {

  it('transforms an image', () => {
    exec('node index.js assets/24bit.bmp greyscale', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  });
});