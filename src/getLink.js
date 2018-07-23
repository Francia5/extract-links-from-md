'use strict';
const fs = require('fs');

const readMd = fs.readFileSync("../md/README.md").toString(); // Se lee el archivo que esta en la carpeta md que es de tipo markdown y se convierte a string
const getLink = (md) => {
    const regex = /!*\[(.+?)\]\((.+?)\)/gi;  // Mediante una expresión regular le decimos que extraiga los links que esten dentro de los corchetes y los parentesis

    let resultUrl = md.match(regex); 

    const textRegex = /\[(\w+.+?)\]/gi; // Solo lo que se encuentre dentro de los corchetes
    const urlRegex = /\((\w+.+?)\)/gi; // Solo lo que se encuentre dentro de los parentesis
    const finalResult = [];

    for (let i = 0; i < resultUrl.length; i++) {
        let onlyString = resultUrl[i].match(textRegex)[0].substring(1, resultUrl[i].match(textRegex)[0].length - 1);
        // console.log(onlyString);
        let onlyUrl = resultUrl[i].match(urlRegex)[0].substring(1, resultUrl[i].match(urlRegex)[0].length - 1);
        // console.log(onlyUrl);


        finalResult.push({
            text: onlyString,
            href: onlyUrl
        });

    }
    console.log(finalResult);
    return (finalResult); // En finalResult guardamos el array de objetos con los links
    
    
}

getLink(readMd);


module.exports.getLink = getLink;