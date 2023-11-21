"use strict";
let myName = "Hend";
console.log(myName);
const fullName = ["Hend", "Hossam", "Ali"];
fullName.push("Maher");
console.log(fullName);
const tuple = ["Hend", 100, "Ali"];
console.log(tuple);
var Rules;
(function (Rules) {
    Rules[Rules["Admins"] = 0] = "Admins";
    Rules[Rules["Authers"] = 1] = "Authers";
    Rules[Rules["Users"] = 2] = "Users";
})(Rules || (Rules = {}));
;
console.log(Rules.Admin);
var Rules11;
(function (Rules11) {
    Rules11["Admins"] = "Admin";
    Rules11["Authers"] = "Auther";
    Rules11["Users"] = "Hend";
})(Rules11 || (Rules11 = {}));
;
console.log(Rules11.User);
