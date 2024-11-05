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

// Enhanced generateResponse function with more keyword-based responses
function generateResponse(input) {
    // Convert input to lowercase for easier matching
    const normalizedInput = input.toLowerCase();

    // Keyword-based responses
    if (normalizedInput.includes("hello") || normalizedInput.includes("hi") || normalizedInput.includes("hey")) {
        return "Hello! How can I help you today?";
    } else if (normalizedInput.includes("how are you") || normalizedInput.includes("how are you doing") || normalizedInput.includes("how are you feeling")) {
        return "I'm just a computer program, but I'm here to help you.";
    } else if (normalizedInput.includes("what are you doing")) {
        return "I'm here, ready to chat with you!";
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
    } else if (normalizedInput.includes("what is your name") || normalizedInput.includes("who are you")) {
        return "I'm ELIZA, your friendly chatbot assistant.";
    } else if (normalizedInput.includes("how old are you")) {
        return "Age is just a concept for me. I exist to assist you.";
    } else if (normalizedInput.includes("can you help me")) {
        return "Of course! I'm here to help. What's on your mind?";
    } else if (normalizedInput.includes("i need")) {
        return "Why do you need that?";
    } else if (normalizedInput.includes("i want")) {
        return "What would achieving that mean for you?";
    } else if (normalizedInput.includes("why") && normalizedInput.includes("can't")) {
        return "What do you think is stopping you?";
    } else if (normalizedInput.includes("tell me more")) {
        return "What else would you like to know?";
    } else if (normalizedInput.includes("thank you") || normalizedInput.includes("thanks")) {
        return "You're very welcome!";
    } else if (normalizedInput.includes("bye") || normalizedInput.includes("goodbye")) {
        return "Goodbye! Feel free to come back if you need more help.";
    } else if (normalizedInput.includes("where are you from")) {
        return "I'm from the digital realm, here to assist you!";
    } else if (normalizedInput.includes("what can you do")) {
        return "I can chat with you and help you think through your thoughts.";
    } else if (normalizedInput.includes("are you human")) {
        return "No, I'm just a computer program created to assist you.";
    } else if (normalizedInput.includes("what is the meaning of life")) {
        return "That's a profound question. What do you think it is?";
    } else if (normalizedInput.includes("do you have feelings") || normalizedInput.includes("are you alive")) {
        return "I don't have feelings, but I am here to listen to yours.";
    } else if (normalizedInput.includes("what's your purpose") || normalizedInput.includes("why are you here")) {
        return "I'm here to have conversations with you and maybe help you reflect on your thoughts.";
    } else if (normalizedInput.includes("do you like me")) {
        return "I think you're interesting to talk to!";
    } else if (normalizedInput.includes("how can i be happy")) {
        return "Happiness can mean different things to different people. What does it mean to you?";
    } else if (normalizedInput.includes("i am sad") || normalizedInput.includes("i feel sad")) {
        return "I'm sorry to hear that. Would you like to talk about it?";
    } else if (normalizedInput.includes("i am stressed") || normalizedInput.includes("i feel stressed")) {
        return "I'm here to listen. Sometimes talking about stress can help relieve it.";
    } else if (normalizedInput.includes("do you understand me")) {
        return "I try my best! I'm here to listen and respond to what you share.";
    } else if (normalizedInput.includes("can you keep a secret")) {
        return "You can tell me anything; I'm here to listen without judgment.";
    } else if (normalizedInput.includes("do you dream")) {
        return "I don't dream, but I’m always here to listen to yours.";
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

// Event listener for the "Send" button
document.getElementById("send-button").addEventListener("click", sendMessage);
