// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
let amigos = [];

// Función que se ejecuta cuando el usuario hace clic en el botón "Añadir"
function agregarAmigo() {
    // Obtenemos el elemento input por su id "amigo"
    let input = document.getElementById("amigo");
   

    // Tomamos el valor del input y eliminamos espacios en blanco al inicio y al final
    let nombre = input.value.trim();

    // ¨Para validar que no haya espacios vacíos
    if (nombre === "") {
        alert("Por favor, escribe un nombre."); 
        return; 
    }
     // Validar que solo contenga letras 
    let soloTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    
    // Revisar que contenga solo los caractéres permitidos.
    if (!soloTexto.test(nombre)) {
        alert("Por favor, ingresa solo texto");
        return;
    }
    // Validar que el nombre no esté ya en el array 
    let nombreMinuscula = nombre.toLowerCase();
    let existe = amigos.some(amigo => amigo.toLowerCase() === nombreMinuscula);
    if (existe) {
        alert("Este amigo ya está en la lista");
        return;
    }

    // Agregamos el nombre al final del array "amigos"
    amigos.push(nombre);

    // Limpiamos el contenido del input para ingresar el siguiente nombre
    input.value = "";

    // Mostrar la lista en pantalla
    mostrarListaAmigos();
}

// Función que dibuja en el HTML la lista de amigos
function mostrarListaAmigos() {
  
    let lista = document.getElementById("listaAmigos");

    // Limpiamos el contenido actual de la lista antes de volver a generarla
    lista.innerHTML = "";

    // Recorremos el array "amigos" y vamos creando un <li> por cada amigo
    amigos.forEach(function(amigo) {
        let li = document.createElement("li"); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
      let lista = document.getElementById("listaAmigos");

    //En caso que no tenga amigos para agregar y si cliquea el boton Sortear aparecerá este mensaje
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear</li>";
        return;
    }
    // Validar que haya al menos dos amigos para hacer el sorteo
    if (amigos.length < 2) {
        resultado.innerHTML = "<li>Debe ingresar al menos dos amigos.</li>";
        return;
    }
    // Elegir un índice aleatorio del array amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo seleccionado
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado 
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSeleccionado}</li>`;

    // Limpiar la lista de amigos en pantalla
    lista.innerHTML = "";

    // Vaciar el array amigos para que no queden nombres
    amigos = [];
}
