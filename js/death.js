// ANIMATION
const element = document.getElementById('flash');
setTimeout(animation, 6000)

function animation() {
    element.classList.add('animate__animated', 'animate__flash', 'animate__repeat-3')
}

//GAME
//RANDOM PLAYER TO KILL
let randomPlayerName = () => {
    let randomPlayer = Math.floor(Math.random() * localStorage.length) + 1
    if (randomPlayer === localStorage.length) {
        return localStorage.length - 1
    }
    return randomPlayer
}
console.log(randomPlayerName())
let playerKilled = localStorage.getItem('name' + randomPlayerName())
console.log(playerKilled)

//ADD PLAYER NO THE DEATH SCREEN
let flash = document.createElement('p')
flash.innerHTML = '-' + playerKilled
document.querySelector('#flash').appendChild(flash)

//REMOVE PLAYER FROM STORAGE
localStorage.removeItem('name' + randomPlayerName())
sessionStorage.removeItem('name' + randomPlayerName())

//FINAL SCREEN
const kill = document.querySelector('#kill')

kill.addEventListener('click', () => {
    if (localStorage.length < 2) {
        kill.href = 'final.html'
    } else {
        kill.href = 'game.html'
    }
})