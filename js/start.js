const logo = document.getElementById('logo')
const inst = document.getElementById('inst')
inst.classList.add

function hideShow() {
    logo.classList.add('inactive')
    inst.classList.remove('inactive')
    inst.classList.add('animate__animated')
    inst.classList.add('animate__fadeIn')
    inst.classList.add('animate__fadeIn')
}
setTimeout(hideShow, 13000)