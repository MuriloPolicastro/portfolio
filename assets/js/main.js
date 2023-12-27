const menu = document.querySelector('.menu');
const body = document.querySelector('#body');
const larguraTela = window.innerWidth;


function clickMenu() {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
        body.style.overflowY = 'scroll';
    } else {
        menu.style.display = 'flex';
        body.style.overflowY = 'hidden';
    }
}

function fecharMenu() {
    menu.style.display = 'none';
}