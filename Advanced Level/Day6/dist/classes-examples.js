"use strict";
class User1 {
    constructor(usernamee) {
        this.usernamee = usernamee;
    }
    getUsername() {
        return this.usernamee;
    }
}
const user1 = new User1("DODO");
console.log(user1.getUsername());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Dogy {
    constructor() {
    }
    makeSound() {
        console.log("HawHaw");
    }
}
class Caty {
    constructor() {
    }
    makeSound() {
        console.log("Meaw");
    }
}
