// View - Render the UI
function renderShoppingList() {
    var list = document.getElementById("list");
    list.innerHTML = "";
    var items = getShoppingList();
    items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Initialize view
window.onload = function() {
    renderShoppingList();
};
