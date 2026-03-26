// Open chatbot
document.getElementById("chatBtn").onclick = function () {
    document.getElementById("chatBox").style.display = "block";
};

// Close chatbot
function closeChat() {
    document.getElementById("chatBox").style.display = "none";
}

function openChat() {
    document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
    document.getElementById("chatBox").style.display = "none";
}

// Send message
function sendMessage() {
    let input = document.getElementById("userInput");
    let msg = input.value.trim();
    let chat = document.getElementById("chatContent");

    if (msg === "") return;

    // Show user message
    chat.innerHTML += `<p class="user-msg"><b>You:</b> ${msg}</p>`;

    // Bot reply logic
    let reply = "Sorry, I didn’t understand.";

    if (msg.toLowerCase().includes("hi") || msg.toLowerCase().includes("hello"))
        reply = "Hello! How can I assist you today?";
    else if (msg.toLowerCase().includes("help"))
        reply = "Please fill the support form for assistance.";
    else if (msg.toLowerCase().includes("doctor"))
        reply = "We will connect you with a doctor soon.";
    else if (msg.toLowerCase().includes("emergency"))
        reply = "🚑 Please call 108 immediately.";
    else if (msg.toLowerCase().includes("fever"))
        reply = "It might be a common illness. Please consult a doctor if needed.";
    else if (msg.toLowerCase().includes("thanks"))
        reply = "You're welcome! Stay healthy 😊";

    // Show bot reply after delay
    setTimeout(() => {
        chat.innerHTML += `<p class="bot-msg"><b>Bot:</b> ${reply}</p>`;
        chat.scrollTop = chat.scrollHeight;
    }, 500);

    input.value = "";
}

// Support form submission
function submitForm(e) {
    e.preventDefault();

    document.getElementById("formMsg").innerHTML =
        '<div class="alert alert-success">Request submitted successfully!</div>';
}

// Contact form submission
function contactForm(e) {
    e.preventDefault();

    document.getElementById("contactMsg").innerHTML =
        '<div class="alert alert-success">Message sent successfully!</div>';
}