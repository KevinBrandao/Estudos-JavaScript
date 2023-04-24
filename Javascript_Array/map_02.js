const carrinho = [
    '{ "nome": "b1", "preco": 2}',
    '{ "nome": "b2", "preco": 3}',
    '{ "nome": "b3", "preco": 4}',
    '{ "nome": "b4", "preco": 5}'
];

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);

