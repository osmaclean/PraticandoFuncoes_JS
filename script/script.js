// Primeira Tarefa


function leitura() {
    let numeroInteiro = parseInt(prompt("Insira um número inteiro"));
    alert(`O seu número inteiro é ${numeroInteiro}`);
}
leitura();

// Segunda Tarefa

function tresNumeros() {
    let primeiroNumero = parseInt(prompt("Insira o 1º número"));
    let segundoNumero = parseInt(prompt("Insira o 2º número"));
    let terceiroNumero = parseInt(prompt("Insira o 3º número"));
    let somaDosNumeros = primeiroNumero + segundoNumero + terceiroNumero;
    alert(`A soma dos números resulta em: ${somaDosNumeros}`);
}
tresNumeros();

// Terceira Tarefa

function notasSemestrais() {
    let primeiraNota = parseInt(prompt("Insira a primeira nota semestral"));
    let segundaNota = parseInt(prompt("Insira a segunda nota semestral"));
    let mediaAnual = (primeiraNota + segundaNota) / 12;
    alert(`A média anual das notas é de: ${mediaAnual.toFixed(2)}`);
}
notasSemestrais();

// Quarta Tarefa

function divisaoDois() {
    let primNumero = parseInt(prompt("Insira o primeiro número"));
    let segunNumero = parseInt(prompt("Insira o segundo número"));
    let divisao = primNumero / segunNumero;
    let resto = primNumero % segunNumero;

    if (resto == 0) {
        alert(`Esta divisão é exata, não há resto.`);
    } else {
        alert(`Está é uma divisão inexata. O resultado é: ${divisao} e o resto é: ${resto}`);
    }
}
divisaoDois();

// Quinta Tarefa

function numQuadrado(){
 let aoQuadrado = parseInt(prompt("Digite um número inteiro"));
let calculaQuadrado = aoQuadrado * aoQuadrado;
alert(`O quadrado de ${aoQuadrado} é: ${calculaQuadrado} `);
}
numQuadrado();

// Sexta Tarefa

