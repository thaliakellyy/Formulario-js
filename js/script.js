const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(nameInput.value === ''){
        alert('Por favor digite seu nome.');
        return
    }

    if(emailInput === '' || !isEmailValid(emailInput.value)){
        alert('Por favor digite seu E-mail.');
        return;
    }

    if(passwordInput.value.length <= 7){
        alert('por favor a senha precisa ter mais de 7 digitos')
       return
    }
   
    form.submit()
    
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );

    if(emailRegex.test(email)){
        return true;
    }
    
    return false;
    
}


