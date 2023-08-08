"use strict";

var alunos = [{
  nome: 'Jean',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Yasmin',
  nota: 3
}, {
  nome: 'José',
  nota: 6
}, {
  nome: 'Carlos',
  nota: 8
}, {
  nome: 'Roberto',
  nota: 6
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunos);
console.log(alunosAprovados);