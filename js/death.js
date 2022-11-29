const element = document.getElementById('flash');
setTimeout(animation, 6000)

function animation(){
    element.classList.add('animate__animated', 'animate__flash')
}