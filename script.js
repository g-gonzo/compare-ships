//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

// Button - Variables used to ID elements on the DOM...
let Submit = document.getElementById("submit");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let test = document.getElementById("cresults");  // Now button that loads comparison data...

// Object - allShips used to gather ship objects from JSON...
let allShips;


function LoadShips() {
    allShips =
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            allShips = Ships;
        });
    return Promise.resolve(allShips);

}



// Function - Used to select the Star Trek Genre ...
function SelectStarTrek() {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Genre === "Federation StarFleet") {
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

// Function - Used to select the Star Wars Genre ...
function SelectStarWars() {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let ship of allShips) {
        if (ship.Genre === "Republic" || ship.Genre === "Imperial") {
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
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let smallShips = allShips.sort((a, b) => {
        if (a.Displacement > b.Displacement) return 1;
        if (a.Displacement < b.Displacement) return -1;
        return 0;
    })
    for (let ship of smallShips) {
        if (ship.Displacement !== 0) {
            out +=
                `<tr>
                <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                <td>${JSON.stringify(ship.Id)}</td>
                <td>${JSON.stringify(ship.Name)}</td>
                <td>${JSON.stringify(ship.Model)}</td>
                <td>${JSON.stringify(ship.Genre)}</td>
                </tr>
                `;
            console.log(ship.Name, ship.Displacement);
        }
    }
    placeholder.innerHTML = out;
}


function SelectLargeShips() {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let largeShips = allShips.sort((a, b) => {
        if (a.Displacement < b.Displacement) return 1;
        if (a.Displacement > b.Displacement) return -1;
        return 0;
    })
    for (let ship of largeShips) {
        if (ship.Displacement !== 0) {
            out +=
                `<tr>
                <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                <td>${JSON.stringify(ship.Id)}</td>
                <td>${JSON.stringify(ship.Name)}</td>
                <td>${JSON.stringify(ship.Model)}</td>
                <td>${JSON.stringify(ship.Genre)}</td>
                </tr>
                `;
            console.log(ship.Name, ship.Displacement);
        }
    }
    placeholder.innerHTML = out;
}

function SelectSlowShips() {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let smallShips = allShips.sort((a, b) => {
        if (a.MaxSpeed > b.MaxSpeed) return 1;
        if (a.MaxSpeed < b.MaxSpeed) return -1;
        return 0;
    })
    for (let ship of smallShips) {
        if (ship.Displacement !== 0) {
            out +=
                `<tr>
                <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                <td>${JSON.stringify(ship.Id)}</td>
                <td>${JSON.stringify(ship.Name)}</td>
                <td>${JSON.stringify(ship.Model)}</td>
                <td>${JSON.stringify(ship.Genre)}</td>
                </tr>
                `;
            console.log(ship.Name, ship.MaxSpeed);
        }
    }
    placeholder.innerHTML = out;
}

function SelectFastShips() {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let smallShips = allShips.sort((a, b) => {
        if (a.MaxSpeed < b.MaxSpeed) return 1;
        if (a.MaxSpeed > b.MaxSpeed) return -1;
        return 0;
    })
    for (let ship of smallShips) {
        if (ship.Displacement !== 0) {
            out +=
                `<tr>
                <td><input type="radio" name="ship" value=${JSON.stringify(ship.Id)} onClick=UpdateViewer(${ship.Id}) /></td>
                <td>${JSON.stringify(ship.Id)}</td>
                <td>${JSON.stringify(ship.Name)}</td>
                <td>${JSON.stringify(ship.Model)}</td>
                <td>${JSON.stringify(ship.Genre)}</td>
                </tr>
                `;
            console.log(ship.Name, ship.MaxSpeed);
        }
    }
    placeholder.innerHTML = out;
}

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

// Function - Used to set the both Views1 & View2 ...
function SetView() {
    console.log("SetView Method Fired!");
    let shipId = parseInt(Submit.getAttribute("value"));
    let ship = allShips.find(s => s.Id === shipId);
    document.getElementById("A").innerHTML = ship.Description;
    document.getElementById("view").src = ship.Image;
    sessionStorage.setItem(document.title, shipId);
    return ship;
}

// Function- Used to update the viewer when radio button is selelcted...
function UpdateViewer(Id) {
    Submit.setAttribute("value", Id);
    let ship = allShips.find(s => s.Id === Id);
    let picture = ship.Image;
    console.log("UpDateViewer Method Fired!");
    console.log(ship)
    let descriptor = ship.Description;
    let txtdisplay = document.getElementById("A");
    document.getElementById("view").src = picture;
    txtdisplay.innerHTML = descriptor;
}


// Function - Used to update the Compare Page's List #1 ...
function UpdateCompare1() {
    var ShipOne = parseInt(sessionStorage.getItem("SVS-Home"));
    ship1 = allShips[ShipOne];
    document.querySelector("#vo1").innerHTML = ship1.Id;
    document.querySelector("#vo2").innerHTML = ship1.Name;
    document.querySelector("#vo3").innerHTML = ship1.Model;
    document.querySelector("#vo4").innerHTML = ship1.Class;
    document.querySelector("#vo5").innerHTML = ship1.Role;
    document.querySelector("#vo6").innerHTML = ship1.Genre;
    document.querySelector("#vo7").innerHTML = ship1.Length;
    document.querySelector("#vo8").innerHTML = ship1.Width;
    document.querySelector("#vo9").innerHTML = ship1.Height;
    document.querySelector("#vo10").innerHTML = ship1.Displacement + " " + "Metric-Tons";
    document.querySelector("#vo11").innerHTML = ship1.Speed;
    document.querySelector("#vo13").innerHTML = ship1.Agility;
    document.querySelector("#vo14").innerHTML = ship1.Engines;
    document.querySelector("#vo16").innerHTML = ship1.Shields;
    document.querySelector("#vo18").innerHTML = ship1.Armament;
    document.querySelector("#vo22").innerHTML = ship1.Officers;
    document.querySelector("#vo23").innerHTML = ship1.Enlisted;
    document.querySelector("#vo24").innerHTML = ship1.Passengers;
    document.querySelector("#vo25").innerHTML = ship1.Tour;
    document.querySelector("#vo26").innerHTML = ship1.EmbarkCraft;
}

// Function - Used to update the Compare Page's List #2 ...
function UpdateCompare2() {
    var ShipTwo = parseInt(sessionStorage.getItem("SVS-View2"));
    ship2 = allShips[ShipTwo];
    document.querySelector("#vt1").innerHTML = ship2.Id;
    document.querySelector("#vt2").innerHTML = ship2.Name;
    document.querySelector("#vt3").innerHTML = ship2.Model;
    document.querySelector("#vt4").innerHTML = ship2.Class;
    document.querySelector("#vt5").innerHTML = ship2.Role;
    document.querySelector("#vt6").innerHTML = ship2.Genre;
    document.querySelector("#vt7").innerHTML = ship2.Length;
    document.querySelector("#vt8").innerHTML = ship2.Width;
    document.querySelector("#vt9").innerHTML = ship2.Height;
    document.querySelector("#vt10").innerHTML = ship2.Displacement + " " + "Metric-Tons";
    document.querySelector("#vt11").innerHTML = ship2.Speed;
    document.querySelector("#vt13").innerHTML = ship2.Agility;
    document.querySelector("#vt14").innerHTML = ship2.Engines;
    document.querySelector("#vt16").innerHTML = ship2.Shields;
    document.querySelector("#vt18").innerHTML = ship2.Armament;
    document.querySelector("#vt22").innerHTML = ship2.Officers;
    document.querySelector("#vt23").innerHTML = ship2.Enlisted;
    document.querySelector("#vt24").innerHTML = ship2.Passengers;
    document.querySelector("#vt25").innerHTML = ship2.Tour;
    document.querySelector("#vt26").innerHTML = ship2.EmbarkCraft;
}

// Button Listener - Submit


// Function - Button Listeners...
function addViewEventListerners() {
    if (document.title === "SVS-ComparePage") return;
    btn1?.addEventListener('click', function () {

    });
    btn2?.addEventListener('click', function () {
        console.log("Button 2 has been clicked");
    });

    btn3?.addEventListener('click', function () {
        console.log("Button 3 has been clicked");
    });

    btn4?.addEventListener('click', function () {
        console.log("Button 4 has been clicked");
    });
    test?.addEventListener('click', function () {
        console.log("TEST Button has been clicked");
        UpdateCompare1();
        UpdateCompare2();
    });

    Submit?.addEventListener('click', function () {
        SetView();
    });


}
function PopulateComparePage() {
    LoadShips().then((_) => { UpdateCompare1(); UpdateCompare2(); });
}

addViewEventListerners();
