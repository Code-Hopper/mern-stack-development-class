// let toggleButton = document.querySelector('#btn1')

// let target = document.querySelector('#element1')

// toggleButton.addEventListener("click", (event) => {
//     target.classList.toggle("show")
// })

let updateContainer = document.querySelector('#updateContainer')

document.querySelector('#updateClose').addEventListener("click", () => {
    updateContainer.classList.toggle("active")
})

let entries = []

let form = document.getElementById('form1')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.target["name"].value)
    console.log(event.target["phone"].value)
    console.log(event.target["email"].value)
    entries.push({
        name: event.target["name"].value,
        phone: event.target["phone"].value,
        email: event.target["email"].value,
        timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
    })
    displayData()
})

let table = document.getElementById('table1')

// // create , append and remove a child(node)

// let heading = document.createElement("h1")

// heading.innerText = "this heading is created using javascript !"

// heading.style.color = "red"

// document.querySelector("body").appendChild(heading)

// document.querySelector("body").removeChild(form)

function displayData() {
    table.innerHTML = ""
    entries.forEach((entry, index) => {
        let newRow = document.createElement("tr")
        newRow.innerHTML = `
        <td>${entry.name}</td>
        <td>${entry.phone}</td>
        <td>${entry.email}</td> 
        <td>${entry.timeStamp}</td>
        <td><button onClick="deleteEntry(${index})">Delete</button>
        <button onClick="updateEntry(${index})">update</button></td>`

        table.appendChild(newRow)
    })
}

function deleteEntry(deleteIndex) {
    entries = entries.filter((entry, index) => { return index != deleteIndex })
    displayData()
}


function updateEntry(index) {
    // updateContainer.classList.add("active")
    updateContainer.setAttribute('class','active')
    console.log(entries[index])
}

// T: 00:00:00 D: 01/01/0001

// let column1 = document.createElement("td")
// let column2 = document.createElement("td")
// let column3 = document.createElement("td")
// column1.innerText = "name"
// column2.innerText = "phone"
// column3.innerText = "email"
// newRow.appendChild(column1)
// newRow.appendChild(column2)
// newRow.appendChild(column3)

// target an element
// how to change an element's attributes
// change style of element
// create, append and remove 
// dom events