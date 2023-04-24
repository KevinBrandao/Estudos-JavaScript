// Map se utiliza para trasformar um array em outro, o array original tem o tamanho x e o novo tem que ter o mesmo x
// Map não mexe com o array original, apenas com o novo array 

const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2;
}) 

console.log(resultado);


const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(triplo).map(soma10).map(paraDinheiro)
console.log(resultado);

