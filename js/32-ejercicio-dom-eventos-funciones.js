'use strict'

window.addEventListener('load', ()=>{

    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');
    var errorNombre = document.querySelector("#error_nombre");
    var errorApellidos = document.querySelector("#error_apellidos");
    var errorEdad = document.querySelector("#error_edad");
    box_dashed.style.display = "none";

    //Evento del boton submit
    formulario.addEventListener('submit',()=>{
        var nombre = document.querySelector('#name').value;
        var apellidos = document.querySelector('#surname').value;
        var edad = parseInt(document.querySelector('#age').value);

        if(nombre.trim() == null || nombre.trim().length ==0){
            //alert("El nombre no es valido");
            errorNombre.innerHTML = "El nombre no es valido";
            errorNombre.style.color = "tomato";

            return false;
        }else{
            errorNombre.style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            //alert("Los apellidos no son validos");
            errorApellidos.innerHTML = "Los apellidos no son validos";
            errorApellidos.style.color = "tomato";

            return false;
        }else{
            errorApellidos.style.display = "none";
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            //alert("La edad no es valida");
            errorEdad.innerHTML = "La edad no es valida";
            errorEdad.style.color = "tomato";

            return false;
        }else{
            errorEdad.style.display = "none";
        }

        box_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];
        var indice;

        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
    });
});