// Function to confirm navigation to the User/Delivery dashboard
function confirmUserNavigation() {
    return confirm("Are you sure you want to continue as a User/Delivery?");
}

// Function to confirm navigation to the Restaurants dashboard
function confirmRestaurantNavigation() {
    return confirm("Are you sure you want to continue to Restaurants?");
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", () => {
    const userButton = document.querySelector(".buttona");
    const restaurantButton = document.querySelector(".buttonb");

    userButton.addEventListener("click", (event) => {
        if (!confirmUserNavigation()) {
            event.preventDefault(); // Prevent navigation if the user cancels
        }
    });

    restaurantButton.addEventListener("click", (event) => {
        if (!confirmRestaurantNavigation()) {
            event.preventDefault(); // Prevent navigation if the user cancels
        }
    });
});
