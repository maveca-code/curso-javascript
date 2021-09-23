'use strict';

/*
Construir un validador para un formulario de registro que, dado el 
HTML que se proporciona, valide cada uno de los campos cuando el 
usuario ha terminado de introducir datos en cada uno de ellos, es 
decir, al perder el foco. Si el campo no cumple las restricciones, 
e mostrará una alerta al usuario, pero se le permitirá seguir 
introduciendo datos en el resto de campos.

En el momento en el que el usuario envíe el formulario 
(evento submit), se validarán todos los campos y el formulario 
no se enviará si alguno de los campos no es válido. Las 
restricciones a cumplir son las siguientes:

    - El nombre, email y comentarios son campos obligatorios.

    - El campo email debe ser una dirección de email válida.

    - El texto introducido en el campo de comentarios no debe exceder 
    los 50 caracteres.

    - El password debe tener una longitud mínima de 6 caracteres, y 
    contener al menos una letra minúscula, una letra mayúscula y un 
    dígito.
 */

window.addEventListener('load', () => {
    
    //Sacamos el contenido de los inputs del formulario
    var formulario = document.querySelector('#registro');
    var nombre = document.querySelector("#registro_nombre");
    var apellido = document.querySelector('#registro_apellido');
    var email = document.querySelector('#registro_email');
    var password = document.querySelector('#registro_password');
    var comentarios = document.querySelector('#registro_comentarios');

    //Expresiones regulares
    var formatoEmail = /^[\w|.]+\d?[@]{1}\w+[.]{1}\w{2,3}$/;
    var formatoPassword =/\[a-zA-Z]*\d*/; 

    //Eventos blur
    nombre.addEventListener('blur', () => {
        nombre = nombre.value;

        if(nombre.trim() == null || nombre.length == 0){
            alert("El nombre no es valido");
        }
    });

    email.addEventListener('blur', () => {
        email = email.value;

        if(email.trim() == null || email.length == 0 || formatoEmail.test(email) == false){
            alert("El email no es valido");
        }
    });

    comentarios.addEventListener('blur', () => {
        comentarios = comentarios.value;

        if(comentarios.trim == null || comentarios.length == 0 || comentarios.length >= 51){
            alert("El comentario no es valido, no debe pasar de los 50 caracteres");
        }
    });

    password.addEventListener('blur', () => {
        password = password.value;

        if(password.trim() == null || password.length == 0 || password.length < 6 || formatoPassword.test(password == false)){
            alert("La contraseña no es valida, comprueba:\n\t-La longitud minima son 6 caracteres\n\t-Tiene que contener al menos una letra minúscula, una letra mayúscula y un dígito");
        }
    });

    //Evento submit
    formulario.addEventListener('submit', () => {
        
        //Sacamos el contenido de los inputs del formulario
        nombre = nombre.value;
        apellido = apellido.value;
        email = email.value;
        password = password.value;
        comentarios = comentarios.value;

        //Comprobamos si los campos estan vacios
        if(nombre.trim() == null || nombre.length == 0){
            alert("El nombre no es valido");

            return false;
        }

        if(email.trim() == null || email.length == 0 || formatoEmail.test(email) == false){
            alert("El email no es valido");

            return false;
        }

        if(comentarios.trim == null || comentarios.length == 0 || comentarios.length >= 51){
            alert("El comentario no es valido, no debe pasar de los 50 caracteres");

            return false;
        }

        if(password.trim() == null || password.length == 0 || password.length < 6 || formatoPassword.test(password == false)){
            alert("La contraseña no es valida, comprueba:\n\t-La longitud minima son 6 caracteres\n\t-Tiene que contener al menos una letra minúscula, una letra mayúscula y un dígito");

            return false;
        }
    });
});
