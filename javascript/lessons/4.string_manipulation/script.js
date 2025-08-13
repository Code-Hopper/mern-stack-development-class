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

name = name.replace(name.charAt(0),name.charAt(0).toUpperCase())

name = name.replace(name.charAt(name.indexOf(" ") + 1),name.charAt(name.indexOf(" ") + 1).toUpperCase())

console.log(name)

// reverse of a string // indexing and concatenation

// to count a specific charchter within the string

// wap in js to find out unquie charchter within a string