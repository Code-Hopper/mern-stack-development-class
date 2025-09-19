let grid_item_collection = document.querySelectorAll(".grid-item")

let currentPlayer = "X"

let board = ["", "", "", "", "", "", "", "", ""]

let result_title = document.querySelector(".result .title")

let playerX = document.querySelector(".player.player-x")
let playerO = document.querySelector(".player.player-o")

playerX.classList.add("active")

console.log(board)

let winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

grid_item_collection.forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log(event.target.dataset.item)
        event.target.innerHTML = currentPlayer
        move(event.target.dataset.item, currentPlayer)
    })
})

function ChangeCurrentPlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
        playerO.classList.add("active")
        playerX.classList.remove("active")
    } else if (currentPlayer == "O") {
        currentPlayer = "X"
        playerX.classList.add("active")
        playerO.classList.remove("active")
    }
}

function move(index, player) {
    if (board[index].length == 0) {
        board[index] = player
        ChangeCurrentPlayer()
    } else {
        alert("please select empty cell !")
        ChangeCurrentPlayer()
    }

    let result = checkWinner()

    if (result) {
        result_title.innerHTML = result
    }
}

function checkWinner() {

    let result = false

    winningPatterns.forEach((pattern) => {
        let [a, b, c] = pattern

        if (board[a] && board[a] == board[b] && board[a] == board[c]) {
            console.log(board[a] + " is the winner !")
            result = board[a] + " is the winner !"
        }

    })

    return result
}

// "X" && "X" == board[b] && "X" == board[c]
// t && t && t = t

function checkDraw() {
    let result = board.every((item) => item)
    if (result) result = "game drawn !"
    return result
}

//phase-1: html css bootstrap javascript(client side) [localstorage(get,set,remove), sessionstorage]
//phase-2: server(API, File, Mail)[routes, router, auth, encryption, api calls] side javascript, mongodb(database[CRUD])
//phase-3: react.js(UI), deployment