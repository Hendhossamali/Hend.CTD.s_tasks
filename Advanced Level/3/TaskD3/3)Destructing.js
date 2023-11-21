//Destructing array(very important)
const vehicles = ["BMW", "Fiat", "Volvo"];
const [car1, car2, car3] = vehicles;
console.log(car1);
console.log(car2);
console.log(car3);
// Ex
const vehicles2 = ["BMW", "Fiat", "Volvo"];
const [car, ,] = vehicles2;
console.log(car1);

//نقطع ال جاى من الفانكشن
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(4, 2);
// const [add, , , ] = calculate(4, 2);

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);

console.log(add + " " + subtract + " " + multiply + " " + divide);
//destruct an oject
const user = {
    username: "Hend Hossam",
    password: "sample",
    photo: "https//profilephoto"
}
//  console.log(user.username);
// By Destructing
const { username, password, photo } = user; //not important the arrange but name imp
console.log(username + " " + photo);