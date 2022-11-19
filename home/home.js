//Caso o usuário não esteja mais com o token de validação para estar logado, o mesmo é direcionado para a página de login

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../login/login.html'
}

//Realiza a abertura e fechamento do menu lateral

const botaoMenu = document.querySelector('.icone-menu-lateral')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-click')
});

//Mostra o usuário que está logado no momento

let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = userLogado.nome

//Desconecta o usuário e realiza a limpeza do token e do usuário que estava logado

function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../login/login.html'
}

//Realiza a abertura e fechamento das opções do usuário no menu

const UsuarioMenu = document.querySelector('.usuario-conectado')
const MenuOpcoesUsuarios = document.querySelector('.sub-menu-usuario')

UsuarioMenu.addEventListener('click', () => {
    MenuOpcoesUsuarios.classList.toggle('sub-menu-usuario-click')
});

//Direciona o usuário para a tela de cadastro de usuário

function usuarios() {
    window.location.href ='../CadUsuarios/CadUsuarios.html'
}