// // let target = document.getElementsByTagName("h2")
// // let target = document.getElementsByClassName("fourth")
// // let target = document.getElementById("i3")

// // let target = document.querySelector("li:nth-child(2)")
// // let targets = document.querySelectorAll("li:nth-child(2)")

// // console.log(target)
// // console.log(targets)

// // empty array is not false 
// // null is false

// // let students = [1,2]

// // if (students.length != 0) {
// //     console.log('students exits !')
// // } else {
// //     console.log("they don't")
// // }

// // let target = document.getElementById("btn1")

// // console.log(target)

// // // properties

// // console.log(target.innerHTML)
// // console.log(target.innerText)
// // console.log(target.style)
// // let count = 0

// // target.addEventListener("click", (event) => {
// //     count++
// //     console.log("got clicked ! " + count)
// // })

// // target.onclick = (event) => {
// //     console.log("got clicked !")
// // }

// // document.getElementById("btn1").onclick = function (event) {
// //     target.innerHTML = "<b>hello <u>world</u></b>"
// //     target.style.background = "red"
// //     target.style.color = "white"
// //     target.style.border = "none"
// //     target.style.outline = "none"

// //     // console.log(event)    
// // }

// // toggle image

// let image = document.getElementById('img1')
// let btn = document.getElementById('btn1')

// let show = true

// btn.onclick = () => {
//     show = !show
//     if (show) {
//         image.style.display = "block"
//     } else {
//         image.style.display = "none"
//     }
// }

// // Event Listener

let target = document.querySelector('#target1')

// // target.innerHTML
// // target.innerText

// target.style.background = "red"
// target.style.color = "blue"
// target.style.width = "500px"
// target.style.height = "500px"

// // attr

// target.classList = "second"
// target.classList.add("first") //add classess
// target.classList.contains("first") // check class 
// target.classList.toggle("first")

// "first" -> "second" 

console.log(target.classList)

// target.classList= "first"
// console.log(target.classList)

// target.classList= "second"
// console.log(target.classList)

// target.classList= "third"
// console.log(target.classList)

target.classList.add("first")
console.log(target.classList)


target.classList.add("second")
console.log(target.classList)

target.classList.add("third")
console.log(target.classList)

console.log(target.classList.contains("second"))

// event


// onevent = (e)=>{} . addEventListner("event",(e)=>{})

let entries = []

// document.getElementById("btn1").onclick = (e) => {
//     console.log(document.getElementById("input1").value)
//     console.log(document.getElementById("input2").value)
//     console.log(document.getElementById("input3").value)
// }

let table = document.getElementById('table1')

document.getElementById("btn1").onclick = (e) => {
    let entry = {
        name: document.getElementById("input1").value,
        phone: document.getElementById("input2").value,
        address: document.getElementById("input3").value
    }
    entries.push(entry)
    dispalyTable(entries)
}

function dispalyTable(entries) {
    for (let entry of entries) {
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<td>${entry.name}</td><td>${entry.phone}</td><td>${entry.address}</td>`
        table.appendChild(newRow)
    }
}