document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPriceDisplay = document.getElementById("total-price");
    let totalPrice = 0;

    // Function to add item to cart
    const addToCart = (itemName, itemPrice) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${itemName} - ₹${itemPrice.toFixed(2)}`;
        cartItems.appendChild(listItem);
        totalPrice += itemPrice;
        totalPriceDisplay.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
    };

    // Add event listeners to buttons
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const menuItem = event.target.closest(".menu-item");
            const itemName = menuItem.querySelector("h3").textContent;
            const itemPrice = parseFloat(menuItem.querySelector(".price").textContent.replace("₹", ""));
            addToCart(itemName, itemPrice);
        });
    });
});
