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

// Button Listeners
v1Submit.addEventListener('click', function () {
    SearchForShips();
});

//Buttons 1 - 4 really do not appear to be used, kinda using them to test stuff in console. 
btn1.addEventListener('click', function () {
    console.log("Button 1 has been clicked");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let out = "";
            let weight = swt[ship.Displacement];
            for (let ship of Ships) {

            }

        })
});

btn2.addEventListener('click', function () {
    console.log("Button 2 has been clicked");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let out = "";
            let ship1 = Ships[15];
            for (let ship of Ships) {


            }
            console.log(ship1);
        })
});

btn3.addEventListener('click', function () {
    console.log("Button 3 has been clicked");
});

btn4.addEventListener('click', function () {
    console.log("Button 4 has been clicked");
});

function SearchForShips() {
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                out +=
                    `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
            }
            placeholder.innerHTML = out;
        })
};

function SelectStarTrek() {
    console.log("Selecting StarTrek ships !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Genre === "StarFleet") {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
};

function SelectStarWars() {
    console.log("Selecting StarWars ships !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Genre === "StarWars") {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
}

function SelectCorvette() {
    console.log("Selecting Class Corrvette !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Model == "Corvette") {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
}

function SelectDestroyer() {
    console.log("Selecting Class Destroyer !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Model.includes("Destroyer")) {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
}

function SelectFrigate() {
    console.log("Selecting Class Frigate !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Model.includes("Frigate")) {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
}

function SelectCruiser() {
    console.log("Selecting Class Cruiser !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Model.includes("Cruiser")) {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
}

function SelectBattleCraft() {
    console.log("Selecting Class Battle-Craft !!!");
}

function SelectSupportCraft() {
    console.log("Selecting Class Support Craft !!!");
}

function SelectSmallShips() {
    console.log("Selecting Small Ships !!!");
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for (let ship of Ships) {
                if (ship.Displacement.sort()) {
                    out +=
                        `<tr>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
                }
            }
            placeholder.innerHTML = out;
        })
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