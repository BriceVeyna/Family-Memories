//function to create a new comment
const newComment = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector("#comment-text").value.trim();

  if (commentText) {
    const response = await fetch("/file", { // add id after file
      method: "POST",
      body: JSON.stringify({ commentText }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("comment working");
      document.location.replace("/file"); // add id after file
    } else {
      alert(response.statusText);
    }
  }
};

// button to submit comment
const newCommentButton = document.getElementById("comment-button");
if (newCommentButton) {
  newCommentButton.addEventListener("click", newComment);
}
