const menu = document.querySelector('.menu');

function clickMenu() {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}

function fecharMenu() {
    menu.style.display = 'none'
}