const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapiz", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

let resultObj = json=> JSON.parse(json)
let resultPreco = produto => produto.preco

let resultado = carrinho.map(resultObj).map(resultPreco)
console.log(resultado)
