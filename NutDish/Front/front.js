function confirmUserNavigation() {
    return confirm("Are you sure you want to continue as a User/Delivery?");
}
function confirmRestaurantNavigation() {
    return confirm("Are you sure you want to continue to Restaurants?");
}
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

