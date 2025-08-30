// function getData() {
//     let data = { status: true, value: 10 }
//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (data.status) {
//                 resolve("data is true")
//             } else {
//                 reject("data is not true")
//             }
//         }, [2000])
//     })
//     return myPromise
// }

// // console.log(getData())

// // to handle/catch a promise we have 2 methods/ways

// console.log(1)
// console.log(2)
// console.log(3)

// // console.log(getData())

// getData().then((resolve) => {
//     console.log("promise was resolved !")
//     console.log(resolve)
// }).catch((reject) => {
//     console.log("promise was rejected !")
//     console.log(reject)
// }).finally(() => { console.log("programm completed !") })

// console.log(4)
// console.log(5)
// console.log(6)

// // fetch , upload , download, connection
// // promise

// async & await insted of js then().catch()

function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                resolve({ message: "we found person with id 1", data: { name: "xyz", phone: 123 }})
            } else {
                reject({ message: "we not found person with id 1"})
            }
        }, 2000)
    })
}
// async function callPromise() {
//     try {
//         let result = await getData()
//         console.log("promise resolved successfully !")
//         console.log(result)
//     } catch (err) {
//         console.log("an error/exception occured in promise ", err)
//     }
// }

let callPromise = async () => {
    try {
        let result = await getData(1)
        console.log("promise resolved successfully !")
        console.log(result.data)
    } catch (err) {
        console.log("an error/exception occured in promise ", err)
    }
}

callPromise()