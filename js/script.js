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


// -------------------------------
//     healthy and fast food section
//     -----------------------------
const slider = document.getElementById("slider");
const fastFoodsContainer = document.getElementById("fastFoodsContainer");
const healthyFoodsContainer = document.getElementById("healthyFoodsContainer");
const fastFoodsList = document.getElementById("fastFoodsList");
const healthyFoodsList = document.getElementById("healthyFoodsList");


function rightSide() {
    slider.style.left = "50%";
    healthyFoodsContainer.style.display = "grid";
    fastFoodsContainer.style.display = "none";
    healthyFoodsList.style.display = "grid";
    fastFoodsList.style.display = "none";
}


function leftSide() {
    slider.style.left = "0";
    fastFoodsContainer.style.display = "grid";
    healthyFoodsContainer.style.display = "none";
    fastFoodsList.style.display = "grid";
    healthyFoodsList.style.display = "none";
}


// feedback_box
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");



function slideOne() {
    one.style.left = "0"
    two.style.left = "0";
    three.style.left = "0";
    four.style.left = "0";
    five.style.left = "0";
    six.style.left = "0";
}
function slideTwo() {
    one.style.left = "-111%"
    two.style.left = "-111%";
    three.style.left = "-111%";
    four.style.left = "-111%";
    five.style.left = "-111%";
    six.style.left = "-111%";
}
function slideThree() {
    one.style.left = "-222%"
    two.style.left = "-222%";
    three.style.left = "-222%";
    four.style.left = "-222%";
    five.style.left = "-222%";
    six.style.left = "-222%";
}
function slideFour() {
    one.style.left = "-333%"
    two.style.left = "-333%";
    three.style.left = "-333%";
    four.style.left = "-333%";
    five.style.left = "-333%";
    six.style.left = "-333%";
}
