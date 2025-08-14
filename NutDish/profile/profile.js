// Sample user data
const userData = {
    name: "Dharwin V",
    email: "dharwin.v@gmail.com",
    phone: "+919092813131",
    address: "Ganapathy, Coimbatore"
};

// Sample order history
const orderHistory = [
    { id: "Dharwin", items: ["Spinach and Mushroom Quiche"], total: 29.00, status: "Your Last Order" },
    { id: "Dharwin", items: ["Kale Salad with Lemon Vinaigrette"], total: 49.00, status: "Your Most Favourite" }
];

// Function to display user profile data
function displayProfile() {
    const details = document.querySelector('.details');
    details.querySelector('h3').innerText = userData.name;
    details.querySelector('p:nth-of-type(1)').innerText = `Email: ${userData.email}`;
    details.querySelector('p:nth-of-type(2)').innerText = `Phone: ${userData.phone}`;
    details.querySelector('p:nth-of-type(3)').innerText = `Address: ${userData.address}`;
}

// Function to display order history
function displayOrders() {
    const orderList = document.querySelector('.order-list');
    orderList.innerHTML = ''; // Clear existing orders

    orderHistory.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <p>Order #${order.id} - <span class="status">${order.status}</span></p>
            <p>Items: ${order.items.join(", ")} - Total: $${order.total.toFixed(2)}</p>
        `;
        orderList.appendChild(orderItem);
    });
}

// Function to edit profile
function editProfile() {
    const newName = prompt("Enter your name:", userData.name);
    const newEmail = prompt("Enter your email:", userData.email);
    const newPhone = prompt("Enter your phone number:", userData.phone);
    const newAddress = prompt("Enter your address:", userData.address);

    if (newName) userData.name = newName;
    if (newEmail) userData.email = newEmail;
    if (newPhone) userData.phone = newPhone;
    if (newAddress) userData.address = newAddress;

    displayProfile();
}

// Event listener for the edit button
document.querySelector('.edit-btn').addEventListener('click', editProfile);

document.getElementById("logout").addEventListener("click", () => {
    alert("You have been logged out.");

    function logout() {
        window.location.href = 'file:///C:/Users/Admin/Desktop/food%20delivery/login/login1.html';
    }
    // Redirect to login page or perform logout actions
});

// Initial display of user profile and orders
displayProfile();
displayOrders();
