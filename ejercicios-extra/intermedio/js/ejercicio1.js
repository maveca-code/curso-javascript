'use strict';

/*
Definir la siguiente jerarquia de objetos, haciendo uso de los 
prototipos de JavaScript:

    -Objeto Persona con las propiedades nombre, edad y genero y 
    el metodo obtDetalles(), que muestra por pantalla las 
    propiedades de la persona.

    -Objeto Estudiante, que hereda de Persona e incluye las 
    propiedades curso y grupo y el metodo registrar().

    -Objeto Profesor, que hereda de Persona, e incluye las 
    propiedades asignatura y nivel y el metodo asignar().

Crea los objetos y casos de prueba necesarios para comprobar el 
correcto funcionamiento de la jerarquía.
*/

//Creamos las superclase y los hijos

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
};

function Estudiante(curso, grupo){
    this.curso = curso;
    this.grupo = grupo;
};

function Profesor(asignatura, nivel){
    this.asignatura = asignatura;
    this.nivel = nivel;
};

//Añadimos el metodo de la superclase

Persona.prototype.obtDetalles = function(){
    console.log("Nombre: "+this.nombre+"\nEdad: "+this.edad);
};

console.log(Estudiante.prototype);
//Creamos los objetos

Estudiante.prototype = new Persona;
Profesor.prototype = new Persona;

//Añadimos los metodos a cada elemento hijo

Estudiante.prototype.registrar = function(){
    console.log("Estudiante registrado");

};

Profesor.prototype.asignar = function(){
    console.log("Metodo asignar");
};

//Objeto estudiante
var estudiante1 = new Estudiante;
estudiante1.nombre = "Pepe";
estudiante1.edad = 15;
estudiante1.curso = "3º ESO";
estudiante1.grupo = "B";
estudiante1.obtDetalles();
estudiante1.registrar();

//Objeto profesor
var profesor1 = new Profesor;
profesor1.nombre = "Pepe";
profesor1.edad = 50;
profesor1.asignatura = "Matematicas";
profesor1.nivel = "Alto";
profesor1.obtDetalles();
profesor1.asignar();