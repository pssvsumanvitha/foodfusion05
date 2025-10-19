let cart = [];
let totalPrice = 0;

// Add selected items to cart
document.getElementById('add-to-cart').addEventListener('click', function() {
    const selectedOptions = Array.from(document.getElementById('food').selectedOptions);

    if (selectedOptions.length === 0) {
        alert("Please select at least one food item.");
        return;
    }

    selectedOptions.forEach(option => {
        const text = option.text; // e.g., "Burger - ₹150"
        cart.push(text);

        // Extract numeric price from text
        const price = Number(text.replace(/[^0-9]/g, '')); 
        totalPrice += price;
    });

    updateCart();
});

// Checkout button
document.getElementById('checkout').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment').value;

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
    }

    // Simulate order placement
    alert(`Order placed successfully!\nTotal: ₹${totalPrice}\nPayment Method: ${paymentMethod}`);

    // Reset cart and total
    cart = [];
    totalPrice = 0;
    updateCart();

    // Reset form
    document.getElementById('order-form').reset();
});

// Update the cart UI
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
