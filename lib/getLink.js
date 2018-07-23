'use strict';

var fs = require('fs');

var readMd = fs.readFileSync("../md/README.md").toString(); // Se lee el archivo que esta en la carpeta md que es de tipo markdown y se convierte a string
var getLink = function getLink(md) {
    var regex = /!*\[(.+?)\]\((.+?)\)/gi; // Mediante una expresión regular le decimos que extraiga los links que esten dentro de los corchetes y los parentesis

    var resultUrl = md.match(regex);

    var textRegex = /\[(\w+.+?)\]/gi; // Solo lo que se encuentre dentro de los corchetes
    var urlRegex = /\((\w+.+?)\)/gi; // Solo lo que se encuentre dentro de los parentesis
    var finalResult = [];

    for (var i = 0; i < resultUrl.length; i++) {
        var onlyString = resultUrl[i].match(textRegex)[0].substring(1, resultUrl[i].match(textRegex)[0].length - 1);
        // console.log(onlyString);
        var onlyUrl = resultUrl[i].match(urlRegex)[0].substring(1, resultUrl[i].match(urlRegex)[0].length - 1);
        // console.log(onlyUrl);


        finalResult.push({
            text: onlyString,
            href: onlyUrl
        });
    }
    console.log(finalResult);
    return finalResult; // En finalResult guardamos el array de objetos con los links

};

getLink(readMd);

module.exports.getLink = getLink;