const numbers = [1,2,3,6,22,34];
const person = {
    name: "John Doe",
    age: 39,
    foods: ["burgers, fries"],
    car: {
        name: "Tesla",
        model: "Model S",
        year: 202
    }
}

console.log(numbers);
console.log(person.foods);

const somethingElse = require('./utils/myModule');

console.log(somethingElse);

somethingElse.hello();

//????????????
console.log(somethingElse.hello()); 
