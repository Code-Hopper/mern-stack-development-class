function linearSearch(arr, searchValue) {

    let steps = 0

    for (let index = 0; index < arr.length; index++) {
        steps++
        if (arr[index] === searchValue) {
            return `the element ${searchValue} found at position ${index + 1} in ${steps} steps !`
        }
    }
    return `the element ${searchValue} not found at any position in ${steps} steps !`
}

function binarySearch(arr, searchValue) {
    let ub = arr.length - 1
    let lb = 0
    let steps = 0
    while (lb <= ub) {
        steps++
        let midPoint = parseInt((ub + lb) / 2)
        if (arr[midPoint] === searchValue) {
            return `element ${searchValue} found at position ${midPoint + 1} in ${steps} steps`
        }
        if (arr[midPoint] < searchValue) {
            lb = midPoint + 1
        } else {
            ub = midPoint - 1
        }
    }
    return `the element ${searchValue} not found at any position in ${steps} steps !`
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let names = ["amey", "bhavesh", "sahil"]

console.log(linearSearch(numbers, 1))
console.log(linearSearch(names, "amey"))

console.log(binarySearch(numbers, 1))
console.log(binarySearch(names, "amey"))

// best case of linear search O(1)
// worst case of linear search O(n)

// best case of linear search O(1)
// worst case of linear search O(n^2)