// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Captura el campo de texto
    const nombre = input.value.trim(); // Obtiene el valor y elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Validación del campo vacío
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista."); // Evita nombres duplicados
        return;
    }

    listaDeAmigos.push(nombre); // Agrega el nombre al array
    actualizarLista(); // Llama a la función para actualizar la lista en la interfaz
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("delete-button");
        btnEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaDeAmigos.splice(index, 1); // Elimina el nombre del array
    actualizarLista(); // Actualiza la lista en la interfaz
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Agregue al menos un amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];

    // Muestra el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="winner">🎉 ${amigoSeleccionado} es el amigo secreto 🎉</li>`;
    mostrarBotonReinicio();

}

// Función para mostrar el botón de reinicio
function mostrarBotonReinicio() {
    const buttonContainer = document.querySelector(".button-container");

    // Verificar si ya existe el botón para no duplicarlo
    if (!document.getElementById("btnReiniciar")) {
        const btnReiniciar = document.createElement("button");
        btnReiniciar.id = "btnReiniciar";
        btnReiniciar.textContent = "Reiniciar Juego";
        btnReiniciar.classList.add("button-reset");
        btnReiniciar.onclick = reiniciarJuego;

        buttonContainer.appendChild(btnReiniciar);
    }
}

// Función para reiniciar el juego
function reiniciar() {
    listaDeAmigos = []; // Vaciar la lista de amigos
    actualizarLista(); // Limpiar la lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Borrar resultado
    }
