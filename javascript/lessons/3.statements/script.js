// conditional statement

// comparision statement

// if, if-else, if-else_if, nasted if, swtich case, (?)ternary statement 

// if (condition) {
//     // true block 
// }

// let age = 10

// if(age > 18){
//     console.log("can drive")
// }

// console.log("programm completed")

// if-else,

// if(condition){
//     //true block
// }else{
//     // false block
// }

// if(age > 18){
//     console.log('can drive')
// }else{
//     console.log("can't drive")
// }

// let num1 = 100
// let num2 = 20
// let num3 = 30

// if(num1 > num2){
//     console.log("num1 is greater than num2")
// }else{
//     console.log("num2 is greater than num1")
// }

// syntax for nasted if

// if(condition){
//     if(condition){
//         if(condition){
//             if(condition){

//             }
//         }
//     }
// }

// wap in js to find out if c is greater than a and b

// a b c

// c > a : true 
//     c > b : true 
//         c

let a = 25
let b = 20
let c = 30

// if (c > a) {
//     if (c > b) {
//         console.log("c is greater than a & b !")
//     } else {
//         console.log("c is not greater than a & b !")
//     }
// } else {
//     console.log("c is not greater than a & b !")
// }

// wap in js to find out greater of a , b & c.

// syntax for if-else_if

// if(condition){
//     // true block
// }else if(condition){

// }else if(){

// }else if(){

// }else{

// }

// if (a > b) {
//     if (a > c) {
//         console.log("a is greater than b & c !")
//     } else {
//         console.log("c is greater than a & b !")
//     }
// } else if (b > c) {
//     console.log("b is greater than a & c !")
// } else {
//     console.log("c is greater than a & b !")
// }

// console.log("programm completed")

// looping condtional

// while, do while, for , [for array & objects : forEach, for of , for in, map, filter]

// age, license, learning_license

let age = 17

let license = false

let learning_license = false

if (age >= 18) {
    if (license) {
        console.log("you can drive !")
    }else{
        console.log("you can't drive !")
    }
} else if(learning_license) {
    console.log("you can drive !")
}else{
    console.log("you can't drive !")
}