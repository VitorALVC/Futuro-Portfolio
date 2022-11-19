let btn = document.querySelector('#versenha')
let btnConfirme = document.querySelector('#verconfirmesenha')
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let confirmesenha = document.querySelector('#confirmesenha')
let labelConfirmesenha = document.querySelector('#labelConfirmesenha')
let mensagemErro = document.querySelector('#msgError')
let mensagemSucesso = document.querySelector('#msgSucess')
let validNome = false
let validUsuario = false
let validSenha = false
let validConfirmesenha = false
let acessoSistema = document.querySelector('.modal-login')

//Eventos para o campo nome

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelNome.innerHTML ='<i class="icones-login fa fa-address-card"></i>Nome "Insira no minimo 3 caracteres"'
        nome.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelNome.innerHTML = '<i class="icones-login fa fa-address-card"></i>Nome'
        nome.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validNome = true
    }
})

nome.addEventListener('keyup', () => {
    if(nome.value.length == "") {
        labelNome.setAttribute('style', 'color: rgb(211, 58, 58)',)
        labelNome.innerHTML ='<i class="icones-login fa fa-address-card"></i>Nome vazio, insira dados para continuar'
        validNome = false
    }
})

//Eventos para o campo usuário

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelUsuario.innerHTML ='<i class="icones-login fa fa-user"></i>Usuário "Insira no minimo 5 caracteres"'
        usuario.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelUsuario.innerHTML = '<i class="icones-login fa fa-user"></i>Usuário'
        usuario.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validUsuario = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length == "") {
        labelUsuario.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelUsuario.innerHTML ='<i class="icones-login fa fa-user"></i>Usuário vazio, insira dados para continuar'
        validUsuario = false
    }
})

//Eventos para o campo senha

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelSenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Senha "Insira no minimo 6 caracteres"'
        senha.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelSenha.innerHTML = '<i class="icones-login fa fa-lock"></i>Senha'
        senha.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validSenha = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length == "") {
        labelSenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelSenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Senha vazio, insira dados para continuar'
        validSenha = false
    }
})

//Eventos para o campo confirme senha

confirmesenha.addEventListener('keyup', () => {
    if(senha.value != confirmesenha.value) {
        labelConfirmesenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelConfirmesenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Confirme Senha "As senhas não conferem"'
        confirmesenha.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validConfirmesenha = false
    } else {
        labelConfirmesenha.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelConfirmesenha.innerHTML = '<i class="icones-login fa fa-lock"></i>Confirme Senha'
        confirmesenha.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validConfirmesenha = true
    }
})

confirmesenha.addEventListener('keyup', () => {
    if(confirmesenha.value.length == "") {
        labelConfirmesenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelConfirmesenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Confirme senha vazio, insira dados para continuar'
        confirmesenha.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validConfirmesenha = false
    }
})

senha.addEventListener('keyup', () => {
    if(confirmesenha.value != senha.value) {
        labelConfirmesenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelConfirmesenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Confirme Senha "As senhas não conferem"'
        confirmesenha.setAttribute('style', 'border-color: rgb(211, 58, 58)')
        validConfirmesenha = false
    }  else {
        labelConfirmesenha.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelConfirmesenha.innerHTML = '<i class="icones-login fa fa-lock"></i>Confirme Senha'
        confirmesenha.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validConfirmesenha = true
    }
})

//Eventos para o botão de cadastrar usuário

function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmesenha) {
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        listaUsuario.push(
            {
                nomeCad: nome.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
        
        mensagemSucesso.setAttribute('style', 'display:block')
        mensagemSucesso.innerHTML = 'Cadastrando usuário...'
        mensagemErro.setAttribute('style', 'display:none')
        setTimeout(() => {
            mensagemSucesso.innerHTML = 'Usuário cadastrado'
            acessoSistema.setAttribute('style', 'display:flex')
        }, 5000)
            
    
    } else {
        mensagemErro.setAttribute('style', 'display:block')
        mensagemErro.innerHTML = 'Preencha todos os campos corretamente'
        mensagemSucesso.setAttribute('style', 'display:none')
    }
}


//Evento de mostrar e esconder os dados do campo senha

btn.addEventListener('click',()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        btn.setAttribute('style', 'color: rgb(211, 58, 58)')
    } else {
        inputSenha.setAttribute('type', 'password')
        btn.setAttribute('style', 'color: rgb(35, 129, 129)')
    }
})

//Evento de mostrar e esconder os dados do campo confirme senha

btnConfirme.addEventListener('click',()=> {
    let inputConfirmeSenha = document.querySelector('#confirmesenha')

    if(inputConfirmeSenha.getAttribute('type') == 'password') {
        inputConfirmeSenha.setAttribute('type', 'text')
        btnConfirme.setAttribute('style', 'color: rgb(211, 58, 58)')
    } else {
        inputConfirmeSenha.setAttribute('type', 'password')
        btnConfirme.setAttribute('style', 'color: rgb(35, 129, 129)')
    }
})

function sim() {
    window.location.href = 'login/login.html'
}

function nao() {
    window.location.href = 'cadastro.html'
}