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
    let ship = allShips.sort((a, b) => parseFloat(a.Displacement) - parseFloat(b.Displacement))
    for (let ship of allShips) {
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
        }
        console.log(ship.Displacement)
        placeholder.innerHTML = out;
    }
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
    console.log("Hit set view");
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
    var ShipOneId = sessionStorage.getItem("ShipOne");
    ship1 = allShips[ShipOneId];
    document.querySelector("#vo1").innerHTML = ship1.Id;
    document.querySelector("#vo2").innerHTML = ship1.Name;
    document.querySelector("#vo3").innerHTML = ship1.Model;
    document.querySelector("#vo4").innerHTML = ship1.Class;
    document.querySelector("#vo5").innerHTML = ship1.Role;
    document.querySelector("#vo6").innerHTML = ship1.Genre;
    document.querySelector("#vo7").innerHTML = ship1.Length;
    document.querySelector("#vo8").innerHTML = ship1.Width;
    document.querySelector("#vo9").innerHTML = ship1.Height;
    document.querySelector("#vo10").innerHTML = ship1.Displacement;
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
    var ShipTwoId = sessionStorage.getItem("ShipTwo");
    ship2 = allShips[ShipTwoId];
    document.querySelector("#vt1").innerHTML = ship2.Id;
    document.querySelector("#vt2").innerHTML = ship2.Name;
    document.querySelector("#vt3").innerHTML = ship2.Model;
    document.querySelector("#vt4").innerHTML = ship2.Class;
    document.querySelector("#vt5").innerHTML = ship2.Role;
    document.querySelector("#vt6").innerHTML = ship2.Genre;
    document.querySelector("#vt7").innerHTML = ship2.Length;
    document.querySelector("#vt8").innerHTML = ship2.Width;
    document.querySelector("#vt9").innerHTML = ship2.Height;
    document.querySelector("#vt10").innerHTML = ship2.Displacement;
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

    Submit?.addEventListener('click', function () {
        SetView();
    });


}
function PopulateComparePage() {
    LoadShips().then((_) => { UpdateCompare1(); UpdateCompare2(); });
}

addViewEventListerners();
