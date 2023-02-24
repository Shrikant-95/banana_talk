// console.log("Hey you are importing this from another file")


// var userName = prompt("Give your Username")
// alert("This Script works "+userName)

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputDiv = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text
} 

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server ! try again after sometime")

}

// console.log(btnTranslate);

function clickEventHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickEventHandler)