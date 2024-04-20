// Controller - Handle user input and update the model and view
function addItem() {
    var input = document.getElementById("item");
    var item = input.value;
    if (item.trim() !== "") {
        addItemToList(item);
        renderShoppingList();
        input.value = "";
    } else {
        alert("Please enter an item.");
    }
}
