//Ternary
function homePage() {
    console.log("welcome to home page")
}
function loginForm() {
    console.log("Please,LOgin")
}
// let loggedIn = true;
// oldest method
// if (loggedIn)
//     homePage()
// else
//     loginForm();
//newest mmethod
let loggedIn = false;

loggedIn ? homePage( ):loginForm();