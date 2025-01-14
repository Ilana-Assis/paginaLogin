const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const loginEmail = document.getElementById('inputEmail');  
    const login_email = loginEmail.value;  
    const loginSenha = document.getElementById('inputSenha');  
    const login_senha = loginSenha.value;  

    const erro_email = document.getElementById('erro-email');
    const erro_senha = document.getElementById('erro-senha');

    let valido = true;

    if(login_email.trim() === ''){

        erro_email.textContent = 'Campo Obrigatório';
        erro_email.style.visibility = 'visible'; 
        erro_email.style.transition = '0.2s ease';
        loginEmail.style.borderColor = '#fffb00';
        valido = false;
    }else{
        erro_email.style.visibility = 'hidden';
        loginEmail.style.borderColor = '';
    }

    if(login_senha.trim() === ''){
        erro_senha.textContent = 'Campo Obrigatório';
        erro_senha.style.visibility = 'visible';
        erro_senha.style.transition = '0.2s ease';
        loginSenha.style.borderColor = '#fffb00';

        valido = false;
    }else{
        erro_senha.style.visibility = 'hidden';
        loginSenha.style.borderColor = '';
    }

    if(valido){
        loginEmail.value = '';
        loginSenha.value = '';
    }
})

function visibilidade() {
    event.preventDefault();

    const campoSenha = document.getElementById('inputSenha'); 
    const botao = document.querySelector('.btn-visibilidade');

    if(campoSenha.type === 'password'){
        campoSenha.type = 'text';
        botao.textContent = 'visibility';
    }else{
        campoSenha.type = 'password';
        botao.textContent = 'visibility_off';
    }
}