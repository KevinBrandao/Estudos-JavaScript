const valores = [7.1, 8.1, 9.1, 4.5];
console.log(valores[0], valores[3]);

//Quando não exite no array ele apenas vai colocar como undefined
console.log(valores[4]);

//recebendo um novo valor
valores[4] = 14;
console.log(valores);
// length conta quantidade de itens dentro de um array
console.log(valores.length);

//push adicionar novos elemntos no array
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// remover valores dentro de um array
console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
