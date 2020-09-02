/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

function numerosNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}
vetor = [20, 3, 5, 78, 49, 99, 100, -5, -2, -50, 7, -4,-1]
console.log(numerosNegativos(vetor))
