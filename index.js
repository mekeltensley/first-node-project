const numbers = [1,2,3,6,22,34];
const person = {
    name: "John Doe",
    age: 39,
    foods: ["burgers, fries"],
    car: {
        name: "Tesla",
        model: "Model S",
        year: 2020
    }
}
console.log(person);
console.log(numbers);
console.log(person.foods);



const somethingElse = require("./utils/myModule"); // imports the module 

console.log(somethingElse); // this is just the object 

somethingElse.hello(); // returns the string but doesn't print to terminal

console.log(somethingElse.hello()); // returns and prints string 


//using faker 

const faker = require("faker");

let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

//importing axios 

const axios = require('axios'); //allows to make API calls and retrieve data

axios.get('https://api.github.com/users/mekeltensley')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});
