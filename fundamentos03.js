/*  Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente.
*/

function expoente(base, expoente){
//Método antigo 
let resultado = Math.pow(base, expoente)

//Método novo
resultado = base ** expoente
return resultado
}

console.log(expoente(2,3))
console.log(expoente(4,5))
console.log(expoente(9,4))
console.log(expoente(6,3))