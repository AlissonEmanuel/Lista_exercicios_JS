//) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(numero){
    if(numero == 0){
        return 1
    }else{
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
console.log(fatorial(13))
