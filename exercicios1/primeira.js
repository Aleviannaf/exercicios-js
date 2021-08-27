//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
//subtração, multiplicação e divisão desses valores. 

const calculadora = (n1=0, n2=0) => {
    console.log(`A soma: ${n1 + n2}, a subtração: ${n1 - n2},
a multiplicação: ${n1 *n2}, e divisão: ${n1/n2}`)
}

calculadora(2,5)