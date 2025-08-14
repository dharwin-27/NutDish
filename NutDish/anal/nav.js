// Sample data
const ordersData = [15, 20, 25, 30, 40, 50, 60];
const revenueData = [150, 200, 250, 300, 400, 500, 600];

// Update metrics
document.getElementById('total-orders').innerText = ordersData.reduce((a, b) => a + b, 0);
document.getElementById('total-revenue').innerText = `$${revenueData.reduce((a, b) => a + b, 0)}`;
document.getElementById('average-order-value').innerText = `$${(revenueData.reduce((a, b) => a + b, 0) / ordersData.reduce((a, b) => a + b, 0)).toFixed(2)}`;

// Chart configuration
const ctx = document.getElementById('ordersChart').getContext('2d');
const ordersChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [{
            label: 'Orders',
            data: ordersData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }, {
            label: 'Revenue',
            data: revenueData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
