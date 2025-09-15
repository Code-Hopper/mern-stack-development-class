// document object model

// document -> html document (html elements[nodes]|object)

// tree ds

// data.properties 
// data.methods()

// target to a hmtl element

// class, id , tagname

// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()

// console.log(document)

// document.getElementsByTagName()
// document.getElementsByClassName()
// will always returns 
// collections[Array, HTML collections, Node collections] or []

// document.getElementById()
// will always return a single element / null

// let element = document.getElementById("element1123")

// console.log(element)

// let element2 = document.getElementById("container1")

// console.log(element2)

// let elements = document.getElementsByTagName("h3")

// console.log(elements)

// let elements = document.getElementsByClassName("first")

// console.log(elements)

// conditional selector
// we can input css selectors/combinators directly with js

// document.querySelector()
// // will always return a single element / null

// document.querySelectorAll()
// // will always return a collection of element/s / []

// let element = document.querySelectorAll("h5")
// console.log(element)

let element = document.querySelector("#container1 > h1")
// let element = document.querySelectorAll("#container1 > h1")
console.log(element)

document.createTextNode()