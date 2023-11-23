//Functions
//1)Return type fun (emplicit or explicit33)
function getUserAgee(): number {
    const age: number = 100;
    return age;
};
console.log(getUserAgee());

//2)NO return
function printHelloo(): void {
    console.log("Hello");
};
printHelloo();

//TYPE ALIASES
type Agee = number;
const personAgee: Agee = 100;

//EX
type CarModell = string;
type CarYearr = number;
type Carr = {
    model: CarModell,
    year: CarYearr
};
const xx: Car = {
    model: "BMW",
    year: 2000
}
//Interfaces :as type aliases but for object only
interface User {
    username: string,
    passsword: string,
    age: number
}
const personn: User = {
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
const customerOnee : Client ={
    username: "Hend",
    passsword: "Pass1",
    age: 50,
    discount:70 
}
console.log(customerOnee.username)
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
const dogOnee :Dog={
    height: 60 ,
    eyeColor:  "blue"
}
console.log(dogOnee.eyeColor)

//classes

class User11 {
    private readonly usernamee: string;

    public constructor(usernamee: string) {
        this.usernamee = usernamee;
    }
    public getUsername(): string {
        return this.usernamee;
    }
}
const user11 = new User11("DODO");
//user1.usernamee ="Hend"
console.log(user11.getUsername());
//inhert
interface Shape {
    getArea: () => number;
}
//class inhert from interface by keywors implement 
class Rectanglee implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {

    }
    public getArea(): number {
        return this.width * this.height;
    }
}
interface Animals {
    makeSound: () => void
}
//interface تطبيق بتاعه بيكون كلاس implemrnt
class Dogyy implements Animals {
    public constructor() {
    }
    public makeSound(): void {
        console.log("HawHaw")
    }
}
class Catyy implements Animals {
    public constructor() {
    }
    public makeSound(): void {
        console.log("Meaw")
    }
}