//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

// DOM Variables
// Button Variables
let v1Submit = document.getElementById("submit1");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");

// Attempt at creating a list of ships with JSON Obj
//const obj = JSON.parse(Ships);

// Button Listeners
v1Submit.addEventListener('click', function () {
    SearchForShips();
});

btn1.addEventListener('click', function () {
    console.log("Button 1 has been clicked");

    let data = fetch('./db.json')
        .then(results => results.json())
        .then(console.log);

    let ship1 = data.ship1[5];
    console.log(ship1);

});

btn2.addEventListener('click', function () {
    console.log("Button 2 has been clicked");
});

btn3.addEventListener('click', function () {
    console.log("Button 3 has been clicked");
});

btn4.addEventListener('click', function () {
    console.log("Button 4 has been clicked");
});

function SearchForShips() {
    fetch('./db.json')
        .then(results => results.json())
        .then(console.log);
};

function SelectStarTrek() {
    console.log("Selecting StarTrek ships !!!");
}

function SelectStarWars() {
    console.log("Selecting StarWars ships !!!");
}

function SelectCorrvette() {
    console.log("Selecting Class Corrvette !!!");
}

function SelectDestroyer() {
    console.log("Selecting Class Destroyer !!!");
}

function SelectFrigate() {
    console.log("Selecting Class Frigate !!!");
}

function SelectCruiser() {
    console.log("Selecting Class Cruiser !!!");
}

function SelectBattleCraft() {
    console.log("Selecting Class Battle-Craft !!!");
}

function SelectSupportCraft() {
    console.log("Selecting Class Support Craft !!!");
}

function SelectSmallShips() {
    console.log("Selecting Small Ships !!!");
}

function SelectLargeShips() {
    console.log("Selecting large Ships !!!");
}

function SelectSlowShips() {
    console.log("Selecting Slow Ships !!!");
}

function SelectFastShips() {
    console.log("Selecting Fast Ships !!!");
}