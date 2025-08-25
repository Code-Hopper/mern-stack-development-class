// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // // console.log(numbers[0])
// // // console.log(numbers[1])
// // // console.log(numbers[2])
// // // console.log(numbers[3])
// // // console.log(numbers[4])
// // // console.log(numbers[5])
// // // console.log(numbers[6])
// // // console.log(numbers[numbers.length - 1])

// // // numbers[0] = 1000

// // // console.log(numbers[0])

// // // for(let index = 0 ; index < numbers.length ; index++){
// // //     console.log(`terverse data : ${numbers[index]}`)
// // // }

// // // Array index out of bound

// // // let index = 0

// // // while (index < numbers.length) {
// // //     console.log(`terverse data : ${numbers[index]}`)

// // //     index++
// // // }

// // // for of
// // // for(let element of array){
// // //     console.log(element)
// // // }

// // // let names = ["amey", "sahil", "rohit", "om"]

// // // for (let number of numbers) {
// // //     console.log(number)
// // // }

// // // for(let name of names){
// // //     console.log(name)
// // // }

// // // forEach()

// // // numbers.forEach((x,i)=>{
// // //     console.log(`the element at index ${i} is ${x}`)
// // // })

// // // map

// // function square(number) {
// //     return number * number
// // }

// // // let data = numbers.forEach((number) => {
// // //     console.log(square(number))
// // // })


// // let data = numbers.map(square)

// // console.log(data)

// // console.log([1,2,3,4].length)

// // updating

// // to add a new element within the array
// // Array.push(element) , Array.unshift(element)

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // arr.push(5)
// // arr.push(6)
// // arr.push(7)

// // arr.unshift(8)
// // arr.unshift(9)
// // arr.unshift(10)

// // console.log(arr)

// // // to remove element from array 
// // // Array.pop(), arr.shift()

// // console.log(arr.pop())
// // console.log(arr.pop())
// // console.log(arr.pop())
// // console.log(arr.pop())
// // console.log(arr.shift())
// // console.log(arr.shift())
// // console.log(arr.shift())

// // console.log(arr)

// // index wise
// // Array.splice(start index, delete count,replacement(optional))

// // arr.splice(2,0,10,"hello")

// // console.log(arr)

// // arr.slice(), arr.indexOf(), arr.lastIndexOf()

// // Array.includes(element)

// // console.log(arr.includes(10))

// // let evenData = arr.filter((element, index) => {
// //     return element % 2 == 0
// // })

// // console.log(evenData)

// // console.log(arr)

// let numbers = [3, 1, 2, 5, 4]

// numbers.sort((a, b) => { return b - a })

// console.log(numbers)

// let names = ["b", "d", "a", "c", "A"]

// // names.sort()

// names.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// })

// console.log(names)

// // search[linear, binary], sort[bubble, selection]

let numbers = [1,2,3,4,5,6,7,9,10] 

// numbers.length -> how many elements are present in the array

// for(let index = 0 ; index < numbers.length ; index++){
//     console.log(numbers[index])
// }

// for of

for(let element of numbers){
    console.log(element)
}
// 1....10