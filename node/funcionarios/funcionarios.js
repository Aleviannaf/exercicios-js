// usei o npm init -y
//npm i --save axios (importei o axios)

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //peguei a url
const axios = require('axios') //importei o axios

const cheneses = dados => dados.pais === 'China'
const feminino = dados => dados.genero === 'F'
const menorSalario = (func, funAtual) => {
    return func.salario < funAtual.salario ? func : funAtual
}


//quando o metodo retonar chama o then
axios.get(url).then(response => {
    const funcionarios = response.data //com isso faço funcionarios receber os dados do json que ta em data
    console.log(funcionarios.filter(cheneses)
                            .filter(feminino)
                            .reduce(menorSalario))

    
    
})       

