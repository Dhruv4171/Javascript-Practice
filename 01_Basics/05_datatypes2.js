//Primitive Datatype
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

// console.log(typeof(score)) => number
// console.log(typeof(scoreValue)) => number
// console.log(typeof(isLoggedIn)) => boolean
// console.log(typeof(outsideTemp)) => object
// console.log(typeof(userEmail)) => undefined

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(typeof(id)) => Symbol
// console.log(id === anotherID) => false

const bigNumber = 345654634557634565n
// console.log(typeof(bigNumber)) => bigint


// Dynamically Typed Language
// Reference (Non primitive)
// Array , Object , Function 

const heros = ['Thor', 'Hulk' , "Wanda"]
let myObj = {
    name : "Ironman",
    age : 42
}

const myFunction = function(){
    console.log("first function")
}

// console.log(typeof heros) => Object
// console.log(typeof myObj) => Object
// console.log(typeof myFunction)=> function Object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) , Heap (Non primitive)

let myName = "Dhruv"
let anotherName = myName
anotherName = "Thor"

// console.log(myName) => Dhruv
// console.log(anotherName) => Thor

let userOne = {
    email:"userOne@gmail.com",
    upi : "userOne@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"
userTwo.upi = "userTwo@ybl"

// console.log(userOne.email) => userTwo@gmail.com
// console.log(userTwo.email) => userTwo@gmail.com