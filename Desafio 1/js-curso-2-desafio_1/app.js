// 1) Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

// Download dos arquivos e abertura dos arquivos OK!!

// 2) Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// 3) Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function botaoConsole() {
    console.log('O botão foi clicado!');
}

// 4) Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function botaoAlerta() {
    alert('Eu amo JavaScript!!');
}

// 5) Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembreri de você! ;)`);    
}

// 6) Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.

function botaoSoma() {
    let valor1 = parseInt(prompt('Digite uma número'));
    let valor2 = parseInt(prompt('Digite outro número'));
    let resultado = valor1 + valor2;
    
    alert(`Se somar o ${valor1} e o ${valor2} o resultado será ${resultado}`);
    // ou alert(`${valor1} + ${valor2} = ${resultado}`);
}