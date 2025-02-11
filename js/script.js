document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedItems = document.getElementById('selected-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const itemName = this.dataset.name;
            const itemPrice = parseFloat(this.dataset.price);

            if (this.checked) {
                const listItem = document.createElement('li');
                listItem.textContent = `${itemName} - $${itemPrice}`;
                listItem.setAttribute('data-name', itemName);
                selectedItems.appendChild(listItem);
                totalPrice += itemPrice;
            } else {
                const listItem = selectedItems.querySelector(`li[data-name='${itemName}']`);
                if (listItem) selectedItems.removeChild(listItem);
                totalPrice -= itemPrice;
            }
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
