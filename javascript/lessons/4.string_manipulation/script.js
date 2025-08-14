let string1 = `hello world !`

console.log(typeof (string1))

console.log(string1.length)

// case 

console.log(string1.toUpperCase())

// console.log(string1)

console.log(string1.toLowerCase())

// indexing
// "hello world !"

// h - 0
// e - 1
// l - 2
// l - 3
// o - 4
//   - 5
// w - 6
// o - 7
// r - 8
// l - 9
// d - 10
//   - 11
// ! - 12

// last index is | data.length - 1

// console.log(string1[0])
// console.log(string1[1])
// console.log(string1[2])
// console.log(string1[3])
// console.log(string1[4])
// console.log(string1[5])
// console.log(string1[6])

// console.log(string1.charAt(0))
// console.log(string1.charAt(1))
// console.log(string1.charAt(2))
// console.log(string1.charAt(3))
// console.log(string1.charAt(4))
// console.log(string1.charAt(5))
// console.log(string1.charAt(6))
// console.log(string1.charAt(7))
// console.log(string1.charAt(12))
// console.log(string1.charAt(15)) // will return null(nothing/empty)

// slice(start index,end index), substring(start index, end index)

console.log(string1.slice(0, 5))
console.log(string1.slice(5, string1.length))

console.log(string1.indexOf("l"))
// returns the first occurence of passed char
console.log(string1.lastIndexOf("l"))
// returns the last occurence of passed char

// let string2 = "this is some data !"

// console.log(string2)

// string2 = string2.replace("is","was")
// will replace first occurence 

// string2 = string2.replaceAll("is","was")
// will replace all occurence 

// console.log(string2)

// "amey"

let name = "   om kumar   "

// trim() // to remove leading and trailing spaces from the string 

name = name.trim()

name = name.replace(name.charAt(0), name.charAt(0).toUpperCase())

name = name.replace(name.charAt(name.indexOf(" ") + 1), name.charAt(name.indexOf(" ") + 1).toUpperCase())

console.log(name)

// reverse of a string // indexing and concatenation

// to count a specific charchter within the string

// wap in js to find out unquie charchter within a string

// let string = "this is javascript"
// // helo wrd

// let unquieString = ""

// for(let index =  0 ; index < string.length ; index++){
//     let ch = string[index] // h

//     let flag = false

//     for(let check = 0 ; check < unquieString.length ; check++){
//         if(ch===unquieString[check]){
//             flag = true
//         }
//     }

//     if(!flag && ch != " ") {
//         unquieString += ch;
//     }
// }

// console.log(unquieString)

// wap in js to print count of each charchter occurence
// t - 2
// h - 1
// i - 3
// s - 3
// j - 1
// a - 2
// v - 1
// c - 1
// r - 1
// p - 1

// template litral string

// let name2 = "amey"
// let age = 24

// console.log("hello ! i'm "+ name2 + " my age is "+ age +" years !")

// console.log(`hello ! i'm ${name2.toUpperCase()} my age is ${age}`)

// regex - regular expresion

// paterns | match /test for a string

// mini 8 charchter
// 1 upper case
// 1 lower case
// 1 digit

// regex litrals

// let paterns = /hello/

// let newString = "hello world !"

// console.log(newString.match(paterns))

// let email = window.prompt("enter your email")

// let patern1 = /@/

// // email.match(patern1) && 


// console.log("helloworld".indexOf(" "))

// if(email.match(patern1) && (email.indexOf(" ") == -1)){
//     console.log("is valid email")
// }else{
//     console.log("is not valid email")
// }

// console.log(patern1.test(email))

// let patern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,10}$/

// console.log('hello hello HELLO 1'.match(/[0-9][A-Z]/gi))

// console.log(patern.test("Helo1234567890"))