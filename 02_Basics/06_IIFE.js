// Immediately Invovked Function Expression (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a function that:
// Is defined and
// Immediately called/invoked after its definition
/*
Why Use an IIFE?
To create a private scope and avoid polluting the global scope.
Useful in modular code, especially before ES6 modules existed.
Helps with data privacy — variables declared inside an IIFE cannot be accessed from outside.
*/
(function () {
    console.log("This is an IIFE!")
})();

(() => {
    console.log("Arrow IIFE")
})()
  