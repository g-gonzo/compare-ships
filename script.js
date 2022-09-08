//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

// DOM Variables
// Button Variables
let v1Submit = document.getElementById("submit1");

// Button Listener
v1Submit.addEventListener('click', function () {
    SearchForShips();
    //SelectShipByGenre();

});

function SearchForShips() {
    //let results = [];
    fetch('./db.json')
        .then(results => results.json())
        .then(console.log);
};

function SelectShipByGenre() {
    let shiplist = results;
    fetch('./db.json')
        .then(results => results.json())
        .then(console.log(shiplist));
};