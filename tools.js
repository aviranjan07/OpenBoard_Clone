let optionCont = document.querySelector(".options-cont");
let optionsFlag = true;

//true - tools show and false - hide tools
optionCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;

    if(optionsFlag) openTools();
    else closeTools();
})

function openTools() {
    let iconElem = optionCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
}
function closeTools() {
    let iconElem = optionCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
}