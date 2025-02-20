//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomes = [];
let amigo = document.getElementById("amigo").value;

function exibirNomesNaLista() {

    let listaParaExibir = document.getElementById("listaAmigos");
    listaParaExibir.innerHTML = "";

    for (let i = 0; i < listaDeNomes.length; i++) {

        let li = document.createElement("li");
        li.textContent = listaDeNomes[i];
        listaParaExibir.appendChild(li);
    }

}

function limparCampo() {
    amigo = document.querySelector("input");
    amigo.value = "";
}

function adicionarAmigo() {
    
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, insira um nome");
    } else {
        listaDeNomes.push(amigo);
        limparCampo();        
    }
    
    exibirNomesNaLista();
}

function sortearAmigo() {

    if (listaDeNomes.length == 0) {
        alert("Por favor, insira nomes para sorteio");
    } else {
        let nomeIndex = parseInt(Math.random() * listaDeNomes.length);
         let resultado = document.getElementById("resultado");
        resultado.innerHTML = listaDeNomes[nomeIndex];
    }
}