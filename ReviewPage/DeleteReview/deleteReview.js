const deleteButton = document.getElementById('deleteReview');
const errorMessage = document.getElementById('error-message');

deleteButton.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const userReview = document.getElementById('reviewBody').value;

    if (username == '' || userReview == '') {
        errorMessage.innerText = 'You can\'t provide an empty input';
        return;
    }

    const data = { username, userReview }

    let options = {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const usernameFromLocalHost = localStorage.getItem('username');

    if (username != usernameFromLocalHost) {
        errorMessage.innerText = 'You can\'t delete other\'s people comments'
        return;
    }

    fetch(`https://tagebuch-api-production.onrender.com/reviews`, options)
        .then((response) => {
            if (response.status === 404) {
                errorMessage.innerText = 'Username not found';
                return;
            } else {
                window.location.href = '../StudentPage/studentPage.html';
            }
        })
})