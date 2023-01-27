const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');


loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = { username, email, password };

    const validPassword = password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)

    if (!validPassword) {
        res.status(409).send('Password should contain: Upper case, lower case letter and have special symbol with at least 8 characters.')
        return;
    }


    if(!username || !email || !password){
        errorMessage.innerText = 'Cannot send empty input field';
        windowReload();
        return;
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch('https://tagebuch-test-api.onrender.comusers/login', options).then((response) => {
        if(response.status === 200){
            window.location.href = '../../StudentPage/studentPage.html';
            localStorage.setItem('username', username)

        } else if(response.status == 404){
            errorMessage.innerHTML = 'Invalid username/email or password';
            windowReload();
        }
    });
});
function windowReload(){
    setTimeout(() => {
        window.location.reload();
    }, 2000);
}
