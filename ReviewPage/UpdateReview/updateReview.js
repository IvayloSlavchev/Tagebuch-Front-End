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
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }

    fetch('https://tagebuch-test-api.onrender.com/reviews', options)
    .then((response) => {
        if(response.status === 404){
            errorMessage.innerText = 'An error has occured. Please try again.'
            return;
        } else {
            window.location.href = '../../StudentPage/studentPage.html';
        }
    })
})