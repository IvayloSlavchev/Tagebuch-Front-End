const createButton = document.getElementById('options-button-create');
const readButton = document.getElementById('options-button-read');
const updateButton = document.getElementById('options-button-update');
const deleteButton = document.getElementById('options-button-delete');


//Reviews
const userReviewClass = document.querySelector('.user-review');

//Hamburger menu
const mainMenu = document.querySelector('.student-options-ul');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-104%';
}

createButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './CreateNotebook/createNotebook.html'
})
readButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './ReadNotebook/Readnotebook.html'
})
updateButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './UpdateNotebook/updateNotebook.html'
})
deleteButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './DeleteNotebook/DeleteNotebook.html'
})

function usersReviews() {

    fetch('https://tagebuch-api-production.onrender.com/reviews')
        .then(async (reviewSection) => {
            const componentDiv = document.createElement('div');
            componentDiv.className = 'components';
            const username = document.createElement('h3');
            const role = document.createElement('p');
            const review = document.createElement('p');


            const userReviews = await reviewSection.json();
            console.log(userReviews)
            if (userReviews.length == 0) {
                const noCommentsTextMessage = document.createElement('h3');
                const NoCommentDiv = document.createElement('div');
                noCommentsTextMessage.setAttribute('id', 'noCommentsTextMessage');
                noCommentsTextMessage.innerText = 'No reviews yet...Be the first one :)'

                NoCommentDiv.className = 'noCommentDiv'
                NoCommentDiv.appendChild(noCommentsTextMessage);
                userReviewClass.appendChild(NoCommentDiv);
                return;
            }
            userReviews.map((item) => {
                username.innerText = item.username;
                review.innerText = item.userReview;
            })

            componentDiv.append(username, review);
            userReviewClass.append(componentDiv);
        })
}
usersReviews();