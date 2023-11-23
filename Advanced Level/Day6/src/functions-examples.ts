//Camel case : getAge
//BASKAL case :GetAge
//Functions
//1)Return type fun (emplicit or explicit33)
function getUserAge(): number {
    const age: number = 100;
    return age;
};
console.log(getUserAge());

//2)NO return
function printHello(): void {
    console.log("Hello");
};
printHello();
// 2)PARAMETERS
function sum(firstNumber: number, seconedNumber: number): number {
    return firstNumber + seconedNumber;
}
console.log(sum(3, 7));
//Optional parameter :prameter may be existent and may be not.
function sum1(firstNumber: number, seconedNumber: number, thirdNumber?: number): number {
    return firstNumber + seconedNumber + (thirdNumber || 0);
}                                                        //logic || union type : or mean if 3rd num is exist ok if not put it 0
console.log(sum1(3, 7));
console.log(sum1(3, 7, 9));
//Default parameter :default value goes after the type
function sum2(firstNumber: number, seconedNumber: number = 10): number {
    return firstNumber + seconedNumber;
}
console.log(sum2(3,));
//Rest parameter(PIZZA):spread operator بتفكه ل ارراى
//    function add(firstNumber:number , seconedNumber:number,...rest :number[]):number{
//     return firstNumber+seconedNumber+ rest.reduce((total+ current) => total +current , 0);
//    }
//    console.log(add(2,3,4,5,6,7,8)); 

//TYPE ALIASES : define a new type
//type anotaion
const age: number = 100;
//TYPE ALIASES
type Age = number;
const personAge: Age = 100;

//EX
type CarModel = string;
type CarYear = number;
type Car = {
    model: CarModel,
    year: CarYear
};
const x: Car = {
    model: "BMW",
    year: 2000
}
//Interfaces :as type aliases but for object only
interface User {
    username: string,
    passsword: string,
    age: number
}
const person: User = {
    username : "Hend",
    passsword: "Pass",
    age : 100
}
//spcial in interface >> extending
//the upper data + this data
interface Client extends User{
    discount: number 
}
//new client
const customerOne : Client ={
    username: "Hend",
    passsword: "Pass1",
    age: 50,
    discount:70 
}
console.log(customerOne.username)
//EX
interface Animal{
    height: number ,
}
interface Dog extends Animal{
    eyeColor: string 
}
interface Bird extends Animal{
    canFly: boolean
}
const dogOne :Dog={
    height: 60 ,
    eyeColor:  "blue"
}
console.log(dogOne.eyeColor)