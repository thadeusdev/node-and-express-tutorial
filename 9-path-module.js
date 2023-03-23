const path = require('path')
console.log(path.sep) // returns path separator
// => /

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
// => /content/subfolder/test.txt 

const base = path.basename(filePath)
console.log(base)
// => test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
// => /home/thadeus/Development/code/phase-5/node-and-express/tutorial/content/subfolder/test.txt