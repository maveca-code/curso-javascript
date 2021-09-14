'use strict'

window.addEventListener('load', ()=>{
    
    //Local Storage

    //Comprobar si el navegador es compatible
    if(typeof(Storage) !== 'undefined'){
        console.log("Local Storage disponible");
    }else{
        console.log("Local Storage NO disponible");
    }

    //Como guardar un dato
    localStorage.setItem("titulo", 'Curso JavaScript');
                         //llave , valor que tiene  

    //Recuperar elemento
    var valor_recuperado = localStorage.getItem("titulo");
    console.log(valor_recuperado);
    document.querySelector("#peliculas").innerHTML = valor_recuperado;

    //Guardar Objetos
    var usuario = {
        nombre: "Mario",
        email: "mario@mario.es"
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    //JSON.stringify() -> convierte el objeto JSON en un string

    //Recuperar objeto
    var objeto_recuperado = JSON.parse(localStorage.getItem("usuario"));
    //JSON.parse -> convierte un string de JSON en un objeto usable
    console.log(objeto_recuperado);
    document.querySelector("#datos").append(objeto_recuperado.nombre+" "+objeto_recuperado.email);

    //Borrar datos
    localStorage.removeItem("usuario");

    //Vaciar Local Storage
    localStorage.clear();

});