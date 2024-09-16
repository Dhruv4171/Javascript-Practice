const name = "Thor"
const repoCount = 50

// console.log(name + repoCount + " Value") Not a great practice

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) String Interpolation

const gameName =  new String ("God-Of-War")

// console.log(gameName[0]) => G
// console.log(gameName.__proto__) => {}

// console.log(gameName.length) => 8
// console.log(gameName.toUpperCase()) => GODOFWAR

// console.log(gameName.charAt(2) => d
// console.log(gameName.indexOf('d')) => 2

const newString = gameName.substring(0 , 4)
// console.log(newString) => GodO

const anotherString = gameName.slice(-5,7)
// console.log(anotherString) => OfWa

const newStringOne = "   Thor   "
// console.log(newStringOne) =>    Thor   
// console.log(newStringOne.trim()) => Thor

const url = "https://thor.com/Thor%20Odinson"

// console.log(url.replace('%20',"-")) => https://thor.com/Thor-Odinson
// console.log(url.includes("Odinson")) => true

// console.log(gameName.split('-')) => [ 'God', 'Of', 'War' ]