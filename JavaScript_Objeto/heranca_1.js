const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__pronto__);
console.log(ferrari.__pronto__ === Object.prototype);
console.log(volvo.__pronto__ === Object.prototype);
console.log(Object.prototype.__pronto__);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);