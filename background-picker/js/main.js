// let bod = document.querySelector('body')
// let purp = document.querySelector('#purple')
// let green = document.querySelector('#green')
// let blue = document.querySelector('#blue')
// let black = document.querySelector('#black')
// let red = document.querySelector('#red')
// let drkBlue = document.querySelector('#darkBlue')

// purp.addEventListener('click', partyPurple)
// purp.addEventListener('click', blockPartyPurple)

// green.addEventListener('click', partyGreen)
// green.addEventListener('click', blockPartyGreen)

// blue.addEventListener('click', partyBlue)
// blue.addEventListener('click', blockPartyBlue)

// black.addEventListener('click', partyBlack)
// black.addEventListener('click', blockPartyBlack)

// red.addEventListener('click', partyRed)
// red.addEventListener('click', blockPartyRed)

// drkBlue.addEventListener('click', partyDarkBlue)
// drkBlue.addEventListener('click', blockPartyDarkBlue)

// function partyPurple() {
//   let purpleBGC = bod.style.backgroundColor = 'purple'
//   let backToNorm = bod.style.backgroundColor = 'white';
//                    bod.style.color = 'black';
  
//   bod.style.backgroundColor = 'purple'
//   bod.style.color = 'white'
// }

// function blockPartyPurple() {
//   purp.style.backgroundColor = 'white'
//   document.querySelector('.purple').textContent = 'Purple'
//   document.querySelector('.purple').style.color = 'purple'
// }

// function partyGreen() {
//   bod.style.backgroundColor = 'rgb(8, 221, 93)'
//   bod.style.color = 'white'
// }

// function blockPartyGreen() {
//   green.style.backgroundColor = 'white'
//   document.querySelector('.green').style.color = 'rgb(8, 221, 93)'
//   document.querySelector('.green').textContent = 'Green'
  
// }

// function partyBlue() {
//   bod.style.backgroundColor = 'rgb(30, 135, 255)'
//   bod.style.color = 'white'
// }

// function blockPartyBlue() {
//   blue.style.backgroundColor = 'white'
//   document.querySelector('.blue').style.color = 'rgb(30, 135, 255)'
//   document.querySelector('.blue').textContent = 'Blue'
// }

// function partyBlack() {
//   bod.style.backgroundColor = 'black'
//   bod.style.color = 'white'
// }

// function blockPartyBlack() {
//   document.querySelector('#black').style.backgroundColor = 'white'
//   document.querySelector('.black').style.color = 'black'
//   document.querySelector('.black').textContent = 'Black'
// }

// function partyRed() {
//   bod.style.backgroundColor = 'red'
//   bod.style.color = 'white'
// }

// function blockPartyRed() {
//   document.querySelector('#red').style.backgroundColor = 'white'
//   document.querySelector('.red').style.color = 'red'
//   document.querySelector('.red').textContent = 'Red'
// }

// function partyDarkBlue() {
//   bod.style.backgroundColor = 'rgb(23, 23, 144)'
//   bod.style.color = 'white'
// }

// function blockPartyDarkBlue() {
//   document.querySelector('#darkBlue').style.backgroundColor = 'white'
//   document.querySelector('.darkBlue').style.color = 'rgb(23, 23, 144)'
//   document.querySelector('.darkBlue').textContent = 'Dark Blue'
// }




let purple = document.querySelector('#purple')
purple.addEventListener('click', partyPurple)

let green = document.querySelector('#green')
green.addEventListener('click', partyGreen)

let blue = document.querySelector('#blue')
blue.addEventListener('click', partyBlue)

let black = document.querySelector('#black')
black.addEventListener('click', partyBlack)

let red = document.querySelector('#red')
red.addEventListener('click', partyRed)

let darkBlue = document.querySelector('#darkBlue')
darkBlue.addEventListener('click', partyDarkBlue)

const bod = document.querySelector('body')
const bodyReset = document.querySelector('.reset')

function partyPurple(e) {
  document.querySelector('.purple').textContent = 'Purple'
  purple.style.backgroundColor = 'white'
  purple.style.color = '#800080'
  bod.style.color = 'white'
  bod.style.backgroundColor = '#800080'
    if (e.target.classList.contains('green', 'blue', 'black', 'red', 'darkBlue')) {
      green.classList.toggle('green')
    }
}

function partyGreen() {
  document.querySelector('.green').textContent = 'Green'
  green.style.backgroundColor = 'white'
  green.style.color = '#08DD5D'
  bod.style.color = 'white'
  bod.style.backgroundColor = '#08DD5D'

}

function partyBlue() {
  document.querySelector('.blue').textContent = 'Blue'
  blue.style.backgroundColor = 'white'
  blue.style.color = '#1E87FF'
  bod.style.color = 'white'
  bod.style.backgroundColor = '#1E87FF'
  
}

function partyBlack() {
  document.querySelector('.black').textContent = 'Black'
  black.style.backgroundColor = 'white'
  black.style.color = 'black'
  bod.style.color = 'white'
  bod.style.backgroundColor = 'black'
  
}

function partyRed() {
  document.querySelector('.red').textContent = 'Red'
  red.style.backgroundColor = 'white'
  red.style.color = 'red'
  bod.style.color = 'white'
  bod.style.backgroundColor = 'red'
  
}

function partyDarkBlue() {
  document.querySelector('.darkBlue').textContent = 'Dark Blue'  
  darkBlue.style.backgroundColor = 'white'
  darkBlue.style.color = '#171790'
  bod.style.color = 'white'
  bod.style.backgroundColor = '#171790'
  
}























