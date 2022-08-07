// //function to create a new comment
// const newComment = async (event) => {
//     event.preventDefault();
  
//     const commentText = document.querySelector("#comment-text").value.trim();
  
//     if (commentText) {
//       const response = await fetch("/api/file/comment", {
//         //need different route?
//         method: "POST",
//         body: JSON.stringify({ commentText }),
//         headers: { "Content-Type": "application/json" },
//       });
  
//       if (response.ok) {
//         document.location.replace("/api/file");
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  
//   // button to submit comment
//   document.querySelector(".comment-btn").addEventListener("submit", newComment);