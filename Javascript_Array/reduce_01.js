// Reduce para somar os valores

const alunos = [
    {nome: 'A1', nota: 5.4, bolsista: false},
    {nome: 'A2', nota: 6.4, bolsista: true},
    {nome: 'A3', nota: 7.4, bolsista: false},
    {nome: 'A4', nota: 8.4, bolsista: true},
];

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulado, atual) {
    console.log(acumulado, atual);
    return acumulado + atual
}, 0)

console.log(resultado);
