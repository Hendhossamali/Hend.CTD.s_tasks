//Fun 
let calcu = function (fnum, snum) {
    return fnum + snum;
}
// Arrow Fun
let calc = (fnum, snum) => fnum + snum;
console.log(calc(3, 2));

let hello = (name1) => "Hello " + name1;
console.log(hello("Hend"));
//class (imp  ortant)(The content is the king=object)
//class:templets for JS object.
class cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const bmw = new cars("BMW", 2022);
const fiat = new cars("Fiat", 2023);

console.log(bmw.name);
console.log(fiat.year);
//another class
class user1 {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
const Hend = new user1("Hend", "sample");
console.log(Hend.username);
//Ex
class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(){
        const today= new Date();
        return today.getFullYear()-this.year ;
    }
}
const BMW = new car("BMW", 2022);
console.log(BMW.age());
//EX
class user {
    constructor(username, password,fname, lname) {
        this.username = username;
        this.password = password;
        this.fname = fname;
        this.lname = lname;

    }
    fullname(){
        return this.fname +" "+ this.lname;
    }
}
const Hendh = new user("Hend", "sample","Hend","Hossam");
console.log(Hendh.fullname());
//class inheritance
//getter ,setter
// static method 






