const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

const sayBye = (name) => {
    console.log(`Bye Bye ${name}`);
}

// don't need to put in bracket because of a single variable
// export default
module.exports = {sayHi, sayBye};
