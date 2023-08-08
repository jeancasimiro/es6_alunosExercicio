const alunos = [
    { nome: 'Jean', nota: 7},
    { nome: 'Maria', nota: 5},
    { nome: 'Yasmin', nota: 3},
    { nome: 'José', nota: 6},
    { nome: 'Carlos', nota: 8},
    { nome: 'Roberto', nota: 6}
]

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados)