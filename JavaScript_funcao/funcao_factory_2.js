function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
        modelo: 'modelo'
    }
}

console.log(criarProduto('notebook', 21232, 'acer'));
console.log(criarProduto('celular', 123, 'acer'));