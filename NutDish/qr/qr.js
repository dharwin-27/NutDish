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
