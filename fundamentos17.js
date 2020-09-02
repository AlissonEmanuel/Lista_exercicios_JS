/* Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calculaReajuste(plano, SalarioAtual) {
    switch (plano) {
        case 'A':
            return SalarioAtual * 1.1
        case 'B':
            return SalarioAtual * 1.15
        case 'C':
            return SalarioAtual * 1.2
        default:
            return 'Plano Invalido'
    }
}

console.log(calculaReajuste('A', 1000))
console.log(calculaReajuste('A', 1045))

console.log(calculaReajuste('B', 1000))
console.log(calculaReajuste('B', 1045))

console.log(calculaReajuste('C', 1000))
console.log(calculaReajuste('C', 1045))

console.log(calculaReajuste('D', 1045))
console.log(calculaReajuste('D', 1000))
