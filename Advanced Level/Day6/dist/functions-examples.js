"use strict";
function getUserAge() {
    const age = 100;
    return age;
}
;
console.log(getUserAge());
function printHello() {
    console.log("Hello");
}
;
printHello();
function sum(firstNumber, seconedNumber) {
    return firstNumber + seconedNumber;
}
console.log(sum(3, 7));
function sum1(firstNumber, seconedNumber, thirdNumber) {
    return firstNumber + seconedNumber + (thirdNumber || 0);
}
console.log(sum1(3, 7));
console.log(sum1(3, 7, 9));
function sum2(firstNumber, seconedNumber = 10) {
    return firstNumber + seconedNumber;
}
console.log(sum2(3));
const age = 100;
const personAge = 100;
const x = {
    model: "BMW",
    year: 2000
};
const person = {
    username: "Hend",
    passsword: "Pass",
    age: 100
};
const customerOne = {
    username: "Hend",
    passsword: "Pass1",
    age: 50,
    discount: 70
};
console.log(customerOne.username);
const dogOne = {
    height: 60,
    eyeColor: "blue"
};
console.log(dogOne.eyeColor);
