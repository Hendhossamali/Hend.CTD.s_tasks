// ForIn
const person = {
    firstName: "Hend",
    lastName: "Hossam",
    height: 90,
    age: 90
};
let text = " ";
for (let key in person) {
    text += person[key];
};
console.log(text);
