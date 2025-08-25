// let numbers = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// 1 2 3
// 4 5 6
// 7 8 9

// console.log(numbers[0])
// // [1,2,3]

// console.log(numbers[1][2])
// // 1 2 3 //6

// for (let row = 0; row < numbers.length; row++) {
//     for (let column = 0; column < numbers[row].length;column++){
//         console.log(numbers[row][column])
//     }
// }

//1 2 3.....9

// for(let array of numbers){
//     for(let element of array){
//         console.log(element)
//     }
// }

//1 2 3.....9

// use case

let fsd_530 = ["student1", "student2", "student3", "student4"]
let fsd_730 = ["student5", "student6", "student7", "student8"]
let fsd_1030 = ["student9", "student10", "student11"]

let java_530 = ["student12", "student13", "student14", "student15"]
let java_730 = ["student16", "student17", "student18", "student19"]
let java_1030 = ["student20", "student21", "student22"]


let itech_sharda_sq = [fsd_530, fsd_730, fsd_1030]

let itech_triranga_sq = [java_1030,java_530,java_730]

let itech_nagpur = [
    itech_sharda_sq,
    itech_triranga_sq
]

console.log(itech_nagpur[0][0][0])

console.log(itech_nagpur[1][2][1])

// student17