//Objects
// singleton
// object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name : "a1",
    "full name" : "a1 b1",
    [mySym] : "mykey1", // we need to define symbol in the object in the square brackets only 
    age : 18,
    location : "Jaipur",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Tuesday"]
}
// console.log(JsUser.age) => 18
// we can't do console.log(JsUser."full name") it is wrong
// console.log(JsUser["full name"]) => a1 b1
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// JsUser.location = "Noida" 
// Object.freeze(JsUser)
// JsUser.location = "Delhi"
// console.log(JsUser) => {
// name: 'a1',
// 'full name': 'a1 b1',
// age: 18,
// location: 'Noida',
// isLoggedIn: false,
// lastLoginDays: [ 'Monday', 'Tuesday' ],
// [Symbol(key1)]: 'mykey1'
//}

JsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`)
}
// console.log(JsUser.greeting) => [Function (anonymous)]
// console.log(JsUser.greeting()) 
// => Hello JS user a1
// undefined