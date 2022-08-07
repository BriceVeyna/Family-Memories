// reroutes homepage to filepage 
const filePage = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/file/:${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace(`/api/file/:${id}`);
    } else {
      alert('Failed to open file.');
    }
  }
};

// button to route to file page
const openFile = document.getElementById('file-name');
if(openFile){
  openFile.addEventListener('click', filePage);
}

// creates a new file
const newFile = async (event) => {
  event.preventDefault();

  const fileName = document.querySelector('#inputFileName').value.trim();
  const fileDescription = document.querySelector('#inputFileDescription').value.trim();
  const fileUrl = document.querySelector('#inputFileURL').value.trim();

  if (fileName && fileDescription && fileUrl) {
    const response = await fetch(`/api/file`, {
      method: 'POST',
      body: JSON.stringify({ fileName, fileDescription, fileUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create new file.');
    }
  }
};
//submit button to create a new file
const newFileButton = document.getElementById('new-file-button');
if(newFileButton){
  newFileButton.addEventListener('click', newFile);
}