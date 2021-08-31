const moduloA = require('../../moduloA')
//const moduloA = require('/home/alexandre/Documentos/Repositorio/exercicios-js/node/moduloA.js')

console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(3000)

//npm i --save axios
//pesquisar o que axios