const alunos = [
    {nome: 'A1', nota: 5.4, bolsista: false},
    {nome: 'A2', nota: 6.4, bolsista: true},
    {nome: 'A3', nota: 7.4, bolsista: false},
    {nome: 'A4', nota: 8.4, bolsista: true},
];

// Desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));