class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(Pessoa)

function Pessoa1(nome) {
    return {
        falar: () => {
            console.log(`My name is ${nome}`)
        }
    }
}

const p2 = Pessoa1('Alexandre')
p2.falar()
console.log(typeof Pessoa1)

// função construtora

function Pessoa2(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`nome é ${nome}`)
    }
}

const p3 = new Pessoa2('Thiago')
p3.falar()