// Initialize cart
let cart = [];

// Function to add menu item to the cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} has been added to your cart.`);
}

// Function to handle restaurant selection
function selectRestaurant(restaurantName) {
    alert(`${restaurantName} has been selected.`);
}

// Function to handle payment
function processPayment(event) {
    event.preventDefault(); // Prevent form submission
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        alert('Payment processed successfully!');
        // Reset the cart after payment
        cart = [];
    } else {
        alert('Please fill in all payment fields.');
    }
}

// Event listeners for restaurant selection
const restaurantButtons = document.querySelectorAll('.restaurant-card button');
restaurantButtons.forEach(button => {
    button.addEventListener('click', () => {
        const restaurantName = button.parentElement.querySelector('h3').innerText;
        selectRestaurant(restaurantName);
    });
});

// Event listeners for adding menu items to cart
const menuButtons = document.querySelectorAll('.menu-item button');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemDetails = button.parentElement.innerText.split(' - $');
        const itemName = itemDetails[0].trim();
        const itemPrice = parseFloat(itemDetails[1].trim());
        addToCart(itemName, itemPrice);
    });
});

// Event listener for payment form submission
const paymentForm = document.querySelector('#payment form');
paymentForm.addEventListener('submit', processPayment);
