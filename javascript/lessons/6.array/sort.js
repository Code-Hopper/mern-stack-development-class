let numbers = [1, 2, 3, 5, 1]
// 1 2 3 4 5

// sorting : bubble sort, selection sort

function bubbleSort(arr) {
    let swap = false
    let steps = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // swaping
                steps++
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        // if not swaped then return the sorted array
        if (!swap) {
            console.log(`it took ${steps}`)
            return arr
        }
    }
    console.log(`it took ${steps}`)
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let names = ["sahil", "amey", "bhavesh"]

console.log(selectionSort(numbers))
console.log(selectionSort(names))
// console.log(bubbleSort(numbers))

// 4 5 1 2 3
// 0 1 2 3 4

// i  = 0

// minIndex = 2

// let temp = arr[i] // 4

// arr[i] = arr[minIndex] // 1

// 1 5 4 2 3

// arr[minIndex] = temp

// minIndex = 2 = 4

// arr[0] = arr[minIndex]

// 1 5 4 2 3