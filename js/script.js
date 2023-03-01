const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInput()
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordTwoValue = passwordTwo.value.trim();

    if(usernameValue === '' ){
        validationError(username, 'Preencha esse campo');
    }else{
        validationSuccess(username)
    }

    if(emailValue === '' ){
        validationError(email, 'Preencha esse campo');
    }else{
        validationSuccess(email)
    }

    if(passwordValue === '' ){
        validationError(password, 'Preencha esse campo');
    }else{
        validationSuccess(password)
    }

    if(passwordTwoValue === '' ){
        validationError(passwordTwo, 'Preencha esse campo');
    }else{
        validationSuccess(passwordTwo)
    }

    




}

function validationError(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = msg
    formControl.className = 'form-control error';
    console.log(formControl)
}

function validationSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}


