const tinderUser = new Object()
// console.log(tinderUser) => {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser) => { id: '123abc', name: 'Sammy', isLoggedIn: false }
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Jhon",
            lastname : "Deo"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname) => Jhon
// console.log(regularUser.fullname.userfullname.lastname) => Deo
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}