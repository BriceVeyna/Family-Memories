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
        document.location.replace('/api/file');
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