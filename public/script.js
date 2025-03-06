const socket = new WebSocket("ws://localhost:3000");
const username = localStorage.getItem("username");

if (!username) {
    window.location.href = "auth.html"; // Redirect to login if not authenticated
}

const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messagesDiv = document.getElementById("messages");

sendBtn.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.send(JSON.stringify({ username, text: message }));
        messageInput.value = "";
    }
});

socket.onmessage = (event) => {
    const { username, text } = JSON.parse(event.data);
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${username}:</strong> ${text}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "auth.html";
});
