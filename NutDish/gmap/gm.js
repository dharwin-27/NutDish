let map;
let marker;
function initMap() {
    const restaurantLocation = { lat: 11.1034, lng: 77.0272 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: restaurantLocation,
    });
    marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
    });
    trackOrder();
}
function trackOrder() {
    const orderStatus = document.getElementById('status');
    const paymentButton = document.querySelector('.c'); 
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
            orderStatus.innerText = statuses[statuses.length - 1]; 
            paymentButton.style.display = 'block'; 
        }
    }, 3000); 
}
window.onload = initMap;

