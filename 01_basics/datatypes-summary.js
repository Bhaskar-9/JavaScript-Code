// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

const bigNumber = 1242364784836283642347


//Reference(Non-Primitive)

//3 types : Array, Object, Function

const heros = ["IronMan", "SuperMan", "BatMan"]
// let myObj = {
//     name = "Bhaskar"
//     age = 21;
// }

const myFunction = function(){
    // console.log("hello world");
}





//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(In it the Orignal, copy is given .Can access all Primitive) // Heap(In it the Orignal is given and the "orignal value is changeable" .Can access all Non Primitive)

let myName = "Bhaskar"

let anotherName = myName
anotherName = "Monty"

console.log(myName);
console.log(anotherName);

//

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhaskar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

