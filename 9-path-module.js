const path = require('path')

console.log(path)
console.log(path.sep)
console.log(__dirname)

// Join the path to the text
const filePath = path.join('/content/','/subfolder','test.txt');
console.log(filePath)

// get the base file
const base = path.basename(filePath);
console.log(base);


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

