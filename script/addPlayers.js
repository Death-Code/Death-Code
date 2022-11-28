const add = document.getElementById('add')
let addClicked = 0

add.addEventListener('click', () => {
    let newInput = document.createElement('p')
    let playerName = document.getElementById('input').value
    newInput.innerHTML = '< ' + playerName + ' >'
    document.getElementById('terminal').appendChild(newInput)

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '| delete'
    deleteButton.className = 'delete-button'
    document.getElementById('terminal').appendChild(deleteButton)
})