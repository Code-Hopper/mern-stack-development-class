// let data = 123

// // console.log(data123)

// try {
//     console.log(data123)
// } catch (e) {
//     // console.log("an error occured " + e)
//     // console.info("an error occured " + e)
//     console.error("an error occured " + e)
//     // console.warn("an error occured " + e)
// }

// let name = "amey123"

// try {
//     if (name != "amey") {
//         throw ("name does not match !")
//     }
//     console.log(1)
//     console.log(2)
//     console.log(3)

// } catch (err) {
//     console.error("an exception occured " + err)
// }

let division = (n1, n2) => n1 / n2

// let division = (n1, n2) => {
//     return n1 / n2
// }

try {
    let result = division(1, 0)

    if (result == Infinity) {
        throw ("division by 0 was the problem !")
    }

    console.log(result)

} catch (e) {
    console.error("An exception occured : " + e)
} finally {
    console.log("program completed !")
}