// document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#nikki').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }




document.querySelector('#finalRose').addEventListener('click', theOne)

function theOne() {
    let nikki = document.querySelector('#nikki')
    let sharleen = document.querySelector('#sharleen')

    nikki.classList.toggle('hidden')
    sharleen.classList.toggle('hidden')
}
