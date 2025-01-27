const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue =confirmacaoSenha.value;

    if (usernameValue === ''){
        setErrorFor(username, 'O Nome de Usuário é Obrigatório!')
    } else {
        setSuccessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, 'O seu Email é Obrigatório!')
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A Senha é Obrigatória!");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A Confirmação de sua senha é obrigatória.");
      } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Digite sua Senha Novamente");
      } else {
        setSuccessFor(passwordConfirmation);
    }
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.QuerrySelector('small');

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}
