// Sample data for demonstration
const orders = [
    { id: 19, customer: "Dharwin", items: ["cheese burger", "salmon fries"], total: 60 },
    { id: 20, customer: "Dilipkumar", items: ["Broccoli gravy"], total: 75 },
    { id: 21, customer: "Elavarasan", items: ["chicken 65", "Almond juice"], total: 150 },
    { id: 7, customer: "Arjun", items: ["Orange Juice", "Apple and Blueberries"], total: 100 }
];

const feedbacks = [
    { id: 1, customer: "Elavarasan", message: "Great service!" },
    { id: 2, customer: "Arjun", message: "Food was delicious!" },
];

// Function to view orders
function viewOrders() {
    alert("Viewing orders:\n" + orders.map(order => 
        `Order ID: ${order.id}\nCustomer: ${order.customer}\nItems: ${order.items.join(", ")}\nTotal: $${order.total}`
    ).join("\n\n"));
}

// Function to manage menu (placeholder for actual functionality)
function manageMenu() {
    alert("Manage menu functionality goes here.");
}

// Function to view analytics (placeholder for actual functionality)
function viewAnalytics() {
    alert("View analytics functionality goes here.");
}

// Function to view customer feedback
function viewFeedback() {
    alert("Customer Feedback:\n" + feedbacks.map(feedback => 
        `Customer: ${feedback.customer}\nFeedback: ${feedback.message}`
    ).join("\n\n"));
}

// Adding event listeners to buttons
document.querySelector('.action-btn:nth-of-type(1)').addEventListener('click', viewOrders);
document.querySelector('.action-btn:nth-of-type(2)').addEventListener('click', manageMenu);
document.querySelector('.action-btn:nth-of-type(3)').addEventListener('click', viewAnalytics);
document.querySelector('.action-btn:nth-of-type(4)').addEventListener('click', viewFeedback);
