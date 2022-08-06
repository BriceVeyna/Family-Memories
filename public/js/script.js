//function to create a new file
const newFile = async (event) => {
  event.preventDefault();

  const fileName = document.querySelector("#file-name").value.trim();
  const fileDescription = document
    .querySelector("#file-description")
    .value.trim();
  const fileUrl = document.querySelector("#file-url").value.trim();

  if (fileName && fileDescription && fileUrl) {
    const response = await fetch("/api/file", {
      //need different route?
      method: "POST",
      body: JSON.stringify({ fileName, fileDescription, fileUrl }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/family");
    } else {
      alert(response.statusText);
    }
  }
};

// button to submit file
document.querySelector(".file-btn").addEventListener("submit", newFile);

//function to create a new family
const newFamily = async (event) => {
    event.preventDefault();
  
    const familyName = document.querySelector("#family-name").value.trim();
  
    if (familyName) {
      const response = await fetch("/api/fileFamily", {
        //need different route?
        method: "POST",
        body: JSON.stringify({ familyName }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/api/family");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // button to submit family
  document.querySelector(".family-btn").addEventListener("submit", newFamily);
  
  //function to create a new comment
  const newComment = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector("#comment-text").value.trim();
  
    if (commentText) {
      const response = await fetch("/api/file/comment", {
        //need different route?
        method: "POST",
        body: JSON.stringify({ commentText }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/api/file");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // button to submit comment
  document.querySelector(".comment-btn").addEventListener("submit", newComment);