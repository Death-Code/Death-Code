//ANIMATIONS

const element = document.querySelector(".terminal-button1");
        element.classList.add('animate__animated', 'animate__fadeInLeft', "animate__slow");
        
       
        const element1 = document.querySelector(".terminal-button2");
        element1.classList.add('animate__animated', 'animate__fadeInDown', "animate__slower");
        

        const element2 = document.querySelector(".terminal-button3");
        element2.classList.add('animate__animated', 'animate__fadeInUp', "animate__slower");
        

        const element3 = document.querySelector(".terminal-button4");
        element3.classList.add('animate__animated', 'animate__fadeInRight', "animate__slow");


//TERMINALS CONST
const terminal1 = document.getElementById('terminal1')
const terminal2 = document.getElementById('terminal2')
const terminal3 = document.getElementById('terminal3')
const terminal4 = document.getElementById('terminal4')

//ASSIGN RANDOM DEATH TO TERMINALS AND LOAD ONTO SESSION STORAGE
terminal1.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    sessionStorage.setItem('death', randomDeath)
})
terminal2.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    sessionStorage.setItem('death', randomDeath)
})
terminal3.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    sessionStorage.setItem('death', randomDeath)
})
terminal4.addEventListener('click', () => {
    let randomDeath = Math.floor(Math.random() * 4) + 1
    sessionStorage.setItem('death', randomDeath)
})