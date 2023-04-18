let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


// dois !! é verdadeiro  ! Negação 
isAtivo = 1;
console.log(!!isAtivo);

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Pra finalizar...');
console.log(!!('' || null || 0 || ''));

let nome = 'Kevin';
console.log(nome || 'Desconhecido');
