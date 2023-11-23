"use strict";
let firstName = 0;
firstName = true;
const names = ["Hend", "Hossam", "Ali"];
names.push("Maher");
console.log(names);
const namess = ["Hend", "Hossam", "Ali"];
const users = ["Hend", 100, "Ali"];
var Rules;
(function (Rules) {
    Rules[Rules["Admin"] = 0] = "Admin";
    Rules[Rules["Auther"] = 1] = "Auther";
    Rules[Rules["User"] = 2] = "User";
})(Rules || (Rules = {}));
;
console.log(Rules.Admin);
var Rules1;
(function (Rules1) {
    Rules1[Rules1["Admin"] = 2] = "Admin";
    Rules1[Rules1["Auther"] = 3] = "Auther";
    Rules1[Rules1["User"] = 4] = "User";
})(Rules1 || (Rules1 = {}));
;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["success"] = 200] = "success";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
console.log(StatusCodes.success);
var Rules11;
(function (Rules11) {
    Rules11["Admin"] = "Admin";
    Rules11["Auther"] = "Auther";
    Rules11["User"] = "Hend";
})(Rules11 || (Rules11 = {}));
;
console.log(Rules11.User);
