document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchResults = document.getElementById("search-results");

    // Sample food data
    const foodItems = [
        { name: "Pizza", description: "Cheesy and delicious with various toppings." },
        { name: "Burger", description: "Juicy beef patty with fresh lettuce and tomato." },
        { name: "Sushi", description: "Fresh and flavorful, made with rice and seafood." },
        { name: "Pasta", description: "Italian dish with various sauces and ingredients." },
        { name: "Salad", description: "Healthy mix of greens and vegetables." },
        { name: "Ice Cream", description: "Cold dessert available in various flavors." },
    ];

    // Function to render search results
    const renderResults = (results) => {
        searchResults.innerHTML = ""; // Clear previous results
        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found.</p>";
            return;
        }
        results.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            searchResults.appendChild(resultItem);
        });
    };

    // Search button event listener
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase();
        const filteredResults = foodItems.filter(item => item.name.toLowerCase().includes(query));
        renderResults(filteredResults);
    });

    // Logout functionality (for demo purposes)
    document.getElementById("logout").addEventListener("click", () => {
        alert("You have been logged out.");
        // Redirect to login page or perform logout actions
    });
});
