console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Kevin', 'Pedro', 'Breno');
console.log(aprovados);

aprovados = ['Kevin', 'Pedro', 'Breno']
console.log(aprovados[0]); // aqui retornara kevin
console.log(aprovados[1]); // aqui retornara pedro
console.log(aprovados[2]); // aqui retornara breno
console.log(aprovados[3]); // aqui retornara undefined pois esse array não existe o elemento na 4 posição

// para adicionando a um elemento que já existe 
aprovados[3] = 'Carlos';

aprovados[9] = 'agora'; // ira adicionar porem vai ficar com elementos vazios pois não existe uma posição 5 apenas ate a 4 e ao adicionar a 9 isso ddeixara que o resntante ira ficar indefined

// para adicionar um novo elemento
aprovados.push('kevin 2');
console.log(aprovados.length);
console.log(aprovados);

// metodo splice pode tanto deletar uma posicao no array como adicionar 
// primeiro parametro é o indice, o segundo é quantidade quer excluir apartir daquele indice

// metodo para remover um elemento
aprovados = [ '1', '2', '3'];
aprovados.splice(1, 1, '2')
console.log(aprovados);

// metodo para adicionar um elemneto 
aprovados = [ '1', '2', '3'];
aprovados.splice(1, 0, '4', '4')
console.log(aprovados);

console.log(aprovados);
aprovados.sort() // ele organiza o array, ele altera a posicao do array
console.log(aprovados);
/*
[ '1', '4', '4', '2', '3' ] esta assim 
[ '1', '2', '3', '4', '4' ] e ficou assim
*/