'use strict';

/*
Crea las expresiones regulares necesarias para resolver los 
siguientes puntos: 

    - Crear una expresion regular que valide una fecha en formato 
    "XX/XX/XXXX", donde "X" es un digito. Probarlo con la 
    expresion: "Nací el 05/04/1982 en Donostia".

    - Crear una expresion regular que valide una direccion de 
    email. Para simplificar, los valores antes de la @ pueden 
    contener cualquier caracter alfanumerico, y los caracteres 
    . y -, mientras que los valores tras la @ pueden contener 
    caracteres alfanumericos, y el tipo de dominio puede tener 
    una longitud de 2 o 3 caracteres.

    -Dada la siguiente funcion que de reemplazo de caracteres, 
    reescribirla utilizando expresiones regulares.

        function escapeHTML(text) {
            var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                                ["<", "&lt;"], [">", "&gt;"]];
            forEach(replacements, function(replace) {
                text = text.replace(replace[0], replace[1]);
            });
            return text;
        }

    - Dados un nombre y un apellido, crear la expresion regular 
    necesaria para mostrarlos en orden inverso y separados por una 
    coma. Por ejemplo, la cadena "John Smith", convertirla en 
    "Smith, John".

*/

window.addEventListener('load', ()=>{

    compruebaFecha("Nací el 05/04/1982 en Donostia");
    compruebaFecha("05/04/1982");

    compruebaEmail("correo_mail@correo.es");
    compruebaEmail("correo.mail@correo.com");
    compruebaEmail("correomail93@correo.essss");
    compruebaEmail("correomail93@correo.es");

    escapeHTML("<h1>Hola & \"Mundo</h1>");

    ordenInverso("John Smith");
});

//Funcion que comprueba una fecha

function compruebaFecha(fecha){
    
    //Expresion regular que comprueba si el formato fecha es correcto
    var formatoFecha = /^\d{2}\/\d{2}\/\d{4}$/;

    //Comprobamos si el formato fecha es correcto
    console.log("Validacion formato fecha: "+formatoFecha.test(fecha)+" - "+fecha);
}

//Funcion que comprueba un email

function compruebaEmail(email){

    //Expresion regular que comprueba el email
    var formatoEmail = /^[\w|.]+\d?[@]{1}\w+[.]{1}\w{2,3}$/;
    
    //Comprobamos si el formato del email es correcto
    console.log("Validacion correo: "+formatoEmail.test(email)+" -  "+email);
}

//Funcion de reemplazo de caracteres

function escapeHTML(text) {
    /*var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;*/

    var replacements = {
        "&" : "&amp;",
        "\"": "&quot;",
        "<" : "&lt;",
        ">" : "&gt;"
    };

    text = text.replace(/[&\"<>]/g, (r)=>{
        return replacements[r];
    });

    console.log(text);
}

//Funcion orden inverso

function ordenInverso(cadena){

    //Separo el nombre y el apellido por un espacio y le damos la vuelta
    var inverso = cadena.split(/\s/).reverse();

    //Convierto a un string el array
    var cadenaInversa = inverso.toString();

    //Quito los espacios en blanco al principio y final de la cadena
    cadenaInversa.trim();

    //Doy un espacio en blanco despues de la coma
    var nuevaCadena = cadenaInversa.replace(',', ', ');

    //Muestro el resultado por pantalla
    console.log(nuevaCadena);
}