let name = "amey khondekar"
let age = 23
let address = "nagpur"

function greet(username) {
    console.log("hello, " + username + " !")
}

// console.log(name)

// export 

// default
// named 

export default greet
// default export will be one per page

// named export 

export { name, age, address, greet }