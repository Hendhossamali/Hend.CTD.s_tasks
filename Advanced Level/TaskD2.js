
const person ={
    firstName:"Jone",
    lastName:"Doe",
    fullName: function(){
        return this.firstName +" "+ this.lastName;
    }
};
console.log(person.fullName());

// alert(person.firstname);