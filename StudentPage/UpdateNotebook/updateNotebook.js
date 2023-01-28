const editButton = document.getElementById('edit-notebook');
const errorMessage = document.getElementById('error-message')

editButton.addEventListener('click', (event) => {
    event.preventDefault();

    let notebookName = document.getElementById('notebookName').value
    let notebookDescription = document.getElementById('description').value
    let notebookTexts = document.getElementById('notebookTexts').value;
    const data = { notebookName, notebookDescription, notebookTexts };

    let options = {
        method: 'PUT',
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
            errorMessage.innerText = 'No notebook name provided'
        }
    })
})