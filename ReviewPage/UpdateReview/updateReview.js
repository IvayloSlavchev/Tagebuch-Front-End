const submitReview = document.getElementById('updateReview');
const errorMessage = document.getElementById('error-message');

submitReview.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const userReview = document.getElementById('reviewBody').value;

    const usernameFromLocalStorage = localStorage.getItem('username');
    
    if(username !== usernameFromLocalStorage){
        errorMessage.innerText = "You can't update other's people comments."
        return;
    }
    
    const data = { username, userReview };

    let options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch('https://tagebuch-api-production.onrender.com/reviews', options)
    .then((response) => {
        if(response.status === 404){
            errorMessage.innerText = 'An error has occured. Please try again.'
            return;
        } else {
            window.location.href = '/FrontEnd/StudentPage/studentPage.html';
        }
    })
})