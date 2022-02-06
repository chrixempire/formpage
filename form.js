const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    // get the values from the inputs 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
   const passwordValue =  password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        // add error class
        setErrorFor(username, 'username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }
    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank');
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid');
    } else{
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password, 'password cannot be blank');
    } else {
        // add success class
        setSuccessFor(password);
    }
    if(password2Value === ''){
        setErrorFor(password2, 'password2 cannot be blank');
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'passwords does not match');
    }
    else {
        // add success class
        setSuccessFor(password2);
    }


}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement; // form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

