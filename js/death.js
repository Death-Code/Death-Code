// ANIMACION
const element = document.getElementById('flash');
setTimeout(animation, 6000)

function animation() {
    element.classList.add('animate__animated', 'animate__flash')
}

//GAME
const flash = document.getElementsByClassName('flash')
console.log(localStorage)
let playerName = localStorage.getItem('name2')
console.log(playerName)