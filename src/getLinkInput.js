'use strict';


const getLinkInput = () => {
    let textinput = document.getElementById("userInput").value; //Variable que contiene el valor del inpun de HTML

    const regex = /!*\[(.+?)\]\((.+?)\)/gi;

    let resultInput = textinput.match(regex); //Comparacion de Input con regex

    const textRegex = /\[(\w+.+?)\]/gi;

    const urlRegex = /\((\w+.+?)\)/gi;
    console.log(resultInput);
    const finalResult = [];

    for (let i = 0; i < resultInput.length; i++) {
        let onlyString = resultInput[i].match(textRegex)[0].substring(1, resultInput[i].match(textRegex)[0].length - 1);
        // console.log(onlyString);
        let onlyUrl = resultInput[i].match(urlRegex)[0].substring(1, resultInput[i].match(urlRegex)[0].length - 1);
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
}

const textMd = document.getElementById("boton"); //Obteniendo el MD ingresado en el input del HTML
textMd.addEventListener("click", getLinkInput);

const finalData = (finalResult) => {

    for (let x = 0; x < finalResult.length; x++) {

        let textLinks = document.createTextNode(finalResult[x].text + " " + finalResult[x].href);

        const newDiv = document.createElement("div");
        const listLinks = document.createElement("p");

        listLinks.appendChild(textLinks);
        newDiv.appendChild(listLinks); //añade texto al div creado.
        document.getElementById("showResult").appendChild(newDiv);

    }
    return finalData;
}