const getLink = require('../src/getLink'); //Variable que contiene la ruta a la función 
const assert = require('assert'); //Modulo de prueba

//Aserción de igualdad
describe('Test MD()', () => {  
    //Parametros a considerar en la igualdad
    it('Deberia identificar el link "[Wikipedia](https://es.wikipedia.org/wiki/Wikipedia:Portada)" y devolverlo en un array de objetos', () => {
        //Variable que contiene los parametros como los queremos obtener
        const test = [{ "text": "Wikipedia", "href": "https://es.wikipedia.org/wiki/Wikipedia:Portada" }];
        //Método prueba deepEqual. Comparando si dos parametros y sus objetos secundarios son iguales.
        assert.deepEqual(getLink.getLink('[Wikipedia](https://es.wikipedia.org/wiki/Wikipedia:Portada)'), test);
    });
    it('Debería identificar el link "[Google](http://www.google.com)" y devolverlo en un array de objetos', () => {
        const test = [{ "text": "Google", "href": "http://www.google.com" }];
        assert.deepEqual(getLink.getLink('[Google](http://www.google.com)'), test);
    });
    it('Debería identificar el link "[ftp](ftp://ftp.ejemplo.com)" y devolverlo en un array de objetos', () => {
        const test = [{ "text": "ftp", "href": "ftp://ftp.ejemplo.com" }];
        assert.deepEqual(getLink.getLink('[ftp](ftp://ftp.ejemplo.com)'), test);
    });
    it('Debería identificar el link "[server](file://server.com)" y devolverlo en un array de objetos', () => {
        const test = [{ "text": "server", "href": "file://server.com" }];
        assert.deepEqual(getLink.getLink('[server](file://server.com)'), test);

    });
});