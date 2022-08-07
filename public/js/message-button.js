document.getElementById("message-button").addEventListener("click", chatPage)

  function chatPage() {
    document.location.replace("/api/chat")
  }