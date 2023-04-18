
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1201
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);


// desestruturar por meio de um array
const [a] = [10];
console.log(a);

const [n1, n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6);

