/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5 */

let vetor = [1, 2, 3, 4, 5,6,7,8,9,10]

function multiplicaVetor(vetor, multiplicador) {
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });
    return vetorResultado
}
console.log(multiplicaVetor(vetor, 1))
console.log(multiplicaVetor(vetor, 2))
console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetor(vetor, 4))
console.log(multiplicaVetor(vetor, 5))
console.log(multiplicaVetor(vetor, 6))
console.log(multiplicaVetor(vetor, 7))
console.log(multiplicaVetor(vetor, 8))
console.log(multiplicaVetor(vetor, 9))
console.log(multiplicaVetor(vetor, 10))