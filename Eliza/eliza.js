// eliza.js - JavaScript file containing the chatbot logic

// Reflection patterns for ELIZA's responses to mimic conversation
const reflections = {
    "I am": "you are",
    "I": "you",
    "me": "you",
    "my": "your",
    "you are": "I am",
    "your": "my"
};

// Function to reflect the user's input based on predefined patterns
function reflect(input) {
    // Split the input into words and replace matching words based on 'reflections'
    return input.split(" ").map(word => reflections[word] || word).join(" ");
}

// Function to generate a response from ELIZA based on user input
function generateResponse(input) {
    // Apply reflection to create a response that feels more human-like
    const reflectedInput = reflect(input);
    return `Why do you say "${reflectedInput}"?`; // Simple response structure
}

// Function to handle sending a message from the user
function sendMessage() {
    const userInput = document.getElementById("user-input"); // User input field
    const chatHistory = document.getElementById("chat-history"); // Chat history display

    const userMessage = userInput.value.trim(); // Get and trim user input
    if (userMessage === "") return; // Do nothing if input is empty

    // Display user's message in chat history
    chatHistory.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    // Generate ELIZA's response using the input
    const elizaMessage = generateResponse(userMessage);
    chatHistory.innerHTML += `<p><strong>ELIZA:</strong> ${elizaMessage}</p>`;

    // Automatically scroll chat history to the latest message
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Clear the input field after sending the message
    userInput.value = "";
}

// Event listener for "Enter" key press to trigger sending the message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage(); // Call sendMessage when Enter is pressed
    }
});

// Event listener for the "Send" button to trigger sending the message
document.getElementById("send-button").addEventListener("click", sendMessage);
