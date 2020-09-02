/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function verificaNumero(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaNumero(5))
console.log(verificaNumero(15))
console.log(verificaNumero(50))
console.log(verificaNumero(12))