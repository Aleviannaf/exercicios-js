function criarProduto(nome, preco){
    return{
        nome,
        preco
    }
}

const arroz = criarProduto('Arroz', 12.4)
console.log(arroz)
console.log( typeof arroz)