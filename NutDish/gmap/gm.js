let map;
let marker;

// Initialize and add the map
function initMap() {
    // The location of the restaurant (example coordinates)
    const restaurantLocation = { lat: 11.1034, lng: 77.0272 };

    // The map, centered at the restaurant
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: restaurantLocation,
    });

    // The marker, positioned at the restaurant
    marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
    });

    // Simulate tracking the order
    trackOrder();
}

// Simulate the order tracking process
function trackOrder() {
    const orderStatus = document.getElementById('status');
    const paymentButton = document.querySelector('.c'); // Select the payment button
    const statuses = [
        "Order is being prepared",
        "Order is on the way",
        "Order is nearby",
        "Order delivered"
    ];

    let index = 0;
    const interval = setInterval(() => {
        if (index < statuses.length) {
            orderStatus.innerText = statuses[index];
            index++;
        } else {
            clearInterval(interval);
            orderStatus.innerText = statuses[statuses.length - 1]; // Ensure it shows "Order delivered"
            paymentButton.style.display = 'block'; // Show the payment button
        }
    }, 3000); // Update status every 3 seconds
}

// Load the map after the window has loaded
window.onload = initMap;
