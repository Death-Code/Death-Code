//TERMINALS CONST
const terminal1 = document.getElementById('terminal1')
const terminal2 = document.getElementById('terminal2')
const terminal3 = document.getElementById('terminal3')
const terminal4 = document.getElementById('terminal4')

//ASSIGN RANDOM DEATH TO TERMINALS
terminal1.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    localStorage.setItem('death', randomDeath)
    console.log(localStorage)
})
terminal2.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    localStorage.setItem('death', randomDeath)
})
terminal3.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    localStorage.setItem('death', randomDeath)
})
terminal4.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    localStorage.setItem('death', randomDeath)
})