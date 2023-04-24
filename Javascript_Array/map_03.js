Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

const carrinho = [
    '{ "nome": "b1", "preco": 2.3}',
    '{ "nome": "b2", "preco": 3.5}',
    '{ "nome": "b3", "preco": 4.1}',
    '{ "nome": "b4", "preco": 5.9}'
];

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);

