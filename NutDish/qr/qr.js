const videoElement = document.getElementById('video');

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' } 
        });
        videoElement.srcObject = stream;
        videoElement.play();
    } catch (error) {
        console.error('Error accessing the camera: ', error);
        alert('Unable to access the camera. Please check your permissions.');
    }
}
setupCamera();

