const hambarSection = document.getElementById("hambarSection");


function hambarClose() {
    hambarSection.style.left = "-100%";
    hambarSection.style.opacity = "0";
}

function hambarOpen() {
    hambarSection.style.left = "0";
    hambarSection.style.opacity = "1";
}