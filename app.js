let listaAmigos = [];

function agregarAmigo() {

    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo === "") {
        alert("Accion invalida, por favor ingrese un nombre");
        return;
    }
    listaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    document.getElementById("amigos").innerHTML = "";
    listaAmigos.forEach((listaAmigos) => {
        document.getElementById("amigos").innerHTML += `<li>${listaAmigos}</li>`;
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Lo siento, no hay amigos para sortear");
        return;
    }
    
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarAmigos = document.getElementById("amigos");
    limpiarAmigos.innerHTML = "";
}

function reiniciarJuego() {
    listaAmigos = [];
    document.getElementById("amigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}



