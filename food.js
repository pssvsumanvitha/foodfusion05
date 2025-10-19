let cart = [];
let totalPrice = 0;

document.getElementById('add-to-cart').addEventListener('click', function() {
    const selectedOptions = Array.from(document.getElementById('food').selectedOptions);

    selectedOptions.forEach(option => {
        const text = option.text; // e.g., "Burger - ₹150"
        cart.push(text);

        // Extract numeric price from text
        const price = Number(text.replace(/[^0-9]/g, '')); 
        totalPrice += price;
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
        listItem.textContent = item;
        cartItemsContainer.appendChild(listItem);
    });

    document.getElementById('total-price').textContent = totalPrice;
}
