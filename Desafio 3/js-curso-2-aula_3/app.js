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
        exibirTextoNaTela('h1', 'Acertou! ;)');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++; 
        // Mesmo que: tentativas = tentativas + 1;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
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
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// 1) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculoImc(peso, altura) {
    return resultadoImc = peso / (altura * altura);
}

calculoImc(96, 1.77);
console.log(resultadoImc);

// 2) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// 3) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente
// em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// 4) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e 
// largura que serão dadas como parâmetro.

// 5) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que
// será fornecido como parâmetro. Considere Pi = 3,14.

// 6) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.