// class Example {
//     // properties
//     property1;
//     property2 = 1234
//     property3 = "hello !"
//     property4 = true
//     // methods

//     doSomething() {
//         console.log("doing something ... !")
//     }

//     againDoSomething() {
//         console.log("again doing something ... !")
//     }
// }

// let object = new Example()

// object.property1 = "new value"

// console.log(object.property1)
// console.log(object.property2)
// console.log(object.property3)
// console.log(object.property4)

// object.doSomething()
// object.againDoSomething()

// let object2 = new Example()

// object2.property1 = "some new value again"

// console.log("object 2: ", object2.property1)

// object2.doSomething()
// object2.againDoSomething()

// class car {
//     name;
//     wheels;
//     doors;
//     seats;
//     color;

//     // getter & setter
//     setInfo(name, wheels, doors, seats, color) {
//         this.name = name
//         this.wheels = wheels
//         this.doors = doors
//         this.seats = seats
//         this.color = color
//     }

//     getInfo() {
//         console.log(`car name is ${this.name}`)
//         console.log(`${this.name} car has ${this.wheels} wheels !`)
//         console.log(`${this.name} car has ${this.seats} seats !`)
//         console.log(`${this.name} car has ${this.doors} doors !`)
//         console.log(`${this.name} car is of ${this.color} color !`)
//     }

//     drive() {
//         console.log(`${this.name} car is driving  !`)
//     }

//     stop() {
//         console.log(`${this.name} car has stoped !`)
//     }

//     reverse() {
//         console.log(`${this.name} car is reversing !`)
//     }
// }

// let swift = new car()

// swift.setInfo("swift vxi", 4, 5, 5, "white")

// swift.getInfo()

// // swift.drive()
// // swift.stop()
// // swift.reverse()


// let nano = new car()

// nano.setInfo("nano", 4, 4, 4, "yellow")

// nano.getInfo()

// nano.drive()

// // let audi = new car()

// // audi.drive()
// // console.log(audi.color)
// // console.log(audi.name)
// // console.log(audi.wheels)

// // this keyword is pointer which point to the data from gobal scope(same scope/class)

class car {
    name;
    wheels;
    doors;
    seats;
    color;

    constructor(name, wheels, doors, seats, color) {
        console.log("a object is created of car class !")
        this.name = name
        this.wheels = wheels
        this.doors = doors
        this.seats = seats
        this.color = color
    }

    getInfo() {
        console.log(`car name is ${this.name}`)
        console.log(`${this.name} car has ${this.wheels} wheels !`)
        console.log(`${this.name} car has ${this.seats} seats !`)
        console.log(`${this.name} car has ${this.doors} doors !`)
        console.log(`${this.name} car is of ${this.color} color !`)
    }

    drive() {
        console.log(`${this.name} car is driving  !`)
    }

    stop() {
        console.log(`${this.name} car has stoped !`)
    }

    reverse() {
        console.log(`${this.name} car is reversing !`)
    }
}

let swift = new car("swift", 4, 5, 5, "white")

swift.getInfo()