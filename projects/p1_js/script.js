let grid_item_collection = document.querySelectorAll(".grid-item")

let currentPlayer = "X"

let winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8]
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

grid_item_collection.forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log(event.target.dataset.item)
        event.target.innerHTML = currentPlayer
        move(event.target.dataset.item,currentPlayer)
        ChangeCurrentPlayer()
    })
})

function ChangeCurrentPlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else if (currentPlayer == "O") {
        currentPlayer = "X"
    }
}

function move(index,player) {

    console.log(`at index ${index} player moved ${player}`)
}

function checkWinner(){
    winningPatterns.forEach((pattern)=>{
        
    })
}