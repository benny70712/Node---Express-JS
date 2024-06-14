// file system module
const {readFileSync, writeFileSync} = require('fs');



const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

// if the file is there, node will overwrite the file

writeFileSync('./content/result-sync.txt', 
    `Here is the result ${first}, ${second}`,
    {flag : 'a'},
)
