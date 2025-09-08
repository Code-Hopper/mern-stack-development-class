// event

// mouse event, keyboard event, form event, window event

// targetedElement.onevent = (event) =>{}/function(event)
// targetedElement.addEventListner("event",(event)=>{})

// document.querySelector("#btn1").onclick = ()=>{
//     alert("button is clicked !")
// }

// document.querySelector("#btn1").ondblclick = () => {
//     alert("button is dbl clicked !")
// }

// document.querySelector("#btn1").onmouseenter = () => {
//     alert("mouse entered in button !")
// }

// document.querySelector("#btn1").onmouseleave = () => {
//     alert("button is dbl clicked !")
// }

// document.getElementById("btn1").onclick = (event) => {
//     console.log("button is clicked !")
//     // console.log(event.screenX)
//     // console.log(event.screenY)
//     console.log(event.target)
// }

// let doSomthing = (event) => {
//     console.log("button is clicked !")
//     // console.log(event.screenX)
//     // console.log(event.screenY)
//     console.log(event.target)
// }

// document.getElementById("btn1").addEventListener("click",doSomthing)

// let element = document.getElementById('element1')

// let ball = document.getElementById("ball")

// element.addEventListener("click", (event) => {
//     console.log(event)
//     console.log(event.y)
//     ball.style.left = `${event.x}px`
//     ball.style.top = `${event.y}px`
//     // ball.style.left = "200px"
//     // ball.style.top = "200px"
// })

// keyboard

// let whatUserSay = ""

// document.addEventListener("keypress", (event) => {
//     // console.log('a key has been pressed !')
//     whatUserSay += event.key
//     console.log(whatUserSay)
// })


// document.addEventListener("keydown", (event) => {
//     console.log('a key has been pressed !')
//     console.log(event.key)
// })

// form event
// change, submit

// let form = document.getElementById('form1')

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     console.log("form has been submitted !")
//     console.log(event)
//     console.log(event.target.if1)
//     console.log(event.target.if1.value)
// })

// let inputField1 = document.getElementById("if1")

// inputField1.addEventListener("change",(event)=>{
//     console.log('some changes has been made in input field')
//     console.log(event.target.value)
// })

// let inputField4 = document.getElementById("if4")

// inputField4.addEventListener("change",(event)=>{
//     console.log('some changes has been made in input field')
//     console.log(event.target.value)
// })

let colorInput1 = document.getElementById('colorInput1')
let colorInput2 = document.getElementById('colorInput2')
let colorInput3 = document.getElementById('colorInput3')

let rgbColor = ""

let red = 0
let green = 0
let blue = 0

colorInput1.addEventListener('change', (event) => {
    red = event.target.value
    rgbColor = `rgb(${red},${green},${blue})`
    displayColor()
})
colorInput2.addEventListener('change', (event) => {
    green = event.target.value
    rgbColor = `rgb(${red},${green},${blue})`
    displayColor()
})
colorInput3.addEventListener('change', (event) => {
    blue = event.target.value
    rgbColor = `rgb(${red},${green},${blue})`
    displayColor()
})

function displayColor() {
    console.log(rgbColor)
    document.getElementById("element1").style.background = `${rgbColor}`
    document.getElementById("color").innerText = rgbColor
}

window.addEventListener("resize",()=>{
    console.log('window has been resized !')
})

window.onresize = ()=>{
    console.log('window has been resized !')
}

window.addEventListener("unload",()=>{
    console.log('window content un-loaded !')
})