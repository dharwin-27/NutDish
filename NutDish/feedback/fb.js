let feedbackData = [];
function submitFeedback() {
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
    const feedback = {
        rating: rating,
        comment: comment,
    };
    feedbackData.push(feedback);
    document.getElementById("rating").value = "5";
    document.getElementById("comment").value = "";
    displayFeedback();
    updateAverageRating();
}
function displayFeedback() {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = ""; 
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
function updateAverageRating() {
    if (feedbackData.length === 0) {
        document.getElementById("avg-rating").innerText = "0";
        return;
    }
    const totalRating = feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0);
    const average = (totalRating / feedbackData.length).toFixed(1);
    document.getElementById("avg-rating").innerText = average;
}

