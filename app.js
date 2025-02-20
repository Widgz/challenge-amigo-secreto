//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let amigo = document.getElementById("amigo").value;
let amigosAdicionados = document.getElementById("listaAmigos");

function limparCampo() {
    amigo = document.querySelector("input");
    amigo.value = "";
}

function adicionarAmigo() {
    
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, insira um nome")
    } else {
        listaDeNomes.push(amigo);
        limparCampo();        
    }
    
}