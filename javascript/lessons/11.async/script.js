// setInterval and setTimeout (these are built in async methods)

// setInterval(callback,[interval])
// setTimeout(callback,[interval])

// 1000ms - 1s

console.log(1)
console.log(2)
console.log(3)

let async1 = setInterval(() => {
    console.log("hii !")
}, [1000])


setTimeout(() => {
    console.log("this is setTimeout !")
    clearInterval(async1)
}, [10000])

console.log(4)
console.log(5)
console.log(6)
