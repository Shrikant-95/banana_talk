// console.log("Hey you are importing this from another file")


// var userName = prompt("Give your Username")
// alert("This Script works "+userName)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");

console.log(txtInput)

// console.log(btnTranslate);

function clickEventHandler() {
    console.log("clicked");
    console.log("input",txtInput.value)
};

btnTranslate.addEventListener("click", clickEventHandler)