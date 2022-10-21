var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationalUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error handler",error)
}

function clickHandler(){

    var inputText = txtInput.value;

    fetch(getTranslationalUrl(inputText))
    .then(response => response.json())
    .then(json => outputDiv.innerHTML = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);