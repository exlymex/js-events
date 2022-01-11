function clickCenter(){
    event.target.innerHTML = 'Хочеш знати який?'
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'blue'
}
function clickOver() {
    event.target.style.backgroundColor = ''
    event.target.innerHTML = 'У мене є секрет'
}
function mouseDown() {
    event.target.style.backgroundColor = 'black'
    event.target.style.border = '3px solid orange'
    event.target.innerHTML = 'А я тобі не скажу!'
}
function mouseUp() {
    event.target.innerHTML = 'Хочеш знати який?'
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'blue'
}