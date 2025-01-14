const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const cadastroNome = document.getElementById('inputNome');
    const cadastro_nome = cadastroNome.value;
    const cadastroEmail = document.getElementById('inputEmail');  
    const cadastro_email = cadastroEmail.value;  
    const cadastroSenha = document.getElementById('inputSenha');  
    const cadastro_senha = cadastroSenha.value; 
    const cadastroSenhaVerificar = document.getElementById('inputSenhaVerificar');
    const cadastro_senha_verificar = cadastroSenhaVerificar.value; 

    const erro_nome = document.getElementById('erro-nome');
    const erro_email = document.getElementById('erro-email');
    const erro_senha = document.getElementById('erro-senha');
    const erro_senha_verificar = document.getElementById('erro-senha-verificar');


    const caracteres_especiais = /[./-_^]/;
    const letraMaiscula = /[A-Z]/;
    const numero = /[0-9]/;
    let valido = true;

    if(cadastro_nome.trim() === ''){
        erro_nome.textContent = 'Campo Obrigatório';
        erro_nome.style.visibility = 'visible'; 
        cadastroNome.style.borderColor = '#fffb00';
        valido = false;
    }else{
        erro_nome.style.visibility = 'hidden';
        cadastroNome.style.borderColor = '';
    }

    if(cadastro_email.trim() === ''){
        erro_email.textContent = 'Campo Obrigatório';
        erro_email.style.visibility = 'visible'; 
        cadastroEmail.style.borderColor = '#fffb00';
        valido = false;
    }else{
        erro_email.style.visibility = 'hidden';
        cadastroEmail.style.borderColor = '';
    }

    if(cadastro_senha.trim() === ''){
        erro_senha.textContent = 'Campo Obrigatório';
        erro_senha.style.visibility = 'visible';
        cadastroSenha.style.borderColor = '#fffb00';

        valido = false;
    }else if(cadastro_senha.length < 8){
        erro_senha.textContent = 'Mínimo 8 caracteres';
        erro_senha.style.visibility = 'visible';
        cadastroSenha.style.borderColor = '#fffb00';

        valido = false;
    }else if(!caracteres_especiais.test(cadastro_senha)){
        erro_senha.textContent = 'No mínimo um caracter especial';
        erro_senha.style.visibility = 'visible';
        cadastroSenha.style.borderColor = '#fffb00';

        valido = false;
    }else if(!letraMaiscula.test(cadastro_senha)){
        erro_senha.textContent = 'Mínimo uma letra maíuscula';
        erro_senha.style.visibility = 'visible';
        cadastroSenha.style.borderColor = '#fffb00';

        valido = false;
    }else if(!numero.test(cadastro_senha)){
        erro_senha.textContent = 'Mínimo um número';
        erro_senha.style.visibility = 'visible';
        cadastroSenha.style.borderColor = '#fffb00';

        valido = false;
    }else{
        erro_senha.style.visibility = 'hidden';
        cadastroSenha.style.borderColor = '';
    }

    if(cadastro_senha_verificar.trim() === ''){
        erro_senha_verificar.textContent = 'Campo Obrigatório';
        erro_senha_verificar.style.visibility = 'visible';
        cadastroSenhaVerificar.style.borderColor = '#fffb00';

        valido = false;
    }else if(cadastro_senha_verificar !== cadastro_senha){
        erro_senha_verificar.textContent = 'Senhas diferentes';
        erro_senha_verificar.style.visibility = 'visible';
        cadastroSenhaVerificar.style.borderColor = '#fffb00';

        valido = false;
    }else{
        erro_senha_verificar.style.visibility = 'hidden';
        cadastroSenhaVerificar.style.borderColor = '';
    }

    if(valido){
        cadastroNome.value = '';
        cadastroSenha.value = '';
        cadastroEmail.value = '';
        cadastroSenhaVerificar.value = '';
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

function visibilidade2() {
    event.preventDefault();

    const campoSenhaVerificar = document.getElementById('inputSenhaVerificar'); 
    const botao = document.querySelector('.verifica');

    if(campoSenhaVerificar.type === 'password'){
        campoSenhaVerificar.type = 'text';
        botao.textContent = 'visibility';
    }else{
        campoSenhaVerificar.type = 'password';
        botao.textContent = 'visibility_off';
    }
}   