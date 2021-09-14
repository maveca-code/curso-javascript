'use strict'

window.addEventListener('load', ()=>{

    //Formulario que nos permita añadir peliculas
    
    var formulario = document.querySelector("#formPeliculas");

    formulario.addEventListener("submit", ()=>{
        var titulo = document.querySelector("#addpelicula").value;

        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);    
        }
    });

    var ul = document.querySelector("#peliculas-list");
    for(var i in localStorage){
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }


    //Borrar peliculas
    var formulario = document.querySelector("#formBorrarPeliculas");

    formulario.addEventListener("submit", ()=>{
        var titulo = document.querySelector("#removePelicula").value;

        if(titulo.length >= 1){
            localStorage.removeItem(titulo);    
        }
    });
});