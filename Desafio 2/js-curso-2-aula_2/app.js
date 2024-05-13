
let = numeroSecreto = gerarNumeroAleatorio();

// Peceba que podemos substituir a primeira função para a segunda:

// 1ª:
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// 2ª:
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1' ,'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
//

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Desafio

// 1) Criar uma função que exibe "Olá, mundo!" no console.

function teste() {
    console.log('Olá mundo!');
}

teste();

// 2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nomeNaTela(nome) {
    console.log(`Olá, ${nome}!`);
}

nomeNaTela('Braz');  

// 3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcular(numero) {
    return numero * 2;
}

let resultado = calcular(5);
console.log(resultado);

// 4) Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(val1, val2, val3) {
    return (val1 + val2 + val3) / 3;
}

let media = calcularMedia(5, 10, 15);
console.log(media)

// 5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a, b) {
    if (a > b) {
        console.log(`O ${a} é maior que ${b}`);
    } else {
        console.log(`O ${b} é maior que ${a}`);
    }
}

let numeros = maiorNumero(2, 4);  // Nesse caso, também é possível fazer de outra maneira:

function encontrarMaior(x, y) {
    return x > y ? x : y;
}

let maiorNumero1 = encontrarMaior(15, 2);
console.log(maiorNumero1);

// 6) Criar uma função que recebe um número como parâmetro e retorna o resultado da 
// multiplicação desse número por ele mesmo.

function multiplicacao(z) {
    return z * z
}

let resultadoMultiplicacao = multiplicacao(4);
console.log(resultadoMultiplicacao);