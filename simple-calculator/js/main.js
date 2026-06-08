total = 0

let reset = document.querySelector('#reset')
reset.addEventListener('click', resetCalc)

let zilch = document.querySelector('#zilch')
zilch.addEventListener('click', addZero)

let theLORDsNum = document.querySelector('#theLORDsNum')
theLORDsNum.addEventListener('click', add3)

let plusNiner = document.querySelector('#plusNiner')
plusNiner.addEventListener('click', add9)

let negTwo = document.querySelector('#negTwo')
negTwo.addEventListener('click', sub2)

let twoPennies = document.querySelector('#twoPennies')
twoPennies.addEventListener('click', add2)

let subCompleteNum = document.querySelector('#subCompleteNum')
subCompleteNum.addEventListener('click', sub7)

let infiniti = document.querySelector('#infiniti')
infiniti.addEventListener('click', infinitiCalc)

const result = document.querySelector('#result')

//functions

function resetCalc() {
total = total * 0
result.textContent = ''
}

function addZero() {
total = total + 0
result.textContent = total
}

function add3() {
total = total + 3
result.textContent = total
}

function add9() {
total = total + 9
result.textContent = total
}

function sub2() {
total = total - 2
result.textContent = total
}

function add2() {
total = total + 2
result.textContent = total
}

function sub7() {
total = total - 7
result.textContent = total
}

function infinitiCalc() {
result.textContent = 'i am a finite program, not GOD, give me something i can do'
}
