//CLEAR LOCAL STORAGE
window.addEventListener('load', () => {
    localStorage.clear()
    sessionStorage.clear()
})

let addClicked = 1
const input = document.getElementById('input')
const add = document.getElementById('add')

add.addEventListener('click', () => {
    //CREATE AN ARTICLE: PARENT
    let newArticle = document.createElement('article')
    newArticle.setAttribute('id', 'article-player' + addClicked)
    newArticle.className = 'article-player'
    document.getElementById('terminal').appendChild(newArticle)

    //ADD PLAYER NAME INTO THE ARTICLE
    let playerName = input.value
    let newPlayer = document.createElement('p')
    newPlayer.innerHTML = '< ' + playerName + ' >'

    //ADD PLAYER NAME TO LOCAL STORAGE
    localStorage.setItem('name' + addClicked, playerName)

    //ADD REMOVE BUTTON INTO THE ARTICLE
    let remove = document.createElement('button')
    remove.type = 'button'
    newArticle.setAttribute('id', 'removePlayer' + addClicked)
    remove.innerText = '|delete'
    remove.className = 'remove-button'
    remove.addEventListener('click', () => {
        newArticle.remove()
    })

    //APPEND CHILD
    document.getElementById('removePlayer' + addClicked).appendChild(newPlayer)
    document.getElementById('removePlayer' + addClicked).appendChild(remove)

    //RESET VALUE ON INPUT
    input.value = ''
    addClicked++
})