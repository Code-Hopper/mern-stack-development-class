// math

// constants
// Math.PI //3.1423
// Math.LOG10E
// Math.SQRT2 // 1.44

// // functions

// console.log(Math.abs(-10)) // 10
// // return mod value

// console.log(Math.sqrt(225)) // 15
// console.log(Math.cbrt(27)) // 3
// console.log(Math.pow(5, 8))

// console.log(Math.round(1.5)) // 2 // 1 //2 //1
// // if value after decimal is greater than equals to .5 round off to 1 and if less then 0

// console.log(Math.floor(1.999999999999)) // 1
// // always 0
// console.log(Math.ceil(1.0000000000001)) // 2 
// // always 1

// let numbers = [10, 1, 2, 124, 12, 2345, 1345, -1]

// console.log(Math.max(...numbers))

// console.log(Math.min(10, 20, 11))

// console.log(Math.floor((Math.random() * 6)+1))

// Date

// setter & getter

// we will have to create an object of date class to use date functions
// let date = new Date()

// date.setDate(1)
// date.setHours(0)
// date.setMinutes(5)
// date.setSeconds(14)
// date.setMilliseconds(1)

// console.log(date.getTime()) // 1 jan 1970 00:00:00 to till date //  
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getTimezoneOffset())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// try catch block -> expectional/error handling

// line 1
// line 2
// line 3
// try{
//     line 4 - x[user input] 
// }catch(err){
//     // resolution
// }
// line 5
// line 6

// let number1 = 10
// let number2 = 0

// try {
//     let division = number1 / number2;
//     if (division == Infinity) {
//         throw new Error("Division by 0 is not allowed !")
//     }
//     console.log(division)
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("code completed !")
// }

// try {
//     console.log(a)
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("program completed !")
// }

// sync code{block code}
// async code 

// sync

// lin1 -> 2s
// lin2 -> 3s
// lin3 -> 4s
// lin4 -> 1s

// 10s

// // async 

// line1 -> 2s | line2 -> 3 | line3 -> 4s | line4 -> 1s

// 4s