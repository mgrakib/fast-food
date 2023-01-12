// ------------- hambar subsection ----------

const hambarSection = document.getElementById("hambarSection");

const hambarSubmenuItemsH = document.getElementById("hambarSubmenuItemsH");
const hambarSubmenuItemsM = document.getElementById("hambarSubmenuItemsM");
const hambarSubmenuItemsS = document.getElementById("hambarSubmenuItemsS");
const hambarSubmenuItemsP = document.getElementById("hambarSubmenuItemsP");
const hambarSubmenuItemsB = document.getElementById("hambarSubmenuItemsB");

function hambarClose() {
    hambarSection.style.left = "-100%";
    hambarSection.style.opacity = "0";
}

function hambarOpen() {
    hambarSection.style.left = "0";
    hambarSection.style.opacity = "1";
}


// ------------- hambar subsection ----------

function showHamsubH() {
    hambarSubmenuItemsH.style.display = "block";
}
function showHamsubM() {
    hambarSubmenuItemsM.style.display = "block";
}
function showHamsubS() {
    hambarSubmenuItemsS.style.display = "block";
}
function showHamsubP() {
    hambarSubmenuItemsP.style.display = "block";
}
function showHamsubB() {
    hambarSubmenuItemsB.style.display = "block";
}