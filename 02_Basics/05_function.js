//Noramal Function

function hello(){
    let user = 'Jhon'
    console.log(`hello ${user}`)
}
//hello() // hello Jhon

const hello1 = function () {
    let user ='Jhon'
    console.log(`hello ${user}`)
}
// hello1() // hello Jhon
// Arrow Function
const hello2 = () =>{
    let user = 'Jhon'
    console.log(`hello ${user}`)
}
// hello2() hello jhon

// const addTwo = (num1,num2) => {
//     return num1 + num2
// } explicit return 
// console.log(addTwo(2,4)) // 6

// inplicit return 
// const addTwo= (num1,num2) => num1 + num2
// console.log(addTwo(2,4)) // 6

// const addTwo= (num1,num2) => (num1 + num2)
// console.log(addTwo(2,4))  // 6

// Key word in java script 
//console.log(this); // In browser: Window, In Node.js: {}
/*
In the browser, this in the global scope refers to the window object.
In Node.js, it refers to an empty object ({}) because Node wraps code in a module.
*/
function show() {
    console.log(this);
  }
//show(); // In browser: Window (non-strict), undefined (strict mode)
/*
In non-strict mode (like in browsers), this defaults to the window object.
In strict mode, this will be undefined because the function is not being called as a method of an object
*/ 

const person1 = {
    name: "Dhruv",
    greet: function () {
      console.log(this.name);
    },
  };
//person1.greet(); // Dhruv
/*
Here, greet() is a method on an object, and it's called as person1.greet().
So, this refers to the person1 object.
Therefore, this.name becomes "Dhruv".
*/
const person = {
    name: "Dhruv",
    greet: () => {
      console.log(this.name);
    },
  };
//person.greet(); // undefined (arrow function doesn't have its own this)
/* 
Even though greet is inside the person object, it's an arrow function.
Arrow functions do not get their own this. Instead, they capture this from the scope in which they were defined — in this case, probably the global scope.
In the global scope, there is no name property, so this.name is undefined.
*/

const user = {
    name: "Dhruv",
    greet() {
      const arrowFn = () => {
        console.log(this.name); // refers to `this` of greet()
      };
      arrowFn();
    },
  };
//user.greet(); // Dhruv
/* 
greet() is a normal method, so this refers to the user object.
arrowFn is defined inside greet(), so it captures this from greet() — which is the user object.
Therefore, this.name becomes "Dhruv".
*/