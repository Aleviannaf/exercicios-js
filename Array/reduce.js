const alunos = [
    {nome: 'Alexandre', nota: 9.9, bolsista: true},
    {nome: 'Ieda', nota: 9.5, bolsista: false},
    {nome:'Matheus', nota: 9.5, bolsista: false},
    {nome: 'Carlos', nota: 6.0, bolsista: true}
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) =>{
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)