//console.log("Hello world");
//typescript eciplict 

// let firstName : number =10;
let firstName : any =0;  // any use to disable to type checking
firstName= true;
// console.log(firstName);
//never type for error 
//undefined
//null
//array
const names: string[] =["Hend","Hossam","Ali"];
names.push("Maher");
console.log(names);
// freeze an array
const namess: readonly string[] =["Hend","Hossam","Ali"]; //no add no change in array
// tuple : typed array
const users: [string, number , string] =["Hend",100,"Ali"]; //defined type and lenght
//Enums for constant
//numeric enum
enum Rules {
    Admin ,
    Auther ,
    User 
};
console.log(Rules.Admin);
enum Rules1 {
    Admin=2 ,
    Auther ,
    User 
};
//server
//full initialized enum
enum StatusCodes{
    NotFound=404,
    success =200,
    BadRequest=400
};
console.log(StatusCodes.success);
//string 
enum Rules11 {
    Admin="Admin" ,
    Auther="Auther" ,
    User ="Hend"
};
console.log(Rules11.User);







