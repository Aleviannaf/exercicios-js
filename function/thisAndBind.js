const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}


pessoa.falar()

const falar = pessoa.falar
falar() // não aponta mais então é undefined

const falaDePessoa = pessoa.falar.bind(pessoa) //passa um objeto que quer que amarre a função

falaDePessoa() //agora funciona

