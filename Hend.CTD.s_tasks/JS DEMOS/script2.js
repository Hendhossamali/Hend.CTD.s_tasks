// Variable_object
const car ={
    model:"BMW",
    color:"blue",
     year:"2023"    //no comma the last proprty
};
// const person ={name:"Hend",weight:100,age:25};
// accsess object property
//  1-console.log(person.name);
//  console.log(person["age"]); //2

// console.log(person);

// methods for objects(fun)
const person ={
    firstname:"Hend",
    lastname:"Hossam",
    weight:100,
    age:25
   fullName: function(){
    return this.firstname + "" + this.lastname;
   }
};
console.log(person.fullName());

//comparison 
//if ,if else, switch
//loops, for ,for in , while 


