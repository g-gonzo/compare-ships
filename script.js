//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

// DOM Variables
// Button Variables
let v1Submit = document.getElementById("submit1");
let v2Submit = document.getElementById("submit2");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let test = document.getElementById("test");

// Ship Object
let allShips =
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            allShips = Ships;
        })

// Button Listeners
v1Submit.addEventListener('click', function () {
    SearchForShips();
});

test.addEventListener('click', function () {
    console.log("TEST Button has been clicked");
    UpdateCompare();
});

function UpdateCompare() {
    let comshpid = getElementById("vo1");
    comshpid.getElementById("vo1").innerHTML = "test string";

}

//Buttons 1 - 4, currently using these for testing purposes. 
btn1.addEventListener('click', function () {
    console.log("Button 1 has been clicked");
    UpdateViewer(0);

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
    let placeholder = document.querySelector("#data-output");
    let out = "";
    console.log(allShips);
    for (let ship of allShips) {
        out +=
            `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
    }
    placeholder.innerHTML = out;
}


function SelectStarTrek() {
    console.log("Selecting StarTrek ships !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Genre === "StarFleet") {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectStarWars() {
    console.log("Selecting StarWars ships !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Genre === "StarWars") {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}


function SelectCorvette() {
    console.log("Selecting Class Corrvette !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Model == "Corvette") {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectDestroyer() {
    console.log("Selecting Class Destroyer !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Model.includes("Destroyer")) {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectFrigate() {
    console.log("Selecting Class Frigate !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Model.includes("Frigate")) {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectCruiser() {
    console.log("Selecting Class Cruiser !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Model.includes("Cruiser")) {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectBattleCraft() {
    console.log("Selecting Class Battle-Craft !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Role.includes("Patrol")) {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
}

function SelectSupportCraft() {
    console.log("Selecting Class Support Craft !!!");
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Role.includes("Support")) {
            out +=
                `<tr>
                        <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                        <td>${JSON.stringify(ship.Id)}</td>
                        <td>${JSON.stringify(ship.Name)}</td>
                        <td>${JSON.stringify(ship.Model)}</td>
                        <td>${JSON.stringify(ship.Genre)}</td>
                    </tr>
                    `;
        }
    }
    placeholder.innerHTML = out;
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

function UpdateViewer(Id) {
    let picture1 = allShips[Id].Image;
    let discriptor = allShips[Id].Discription;
    let d1display = document.getElementById("A");
    console.log(allShips[Id].Discription);

    document.getElementById("view-1").src = picture1;
    d1display.innerHTML = discriptor;
}



