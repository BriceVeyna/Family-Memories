// reroutes homepage to individual filepage when file title is clicked
const filePage = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/file/${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace(`/file/${id}`);
    } else {
      alert('Failed to open file.');
    }
  }
};

// button for file title
const openFile = document.getElementById('file-name');
if(openFile){
  openFile.addEventListener('click', filePage);
}

// reroutes homepage to fileform page when Add File is clicked
const addFile = async () => {
  const response = await fetch(`/file`, {
    method: 'GET',
  });

  if (response.ok) {
    document.location.replace(`/file`);
  } else {
    alert('Failed to create file.');
  }
};

// button for Add File
const openFileForm = document.getElementById('add-file-button');
if(openFileForm){
openFileForm.addEventListener('click', addFile);
}

//function to create a new file using user input
const newFile = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#inputFileName').value.trim();
  const description = document.querySelector('#inputFileDescription').value.trim();
  const url = document.querySelector('#inputFileUrl').value.trim();
  
  if (name && description && url) {
    const response = await fetch(`/file`, {
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