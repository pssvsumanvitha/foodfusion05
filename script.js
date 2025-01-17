// Initialize an empty cart array
let cartItems = [];

// Function to update the cart UI
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the cart list before updating
    cartItemsList.innerHTML = '';

    // Add each item in the cart to the list
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} <span>₹${item.price}</span>`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Update the total price
    totalPriceElement.textContent = total;
}

// Function to handle adding an item to the cart
function addToCart(event) {
    // Get item details from data attributes
    const menuItem = event.target.closest('.menu-item');
    const name = menuItem.getAttribute('data-name');
    const price = parseInt(menuItem.getAttribute('data-price'));

    // Add the item to the cart
    cartItems.push({ name, price });

    // Update the cart UI
    updateCart();
}

// Checkout function
function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty! Please add items before checking out.');
        return;
    }

    alert(`Thank you for your order! Total amount: ₹${document.getElementById('total-price').textContent}`);
    // Clear the cart after checkout
    cartItems.length = 0;
    updateCart(); // Re-render the empty cart
}

// Add event listener to checkout button
document.getElementById('checkout').addEventListener('click', checkout);

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initialize the cart on page load
window.onload = updateCart;
