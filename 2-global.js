// Globals - No window
// global variables - you have access to it everywhere


// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where program is being executed

console.log("Hello world!")
console.log(__dirname)
console.log(__filename)
console.log(process)
console.log(module)
console.log(require)

console.log(__dirname)
setInterval(() => {console.log("Hello world!")}, 1000)