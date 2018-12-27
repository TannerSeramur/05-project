![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Transforming John

### Author: Lena Eivy and Tanner Seramur

### Links and Resources
* [repo](https://github.com/codefellows-seattle-javascript-401d28/05-project)
* [travis](https://travis-ci.com/applena/05-project.svg?branch=masters)

### Modules
#### `Bitmap.js`
##### Exported Values and Methods
Receives a file name, used in the transformer to note the new buffer. Exports multiple function that takes an array of buffer information from a bitmap and apply a transformation to that bitmap.

###### `parser`
Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file


#### `greyscale.js`
##### Exported Values and Methods
greyscale is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image changeing it from color to greyscale.

- `greyscale(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information

#### `invert.js`
##### Exported Values and Methods
invert is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image inverting the colors.

- `invert(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information


#### `punk.js`
##### Exported Values and Methods
punk is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image turning the blacks yellow and blue.

- `punk(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information

#### `darken.js`
##### Exported Values and Methods
darken is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image making the entire image darker.

- `darken(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information

#### `mirror.js`
##### Exported Values and Methods
mirror is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image making the top half of the image mirror on the bottom half.

- `mirror(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information

#### `flip.js`
##### Exported Values and Methods
flip is a function that uses the parsed bitmap information from the parser to apply a transformation on the bitmap image making it flip up-side-down.

- `flip(pixelArray/colorArray)`
  - `pixelArray` {array} - the buffer array of pixel information
  - `colorArray` {array} - the buffer array of pixel color information

### Setup

#### Running the app
* npm i
* CLI requires: `node index.js filepath-to-bitmap-image transformation-name`
* transformation name option:
  - greyscale
  - invert
  - punk
  - darken
  - flip
  - mirror


#### Tests
* To run test in the CLI - `npm run test`
* The following assertations were made:
  * user enters one of the specified named transformations
  * user enters a valid file path to a bmp image
  * greyscale will remove the color from an image
  * invert will invert the colors in the image
  * punk will turn the blacks blue
  * darken will darken the image
  * mirror will reflect the top of the image on the bottom
  * flip will turn the image up-side-down

