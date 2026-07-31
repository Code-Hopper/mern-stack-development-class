let deleteButton = document.getElementById('deleteBtn')


deleteButton.addEventListener("click", async () => {

    let deleteId = deleteButton.dataset.elementIndex

    try {
        await fetch(`http://localhost:4001/api/delete/${deleteId}`, { method: "DELETE" })
        alert(`deleted index ${deleteId}'s element !`)
        window.location.reload();
        
    } catch (err) {
        alert(`failed to delete index ${deleteId}'s element !`)
    }
})