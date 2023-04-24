// usando a notação literal
const Obj1 = {}
console.log(Obj1);

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

// Funções construtoras
function produto(noem, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2999, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());