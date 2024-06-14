module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}


module.exports.singlePerson = person;

// still change the name to "kyaw"
person.name = "kyaw";

// You can't 
// console.log(items[0])

// console.log(person)
// console.log("hel")