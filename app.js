// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// función para agregar amigos
function agregarAmigo() {
    // mediante el DOM obtiene el texto ingresado por el usuario
    let nombre = document.getElementById('amigo').value;
    // valida la entrada de datos
    // si no se ingresa un nombre no es válida
    if (nombre == '') {
        alert('Por favor, ingrese un nombre');
    // en caso contrario, si se ingresa un nombre, es válida
    } else {
        amigos.push(nombre);
        nombre = document.getElementById('amigo').value = '';
    }
    console.log(amigos);
    actualizarLista();
}

// función para actualizar la lista de amigos
function actualizarLista() {
    // mediante el DOM selecciona la lista donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    // Crea un elemento 'li' dentro de la lista 'listaAmigos' para cada elemento correspondiente de la lista 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        let elementoListaAmigos = document.createElement('li');
        // muestra cada nombre ingresado
        elementoListaAmigos.innerHTML = amigos[i];
        lista.appendChild(elementoListaAmigos);
    }
    console.log(lista);
}
