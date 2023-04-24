// flatmap a ideia é ter uma matris e achartar tudo dentro de um array

const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Kevin',
        nota: 8.1
    }, {
        nome: 'Igor',
        nota: 9.1
    }]
}, {
    nome: 'Turma 2',
    alunos: [{
        nome: 'Kaka',
        nota: 8.1
    }, {
        nome: 'ronaldo',
        nota: 9.1
    }]
}]

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([1.8, 8.8], [8.4, 6.2]));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);