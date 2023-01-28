const submitReview = document.getElementById('submitReview');
const errorMessage = document.getElementById('error-review');

submitReview.addEventListener('click', (event) => {
    event.preventDefault();
    const reviewTitle = document.getElementById('reviewTitle').value;
    const userReview = document.getElementById('reviewBody').value;

    if(reviewTitle == '' || reviewBody == ''){
        errorMessage.innerText = 'You have to enter some review in order to post it.'
        return;
    }
    
    const username = localStorage.getItem('username');

    const data = { username, reviewTitle, userReview }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch('https://tagebuch-api-production.onrender.com/reviews', options)
    .then(response => {
        console.log(response.status)
        if(response.status == 409){
            errorMessage.innerText = 'An error has occured! Please try again.';
            return;
        } else {
            window.location.href = '../StudentPage/studentPage.html';
        }
    })
})