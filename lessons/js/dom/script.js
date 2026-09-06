// let target = document.getElementsByTagName("h2")
// let target = document.getElementsByClassName("fourth")
// let target = document.getElementById("i3")

// let target = document.querySelector("li:nth-child(2)")
// let targets = document.querySelectorAll("li:nth-child(2)")

// console.log(target)
// console.log(targets)

// empty array is not false 
// null is false

// let students = [1,2]

// if (students.length != 0) {
//     console.log('students exits !')
// } else {
//     console.log("they don't")
// }

// let target = document.getElementById("btn1")

// console.log(target)

// // properties

// console.log(target.innerHTML)
// console.log(target.innerText)
// console.log(target.style)
// let count = 0

// target.addEventListener("click", (event) => {
//     count++
//     console.log("got clicked ! " + count)
// })

// target.onclick = (event) => {
//     console.log("got clicked !")
// }

// document.getElementById("btn1").onclick = function (event) {
//     target.innerHTML = "<b>hello <u>world</u></b>"
//     target.style.background = "red"
//     target.style.color = "white"
//     target.style.border = "none"
//     target.style.outline = "none"

//     // console.log(event)    
// }

// toggle image

let image = document.getElementById('img1')
let btn = document.getElementById('btn1')

let show = true

btn.onclick = () => {
    show = !show
    if (show) {
        image.style.display = "block"
    } else {
        image.style.display = "none"
    }
}

// create and append child 