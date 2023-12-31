const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color =  getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 50px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
    element.style.backgroundColor = '#3a3434'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}