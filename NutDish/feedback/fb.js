// Store feedback data
let feedbackData = [];

// Function to submit feedback
function submitFeedback() {
    // Get the rating and comment values
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value.trim();

    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please select a valid rating (1-5).");
        return;
    }

    if (comment === "") {
        alert("Please provide some feedback.");
        return;
    }

    // Create a feedback object
    const feedback = {
        rating: rating,
        comment: comment,
    };

    // Add the feedback to the feedbackData array
    feedbackData.push(feedback);

    // Clear the form fields
    document.getElementById("rating").value = "5";
    document.getElementById("comment").value = "";

    // Display the updated feedback list
    displayFeedback();

    // Update the average rating
    updateAverageRating();
}

// Function to display feedback
function displayFeedback() {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = ""; // Clear current feedback

    // Loop through the feedback data and display each one
    feedbackData.forEach((feedback, index) => {
        const feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");
        feedbackItem.innerHTML = `
            <strong>Rating: ${feedback.rating}</strong>
            <p>${feedback.comment}</p>
        `;
        feedbackList.appendChild(feedbackItem);
    });
}

// Function to calculate and display the average rating
function updateAverageRating() {
    if (feedbackData.length === 0) {
        document.getElementById("avg-rating").innerText = "0";
        return;
    }

    const totalRating = feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0);
    const average = (totalRating / feedbackData.length).toFixed(1);

    document.getElementById("avg-rating").innerText = average;
}
