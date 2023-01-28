const deleteButton = document.getElementById('delete-notebook');
const errorMessage = document.getElementById('error-message')

deleteButton.addEventListener('click', () => {
    const notebookName = document.getElementById('deleteNotebook').value;

    let data = { notebookName };
    let options = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch(`https://tagebuch-api-production.onrender.com/notebookrecords/${notebookName}`, options)
    .then(response => {
        if(response.status != 404){
            window.location.href = '../studentPage.html'
        } else {
            errorMessage.innerText = 'Notebook name not provided'
        }   
    })
})