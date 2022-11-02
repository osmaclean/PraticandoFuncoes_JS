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

function numQuadrado() {
    let aoQuadrado = parseInt(prompt("Digite um número inteiro"));
    let calculaQuadrado = aoQuadrado * aoQuadrado;
    alert(`O quadrado de ${aoQuadrado} é: ${calculaQuadrado} `);
}
numQuadrado();

// Sexta Tarefa

function quatroNumbers() {
    let NumberOne = parseInt(prompt("Digite o primeiro número"));
    let NumberTwo = parseInt(prompt("Digite o segundo número"));
    let NumberThree = parseInt(prompt("Digite o terceiro número"));
    let NumberFour = parseInt(prompt("Digite o quarto número"));
    let calcSoma = NumberOne + NumberTwo + NumberThree + NumberFour;
    let mp = ((NumberOne * NumberOne) + (NumberTwo * NumberTwo) + (NumberThree * NumberThree) + (NumberFour * NumberFour)) / calcSoma;
    alert(`A média ponderada, é: ${mp}`);

}
quatroNumbers();

// Sétima Tarefa

function quatroProvas() {
    let matematica = parseInt(prompt("Digite a nota de Matemática"));
    let portugues = parseInt(prompt("Digite a nota de Português"));
    let geografia = parseInt(prompt("Digite a nota de Geografia"));
    let informatica = parseInt(prompt("Digite a nota de Informática"));
    let somaNotas = matematica + portugues + geografia + informatica;
    let MediaPonderada = ((matematica * matematica) + (portugues * portugues) + (geografia * geografia) + (informatica * informatica)) / somaNotas;
    alert(`A média ponderada é de: ${MediaPonderada.toFixed(2)} e a soma das notas é de: ${somaNotas}`);
}
quatroProvas();

// Oitava Tarefa

function percentual() {
    let saldo = parseFloat(prompt("Insira o saldo da aplicação"));
    let calcReajuste = (saldo * 0.03) + saldo;
    alert(`O novo salário é de: R$${calcReajuste.toFixed(2)} considerando o reajuste de 3%`);
}
percentual();

// Nona Tarefa

function triangulo() {
    let altura = parseInt(prompt("Digite a altura do triângulo"));
    let base = parseInt(prompt("Digite a base do triângulo"));
    let calcTriangulo = (base * altura) / 2;
    alert(`A área do triângulo é: ${calcTriangulo}`);
}
triangulo();

// Décima tarefa (Bônus)

function tarefaBonus(){
 let salario = parseInt(prompt("Digite o seu salário"));
 let calcAjuste = (salario * 0.14) + salario;
 alert(`O seu salário é de: R$${salario.toFixed(2)} com o ajuste de 14% fica em: R$${calcAjuste.toFixed(2)}`);
}
tarefaBonus();

alert(`Page made by: Lucas Maclean.`);
alert(`Página de aprendizado e execução de Funções e Cálculos.`);