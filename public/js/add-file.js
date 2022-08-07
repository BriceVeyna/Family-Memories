// function newFilePage() {
//   document.location.replace("/");
// }

// const addFileButton = document.getElementById("new-file-button");
// if (addFileButton) {
//   addFileButton.addEventListener("click", newFilePage);
// }


// reroutes homepage to filepage 
const newFilePage = async () => {
    const response = await fetch(`/api/file`, {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace(`/api/file`);
    } else {
      alert('Failed to create file.');
    }
};

// button to route to file page
const openFileForm = document.getElementById('new-file-button');
if(openFileForm){
  openFileForm.addEventListener('click', newFilePage);
}