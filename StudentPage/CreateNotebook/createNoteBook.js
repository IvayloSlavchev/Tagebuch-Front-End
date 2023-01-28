const createNotebookButton = document.getElementById('create-notebook')
const errorMessage = document.getElementById('error-message')

createNotebookButton.addEventListener('click', (event) => {
    event.preventDefault();
    const notebookName = document.getElementById('notebookName').value;
    const notebookDescription = document.getElementById('description').value;
    const notebookTexts = document.getElementById('notebookTexts').value;
    const ownedBy = document.getElementById('ownedBy').value;
    
    if(notebookName.length < 3){
        errorMessage.innerHTML = 'Notebook name should be at least 3 characters long.'
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        return;
    }

    const data = { notebookName, notebookDescription, notebookTexts, ownedBy };
    

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch('https://tagebuch-api-production.onrender.com/notebookrecords/', options)
    .then(response => {
        if(response.status === 409){
            errorMessage.innerText = 'Notebook name already exists. Try to put you name in front of notebook name';
            return;
        } else {
            window.location.href = '../studentPage.html';
        }
    })
})