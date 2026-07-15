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

let h2 = document.querySelector('#print2ScreenLocation')

document.querySelector('#check').addEventListener('click', checkIt)
document.querySelector('#myForm').addEventListener('keypress', enterKey)

function checkIt(e) {
    let day = document.querySelector('#day').value.toLowerCase()
    if(day === 'monday') {
        h2.textContent = 'too early for this, come back later....'
    } else if(day === 'tuesday' || day === 'thursday') {
        h2.textContent = 'its class day bruv'
    } else if(day === 'wednesday') {
        h2.textContent = 'its hump day apparently'
    } else if(day === 'friday') {
        h2.textContent = 'its friday, friday... come one errybody its friday'
    } else if(day === 'saturday' || day === 'sunday') {
        h2.textContent = 'the LORDs day is upon us'
    }
}










