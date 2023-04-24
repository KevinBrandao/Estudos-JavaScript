// Pessoa -> 123 -> {...}
const pessoa = {nome: 'Kevin'};
pessoa.nome = 'Kaka'
console.log(pessoa);

// Erro no objeto ao tentar colocar um novo parametro já existente
// pessoa -> 233 -> {...}
// pessoa = {nome: 'queijo'}

// função a freeze congela o a constante pessoa para não poder mudar
Object.freeze(pessoa);

pessoa.nome = 'limaõ'
console.log(pessoa.nome); // no final me trouxe o kaka por conta do metodo do freeze