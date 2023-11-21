// Creat an array must declare array and object by const
//1)Letterl method(The best)
const cars = [
    "BMW",
    "NISSAN",
    "LADA",
    "VOLVO"];
console.log(cars);
//2) index array start with 0 (not good because of include gab)
const colors = [];
colors[0] = "black";
colors[1] = "white";
colors[2] = "green";
console.log(colors);
//3)using keyword new(valid)
const shapes = new Array("circle", "square", "triangle");
console.log(shapes);
//To access array element
let car = cars[2];
console.log(car);
//Changeing array element
cars[1] = "OPEL";
console.log(cars[1]);
console.log(cars);
//Convert array to string
console.log(colors.toString());
//length property :returns the num of array elements
const colorslenght=colors.length;
console.log(colorslenght); //length()
//access the last element
console.log(colors[colorslenght-1]); 
//for Loop , forEach , ForIn ,forOf
//Adding array element by push (in the last element )
colors.push("red");
//colors[colors.lenght]="blue"; undefined holes
console.log(colors);
// typeof
const num=[
    "one",
    "two"
];
console.log(typeof num);
console.log(Array.isArray(num));
console.log(num.join("+"));
//pop property remove last element and return it
console.log(shapes.pop());
console.log(shapes);
//shift() method remove the first element and return it and shift all others elements(remove[0] [1>0][2>1]...)
//unshift() method add the first element and return it and shift all others elements(add[0] [0>1][1>2]...)
//delete operator not good use pop , shift instead

//merging 2 arrays by concat() method
console.log(cars.concat(colors));
//merging an array with values
console.log(cars.concat("Ferrari"));
// imp>> flat() create new array from merging arrays
const merg =cars.concat(colors)
console.log(merg.flat()); //??
// splice() adds and remove specific elements
console.log(colors);
console.log(colors.splice(2, 0,"yellow", "pink"));
console.log(colors.slice(1));
// sort() sorts an array alphabetically(not use in num only by using compare fun sort(function(a,b){return a-b}))
// reverse() 
//iteration Foreach()
//map() creats a new arr by perfoming a fun in rach arr element dose not change the old arr ele.
//flatmap() , filter()
//...
























