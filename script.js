
const form = document.getElementById("form");
const username = document.getElementById("usarname");
const email = document.getElementById("email");
const passoward = document.getElementById("passoword");
const passowardConfimation = document.getElementById("passoward-confirm");

form.addEventListener('submit', (e) => {
   e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passowardValue = passoward.value;
    const passowordConfimationValue = passowardConfimation.value;

    if (usernameValue === ""){
        setErrorFor(username, "O nome do usuário é obrigatório.");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = "form_control error" 
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}