//Array

const myArr = [0 ,1 ,2 ,3 ,4]
// console.log(myArr[0])
// In javascript array-copy operations shares shallow copies.(Shallow copies are something in which properties share same reference point) 

const myHeroes = ["Iron-Man","Thor","Hulk"]
// console.log(myHeroes)

const myNewArr = new Array(1, 2, 3, 4, 5)
// console.log(myNewArr[0])

myArr.push(6)
// console.log(myArr) => [ 0, 1, 2, 3, 4, 6 ]
myArr.push(7)
// console.log(myArr) => [ 0, 1, 2, 3, 4, 6, 7]
myArr.pop()
// console.log(myArr) => [ 0, 1, 2, 3, 4, 6 ]
myArr.unshift(3)
// console.log(myArr) => [ 3, 0, 1, 2, 3, 4, 6 ]
myArr.shift()
// console.log(myArr) => [ 0, 1, 2, 3, 4, 6 ]
myArr.shift()
// console.log(myArr); => [ 1, 2, 3, 4, 6 ]

// console.log(myArr.includes(9)) => false
// console.log(myArr.indexOf(9)) => -1
// console.log(myArr.indexOf(3)) => 2

const myNewArr2 = myArr.join() // join combines array and convert it to string  
// console.log(myArr) => [ 1, 2, 3, 4, 6 ]
// console.log(myNewArr2) => 1,2,3,4,6
// console.log(typeof(myNewArr2)) => string


//slice , splice

// console.log("A ",myArr) => [ 1, 2, 3, 4, 6 ]

const myn1 = myArr.slice(1,3) 
// console.log(myn1) => [ 2, 3 ]
// console.log("B ",myArr) => B  [ 1, 2, 3, 4, 6 ]

const myn2 = myArr.splice(1,3)
// console.log(myn2) => [ 2, 3, 4 ]
// console.log("C ",myArr) => C  [ 1, 6 ]
// The main difference between slice and splice is that: 
// 1. Splice includes the last value whereas the slice does not include the last value 
// 2. Splice manipulates the existing array whereas slice doesnot manipulates the existing array 