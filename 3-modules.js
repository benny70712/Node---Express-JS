// Modules
// To acess functions throughout the application

// use require to access the shared variables
const {john, peter} = require('./4-names');

const {sayHi, sayBye} = require('./5-utils')
const {items, singlePerson} = require('./6-alternative-flavour')
require('./7-mind-grenade')

console.log(items);
console.log(singlePerson.name)

sayHi(john)
sayBye(peter)

