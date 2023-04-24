const produtos = [
    {nome: "b1", preco: 2.3, fragil: true},
    {nome: "b2", preco: 3.3, fragil: true},
    {nome: "b3", preco: 4.3, fragil: true},
    {nome: "b4", preco: 5.3, fragil: true},
];

console.log(produtos.filter(function(p) {
    return p.preco > 3;
}))

const caro =  produto => produto.preco >= 3;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));