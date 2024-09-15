 const accountID = 144553
 let accountEmail = "new09@gmail.com"
 var accountPassord = "12345"
 accountCity = "Jaipur"
let accountState //undefined
// accountId = 2 not allowed
// console.log(accountID) -> 144553

accountEmail = "new08@gmail.com"
accountPassord = "45689"
accountCity = "Kota"

/*
Prefer not to use var because of issue block scope and functional scope
*/

console.table([accountEmail,accountID,accountPassord,accountCity,accountState])