const score = 400
// console.log(score) => 400
const balance = new Number(100)
// console.log(balance) => [Number: 100]

// console.log(balance.toString().length) => 3
// console.log(balance.toFixed(1)) => 100.0

const anotherNumber = 123.8988

// console.log(anotherNumber.toPrecision(4)) => 123.9
// console.log(anotherNumber.toPrecision(2)) => 1.2e+2

// Number.EPSILON
// 2.220446049250313e-16
// Number.MAX_VALUE
// 1.7976931348623157e+308
// Number.MIN_VALUE
// 5e-324
// Number.MAX_SAFE_INTEGER
// 9007199254740991
// Number.MIN_SAFE_INTEGER
// -9007199254740991

//******************************************  MATH**************************************************/

// console.log(Math) => Object [Math] {}
// console.log(Math.abs(-4)) => 4
// console.log(Math.ceil(4.2)) => 5
// console.log(Math.floor(4.9)) => 4

// console.log(Math.random()) => 0.20034679646606612
// console.log((Math.random()*10) + 1) => 9.346943323983973 this step is done to avoid the condition of get value like "0.%%%..."
// console.log((Math.floor(Math.random()*10) + 1)) => 2 this step is done for getting a single value as output

//Implementation
//Example Dice Game
const min = 1
const max = 6
// console.log((Math.floor(Math.random() * (max - min + 1)) + min)) => 6
