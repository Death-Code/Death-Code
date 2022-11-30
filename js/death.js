// ANIMATION
const element = document.getElementById('flash');
setTimeout(animation, 6000)

function animation() {
    element.classList.add('animate__animated', 'animate__flash', 'animate__repeat-3')
}



//GAME

//ASSIGN RANDOM NUMBER TO A RANDOM PLAYER KEY NAME
let playerNumber = Math.floor(Math.random() * localStorage.length) + 1
let playerName = () => {
    let players = []
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i))
        players.push(localStorage.getItem(localStorage.key(i)));
    }
    console.log(players, players.length)
    localStorage.removeItem('name' + playerNumber)
    return players[playerNumber]
}



//ADD PLAYER NO THE DEATH SCREEN
let flash = document.createElement('p')
flash.innerHTML = '-' + playerName()
document.querySelector('#flash').appendChild(flash)


//ASSIGN DEATH CHOOSEN
const death = sessionStorage.getItem('death')



//CONDITION TO CONTINUE PLAYING OR END GAME
const killButton = document.querySelector('#kill')

killButton.addEventListener('click', () => {
    if (localStorage.length === 1) {
        //cleanStorage()
        kill.href = 'final.html'
    } else {
        //cleanStorage()
        kill.href = 'game.html'
    }
})


//REMOVE PLAYER FROM STORAGE AND RESET DEATH
// function cleanStorage() {
//     localStorage.removeItem('name' + playerNumber)
//     sessionStorage.removeItem('name' + playerNumber)
// }



