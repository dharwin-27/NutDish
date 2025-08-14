document.addEventListener("DOMContentLoaded", () => {
    const restaurantList = document.getElementById("restaurant-list");
    const locateBtn = document.getElementById("locate-btn");

    // Sample restaurant data
    const restaurants = [
        {
            name: "Pizza Place",
            distance: "1.2 miles",
            deliveryTime: "30 minutes",
            status: "Open"
        },
        {
            name: "Sushi Spot",
            distance: "0.5 miles",
            deliveryTime: "25 minutes",
            status: "Open"
        },
        {
            name: "Burger Joint",
            distance: "2.0 miles",
            deliveryTime: "40 minutes",
            status: "Closed"
        },
        {
            name: "Pasta House",
            distance: "1.5 miles",
            deliveryTime: "35 minutes",
            status: "Open"
        }
    ];

    // Function to render restaurants
    const renderRestaurants = () => {
        restaurantList.innerHTML = ""; // Clear previous listings
        restaurants.forEach(restaurant => {
            const restaurantItem = document.createElement("div");
            restaurantItem.className = "restaurant-item";
            restaurantItem.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>Distance: ${restaurant.distance}</p>
                <p>Estimated Delivery Time: ${restaurant.deliveryTime}</p>
                <p class="status">${restaurant.status}</p>
            `;
            restaurantList.appendChild(restaurantItem);
        });
    };

    // Locate button event listener
    locateBtn.addEventListener("click", () => {
        renderRestaurants();
    });

    // Logout functionality (for demo purposes)
    document.getElementById("logout").addEventListener("click", () => {
        alert("You have been logged out.");
        // Redirect to login page or perform logout actions
    });
});
