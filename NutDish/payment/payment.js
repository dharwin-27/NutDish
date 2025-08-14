document.getElementById('scan-qr-button').addEventListener('click', function() {
    // Simulate QR code scanning process
    setTimeout(() => {
        document.getElementById('qr-message').textContent = 'QR Code scanned successfully! Proceed to payment.';
        document.getElementById('qr-message').classList.remove('hidden');
        document.getElementById('payment-form').classList.remove('hidden');
    }, 1000);
});

document.getElementById('submit-payment').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation (you can expand this)
    if (amount && cardNumber) {
        document.getElementById('payment-status').textContent = 'Payment submitted successfully!';
        document.getElementById('payment-status').classList.remove('hidden');
        clearForm();
    } else {
        document.getElementById('payment-status').textContent = 'Please fill in all fields.';
        document.getElementById('payment-status').classList.remove('hidden');
    }
});

function clearForm() {
    document.getElementById('amount').value = '';
    document.getElementById('card-number').value = '';
}
// Get the video element
const videoElement = document.getElementById('video');

// Function to access the camera and display the video stream
async function setupCamera() {
    try {
        // Request access to the user's camera (back camera on mobile)
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' } // Use environment (back) camera by default
        });

        // Set the video element's source to the camera stream
        videoElement.srcObject = stream;

        // Play the video as soon as it is ready
        videoElement.play();
    } catch (error) {
        console.error('Error accessing the camera: ', error);
        alert('Unable to access the camera. Please check your permissions.');
    }
}

// Start the camera when the page loads
setupCamera();
