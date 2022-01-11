let color = ['red','yellow','green']
let i = 0
function someFunc(params) {
    event.target.style.backgroundColor = color[i]
    i++
    if(i == color.length){
        i = 0
    }
}
function outFunc(params) {
    event.target.style.backgroundColor = ''
}