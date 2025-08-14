function trackOrder() {
    const orderID = document.getElementById('orderID').value;
    const resultDiv = document.getElementById('result');

    // Mock tracking data
    const trackingData = {
        'Dharwin': 'You have a Premium Access for 20% offer!!!.',
        'Dilipkumar': 'You have a Premium Access for 20% offer!!!.',
        'Elavan': 'You have a Premium Access for 20% offer!!!.',
        'Darshan': 'You have a Premium Access for 20% offer!!!.',
        'Hariharan': 'You have a Premium Access for 20% offer!!!.',
        'Arikesh': 'You have a Premium Access for 20% offer!!!.',
        'Arjun': 'You have a Premium Access for 20% offer!!!.'
    };

    // Check the tracking status
    if (trackingData[orderID]) {
        resultDiv.textContent = trackingData[orderID];
    } else {
        resultDiv.textContent = 'You have an Ordinary Access.';
    }
}
