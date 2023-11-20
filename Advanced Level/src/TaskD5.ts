//Types
let myName :string  = "Hend";
console.log(myName);

//Array
const fullName: string[] =["Hend","Hossam","Ali"];
fullName.push("Maher");
console.log(fullName);

//Tuples
const tuple: [string, number , string] =["Hend",100,"Ali"];
console.log(tuple);

//Enums
enum Rules {
    Admins ,
    Authers ,
    Users
};
console.log(Rules.Admin);

enum Rules11 {
    Admins="Admin" ,
    Authers="Auther" ,
    Users ="Hend"
};
console.log(Rules11.User);


