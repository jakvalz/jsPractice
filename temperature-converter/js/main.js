//Write your pseduo code first! 
//need to be able to take in value for cel and convert it to feh
// and give the result
//then do the same for feh to cel

// document.querySelector('#convertC').addEventListener('click', convertToF)
// document.querySelector('#convertF').addEventListener('click', convertToC)
// document.querySelector('#reset').addEventListener('click', reset)
// let h2 = document.querySelector('h2')
// let suggestion = document.querySelector('h3')

// function convertToF(e) {
//     e.preventDefault()
//     //°F = °C * 9/5 + 32
//     let celInput = document.querySelector('#cel').value
//     let conversion = (celInput * (9/5)) + 32

//     h2.textContent = `${conversion}deg Fahrenheit`

//     if (conversion <= 60 && conversion >= 40) {
//         suggestion.textContent = 'bring a sweatshirt 😣'
//     } else if (conversion < 40) {
//         suggestion.textContent = 'bring a coat!! 🥶'
//     } else if (conversion > 60 && conversion <= 72) {
//         suggestion.textContent = 'should be fine with long sleeve t-shirt'
//     } else if (conversion > 72 && conversion < 100) {
//         suggestion.textContent = 'finna be a toasty day today 😏'
//     } else if (conversion >= 100) {
//         suggestion.textContent = 'it\'ll be a hot one today 🥵'
//     } else {
//         suggestion.textContent = 'thats outside of my scope 😳'
//     }
// }

// function convertToC(e) {
//     e.preventDefault()
//     //°C = (°F - 32) ÷ (9/5)
//     let fahInput = document.querySelector('#fah').value
//     let conversion = (fahInput - 32) / (9/5)

//     h2.textContent = `${conversion}deg Celsius`

//     if (conversion <= 16 && conversion >= 4) {
//         suggestion.textContent = 'bring a sweatshirt 😣'
//     } else if (conversion < 4) {
//         suggestion.textContent = 'bring a coat!! 🥶'
//     } else if (conversion > 16 && conversion <= 23) {
//         suggestion.textContent = 'should be fine with long sleeve t-shirt'
//     } else if (conversion > 23 && conversion < 38) {
//         suggestion.textContent = 'finna be a fine day today 😏'
//     } else if (conversion >= 38) {
//         suggestion.textContent = 'it\'ll be a hot one today 🥵'
//     } else {
//         suggestion.textContent = 'thats outside of my scope 😳'
//     }
// }

// function reset() {
//     h2.textContent = ''
// }








document.querySelector('#convertC').addEventListener('click', convertToF)
document.querySelector('#convertF').addEventListener('click', convertToC)
document.querySelector('#reset').addEventListener('click', resetBtn)

let output = document.querySelector('#conversionResult')


function convertToF(e) {
    e.preventDefault()
    let celInput = document.querySelector('#cel').value
// C to F
// (0°C × 9/5) + 32 = 32°F
let f = (celInput * (9/5)) + 32
output.textContent = `${f}°F`

}

function convertToC(e) {
    e.preventDefault()
    let fahInput = document.querySelector('#fah').value
// F to C
// (32°F − 32) × 5/9 = 0°C
let c = (fahInput - 32) * (5/9)
output.textContent = `${c}°C`
}

function resetBtn() {
// let celInput = document.querySelector('#cel')
// let fahInput = document.querySelector('#fah')
output.textContent = ''
}
