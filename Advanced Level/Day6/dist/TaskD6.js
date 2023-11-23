"use strict";
function getUserAgee() {
    const age = 100;
    return age;
}
;
console.log(getUserAgee());
function printHelloo() {
    console.log("Hello");
}
;
printHelloo();
const personAgee = 100;
const xx = {
    model: "BMW",
    year: 2000
};
const personn = {
    username: "Hend",
    passsword: "Pass",
    age: 100
};
const customerOnee = {
    username: "Hend",
    passsword: "Pass1",
    age: 50,
    discount: 70
};
console.log(customerOnee.username);
const dogOnee = {
    height: 60,
    eyeColor: "blue"
};
console.log(dogOnee.eyeColor);
class User11 {
    constructor(usernamee) {
        this.usernamee = usernamee;
    }
    getUsername() {
        return this.usernamee;
    }
}
const user11 = new User11("DODO");
console.log(user11.getUsername());
class Rectanglee {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Dogyy {
    constructor() {
    }
    makeSound() {
        console.log("HawHaw");
    }
}
class Catyy {
    constructor() {
    }
    makeSound() {
        console.log("Meaw");
    }
}
