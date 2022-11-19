let btn = document.querySelector('.fa-eye-slash')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let labelUsuario = document.querySelector('#userLabel')
let labelSenha = document.querySelector('#senhaLabel')
let validUsuario = false
let validSenha = false

btn.addEventListener('click',()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        btn.setAttribute('style', 'color:#ff0000')
    } else {
        inputSenha.setAttribute('type', 'password')
        btn.setAttribute('style', 'color:#103D4A')
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length == "") {
        labelUsuario.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelUsuario.innerHTML ='<i class="icones-login fa fa-user"></i>Usuário vazio, insira dados para continuar'
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelUsuario.innerHTML = '<i class="icones-login fa fa-user"></i>Usuário'
        usuario.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length == "") {
        labelSenha.setAttribute('style', 'color: rgb(211, 58, 58)')
        labelSenha.innerHTML ='<i class="icones-login fa fa-lock"></i>Senha vazio, insira dados para continuar'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: rgb(77, 199, 199)')
        labelSenha.innerHTML = '<i class="icones-login fa fa-lock"></i>Senha'
        senha.setAttribute('style', 'border-color: rgb(77, 199, 199)')
        validSenha = true
    }
})

//Ações que o botão acessar vai realizar ao ser clicado

function acessar() {
    
    //Variaveis utilizadas na função acessar

    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    let msgError = document.querySelector('#msgError')
    let msgError2 = document.querySelector('#msgError2')
    let msgAccess= document.querySelector('#msgAccess')
    let listaUser = []
    let userValid = {
        nome: '',
        user:'',
        senha:''
    }

    //Verifica os dados informados e assim realiza a inclusão dos dados na lista da variavel userValid

    listaUser = JSON.parse(localStorage.getItem('listaUsuario'))
    
    listaUser.forEach((item) => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad) {

            userValid = {
                nome: item.nomeCad,
                user: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })
    
    //Informa o usuário que os campos estão vazios e assim não realiza o acesso

    if(usuario.value.length == " " && senha.value.length == " ") {
        msgError2.setAttribute('style', 'color: red')
        msgError2.setAttribute('style', 'display:block')
        msgError2.innerHTML = 'Campos vazios, insira os dados para acessar'
        msgError.setAttribute('style', 'display:none')
        msgAccess.setAttribute('style', 'display:none')

    } else {

        //Informa o usuário que os dados informados estão incorretos e assim não realiza o acesso

        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        msgError2.setAttribute('style', 'display:none')
        msgAccess.setAttribute('style', 'display:none')
        usuario.focus()
        
        //Realiza o login caso os dados informados sejam iguais aos cadastrados

        if(usuario.value == userValid.user && senha.value == userValid.senha) {
            msgAccess.setAttribute('style', 'display:block')
            msgError.setAttribute('style', 'display:none')
            msgError2.setAttribute('style', 'display:none')
            msgAccess.innerHTML = 'Acessando...'
            setTimeout(() => {
                window.location.href = '../home/home.html'
            }, 4000)
           
            //Gera o token quando o usuário realiza o login
    
            let token = Math.random().toString(10).substring(2) + Math.random().toString(10).substring(2)
            localStorage.setItem('token', token)
    
            localStorage.setItem('userLogado', JSON.stringify(userValid))
        }
    
    }
}