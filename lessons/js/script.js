// // // console.log("hello javascript world !"); 
// // // document.write("something !");
// // // // window.alert("hello !")

// // // let n1 = 100
// // // let n2 = 25

// // // let sum = (2*(n1 + n2))/3
// // // let sub = n1 - n2
// // // let div = n1 / n2
// // // let mul = n1 * n2
// // // let mod = n1 % n2

// // // console.log(sum)
// // // console.log(sub)
// // // console.log(div)
// // // console.log(mul)
// // // console.log(mod)

// // // let data = 100;

// // // let result = typeof(data)

// // // console.log(typeof(data))

// // // windows.prompt()

// // // let data = window.prompt("enter your name !") // will always returns a string

// // // console.log(data)
// // // console.log(typeof(data))

// // // "2"+ "2" = "22" -> concatenation

// // // type casting

// // // number -> string
// // // number -> boolean

// // // string -> number
// // // string -> boolean 

// // // boolean -> number
// // // boolean -> string

// // let fname = "amey"

// // let mname = " anil"

// // let lname = " khondekar"

// // console.log(fname + mname + lname)

// // // stirng + string -> string
// // // string + number -> string
// // // number + string -> string
// // // number + number -> number 

// // // "2" + "2" = "22"
// // // "2" + 2 = "22"
// // // 2 + "2" = "22"
// // // 2 + 2 = 4

// // let data = 100

// // // variale++(post)
// // // ++variale(pre)

// // let result = 100 + --data

// // console.log(result)

// // console.log(data--) // 201
// // console.log(data) // 202

// // data = "something"

// // // type casting

// // // number -> string
// // // number -> boolean

// // // string -> number
// // // string -> boolean 

// // // boolean -> number
// // // boolean -> string

// // let data = 1234

// // console.log(typeof (data))
// // console.log(data)

// // // number -> string

// // // data = String(data)
// // // data = data.toString()

// // console.log(typeof (data))
// // console.log(data)

// // let data = 1234

// // console.log(typeof (data))
// // console.log(data)

// // // number -> boolean(true/false)

// // data = Boolean(data)
// // // all value expect 0 is true for boolean

// // console.log(typeof (data))
// // console.log(data)

// // let data = "123.4567"

// // console.log(typeof (data))
// // console.log(data)

// // // string -> number

// // data = Number(data)

// // // data = parseInt(data)

// // // if a string has a charch it will be converted into NaN for Number data type 

// // console.log(typeof (data))
// // console.log(data)

// // let data = ""

// // console.log(typeof (data))
// // console.log(data)

// // // string -> boolean

// // data = Boolean(data)
// // // empty string is false else true

// // console.log(typeof (data))
// // console.log(data)

// // let data = true

// // console.log(typeof (data))
// // console.log(data)

// // // boolean -> number

// // data = Number(data)

// // // if true then 1
// // // if false then 0 

// // console.log(typeof (data))
// // console.log(data)

// let data = true

// console.log(typeof (data))
// console.log(data)

// // boolean -> string

// data = String(data)

// // if true then true
// // if false then false

// console.log(typeof (data))
// console.log(data)

// condition statement

// if, if-else,nasted if, if-else if, switch case, ternary statement
// for, while, do_while

// if(condition){
//     statement
// }else if(condition){
//     statement
// }

// if(condition){
//     // 
// }

// let age = 12;

// if(age > 18){
//     console.log("you can drive !")
// }

// // next line
// console.log("program completed !")

// if-else

// let age = 18

// if (age >= 18) {
//     console.log("you can drive !")
// } else {
//     console.log("you cannot drive !")
// }

// let age = 19
// let license = true
// let ownVehical = true

// // check age => if true > check license
// // check age => if false > cannot drive

// if (age > 18) {
//     if (license) {
//         if (ownVehical) {
//             console.log("you can drive")
//         } else {
//             console.log('you cannot drive ! -1')
//         }
//     } else {
//         console.log('you cannot drive ! -2')
//     }
// } else {
//     console.log("you cannot drive ! -3")
// }

// console.log("program completed !")

// let age = 19
// let license = false
// let ownVehical = true
// let asset = true
// let pehechan = true
// let porchse = true

// if (age > 18) {
//     if (license) {
//         if (ownVehical) {
//             console.log('you can drive !')
//         } else {
//             console.log('you cannot drive !')
//         }
//     } else if (asset) {
//         if (ownVehical) {
//             console.log('you can drive !')
//         } else {
//             console.log('you cannot drive !')
//         }
//     }
// } else if (pehechan) {
//     console.log("you can drive !")
// } else if (porchse) {
//     console.log("you can drive !")
// } else {
//     console.log("you cannot drive !")
// }

// let a = 55
// let b = 55
// let c = 55
// let d = 55

// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             console.log("a is greater of 4 numbers !")
//         } else {
//             console.log("d is greater of 4 numbers ! -1")
//         }
//     } else if (c > d) {
//         console.log("c is greater of 4 numbers ! -1")
//     } else {
//         console.log("d is greater of 4 numbers ! -2")
//     }
// } else if (b > c) {
//     if (b > d) {
//         console.log("b is greater of 4 numbers !")
//     } else {
//         console.log("d is greater of 4 numbers ! -3")
//     }
// } else if (c > d) {
//     console.log("c is greater of 4 numbers ! -2")
// } else if (d > c) {
//     console.log("d is greater of 4 numbers ! -4")
// }else{
//     console.log("all numbers are equal !")
// }