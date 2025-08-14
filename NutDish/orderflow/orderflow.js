
let cart = [];
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} has been added to your cart.`);
}

function selectRestaurant(restaurantName) {
    alert(`${restaurantName} has been selected.`);
}

function processPayment(event) {
    event.preventDefault(); 
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
const restaurantButtons = document.querySelectorAll('.restaurant-card button');
restaurantButtons.forEach(button => {
    button.addEventListener('click', () => {
        const restaurantName = button.parentElement.querySelector('h3').innerText;
        selectRestaurant(restaurantName);
    });
});
const menuButtons = document.querySelectorAll('.menu-item button');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemDetails = button.parentElement.innerText.split(' - $');
        const itemName = itemDetails[0].trim();
        const itemPrice = parseFloat(itemDetails[1].trim());
        addToCart(itemName, itemPrice);
    });
});

const paymentForm = document.querySelector('#payment form');
paymentForm.addEventListener('submit', processPayment);

