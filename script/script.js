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

function notasSemestrais(){
    let primeiraNota = parseInt(prompt("Insira a primeira nota semestral"));
    let segundaNota = parseInt(prompt("Insira a segunda nota semestral"));
    let mediaAnual = (primeiraNota + segundaNota) / 12;
    alert(`A média anual das notas é de: ${mediaAnual.toFixed(2)}`)
}

notasSemestrais();