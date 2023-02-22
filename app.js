// console.log("Hey you are importing this from another file")


// var userName = prompt("Give your Username")
// alert("This Script works "+userName)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output")



// console.log(btnTranslate);

function clickEventHandler() {
    outputDiv.innerText = ("asgydyub"+ txtInput.value)
   
};

btnTranslate.addEventListener("click", clickEventHandler)