// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
const sum = values.reduce((a,b) => a + b)
console.log(sum)

// Array maximum
// Write a program using the same values array, then calculates and shows the array's maximum value.
console.log(Math.max(...values)) 
//Math.max() method works for arrays that are short. 
//Math.max() will either fail or return the wrong result if the array has too many elements,
//  because they try to pass the array elements as function parameters.

//so use reduce method instead for best practice and best results
const max = values.reduce((a,b) => Math.max(a,b))
console.log(max)

// List of words
// Write a program that asks the user for a word until the user types "stop".
//  The program then shows each of these words, except "stop".
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')

// function askUser() {
//     let ask = prompt('Give me a word...')
//     if(typeof ask === 'string') {
//         h2.textContent += ask
//         // h2.textContent += `${ask}`
//         ask
//     } else if(ask.toLowerCase() === 'stop') {
//         h3.textContent = 'end of program'
//     } else {
//         ask
//     }
// }
// askUser()


// let ask = prompt('Give me a word')
// while(typeof ask === 'string') {
//     h2.textContent += ask
//     ask++
// }

let d = [];
// while(1){
// let word = prompt("Enter some word?");
// if( word === 'stop') break;
// d.push(word);
// }

// h2.textContent = d.join(' ')
// console.log(d.join(' '));

const ask = (question, yes, no) => {
return confirm(question) ? yes() : no();
};

ask('Do you agree?', () => {
    alert('You agreed.');
}, () => {
    alert('You canceled the execution.');
});