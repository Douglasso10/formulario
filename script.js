
const form = document.getElementById("form");
const username = document.getElementById("username"); 
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfimation = document.getElementById("password-confirm");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfimationValue = passwordConfimation.value;

    if (usernameValue === ""){
         setErrorFor(username, "O nome do usuário é obrigatório.");
    }else {
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email, "O E-mail é obrigatório.");
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, "O email é inválido.")
    }

   if(passwordValue ===""){
        setErrorFor(password, "A senha é obrigatória.")
   }else if (passwordValue.length < 6){
        setErrorFor(password, "A senha precisa no mínimo de 6 caracteres.")
   }else{
        setSuccessFor(password)
   }
   if(passwordConfimationValue === ""){
        setErrorFor(passwordConfimation, "A confirmação de senha é obrigatória.")
   }else if( passwordConfimationValue != passwordValue){
        setErrorFor(passwordConfimation, "As senhas não conferem.")
   }else{
        setSuccessFor(passwordConfimation)
   } 

}      

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form-control error" 
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail (email){
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
}

