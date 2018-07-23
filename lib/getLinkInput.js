'use strict';

var getLinkInput = function getLinkInput() {
    var textinput = document.getElementById("userInput").value; //Variable que contiene el valor del inpun de HTML

    var regex = /!*\[(.+?)\]\((.+?)\)/gi;

    var resultInput = textinput.match(regex); //Comparacion de Input con regex

    var textRegex = /\[(\w+.+?)\]/gi;

    var urlRegex = /\((\w+.+?)\)/gi;
    console.log(resultInput);
    console.log("prueba");
    var finalResult = [];

    for (var i = 0; i < resultInput.length; i++) {
        var onlyString = resultInput[i].match(textRegex)[0].substring(1, resultInput[i].match(textRegex)[0].length - 1);
        // console.log(onlyString);
        var onlyUrl = resultInput[i].match(urlRegex)[0].substring(1, resultInput[i].match(urlRegex)[0].length - 1);
        // console.log(onlyUrl);

        finalResult.push({
            text: onlyString,
            href: onlyUrl
        });
        console.log(finalResult);
    }

    console.log(finalResult[0].text);
    console.log(finalResult[0].href);

    finalData(finalResult);

    // return finalResult
};

var textMd = document.getElementById("boton"); //Obteniendo el MD ingresado en el input del HTML
textMd.addEventListener("click", getLinkInput);

var finalData = function finalData(finalResult) {

    for (var x = 0; x < finalResult.length; x++) {

        var textLinks = document.createTextNode(finalResult[x].text + " " + finalResult[x].href);

        var newDiv = document.createElement("div");
        var listLinks = document.createElement("p");

        listLinks.appendChild(textLinks);
        newDiv.appendChild(listLinks); //añade texto al div creado.
        document.getElementById("showResult").appendChild(newDiv);
    }
    return finalData;
};