document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.getElementById("order-list");

    // Sample past orders data
    const pastOrders = [
        {
            orderId: 12345,
            items: ["Pizza", "Pasta"],
            total: 25.00,
            status: "Delivered",
            date: "2023-10-15"
        },
        {
            orderId: 12346,
            items: ["Sushi"],
            total: 15.00,
            status: "Pending",
            date: "2023-10-14"
        },
        {
            orderId: 12347,
            items: ["Burger", "Fries"],
            total: 18.50,
            status: "Delivered",
            date: "2023-10-12"
        }
    ];

    // Function to render past orders
    const renderOrders = () => {
        pastOrders.forEach(order => {
            const orderItem = document.createElement("div");
            orderItem.className = "order-item";
            orderItem.innerHTML = `
                <h3>Order #${order.orderId}</h3>
                <p>Items: ${order.items.join(", ")}</p>
                <p>Total: $${order.total.toFixed(2)}</p>
                <p>Date: ${order.date}</p>
                <p class="status">${order.status}</p>
            `;
            orderList.appendChild(orderItem);
        });
    };

    // Call the function to render orders
    renderOrders();

    // Logout functionality (for demo purposes)
    document.getElementById("logout").addEventListener("click", () => {
        alert("You have been logged out.");
        // Redirect to login page or perform logout actions
    });
});
