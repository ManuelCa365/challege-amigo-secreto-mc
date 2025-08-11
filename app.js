// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaracion de variable Array
let inputAmigo = document.getElementById("amigo");  //getElementById amigo
let amigos = [];    // Declaracion de variable Array
let ulListaAmigos = document.getElementById("listaAmigos"); //getElementById listaAmigos


    // Funcion que agrega amigos, pero cuando detecta que no hay nada marca error.
function agregarAmigo() {
    let nombreAmigo = inputAmigo.value.trim();  //Utilizamos trim para quitar espacios
    if (nombreAmigo === '') {
        alert("Error, debes de ingresar un nombre");    // Funcion alert, que informa del error en blanco
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert("Error: ¡ese nombre ya se encuentra en la lista!");
        return;
    }

    // Creamos un nuevo elemento <li>
    let nuevoAmigoItem = document.createElement("li");
    // Asignamos el nombre como texto
    nuevoAmigoItem.textContent = nombreAmigo;
    //Agregamos el nuevo elemento a la lista <ul>
    ulListaAmigos.appendChild(nuevoAmigoItem);

    amigos.push(nombreAmigo);  // Si el parametro cumple con el nombre, agrega el nombre    
    inputAmigo.value = "";  // Al ingresar el dato, se vuelve a poner en blanco
    console.log(amigos);    // Vista de array en console.log
}

    //Funcion para sortear amigo
function sortearAmigo() {
    // Primero validamos que no este en 0 la lista
    if (amigos.length === 0) {
        alert("Error: no hay amigos para elegir a tu amigo.");
        return;
    }

    // En esta parte generamos el indice aleatorio con la funcion Math.random() que genera un numero entre 0 y 1.
    // Multiplicamos por la longitud del arry para que el numero sea entre 0 y el Math.floor() redondea el
    // numero hacia abajo para obtener un indice entero.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Nombre sorteado
    let amigoSecreto = amigos[indiceAleatorio];

    // Resultado
    // Utilzamos el id resultado para mostral el nombre
    let elementoResuelto = document.getElementById("resultado");
        elementoResuelto.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}


