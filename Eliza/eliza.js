// eliza.js - Contains the core chatbot logic

// Reflection patterns for ELIZA responses
const reflections = {
    "I am": "you are",
    "I": "you",
    "me": "you",
    "my": "your",
    "you are": "I am",
    "your": "my"
};

// Function to reflect user input
function reflect(input) {
    return input.split(" ").map(word => reflections[word] || word).join(" ");
}

// Updated generateResponse function with keyword matching
function generateResponse(input) {
    // Convert input to lowercase for easier matching
    const normalizedInput = input.toLowerCase();

    // Basic keyword-based responses
    if (normalizedInput.includes("hello") || normalizedInput.includes("hi")) {
        return "Hello! How can I help you today?";
    } else if (normalizedInput.includes("how are you")) {
        return "I'm just a computer program, but I'm here to help you.";
    } else if (normalizedInput.includes("i feel")) {
        return "Why do you feel that way?";
    } else if (normalizedInput.includes("because")) {
        return "Is that the real reason?";
    } else if (normalizedInput.includes("yes")) {
        return "I see. Can you tell me more about that?";
    } else if (normalizedInput.includes("no")) {
        return "Why not?";
    } else if (normalizedInput.includes("you")) {
        return "We’re talking about you, not me.";
    } else {
        // Default fallback response for unmatched inputs
        const reflectedInput = reflect(input);
        return `Why do you say "${reflectedInput}"?`;
    }
}

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatHistory = document.getElementById("chat-history");

    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // Display user's message
    chatHistory.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    // Generate ELIZA's response
    const elizaMessage = generateResponse(userMessage);
    chatHistory.innerHTML += `<p><strong>ELIZA:</strong> ${elizaMessage}</p>`;

    // Scroll chat history to the bottom
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Clear input
    userInput.value = "";
}

// Event listener for "Enter" key to send messages
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Event listener for "Send" button
document.getElementById("send-button").addEventListener("click", sendMessage);
