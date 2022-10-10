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
let allShips =
    fetch("Ships.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (Ships) {
            allShips = Ships;
        })


// Function - Used to select the Star Trek Genre ...
function SelectStarTrek() {
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

// Function - Used to select the Star Wars Genre ...
function SelectStarWars() {
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
    if (document.title === "SVS-Home") {
        let ship1 = sessionStorage.getItem("SVS-Home");
        ship1 = allShips[ship1];
        let pic1 = ship1.Image;
        document.getElementById("view").src = pic1;
        sessionStorage.setItem("pic1", ship1.Image);
        let desc1 = ship1.Description;
        document.getElementById("A").innerHTML = desc1;
        sessionStorage.setItem("desc1", ship1.Description);
        let shipOne = ship1.Id;
        sessionStorage.setItem("ShipOne", shipOne);
        return shipOne;
    } else {
        let ship2 = sessionStorage.getItem("SVS-View2");
        ship2 = allShips[ship2];
        let pic2 = ship2.Image;
        document.getElementById("view").src = pic2;
        sessionStorage.setItem("pic2", ship2.Image);
        let desc2 = ship2.Description;
        document.getElementById("A").innerHTML = desc2;
        sessionStorage.setItem("desc2", ship2.Description);
        let shipTwo = ship2.Id;
        sessionStorage.setItem("ShipTwo", shipTwo);
        return shipTwo;
    }

}

// Function- Used to update the viewer when radio button is selelcted...
function UpdateViewer(Id) {
    let picture = allShips[Id].Image;
    let descriptor = allShips[Id].Description;
    let txtdisplay = document.getElementById("A");
    document.getElementById("view").src = picture;
    txtdisplay.innerHTML = descriptor;
    sessionStorage.setItem(document.title, Id);
}

// Function - Used to udate the viewers on page load, once a ship is submitted...
function RefreshViewer() {
    if (document.title === "SVS-Home" && sessionStorage.getItem("ShipOne") > 0) {
        let txtdisplay = document.getElementById("A");
        document.getElementById("view").src = sessionStorage.getItem("pic1");
        txtdisplay.innerHTML = sessionStorage.getItem("desc1");
    } else if (document.title === "SVS-View2" && sessionStorage.getItem("ShipTwo") > 0) {
        let txtdisplay = document.getElementById("A");
        document.getElementById("view").src = sessionStorage.getItem("pic2");
        txtdisplay.innerHTML = sessionStorage.getItem("desc2");
    }
}

// Function - Used to update the Compare Page's List #1 ...
function UpdateCompare1() {
    ship1 = sessionStorage.getItem("ShipOne");
    ship1 = allShips[ship1];
    document.querySelector("#vo1").innerHTML = ship1.Id;
    document.querySelector("#vo2").innerHTML = ship1.Name;
    document.querySelector("#vo3").innerHTML = ship1.Model;
    document.querySelector("#vo4").innerHTML = ship1.Class;
    document.querySelector("#vo5").innerHTML = ship1.Role;
    document.querySelector("#vo6").innerHTML = ship1.Genre;
    document.querySelector("#vo7").innerHTML = `${ship1.Length}  Meters`;
    document.querySelector("#vo8").innerHTML = `${ship1.Width}  Meters`;
    document.querySelector("#vo9").innerHTML = `${ship1.Height}  Meters`;
    document.querySelector("#vo10").innerHTML = `${ship1.Displacement}  Metric Tons`;
    document.querySelector("#vo11").innerHTML = ship1.Atmosphere;
    document.querySelector("#vo12").innerHTML = ship1.Maxspeed;
    document.querySelector("#vo13").innerHTML = ship1.Agility;
    document.querySelector("#vo14").innerHTML = ship1.Engines;
    document.querySelector("#vo15").innerHTML = ship1.Thrusters;
    document.querySelector("#vo16").innerHTML = ship1.ShieldsTotal;
    document.querySelector("#vo17").innerHTML = ship1.ShieldsRating;
    document.querySelector("#vo18").innerHTML = ship1.Lasers;
    document.querySelector("#vo19").innerHTML = ship1.Cannons;
    document.querySelector("#vo20").innerHTML = ship1.Launchers;
    document.querySelector("#vo21").innerHTML = ship1.Grapplers;
    document.querySelector("#vo22").innerHTML = ship1.Officers;
    document.querySelector("#vo23").innerHTML = ship1.Enlisted;
    document.querySelector("#vo24").innerHTML = ship1.Passengers;
    document.querySelector("#vo25").innerHTML = `${ship1.Tour}  Days`;
    console.log(typeof (ship1));
}

// Function - Used to update the Compare Page's List #2 ...
function UpdateCompare2() {
    ship2 = sessionStorage.getItem("ShipTwo");
    ship2 = allShips[ship2];
    document.querySelector("#vt1").innerHTML = ship2.Id;
    document.querySelector("#vt2").innerHTML = ship2.Name;
    document.querySelector("#vt3").innerHTML = ship2.Model;
    document.querySelector("#vt4").innerHTML = ship2.Class;
    document.querySelector("#vt5").innerHTML = ship2.Role;
    document.querySelector("#vt6").innerHTML = ship2.Genre;
    document.querySelector("#vt7").innerHTML = `${ship2.Length}  Meters`;
    document.querySelector("#vt8").innerHTML = `${ship2.Width}  Meters`;
    document.querySelector("#vt9").innerHTML = `${ship2.Height}  Meters`;
    document.querySelector("#vt10").innerHTML = `${ship2.Displacement}  Metric Tons`;
    document.querySelector("#vt11").innerHTML = ship2.Atmosphere;
    document.querySelector("#vt12").innerHTML = ship2.Maxspeed;
    document.querySelector("#vt13").innerHTML = ship2.Agility;
    document.querySelector("#vt14").innerHTML = ship2.Engines;
    document.querySelector("#vt15").innerHTML = ship2.Thrusters;
    document.querySelector("#vt16").innerHTML = ship2.ShieldsTotal;
    document.querySelector("#vt17").innerHTML = ship2.ShieldsRating;
    document.querySelector("#vt18").innerHTML = ship2.Lasers;
    document.querySelector("#vt19").innerHTML = ship2.Cannons;
    document.querySelector("#vt20").innerHTML = ship2.Launchers;
    document.querySelector("#vt21").innerHTML = ship2.Grapplers;
    document.querySelector("#vt22").innerHTML = ship2.Officers;
    document.querySelector("#vt23").innerHTML = ship2.Enlisted;
    document.querySelector("#vt24").innerHTML = ship2.Passengers;
    document.querySelector("#vt25").innerHTML = `${ship2.Tour}  Days`;
    console.log(ship2);
}

// Button Listener - Submit
Submit?.addEventListener('click', function () {
    SetView();
});

// Function - Button Listeners...
function addViewEventListerners() {
    if (document.title !== "SVS-ComparePage") return;
    btn1?.addEventListener('click', function () {
        console.log("Button 1 has been clicked");
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

}
addViewEventListerners();
