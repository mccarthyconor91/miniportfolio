// question 1

let basketball = document.getElementById('basketball');
let rugby = document.getElementById('rugby');
let football = document.getElementById('football');
let cricket = document.getElementById('cricket');
let answer = document.getElementById('answer');


function result1() {
    basketball.style.backgroundColor = 'lightgrey';
    rugby.style.backgroundColor = 'lightgrey';
    football.style.backgroundColor = 'lightgreen';
    cricket.style.backgroundColor = 'lightgrey';

    answer.textContent = 'Nope! My favourite sport is actually football.';
   

    
};

function correct1() {
    basketball.style.backgroundColor = 'lightgrey';
    rugby.style.backgroundColor = 'lightgrey';
    football.style.backgroundColor = 'lightgreen';
    cricket.style.backgroundColor = 'lightgrey';

    answer.textContent = 'Correct! My favourite sport has always been football.'

};

basketball.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

rugby.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

cricket.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

// question 2 

let english = document.getElementById('onlyEnglish');
let spanish = document.getElementById('spanish');
let french = document.getElementById('french');
let frenchSpanishEnglish = document.getElementById('frenchSpanishEnglish');
let answer2 = document.getElementById('answer2');

function result2() {
    english.style.backgroundColor = 'lightgrey';
    spanish.style.backgroundColor = 'lightgreen';
    french.style.backgroundColor = 'lightgrey';
    frenchSpanishEnglish.style.backgroundColor = 'lightgrey';

    answer2.textContent = 'Nope! I actually speak Spanish and English'
    
};

function correct2() {
    english.style.backgroundColor = 'lightgrey';
    spanish.style.backgroundColor = 'lightgreen';
    french.style.backgroundColor = 'lightgrey';
    frenchSpanishEnglish.style.backgroundColor = 'lightgrey';

    answer2.textContent = 'Correct! I started learning Spanish when I moved to Madrid.'
};

english.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

french.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

frenchSpanishEnglish.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

// question 3

let pizza = document.getElementById('pizza');
let burrito = document.getElementById('burrito');
let burgerKing = document.getElementById('burgerKing');
let fishAndChips = document.getElementById('fishAndChips');
let answer3 = document.getElementById('answer3');

function result3() {
    pizza.style.backgroundColor = 'lightgreen';
    burrito.style.backgroundColor = 'lightgrey';
    burgerKing.style.backgroundColor = 'lightgrey';
    fishAndChips.style.backgroundColor = 'lightgrey';

    answer3.textContent = 'Tempting! But I prefer pizza..'
    
};

function correct3() {
    pizza.style.backgroundColor = 'lightgreen';
    burrito.style.backgroundColor = 'lightgrey';
    burgerKing.style.backgroundColor = 'lightgrey';
    fishAndChips.style.backgroundColor = 'lightgrey';

    answer3.textContent = `Correct! There's nothing better than pizza!`
};

burrito.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

burgerKing.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

fishAndChips.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

// question 4

let inbetweeners = document.getElementById('inbetweeners');
let theOffice = document.getElementById('theOffice');
let breakingBad = document.getElementById('breakingBad');
let theSimpsons = document.getElementById('theSimpsons');
let answer4 = document.getElementById('answer4');

function result4() {
    inbetweeners.style.backgroundColor = 'lightgrey';
    theOffice.style.backgroundColor = 'lightgreen';
    breakingBad.style.backgroundColor = 'lightgrey';
    theSimpsons.style.backgroundColor = 'lightgrey';

    answer4.textContent = 'I love all of these shows, but The Office has to be number 1.'
    
};

function correct4() {
    inbetweeners.style.backgroundColor = 'lightgrey';
    theOffice.style.backgroundColor = 'lightgreen';
    breakingBad.style.backgroundColor = 'lightgrey';
    theSimpsons.style.backgroundColor = 'lightgrey';

    answer4.textContent = 'Yes! The Office is the goat.'
};

inbetweeners.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

breakingBad.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});

theSimpsons.addEventListener('click', function(event){
    event.target.style.backgroundColor = "red";
});