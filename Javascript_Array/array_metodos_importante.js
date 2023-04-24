const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // metodo pop() remove a utima posição do array
console.log(pilotos);


pilotos.push('Verstappen') // metodo push() adiciona item no array
console.log(pilotos); 

pilotos.shift() // remove o primeiro elemnto da lista
console.log(pilotos);

pilotos.unshift('kevin') // o metodo unshift adiciona um elemento na posicao [0]  de um array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar pelo metodo splice
pilotos.splice(2, 0, 'Bottas', 'mazssa')
console.log(pilotos);

// remover pelo metodo splice
pilotos.splice(3, 1) 
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Criar um novo array apartir do paramentro/indice passado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // pegar do primeiro parametro 1 ao 3 pois ele vai 4 entao ele pega um antes do final
console.log(algunsPilotos2);