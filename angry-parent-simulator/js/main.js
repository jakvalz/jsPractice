// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value   //when getting the values to store in variable they HAVE to be INSIDE of function
//   const fMidName = document.querySelector('#firstMiddle').value   //when getting the values to store in variable they HAVE to be INSIDE of function
//   const lMidName = document.querySelector('#lastMiddle').value   //when getting the values to store in variable they HAVE to be INSIDE of function
//   const lName = document.querySelector('#lastName').value   //when getting the values to store in variable they HAVE to be INSIDE of function

//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

//   document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }





let fName = document.querySelector('#firstName')
let fMid = document.querySelector('#firstMiddle')
let lMid = document.querySelector('#lastMiddle')
let lName = document.querySelector('#lastName')
let yellBtn = document.querySelector('#yell')
let yellOnScreen = document.querySelector('#placeToYell')

yellBtn.addEventListener('click', yellIt)


function yellIt(e) {
    e.preventDefault()
    let userInput = `${fName.value} ${fMid.value} ${lMid.value} ${lName.value}`
    yellOnScreen.textContent = userInput
    
    //actually say it or 'yell it'
    let utterance = new SpeechSynthesisUtterance(`${userInput}`);
speechSynthesis.speak(utterance);
}








