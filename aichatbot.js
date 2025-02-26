// Function to simulate sending a message from the user
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const inputText = inputField.value.trim();

    if (inputText === "") return;

    appendMessage(inputText, 'user');  // Add user's message
    inputField.value = '';             // Clear the input field

    // Simulate AI response (you can extend this logic with more sophisticated answers)
    const botResponse = getBotResponse(inputText);

    // Add the bot's message
    setTimeout(() => {
        appendMessage(botResponse, 'bot');
    }, 1000); // AI response delay (simulating thinking time)
}

// Function to append a message to the chat box
function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate a response from the bot (simple logic)
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a Nut-bot, but I\'m doing great! How about you?';
    } else if (lowerCaseMessage.includes('describe about you') || lowerCaseMessage.includes('who are you')|| lowerCaseMessage.includes('why are you here for?')) {
        return 'I am  a Nut-bot, I just want to help you for selecing a food items through your nutrients needs';
    }else if (lowerCaseMessage.includes('vitamin a') || 
    lowerCaseMessage.includes('list of vitamin a foods') || 
    lowerCaseMessage.includes('give me a vitamin a foods')) {
return `Here are some common foods high in vitamin A that you might find at restaurants:\r\n
       1. Seafood: Salmon, Tuna, Shrimp\r\n
       2. Leafy Greens: Spinach, Kale\r\n
       3. Vegetables: Carrots, Sweet Potatoes, Pumpkin, Red Bell Peppers, Butternut Squash\n
       4. Dairy Products: Cheddar Cheese, Eggs\n
       5. Fruits: Mango, Cantaloupe, Apricots\n
       6. Liver Dishes: Beef or Chicken Liver\n\n
       These foods are rich in Vitamin A in the form of beta-carotene (plant sources) or retinol (animal sources), 
       making them great options for a Vitamin A boost.`;
}else if (lowerCaseMessage.includes('vitamin b') || 
lowerCaseMessage.includes('list of vitamin b foods') || 
lowerCaseMessage.includes('give me a vitamin b foods')) {
return `Here are some common foods high in vitamin B that you might find at restaurants:\r\n
   1. Meats and Poultry: Chicken, Beef, Pork\r\n
   2. Seafood: Salmon and Tuna, Trout, Shellfish\r\n
   3. Vegetables: Spinach, Broccoli, Asparagus\n
   4. Dairy Products:Milk, Yogurt, Eggs\n
   5. Legumes: Lentils, Black Beans and Chickpeas\n
   6. Nuts and Seeds: Sunflower Seeds or Almonds\n\n
   These foods are rich in Vitamin B in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a Vitamin B boost.`;
}else if (lowerCaseMessage.includes('vitamin c') || 
lowerCaseMessage.includes('list of vitamin c foods') || 
lowerCaseMessage.includes('give me a vitamin c foods')) {
return `Here are some common foods high in vitamin C that you might find at restaurants:\r\n
   1. Fruits: Oranges and Orange Juice, Strawberries, Kiwi, Pineapple, Papaya, Cantaloupe and Honeydew Melon\r\n
   2. Potatoes: White Potatoes, Sweet Potatoes\r\n
   3. Vegetables: Red and Green Bell Peppers, Broccoli, Brussels Sprouts, Tomatoes, Spinach and Kale\n
   4. Herbs and Garnishes:Parsley, Cilantro\n
   5. Sauces and Dressings: Salsas, Citrus-based Dressings and Marinades\n\n
   These foods are rich in Vitamin C in the form of beta-carotene (plant sources) , 
   making them great options for a Vitamin C boost.`;
}else if (lowerCaseMessage.includes('vitamin d') || 
lowerCaseMessage.includes('list of vitamin d foods') || 
lowerCaseMessage.includes('give me a vitamin d foods')) {
return `Here are some common foods high in vitamin D that you might find at restaurants:\r\n
   1. Fortified Beverages: Fortified Orange Juice\r\n
   2. Seafood: Salmon, Tuna, Trout, Sardines, Mackerel\r\n
   3. Vegetables: Spinach, Broccoli, Asparagus\n
   4. Dairy Products:Fortified Milk, Yogurt, Eggs Yolks, Cheese\n
   5. Mushrooms: Portobello and Shiitake Mushrooms\n\n
   These foods are rich in Vitamin D in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a Vitamin D boost.`;
}else if (lowerCaseMessage.includes('vitamin k') || 
lowerCaseMessage.includes('list of vitamin k foods') || 
lowerCaseMessage.includes('give me a vitamin k foods')) {
return `Here are some common foods high in vitamin K that you might find at restaurants:\r\n
   1. Leafy Greens: Kale, Spinach, Collard Greens, Swiss Chard\r\n
   2. Cruciferous Vegetables: Broccoli, Brussels Sprouts, Cabbage\r\n
   3. Herbs: Parsley, Cilantro, Basil\n
   4. Fruits:Blueberries, Prunes\n
   5. Other Foods: Edamame, Green Beans \n\n
   These foods are rich in Vitamin K in the form of beta-carotene (plant sources), 
   making them great options for a Vitamin K boost.`;
}else if (lowerCaseMessage.includes('calcium') || 
lowerCaseMessage.includes('list of calcium foods') || 
lowerCaseMessage.includes('give me a calcium  foods')) {
return `Here are some common foods high in calcium that you might find at restaurants:\r\n
   1. Leafy Greens: Kale, Collard Greens, Spinach\r\n
   2. Seafood: Salmon and Sardines\r\n
   3. Vegetables: Broccoli, Okra\n
   4. Dairy Products:Milk, Yogurt, Cheese, Ice Cream and Custard\n
   5. Beans and Legumes: White Beans, Tofu and Tempeh\n
   6. Nuts and Seeds: Chia Seeds or Almonds\n\n
   These foods are rich in calcium  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a calcium boost.`;
}else if (lowerCaseMessage.includes('protein') || 
lowerCaseMessage.includes('list of protein foods') || 
lowerCaseMessage.includes('give me a protein  foods')) {
return `Here are some common foods high in protein that you might find at restaurants:\r\n
   1. Meat and Poultry: Chicken Breast, Beef, Pork, Turkey\r\n
   2. Seafood: Salmon, Tuna, Shrimp, Cod and Tilapia\r\n
   3. Whole Grains: Quinoa, Farro and Barley\n
   4. Eggs & Dairy Products:Milk, Yogurt, Cheese, Egg Dishes\n
   5. Beans and Legumes: Lentils, Chickpeas, Black Beans, Kidney Beans, Tofu and Tempeh\n
   6. Nuts and Seeds: Chia Seeds and Hemp Seeds or Almonds\n\n
   These foods are rich in protein  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a protein boost.`;
}
else if (lowerCaseMessage.includes('weight gain') || 
lowerCaseMessage.includes('list of weight gain foods') || 
lowerCaseMessage.includes('give me a weight gain  foods')) {
return `Here are some common foods high in weight gain that you might find at restaurants:\r\n
   1. High-Calorie Proteins: Steak and Beef, Salmon, Pork, Chicken Thighs\r\n
   2. Pasta and Rice Dishes: Pasta with Cream Sauces, Macaroni and Cheese, Fried Rice and Risotto\r\n
   3. Grain Bowls and Burritos: Burrito Bowls with Rice, Beans, Avocado, Quinoa Bowls with Nuts, Seeds, Burritos and Cheese\n
   4. Dairy-Based Dishes:Cheese Platters, Milkshakes, Smoothies, Greek Yogurt with Nuts, Honey, Ice Cream and Creamy Soups\n
   5. Healthy Fats: Avocado Toast, Guacamole and Chips\n
   6. Starches and Potatoes: Mashed Potatoes with Butter or Cream or French Fries and Sweet Potato Fries\n\n
   These foods are rich in weight gain  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a weight gain boost.`;
}else if (lowerCaseMessage.includes('weight loss') || 
lowerCaseMessage.includes('list of weight loss foods') || 
lowerCaseMessage.includes('give me a weight loss  foods')) {
return `Here are some common foods high in weight loss that you might find at restaurants:\r\n
   1. Lean Proteins: Grilled Chicken Breast, Turkey, Egg Whites\r\n
   2. Seafood:  Tuna, Shrimp \r\n
   3. High-Fiber Vegetables: Broccoli, Cauliflower, Zucchini, Spinach and Kale\n
   4. Whole Grains: Quinoa, Brown Rice, Oats\n
   5. Beans and Legumes: Lentils, Chickpeas, Black Beans\n
   6. Nuts and Seeds: Chia Seeds and Walnuts or Almonds\n\n
   These foods are rich in weight loss  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a weight loss.`;
}
else if (lowerCaseMessage.includes('reduce hair loss') || 
lowerCaseMessage.includes('list of reduce hair loss foods') || 
lowerCaseMessage.includes('give me a reduce hair loss  foods')) {
return `Here are some common foods high in reducing hair loss that you might find at restaurants:\r\n
   1. Protein-Rich Foods: Chicken Breast, Salmon, Eggs, Greek Yogurt\r\n
   2. Leafy Greens: Spinach, Kale and Collard Greens\r\n
   3. Nuts and Seeds: Almonds, Walnuts, Chia Seeds, Pumpkin Seeds\n
   4. Fruits:Berries , Avocados, Oranges\n
   5. Seafood: Tuna, Oysters and Shrimp\n
   6. Herbs and Spices: Rosemary, Ginger and Turmeric\n\n
   These foods are rich in reducing hair loss  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a reduce hair loss.`;
}else if (lowerCaseMessage.includes('glowing skin') || 
lowerCaseMessage.includes('list of glowing skin foods') || 
lowerCaseMessage.includes('give me a glowing skin foods')|| 
lowerCaseMessage.includes('glowing face') || 
lowerCaseMessage.includes('list of a glowing face foods')|| 
lowerCaseMessage.includes('give me a glowing face foods')) {
return `Here are some common foods high in glowing skin/face that you might find at restaurants:\r\n
   1. Fatty Fish: Salmon, Mackerel, Sardines\r\n
   2. Nuts and Seeds:  Almonds, Walnuts, Chia Seeds, Pumpkin Seeds \r\n
   3. Fruits: Berries, Avocados, Pomegranates, Papaya and Citrus \n
   4. Leafy Greens: Spinach, Swiss Chard, Kale\n
   5. Whole Grains & Fermented Foods: Quinoa, Brown Rice, Kimchi, Yogurt\n
   6. Dark Chocolate: Dark Chocolate (70% cocoa or higher)\n\n
   These foods are rich in glowing skin/face  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a glowing skin/face.`;
}
else if (lowerCaseMessage.includes('fever') || 
lowerCaseMessage.includes('cold') || 
lowerCaseMessage.includes('cough')|| 
lowerCaseMessage.includes('fever and cold') || 
lowerCaseMessage.includes('cold and cough')|| 
lowerCaseMessage.includes('fever and cold and cough')) {
return `Here are some common foods high in fever, cold and cough that you might find at restaurants:\r\n
   
1.Clear Broths and Soups: Chicken SoupVegetable BrothMiso Soup,Beef Broth\r\n
2.Hydrating Drinks: Herbal Teas, Warm Lemon Water with Honey, Coconut Water, Fresh Juices\r\n
3.Fruits: Citrus Fruits, Watermelon, Berries, Bananas\r\n
4.Soft and Easy-to-Digest Foods: Oatmeal, Mashed Potatoes, Plain Rice or Toast, Applesauce\r\n
5.Yogurt and Probiotics: Plain Yogurt, Kefir\r\n
6.Vegetables: Steamed or Roasted Carrots, Spinach, Zucchini\r\n
7.Protein-Rich Foods: Grilled Chicken Breast, Poached Eggs, Tofu\r\n
8.Ginger and Spices: Ginger Tea, Turmeric\r\n
9.Light Salads: Cucumber and Lettuce Salad, Avocado Salad\r\n
10.Cold Treats: Popsicles, Frozen Yogurt\n\n
   These foods are rich in fever, cold and cough  in the form of beta-carotene (plant sources) or retinol (animal sources), 
   making them great options for a fever, cold and cough recovery.`;
}
else if (lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a great day!';
    } 
    else if (lowerCaseMessage.includes('thanks')||lowerCaseMessage.includes('thank you')) {
        return 'I am just a nut-bot no need for this kind of greetings. Anyway you are welcome!';
    } else {
        return 'I am not sure how to respond to that. Could you ask something else?';
    }
}
