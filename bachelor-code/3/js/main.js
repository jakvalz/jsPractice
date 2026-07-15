// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 		console.log("whoop")
// 	}else{
// 		alert("Wrong!");
// 	}
// }








let contestants = document.querySelectorAll('.contestant')
let wrongTrik = document.querySelector('.claireTxt')
let roseTxt = document.querySelector('.roseTxt')

Array.from(contestants).forEach(element => element.addEventListener('click', theRealOne))

function theRealOne(e) {
    if(e.target.classList.contains('rose')) {
        let nikki = document.querySelector('#nikki')
        nikki.classList.toggle('hidden')
        wrongTrik.classList.add('hidden')
        roseTxt.style.color = 'purple'
        roseTxt.textContent = 'Nikkiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
    } else {
        nikki.classList.add('hidden')
        wrongTrik.classList.toggle('hidden')
        wrongTrik.style.color = 'red'
        wrongTrik.textContent = 'WRONG TRIK!!!'
    }
}