//Object.preventExtensions
//bloqueia a extensão do objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))//verifica se é extensivo

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag 
console.log(produto)

//Object.seal
// não consegue add nem excluir, mas consegue alterar
const pessoa = {nome: 'Ale', idade: 35}
Object.seal(pessoa)
console.log('Selado:' , Object.isSealed(pessoa))

pessoa.sobrenome = 'Vianna'
pessoa.idade = 22
delete pessoa.nome
console.log(pessoa)

//Object.freeze = selado + constantes