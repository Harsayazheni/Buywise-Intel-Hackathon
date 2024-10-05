function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatWindow = document.getElementById("output");
    
    if (userInput) {
        const userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatWindow.appendChild(userMessage);
        
        const botReply = document.createElement("div");
        botReply.classList.add("bot-message");
        botReply.innerHTML = `<p>Processing your inquiry...</p>`;
        chatWindow.appendChild(botReply);
        
        document.getElementById("user-input").value = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
const texts = [
    "AI Powered Product Inquiry Chatbot",
    "Your Personal Assistant for Product Queries",
    "Get Instant Answers to Your Questions",
    "Explore Our Wide Range of Products",
];

let currentIndex = 0;
const textElement = document.getElementById('autoplay-text');

// Function to type out each letter of the text
function typeText(text) {
    textElement.textContent = ""; // Clear the current text
    let letterIndex = 0; // Reset letter index

    const interval = setInterval(() => {
        if (letterIndex < text.length) {
            textElement.textContent += text[letterIndex]; // Add one letter at a time
            letterIndex++;
        } else {
            clearInterval(interval); // Stop when done typing
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length; // Move to the next index
                typeText(texts[currentIndex]); // Start typing the next text
            }, 2000); // Pause for 2 seconds before starting the next text
        }
    }, 150); // Adjust this value for typing speed
}

// Start typing the first text
typeText(texts[currentIndex]);


