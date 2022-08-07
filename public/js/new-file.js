// function newFilePage() {
//   document.location.replace("/");
// }

// const addFileButton = document.getElementById("new-file-button");
// if (addFileButton) {
//   addFileButton.addEventListener("click", newFilePage);
// }


// reroutes homepage to filepage 
const newFilePage = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/file/${id}`, {
      method: 'POST',
    });

    if (response.ok) {
      document.location.replace(`/api/file/${id}`);
    } else {
      alert('Failed to create file.');
    }
  }
};

// button to route to file page
const openNewFile = document.getElementById('new-file-button');
if(openNewFile){
  openNewFile.addEventListener('click', newFilePage);
}