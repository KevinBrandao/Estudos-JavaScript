const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c} //nesse exemplo é posivel alterar os valores da constante
const obj2 = {a, b, c} // Nesse caso ele não pode ser alterado e receber o valor direto da constante
console.log(obj1, obj2);