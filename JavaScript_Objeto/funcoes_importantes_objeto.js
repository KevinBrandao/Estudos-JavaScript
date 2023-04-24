const pessoa = {
    nome: 'kevin',
    idade: 25,
    peso: 110
}

console.log(Object.keys(pessoa)); // recebe as chaves
console.log(Object.values(pessoa)); // recebe os valores da chave
console.log(Object.entries(pessoa)); // os registros faz uma array dentro de outro array

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'daraNascimento', {
    enumerable: true,
    writabl: false,
    value: '01/01/2023'
})

pessoa.dataNascimento = '01/02/2023'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assing (ECMAScript 2015)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3};
const obj = Object.assign(dest, o1, o2); // nesse metodo ele ira concatenar todos os objetos dentro de desc 

console.log(obj);
