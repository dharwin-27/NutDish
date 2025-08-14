// Sample data for orders and feedback
const orders = [
    { id: 1, item: 'Pizza', status: 'Pending' },
    { id: 2, item: 'Burger', status: 'Delivered' },
    { id: 3, item: 'Sushi', status: 'In Transit' }
];

const feedbacks = [
    { customer: 'Alice', comment: 'Great service!' },
    { customer: 'Bob', comment: 'Fast delivery!' },
    { customer: 'Charlie', comment: 'Food was cold.' }
];

// Function to display orders
function displayOrders() {
    const orderList = document.getElementById('order-list');
    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.textContent = `Order #${order.id}: ${order.item} - Status: ${order.status}`;
        orderList.appendChild(orderItem);
    });
}

// Function to display feedback
function displayFeedback() {
    const feedbackList = document.getElementById('feedback-list');
    feedbacks.forEach(feedback => {
        const feedbackItem = document.createElement('div');
        feedbackItem.textContent = `${feedback.customer}: "${feedback.comment}"`;
        feedbackList.appendChild(feedbackItem);
    });
}

// Simulated navigation status
document.getElementById('start-navigation').addEventListener('click', () => {
    document.getElementById('navigation-status').textContent = 'Navigation started...';
});

// Simulated order tracking
document.getElementById('track-order').addEventListener('click', () => {
    alert('Tracking the current order...');
});
document.getElementById("logout").addEventListener("click", () => {
    alert("You have been logged out.");
    // Redirect to login page or perform logout actions
});

// Initial display
displayOrders();
displayFeedback();
