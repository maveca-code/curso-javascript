'use strict';

/*
Crear un script que visualice el día de la semana, usa la función 
getDay() y un array con los nombres de los días de la semana.
*/

window.addEventListener('load', () => {

    diasSemana();
});

function diasSemana(){

    //Sacamos el día de la semana que es
    var fecha = new  Date();
    var dia = fecha.getDay();

    //Array con los dias de la semana
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
   
    //Mostramos el día de la semana que es
    alert("Hoy es "+dias[dia]);
}