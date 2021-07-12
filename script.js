// function message() {
//    return 'hello world';
// }

// let message = () => {
//     return 'hello world';
// }

// console.log(message());

// You then further simplify the function by Implicitly returning <remove the {} and 'return' //

// let message = () => 'hello world!';

// console.log(message());





// Using ARROW FUNCTION with Variables

//  function message(a) {
//     return `hello ${a}`;
// }

let message = (a) => `hello ${a}`;
console.log(message('Jeff')); // console logs 'hello Jeff'

// or

let message2 = (a, b) => `hello ${a} ${b}`;
console.log(message2('Jeff', 'Walley')); // console logs 'hello Jeff Walley'




// Asynchronous Function as ARROW Function //

document.addEventListener('click', function() {
    console.log('Click!');
});

// can be made into Arrow Function

document.addEventListener('clackity', () => console.log('Clackity!'));


// another Asynchronous Arrow Function

const people = [{
        fName: 'Jeff',
        lName: 'Walley'
    },
    {
        fName: 'Trelvyn',
        lName: 'Martin-Walley'
    },
    {
        fName: 'IsIs',
        lName: 'the WonderCat'
    }
];

console.log(people.map(function(person) {
    return person.fName;
})); // this code returns the first names from the list above

console.log(people.map(person =>
    person.lName
)); // this does the same thing as an Arrow Function for the last names. more simple and ellegant

// Arrow Function and "this"

let demo = function() {
    console.log(this);
}

window.addEventListener("load", demo);
document.getElementById("btn").addEventListener("click", demo);

// Stopwatch // will result in NAN error because the function "REBINDS" with "this"

// function stopwatch() {
//     this.time = 0;

//     setInterval(function() {
//         this.time++;
//         console.log(this.time);
//     }, 1000);
// }

// let timer = new stopwatch(); // results in countup with NAN error because the ARROW Function DOES NOT "REBIND" "this"

function stopwatch() {
    this.time = 0;

    setInterval(() => {
        this.time++;
        console.log(this.time);
    }, 1000);
}

let timer = new stopwatch(); // no NAN error because it is not (counts up in console on individual lines and feeds up the console)


// returning an Object with Arrow Function

let greet = () => 'Hello World';
console.log(greet()); // console log "Hello World"