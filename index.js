"use strict";
let hasValue = true;
hasValue = 20 > 1120;
let count = 20;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let firstName = 'John';
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`;
const person = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    age: 30
};
console.log(person.age);
const fruits = ['Apple', 'Banana', 'Grape', 10, true];
const book = ['business', 1500, false];
console.log(book[1]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
let clothSize;
const cloth = {
    color: 'white',
    size: 'medium'
};
const doubleNumber = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
const error = (message) => {
    throw new Error(message);
};
