// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y
 se mostrará en la página.
*/

// Variables

let nombres = [];

function agregarAmigo(){
    let amigoSecreto = document.getElementById("amigo").value;
    if(amigoSecreto == ""){
        alert("Por favor, inserte un nombre.");
    }else{
        nombres.push(amigoSecreto);
        limpiarCaja();
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < nombres.length; i++){
        listaAmigos.innerHTML += "<li>" + nombres[i] + "</li>";
    }
}

function sortearAmigo(){
    if (nombres.length == 0){
        alert("No hay amigos para sortear.");
    }else{
        let amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];
        listaAmigos.innerHTML = "";
        mensaje = `El amigo secreto sorteado es:${amigoSorteado} `;
        document.getElementById("resultado").innerHTML = mensaje;
    }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}