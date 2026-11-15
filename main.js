
let apples = 0;
let applesPerSecond = 0;

let juicers = 0;
let juicerCost = 1000;

let appleTrees = 0;
let appleTreeCost = 150;

let orchards = 0;
let orchardsCost = 8000;

const juicerButton = document.getElementById("juicer");
const apple = document.getElementById("apple");
const applesDisplay = document.getElementById("apples");
const appleTreeButton = document.getElementById("appleTree");
const orchardsButton = document.getElementById("orchard");

// Apple clicking

apple.addEventListener("click", function() {
    apples++;
    updateDisplay();
});

// Display updates

function updateDisplay() {

    applesDisplay.textContent =
        Math.floor(apples) + " Apples | " +
        applesPerSecond + " APS";

    appleTreeButton.innerHTML = `
    <img src="appletree.png" width="64" height="64">
    <div>
        Apple Tree<br>
        ${appleTreeCost} Apples<br>
        +2 Apples/sec
    </div>
    <span class="buildingCount">........................................................${appleTrees}</span>
    `;

    juicerButton.innerHTML = `
    <img src="juicer.png" width="64" height="64">
    <div id="juicerText">
        Juicer<br>
        ${juicerCost} Apples<br>
        +10 Apples/sec
    </div>
    <span class="buildingCount">......................................................${juicers}</span>
    `;

    orchardsButton.innerHTML = `
    <img src="orchard.png" width="64" height="64">
    <div id="orchardText">
        Orchard<br>
        ${orchardsCost} Apples<br>
        +55 Apples/sec
    </div>
    <span class="buildingCount">...................................................${orchards}</span>
    `;
}

// Apple Tree purchase

appleTreeButton.addEventListener("click", function() {

    if (apples >= appleTreeCost) {

        apples -= appleTreeCost;
        appleTrees++;

        applesPerSecond += 2;

        appleTreeCost = Math.round(appleTreeCost * 1.2);

        updateDisplay();
    }
});

// Juicer purchase

juicerButton.addEventListener("click", function() {

    if (apples >= juicerCost) {

        apples -= juicerCost;
        juicers++;

        applesPerSecond += 10;

        juicerCost = Math.round(juicerCost * 1.2);

        updateDisplay();
    }
});

// Orchard purchase

orchardsButton.addEventListener("click", function() {

    if (apples >= orchardsCost) {

        apples -= orchardsCost;
        orchards++;

        applesPerSecond += 55;

        orchardsCost = Math.round(orchardsCost * 1.2);

        updateDisplay();
    }
});

// Initial display

updateDisplay();

// Automatic apple generation

setInterval(function() {

    apples += applesPerSecond / 100;

    updateDisplay();

}, 10);
