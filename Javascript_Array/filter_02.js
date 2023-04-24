Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    {nome: "b1", preco: 2.3, fragil: true},
    {nome: "b2", preco: 3.3, fragil: true},
    {nome: "b3", preco: 4.3, fragil: true},
    {nome: "b4", preco: 5.3, fragil: true},
];

console.log(produtos.filter2(function(p) {
    return p.preco > 3;
}))

const caro =  produto => produto.preco >= 4;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));