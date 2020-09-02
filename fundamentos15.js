/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

function escolherCarro(modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra realizada com sucesso'
        case 'sedan':
        case 'moto':
        case 'onibus':
        case 'caminhao':
        case 'esportivo':
        case 'formula1':
            return 'Tem certeza???'
        default:
            return 'não trabalhamos com este tipo de automovel'
    }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));
console.log(escolherCarro('aviao'));
console.log(escolherCarro('helicoptero'));
console.log(escolherCarro('jato'));
console.log(escolherCarro('onibus'));


