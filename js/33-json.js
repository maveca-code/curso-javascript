'use strict'

window.addEventListener('load', () => {
    //JSON - JavaScript Object Notation

    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados Unidos'
    };

    console.log(pelicula);

    //Cambiar valor de una propiedad
    pelicula.titulo = "Batman Begins";

    console.log(pelicula.titulo);
    console.log(pelicula);

    //Array de objetos
    var peliculas = [
        { titulo: "La verdad duele", year: 2016, pais: "Francia" },
        pelicula
    ];

    console.log(peliculas);

    var caja_peliculas = document.querySelector("#peliculas");
    var index;
    for (index in peliculas) {
        var parrafo = document.createElement("p");
        parrafo.append(peliculas[index].titulo+" - "+peliculas[index].year);
        caja_peliculas.append(parrafo);
    }
});