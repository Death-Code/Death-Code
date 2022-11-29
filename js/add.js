let addClicked = 1
const input = document.getElementById('input')
const add = document.getElementById('add')
let removePlayer

add.addEventListener('click', () => {
    let newArticle = document.createElement('article')
    newArticle.setAttribute('id', 'article-player' + addClicked)
    newArticle.className = 'article-player'
    document.getElementById('terminal').appendChild(newArticle)

    let playerName = input.value
    let newPlayer = document.createElement('p')
    newPlayer.innerHTML = '< ' + playerName + ' >'

    let remove = document.createElement('button')
    remove.type = 'button'
    newArticle.setAttribute('id', 'removePlayer' + addClicked)
    remove.innerText = '|delete'
    remove.className = 'remove-button'

    document.getElementById('removePlayer' + addClicked).appendChild(newPlayer)
    document.getElementById('removePlayer' + addClicked).appendChild(remove)

    input.value = ''
    addClicked++
    conditionRemove()
})

function conditionRemove() {
    if (addClicked > 1) {
        let removePlayer = document.getElementById('removePlayer' + addClicked)

        removePlayer.addEventListener('click', () => {
            console.log('hola')
        })
    }