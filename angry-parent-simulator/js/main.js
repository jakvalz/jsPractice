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

document.querySelector('#yell').addEventListener('click', yellIt)

function yellIt() {
  let firstName = document.querySelector('#firstName').value
  let fMName = document.querySelector('#firstMiddle').value
  let lMName = document.querySelector('#lastMiddle').value
  let lastName = document.querySelector('#lastName').value
  
  const h2 = document.querySelector('#placeToYell')
  h2.textContent = `${firstName} ${fMName} ${lMName} ${lastName}`
  
  
  
  const synth = window.speechSynthesis;
  const utterThis = new SpeechSynthesisUtterance(`${firstName} ${fMName} ${lMName} ${lastName}`);
  synth.speak(utterThis);
  
  
}















