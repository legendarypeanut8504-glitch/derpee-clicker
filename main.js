let multiplier = 1;

let goldenAppleActive = false;

let apples = 0;
let applesPerSecond = 0;

let juicers = 0;
let juicerCost = 1000;

let appleTrees = 0;
let appleTreeCost = 150;

let orchards = 0;
let orchardsCost = 8000;

let Studio = 0;
let StudioCost = 100000;

const juicerButton = document.getElementById("juicer");
const apple = document.getElementById("apple");
const applesDisplay = document.getElementById("apples");
const appleTreeButton = document.getElementById("appleTree");
const orchardsButton = document.getElementById("orchard");
const goldenApple = document.getElementById("goldenApple");
const divider = document.getElementById("divider");
const StudioButton = document.getElementById("Studio");

// Apple clicking

apple.addEventListener("click", function() {
    apples += 1 * multiplier;
    updateDisplay();
});

// Display updates

function updateDisplay() {

    applesDisplay.textContent =
    Math.floor(apples) + " Apples | " +
    (applesPerSecond * multiplier) + " APS";

    appleTreeButton.innerHTML = `
    <img src="appletree.png" width="64" height="64">
    <div>
        Apple Tree<br>
        ${appleTreeCost} Apples<br>
        +2 Apples/sec
    </div>
    <span class="buildingCount">${appleTrees}</span>
    `;

    juicerButton.innerHTML = `
    <img src="juicer.png" width="64" height="64">
    <div id="juicerText">
        Juicer<br>
        ${juicerCost} Apples<br>
        +10 Apples/sec
    </div>
    <span class="buildingCount">${juicers}</span>
    `;

    orchardsButton.innerHTML = `
    <img src="orchard.png" width="64" height="64">
    <div id="orchardText">
        Orchard<br>
        ${orchardsCost} Apples<br>
        +55 Apples/sec
    </div>
    <span class="buildingCount">${orchards}</span>
    `;

    StudioButton.innerHTML = `
    <img src="studio.png" width="64" height="64">
    <div id="StudioText">
        Studio<br>
        ${StudioCost} Apples<br>
        +400 Apples/sec
    </div>
    <span class="buildingCount">${Studio}</span>
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

// Studio purchase

orchardsButton.addEventListener("click", function() {

    if (apples >= orchardsCost) {

        apples -= orchardsCost;
        orchards++;

        applesPerSecond += 300;

        orchardsCost = Math.round(orchardsCost * 1.2);

        updateDisplay();
    }
});

// golden apple ig

function activateGoldenApple() {

    if (goldenAppleActive) return;

    goldenAppleActive = true;

    multiplier = 5;

    setTimeout(function() {

        multiplier = 1;

        document.body.style.backgroundColor = "#c0e9c4";
        
        divider.style.backgroundColor = "#96f09d";

        goldenAppleActive = false;

    }, 60000);

}

goldenApple.addEventListener("click", function() {

    activateGoldenApple();

    document.body.style.backgroundColor = "#faf2c3";

    divider.style.backgroundColor = "#FFD700";

    goldenApple.style.display = "none";

});

function spawnGoldenApple() {

    goldenApple.style.display = "block";

    goldenApple.style.left =
        Math.random() * (window.innerWidth - 128) + "px";

    goldenApple.style.top =
        Math.random() * (window.innerHeight - 128) + "px";

    // Fade in

    setTimeout(function() {
        goldenApple.style.opacity = "1";
    }, 50);

    // Stay visible for 5 seconds

    setTimeout(function() {
        goldenApple.style.opacity = "0";
    }, 10000);

    // Fully hide after fade out

    setTimeout(function() {
        goldenApple.style.display = "none";
    }, 15000);

    scheduleGoldenApple();

}

function scheduleGoldenApple() {

    let nextSpawn =
        120000 + Math.random() * 60000;

    console.log("Next Golden Apple in", nextSpawn / 1000, "seconds");

    setTimeout(spawnGoldenApple, 120000);

}

scheduleGoldenApple();

// Initial display

updateDisplay();

// Automatic apple generation

setInterval(function() {

    apples += (applesPerSecond * multiplier) / 100;

    updateDisplay();

}, 10);
