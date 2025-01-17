const foodPrices = {
    "Pizza": 250,
    "Burger": 150,
    "Pasta": 200,
    "Salad": 100
};

let cart = [];
let totalPrice = 0;

document.getElementById('add-to-cart').addEventListener('click', function() {
    const selectedItems = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);

    selectedItems.forEach(item => {
        cart.push(item);
        totalPrice += foodPrices[item];
    });

    updateCart();
});

document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    alert(`Order placed successfully!\nTotal: ₹${totalPrice}`);
    cart = [];
    totalPrice = 0;
    updateCart();
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - ₹${foodPrices[item]}`;
        cartItemsContainer.appendChild(listItem);
    });

    document.getElementById('total-price').textContent = totalPrice;
}
