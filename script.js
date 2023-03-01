const cardsArray = [
  
  {
    name: 'cheeseburger', 
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries', 
    img: 'images/fries.png'
  }, 
  {
    name: 'hotdog', 
    img: 'images/hotdog.png'
  }, 
  {
    name: 'ice-cream', 
    img: 'images/ice-cream.png'
  }, 
  {
    name: 'milkshake', 
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza', 
    img: 'images/pizza.png'
  },
  {
    name: 'cheeseburger', 
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries', 
    img: 'images/fries.png'
  }, 
  {
    name: 'hotdog', 
    img: 'images/hotdog.png'
  }, 
  {
    name: 'ice-cream', 
    img: 'images/ice-cream.png'
  }, 
  {
    name: 'milkshake', 
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza', 
    img: 'images/pizza.png'
  }
]

const gridDisplay = document.querySelector('#grid')
const display = document.querySelector('#display')
const resultDisplay = document.querySelector('#result')
let  cardsChosenId = []
let cardsChosen = []
const cardsWon = []

//embaralha as cartas do array aleatoriamente
cardsArray.sort(() => 0.5 - Math.random())

//crio o board com o js
function createBoard() {
  for (let i = 0; i < cardsArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCards)
    gridDisplay.appendChild(card)
    //console.log(card, i)
  }
} createBoard()

function checkMatch() {
  let cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
  }

  if(cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCards)
    cards[optionTwoId].removeEventListener('click', flipCards)
    cardsWon.push(cardsChosen)
  }
  
  else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    display.textContent = "Tente novamente."
   
  }

  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenId = []

  if(cardsWon.length == cardsArray.length/2) {
    resultDisplay.textContent = "Parabens! Você achou todos os pares."
  }
}

function flipCards() {
  const cardId = this.getAttribute('data-id')
  display.textContent = ''
  console.log(cardId)
  cardsChosen.push(cardsArray[cardId].name)
  cardsChosenId.push(cardId)
  console.log(cardsChosen ,cardsChosenId)
  this.setAttribute('src', cardsArray[cardId].img)  

  if(cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}