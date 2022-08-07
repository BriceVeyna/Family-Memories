// reroutes homepage to filepage 
const filePage = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/file/${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      document.location.replace(`/api/file/${id}`);
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