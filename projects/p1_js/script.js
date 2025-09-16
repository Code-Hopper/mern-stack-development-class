let grid_item_collection = document.querySelectorAll(".grid-item")

grid_item_collection.forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log(event.target)
    })
})