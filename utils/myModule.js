function helloClass() {
    return 'Good morning. Please put sonic emoji in Slack.'
}

function goodbyeClass() {
    return 'Goodbye. Please put sonic emoji in Slack.'
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduction = function () {
            return 'Hi';
        }
    }
}

//export the function

module.exports = {
    hello: helloClass,
    goodbye: goodbyeClass,
    add: addNumbers, 
    human: Human,
}