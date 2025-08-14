// Sample notifications data
let notifications = [
    { id: 1, message: 'Your order has been shipped!', read: false },
    { id: 2, message: 'Reminder: Your reservation is tomorrow.', read: false },
    { id: 3, message: 'New promotion: 20% off on your next meal!', read: false }
];

// Function to render the notifications list
function renderNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ''; // Clear existing notifications

    // Loop through notifications and create HTML elements
    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.classList.add('notification-item');
        if (notification.read) {
            notificationItem.classList.add('read');
        }

        notificationItem.innerHTML = `
            <span>${notification.message}</span>
            <div class="notification-actions">
                <button class="mark-read" onclick="markAsRead(${notification.id})">Mark as Read</button>
                <button class="delete" onclick="deleteNotification(${notification.id})">Delete</button>
            </div>
        `;

        notificationList.appendChild(notificationItem);
    });
}

// Function to add a new notification
function addNotification() {
    const newMessage = prompt('Enter the new notification message:');
    if (newMessage) {
        const newNotification = {
            id: notifications.length + 1,
            message: newMessage,
            read: false
        };
        notifications.push(newNotification);
        renderNotifications();
}

// Function to mark a notification as read
function markAsRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        renderNotifications();
    }
}

// Function to delete a notification
function deleteNotification(notificationId) {
    notifications = notifications.filter(n => n.id !== notificationId);
    renderNotifications();
}

// Initial rendering of notifications
renderNotifications();
}