//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let amigo = document.getElementById("amigo").value;
let amigosAdicionados = document.getElementById("listaAmigos");

function adicionarAmigo() {
    
    let amigo = document.getElementById("amigo").value;
    listaDeNomes.push(amigo);
}