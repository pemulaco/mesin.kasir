document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById("itemForm");
    const itemList = document.getElementById("itemList");
    const totalPriceElement = document.getElementById("totalPrice");
    let totalPrice = 0;

    itemForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const itemName = document.getElementById("itemName").value;
        const itemPrice = parseFloat(document.getElementById("itemPrice").value);

        addItem(itemName, itemPrice);
        updateTotalPrice(itemPrice);
        itemForm.reset();
    });

    function addItem(name, price){
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = name;
        row.appendChild(nameCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = price.toFixed(2);
        row.appendChild(priceCell);
        itemList.appendChild(row);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "hapus";
        deleteButton.addEventListener("click", function() {
            row.remove();
            updateTotalPrice(-price);
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        itemList.appendChild(row);
    }
    function updateTotalPrice(Price) {
        totalPrice += Price;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});