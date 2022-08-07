// reroutes homepage to filepage using "add file" button
const addFile = async () => {
  const response = await fetch(`/api/file`, {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace(`/api/file`);
  } else {
    alert('Failed to create file.');
  }
};

// button to route to "add file" page
const openFileForm = document.getElementById('add-file-button');
if(openFileForm){
openFileForm.addEventListener('click', addFile);
}





// function newFilePage() {
//   document.location.replace("/");
// }

// const addFileButton = document.getElementById("new-file-button");
// if (addFileButton) {
//   addFileButton.addEventListener("click", newFilePage);
// }

//function to create a new file
const newFile = async (event) => {
event.preventDefault();

const name = document.querySelector('#inputFileName').value.trim();
const description = document.querySelector('#inputFileDescription').value.trim();
const url = document.querySelector('#inputFileUrl').value.trim();

if (name && description && url) {
  const response = await fetch(`/api/file`, {
    method: 'POST',
    body: JSON.stringify({ name, description, url }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to create project');
  }
}
};

//button to submit new file
const newFileButton = document.getElementById('new-file-button');
if(newFileButton){
newFileButton.addEventListener('click', newFile);
}