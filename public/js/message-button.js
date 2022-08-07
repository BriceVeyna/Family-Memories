function chatPage() {
  document.location.replace("/api/chat");
}

const messageButton = document.getElementById("message-button");
if (messageButton) {
  messageButton.addEventListener("click", chatPage);
}
