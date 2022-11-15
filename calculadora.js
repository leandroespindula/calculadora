let resultado;

function realizarCalculo() {
    //variavel num1 recebe o primeiro valor
    var num1 = document.querySelector("#primeiro__numero");
    var num1 = parseInt(num1.value);

    //variavel num2 recebe o segundo valor
    var num2 = document.querySelector("#segundo__numero");
    var num2 = parseInt(num2.value);

    //variavel operacao recebe o sinal da operaçao 
    var operacao = document.querySelector("#seletor");
    var operacao = operacao.value;

    switch (operacao) {
        case "-":
            resultado = num1 - num2;
            break;
        case "+":
            resultado = num1 + num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            console.log("operação inválida!")
    }

    var result = document.querySelector("#resultado");
    result.innerHTML=resultado;
}