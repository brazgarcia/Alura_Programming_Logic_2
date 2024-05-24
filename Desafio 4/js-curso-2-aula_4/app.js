// Nessa aula tivemos o primeiro contato com a tag "Array".
let listaDeNumerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let = quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // o atributo "includes" verifica se o elementos já foi incluido na listaDeNumerosSoteados e retorna como true ou false.
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // o atibuto "push" adiciona um item ao final da lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// 1) Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

// 2) Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagemDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3) Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagemDeProgramacao.push('Java');
linguagemDeProgramacao.push('Ruby');
linguagemDeProgramacao.push('GoLang');
// Nesse caso específico eu poderia fazer em uma única linha de comando como no exemplo abaixo:
// linguagemDeProgramacao.push('Java', 'Ruby', 'GoLand');

console.log(linguagemDeProgramacao);

// 4) Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomesFamilia = ['Marcelo', 'Elaine', 'Braz'];
console.log(nomesFamilia [0]);
console.log(nomesFamilia.length);

// 5) Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

let nomesFamiliaEla = ['João Paulo', 'Aline', 'Amanda'];
console.log(nomesFamiliaEla [1]);
console.log(nomesFamiliaEla.length);

// 6) Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let nomesAmigos = ['Felipe', 'Tavinho', 'Júlio'];
console.log(nomesAmigos[2]);
console.log(nomesAmigos.length);



