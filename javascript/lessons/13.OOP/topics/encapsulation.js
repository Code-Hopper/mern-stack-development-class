class Example{
    #data = 123
    getData(){
        return this.#data
    }
    setData(value){
        this.#data = value
    }
}

let obj = new Example()

console.log(obj.getData())

obj.setData(1000)

console.log(obj.getData())

// console.log(obj.#data) // will throw an syntax error