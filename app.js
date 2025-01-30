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

// función para sortear a los amigos de la lista
function sortearAmigo() {

    // valida que la lista 'amigos' no esté vacía
    // si no está vacía
    if (amigos.length > 0) {
        // Genera un índice aleatorio con un límite máximo según la cantidad de amigos ingresados
        let indiceDelGanador = Math.floor(Math.random()*amigos.length-1)+1;
        console.log(indiceDelGanador);
        // Obtiene el nombre del ganador
        let nombreDelGanador = amigos[indiceDelGanador];
        console.log(nombreDelGanador);
        // muestra el nombre del ganador
        // Mediante el DOM selecciona el elemento correspondiente
        let mensajeDelGanador = document.getElementById('resultado');
        // Mediante el DOM y template string muestra el resultado en el elemento seleccionado
        mensajeDelGanador.innerHTML = `El amigo secreto sorteado es: ${nombreDelGanador}`;
        finalizarSorteo();        

    // En caso contrario, si la lista 'amigos' está vacía
    } else {
        alert('La lista está vacía, por favor inserte un nombre');
    }
}

function finalizarSorteo() {
    // Limpia el elemento que contiene los elementos 'li'
    console.log(amigos.length);
    for (let j = 0; j < amigos.length; j++) {
        document.querySelector('li').remove();
    }
    // Re inicializa la lista 'amigos'
    amigos = [];
    console.log(amigos.length);
    // deshabilita los botones
    deshabilitarBoton('.button-add');
    deshabilitarBoton('.button-draw');
}

function deshabilitarBoton(claseBoton) {
    document.querySelector(claseBoton).setAttribute('disabled', 'true');
}
