// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   //Conditionals go here
// if (day === "monday" || day === "wednesday" || day === "friday") {
//   alert('its a boring day...')
//   console.log('its a boring day...')
// } else if (day === "tuesday" || day === "thursday") {
//   alert('its a class day!')
//   console.log('its a class day!')
// } else if (day === "saturday" || day === "sunday") {
//   alert("prepare yourself for the LORD's day")
//   console.log("prepare yourself for the LORD's day")
// } else {
//   alert('you got got bud')
//   console.log('you got got bud')
// }

// }
let h2 = document.querySelector('#placeToSee')

document.querySelector('#check').addEventListener('click', check)

function check() {
    let day = document.querySelector('#day').value.toLowerCase();
    
    if (day === 'monday' || day === 'wednesday' || day === 'friday') {
        h2.textContent = 'its a norm'
    } else if (day === 'tuesday' || day === 'thursday') {
        h2.textContent = 'its a class day'
    } else if (day === 'sunday' || day === 'saturday') {
        h2.textContent = 'prepare for the LORDs day!!!'
    } else {
        h2.textContent = 'giv me a day fam'
    }
}