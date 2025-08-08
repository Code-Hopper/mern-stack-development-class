// while, do while, for (general purpose looping statements)

// while syntax

// while(condition){
// statements
// updation (must effect the condition)
// }

// while()
// 1-100
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

// let number = 0
// while (number <= 1000) {
//     if (number % 2 == 0) {
//         console.log(number)
//     }
//     number++
// }

// let number = 100
// while (number >= -100) {
//     if (number % 2 == 0) {
//         console.log(number)
//     }
//     number--
// }

// factorials

// if a variable is involve in multiplication/division then initilize with 1
// if add/sub then 0

// 5 :  5 * 4 * 3 * 2 * 1 = 120

// let number = 4
// let fact = 1

// while (number != 0) {
//     fact = fact * number
//     number--
// }

// console.log(fact)

// 5
// 5 * 4
// 20 * 3
// 60 * 2
// 120 * 1
// 120 * 0
// 0

// wap in js sum of digits

// 123 = 1 + 2 + 3 = 6

// let number = 123

// let digit = null

// let sum = 0

// while (number != 0) {
//     digit = number % 10
//     sum = sum + digit
//     number = parseInt(number / 10)
// }

// console.log(sum)

// 0 + 3
// 3 + 2
// 5 + 1
// 6 + 0

// wap in js reverse a number 

// 12.3

// float 

// int
// 12

// 1 * 1 * 1 + 2 * 2 * 2 + 3 + 3 * 3 * 3 = 36

// 153

// 1 + 125 + 27 = 153

// let number = 153

// let orginal_number  = number

// let digit = null

// let sum = 0

// while (number != 0) {
//     digit = number % 10
//     sum = sum + (digit*digit*digit)
//     number = parseInt(number / 10)
// }

// console.log(sum)
// console.log(orginal_number)

// if(orginal_number ===sum){
//     console.log(orginal_number + " is armstrong number !")
// }else{
//     console.log(orginal_number + " is not armstrong number !")
// }

// 0 - 1000

// wap in js to find out and count armstrong numbers from range 0 - 1000

// 121 = 121

// let start = 0

// let end = 1000

// let count = 0

// while (start < end) {
//     let number = start

//     let orginal_number  = number

//     let digit = null

//     let sum = 0

//     while (number != 0) {
//         digit = number % 10
//         sum = sum + (digit*digit*digit)
//         number = parseInt(number / 10)
//     }

//     if(orginal_number === sum){
//         console.log(orginal_number + " is armstrong number !")
//         count++
//     }
//     start++
// }

// console.log("their are total : " + count + " armstrong numbers !")

// 123 = 321

// let start = 0
// let end = 1000
// let count = 0

// while (start <= end) {

//     let number = start

//     let orginal_number = number

//     let digit = null

//     let rev = 0

//     if ((number > 10) && (number != 0)) {
//         while (number != 0) {
//             digit = number % 10
//             rev = rev * 10 + digit
//             number = parseInt(number / 10)
//         }
//         if (orginal_number == rev) {
//             count++
//             console.log(orginal_number + " is a palindrome !")
//         }
//     }
//     start++
// }

// console.log("their are total : "+ count + " palindrome numbers !")

// rev = rev * 10 + d

// 0 * 10 + 3 = 3
// 3 * 10 + 2 = 32
// 32 * 10  + 1 = 321

// prime number

// let number 

// 100

// 97

// do while loop

// do{
//     // statement
//     // updation
// }while(condition);

// let number = 10

// while(number < 10){
//     console.log(number)
//     number++
// }

// do{
//     console.log(number)
//     number++
// }while(number < 10)



// let choice = false

// do {

//     let number = Number(window.prompt("enter number to check !"))
//     let orginal_number = number
//     let rev = 0
//     let digit = null

//     while (number != 0) {
//         digit = number % 10
//         rev = rev * 10 + digit
//         number = parseInt(number / 10)
//     }
//     if (orginal_number == rev) {
//         console.log(orginal_number + " is a palindrome !")
//     } else {
//         console.log(orginal_number + " is not a palindrome !")
//     }

//     choice = window.confirm("do you wish to continue !")

// } while (choice)

// console.log("programm completed !")

// for loop


// for(initlize; condition; updation){
//     // statement
// }

// wap in js to write all even numbers from 0 to 1000

// for (let start = 0; start <= 1000; start++) {
//     if (start % 2 == 0) {
//         console.log(start)
//     }
// }