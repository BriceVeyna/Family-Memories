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

