const searchNotebookButton = document.getElementById('searchNotebook');
const mainClass = document.querySelector('.main-class');
const errorMessage = document.getElementById('error-message')

searchNotebookButton.addEventListener('click', () => {
    let notebookName = document.getElementById('notebookName').value
    const notebookReadClass = document.createElement('div')
    const notebookTitle = document.createElement('h1');
    const notebookDescription = document.createElement('p');
    const notebookTexts = document.createElement('p');

    if (notebookName == '') {
        errorMessage.innerText = 'No notebook name provided'
        return;
    }

    if (searchNotebookButton.textContent == 'Search notebook') {
        searchNotebookButton.textContent = 'Stop reading'
        fetch(`https://tagebuch-api-production.onrender.com/notebookrecords/1`).then((response) => {
            return response.json();
        }).then((data) => {
            data.map((item) => {
                if(notebookName != item.notebookName){
                    errorMessage.innerText = 'Notebook not found';
                    return;
                }

                if (notebookName == item.notebookName) {
                    notebookReadClass.className = 'notebook-read'

                    notebookTitle.innerText = item.notebookName;
                    notebookTitle.setAttribute('id', 'notebookTitle')

                    notebookTexts.innerText = item.notebookTexts
                    notebookTexts.setAttribute('id', 'notebookRecords')

                    notebookReadClass.append(notebookTitle, notebookDescription, notebookTexts)
                    mainClass.appendChild(notebookReadClass);
                    document.getElementById('notebookName').disabled = true;
                }
            })
        })
    } else if (searchNotebookButton.textContent == 'Stop reading') {
        document.getElementById('notebookName').disabled = false;
        searchNotebookButton.textContent = 'Search notebook'
        window.location.reload();
        mainClass.remove(notebookReadClass)
    }
})