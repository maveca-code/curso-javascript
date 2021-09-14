'use strict';

window.addEventListener('load', () => {

    //Fetch y peticiones a servicios / apis rest

    var div_usuarios = document.querySelector('#usuarios');
    var div_usuario = document.querySelector('#usuario');

    getUsuarios()
        .then(data => data.json())
        .then(users => {
            listadoUsuarios(users.data);
            console.log(users.data);

            return getUsuario();
        })
        .then(data => data.json())
        .then(user => {
            mostrarUsuario(user.data);

            return getInfo();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        });

    function getUsuarios() {
        var users = fetch('https://reqres.in/api/users');

        return users;
    }

    function getUsuario() {
        let user = fetch('https://reqres.in/api/users/2');

        return user;
    }

    function getInfo() {
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };

        //Crear promesa desde cero
        return new Promise((resolve, reject)=>{
            var profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string'){
                return reject('error');
            }
            return resolve(profesor_string);
        });
    }

    function listadoUsuarios(usuarios) {
        //Mostrar datos de los usuarios

        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + " - " + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        });
    }

    function mostrarUsuario(user) {

        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = "100";

        div_usuario.appendChild(nombre);
        div_usuario.appendChild(avatar);

        document.querySelector("#usuario .loading").style.display = 'none';
    }
});