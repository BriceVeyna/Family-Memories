//function to create a new comment
const newComment = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector("#comment-text").value.trim();
  // console.log(commentText)

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    if (commentText) {
      const response = await fetch(`/file/${id}`, {
        method: "POST",
        body: JSON.stringify({ commentText }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace(`/file/${id}`);
        // console.log(commentText + 'testing')
      } else {
        alert(response.statusText);
      }
    }
  }
};

// button to submit comment
const newCommentButton = document.getElementById("comment-button");
if (newCommentButton) {
  newCommentButton.addEventListener("click", newComment);
}
