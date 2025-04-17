const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//Push
// marvel_heros.push(dc_heros)

// console.log(marvel_heros) => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) => flash

// concat
const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes) => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Spread Operator

const new_all_heroes = [...marvel_heros,...dc_heros]
// console.log(new_all_heroes) => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//flat
const another_array = [1,2,3,[4, 5, 6], 7, [6, 7,[4 ,5]]]

const real_another_array = another_array.flat(3) // here we specify depth upto which we want to flat the array and it Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array) => [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Hitesh")) => false
// console.log(Array.from("Hitesh")) => [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name: "hitesh"})) // intresting case => [] we need to specify wheather we need to create array from key or values

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3)) => [ 100, 200, 300 ]