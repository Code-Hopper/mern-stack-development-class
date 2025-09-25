let data = 5000

function doSomething() {
    console.log("doing something !")
}

let data2 = 1000

function doSomething2() {
    console.log("again doing something !")
}

function doSomething3() {
    console.log("again doing something 3 !")
}

export const someMethod = () => {
    console.log("this is some method !")
}

// default / named

// i can only have one default export statement within a page

// syntax for a default export

// export default DataToBeExported

export default doSomething

// syntax for named export

// export {data1,data2}

export { data2, doSomething2, doSomething3 }