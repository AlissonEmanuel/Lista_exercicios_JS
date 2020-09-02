/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos fruta aqui.. :(')
            break
        case 'kiwi':
            console.log('Produto em Escassez')
            break
        case 'melancia':
            console.log('Temos, 3reais o KG')
            break
        default:
            console.log('Erro, fruta invalida')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')
venderFruta('salsicha')
venderFruta('agua')
